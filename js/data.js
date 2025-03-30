// Datos del Dashboard Personal
// Estructura: Array de categorías, cada categoría tiene un id, nombre, icono (clase Font Awesome),
// y un array de marcadores. Cada marcador tiene nombre, url e icono.

const dashboardData = {
    categories: [
        {
            id: "desarrollo",
            nombre: "Desarrollo Web", // Nombre ligeramente ajustado
            icono: "fas fa-laptop-code", // Icono más específico
            marcadores: [
                { nombre: "GitHub", url: "https://github.com", icono: "fab fa-github" },
                { nombre: "Stack Overflow", url: "https://stackoverflow.com", icono: "fab fa-stack-overflow" },
                { nombre: "CodePen", url: "https://codepen.io", icono: "fab fa-codepen" },
                { nombre: "MDN Web Docs", url: "https://developer.mozilla.org", icono: "fas fa-book-open" }, // Icono diferente
                { nombre: "Dev.to", url: "https://dev.to", icono: "fab fa-dev" }, // Nuevo marcador útil
            ]
        },
        {
            id: "redes-sociales",
            nombre: "Comunicación y Redes", // Nombre más inclusivo
            icono: "fas fa-comments", // Icono alternativo
            marcadores: [
                { nombre: "Twitter / X", url: "https://twitter.com", icono: "fab fa-x-twitter" }, // Icono actualizado
                { nombre: "LinkedIn", url: "https://linkedin.com", icono: "fab fa-linkedin" },
                { nombre: "Discord", url: "https://discord.com/app", icono: "fab fa-discord"}, // Nuevo
                { nombre: "Gmail", url: "https://mail.google.com", icono: "fas fa-envelope" },
                { nombre: "WhatsApp Web", url: "https://web.whatsapp.com", icono: "fab fa-whatsapp" }, // Nombre más descriptivo
            ]
        },
        {
            id: "productividad",
            nombre: "Productividad y Notas",
            icono: "fas fa-lightbulb", // Icono diferente
            marcadores: [
                { nombre: "Notion", url: "https://notion.so", icono: "fas fa-file-alt" }, // Icono más genérico
                { nombre: "Trello", url: "https://trello.com", icono: "fab fa-trello" },
                { nombre: "Google Drive", url: "https://drive.google.com", icono: "fab fa-google-drive" },
                { nombre: "ChatGPT", url: "https://chat.openai.com/", icono: "fas fa-robot" }, // Nuevo y relevante
            ]
        },
        {
            id: "entretenimiento",
            nombre: "Entretenimiento",
            icono: "fas fa-photo-film", // Icono actualizado FA6
            marcadores: [
                { nombre: "YouTube", url: "https://youtube.com", icono: "fab fa-youtube" },
                { nombre: "Netflix", url: "https://netflix.com", icono: "fas fa-film" }, // Icono simple
                { nombre: "Spotify", url: "https://spotify.com", icono: "fab fa-spotify" },
                { nombre: "Twitch", url: "https://twitch.tv", icono: "fab fa-twitch" }
            ]
        },
        {
            id: "utilidades",
            nombre: "Utilidades y Recursos", // Categoría combinada
            icono: "fas fa-tools",
            marcadores: [
                { nombre: "Font Awesome", url: "https://fontawesome.com/icons", icono: "fab fa-font-awesome" }, // Icono propio
                { nombre: "Coolors", url: "https://coolors.co/", icono: "fas fa-palette" }, // Generador de paletas
                { nombre: "Photopea", url: "https://www.photopea.com/", icono: "fas fa-edit" }, // Editor de fotos online
                { nombre: "Archive.org Roms", url: "https://archive.org/details/@generalprukogui", icono: "fas fa-compact-disc" } // Movido aquí
            ]
        },
        // Se eliminaron categorías vacías o placeholders para un look más limpio
        // Puedes añadirlas de nuevo si las necesitas, asegurándote de que tengan contenido.
    ]
};