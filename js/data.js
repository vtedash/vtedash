// js/data.js - Contenido COMPLETO y ÚNICO de este archivo

const dashboardData = {
    categories: [
        {
            id: "desarrollo",
            nombre: "Desarrollo Web",
            icono: "fas fa-laptop-code",
            marcadores: [
                { nombre: "GitHub", url: "https://github.com", icono: "fab fa-github" },
                { nombre: "Stack Overflow", url: "https://stackoverflow.com", icono: "fab fa-stack-overflow" },
                { nombre: "CodePen", url: "https://codepen.io", icono: "fab fa-codepen" },
                { nombre: "MDN Web Docs", url: "https://developer.mozilla.org", icono: "fas fa-book-open" },
                { nombre: "Dev.to", url: "https://dev.to", icono: "fab fa-dev" },
            ]
        },
        {
            id: "redes-sociales",
            nombre: "Comunicación y Redes",
            icono: "fas fa-comments",
            marcadores: [
                { nombre: "Twitter / X", url: "https://twitter.com", icono: "fab fa-x-twitter" },
                { nombre: "LinkedIn", url: "https://linkedin.com", icono: "fab fa-linkedin" },
                { nombre: "Discord", url: "https://discord.com/app", icono: "fab fa-discord"},
                { nombre: "Gmail", url: "https://mail.google.com", icono: "fas fa-envelope" },
                { nombre: "WhatsApp Web", url: "https://web.whatsapp.com", icono: "fab fa-whatsapp" },
            ]
        },
        {
            id: "productividad",
            nombre: "Productividad y Notas",
            icono: "fas fa-lightbulb",
            marcadores: [
                { nombre: "Notion", url: "https://notion.so", icono: "fas fa-file-alt" },
                { nombre: "Trello", url: "https://trello.com", icono: "fab fa-trello" },
                { nombre: "Google Drive", url: "https://drive.google.com", icono: "fab fa-google-drive" },
                { nombre: "ChatGPT", url: "https://chat.openai.com/", icono: "fas fa-robot" },
            ]
        },
        {
            id: "entretenimiento",
            nombre: "Entretenimiento",
            icono: "fas fa-photo-film",
            marcadores: [
                { nombre: "YouTube", url: "https://youtube.com", icono: "fab fa-youtube" },
                { nombre: "Netflix", url: "https://netflix.com", icono: "fas fa-film" },
                { nombre: "Spotify", url: "https://spotify.com", icono: "fab fa-spotify" },
                { nombre: "Twitch", url: "https://twitch.tv", icono: "fab fa-twitch" }
            ]
        },
        {
            id: "utilidades",
            nombre: "Utilidades y Recursos",
            icono: "fas fa-tools",
            marcadores: [
                { nombre: "Font Awesome", url: "https://fontawesome.com/icons", icono: "fab fa-font-awesome" },
                { nombre: "Coolors", url: "https://coolors.co/", icono: "fas fa-palette" },
                { nombre: "Photopea", url: "https://www.photopea.com/", icono: "fas fa-edit" },
                { nombre: "Archive.org Roms", url: "https://archive.org/details/@generalprukogui", icono: "fas fa-compact-disc" }
            ]
        }
    ]
};

// Log para confirmar que data.js se cargó
console.log("INFO: data.js cargado y dashboardData definido.");