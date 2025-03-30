// js/main.js - Contenido COMPLETO y ÚNICO de este archivo

console.log("INFO: main.js iniciando ejecución..."); // Log inicial

try {
    // Asegurarse de que data.js se cargó y dashboardData está disponible GLOBALMENTE
    // Esta verificación se ejecuta ANTES de DOMContentLoaded si main.js no tiene 'defer'
    // o justo al inicio si tiene 'defer'.
    if (typeof dashboardData === 'undefined' || !dashboardData || !Array.isArray(dashboardData.categories)) {
         console.error("ERROR CRÍTICO TEMPRANO: dashboardData no está definido o es inválido.");
        throw new Error('Variable `dashboardData` no encontrada o con formato incorrecto. Asegúrate de que `js/data.js` se carga ANTES que `main.js` y no tiene errores.');
    } else {
        console.log("INFO: Verificación inicial de dashboardData: OK.");
    }

    // Esperar a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', () => {
        console.log("INFO: DOMContentLoaded evento disparado.");
        // Try-catch interno para errores específicos del DOMContentLoaded
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

            // --- FUNCIONES DE RENDERIZADO ---

            function generateBookmarkHTML(bookmark) {
                // Validar bookmark y propiedades mínimas
                if (!bookmark || typeof bookmark !== 'object') return ''; // Ignorar marcadores inválidos
                const safeName = typeof bookmark.nombre === 'string' ? bookmark.nombre : "Sin Nombre";
                const iconClass = typeof bookmark.icono === 'string' ? bookmark.icono : 'fas fa-bookmark';
                const url = typeof bookmark.url === 'string' ? bookmark.url : '#';

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
                 // Validar categoría y propiedades mínimas
                 if (!category || typeof category !== 'object') return ''; // Ignorar categorías inválidas
                const categoryIconClass = typeof category.icono === 'string' ? category.icono : 'fas fa-folder';
                const categoryId = typeof category.id === 'string' ? category.id : `category-${Math.random().toString(36).substr(2, 9)}`;
                const categoryName = typeof category.nombre === 'string' ? category.nombre : "Categoría sin nombre";

                const bookmarksArray = Array.isArray(category.marcadores) ? category.marcadores : [];

                // Filtrar marcadores inválidos antes de mapear
                const validBookmarksHTML = bookmarksArray
                    .filter(bm => bm && typeof bm === 'object')
                    .map(generateBookmarkHTML)
                    .join('');

                const bookmarksHTML = validBookmarksHTML.length > 0
                    ? validBookmarksHTML
                    : '<p class="no-bookmarks-message">No hay marcadores válidos en esta categoría.</p>';

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

            // *** VERSIÓN REFINADA DE renderDashboard ***
             function renderDashboard(categoriesData = dashboardData.categories) {
                console.log("INFO: [renderDashboard] Iniciando...");

                // ---- PASO 1: Asegurarse que el contenedor existe ----
                if (!dashboardContainer) {
                    console.error("ERROR FATAL: [renderDashboard] dashboardContainer es null.");
                    return;
                }

                // ---- PASO 2: Ocultar indicador de carga (si existe) ----
                if (loadingIndicator) {
                    console.log("INFO: [renderDashboard] Ocultando indicador de carga.");
                    loadingIndicator.style.display = 'none';
                }

                 // ---- PASO 3: Limpiar el contenedor SIEMPRE antes de añadir nuevo contenido ----
                 console.log("INFO: [renderDashboard] Limpiando dashboardContainer...");
                 dashboardContainer.innerHTML = ''; // Limpieza directa y simple
                 console.log("INFO: [renderDashboard] dashboardContainer limpiado.");

                 // ---- PASO 4: Validar datos ----
                 // Usar dashboardData.categories si categoriesData no es un array válido
                 let dataToRender = Array.isArray(categoriesData) ? categoriesData : dashboardData.categories;
                 if (!Array.isArray(dataToRender)) {
                     console.error("ERROR: [renderDashboard] No hay datos de categorías válidos para renderizar.");
                     dashboardContainer.innerHTML = '<div class="error-message">Error: No se pudieron cargar los datos de las categorías.</div>';
                     return;
                 }


                // ---- PASO 5: Manejar caso sin resultados ----
                if (dataToRender.length === 0) {
                    console.log("INFO: [renderDashboard] No hay categorías para mostrar (datos vacíos o filtrados).");
                    dashboardContainer.innerHTML = '<div class="no-results">No se encontraron categorías o marcadores que coincidan.</div>';
                    return;
                }

                 // ---- PASO 6: Generar y añadir nuevo contenido ----
                console.log(`INFO: [renderDashboard] Preparando ${dataToRender.length} categorías para renderizar.`);
                const fragment = document.createDocumentFragment();
                const categoriesContainer = document.createElement('div');
                categoriesContainer.className = 'categories'; // Asegurar que la clase se aplica

                dataToRender.forEach(category => {
                    try {
                        const categoryHTML = generateCategoryHTML(category);
                        if (categoryHTML) { // Añadir solo si se generó HTML válido
                            const tempDiv = document.createElement('div'); // Usar div temporal para parsear
                            tempDiv.innerHTML = categoryHTML.trim(); // trim() por si acaso
                            if (tempDiv.firstChild) {
                                categoriesContainer.appendChild(tempDiv.firstChild);
                            } else {
                                 console.warn(`WARN: [renderDashboard] Se generó HTML vacío para la categoría:`, category);
                            }
                        } else {
                             console.warn(`WARN: [renderDashboard] Se ignoró categoría inválida:`, category);
                        }
                    } catch (catError) {
                        console.error(`ERROR: [renderDashboard] Error generando HTML para categoría ${category ? category.nombre : 'desconocida'}`, catError);
                        // Opcional: añadir marcador de error para esta categoría específica
                        // const errorDiv = document.createElement('div'); ...
                    }
                });

                // Verificar si se generó algo para añadir
                if (categoriesContainer.children.length === 0) {
                     console.warn("WARN: [renderDashboard] No se generaron elementos de categoría válidos para añadir al DOM.");
                     dashboardContainer.innerHTML = '<div class="no-results">No hay contenido de categorías para mostrar.</div>';
                     return; // No añadir un div .categories vacío
                }

                fragment.appendChild(categoriesContainer);
                console.log("INFO: [renderDashboard] Fragmento listo. Añadiendo al DOM...");

                // *** EL MOMENTO CRÍTICO ***
                dashboardContainer.appendChild(fragment);

                // ---- PASO 7: Verificar el DOM DESPUÉS de añadir ----
                console.log("INFO: [renderDashboard] Contenido AÑADIDO a dashboardContainer.");

                // Verificar si el contenedor .categories realmente está en el DOM y tiene hijos
                const checkCategories = dashboardContainer.querySelector('.categories');
                if (!checkCategories) {
                     console.error("ERROR CRÍTICO: [renderDashboard] ¡'.categories' NO se encontró en dashboardContainer DESPUÉS de appendChild!");
                } else if (checkCategories.children.length === 0) {
                     console.error("ERROR CRÍTICO: [renderDashboard] ¡'.categories' está en el DOM pero está VACÍO después de appendChild!");
                } else {
                     console.log(`INFO: [renderDashboard] Verificación POST-renderizado OK: '.categories' encontrado con ${checkCategories.children.length} hijos.`);
                }
                 console.log("INFO: [renderDashboard] Finalizado.");
            } // Fin renderDashboard


            // --- FUNCIONES DE FILTRADO ---

             function filterBookmarks(searchTerm) {
                console.log(`INFO: [filterBookmarks] Filtrando por "${searchTerm}"`);
                const normalizedSearchTerm = searchTerm.toLowerCase().trim();

                // Obtener las categorías base para filtrar (asegurarse que es un array)
                const baseCategories = Array.isArray(dashboardData?.categories) ? dashboardData.categories : [];

                if (!normalizedSearchTerm) {
                    renderDashboard(baseCategories); // Mostrar todo si no hay búsqueda
                    return;
                }

                try {
                    const filteredCategories = baseCategories.map(category => {
                         // Validar categoría y marcadores
                         if (!category || !Array.isArray(category.marcadores)) return null;

                        const filteredBookmarks = category.marcadores.filter(bookmark =>
                             // Validar marcador y propiedades antes de filtrar
                             bookmark && typeof bookmark.nombre === 'string' && typeof bookmark.url === 'string' &&
                             (bookmark.nombre.toLowerCase().includes(normalizedSearchTerm) ||
                              bookmark.url.toLowerCase().includes(normalizedSearchTerm))
                        );

                        if (filteredBookmarks.length > 0) {
                             // Devolver copia de la categoría con SOLO los marcadores filtrados
                            return { ...category, marcadores: filteredBookmarks };
                        }
                        return null; // Esta categoría no tiene coincidencias
                    }).filter(Boolean); // Eliminar los null

                    renderDashboard(filteredCategories); // Renderizar las categorías filtradas
                } catch (filterError) {
                    console.error("ERROR: [filterBookmarks] Error durante el filtrado:", filterError);
                     if(dashboardContainer) dashboardContainer.innerHTML = '<div class="error-message">Ocurrió un error al filtrar los marcadores.</div>';
                }
            } // Fin filterBookmarks


            function debounce(func, delay) {
              clearTimeout(debounceTimer);
              debounceTimer = setTimeout(func, delay);
            } // Fin debounce


            // --- INICIALIZACIÓN Y EVENT LISTENERS ---

            function initializeDashboard() {
                console.log("INFO: [initializeDashboard] Iniciando...");
                 if (currentYear) {
                     try { // Añadir try-catch aquí también por si acaso
                         currentYear.textContent = new Date().getFullYear();
                         console.log("INFO: [initializeDashboard] Año actualizado en el footer.");
                     } catch (yearError) {
                          console.error("ERROR: [initializeDashboard] Error al actualizar el año:", yearError);
                     }
                 } else {
                     console.warn("WARN: [initializeDashboard] No se pudo actualizar el año del footer (elemento no encontrado).");
                 }

                // Renderizar el dashboard inicial
                // Asegurarse que dashboardData.categories existe antes de llamar
                if (Array.isArray(dashboardData?.categories)) {
                    renderDashboard();
                } else {
                     console.error("ERROR: [initializeDashboard] dashboardData.categories no es un array válido. No se puede renderizar inicialmente.");
                      if(dashboardContainer) dashboardContainer.innerHTML = '<div class="error-message">Error: Faltan los datos iniciales para cargar el dashboard.</div>';
                }


                // Configurar listeners (solo si los elementos existen)
                if (searchInput) {
                    searchInput.addEventListener('input', () => {
                        // Usar debounce para evitar llamadas excesivas en cada tecla
                        debounce(() => filterBookmarks(searchInput.value), 300); // 300ms de espera
                    });

                    // Keypress para Enter (mejor que keyup para esto)
                     searchInput.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter') {
                           filterBookmarks(searchInput.value);
                           e.preventDefault(); // Evitar posible submit de formulario si estuviera en uno
                        }
                    });
                    console.log("INFO: [initializeDashboard] Listeners de búsqueda configurados.");
                } else {
                     console.warn("WARN: [initializeDashboard] Input de búsqueda no encontrado, funcionalidad de búsqueda no disponible.");
                }

                if (searchButton && searchInput) {
                    searchButton.addEventListener('click', () => {
                        filterBookmarks(searchInput.value); // Ejecutar inmediatamente al hacer clic
                    });
                } else {
                     console.warn("WARN: [initializeDashboard] Botón de búsqueda no encontrado, click no funcionará.");
                }
                 console.log("INFO: [initializeDashboard] Completado.");
            } // Fin initializeDashboard


            // Iniciar la inicialización del dashboard
            initializeDashboard();

        } catch (domError) {
            // Error durante la inicialización DESPUÉS de DOMContentLoaded
            console.error('ERROR FATAL durante la inicialización (DOMContentLoaded):', domError);
            const errorDisplay = document.getElementById('dashboard-container') || document.body;
             if (errorDisplay) {
                 // Mostrar mensaje de error en la página
                 errorDisplay.innerHTML = `
                     <div class="error-message" style="padding: 2rem; text-align: center;">
                         <h2><i class="fas fa-exclamation-triangle"></i> Error Crítico al Cargar Dashboard</h2>
                         <p>No se pudo inicializar correctamente la aplicación.</p>
                         <p><strong>Detalle:</strong> ${domError.message}</p>
                         <p><em>Por favor, revisa la consola del desarrollador (F12) para más información.</em></p>
                     </div>`;
             }
             // Ocultar spinner si existe
            const loadingIndicator = document.querySelector('.loading-indicator');
            if(loadingIndicator) loadingIndicator.style.display = 'none';
        }
    }); // Fin DOMContentLoaded listener

} catch (initialError) {
    // Error ANTES de que DOMContentLoaded se dispare (ej. error de sintaxis grave, fallo al cargar script)
    console.error('ERROR CRÍTICO MUY TEMPRANO (antes de DOMContentLoaded):', initialError);
    // Intenta mostrar un error básico directamente en el body como último recurso
    // Es posible que esto no funcione si el error es muy grave.
     try {
        document.body.innerHTML = `
            <div style="padding: 20px; color: red; border: 2px solid red; margin: 20px; font-family: sans-serif;">
                <h1>Error Crítico</h1>
                <p>No se pudo cargar el script principal del dashboard.</p>
                <p><strong>Detalle:</strong> ${initialError.message}</p>
                <p>Verifica que los archivos JavaScript ('data.js', 'main.js') existan, estén en las rutas correctas y no contengan errores de sintaxis. Revisa la consola del desarrollador (F12).</p>
            </div>`;
    } catch(e) {
         console.error("No se pudo ni siquiera mostrar el mensaje de error en el body.");
    }
}

console.log("INFO: main.js finalizando ejecución (puede ser antes de DOMContentLoaded).");