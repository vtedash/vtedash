// Envolver todo en un bloque try-catch para capturar errores de inicialización temprana
try {
    // Asegurarse de que data.js se cargó y dashboardData está disponible GLOBALMENTE
    if (typeof dashboardData === 'undefined' || !dashboardData || !Array.isArray(dashboardData.categories)) {
        throw new Error('Variable `dashboardData` no encontrada o con formato incorrecto. Asegúrate de que `js/data.js` se carga ANTES que `main.js` y no tiene errores.');
    }

    // Esperar a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', () => {
        // Otro try-catch interno para errores específicos del DOMContentLoaded
        try {
            // Elementos del DOM (verificar su existencia)
            const dashboardContainer = document.getElementById('dashboard-container');
            const searchInput = document.getElementById('search-input');
            const searchButton = document.getElementById('search-button');
            const currentYear = document.getElementById('current-year');
            const loadingIndicator = document.querySelector('.loading-indicator');

            // Verificar que los elementos esenciales existen
            if (!dashboardContainer) throw new Error('Elemento con ID "dashboard-container" no encontrado.');
            if (!searchInput) console.warn('Elemento con ID "search-input" no encontrado.'); // Advertencia, no error fatal
            if (!searchButton) console.warn('Elemento con ID "search-button" no encontrado.');// Advertencia
            if (!currentYear) console.warn('Elemento con ID "current-year" no encontrado.'); // Advertencia
            if (!loadingIndicator) console.warn('Elemento con clase ".loading-indicator" no encontrado.'); // Advertencia

            // Variables globales
            let debounceTimer;

            // --- FUNCIONES DE RENDERIZADO ---

            function generateBookmarkHTML(bookmark) {
                const safeName = bookmark.nombre;
                const iconClass = bookmark.icono || 'fas fa-bookmark'; // Icono por defecto
                const url = bookmark.url || '#'; // URL por defecto si falta

                return `
                    <a href="${url}" class="bookmark" target="_blank" rel="noopener noreferrer" title="${safeName}">
                        <div class="bookmark-icon" aria-hidden="true">
                            <i class="${iconClass}"></i>
                        </div>
                        <span class="bookmark-name">${safeName}</span>
                    </a>
                `;
            }

            function generateCategoryHTML(category) {
                const categoryIconClass = category.icono || 'fas fa-folder'; // Icono por defecto
                const categoryId = category.id || `category-${Math.random().toString(36).substr(2, 9)}`; // ID por defecto si falta

                // Validar que marcadores sea un array
                const bookmarksArray = Array.isArray(category.marcadores) ? category.marcadores : [];

                const bookmarksHTML = bookmarksArray.length > 0
                    ? bookmarksArray.map(generateBookmarkHTML).join('')
                    : '<p class="no-bookmarks-message">No hay marcadores en esta categoría.</p>';

                return `
                    <section class="category" data-category-id="${categoryId}" aria-labelledby="category-title-${categoryId}">
                        <header class="category-header">
                             <div class="category-icon" aria-hidden="true">
                                <i class="${categoryIconClass}"></i>
                            </div>
                            <h2 class="category-name" id="category-title-${categoryId}">${category.nombre || 'Sin Título'}</h2>
                        </header>
                        <div class="bookmarks">
                            ${bookmarksHTML}
                        </div>
                    </section>
                `;
            }

            function renderDashboard(categoriesData = dashboardData.categories) {
                 // Ocultar indicador de carga
                if (loadingIndicator) {
                    loadingIndicator.style.display = 'none';
                } else {
                    // Si no hay indicador, limpiar igualmente por si acaso
                     if (dashboardContainer.querySelector('.loading-indicator')) {
                         dashboardContainer.innerHTML = '';
                     }
                }

                 // Asegurar que categoriesData es un array antes de proceder
                if (!Array.isArray(categoriesData)) {
                     console.error("Error: categoriesData no es un array en renderDashboard.", categoriesData);
                     dashboardContainer.innerHTML = '<div class="error-message">Error interno al procesar categorías.</div>';
                     return; // Salir si los datos son inválidos en este punto
                }

                // Limpiar contenedor existente SOLO si no está mostrando ya un error/mensaje
                if (!dashboardContainer.querySelector('.error-message') && !dashboardContainer.querySelector('.no-results')) {
                    dashboardContainer.innerHTML = '';
                }


                if (categoriesData.length === 0) {
                    // Si el contenedor está vacío o tenía el spinner, mostrar mensaje "no resultados"
                     if (dashboardContainer.innerHTML === '' || dashboardContainer.querySelector('.loading-indicator')) {
                        dashboardContainer.innerHTML = '<div class="no-results">No se encontraron categorías o marcadores que coincidan.</div>';
                     } else if (!dashboardContainer.querySelector('.no-results')){
                         // Si ya había contenido y la búsqueda no da resultados, añadir el mensaje
                         const noResultsDiv = document.createElement('div');
                         noResultsDiv.className = 'no-results';
                         noResultsDiv.textContent = 'No se encontraron categorías o marcadores que coincidan con tu búsqueda.';
                         // Insertar antes del contenido existente o al final si no hay nada más
                         const firstChild = dashboardContainer.firstChild;
                         if (firstChild) {
                            dashboardContainer.insertBefore(noResultsDiv, firstChild);
                         } else {
                            dashboardContainer.appendChild(noResultsDiv);
                         }
                     }
                    return;
                }

                // Crear fragmento y contenedor de categorías
                const fragment = document.createDocumentFragment();
                const categoriesContainer = document.createElement('div');
                categoriesContainer.className = 'categories';

                // Usar try-catch dentro del bucle para aislar errores por categoría/marcador
                categoriesData.forEach(category => {
                    try {
                        if (category && typeof category === 'object') { // Verificar que la categoría sea válida
                           const categoryHTML = generateCategoryHTML(category);
                            // Crear un elemento temporal para añadir el HTML de forma segura
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = categoryHTML;
                            if (tempDiv.firstChild) {
                                categoriesContainer.appendChild(tempDiv.firstChild);
                            }
                        } else {
                             console.warn("Se encontró una categoría inválida en los datos:", category);
                        }
                    } catch (catError) {
                        console.error(`Error al generar HTML para la categoría: ${category ? category.nombre : 'desconocida'}`, catError);
                        // Opcional: añadir un marcador de error para esta categoría específica
                        const errorDiv = document.createElement('div');
                        errorDiv.className = 'error-message';
                        errorDiv.innerHTML = `<p>Error al cargar categoría '${category ? category.nombre : 'desconocida'}'.</p>`;
                        categoriesContainer.appendChild(errorDiv);
                    }
                });

                 // Limpiar el contenedor principal ANTES de añadir el nuevo contenido
                 dashboardContainer.innerHTML = '';
                fragment.appendChild(categoriesContainer);
                dashboardContainer.appendChild(fragment);
            }

            // --- FUNCIONES DE FILTRADO ---

            function filterBookmarks(searchTerm) {
                const normalizedSearchTerm = searchTerm.toLowerCase().trim();

                if (!normalizedSearchTerm) {
                    renderDashboard(dashboardData.categories);
                    return;
                }

                try {
                    const filteredCategories = dashboardData.categories.map(category => {
                         // Asegurarse que category y category.marcadores existen y son arrays
                         if (!category || !Array.isArray(category.marcadores)) return null;

                        const filteredBookmarks = category.marcadores.filter(bookmark =>
                             // Asegurarse que bookmark, nombre y url existen
                             bookmark && typeof bookmark.nombre === 'string' && typeof bookmark.url === 'string' &&
                             (bookmark.nombre.toLowerCase().includes(normalizedSearchTerm) ||
                              bookmark.url.toLowerCase().includes(normalizedSearchTerm))
                        );

                        if (filteredBookmarks.length > 0) {
                            return { ...category, marcadores: filteredBookmarks };
                        }
                        return null;
                    }).filter(Boolean);

                    renderDashboard(filteredCategories);
                } catch (filterError) {
                    console.error("Error durante el filtrado:", filterError);
                    dashboardContainer.innerHTML = '<div class="error-message">Ocurrió un error al filtrar los marcadores.</div>';
                }
            }

            function debounce(func, delay) {
              clearTimeout(debounceTimer);
              debounceTimer = setTimeout(func, delay);
            }

            // --- INICIALIZACIÓN Y EVENT LISTENERS ---

            function initializeDashboard() {
                // Mover la actualización del año aquí DENTRO del try/catch de DOMContentLoaded
                 if (currentYear) {
                     currentYear.textContent = new Date().getFullYear();
                 } else {
                     console.warn("No se pudo actualizar el año del footer: elemento #current-year no encontrado.");
                 }

                // Renderizar el dashboard inicial (los datos ya se validaron al principio)
                renderDashboard();

                // Configurar listeners (solo si los elementos existen)
                if (searchInput) {
                    searchInput.addEventListener('input', () => {
                        debounce(() => filterBookmarks(searchInput.value), 300);
                    });

                     // Keypress para Enter (mejor que keyup para esto)
                     searchInput.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter') {
                           filterBookmarks(searchInput.value);
                           e.preventDefault();
                        }
                    });
                } else {
                     console.warn("Input de búsqueda no encontrado, la funcionalidad de búsqueda no estará disponible.");
                }

                if (searchButton && searchInput) {
                    searchButton.addEventListener('click', () => {
                        filterBookmarks(searchInput.value);
                    });
                } else {
                     console.warn("Botón de búsqueda no encontrado, el click en el botón no funcionará.");
                }
            }

            // Iniciar la inicialización del dashboard
            initializeDashboard();

        } catch (domError) {
            console.error('Error durante la inicialización (DOMContentLoaded):', domError);
            // Intentar mostrar error en el contenedor si existe, si no en el body
            const errorDisplay = document.getElementById('dashboard-container') || document.body;
             if (errorDisplay) {
                 errorDisplay.innerHTML = `
                     <div class="error-message" style="padding: 2rem; text-align: center;">
                         <h2><i class="fas fa-exclamation-triangle"></i> Error Crítico al Cargar Dashboard</h2>
                         <p>No se pudo inicializar correctamente la aplicación.</p>
                         <p><strong>Detalle:</strong> ${domError.message}</p>
                         <p><em>Por favor, revisa la consola del desarrollador (F12) para más información.</em></p>
                     </div>`;
             }
             // Ocultar spinner si existe y no se pudo reemplazar el contenido
            const loadingIndicator = document.querySelector('.loading-indicator');
            if(loadingIndicator) loadingIndicator.style.display = 'none';
        }
    });

} catch (initialError) {
    // Error ANTES de que DOMContentLoaded se dispare (ej. error en data.js o este script)
    console.error('Error MUY temprano en la ejecución del script:', initialError);
    // Intenta mostrar un error básico directamente en el body como último recurso
    document.body.innerHTML = `
        <div style="padding: 20px; color: red; border: 2px solid red; margin: 20px; font-family: sans-serif;">
            <h1>Error Crítico</h1>
            <p>No se pudo cargar el script principal del dashboard.</p>
            <p><strong>Detalle:</strong> ${initialError.message}</p>
            <p>Verifica que los archivos JavaScript ('data.js', 'main.js') existan, estén en las rutas correctas y no contengan errores de sintaxis. Revisa la consola del desarrollador (F12).</p>
        </div>`;
}
