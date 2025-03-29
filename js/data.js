/**
 * ARCHIVO DE DATOS
 * Aquí es donde deberás añadir tus categorías y marcadores.
 * 
 * Estructura de datos:
 * - categories: Array de categorías
 *   - id: Identificador único para la categoría
 *   - name: Nombre de la categoría
 *   - icon: Clase de Font Awesome para el icono (ej: "fas fa-code")
 *   - bookmarks: Array de marcadores en esa categoría
 *     - name: Nombre del marcador
 *     - url: URL del marcador
 *     - icon: Clase de Font Awesome para el icono (ej: "fab fa-github")
 */

const dashboardData = {
    categories: [
        {
            id: "development",
            name: "Desarrollo",
            icon: "fas fa-code",
            bookmarks: [
                {
                    name: "GitHub",
                    url: "https://github.com",
                    icon: "fab fa-github"
                },
                {
                    name: "Stack Overflow",
                    url: "https://stackoverflow.com",
                    icon: "fab fa-stack-overflow"
                },
                {
                    name: "CodePen",
                    url: "https://codepen.io",
                    icon: "fab fa-codepen"
                },
                {
                    name: "MDN Web Docs",
                    url: "https://developer.mozilla.org",
                    icon: "fas fa-book"
                }
            ]
        },
        {
            id: "social",
            name: "Redes Sociales",
            icon: "fas fa-share-alt",
            bookmarks: [
                {
                    name: "Twitter",
                    url: "https://twitter.com",
                    icon: "fab fa-twitter"
                },
                {
                    name: "LinkedIn",
                    url: "https://linkedin.com",
                    icon: "fab fa-linkedin"
                },
                {
                    name: "Instagram",
                    url: "https://instagram.com",
                    icon: "fab fa-instagram"
                },
                {
                    name: "Facebook",
                    url: "https://facebook.com",
                    icon: "fab fa-facebook"
                }
            ]
        },
        {
            id: "productivity",
            name: "Productividad",
            icon: "fas fa-tasks",
            bookmarks: [
                {
                    name: "Notion",
                    url: "https://notion.so",
                    icon: "fas fa-clipboard-list"
                },
                {
                    name: "Trello",
                    url: "https://trello.com",
                    icon: "fab fa-trello"
                },
                {
                    name: "Google Drive",
                    url: "https://drive.google.com",
                    icon: "fab fa-google-drive"
                },
                {
                    name: "Evernote",
                    url: "https://evernote.com",
                    icon: "fas fa-sticky-note"
                }
            ]
        },
        {
            id: "entertainment",
            name: "Entretenimiento",
            icon: "fas fa-film",
            bookmarks: [
                {
                    name: "YouTube",
                    url: "https://youtube.com",
                    icon: "fab fa-youtube"
                },
                {
                    name: "Netflix",
                    url: "https://netflix.com",
                    icon: "fas fa-tv"
                },
                {
                    name: "Spotify",
                    url: "https://spotify.com",
                    icon: "fab fa-spotify"
                },
                {
                    name: "Twitch",
                    url: "https://twitch.tv",
                    icon: "fab fa-twitch"
                }
            ]
        },
        {
            id: "placeholder",
            name: "PLACEHOLDER",
            icon: "fas fa-film",
            bookmarks: [
                {
                    name: "placeholder",
                    url: "https://youtube.com",
                    icon: "fab fa-youtube"
                },
                
            ]
        },
        
    ]
};

/**
 * INSTRUCCIONES PARA AÑADIR NUEVAS CATEGORÍAS Y MARCADORES:
 * 
 * 1. Para añadir una nueva categoría, copia este bloque y pégalo antes del último corchete:
 * 
 * {
 *     id: "mi-categoria",
 *     name: "Mi Categoría",
 *     icon: "fas fa-icon-name",
 *     bookmarks: [
 *         {
 *             name: "Mi Marcador",
 *             url: "https://ejemplo.com",
 *             icon: "fas fa-icon-name"
 *         }
 *     ]
 * },
 * 
 * 2. Para añadir un nuevo marcador a una categoría existente, copia este bloque
 *    y pégalo dentro del array 'bookmarks' de la categoría deseada:
 * 
 * {
 *     name: "Mi Marcador",
 *     url: "https://ejemplo.com",
 *     icon: "fas fa-icon-name"
 * },
 * 
 * 3. Para los iconos, puedes usar cualquier icono de Font Awesome:
 *    - Visita https://fontawesome.com/icons para buscar iconos
 *    - Usa "fas" para iconos sólidos, "fab" para marcas y "far" para iconos regulares
 */
