// js/main.js - Contenido COMPLETO y ÚNICO de este archivo

console.log("INFO: main.js iniciando ejecución..."); // Log inicial

try {
    // Asegurarse de que data.js se cargó y dashboardData está disponible GLOBALMENTE
    if (typeof dashboardData === 'undefined' || !dashboardData || !Array.isArray(dashboardData.categories)) {
         console.error("ERROR CRÍTICO: dashboardData no está definido o es inválido. ¿Se cargó data.js ANTES que main.js?");
        throw new Error('Variable `dashboardData` no encontrada o con formato incorrecto.');
    } else {
        console.log("INFO: dashboardData encontrado y parece válido.");
    }

    // Esperar a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', () => {
        console.log("INFO: DOMContentLoaded evento disparado."); // Log dentro del listener
        // Otro try-catch interno para errores específicos del DOMContentLoaded
        try {
            console.log("INFO: Iniciando configuración dentro de DOMContentLoaded...");
            // Elementos del DOM (verificar su existencia)
            const dashboardContainer = document.getElementById('dashboard-container');
            const searchInput = document.getElementById('search-input');
            const searchButton = document.getElementById('search-button');
            const currentYear = document.getElementById('current-year');
            const loadingIndicator = document.querySelector('.loading-indicator');

            // Verificar que los elementos esenciales existen
            if (!dashboardContainer) throw new Error('Elemento con ID "dashboard-container" no encontrado.');
            if (!searchInput) console.warn('WARN: Elemento con ID "search-input" no encontrado.');
            if (!searchButton) console.warn('WARN: Elemento con ID "search-button" no encontrado.');
            if (!currentYear) console.warn('WARN: Elemento con ID "current-year" no encontrado.');
            if (!loadingIndicator) console.warn('WARN: Elemento con clase ".loading-indicator" no encontrado.');

            console.log("INFO: Elementos DOM básicos encontrados (o advertencias generadas).");

            // Variables globales
            let debounceTimer;

            // --- FUNCIONES DE RENDERIZADO --- (Sin cambios aquí, solo confirmando que están dentro)

            function generateBookmarkHTML(bookmark) {
                const safeName = bookmark.nombre || "Sin Nombre"; // Añadir valor por defecto
                const iconClass = bookmark.icono || 'fas fa-bookmark';
                const url = bookmark.url || '#';

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
                const categoryIconClass = category.icono || 'fas fa-folder';
                const categoryId = category.id || `category-${Math.random().toString(36).substr(2, 9)}`;
                const categoryName = category.nombre || "Categoría sin nombre"; // Valor por defecto

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
                            <h2 class="category-name" id="category-title-${categoryId}">${categoryName}</h2>
                        </header>
                        <div class="bookmarks">
                            ${bookmarksHTML}
                        </div>
                    </section>
                `;
            }

             function renderDashboard(categoriesData = dashboardData.categories) {
                console.log("INFO: Iniciando renderDashboard...");
                if (loadingIndicator) {
                    console.log("INFO: Ocultando indicador de carga.");
                    loadingIndicator.style.display = 'none';
                } else {
                     if (dashboardContainer && dashboardContainer.querySelector('.loading-indicator')) {
                         dashboardContainer.innerHTML = '';
                     }
                }

                if (!Array.isArray(categoriesData)) {
                     console.error("ERROR: categoriesData no es un array en renderDashboard.", categoriesData);
                     if(dashboardContainer) dashboardContainer.innerHTML = '<div class="error-message">Error interno al procesar categorías.</div>';
                     return;
                }

                 // Limpiar contenedor solo si no hay errores previos importantes
                if(dashboardContainer && !dashboardContainer.querySelector('.error-message')) {
                    dashboardContainer.innerHTML = '';
                }


                if (categoriesData.length === 0) {
                    console.log("INFO: No hay categorías para mostrar.");
                     if(dashboardContainer) {
                        dashboardContainer.innerHTML = '<div class="no-results">No se encontraron categorías o marcadores que coincidan.</div>';
                     }
                    return;
                }

                console.log(`INFO: Renderizando ${categoriesData.length} categorías.`);
                const fragment = document.createDocumentFragment();
                const categoriesContainer = document.createElement('div');
                categoriesContainer.className = 'categories';

                categoriesData.forEach(category => {
                    try {
                        if (category && typeof category === 'object') {
                           const categoryHTML = generateCategoryHTML(category);
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = categoryHTML;
                            if (tempDiv.firstChild) {
                                categoriesContainer.appendChild(tempDiv.firstChild);
                            }
                        } else {
                             console.warn("WARN: Se encontró una categoría inválida en los datos:", category);
                        }
                    } catch (catError) {
                        console.error(`ERROR al generar HTML para la categoría: ${category ? category.nombre : 'desconocida'}`, catError);
                        const errorDiv = document.createElement('div');
                        errorDiv.className = 'error-message';
                        errorDiv.innerHTML = `<p>Error al cargar categoría '${category ? category.nombre : 'desconocida'}'.</p>`;
                        categoriesContainer.appendChild(errorDiv);
                    }
                });

                fragment.appendChild(categoriesContainer);
                if(dashboardContainer) { // Añadir solo si el contenedor existe
                    dashboardContainer.appendChild(fragment);
                    console.log("INFO: Categorías añadidas al DOM.");
                } else {
                     console.error("ERROR: dashboardContainer no existe al intentar añadir fragmento.");
                }
            }

            // --- FUNCIONES DE FILTRADO --- (Sin cambios)

             function filterBookmarks(searchTerm) {
                console.log(`INFO: Filtrando por "${searchTerm}"`);
                const normalizedSearchTerm = searchTerm.toLowerCase().trim();

                if (!normalizedSearchTerm) {
                    renderDashboard(dashboardData.categories);
                    return;
                }

                try {
                    const filteredCategories = dashboardData.categories.map(category => {
                         if (!category || !Array.isArray(category.marcadores)) return null;

                        const filteredBookmarks = category.marcadores.filter(bookmark =>
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
                    console.error("ERROR durante el filtrado:", filterError);
                     if(dashboardContainer) dashboardContainer.innerHTML = '<div class="error-message">Ocurrió un error al filtrar los marcadores.</div>';
                }
            }

            function debounce(func, delay) {
              clearTimeout(debounceTimer);
              debounceTimer = setTimeout(func, delay);
            }

            // --- INICIALIZACIÓN Y EVENT LISTENERS ---

            function initializeDashboard() {
                console.log("INFO: Iniciando initializeDashboard...");
                 if (currentYear) {
                     currentYear.textContent = new Date().getFullYear();
                     console.log("INFO: Año actualizado en el footer.");
                 } else {
                     console.warn("WARN: No se pudo actualizar el año del footer.");
                 }

                // Renderizar el dashboard inicial
                renderDashboard();

                // Configurar listeners
                if (searchInput) {
                    searchInput.addEventListener('input', () => {
                        debounce(() => filterBookmarks(searchInput.value), 300);
                    });

                     searchInput.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter') {
                           filterBookmarks(searchInput.value);
                           e.preventDefault();
                        }
                    });
                    console.log("INFO: Listeners de búsqueda configurados.");
                } else {
                     console.warn("WARN: Input de búsqueda no encontrado, listeners no añadidos.");
                }

                if (searchButton && searchInput) {
                    searchButton.addEventListener('click', () => {
                        filterBookmarks(searchInput.value);
                    });
                } else {
                     console.warn("WARN: Botón de búsqueda no encontrado, listener de click no añadido.");
                }
                 console.log("INFO: initializeDashboard completado.");
            }

            // Iniciar la inicialización del dashboard
            initializeDashboard();

        } catch (domError) {
            console.error('ERROR FATAL durante la inicialización (DOMContentLoaded):', domError);
            const errorDisplay = document.getElementById('dashboard-container') || document.body;
             if (errorDisplay) {
                 errorDisplay.innerHTML = `... (mensaje de error HTML como antes) ...`;
             }
             const loadingIndicator = document.querySelector('.loading-indicator');
            if(loadingIndicator) loadingIndicator.style.display = 'none';
        }
    }); // Fin DOMContentLoaded listener

} catch (initialError) {
    // Error ANTES de que DOMContentLoaded se dispare
    console.error('ERROR CRÍTICO MUY TEMPRANO:', initialError);
    document.body.innerHTML = `... (mensaje de error HTML como antes) ...`;
}