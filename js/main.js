/**
 * Script principal del Dashboard
 * Maneja la lógica de presentación y búsqueda de marcadores
 */

// Elementos del DOM
const dashboardContainer = document.getElementById('dashboard-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const currentYear = document.getElementById('current-year');

// Actualizar el año actual en el footer
currentYear.textContent = new Date().getFullYear();

// Función para generar el HTML de los marcadores
function generateBookmarkHTML(bookmark) {
    return `
        <a href="${bookmark.url}" class="bookmark" target="_blank" rel="noopener noreferrer">
            <div class="bookmark-icon">
                <i class="${bookmark.icon}"></i>
            </div>
            <div class="bookmark-name">${bookmark.name}</div>
        </a>
    `;
}

// Función para generar el HTML de las categorías
function generateCategoryHTML(category) {
    const bookmarksHTML = category.bookmarks.map(generateBookmarkHTML).join('');
    
    return `
        <div class="category" data-category-id="${category.id}">
            <div class="category-header">
                <div class="category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <div class="category-name">${category.name}</div>
            </div>
            <div class="bookmarks">
                ${bookmarksHTML}
            </div>
        </div>
    `;
}

// Función para renderizar todo el dashboard
function renderDashboard(categoriesData = dashboardData.categories) {
    if (categoriesData.length === 0) {
        dashboardContainer.innerHTML = '<div class="no-results">No se encontraron resultados para tu búsqueda.</div>';
        return;
    }
    
    const categoriesHTML = categoriesData.map(generateCategoryHTML).join('');
    dashboardContainer.innerHTML = `<div class="categories">${categoriesHTML}</div>`;
}

// Función para filtrar marcadores según el término de búsqueda
function filterBookmarks(searchTerm) {
    if (!searchTerm.trim()) {
        renderDashboard();
        return;
    }
    
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    
    // Filtrar categorías y marcadores que coincidan con la búsqueda
    const filteredCategories = dashboardData.categories.map(category => {
        // Filtrar marcadores dentro de la categoría
        const filteredBookmarks = category.bookmarks.filter(bookmark => 
            bookmark.name.toLowerCase().includes(normalizedSearchTerm) ||
            bookmark.url.toLowerCase().includes(normalizedSearchTerm)
        );
        
        // Solo devolver la categoría si tiene marcadores que coinciden
        if (filteredBookmarks.length > 0) {
            return {
                ...category,
                bookmarks: filteredBookmarks
            };
        }
        return null;
    }).filter(Boolean); // Eliminar categorías que no tienen coincidencias (null)
    
    renderDashboard(filteredCategories);
}

// Event Listeners
searchButton.addEventListener('click', () => {
    filterBookmarks(searchInput.value);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        filterBookmarks(searchInput.value);
    } else if (searchInput.value === '') {
        // Si se borra la búsqueda, mostrar todo
        renderDashboard();
    }
});

// Añadir manejo de errores para la carga de datos
function initializeDashboard() {
    try {
        if (!dashboardData || !dashboardData.categories) {
            throw new Error('Datos del dashboard no encontrados o con formato incorrecto');
        }
        renderDashboard();
    } catch (error) {
        console.error('Error al inicializar el dashboard:', error);
        dashboardContainer.innerHTML = `
            <div class="error-message">
                <p>Ha ocurrido un error al cargar el dashboard.</p>
                <p>Detalles: ${error.message}</p>
            </div>
        `;
    }
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initializeDashboard);