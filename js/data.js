const dashboardData = {
    categories: [
        {
            id: "barra-de-marcadores",
            nombre: "Barra de marcadores",
            icono: "fas fa-folder", // Default icon
            marcadores: [
                { nombre: "WhatsApp", url: "https://web.whatsapp.com/", icono: "fas fa-bookmark" }, // Default icon
                { nombre: "DM ROL BILBAO", url: "https://drive.google.com/drive/folders/1re21bK8YegWju-mQ0Ee4_WQgHROCDMFi", icono: "fas fa-bookmark" },
                { nombre: "LinkedIn", url: "https://www.linkedin.com/feed/", icono: "fas fa-bookmark" },
                { nombre: "Bilbioteca secreta", url: "http://bibliotecasecreta.nl/", icono: "fas fa-bookmark" },
                { nombre: "1337x | Free Movies, TV Series, Music, Games and Software", url: "https://www.1337x.tw/", icono: "fas fa-bookmark" },
                { nombre: "Películas y series | Nodo313 - Más que un foro", url: "https://www.nodo313.net/foros/series/", icono: "fas fa-bookmark" },
                { nombre: "Playdede • Tu Directorio Completo de Películas y Series • Descubre Más Aquí", url: "https://playdede.cc/", icono: "fas fa-bookmark" },
                { nombre: "YTS", url: "https://ww4.yts.nz/", icono: "fas fa-bookmark" },
                { nombre: "Peliculas Tortrrents", url: "https://en.torrentgalaxy-official.com/movies?keyword=aliens&quality=&genre=&rating=0&year=0&language=&order_by=latest", icono: "fas fa-bookmark" },
                { nombre: "ChatGPT", url: "https://chatgpt.com/", icono: "fas fa-bookmark" },
                { nombre: "WHISPER CALIDAD.ipynb - Colab", url: "https://colab.research.google.com/drive/1q7Ls-jvNV-0gKH5vuj31m255_7b0okPZ#scrollTo=QdwQ6eOSwnws&uniqifier=1", icono: "fas fa-bookmark" },
                { nombre: "Torrent Search Engine - BT4G", url: "https://bt4gprx.com/", icono: "fas fa-bookmark" },
                { nombre: "YTS: The Official Home of YIFY Movies Torrent Download", url: "https://ww4.yts.nz/", icono: "fas fa-bookmark" },
                { nombre: "Classic Warcraft III --- Official Installers - Official Patches - General Discussion - Warcraft III: Reforged Forums", url: "https://us.forums.blizzard.com/en/warcraft3/t/classic-warcraft-iii-official-installers-official-patches/21415", icono: "fas fa-bookmark" },
                { nombre: "You searched for into the radius » STEAMUNLOCKED", url: "https://steamunlocked.net/?s=into+the+radius", icono: "fas fa-bookmark" },
                { nombre: "Mis activos · Coinbase", url: "https://www.coinbase.com/assets", icono: "fas fa-bookmark" },
                { nombre: "Dashboard - Binance", url: "https://www.binance.com/en/my/dashboard", icono: "fas fa-bookmark" },
                { nombre: "Online Shopping with Crypto - Coinsbee", url: "https://www.coinsbee.com/en/shop/", icono: "fas fa-bookmark" },
                { nombre: "One Pace Episode Guide - Hojas de cálculo de Google", url: "https://docs.google.com/spreadsheets/d/1HQRMJgu_zArp-sLnvFMDzOyjdsht87eFLECxMK858lA/edit#gid=0", icono: "fas fa-bookmark" },
                { nombre: "Oculus", url: "https://www.oculus.com/casting/", icono: "fas fa-bookmark" },
                { nombre: "Pedidos", url: "https://www.aliexpress.com/p/order/index.html", icono: "fas fa-bookmark" },
                { nombre: "Magnet to Torrent", url: "https://anonymiz.com/magnet2torrent/", icono: "fas fa-bookmark" },
                { nombre: "", url: "https://es.wallapop.com/app/catalog/published;itemId=9jd2o5kmkd6k", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "VIA", url: "https://usevia.app/", icono: "fas fa-bookmark" },
                { nombre: "Primeran", url: "https://primeran.eus/", icono: "fas fa-bookmark" },
                { nombre: "", url: "https://www.startpage.com/es/", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "Google_Colab_Notebook_for_Transcription_using_Whisper_AI.ipynb - Colaboratory", url: "https://colab.research.google.com/github/XLabCU/useful_notebooks/blob/main/Google_Colab_Notebook_for_Transcription_using_Whisper_AI.ipynb#scrollTo=Ww8rdjeY0_xH", icono: "fas fa-bookmark" },
                { nombre: "One Pace", url: "https://www.notion.so/9c9f2095d22e48228284df2a6091eb5c?v=d19e5290f9f9405cbd0ed6a0352d2de1", icono: "fas fa-bookmark" },
                { nombre: "XR Update ", url: "https://xrupdate.com/", icono: "fas fa-bookmark" },
                { nombre: "Ahorros", url: "https://app.spendee.com/dashboard", icono: "fas fa-bookmark" },
                { nombre: "", url: "https://www.youtube.com/", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "AnaitGames", url: "https://www.anaitgames.com/", icono: "fas fa-bookmark" },
                { nombre: "Milanote", url: "https://app.milanote.com/1QX5gk1xVf6dE8/home", icono: "fas fa-bookmark" },
                { nombre: "", url: "https://mail.google.com/mail/u/0/#inbox", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://www.twitch.tv/", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://www.youtube.com/", icono: "fas fa-bookmark" }, // Empty name from source (duplicate YT)
                { nombre: "", url: "http://x.com/", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://www.pccomponentes.com/pccom-bronze-intel-core-i5-10400f-8gb-480gbssd-gtx1650", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://www.coinbase.com/accounts/8dc63e87-df55-5ab5-95cc-9f08dc670268", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://www.notion.so/a8f27e86ad84462390b88e9c088c34d7?v=37f114ba87b348f4a69854f012ce96dd", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://drive.google.com/drive/u/0/folders/1iordXvkD9BfEe1Y84kuS-fvqDhEwBjix", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://calendar.google.com/calendar/u/0/r/month", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://keep.google.com/u/0/", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://www.linkedin.com/home?trk=nav_responsive_tab_home", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://docs.google.com/document/u/0/", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://www.notion.so/Varo-Home-c72e7e609b474436a36df4d0f4022526", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://es.wallapop.com/app/chat", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "", url: "https://clipdrop.co/stable-diffusion-turbo", icono: "fas fa-bookmark" } // Empty name from source
            ]
        },
        {
            id: "gpts-rol",
            nombre: "GPTS ROL",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "CAMPAÑA", url: "https://chatgpt.com/g/g-zZooSm6ix-dnd-character-crafter/c/67169d80-4f44-8008-bc53-fe339a449549", icono: "fas fa-bookmark" },
                { nombre: "Homebrewery Bot", url: "https://chatgpt.com/g/g-gMVKzYfvT-homebrewery-bot", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "one-pace",
            nombre: "ONE PACE",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Iniciar sesión en la cuenta", url: "https://login.microsoftonline.com/618bab0f-20a4-4de3-a10c-e20cee96bb35/oauth2/authorize?client%5Fid=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&response%5Fmode=form%5Fpost&response%5Ftype=code%20id%5Ftoken&resource=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&scope=openid&nonce=75CAA9D04D8A07C3E3682B6BE600C1F09023B71E7380A7E7%2D68CAB9A423A92F8664A751573B24A8B76FF5C6D81F532790A3840805AC12A690&redirect%5Furi=https%3A%2F%2Fupbeduco%2Dmy%2Esharepoint%2Ecom%2F%5Fforms%2Fdefault%2Easpx&state=OD0w&claims=%7B%22id%5Ftoken%22%3A%7B%22xms%5Fcc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083%2D87e0%2D41b5%2Dbb78%2D0bc43c8a8e8a&client%2Drequest%2Did=dcb32ea1%2D600b%2D5000%2Da574%2D88ea59e473ff&sso_reload=true", icono: "fas fa-bookmark" },
                { nombre: "One Pace Español 1 - Google Drive", url: "https://drive.google.com/drive/folders/14J1HBpPx1x_7GYrnnRoXlVcwhzykNxJh", icono: "fas fa-bookmark" },
                { nombre: "One Pace Español 2 - Google Drive", url: "https://drive.google.com/drive/folders/1jXRDJa_mnKPBkH59tHKSNkAAlcNJ3ZDz", icono: "fas fa-bookmark" },
                { nombre: "One Pace Español 3 - Google Drive", url: "https://drive.google.com/drive/folders/1DlltyoApXai4JIOP6hcHV_UdG6fi9A4I", icono: "fas fa-bookmark" },
                { nombre: "One Pace Español 4 - Google Drive", url: "https://drive.google.com/drive/folders/1c2OBmPkpOzm5S95xky10DrOrlGWApHnx", icono: "fas fa-bookmark" },
                { nombre: "One Pace Español 5 - Google Drive", url: "https://drive.google.com/drive/folders/1q-xbSlSyQUm1jdwxiMnKxgF84r7gAZ43", icono: "fas fa-bookmark" },
                { nombre: "One Pace Español 6 - Google Drive", url: "https://drive.google.com/drive/folders/1FP4RqwnyBUk0GsV1ZzmgHKh7qdogofbq", icono: "fas fa-bookmark" },
                { nombre: "One Pace Español 7 - Google Drive", url: "https://drive.google.com/drive/folders/1KJy2PlJKhjjY9Gu6rMwM8llzUj7ey6aK", icono: "fas fa-bookmark" },
                { nombre: "LINK MIX: 7 URLs are contained", url: "https://linkmix.co/23117743", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "cartuchos-retro",
            nombre: "Cartuchos Retro",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Search: 978 results found for \"Pokemon GameBoy Game Boy Japan\" – J4U.co.jp", url: "https://www.j4u.co.jp/search?q=Pokemon+GameBoy+Game+Boy+Japan", icono: "fas fa-bookmark" },
                { nombre: "Cartucho de videojuegos de la serie Pokemon, juego GBC en caja, azul, cristal, oro, verde, rojo, plata, amarillo, 16 bits, sin Manual, 7 versiones - AliExpress", url: "https://es.aliexpress.com/item/1005005681595726.html?spm=a2g0o.productlist.main.1.581271b8MkWK7W&algo_pvid=378bac21-4f67-424c-9bd0-1122dd03a073&algo_exp_id=378bac21-4f67-424c-9bd0-1122dd03a073-0&pdp_npi=4%40dis%21EUR%2121.14%2116.07%21%21%21160.76%21%21%40211b80c216997853004448129e6d77%2112000033994346642%21sea%21ES%21129112296%21&curPageLogUid=17csXXVQtIWh", icono: "fas fa-bookmark" },
                { nombre: "Cassette de juego de la serie Pokemon, Cassette clásico de 16 bits GBC, rojo, verde, cristal, plateado, para consola de videojuegos GBC - AliExpress", url: "https://es.aliexpress.com/item/1005004891389381.html?spm=a2g0o.productlist.main.3.581271b8MkWK7W&algo_pvid=378bac21-4f67-424c-9bd0-1122dd03a073&algo_exp_id=378bac21-4f67-424c-9bd0-1122dd03a073-1&pdp_npi=4%40dis%21EUR%215.92%215.27%21%21%216.17%21%21%40211b80c216997853004448129e6d77%2112000033613049949%21sea%21ES%21129112296%21&curPageLogUid=gGz6JKfX4z8M", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "tcg",
            nombre: "TCG",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Collectr", url: "https://app.getcollectr.com/portfolio/products", icono: "fas fa-bookmark" },
                { nombre: "ONE PIECE — ToysOneJapan", url: "https://toysonejapan.com/collections/one-piece", icono: "fas fa-bookmark" },
                { nombre: "ONE PIECE CARD GAME - Official Web Site", url: "https://en.onepiece-cardgame.com/", icono: "fas fa-bookmark" },
                { nombre: "One Piece TCG | Troopertoys", url: "https://troopertoys.com/es/one-piece-tcg", icono: "fas fa-bookmark" },
                { nombre: "ONE PIECE", url: "https://distritozero.es/categoria/one-piece-632", icono: "fas fa-bookmark" },
                { nombre: "Comprar One Piece Trading Card Game online en España - Mono de Juegos", url: "https://www.monodejuegos.shop/categoria-producto/trading-cards/one-piece-trading-card-game/", icono: "fas fa-bookmark" },
                { nombre: "Comprar One Piece Card Game - HeroFreaks - Juegos de Cartas", url: "https://herofreaks.com/one-piece-card-game/", icono: "fas fa-bookmark" },
                { nombre: "One Piece", url: "https://manavortex.es/cateogoria-producto/tcg/one-piece/", icono: "fas fa-bookmark" },
                { nombre: "(PREVENTA) One Piece - OP05 - AWAKENING OF THE NEW ERA - Booster Box", url: "https://www.homelands.es/producto/preventa-one-piece-op05-awakening-of-the-new-era-booster-box/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "varotv7",
            nombre: "VaroTv7",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "StreamElements", url: "https://streamelements.com/dashboard/welcome-back", icono: "fas fa-bookmark" },
                { nombre: "VaroTv7 - Twitch", url: "https://www.twitch.tv/varotv7", icono: "fas fa-bookmark" },
                { nombre: "Tableros | Trello", url: "https://trello.com/b/Tx4s2bCu/twitchtv-varotv7", icono: "fas fa-bookmark" },
                { nombre: "Musica sin Copy Pretzel", url: "https://play.pretzel.rocks/search", icono: "fas fa-bookmark" },
                { nombre: "Metricool", url: "https://app.metricool.com/brands/connections?blogId=1341440&userId=1153882", icono: "fas fa-bookmark" },
                { nombre: "My Services - IFTTT", url: "https://ifttt.com/my_services", icono: "fas fa-bookmark" },
                { nombre: "PayPal VaroTv7", url: "https://www.paypal.com/myaccount/summary", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "recursos-obs",
            nombre: "Recursos OBS",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Twitch.Guru - Unlocking your inner Twitch", url: "https://www.twitch.guru/tools/hand2.html", icono: "fas fa-bookmark" },
                { nombre: "Creations - Panzoid", url: "https://panzoid.com/creations", icono: "fas fa-bookmark" },
                { nombre: "Crea banners para Twitch online gratis con Canva", url: "https://www.canva.com/es_es/crear/banners/twitch/", icono: "fas fa-bookmark" },
                { nombre: "Seen.gg / Streaming assets and tools that adapt to your channel", url: "https://seen.gg/", icono: "fas fa-bookmark" },
                { nombre: "Twitch.Guru - Unlocking your inner Twitch", url: "https://www.twitch.guru/", icono: "fas fa-bookmark" },
                { nombre: "Kappamon | Pets for Your Live Stream", url: "https://kappamon.com/", icono: "fas fa-bookmark" },
                { nombre: "(1) PREDATORS | RESEÑA (UN INTENTO DE COPIAR A LA PRIMERA) - YouTube", url: "https://www.youtube.com/watch?v=wTGzIrn3G1c", icono: "fas fa-bookmark" },
                { nombre: "Dragon Ball Definitivo Capítulo 1 Español Latino Full HD Sin relleno - YouTube", url: "https://www.youtube.com/watch?v=1fme6mD70f0&t=148s", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "descargas",
            nombre: "Descargas",
            icono: "fas fa-folder",
            marcadores: [] // This folder was empty in the source except for subfolders
        },
        {
            id: "juegos",
            nombre: "Juegos",
            icono: "fas fa-folder",
            marcadores: [
                 { nombre: "Download Game PC Iso New Free - Direct Links, Google Drive, Torrent, Crack DLC", url: "https://gamepciso.com/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "roms",
            nombre: "Roms",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Myrient | Home Page", url: "https://myrient.erista.me/", icono: "fas fa-bookmark" },
                { nombre: "GitHub - r-piratedgames/megathread", url: "https://github.com/r-piratedgames/megathread", icono: "fas fa-bookmark" },
                { nombre: "/r/Roms Megathread", url: "https://r-roms.github.io/", icono: "fas fa-bookmark" },
                { nombre: "Internet Archive: Digital Library of Free & Borrowable Books, Movies, Music & Wayback Machine", url: "https://archive.org/", icono: "fas fa-bookmark" },
                { nombre: "Biblioteca de juegos Ps3 ( PKG-No Han) si no puedes ver los links, QUITA ADBLOCK!.", url: "http://reybort-juegos.blogspot.com/", icono: "fas fa-bookmark" },
                { nombre: "FitGirl Repacks - The ONLY official site for FitGirl Repacks. Every single FG repack installer has a link inside, which leads here. Do not fall for fake and scam sites, which are using my name.", url: "https://fitgirl-repacks.site/", icono: "fas fa-bookmark" },
                { nombre: "DODI Repacks", url: "https://dodi-repacks.site/", icono: "fas fa-bookmark" },
                { nombre: "Repack-Games - Free Download PC Games", url: "https://repack-games.com/", icono: "fas fa-bookmark" },
                { nombre: "LimeTorrents - Download torrents from LimeTorrents", url: "https://limetorrents.so/", icono: "fas fa-bookmark" },
                { nombre: "GamesTorrents | Descargar Juegos Torrent Gratis", url: "https://www.gamestorrents.fm/", icono: "fas fa-bookmark" },
                { nombre: "1337x | Free Movies, TV Series, Music, Games and Software", url: "https://www.1337x.tw/", icono: "fas fa-bookmark" },
                { nombre: "Vimm's Lair: Preserving the Classics", url: "https://vimm.net/", icono: "fas fa-bookmark" },
                { nombre: "GamesGX - El portal de tus juegos favoritos", url: "https://www.gamesgx.net/", icono: "fas fa-bookmark" },
                { nombre: "Play classic video games on your computer or mobile device | Emuparadise", url: "https://www.emuparadise.me/", icono: "fas fa-bookmark" },
                { nombre: "CoolROM.com - Play Retro Games on Your Computer or Mobile Device", url: "https://coolrom.com.au/", icono: "fas fa-bookmark" },
                { nombre: "My Abandonware - Download Old Video Games", url: "https://www.myabandonware.com/", icono: "fas fa-bookmark" },
                { nombre: "Descarga ROM e ISO para consolas y sistemas - Retrostic", url: "https://www.retrostic.com/es/roms", icono: "fas fa-bookmark" },
                { nombre: "Emu-Games - Juegos Gratis en Español", url: "https://emu-games.com/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "3ds",
            nombre: "3DS",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Games ➞ Europe | hShop", url: "https://hshop.erista.me/c/games/s/europe", icono: "fas fa-bookmark" },
                { nombre: "Juegos QR/Cia | Facebook", url: "https://www.facebook.com/3dsqrgames/photos", icono: "fas fa-bookmark" },
                { nombre: "", url: "https://docs.fakeyou.com/#/", icono: "fas fa-bookmark" }, // Empty name from source
                { nombre: "Worldcia3ds - Descargar Juegos 3ds Cias Desencriptados Español Multi5", url: "https://worldcia3ds.com/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "juegos-open-source",
            nombre: "Juegos Open Source",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "GitHub - bobeff/open-source-games: A list of open source games.", url: "https://github.com/bobeff/open-source-games", icono: "fas fa-bookmark" },
                { nombre: "DDrace COOP", url: "https://ddnet.org/", icono: "fas fa-bookmark" },
                { nombre: "Setris – Downloadable Game | Free Game Planet", url: "https://www.freegameplanet.com/setris-downloadable-game/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "pelis-series",
            nombre: "Pelis & Series",
            icono: "fas fa-folder",
            marcadores: [
                 { nombre: "ᐈ Ver o descargar The Last of Us Temporada 1 Episodio 4 online gratis ❤️ PELISGRATISHD", url: "https://ww1.pelisgratishd.de/serie/the-last-of-us-2023-5510/temporada-1/episodio-4-online", icono: "fas fa-bookmark" },
                 { nombre: "ᐈ Ver o descargar The Last of Us 2023 online gratis ❤️ PELISGRATISHD", url: "https://ww1.pelisgratishd.de/serie/the-last-of-us-2023-5510", icono: "fas fa-bookmark" },
                 { nombre: "TGx:Home", url: "https://www.torrentsgalaxy.to/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "pelis",
            nombre: "Pelis",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Descargar Peliculas, Juegos, Series... - Identi", url: "https://identi.io/index.php", icono: "fas fa-bookmark" },
                { nombre: "GDAdictos – Sitio Oficial", url: "https://www.gdadictos.com/", icono: "fas fa-bookmark" },
                { nombre: "🥇 DescargatePelis | 1080p", url: "https://www.descargatepelis.com/peliculas_calidad/1080p/", icono: "fas fa-bookmark" },
                { nombre: "PelisHD4K - Peliculas y Series Gratis", url: "https://pelishd4k.com/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "libros",
            nombre: "Libros",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Herejia de Horus - orden de los libros en epub.pdf", url: "https://www.dropbox.com/s/sz73p4ofamjcv55/Herejia%20de%20Horus%20-%20orden%20de%20los%20libros%20en%20epub.pdf?dl=0", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "comics",
            nombre: "Comics",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Catálogo", url: "https://zonacomics.com/catalogo/", icono: "fas fa-bookmark" },
                { nombre: "Best ChatGPT Prompts & AI Prompts Community - FlowGPT", url: "https://flowgpt.com/?searchQuery=stable+di", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "rol",
            nombre: "Rol",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Basic | Dungeonborne Wiki | Fandom", url: "https://dungeonborne.fandom.com/wiki/Basic", icono: "fas fa-bookmark" },
                { nombre: "La barba rolera: Herramientas roleras", url: "https://labarbarolera.blogspot.com.es/2015/09/herramientas-roleras.html?m=1", icono: "fas fa-bookmark" },
                 { nombre: "d", url: "https://www.lu-rp.es/normas/s1", icono: "fas fa-bookmark" } // Bookmark named 'd'
            ]
        },
        {
            id: "pathfinder",
            nombre: "Pathfinder",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Pathfinder 2 | easy Actions Tree | Beta", url: "https://pf2easy.com/tree/", icono: "fas fa-bookmark" },
                { nombre: "Pf2eTools", url: "https://pf2etools.com/", icono: "fas fa-bookmark" },
                { nombre: "Pathbuilder 2e", url: "https://pathbuilder2e.com/app.html?v=61a", icono: "fas fa-bookmark" },
                { nombre: "Wanderer's Guide - Pathfinder 2e Character Manager", url: "https://wanderersguide.app/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "personajes",
            nombre: "Personajes",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "GEralt the Rivia", url: "https://wanderersguide.app/builds/?view_id=156", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "ia-rol", // Renamed for uniqueness
            nombre: "IA",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "AI Powered D&D 5e Monster Statblock Generator - cros.land", url: "https://cros.land/ai-powered-dnd-5e-monster-statblock-generator/", icono: "fas fa-bookmark" },
                { nombre: "cros.land - just figuring things out", url: "https://cros.land/", icono: "fas fa-bookmark" },
                { nombre: "Kenji's D&D 5e Magic Item Generator - cros.land", url: "https://cros.land/dnd-5e-magic-item-generator/", icono: "fas fa-bookmark" },
                { nombre: "AI Powered D&D 5e Monster Statblock Generator - cros.land", url: "https://cros.land/ai-powered-dnd-5e-monster-statblock-generator/", icono: "fas fa-bookmark" } // Duplicate URL
            ]
        },
        {
            id: "recursos",
            nombre: "Recursos",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "SVG Repo - Free SVG Vectors and Icons", url: "https://www.svgrepo.com/", icono: "fas fa-bookmark" },
                { nombre: "Ambient Chaos", url: "https://neal.fun/ambient-chaos/", icono: "fas fa-bookmark" },
                { nombre: "Neal.fun", url: "https://neal.fun/", icono: "fas fa-bookmark" },
                { nombre: "Wallapop", url: "https://es.wallapop.com/app/chat", icono: "fas fa-bookmark" },
                { nombre: "De www.instructables.com", url: "https://www.google.es/amp/www.instructables.com/id/Arduino-Frequency-Detection/%3famp_page=true", icono: "fas fa-bookmark" },
                { nombre: "maaaje dolor cabeza - Buscar con Google", url: "https://www.google.com/search?q=maaaje+dolor+cabeza&oq=maaaje+dolor+cabeza+&aqs=chrome..69i57j0l3.4233j1j9&client=ms-android-xiaomi&sourceid=chrome-mobile&ie=UTF-8", icono: "fas fa-bookmark" },
                { nombre: "Login", url: "http://ugis.comunitel.es:8090/UnificacionGIS/", icono: "fas fa-bookmark" },
                 { nombre: "panora", url: "https://www.xataka.com/basics/retroarch-android-que-como-configurarlo-para-tener-varios-emuladores-tu-movil", icono: "fas fa-bookmark" }, // Bookmark named 'panora'
                 { nombre: "david", url: "https://es.wikipedia.org/wiki/Tequila_Works", icono: "fas fa-bookmark" } // Bookmark named 'david'
            ]
        },
        {
            id: "ias",
            nombre: "IAs",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "New chat", url: "https://chat.openai.com/chat?model=gpt-4", icono: "fas fa-bookmark" },
                { nombre: "pinokio", url: "https://pinokio.computer/", icono: "fas fa-bookmark" },
                { nombre: "Bard", url: "https://bard.google.com/", icono: "fas fa-bookmark" },
                { nombre: "Resumenes perfectos con ChatGPT - Inteligencia Artificial en Acción", url: "https://iaenaccion.com/resumenes-perfectos-con-chatgpt/", icono: "fas fa-bookmark" },
                { nombre: "GitHub - haotian-liu/LLaVA: [NeurIPS 2023 Oral] Visual Instruction Tuning: LLaVA (Large Language-and-Vision Assistant) built towards GPT-4V level capabilities.", url: "https://github.com/haotian-liu/LLaVA", icono: "fas fa-bookmark" },
                { nombre: "Pi, your personal AI", url: "https://pi.ai/es/talk", icono: "fas fa-bookmark" },
                { nombre: "Claude", url: "https://claude.ai/login", icono: "fas fa-bookmark" },
                { nombre: "Chatbase | ChatGPT for your website", url: "https://www.chatbase.co/", icono: "fas fa-bookmark" },
                { nombre: "Uizard | App, Web, & UI Design Made Easy | Powered By AI", url: "https://uizard.io/", icono: "fas fa-bookmark" },
                { nombre: "Jailbreak Chat", url: "https://www.jailbreakchat.com/", icono: "fas fa-bookmark" },
                { nombre: "Enhance Speech Adobe", url: "https://podcast.adobe.com/enhance#", icono: "fas fa-bookmark" },
                { nombre: "Poe - GPT-4", url: "https://poe.com/gpt-4", icono: "fas fa-bookmark" },
                { nombre: "ChatGPT", url: "https://chat.openai.com/chat", icono: "fas fa-bookmark" },
                { nombre: "GitHub - openai/point-e: Point cloud diffusion for 3D model synthesis", url: "https://github.com/openai/point-e", icono: "fas fa-bookmark" },
                { nombre: "GitHub - f/awesome-chatgpt-prompts: This repo includes ChatGPT promt curation to use ChatGPT better.", url: "https://github.com/f/awesome-chatgpt-prompts", icono: "fas fa-bookmark" },
                { nombre: "escribeme un email para invitar a gente a mi casa - You.com | The AI Search Engine You Control", url: "https://you.com/search?q=escribeme+un+email+para+invitar+a+gente+a+mi+casa&fromSearchBar=true&tbm=youchat", icono: "fas fa-bookmark" },
                { nombre: "Deforum for AUTOMATIC1111 - Stable Diffusion Tutorial - AI Animation Part 1 - YouTube", url: "https://www.youtube.com/watch?v=R52hxnpNews&ab_channel=Fictitiousness", icono: "fas fa-bookmark" },
                { nombre: "OpenAI Whisper - Adaptado por DotCSV - Colaboratory", url: "https://colab.research.google.com/drive/1CvvYPAFemIZdSOt9fhN541esSlZR7Ic6?usp=sharing#scrollTo=opNkn_Lgpat4", icono: "fas fa-bookmark" },
                { nombre: "Runway - Next-generation creation suite | Everything you need to make content, fast.", url: "https://runwayml.com/", icono: "fas fa-bookmark" },
                { nombre: "Login | Writesonic - Best AI Writing Tool", url: "https://app.writesonic.com/login", icono: "fas fa-bookmark" },
                { nombre: "Perplexity AI: Ask Anything", url: "https://www.perplexity.ai/", icono: "fas fa-bookmark" },
                { nombre: "Galileo AI · Copilot for interface design", url: "https://www.usegalileo.ai/", icono: "fas fa-bookmark" },
                { nombre: "Character.AI", url: "https://beta.character.ai/", icono: "fas fa-bookmark" },
                { nombre: "Bard", url: "https://bard.google.com/", icono: "fas fa-bookmark" }, // Duplicate URL
                { nombre: "apunt", url: "https://www.youtube.com/watch?v=ihY_JtIMAPc", icono: "fas fa-bookmark" },
                { nombre: "KeePass Password Safe", url: "https://keepass.info/", icono: "fas fa-bookmark" },
                { nombre: "Unity Muse | Ask anything", url: "https://muse.unity.com/chat?message=dame+un+script+de+movimiento+horizontal+2d&unityVersion=2022.3", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "gpts",
            nombre: "GPTs",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "AI PULSAR LOST COLONY", url: "https://chat.openai.com/c/7d3d530b-3441-4aa7-8216-d91708a2b27c", icono: "fas fa-bookmark" },
                { nombre: "ChatGPT", url: "https://chat.openai.com/g/g-n7Rs0IK86-grimoire", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "sonido",
            nombre: "Sonido",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "MetaVoice - Real-time AI Voice Changer", url: "https://themetavoice.xyz/", icono: "fas fa-bookmark" },
                { nombre: "Royalty Free AI Voice Generator for Music on Kits.AI", url: "https://app.kits.ai/convert/royalty-free", icono: "fas fa-bookmark" },
                { nombre: "XTTS - a Hugging Face Space by coqui", url: "https://huggingface.co/spaces/coqui/xtts", icono: "fas fa-bookmark" },
                { nombre: "Rask - Cambiar idioma", url: "https://app.rask.ai/", icono: "fas fa-bookmark" },
                { nombre: "IA para mejorar voces - Enhance Speech", url: "https://podcast.adobe.com/enhance", icono: "fas fa-bookmark" },
                { nombre: "Mic Check", url: "https://podcast.adobe.com/miccheck", icono: "fas fa-bookmark" },
                { nombre: "Riffusion", url: "https://www.riffusion.com/", icono: "fas fa-bookmark" },
                { nombre: "GitHub - suno-ai/bark: 🔊 Text-Prompted Generative Audio Model", url: "https://github.com/suno-ai/bark", icono: "fas fa-bookmark" },
                { nombre: "Clonación de voz y GPT-4 | By DotCSV - Colaboratory", url: "https://colab.research.google.com/drive/1VM2AVNDOVMwaeWeeoZuxmSVPtV0kGKrC?hl=es#scrollTo=32g-tH7IZz5N", icono: "fas fa-bookmark" },
                { nombre: "10", url: "https://bindingofisaac.fandom.com/es/wiki/The_Binding_of_Isaac:_Four_Souls#Preparaci%C3%B3n", icono: "fas fa-bookmark" },
                { nombre: "FakeYou. Deep Fake Text to Speech.", url: "https://fakeyou.com/", icono: "fas fa-bookmark" },
                { nombre: "MusicGen .ipynb - Colaboratory", url: "https://colab.research.google.com/drive/1CvvYPAFemIZdSOt9fhN541esSlZR7Ic6?usp=sharing#scrollTo=opNkn_Lgpat4", icono: "fas fa-bookmark" },
                { nombre: "ElevenLabs - Prime AI Text to Speech | Voice Cloning", url: "https://beta.elevenlabs.io/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "modelos",
            nombre: "Modelos",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Stable Diffusion XL (SDXL) Artist Study | Weird Wonderful AI Art", url: "https://weirdwonderfulai.art/resources/stable-diffusion-xl-sdxl-artist-study/", icono: "fas fa-bookmark" },
                { nombre: "sd-dreambooth-library (Stable Diffusion Dreambooth Concepts Library)", url: "https://huggingface.co/sd-dreambooth-library", icono: "fas fa-bookmark" },
                { nombre: "Civitai | Stable Diffusion models, embeddings, hypernetworks and more", url: "https://civitai.com/", icono: "fas fa-bookmark" },
                 { nombre: "ALPACA 13B en Hugginface", url: "https://huggingface.co/chavinlo/alpaca-13b", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "creador-imagenes",
            nombre: "Creador Imagenes",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Ilusiones", url: "https://huggingface.co/spaces/AP123/IllusionDiffusion", icono: "fas fa-bookmark" },
                { nombre: "Upside-Down-Diffusion - a Hugging Face Space by AP123", url: "https://huggingface.co/spaces/AP123/Upside-Down-Diffusion", icono: "fas fa-bookmark" },
                { nombre: "Adobe Firefly (Beta)", url: "https://firefly.adobe.com/", icono: "fas fa-bookmark" },
                { nombre: "DALL·E", url: "https://labs.openai.com/", icono: "fas fa-bookmark" },
                 { nombre: "DreamStudio", url: "https://beta.dreamstudio.ai/dream", icono: "fas fa-bookmark" },
                 { nombre: "Scribble Diffusion", url: "https://scribblediffusion.com/", icono: "fas fa-bookmark" },
                 { nombre: "Creador de imágenes de Microsoft Bing", url: "https://www.bing.com/create?toWww=1&redig=139FFE2FEC1B47588E02DD4954295C75", icono: "fas fa-bookmark" },
                 { nombre: "Text To Video de ALVARO", url: "https://huggingface.co/spaces/ElVarto/modelscope-text-to-video-synthesis", icono: "fas fa-bookmark" },
                 { nombre: "Text To Video", url: "https://huggingface.co/spaces/damo-vilab/modelscope-text-to-video-synthesis", icono: "fas fa-bookmark" },
                 { nombre: "Upscaler GRATUITO", url: "https://replicate.com/tencentarc/gfpgan", icono: "fas fa-bookmark" },
                 { nombre: "IA Colorea imagen", url: "https://palette.fm/", icono: "fas fa-bookmark" },
                 { nombre: "Plask: AI-powered Mocap Animation Tool", url: "https://plask.ai/", icono: "fas fa-bookmark" },
                 { nombre: "GitHub Copilot X: The AI-powered developer experience | The GitHub Blog", url: "https://github.blog/2023-03-22-github-copilot-x-the-ai-powered-developer-experience/", icono: "fas fa-bookmark" },
                 { nombre: "The latest GitHub previews", url: "https://github.com/features/preview", icono: "fas fa-bookmark" },
                 { nombre: "methexis-inc/img2prompt – Run with an API on Replicate", url: "https://replicate.com/methexis-inc/img2prompt", icono: "fas fa-bookmark" },
                 { nombre: "Projects - Runway", url: "https://app.runwayml.com/video-tools/teams/alvarovte/projects", icono: "fas fa-bookmark" },
                 { nombre: "Bardeen | Automate your repetitive tasks with one click", url: "https://www.bardeen.ai/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "ai-blockchain",
            nombre: "AI BlockChain",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "OrdinalsBot", url: "https://ordinalsbot.com/inscription/15a3aecd63494487ca96472c56caf9a13532d7bae46ce8c1ee80da94ec4c7535i0", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "monetizado",
            nombre: "Monetizado",
            icono: "fas fa-folder",
            marcadores: [] // Empty except for subfolders
        },
        {
            id: "elvartogames",
            nombre: "ElVartoGames",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Google AdMob", url: "https://apps.admob.com/v2/apps/list", icono: "fas fa-bookmark" },
                { nombre: "Todas las aplicaciones", url: "https://play.google.com/console/u/6/developers/6896502204440328404/app-list", icono: "fas fa-bookmark" },
                { nombre: "Cannon Ball Defense - Aplicaciones en Google Play", url: "https://play.google.com/store/apps/details?id=com.ElVartoGames.CannonBallDefense&pli=1", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "test-webs",
            nombre: "Test Webs",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "elvartogames.ga", url: "http://elvartogames.ga/", icono: "fas fa-bookmark" },
                { nombre: "Inicio | Elvartogames", url: "https://elvartogamesdev.wixsite.com/home", icono: "fas fa-bookmark" },
                { nombre: "(1) CannonBall Defense My First Game is Finally Live on the Play Store! : AndroidGaming", url: "https://www.reddit.com/r/AndroidGaming/comments/zrleid/cannonball_defense_my_first_game_is_finally_live/", icono: "fas fa-bookmark" },
                { nombre: "Cannon Ball Defense", url: "https://www.reddit.com/r/AndroidGaming/comments/zo66da/new_release_cannon_ball_defense/", icono: "fas fa-bookmark" },
                { nombre: "Home | ElVartoGames", url: "https://elvartogames1.odoo.com/", icono: "fas fa-bookmark" },
                { nombre: "Home | ElVartoGames", url: "https://elvartogames1.odoo.com/@/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "redaccion",
            nombre: "Redaccion ",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Publisuites | Inicio", url: "https://www.publisuites.com/publishers/", icono: "fas fa-bookmark" },
                { nombre: "Fiverr", url: "https://es.fiverr.com/?source=top_nav", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "cryptos",
            nombre: "Cryptos",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Cuenta Spot - Billetera - Binance", url: "https://www.binance.com/es/my/wallet/account/main", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "recursos-monetizado", // Renamed for uniqueness
            nombre: "Recursos",
            icono: "fas fa-folder",
            marcadores: [] // Empty except for subfolders
        },
        {
            id: "postproduccion",
            nombre: "PostProduccion",
            icono: "fas fa-folder",
            marcadores: [] // Empty except for subfolders
        },
        {
            id: "video-edicion",
            nombre: "Video & Edicion",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Clips for Editing 1", url: "https://docs.google.com/spreadsheets/d/1skOxgOStjiuHxu9tdIaPjeVxMC1tWFS9OaZPnbMJqsY/edit#gid=0", icono: "fas fa-bookmark" },
                { nombre: "Clips For Editing 2", url: "https://docs.google.com/spreadsheets/d/15DyDZOsmYxDQmPtKZRLDX9MeHhVFth4kHkLbQ00c4kY/edit#gid=0", icono: "fas fa-bookmark" },
                { nombre: "GreenScreen", url: "https://mega.nz/#F!PfBzkCSD!RCm2LJ9kredmIKxHBVJNVg", icono: "fas fa-bookmark" },
                { nombre: "Efecto ButterCup After Effects Tutorial - YouTube", url: "https://www.youtube.com/watch?v=qbv2XnVKx28", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "modelos-3d",
            nombre: "Modelos 3D",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "TurboSquid Vende y Compra", url: "http://www.turbosquid.com/", icono: "fas fa-bookmark" },
                { nombre: "TF3DM - 3D Models for free", url: "http://tf3dm.com/", icono: "fas fa-bookmark" },
                { nombre: "3D Model Download,Free 3D Models Download,Free 3D Texture_Crazy 3ds Max Free", url: "http://www.crazy3dfree.com/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "texturas",
            nombre: "Texturas",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Free textures - Texturelib", url: "http://texturelib.com/", icono: "fas fa-bookmark" },
                { nombre: "Textures.com - Textures for 3D, graphic design and Photoshop!", url: "http://www.textures.com/", icono: "fas fa-bookmark" },
                { nombre: "Texture Haven", url: "https://texturehaven.com/", icono: "fas fa-bookmark" },
                { nombre: "Poly Haven", url: "https://polyhaven.com/", icono: "fas fa-bookmark" },
                { nombre: "D&D 5e Character Generator", url: "https://tetra-cube.com/dnd/dnd-char-gen.html", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "materiales",
            nombre: "Materiales",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Materiales Mental Ray", url: "http://www.cgadvertising.com/pages/free-materials/mentalray-materials.php", icono: "fas fa-bookmark" },
                { nombre: "Materiales Iray", url: "https://www.lightworkdesign.com/images/support/3dsMaxDocumentation/features/materials/material-libraries.html", icono: "fas fa-bookmark" },
                { nombre: "Substance Source", url: "https://source.substance3d.com/allassets?free=true", icono: "fas fa-bookmark" },
                { nombre: "Substance Share « The Free Exchange Platform »", url: "https://share.substance3d.com/libraries?by_category_type_id=4", icono: "fas fa-bookmark" },
                { nombre: "MANGA DRAGON BALL SUPER", url: "https://www.descargas.descargarmangaspormega.com/dragon-ball-super-manga-mediafire/", icono: "fas fa-bookmark" },
                { nombre: "GitHub - jimzrt/Incognito_RCM: Wipes personal information from your Nintendo Switch via bare metal RCM payload", url: "https://github.com/jimzrt/Incognito_RCM", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "hdri",
            nombre: "HDRI ",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "HDRI Haven", url: "https://hdrihaven.com/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "nueva-carpeta-materiales", // Renamed for uniqueness
            nombre: "Nueva carpeta",
            icono: "fas fa-folder",
            marcadores: [] // Empty
        },
        {
            id: "musica-sonido",
            nombre: "Musica & Sonido",
            icono: "fas fa-folder",
            marcadores: [
                 { nombre: "Spotify", url: "https://play.spotify.com/home", icono: "fas fa-bookmark" },
                 { nombre: "Freesound", url: "https://www.freesound.org/browse/", icono: "fas fa-bookmark" },
                 { nombre: "Libreria Sonidos", url: "http://www.soundsnap.com/", icono: "fas fa-bookmark" },
                 { nombre: "Pack Especial “Dubstep”: VST, VSTi, Racks, Presets | Packs de Descargas", url: "http://laresdj.com/7/packs/2012/11/23/pack-especial-para-dubstep-vst-vsti-racks-presets/", icono: "fas fa-bookmark" },
                 { nombre: "Future Music - SONICplug | Tecnología musical y sonido", url: "http://www.futuremusic-es.com/", icono: "fas fa-bookmark" },
                 { nombre: "Free Drum Kits, Free Sound Kits, Free Sound Samples", url: "http://www.freedrumkits.net/", icono: "fas fa-bookmark" },
                 { nombre: "OpenDNS Dashboard > Settings", url: "https://dashboard.opendns.com/settings/", icono: "fas fa-bookmark" },
                 { nombre: "My Top 5 Plug-Ins for Film Audio Post Production - CRAS Blog", url: "http://www.audiorecordingschool.com/blog/top-5-plug-ins-film-audio-post-production/", icono: "fas fa-bookmark" },
                 { nombre: "Kontakt 5 | SAMPLES PARA KONTAKT 5", url: "http://sampleskontakt5.blogspot.com.es/search/label/Kontakt%205", icono: "fas fa-bookmark" },
                 { nombre: "The Guide To Sound Effects | Epic Sound", url: "http://www.epicsound.com/sfx/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "sin-copiright",
            nombre: "Sin copiright",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: ".: INDIEMANIA.COM :.", url: "http://indiemania.com/", icono: "fas fa-bookmark" },
                { nombre: "Download Sound Effects | SoundDogs.com", url: "http://www.sounddogs.com/", icono: "fas fa-bookmark" },
                { nombre: "LabChirp - Labbed.net", url: "http://labbed.net/software.php?id=labchirp", icono: "fas fa-bookmark" },
                { nombre: "Bfxr. Make sound effects for your games.", url: "http://www.bfxr.net/", icono: "fas fa-bookmark" },
                { nombre: "Composer Gallery - Indie Loop Garden", url: "http://www.indieloopgarden.com/", icono: "fas fa-bookmark" },
                { nombre: "Your stream on SoundCloud", url: "https://soundcloud.com/stream", icono: "fas fa-bookmark" },
                { nombre: "freeSFX.co.uk - Download Free Sound Effects", url: "http://www.freesfx.co.uk/", icono: "fas fa-bookmark" },
                { nombre: "Soundrangers Sound Effects Downloads and Production Music Library, Custom Video Game Sounds", url: "http://www.soundrangers.com/", icono: "fas fa-bookmark" },
                { nombre: "Free Loops Samples Acapellas Vocals Downloads Royalty Free Music", url: "http://www.looperman.com/", icono: "fas fa-bookmark" },
                { nombre: "Jamendo - Música en descarga gratis - Licencias", url: "https://www.jamendo.com/es/welcome", icono: "fas fa-bookmark" },
                { nombre: "Epidemic Sound | A Music Company Reimagined", url: "http://www.epidemicsound.com/", icono: "fas fa-bookmark" },
                { nombre: "Piskel", url: "https://www.piskelapp.com/", icono: "fas fa-bookmark" },
                { nombre: "Facebook", url: "https://m.facebook.com/events/join_near_by/?acontext=%7B%22ref%22%3A%2229%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22notifications_tab%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A[]%7D]%22%7D¬if_id=1530267311577569&event_ids=1658475814196140%2C1892842067632317¬if_t=feed_comment&ref=m_notif", icono: "fas fa-bookmark" },
                { nombre: "Free Sheet Music, Royalty Free & Public Domain Music | Musopen", url: "https://musopen.org/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "drum-kits",
            nombre: "Drum Kits",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Drum Kits - Free Drum Kits", url: "http://freedrumkits.net/drum-kits/", icono: "fas fa-bookmark" },
                { nombre: "SoundPacks.com | Free Sample Packs, Drum Kits & Presets", url: "https://soundpacks.com/", icono: "fas fa-bookmark" },
                { nombre: "SoundMajorz", url: "https://www.soundmajorz.com/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "vinilos-digitalizados",
            nombre: "Vinilos Digitalizados",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "78rpm Records Digitized by George Blood, L.P. : Free Audio : Free Download, Borrow and Streaming : Internet Archive", url: "https://archive.org/details/georgeblood", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "paranoias",
            nombre: "Paranoias",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Staggering Beauty", url: "http://www.staggeringbeauty.com/", icono: "fas fa-bookmark" },
                { nombre: "7 sitios web que no sirven para nada pero aún así son interesantes - TechTear", url: "http://tech.batanga.com/13589/7-sitios-web-que-no-sirven-para-nada-pero-aun-asi-son-interesantes", icono: "fas fa-bookmark" },
                { nombre: "The Useless Web", url: "http://www.theuselessweb.com/", icono: "fas fa-bookmark" },
                { nombre: "Portal del Vicio", url: "http://www.portaldelvicio.net/index.php", icono: "fas fa-bookmark" },
                { nombre: "Explicación de la teoría de la relatividad general de Einstein - Ojo Curioso", url: "http://curiosidades.batanga.com/4422/explicacion-de-la-teoria-de-la-relatividad-general-de-einstein", icono: "fas fa-bookmark" },
                { nombre: "Curso grado superior de edicion y montaje", url: "http://www.curvapolar.com/curso_EM.php", icono: "fas fa-bookmark" },
                { nombre: "Hacker Typer", url: "http://hackertyper.com/", icono: "fas fa-bookmark" },
                { nombre: "Así es como han cambiado tus video juegos favoritos y la transformación es sorprendente | Upsocl", url: "http://www.upsocl.com/comunidad/asi-es-como-han-cambiado-tus-video-juegos-favoritos-y-la-transformacion-es-sorprendente/?utm_source=Portada&utm_medium=Pagina&utm_campaign=links", icono: "fas fa-bookmark" },
                { nombre: "Skullgirls/Painwheel - Shoryuken Wiki!", url: "http://wiki.shoryuken.com/Skullgirls/Painwheel#Special_Moves", icono: "fas fa-bookmark" },
                { nombre: "This is not real life. This is Unreal Engine 4. - Album on Imgur", url: "http://imgur.com/a/SM5em", icono: "fas fa-bookmark" },
                { nombre: "Geekvida.com móviles , tabletes ,Accesorios y mucho más!!!", url: "http://www.geekvida.es/", icono: "fas fa-bookmark" },
                { nombre: "THERE IS NO GAME", url: "http://www.newgrounds.com/portal/view/659792", icono: "fas fa-bookmark" },
                { nombre: "Todas las clases en orden | DedosTorpes - Diario de practicas", url: "http://dedostorpes.com/todas-las-clases-en-orden/", icono: "fas fa-bookmark" },
                { nombre: "big long now .com by rafaël rozendaal, 2006, collection of sébastien de ganay", url: "http://www.biglongnow.com/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "bitcoins",
            nombre: "BITCOINS",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Surf Ads | BTCClicks", url: "http://btcclicks.com/ads", icono: "fas fa-bookmark" },
                { nombre: "Binance", url: "https://www.binance.com/es/trade/BTC_USDT", icono: "fas fa-bookmark" },
                { nombre: "Coinbase", url: "https://www.coinbase.com/dashboard", icono: "fas fa-bookmark" },
                { nombre: "Cryptocurrency Market Capitalizations | CoinMarketCap", url: "https://coinmarketcap.com/", icono: "fas fa-bookmark" },
                { nombre: "Trader jabisai — Ideas y gráficos de trading — TradingView", url: "https://es.tradingview.com/u/jabisai/", icono: "fas fa-bookmark" },
                { nombre: "Conversor Cartera LiteCoin", url: "https://litecoin-project.github.io/p2sh-convert/", icono: "fas fa-bookmark" },
                { nombre: "CRYPTOMININGFARM - Virtual Bitcoin Mining", url: "https://www.cryptominingfarm.io/", icono: "fas fa-bookmark" },
                { nombre: "Blockchain Wallet - Exchange Cryptocurrency", url: "https://login.blockchain.com/en/#/home", icono: "fas fa-bookmark" },
                { nombre: "3dmax", url: "http://www.intercambiosvirtuales.org/software/autodesk-products-2020-multilenguaje-espanol", icono: "fas fa-bookmark" },
                { nombre: "#", url: "https://tweetdeck.twitter.com/#", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "nueva-carpeta",
            nombre: "Nueva carpeta",
            icono: "fas fa-folder",
            marcadores: [] // Empty except for subfolders
        },
        {
            id: "tokyo-lords",
            nombre: "Tokyo Lords",
            icono: "fas fa-folder",
            marcadores: [] // Empty
        },
        {
            id: "ordenar",
            nombre: "Ordenar",
            icono: "fas fa-folder",
            marcadores: [] // Empty except for subfolders
        },
        {
            id: "rdo",
            nombre: "RDO",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Red Dead Online - RDO Map", url: "https://jeanropke.github.io/RDOMap/", icono: "fas fa-bookmark" },
                { nombre: "Red Dead Online Daily Challenges - CoyoteJack", url: "https://www.coyotejack.net/red-dead-dailies/", icono: "fas fa-bookmark" },
                { nombre: "GTALens: Enhanced GTA Online Jobs Catalogue", url: "https://gtalens.com/", icono: "fas fa-bookmark" },
                { nombre: "Red Dead Online - Collectors Map", url: "https://jeanropke.github.io/RDR2CollectorsMap/", icono: "fas fa-bookmark" }
            ]
        },
         // Note: The following categories were deeply nested but are flattened here.
         // You might want to organize them differently based on your dashboard's logic.
        {
            id: "postproduccion-ordenar", // Renamed for uniqueness
            nombre: "PostProduccion",
            icono: "fas fa-folder",
            marcadores: []
        },
        {
            id: "video-edicion-ordenar", // Renamed for uniqueness
            nombre: "Video & Edicion",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Clips for Editing 1", url: "https://docs.google.com/spreadsheets/d/1skOxgOStjiuHxu9tdIaPjeVxMC1tWFS9OaZPnbMJqsY/edit#gid=0", icono: "fas fa-bookmark" },
                { nombre: "Clips For Editing 2", url: "https://docs.google.com/spreadsheets/d/15DyDZOsmYxDQmPtKZRLDX9MeHhVFth4kHkLbQ00c4kY/edit#gid=0", icono: "fas fa-bookmark" },
                { nombre: "GreenScreen", url: "https://mega.nz/#F!PfBzkCSD!RCm2LJ9kredmIKxHBVJNVg", icono: "fas fa-bookmark" },
                { nombre: "Efecto ButterCup After Effects Tutorial - YouTube", url: "https://www.youtube.com/watch?v=qbv2XnVKx28", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "modelos-3d-ordenar", // Renamed for uniqueness
            nombre: "Modelos 3D",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "TurboSquid Vende y Compra", url: "http://www.turbosquid.com/", icono: "fas fa-bookmark" },
                { nombre: "TF3DM - 3D Models for free", url: "http://tf3dm.com/", icono: "fas fa-bookmark" },
                { nombre: "3D Model Download,Free 3D Models Download,Free 3D Texture_Crazy 3ds Max Free", url: "http://www.crazy3dfree.com/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "texturas-ordenar", // Renamed for uniqueness
            nombre: "Texturas",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Free textures - Texturelib", url: "http://texturelib.com/", icono: "fas fa-bookmark" },
                { nombre: "Textures.com - Textures for 3D, graphic design and Photoshop!", url: "http://www.textures.com/", icono: "fas fa-bookmark" },
                { nombre: "Texture Haven", url: "https://texturehaven.com/", icono: "fas fa-bookmark" },
                { nombre: "Poly Haven", url: "https://polyhaven.com/", icono: "fas fa-bookmark" },
                { nombre: "D&D 5e Character Generator", url: "https://tetra-cube.com/dnd/dnd-char-gen.html", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "materiales-ordenar", // Renamed for uniqueness
            nombre: "Materiales",
            icono: "fas fa-folder",
            marcadores: [
                 { nombre: "Materiales Mental Ray", url: "http://www.cgadvertising.com/pages/free-materials/mentalray-materials.php", icono: "fas fa-bookmark" },
                 { nombre: "Materiales Iray", url: "https://www.lightworkdesign.com/images/support/3dsMaxDocumentation/features/materials/material-libraries.html", icono: "fas fa-bookmark" },
                 { nombre: "Substance Source", url: "https://source.substance3d.com/allassets?free=true", icono: "fas fa-bookmark" },
                 { nombre: "Substance Share « The Free Exchange Platform »", url: "https://share.substance3d.com/libraries?by_category_type_id=4", icono: "fas fa-bookmark" },
                 { nombre: "MANGA DRAGON BALL SUPER", url: "https://www.descargas.descargarmangaspormega.com/dragon-ball-super-manga-mediafire/", icono: "fas fa-bookmark" },
                 { nombre: "GitHub - jimzrt/Incognito_RCM: Wipes personal information from your Nintendo Switch via bare metal RCM payload", url: "https://github.com/jimzrt/Incognito_RCM", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "hdri-ordenar", // Renamed for uniqueness
            nombre: "HDRI ",
            icono: "fas fa-folder",
            marcadores: [
                 { nombre: "HDRI Haven", url: "https://hdrihaven.com/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "nueva-carpeta-materiales-ordenar", // Renamed for uniqueness
            nombre: "Nueva carpeta",
            icono: "fas fa-folder",
            marcadores: []
        },
        {
            id: "musica-sonido-ordenar", // Renamed for uniqueness
            nombre: "Musica & Sonido",
            icono: "fas fa-folder",
            marcadores: [
                 { nombre: "Spotify", url: "https://play.spotify.com/home", icono: "fas fa-bookmark" },
                 { nombre: "Freesound", url: "https://www.freesound.org/browse/", icono: "fas fa-bookmark" },
                 { nombre: "Libreria Sonidos", url: "http://www.soundsnap.com/", icono: "fas fa-bookmark" },
                 { nombre: "Pack Especial “Dubstep”: VST, VSTi, Racks, Presets | Packs de Descargas", url: "http://laresdj.com/7/packs/2012/11/23/pack-especial-para-dubstep-vst-vsti-racks-presets/", icono: "fas fa-bookmark" },
                 { nombre: "Future Music - SONICplug | Tecnología musical y sonido", url: "http://www.futuremusic-es.com/", icono: "fas fa-bookmark" },
                 { nombre: "Free Drum Kits, Free Sound Kits, Free Sound Samples", url: "http://www.freedrumkits.net/", icono: "fas fa-bookmark" },
                 { nombre: "OpenDNS Dashboard > Settings", url: "https://dashboard.opendns.com/settings/", icono: "fas fa-bookmark" },
                 { nombre: "My Top 5 Plug-Ins for Film Audio Post Production - CRAS Blog", url: "http://www.audiorecordingschool.com/blog/top-5-plug-ins-film-audio-post-production/", icono: "fas fa-bookmark" },
                 { nombre: "Kontakt 5 | SAMPLES PARA KONTAKT 5", url: "http://sampleskontakt5.blogspot.com.es/search/label/Kontakt%205", icono: "fas fa-bookmark" },
                 { nombre: "The Guide To Sound Effects | Epic Sound", url: "http://www.epicsound.com/sfx/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "sin-copiright-ordenar", // Renamed for uniqueness
            nombre: "Sin copiright",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: ".: INDIEMANIA.COM :.", url: "http://indiemania.com/", icono: "fas fa-bookmark" },
                { nombre: "Download Sound Effects | SoundDogs.com", url: "http://www.sounddogs.com/", icono: "fas fa-bookmark" },
                { nombre: "LabChirp - Labbed.net", url: "http://labbed.net/software.php?id=labchirp", icono: "fas fa-bookmark" },
                { nombre: "Bfxr. Make sound effects for your games.", url: "http://www.bfxr.net/", icono: "fas fa-bookmark" },
                { nombre: "Composer Gallery - Indie Loop Garden", url: "http://www.indieloopgarden.com/", icono: "fas fa-bookmark" },
                { nombre: "Your stream on SoundCloud", url: "https://soundcloud.com/stream", icono: "fas fa-bookmark" },
                { nombre: "freeSFX.co.uk - Download Free Sound Effects", url: "http://www.freesfx.co.uk/", icono: "fas fa-bookmark" },
                { nombre: "Soundrangers Sound Effects Downloads and Production Music Library, Custom Video Game Sounds", url: "http://www.soundrangers.com/", icono: "fas fa-bookmark" },
                { nombre: "Free Loops Samples Acapellas Vocals Downloads Royalty Free Music", url: "http://www.looperman.com/", icono: "fas fa-bookmark" },
                { nombre: "Jamendo - Música en descarga gratis - Licencias", url: "https://www.jamendo.com/es/welcome", icono: "fas fa-bookmark" },
                { nombre: "Epidemic Sound | A Music Company Reimagined", url: "http://www.epidemicsound.com/", icono: "fas fa-bookmark" },
                { nombre: "Piskel", url: "https://www.piskelapp.com/", icono: "fas fa-bookmark" },
                { nombre: "Facebook", url: "https://m.facebook.com/events/join_near_by/?acontext=%7B%22ref%22%3A%2229%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22notifications_tab%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A[]%7D]%22%7D¬if_id=1530267311577569&event_ids=1658475814196140%2C1892842067632317¬if_t=feed_comment&ref=m_notif", icono: "fas fa-bookmark" },
                { nombre: "Free Sheet Music, Royalty Free & Public Domain Music | Musopen", url: "https://musopen.org/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "drum-kits-ordenar", // Renamed for uniqueness
            nombre: "Drum Kits",
            icono: "fas fa-folder",
            marcadores: [
                 { nombre: "Drum Kits - Free Drum Kits", url: "http://freedrumkits.net/drum-kits/", icono: "fas fa-bookmark" },
                 { nombre: "SoundPacks.com | Free Sample Packs, Drum Kits & Presets", url: "https://soundpacks.com/", icono: "fas fa-bookmark" },
                 { nombre: "SoundMajorz", url: "https://www.soundmajorz.com/", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "vinilos-digitalizados-ordenar", // Renamed for uniqueness
            nombre: "Vinilos Digitalizados",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "78rpm Records Digitized by George Blood, L.P. : Free Audio : Free Download, Borrow and Streaming : Internet Archive", url: "https://archive.org/details/georgeblood", icono: "fas fa-bookmark" }
            ]
        },
        {
            id: "paranoias-ordenar", // Renamed for uniqueness
            nombre: "Paranoias",
            icono: "fas fa-folder",
            marcadores: [
                { nombre: "Staggering Beauty", url: "http://www.staggeringbeauty.com/", icono: "fas fa-bookmark" },
                { nombre: "7 sitios web que no sirven para nada pero aún así son interesantes - TechTear", url: "http://tech.batanga.com/13589/7-sitios-web-que-no-sirven-para-nada-pero-aun-asi-son-interesantes", icono: "fas fa-bookmark" },
                { nombre: "The Useless Web", url: "http://www.theuselessweb.com/", icono: "fas fa-bookmark" },
                { nombre: "Portal del Vicio", url: "http://www.portaldelvicio.net/index.php", icono: "fas fa-bookmark" },
                { nombre: "Explicación de la teoría de la relatividad general de Einstein - Ojo Curioso", url: "http://curiosidades.batanga.com/4422/explicacion-de-la-teoria-de-la-relatividad-general-de-einstein", icono: "fas fa-bookmark" },
                { nombre: "Curso grado superior de edicion y montaje", url: "http://www.curvapolar.com/curso_EM.php", icono: "fas fa-bookmark" },
                { nombre: "Hacker Typer", url: "http://hackertyper.com/", icono: "fas fa-bookmark" },
                { nombre: "Así es como han cambiado tus video juegos favoritos y la transformación es sorprendente | Upsocl", url: "http://www.upsocl.com/comunidad/asi-es-como-han-cambiado-tus-video-juegos-favoritos-y-la-transformacion-es-sorprendente/?utm_source=Portada&utm_medium=Pagina&utm_campaign=links", icono: "fas fa-bookmark" },
                { nombre: "Skullgirls/Painwheel - Shoryuken Wiki!", url: "http://wiki.shoryuken.com/Skullgirls/Painwheel#Special_Moves", icono: "fas fa-bookmark" },
                { nombre: "This is not real life. This is Unreal Engine 4. - Album on Imgur", url: "http://imgur.com/a/SM5em", icono: "fas fa-bookmark" },
                { nombre: "Geekvida.com móviles , tabletes ,Accesorios y mucho más!!!", url: "http://www.geekvida.es/", icono: "fas fa-bookmark" },
                { nombre: "THERE IS NO GAME", url: "http://www.newgrounds.com/portal/view/659792", icono: "fas fa-bookmark" },
                { nombre: "Todas las clases en orden | DedosTorpes - Diario de practicas", url: "http://dedostorpes.com/todas-las-clases-en-orden/", icono: "fas fa-bookmark" },
                { nombre: "big long now .com by rafaël rozendaal, 2006, collection of sébastien de ganay", url: "http://www.biglongnow.com/", icono: "fas fa-bookmark" }
            ]
        },
         {
             id: "bitcoins-ordenar", // Renamed for uniqueness
             nombre: "BITCOINS",
             icono: "fas fa-folder",
             marcadores: [
                 { nombre: "Surf Ads | BTCClicks", url: "http://btcclicks.com/ads", icono: "fas fa-bookmark" },
                 { nombre: "Binance", url: "https://www.binance.com/es/trade/BTC_USDT", icono: "fas fa-bookmark" },
                 { nombre: "Coinbase", url: "https://www.coinbase.com/dashboard", icono: "fas fa-bookmark" },
                 { nombre: "Cryptocurrency Market Capitalizations | CoinMarketCap", url: "https://coinmarketcap.com/", icono: "fas fa-bookmark" },
                 { nombre: "Trader jabisai — Ideas y gráficos de trading — TradingView", url: "https://es.tradingview.com/u/jabisai/", icono: "fas fa-bookmark" },
                 { nombre: "Conversor Cartera LiteCoin", url: "https://litecoin-project.github.io/p2sh-convert/", icono: "fas fa-bookmark" },
                 { nombre: "CRYPTOMININGFARM - Virtual Bitcoin Mining", url: "https://www.cryptominingfarm.io/", icono: "fas fa-bookmark" },
                 { nombre: "Blockchain Wallet - Exchange Cryptocurrency", url: "https://login.blockchain.com/en/#/home", icono: "fas fa-bookmark" },
                 { nombre: "3dmax", url: "http://www.intercambiosvirtuales.org/software/autodesk-products-2020-multilenguaje-espanol", icono: "fas fa-bookmark" },
                 { nombre: "#", url: "https://tweetdeck.twitter.com/#", icono: "fas fa-bookmark" }
             ]
         }
        // Add placeholder categories if needed, following the structure in your example
    ]
};

// Helper function to generate simple IDs (you might need a more robust one)
function generateId(name) {
    return name.toLowerCase()
               .replace(/ñ/g, 'n') // Replace ñ with n
               .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u') // Remove accents
               .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except spaces and hyphens
               .replace(/\s+/g, '-') // Replace spaces with hyphens
               .replace(/-+/g, '-'); // Replace multiple hyphens with single
}

// You would typically use a DOM parser in a real script to extract this data.
// This example is manually constructed based on the provided HTML structure.
// IDs were generated using a simple function, duplicates were manually suffixed.
// Icons are default placeholders as requested.
