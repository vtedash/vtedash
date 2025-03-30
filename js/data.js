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
        },
        // --- NUEVA CATEGORÍA DE VIDEOJUEGOS ---
        {
            id: "videojuegos",
            nombre: "Videojuegos y GameDev",
            icono: "fas fa-gamepad", // Icono representativo
            marcadores: [
                // Recursos 3D y Modelos
                { nombre: "Sketchfab (Modelos 3D)", url: "https://sketchfab.com/feed", icono: "fas fa-cube" },
                { nombre: "Noclip Website (Mapas 3D)", url: "https://noclip.website/", icono: "fas fa-map-marked-alt" },
                // Sprites y Pixel Art
                { nombre: "Spriters Resource (Sprites)", url: "https://www.spriters-resource.com/", icono: "fas fa-image" }, // Puedes usar 'fas fa-ghost' si prefieres
                { nombre: "Piskel (Editor Pixel Art)", url: "https://www.piskelapp.com/", icono: "fas fa-th" }, // Icono de cuadrícula/pixel
                { nombre: "Lospec (Paletas Pixel Art)", url: "https://lospec.com/", icono: "fas fa-palette" },
                // Recursos Generales y Assets
                { nombre: "OpenGameArt (Assets 2D/3D/Sonido)", url: "https://opengameart.org/", icono: "fas fa-images" },
                { nombre: "Kenney.nl (Assets Gratis)", url: "https://kenney.nl/assets", icono: "fas fa-puzzle-piece" },
                { nombre: "Itch.io (Assets y Juegos Indie)", url: "https://itch.io/", icono: "fab fa-itch-io" },
                // Motores y Aprendizaje
                { nombre: "Unity Asset Store", url: "https://assetstore.unity.com/", icono: "fab fa-unity" },
                { nombre: "Unity Learn", url: "https://learn.unity.com/", icono: "fas fa-graduation-cap" },
                { nombre: "Godot Engine Docs", url: "https://docs.godotengine.org/en/stable/", icono: "fas fa-book" }, // Alternativa Open Source
                // Comunidades y Noticias
                { nombre: "Game Developer", url: "https://www.gamedeveloper.com/", icono: "fas fa-newspaper" }, // Antes Gamasutra
                { nombre: "r/gamedev (Reddit)", url: "https://www.reddit.com/r/gamedev/", icono: "fab fa-reddit-alien"}
            ]
        }
        // Asegúrate de que no haya comas adicionales después del último objeto de categoría (videojuegos)
    ]
}; // Asegúrate de que el punto y coma final esté presente

// Log para confirmar que data.js se cargó
console.log("INFO: data.js cargado y dashboardData definido.");
