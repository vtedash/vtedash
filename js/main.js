// js/main.js - Lógica principal del Dashboard

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed. Initializing dashboard...");

    // --- Referencias a Elementos del DOM ---
    const dashboardContainer = document.getElementById('dashboard-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const currentYearSpan = document.getElementById('current-year');

    // --- Verificación de Elementos Críticos ---
    if (!dashboardContainer || !searchInput || !searchButton || !currentYearSpan) {
        console.error("ERROR: Critical HTML elements not found (container, search input/button, year span). Aborting script.");
        // Podríamos intentar mostrar un error en el body, pero si falta el container...
        document.body.innerHTML = '<p style="color: red; text-align: center; padding: 2rem;">Error crítico: Faltan elementos esenciales en el HTML.</p>';
        return;
    }

    // --- Verificación de Datos ---
    if (typeof dashboardData === 'undefined' || !dashboardData || !Array.isArray(dashboardData.categories)) {
        console.error("ERROR: dashboardData is not defined or invalid. Make sure data.js is loaded correctly before main.js.");
        displayErrorMessage("Error: No se pudieron cargar los datos del dashboard. Revisa la consola para más detalles.");
        // Ocultar indicador de carga si aún existe
        const loadingIndicator = dashboardContainer.querySelector('.loading-indicator');
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        return;
    }
    console.log("INFO: dashboardData found. Processing categories...");

    // --- Función Principal para Mostrar Categorías y Marcadores ---
    function displayCategories(categoriesData, searchTerm = "") {
        // 1. Limpiar contenedor principal
        dashboardContainer.innerHTML = '';

        // 2. Filtrar datos si hay término de búsqueda
        const normalizedSearchTerm = searchTerm.trim().toLowerCase();
        let filteredCategories = categoriesData;

        if (normalizedSearchTerm) {
            console.log(`Filtering for: "${normalizedSearchTerm}"`);
            filteredCategories = categoriesData.map(category => {
                // Filtrar marcadores dentro de la categoría
                const filteredBookmarks = category.marcadores.filter(bookmark =>
                    bookmark.nombre.toLowerCase().includes(normalizedSearchTerm) ||
                    (bookmark.descripcion && bookmark.descripcion.toLowerCase().includes(normalizedSearchTerm))
                );

                // La categoría coincide si su nombre coincide O si tiene marcadores que coinciden
                const categoryNameMatches = category.nombre.toLowerCase().includes(normalizedSearchTerm);

                if (categoryNameMatches || filteredBookmarks.length > 0) {
                    // Si el nombre de la categoría coincide pero los marcadores no, incluimos todos sus marcadores originales
                    // Si los marcadores coinciden, usamos los filtrados
                    // Si ambos coinciden, usamos los filtrados (prioridad a la búsqueda específica de marcadores)
                    return {
                        ...category, // Copia todas las propiedades de la categoría
                        marcadores: filteredBookmarks.length > 0 ? filteredBookmarks : category.marcadores
                    };
                }
                return null; // Esta categoría no coincide en absoluto
            }).filter(category => category !== null); // Eliminar las categorías nulas (sin coincidencias)
        }

        // 3. Comprobar si hay resultados después de filtrar
        if (filteredCategories.length === 0) {
            if (normalizedSearchTerm) {
                displayNoResultsMessage(searchTerm);
            } else {
                // Esto no debería pasar si dashboardData.categories era válido inicialmente
                displayErrorMessage("No hay categorías para mostrar.");
            }
            return;
        }

        // 4. Crear y añadir el contenedor de rejilla para las categorías
        const categoriesGrid = document.createElement('div');
        categoriesGrid.className = 'categories'; // El contenedor principal de la rejilla

        // 5. Iterar sobre las categorías (filtradas o todas) y crear su HTML
        filteredCategories.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category';
            categoryElement.setAttribute('data-category-id', category.id); // Añadir ID por si se necesita

            // --- Crear Cabecera de Categoría ---
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';

            const headerIcon = document.createElement('i');
            headerIcon.className = `category-icon ${category.icono || 'fas fa-folder'}`; // Icono por defecto
            headerIcon.setAttribute('aria-hidden', 'true');

            const categoryName = document.createElement('h2');
            categoryName.className = 'category-name';
            categoryName.textContent = category.nombre;

            categoryHeader.appendChild(headerIcon);
            categoryHeader.appendChild(categoryName);
            categoryElement.appendChild(categoryHeader);

            // --- Crear Contenedor de Marcadores ---
            const bookmarksContainer = document.createElement('div');
            bookmarksContainer.className = 'bookmarks';

            // --- Crear y Añadir Marcadores ---
            if (category.marcadores && category.marcadores.length > 0) {
                category.marcadores.forEach(bookmark => {
                    const bookmarkLink = document.createElement('a');
                    bookmarkLink.href = bookmark.url;
                    bookmarkLink.className = 'bookmark';
                    bookmarkLink.target = "_blank"; // Abrir en nueva pestaña
                    bookmarkLink.rel = "noopener noreferrer"; // Seguridad

                    // *** Añadir Tooltip con la descripción ***
                    if (bookmark.descripcion) {
                        bookmarkLink.title = bookmark.descripcion; // ¡Aquí está la magia!
                    }

                    const icon = document.createElement('i');
                    icon.className = `bookmark-icon ${bookmark.icono || 'fas fa-link'}`; // Icono por defecto
                    icon.setAttribute('aria-hidden', 'true');

                    const name = document.createElement('span');
                    name.className = 'bookmark-name';
                    name.textContent = bookmark.nombre;

                    bookmarkLink.appendChild(icon);
                    bookmarkLink.appendChild(name);
                    bookmarksContainer.appendChild(bookmarkLink);
                });
            } else {
                // Mostrar mensaje si una categoría quedó sin marcadores (después de filtrar)
                const noBookmarksMsg = document.createElement('p');
                noBookmarksMsg.className = 'no-bookmarks-message';
                noBookmarksMsg.textContent = 'No hay marcadores aquí.';
                 bookmarksContainer.appendChild(noBookmarksMsg);
                 // Asegurar que ocupe todo el ancho del grid de bookmarks
                 bookmarksContainer.style.gridTemplateColumns = '1fr'; // Ajuste para que el mensaje se centre bien
            }

            categoryElement.appendChild(bookmarksContainer); // Añadir grid de marcadores a la categoría
            categoriesGrid.appendChild(categoryElement); // Añadir categoría completa al grid principal
        });

        // 6. Añadir la rejilla completa de categorías al contenedor principal del dashboard
        dashboardContainer.appendChild(categoriesGrid);
        console.log(`INFO: Displayed ${filteredCategories.length} categories.`);

    } // --- Fin de displayCategories ---

    // --- Funciones Auxiliares para Mensajes ---
    function displayMessage(message, type = 'info') {
        dashboardContainer.innerHTML = ''; // Limpiar siempre antes de mostrar mensaje
        const messageDiv = document.createElement('div');
        let iconClass = '';

        switch (type) {
            case 'error':
                messageDiv.className = 'error-message';
                iconClass = 'fas fa-exclamation-triangle';
                break;
            case 'no-results':
                messageDiv.className = 'no-results';
                iconClass = 'fas fa-search';
                break;
            default: // 'info' o cualquier otro
                messageDiv.className = 'loading-indicator'; // Reutilizamos estilo o creamos uno nuevo 'info-message'
                 iconClass = 'fas fa-info-circle';
        }

        messageDiv.innerHTML = `<i class="${iconClass}" aria-hidden="true"></i> ${message}`;
        dashboardContainer.appendChild(messageDiv);
    }

    function displayErrorMessage(message) {
        displayMessage(message, 'error');
    }

    function displayNoResultsMessage(searchTerm) {
        // Usamos `textContent` para evitar inyección de HTML si searchTerm viniera de una fuente no confiable
        const safeMessage = document.createElement('span');
        safeMessage.textContent = `No se encontraron resultados para "${searchTerm}".`;
        displayMessage(safeMessage.innerHTML, 'no-results'); // Pasamos el HTML seguro
    }

    // --- Lógica de Búsqueda ---
    function handleSearch() {
        const searchTerm = searchInput.value; // No normalizar aquí, displayCategories lo hace
        console.log(`Search triggered for: "${searchTerm}"`);
        // Llama a displayCategories pasando TODOS los datos originales y el término de búsqueda
        displayCategories(dashboardData.categories, searchTerm);
    }

    // --- Event Listeners para Búsqueda ---
    searchInput.addEventListener('input', handleSearch); // Búsqueda en tiempo real
    searchButton.addEventListener('click', handleSearch); // Búsqueda al hacer clic en el botón

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevenir envío de formulario si estuviera en uno
            handleSearch();
        }
    });

    // --- Actualizar Año en Footer ---
    try {
        const year = new Date().getFullYear();
        currentYearSpan.textContent = year;
    } catch (e) {
        console.warn("WARN: Could not update footer year.", e);
        currentYearSpan.textContent = "Año"; // Fallback
    }

    // --- Llamada Inicial para Mostrar el Dashboard ---
    console.log("INFO: Performing initial display...");
    displayCategories(dashboardData.categories); // Mostrar todo al cargar

}); // --- Fin de DOMContentLoaded ---

console.log("INFO: main.js script execution finished.");
