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
        // --- NUEVAS CATEGORÍAS DE VIDEOJUEGOS Y GAMEDEV ---
        {
            id: "gamedev-assets",
            nombre: "GameDev: Arte y Assets",
            icono: "fas fa-palette", // Icono relacionado con arte/paleta
            marcadores: [
                // Assets Generales y Marketplaces
                { nombre: "OpenGameArt", url: "https://opengameart.org/", icono: "fas fa-images" },
                { nombre: "Kenney.nl", url: "https://kenney.nl/assets", icono: "fas fa-puzzle-piece" },
                { nombre: "Itch.io Assets", url: "https://itch.io/game-assets", icono: "fab fa-itch-io" },
                { nombre: "Unity Asset Store", url: "https://assetstore.unity.com/", icono: "fab fa-unity" }, // Aunque específico de Unity, es un store de assets
                // Recursos 3D
                { nombre: "Sketchfab", url: "https://sketchfab.com/feed", icono: "fas fa-cube" },
                // Sprites y Pixel Art
                { nombre: "Spriters Resource", url: "https://www.spriters-resource.com/", icono: "fas fa-image" }, // O 'fas fa-ghost'
                { nombre: "Lospec (Paletas)", url: "https://lospec.com/", icono: "fas fa-palette" }, // Reutilizo paleta, o 'fas fa-swatchbook'
            ]
        },
        {
            id: "gamedev-tools",
            nombre: "GameDev: Motores y Herramientas",
            icono: "fas fa-cogs", // Icono de engranajes/configuración
            marcadores: [
                // Motores Principales
                { nombre: "Unity Hub", url: "https://unity.com/download", icono: "fab fa-unity" },
                { nombre: "Unreal Engine", url: "https://www.unrealengine.com/en-US/download", icono: "fas fa-infinity" }, // No hay icono oficial de UE en FA free
                { nombre: "Godot Engine", url: "https://godotengine.org/download/", icono: "fas fa-feather-alt" }, // Icono no oficial pero representativo
                // Herramientas de Arte
                { nombre: "Piskel (Pixel Art Editor)", url: "https://www.piskelapp.com/", icono: "fas fa-th" },
                { nombre: "Aseprite", url: "https://www.aseprite.org/", icono: "fas fa-pencil-ruler" }, // Muy popular, aunque de pago
                // Herramientas Útiles / Visualización
                { nombre: "Noclip Website (Mapas 3D)", url: "https://noclip.website/", icono: "fas fa-map-marked-alt" },
            ]
        },
        {
            id: "gamedev-learning",
            nombre: "GameDev: Aprendizaje",
            icono: "fas fa-graduation-cap", // Icono de aprendizaje
            marcadores: [
                { nombre: "Unity Learn", url: "https://learn.unity.com/", icono: "fab fa-unity" },
                { nombre: "Unreal Learning", url: "https://www.unrealengine.com/en-US/onlinelearning-courses", icono: "fas fa-chalkboard-teacher" },
                { nombre: "Godot Docs", url: "https://docs.godotengine.org/en/stable/", icono: "fas fa-book" },
                { nombre: "GameDev.tv", url: "https://www.gamedev.tv/", icono: "fas fa-tv" }, // Cursos populares
            ]
        },
        {
            id: "gamedev-community",
            nombre: "GameDev: Comunidades y Noticias",
            icono: "fas fa-users", // Icono de grupo/comunidad
            marcadores: [
                { nombre: "Game Developer (Gamasutra)", url: "https://www.gamedeveloper.com/", icono: "fas fa-newspaper" },
                { nombre: "r/gamedev (Reddit)", url: "https://www.reddit.com/r/gamedev/", icono: "fab fa-reddit-alien"},
                { nombre: "IndieDB", url: "https://www.indiedb.com/", icono: "fas fa-database" }, // Comunidad y showcase indie
                { nombre: "Itch.io Community", url: "https://itch.io/community", icono: "fab fa-itch-io" },
                { nombre: "Polycount (Foro Arte 3D)", url: "https://polycount.com/forum", icono: "fas fa-cubes" }, // Enfocado en arte 3D
            ]
        }
        // Asegúrate de que no haya comas adicionales después del último objeto de categoría
    ]
}; // Asegúrate de que el punto y coma final esté presente

// Log para confirmar que data.js se cargó
console.log("INFO: data.js cargado y dashboardData definido.");
