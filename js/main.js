// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Elementos del DOM
    const dashboardContainer = document.getElementById('dashboard-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button'); // Aunque buscamos en tiempo real, mantenemos el botón por si acaso
    const currentYear = document.getElementById('current-year');
    const loadingIndicator = document.querySelector('.loading-indicator'); // Seleccionar el nuevo indicador

    // Variables globales
    let debounceTimer; // Para el debounce de la búsqueda

    // --- FUNCIONES DE RENDERIZADO ---

    /**
     * Genera el HTML para un único marcador.
     * @param {object} bookmark - El objeto del marcador.
     * @returns {string} - El HTML del marcador.
     */
    function generateBookmarkHTML(bookmark) {
        // Usar el nombre del marcador como título (tooltip) directamente
        // Asegurarse de escapar caracteres HTML si los nombres pudieran contenerlos (poco probable aquí)
        const safeName = bookmark.nombre; //.replace(/</g, "&lt;").replace(/>/g, "&gt;"); // Opcional: sanitización básica

        return `
            <a href="${bookmark.url}" class="bookmark" target="_blank" rel="noopener noreferrer" title="${safeName}">
                <div class="bookmark-icon" aria-hidden="true"> <!-- Ocultar icono decorativo a lectores de pantalla -->
                    <i class="${bookmark.icono || 'fas fa-bookmark'}"></i> <!-- Icono por defecto si falta -->
                </div>
                <span class="bookmark-name">${safeName}</span> <!-- Usar span para mejor semántica -->
            </a>
        `;
    }

    /**
     * Genera el HTML para una categoría y sus marcadores.
     * @param {object} category - El objeto de la categoría.
     * @returns {string} - El HTML de la categoría.
     */
    function generateCategoryHTML(category) {
        // Generar HTML para los marcadores de esta categoría
        const bookmarksHTML = category.marcadores && category.marcadores.length > 0
            ? category.marcadores.map(generateBookmarkHTML).join('')
            : '<p class="no-bookmarks-message">No hay marcadores en esta categoría.</p>'; // Mensaje si no hay marcadores

        return `
            <section class="category" data-category-id="${category.id}" aria-labelledby="category-title-${category.id}">
                <header class="category-header">
                     <div class="category-icon" aria-hidden="true">
                        <i class="${category.icono || 'fas fa-folder'}"></i> <!-- Icono por defecto -->
                    </div>
                    <h2 class="category-name" id="category-title-${category.id}">${category.nombre}</h2>
                </header>
                <div class="bookmarks">
                    ${bookmarksHTML}
                </div>
            </section>
        `;
    }

    /**
     * Renderiza el dashboard completo o los resultados filtrados.
     * @param {Array} categoriesData - Array de categorías a mostrar.
     */
    function renderDashboard(categoriesData = dashboardData.categories) {
         // Ocultar indicador de carga una vez que se va a renderizar
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }

        // Limpiar contenedor existente
        dashboardContainer.innerHTML = '';

        if (!categoriesData || categoriesData.length === 0) {
            dashboardContainer.innerHTML = '<div class="no-results">No se encontraron categorías o marcadores que coincidan con tu búsqueda.</div>';
            return;
        }

        // Crear un fragmento de documento para mejorar el rendimiento al añadir al DOM
        const fragment = document.createDocumentFragment();
        const categoriesContainer = document.createElement('div');
        categoriesContainer.className = 'categories';

        categoriesData.forEach(category => {
            const categoryElement = document.createElement('div'); // Crear un contenedor temporal para parsear
            categoryElement.innerHTML = generateCategoryHTML(category);
            // Añadir el primer hijo (el <section class="category">) al contenedor
            if (categoryElement.firstChild) {
                categoriesContainer.appendChild(categoryElement.firstChild);
            }
        });

        fragment.appendChild(categoriesContainer);
        dashboardContainer.appendChild(fragment); // Añadir todo de una vez al DOM
    }

    // --- FUNCIONES DE FILTRADO ---

    /**
     * Filtra las categorías y marcadores basado en el término de búsqueda.
     * @param {string} searchTerm - El término de búsqueda.
     */
    function filterBookmarks(searchTerm) {
        const normalizedSearchTerm = searchTerm.toLowerCase().trim();

        // Si no hay término de búsqueda, mostrar todo
        if (!normalizedSearchTerm) {
            renderDashboard(dashboardData.categories);
            return;
        }

        // Filtrar profundamente: categorías que contengan marcadores que coincidan
        const filteredCategories = dashboardData.categories.map(category => {
            // Filtrar marcadores dentro de la categoría
            const filteredBookmarks = category.marcadores.filter(bookmark =>
                bookmark.nombre.toLowerCase().includes(normalizedSearchTerm) ||
                bookmark.url.toLowerCase().includes(normalizedSearchTerm)
                // Podrías añadir búsqueda por ID de categoría o nombre de categoría si quisieras
                // || category.nombre.toLowerCase().includes(normalizedSearchTerm)
            );

            // Devolver la categoría solo si tiene marcadores coincidentes
            if (filteredBookmarks.length > 0) {
                // Crear una copia de la categoría con solo los marcadores filtrados
                return {
                    ...category,
                    marcadores: filteredBookmarks
                };
            }
            return null; // Indicar que esta categoría no tiene coincidencias
        }).filter(Boolean); // Eliminar los nulos (categorías sin marcadores coincidentes)

        renderDashboard(filteredCategories);
    }

    /**
     * Función debounce para limitar la frecuencia de ejecución de filterBookmarks.
     * @param {function} func - La función a ejecutar (filterBookmarks).
     * @param {number} delay - El tiempo de espera en milisegundos.
     */
    function debounce(func, delay) {
      clearTimeout(debounceTimer); // Limpiar timeout anterior
      debounceTimer = setTimeout(func, delay); // Establecer nuevo timeout
    }

    // --- INICIALIZACIÓN Y EVENT LISTENERS ---

    /**
     * Inicializa el dashboard: carga los datos y configura listeners.
     */
    function initializeDashboard() {
        try {
            // Validar que los datos existen y tienen el formato esperado
            if (!dashboardData || !Array.isArray(dashboardData.categories)) {
                throw new Error('Los datos del dashboard (dashboardData.categories) no se encontraron o tienen un formato incorrecto.');
            }

            // Actualizar el año en el footer
            if (currentYear) {
                currentYear.textContent = new Date().getFullYear();
            }

            // Renderizar el dashboard inicial
            renderDashboard();

            // Configurar listeners para la búsqueda (con debounce)
            if (searchInput) {
                searchInput.addEventListener('input', () => {
                    // Usar debounce para evitar llamadas excesivas en cada tecla
                    debounce(() => filterBookmarks(searchInput.value), 300); // 300ms de espera
                });
            }

             // Listener para el botón (aunque 'input' es principal, puede ser útil para accesibilidad o clics explícitos)
            if (searchButton && searchInput) {
                searchButton.addEventListener('click', () => {
                    filterBookmarks(searchInput.value); // Ejecutar inmediatamente al hacer clic
                });
                 // Permitir búsqueda con Enter en el input (ya cubierto por 'input' pero bueno tenerlo explícito)
                searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                       filterBookmarks(searchInput.value);
                       e.preventDefault(); // Evitar posible submit de formulario si estuviera en uno
                    }
                });
            }


        } catch (error) {
            console.error('Error fatal al inicializar el dashboard:', error);
            // Ocultar indicador de carga si aún está visible
            if (loadingIndicator) loadingIndicator.style.display = 'none';
            // Mostrar mensaje de error claro al usuario
            dashboardContainer.innerHTML = `
                <div class="error-message">
                    <p><i class="fas fa-exclamation-triangle"></i> ¡Oops! No se pudo cargar el dashboard.</p>
                    <p>Detalle técnico: ${error.message}</p>
                    <p>Por favor, verifica que el archivo 'js/data.js' exista y tenga el formato correcto.</p>
                </div>
            `;
        }
    }

    // Iniciar todo el proceso
    initializeDashboard();

}); // Fin del listener DOMContentLoaded