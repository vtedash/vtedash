// js/data.js - Contenido COMPLETO y ÚNICO de este archivo

const dashboardData = {
    categories: [
        // --- CATEGORÍA INTELIGENCIA ARTIFICIAL ---
        {
            id: "ia",
            nombre: "Inteligencia Artificial",
            icono: "fas fa-brain", // Icono representativo de IA
            marcadores: [
                { nombre: "ChatGPT", url: "https://chatgpt.com", icono: "fas fa-robot", descripcion: "Chatbot de IA conversacional desarrollado por OpenAI para diversas tareas." },
                { nombre: "Google AI Studio", url: "https://aistudio.google.com/prompts/new_chat", icono: "fab fa-google", descripcion: "Plataforma de Google para experimentar y crear con modelos de IA generativa." },
                { nombre: "Claude", url: "https://claude.ai", icono: "fas fa-comment-dots", descripcion: "Asistente de IA avanzado de Anthropic, enfocado en seguridad y conversación útil." },
                { nombre: "Gemini", url: "https://gemini.google.com/?hl=es-ES", icono: "fas fa-star", descripcion: "Modelo de IA multimodal de Google, accesible a través de varias interfaces." },
                { nombre: "Hugging Face", url: "https://huggingface.co", icono: "fas fa-smile-beam", descripcion: "Comunidad y plataforma con herramientas y modelos de IA pre-entrenados." },
            ]
        },
        // --- CATEGORÍA DESARROLLO WEB (Actualizada con descripciones) ---
        {
            id: "desarrollo",
            nombre: "Desarrollo Web",
            icono: "fas fa-laptop-code",
            marcadores: [
                { nombre: "GitHub", url: "https://github.com", icono: "fab fa-github", descripcion: "Plataforma líder para alojar repositorios Git, colaboración y control de versiones." },
                { nombre: "Stack Overflow", url: "https://stackoverflow.com", icono: "fab fa-stack-overflow", descripcion: "Comunidad de preguntas y respuestas para programadores y desarrolladores." },
                { nombre: "CodePen", url: "https://codepen.io", icono: "fab fa-codepen", descripcion: "Entorno de desarrollo online para probar y mostrar snippets de HTML, CSS y JavaScript." },
                { nombre: "MDN Web Docs", url: "https://developer.mozilla.org", icono: "fas fa-book-open", descripcion: "Documentación de referencia esencial para tecnologías web (HTML, CSS, JS)." },
                { nombre: "Dev.to", url: "https://dev.to", icono: "fab fa-dev", descripcion: "Comunidad online donde los desarrolladores comparten artículos y tutoriales." },
            ]
        },
        // --- CATEGORÍA COMUNICACIÓN Y REDES (Actualizada con descripciones) ---
        {
            id: "redes-sociales",
            nombre: "Comunicación y Redes",
            icono: "fas fa-comments",
            marcadores: [
                { nombre: "Twitter / X", url: "https://twitter.com", icono: "fab fa-x-twitter", descripcion: "Red social de microblogging para compartir y descubrir información en tiempo real." },
                // { nombre: "LinkedIn", url: "https://linkedin.com", icono: "fab fa-linkedin", descripcion: "Red social profesional para networking, búsqueda de empleo y desarrollo de carrera." }, // Lo quito si no está en la lista nueva
                { nombre: "Discord", url: "https://discord.com/app", icono: "fab fa-discord", descripcion: "Plataforma de comunicación por voz, video y texto para comunidades y equipos." },
                { nombre: "Gmail", url: "https://mail.google.com", icono: "fas fa-envelope", descripcion: "Servicio de correo electrónico gratuito y popular de Google." },
                { nombre: "WhatsApp Web", url: "https://web.whatsapp.com", icono: "fab fa-whatsapp", descripcion: "Versión web de WhatsApp para chatear desde el navegador." },
            ]
        },
        // --- CATEGORÍA PRODUCTIVIDAD Y NOTAS (Actualizada con descripciones) ---
        {
            id: "productividad",
            nombre: "Productividad y Notas",
            icono: "fas fa-lightbulb",
            marcadores: [
                { nombre: "Notion", url: "https://notion.so", icono: "fas fa-file-alt", descripcion: "Espacio de trabajo todo-en-uno para notas, tareas, wikis y bases de datos." },
                { nombre: "Trello", url: "https://trello.com", icono: "fab fa-trello", descripcion: "Herramienta visual de gestión de proyectos basada en tableros Kanban." },
                // { nombre: "Google Drive", url: "https://drive.google.com", icono: "fab fa-google-drive", descripcion: "Servicio de almacenamiento en la nube y suite ofimática de Google." }, // Lo quito si no está en la lista nueva
                { nombre: "Google Keep", url: "https://keep.google.com", icono: "fas fa-clipboard-list", descripcion: "Aplicación sencilla para tomar notas rápidas, listas y recordatorios." },
                // { nombre: "ChatGPT", url: "https://chat.openai.com/", icono: "fas fa-robot", descripcion: "Chatbot de IA para asistencia en diversas tareas (Movido a categoría IA)." }, // Movido
            ]
        },
        // --- CATEGORÍA ENTRETENIMIENTO (Actualizada con descripciones) ---
        {
            id: "entretenimiento",
            nombre: "Entretenimiento",
            icono: "fas fa-photo-film",
            marcadores: [
                { nombre: "YouTube", url: "https://youtube.com", icono: "fab fa-youtube", descripcion: "Plataforma líder para ver, compartir y subir videos online." },
                // { nombre: "Netflix", url: "https://netflix.com", icono: "fas fa-film", descripcion: "Servicio de streaming por suscripción para películas y series." }, // Lo quito si no está en la lista nueva
                { nombre: "Spotify", url: "https://spotify.com", icono: "fab fa-spotify", descripcion: "Servicio de streaming de música, podcasts y videos." },
                { nombre: "Twitch", url: "https://twitch.tv", icono: "fab fa-twitch", descripcion: "Plataforma de streaming en vivo, popular para videojuegos y contenido IRL." }
                // Aquí podrías añadir manualmente enlaces a alternativas FOSS si las conoces
            ]
        },
        // --- CATEGORÍA UTILIDADES Y RECURSOS (Actualizada con descripciones) ---
        {
            id: "utilidades", // Cambiado de 'recursos' a 'utilidades' como en la lista
            nombre: "Utilidades y Recursos",
            icono: "fas fa-tools",
            marcadores: [
                { nombre: "Font Awesome", url: "https://fontawesome.com/icons", icono: "fab fa-font-awesome", descripcion: "Extensa biblioteca de iconos vectoriales para diseño web y de apps." },
                { nombre: "Coolors", url: "https://coolors.co/", icono: "fas fa-palette", descripcion: "Generador rápido de esquemas y paletas de colores." },
                { nombre: "Photopea", url: "https://www.photopea.com/", icono: "fas fa-edit", descripcion: "Editor de imágenes online avanzado con soporte para PSD, XCF, Sketch." },
                // { nombre: "Archive.org Roms", url: "https://archive.org/details/@generalprukogui", icono: "fas fa-compact-disc" } // Movido a Juegos Retro
            ]
        },
        // --- CATEGORÍA JUEGOS RETRO ---
        {
            id: "juegos-retro",
            nombre: "Juegos Retro",
            icono: "fas fa-gamepad", // Icono más específico para juegos retro
            marcadores: [
                { nombre: "Roms Español Archive", url: "https://archive.org/details/@generalprukogui", icono: "fas fa-archive", descripcion: "Colección de ROMs en español alojada en Internet Archive." },
                { nombre: "Emuparadise", url: "https://www.emuparadise.me", icono: "fas fa-ghost", descripcion: "Sitio clásico para descargar ROMs, ISOs y emuladores (funcionalidad limitada)." },
                { nombre: "CoolROM", url: "https://coolrom.com", icono: "fas fa-compact-disc", descripcion: "Amplia base de datos de ROMs y emuladores para diversas consolas." },
                 // Aquí podrías añadir manualmente enlaces a otras webs de ROMs en español
            ]
        },
        // --- CATEGORÍA GAMEDEV: ARTE Y ASSETS (Actualizada con descripciones) ---
        {
            id: "gamedev-assets",
            nombre: "GameDev: Arte y Assets",
            icono: "fas fa-palette",
            marcadores: [
                { nombre: "OpenGameArt", url: "https://opengameart.org/", icono: "fas fa-images", descripcion: "Repositorio de assets de arte (2D, 3D, sonido) bajo licencias libres." },
                { nombre: "Kenney.nl", url: "https://kenney.nl/assets", icono: "fas fa-puzzle-piece", descripcion: "Colección de assets gráficos y de audio gratuitos y de pago para juegos." },
                { nombre: "Itch.io Assets", url: "https://itch.io/game-assets", icono: "fab fa-itch-io", descripcion: "Mercado de assets para desarrollo de videojuegos en la plataforma Itch.io." },
                { nombre: "Unity Asset Store", url: "https://assetstore.unity.com/", icono: "fab fa-unity", descripcion: "Tienda oficial de assets para el motor de videojuegos Unity." },
                { nombre: "Sketchfab", url: "https://sketchfab.com/feed", icono: "fas fa-cube", descripcion: "Plataforma para publicar, compartir y descubrir modelos 3D online." },
                { nombre: "Spriters Resource", url: "https://www.spriters-resource.com/", icono: "fas fa-image", descripcion: "Gran base de datos de sprites ripeados de videojuegos clásicos y modernos." },
                { nombre: "Lospec (Paletas)", url: "https://lospec.com/", icono: "fas fa-swatchbook", descripcion: "Comunidad y herramientas para pixel art, incluyendo una gran colección de paletas." },
            ]
        },
        // --- CATEGORÍA GAMEDEV: MOTORES Y HERRAMIENTAS (Actualizada con descripciones y Blender) ---
        {
            id: "gamedev-tools",
            nombre: "GameDev: Motores y Herramientas",
            icono: "fas fa-cogs",
            marcadores: [
                { nombre: "Unity Hub", url: "https://unity.com/unity-hub", icono: "fab fa-unity", descripcion: "Gestor para instalar y administrar versiones del editor de Unity y proyectos." }, // URL actualizada
                { nombre: "Unreal Engine", url: "https://www.unrealengine.com/en-US/download", icono: "fas fa-infinity", descripcion: "Motor gráfico avanzado para desarrollo de juegos AAA y visualizaciones." }, // Descarga
                { nombre: "Godot Engine", url: "https://godotengine.org/", icono: "fas fa-feather-alt", descripcion: "Motor de videojuegos 2D y 3D gratuito y de código abierto." }, // URL principal
                { nombre: "Piskel (Pixel Art)", url: "https://www.piskelapp.com/", icono: "fas fa-th", descripcion: "Editor online gratuito para crear sprites animados en pixel art." },
                { nombre: "Aseprite", url: "https://www.aseprite.org/", icono: "fas fa-pencil-ruler", descripcion: "Editor de pixel art y animación profesional (de pago)." },
                { nombre: "Noclip Website", url: "https://noclip.website/", icono: "fas fa-map-marked-alt", descripcion: "Explorador online de mapas y niveles de videojuegos clásicos." },
                { nombre: "Blender", url: "https://www.blender.org", icono: "fas fa-cube", descripcion: "Suite de creación 3D gratuita y de código abierto (modelado, escultura, animación, VFX)." },
            ]
        },
        // --- CATEGORÍA GAMEDEV: APRENDIZAJE (Actualizada con descripciones) ---
        {
            id: "gamedev-learning",
            nombre: "GameDev: Aprendizaje",
            icono: "fas fa-graduation-cap",
            marcadores: [
                { nombre: "Unity Learn", url: "https://learn.unity.com/", icono: "fab fa-unity", descripcion: "Plataforma oficial de aprendizaje de Unity con tutoriales, cursos y proyectos." },
                { nombre: "Unreal Learning", url: "https://www.unrealengine.com/en-US/onlinelearning-courses", icono: "fas fa-chalkboard-teacher", descripcion: "Portal de aprendizaje de Epic Games para Unreal Engine." },
                { nombre: "Godot Docs", url: "https://docs.godotengine.org/en/stable/", icono: "fas fa-book", descripcion: "Documentación oficial completa del motor Godot Engine." },
                { nombre: "GameDev.tv", url: "https://www.gamedev.tv/", icono: "fas fa-tv", descripcion: "Plataforma popular con cursos online sobre desarrollo de videojuegos (Unity, Unreal, Blender)." },
            ]
        },
        // --- CATEGORÍA GAMEDEV: COMUNIDADES Y NOTICIAS (Actualizada con descripciones) ---
        {
            id: "gamedev-community",
            nombre: "GameDev: Comunidades y Noticias",
            icono: "fas fa-users",
            marcadores: [
                { nombre: "Game Developer", url: "https://www.gamedeveloper.com/", icono: "fas fa-newspaper", descripcion: "Sitio de noticias, artículos y blogs sobre la industria del desarrollo de videojuegos (antes Gamasutra)." },
                { nombre: "r/gamedev (Reddit)", url: "https://www.reddit.com/r/gamedev/", icono: "fab fa-reddit-alien", descripcion: "Subreddit popular para discutir sobre desarrollo de videojuegos." },
                { nombre: "IndieDB", url: "https://www.indiedb.com/", icono: "fas fa-database", descripcion: "Comunidad y base de datos para juegos independientes, mods y motores." },
                { nombre: "Itch.io Community", url: "https://itch.io/community", icono: "fab fa-itch-io", descripcion: "Foros y comunidades dentro de la plataforma Itch.io." },
                { nombre: "Polycount (Foro 3D)", url: "https://polycount.com/forum", icono: "fas fa-cubes", descripcion: "Comunidad y foro enfocado en el arte 3D para videojuegos." },
            ]
        },
        // --- CATEGORÍA HERRAMIENTAS ONLINE ---
        {
            id: "herramientas-online",
            nombre: "Herramientas Online",
            icono: "fas fa-magic", // Icono para herramientas web
            marcadores: [
                { nombre: "remove.bg", url: "https://www.remove.bg", icono: "fas fa-cut", descripcion: "Elimina fondos de imágenes automáticamente usando IA." },
                { nombre: "Removal.AI", url: "https://removal.ai", icono: "fas fa-eraser", descripcion: "Herramienta IA gratuita para quitar fondos de imágenes." },
                { nombre: "Image Resizer", url: "https://imageresizer.com", icono: "fas fa-crop-alt", descripcion: "Redimensiona imágenes online de forma rápida y sencilla." },
                { nombre: "imResizer", url: "https://imresizer.com", icono: "fas fa-expand-arrows-alt", descripcion: "Otra herramienta online para redimensionar fotos instantáneamente." },
                { nombre: "Gifgit (Lasso Tool)", url: "https://www.gifgit.com/image/lasso-tool", icono: "fas fa-vector-square", descripcion: "Editor de imágenes online con herramienta de lazo para selecciones precisas." },
                // { nombre: "Pixelmator Select Subject", url: "https://support.pixelmator.com/pixelmator-pro-user-guide/make-selections/automatically-select-a-subject-in-an-image", icono: "fas fa-mouse-pointer", descripcion: "Documentación sobre selección automática de sujetos en Pixelmator Pro (no es una herramienta online directa)." }, // No es una herramienta en sí
                { nombre: "Pixlr", url: "https://pixlr.com/es/", icono: "fas fa-photo-video", descripcion: "Editor de fotos online con varias herramientas, incluyendo algunas basadas en IA." },
                { nombre: "Canva Photo Editor", url: "https://www.canva.com/es_mx/editor-fotos/", icono: "fas fa-palette", descripcion: "Editor de fotos online gratuito integrado en la plataforma Canva." },
                { nombre: "Fotor", url: "https://www.fotor.com/es/", icono: "fas fa-camera-retro", descripcion: "Editor de fotos online para recortar, redimensionar, añadir efectos y texto." },
                { nombre: "Photopea", url: "https://www.photopea.com", icono: "fas fa-edit", descripcion: "Potente editor de imágenes online gratuito similar a Photoshop." } // Duplicado, ya está en Utilidades
            ]
        },
        // --- CATEGORÍA NO MAN'S SKY ---
        {
            id: "no-mans-sky",
            nombre: "No Man's Sky",
            icono: "fas fa-rocket", // Icono espacial
            marcadores: [
                { nombre: "NMS Recipes", url: "https://nomansskyrecipe.com", icono: "fas fa-receipt", descripcion: "Base de datos de recetas de crafteo, refinado y cocina para No Man's Sky." },
                { nombre: "NMS Wiki (Crafting)", url: "https://nomanssky.fandom.com/wiki/Crafting", icono: "fab fa-wikipedia-w", descripcion: "Sección de crafteo en la wiki Fandom de No Man's Sky." },
                { nombre: "Player.One Recipes", url: "https://www.player.one/no-mans-sky-recipe-list-crafting-guide-blueprints-and-everything-you-need-know-549944", icono: "fas fa-list-alt", descripcion: "Guía de crafteo y lista de recetas en Player.One." },
                { nombre: "NMS Expeditions Tool", url: "https://cwmonkey.github.io/nms-expeditions/", icono: "fas fa-map-signs", descripcion: "Herramienta para gestionar y descargar datos de expediciones pasadas." },
                { nombre: "DualShockers Base Ideas", url: "https://www.dualshockers.com/no-mans-sky-best-base-ideas/", icono: "fas fa-lightbulb", descripcion: "Artículo con ideas e inspiración para construir bases en No Man's Sky." },
                { nombre: "NMS Wiki (Build Menu)", url: "https://nomanssky.fandom.com/wiki/Build_Menu", icono: "fas fa-hammer", descripcion: "Descripción del menú de construcción y sus partes en la wiki Fandom." },
                { nombre: "TheGamer Base Tips", url: "https://www.thegamer.com/no-mans-sky-base-building-tips/", icono: "fas fa-info-circle", descripcion: "Consejos y trucos para la construcción de bases en No Man's Sky." },
            ]
        },
        // --- CATEGORÍA MONSTER HUNTER WILDS ---
        {
            id: "monster-hunter-wilds",
            nombre: "Monster Hunter Wilds",
            icono: "fas fa-dragon", // Icono de monstruo/dragón
            marcadores: [
                { nombre: "MHW Fextralife Wiki", url: "https://monsterhunterwilds.wiki.fextralife.com/Crafting", icono: "fab fa-wikipedia-w", descripcion: "Sección de crafteo en la wiki Fextralife para Monster Hunter Wilds." },
                { nombre: "Dot Esports Crafting List", url: "https://dotesports.com/monster-hunter/news/monster-hunter-wilds-full-crafting-list-all-recipes", icono: "fas fa-scroll", descripcion: "Lista de recetas de crafteo para Monster Hunter Wilds en Dot Esports." },
                { nombre: "Game8 Materials", url: "https://game8.co/games/Monster-Hunter-Wilds/archives/499830", icono: "fas fa-gem", descripcion: "Lista de materiales de crafteo y sus usos en Game8." },
                { nombre: "Mobalytics Builds (MHW)", url: "https://mobalytics.gg/mhw/builds", icono: "fas fa-shield-alt", descripcion: "Guías de builds para Monster Hunter World (útil como referencia)." }, // Nota: Es de MHW pero puede ser útil
                { nombre: "Game8 Builds", url: "https://game8.co/games/Monster-Hunter-Wilds/archives/500759", icono: "fas fa-tools", descripcion: "Mejores builds y armaduras por tipo de arma en Game8." },
                { nombre: "Maxroll.gg Guides", url: "https://maxroll.gg/monster-hunter-wilds", icono: "fas fa-book-reader", descripcion: "Portal con noticias, guías de builds y recursos para Monster Hunter Wilds." },
            ]
        },
        // --- CATEGORÍA ANDROID (Apps FOSS y Alternativas) ---
        {
            id: "android-apps",
            nombre: "Android: Apps FOSS y Stores",
            icono: "fab fa-android", // Icono de Android
            marcadores: [
                { nombre: "Aurora Store", url: "https://aurora-store.org", icono: "fas fa-store", descripcion: "Cliente alternativo y de código abierto para la Google Play Store." },
                { nombre: "F-Droid", url: "https://f-droid.org", icono: "fab fa-android", descripcion: "Repositorio de aplicaciones Android exclusivamente de software libre y código abierto (FOSS)." },
                { nombre: "Droid-ify", url: "https://droid-ify.github.io", icono: "fas fa-mobile-alt", descripcion: "Cliente alternativo y ligero para F-Droid con interfaz Material You." },
                { nombre: "Obtainium", url: "https://obtainium.app", icono: "fas fa-download", descripcion: "App para rastrear y descargar actualizaciones de apps directamente desde sus fuentes." },
                { nombre: "InnerTune", url: "https://github.com/z-huang/InnerTune", icono: "fas fa-music", descripcion: "Cliente de YouTube Music no oficial, gratuito y de código abierto." },
                { nombre: "NewPipe", url: "https://newpipe.net", icono: "fab fa-youtube", descripcion: "Cliente de YouTube ligero, sin anuncios y de código abierto." },
                { nombre: "Revanced", url: "https://github.com/orgs/ReVanced/repositories", icono: "fab fa-youtube-square", descripcion: "Proyecto para parchear apps de Android (como YouTube) añadiendo funciones." },
                { nombre: "OsmAnd", url: "https://osmand.net", icono: "fas fa-map-marked-alt", descripcion: "Aplicación de mapas y navegación offline basada en OpenStreetMap." },
                { nombre: "AntennaPod", url: "https://antennapod.org", icono: "fas fa-podcast", descripcion: "Reproductor y gestor de podcasts de código abierto, flexible y sin anuncios." },
            ]
        },
        // --- CATEGORÍA GOOGLE TV / ANDROID TV (Apps FOSS y Launchers) ---
        {
            id: "google-tv-apps",
            nombre: "Google TV / Android TV Apps",
            icono: "fas fa-tv", // Icono de TV
            marcadores: [
                { nombre: "FLauncher", url: "https://github.com/flauncher/flauncher", icono: "fas fa-rocket", descripcion: "Launcher alternativo de código abierto para Android TV, sin anuncios." },
                // { nombre: "LeanbackLauncher", url: "https://github.com/LeanbackLauncher/LeanbackLauncher", icono: "fas fa-th-large", descripcion: "Código fuente del launcher original de Android TV (para desarrolladores)." }, // Más para devs
                { nombre: "LeanKeyKeyboard", url: "https://github.com/LeanKeyKeyboard/LeanKeyKeyboard", icono: "fas fa-keyboard", descripcion: "Teclado de código abierto optimizado para el control remoto de Android TV." },
                { nombre: "Aurora Store (TV)", url: "https://aurora-store.org", icono: "fas fa-store", descripcion: "Cliente alternativo de Play Store, usable en Android TV." },
                { nombre: "Neo Store", url: "https://github.com/NeoStore/NeoStore", icono: "fas fa-cloud-download-alt", descripcion: "Cliente moderno y con muchas funciones para F-Droid, usable en TV." },
                { nombre: "Droid-ify (TV)", url: "https://droid-ify.github.io", icono: "fas fa-mobile-alt", descripcion: "Cliente ligero para F-Droid, usable en Android TV." },
                { nombre: "TV Bro", url: "https://github.com/TVBro/TVBro", icono: "fas fa-globe", descripcion: "Navegador web de código abierto optimizado para Android TV y control remoto." },
                { nombre: "DTVfree", url: "https://github.com/DTVfree/DTVfree", icono: "fas fa-wifi", descripcion: "Navegador web rápido y ligero diseñado específicamente para Android TV." }, // Icono alternativo
                { nombre: "Kodi", url: "https://kodi.tv", icono: "fas fa-film", descripcion: "Centro multimedia de código abierto muy potente y personalizable." },
                { nombre: "VLC for Android", url: "https://www.videolan.org/vlc/index.html", icono: "fas fa-play-circle", descripcion: "Versión para Android del popular reproductor multimedia VLC." },
                { nombre: "MPV-Android", url: "https://github.com/mpv-android/mpv-android", icono: "fas fa-video", descripcion: "Puerto para Android del reproductor de video MPV, ligero y configurable." }, // URL GitHub
                { nombre: "Nova Player", url: "https://github.com/NovaPlayer/NovaPlayer", icono: "fas fa-compact-disc", descripcion: "Reproductor de video de código abierto para contenido local y en red." },
                { nombre: "Fermata Media Player", url: "https://github.com/Fermata/Fermata", icono: "fas fa-sliders-h", descripcion: "Reproductor de audio, video y TV de código abierto con interfaz adaptable." },
                { nombre: "Just (Video) Player", url: "https://github.com/JustPlayer/JustPlayer", icono: "fas fa-play", descripcion: "Reproductor de video simple basado en ExoPlayer con soporte avanzado de formatos." },
                { nombre: "SmartTube", url: "https://github.com/SmartTube/SmartTube", icono: "fab fa-youtube", descripcion: "Cliente avanzado de YouTube para Android TV, sin anuncios y con funciones extra." },
                { nombre: "NewPipe (TV)", url: "https://newpipe.net", icono: "fab fa-youtube-square", descripcion: "Cliente ligero de YouTube, usable en Android TV con control remoto." },
                { nombre: "Stremio", url: "https://www.stremio.com", icono: "fas fa-stream", descripcion: "Aplicación para organizar y ver contenido de video de varias fuentes (con addons)." },
                { nombre: "Jellyfin (Android TV)", url: "https://jellyfin.org", icono: "fas fa-server", descripcion: "Cliente para Android TV del servidor multimedia de código abierto Jellyfin." },
            ]
        },
        // --- CATEGORÍA PELÍCULAS Y SERIES (ES-ES) ---
        {
            id: "peliculas-series-es",
            nombre: "Películas y Series (ES-ES)",
            icono: "fas fa-ticket-alt", // Icono de cine/entrada
            marcadores: [
                { nombre: "Mejor Torrent", url: "https://www.mejortorrent1.net", icono: "fas fa-download", descripcion: "Portal de torrents con amplio catálogo de películas y series en español." },
                { nombre: "EliteTorrent", url: "https://www.elitetorrent.biz", icono: "fas fa-magnet", descripcion: "Sitio popular para descargar torrents de contenido audiovisual en español." },
                { nombre: "DivXTotal", url: "https://www.divxtotal.la", icono: "fas fa-video", descripcion: "Web con variedad de películas y series en español para descargar por torrent." },
                { nombre: "Pelistorrent.org", url: "https://www.pelistorrent.org", icono: "fas fa-film", descripcion: "Descarga de torrents de películas y series dobladas o VOSE." },
                { nombre: "Grantorrent", url: "https://grantorrent.net", icono: "fas fa-cloud-download-alt", descripcion: "Página de descargas torrent con contenido actualizado en español." },
                { nombre: "Megapelis (Telegram)", url: "https://t.me/megapelis", icono: "fab fa-telegram-plane", descripcion: "Canal de Telegram con películas en castellano de diversos géneros." },
                { nombre: "Hsito TV Películas (Telegram)", url: "https://t.me/HsitoTVPeliculas", icono: "fab fa-telegram", descripcion: "Canal de Telegram con variedad de películas en castellano." },
                { nombre: "Pelis/Series Full HD (Telegram)", url: "https://t.me/PeliculasSeriesFullHD", icono: "fab fa-telegram", descripcion: "Canal de Telegram enfocado en contenido Full HD en castellano." },
            ]
        }
        // Asegúrate de que no haya comas adicionales después del último objeto de categoría
    ]
}; // Asegúrate de que el punto y coma final esté presente

// Log para confirmar que data.js se cargó
console.log("INFO: data.js cargado y dashboardData definido.");
