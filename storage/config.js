export default{
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
            cont: {
                title:"Descubre tu siguiente juego favorito", title2:"Bienvendido a XNKfus", class1:"thiss", class2:"perspective", class3:"sq", class4:"s1", class5:"s2", class6:"s3", class7:"s4"},
        }))
    },
    dataMySelectors(){
        localStorage.setItem("mySelectors", JSON.stringify({
            contenidos:{
                genero: {
                    option: {muestra:"Filtrar por genero"},
                    option1:{val:"accion",muestra: "Acción"},
                    option2:{val:"sand",muestra:"Sandbox"},
                    option3:{val:"aven",muestra:"Aventura"},
                    option4:{val:"survival", muestra:"Survival"},
                    option5:{val:"shooter",muestra:"Shooter"},
                    option6:{val:"multi",muestra:"Multijugador"}
                },
                ram: {
                    option: {muestra: "RAM minima requerida"},
                    option1:{val:"2gb",muestra:"2GB"},
                    option2:{val:"4gb",muestra:"4GB"},
                    option3:{val:"8gb",muestra:"8GB"}
                },
                almac:{
                    option:{muestra:"Almacenamiento requerido"},
                    option1:{val:parseFloat("0.2"),muestra:"Menos de 250MB"},
                    option2:{val:parseFloat("29"),muestra:"Mas de 250MB y menos de 30GB"},
                    option3:{val:parseFloat("30"),muestra:"Mas de 30 GB"}
                },
                plataforma:{
                    option:{muestra:"Dispositivos disponibles"},
                    option1:{val:"pc",muestra:"PC"},
                    option2:{val:"movil",muestra:"Movil"},
                    option3:{val:"consola",muestra:"Consola"}
                },
                precio:{
                    option: {val:"",muestra:"De paga o gratis"},
                    option1:{val:parseFloat("0"),muestra:"Free to play"},
                    option2:{val:parseFloat("1"),muestra:"Pay to play ($)"}
                }
            }
            
        }))
    },
    dataMyCards(){
        localStorage.setItem("myCards", JSON.stringify({
            games:[
                {
                    name:"Grand Theft Auto V",
                    gene:"Acción" +", " + "Sandbox" + ", " + "Aventura",
                    ram:parseFloat("8"),
                    almac:parseFloat("72"),
                    plataforma:"Consola" + ", "+ "PC",
                    precio:parseFloat(`46,200`),
                    descripcion:"Grand Theft Auto V, abreviado como GTA V o GTA 5, es un videojuego de acción-aventura de mundo abierto desarrollado por la compañía británica Rockstar North y distribuido por Rockstar Games.",
                    criticas:"Al 95% les ha gustado este videojuego" + "4.7/5 · Videojuegos - Roams.es",
                    img:"img/gta5.jpeg"
                },
                {
                    name:"CoD: Warzone",
                    gene:"Shooter" + ", "+ "Acción" + ", "+ "Multijugador",
                    ram:parseFloat("8"),
                    almac:parseFloat("125"),
                    plataforma:"Consola" + ", "+ "PC",
                    precio:parseFloat("0"),
                    descripcion:"Call of Duty: Warzone es un videojuego de disparos en primera persona, perteneciente al género Battle royale gratuito, lanzado el 10 de marzo de 2020 para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y Microsoft Windows. El modo juego está disponible en estas plataformas y es parte del videojuego de 2019, Call of Duty: Modern Warfare, pero no requiere su compra y se presentó durante la temporada 2 del contenido de Modern Warfare",
                    criticas:"Al 92% les ha gustado este videojuego" + "8/10 · IGN España",
                    img:"img/warzone.jpeg"
                },
                {
                    name:"Among Us",
                    gene:"Multijugador",
                    ram:parseFloat("2"),
                    almac:parseFloat("0.25"),//mb
                    plataforma:"Movil"+ ", " + "PC",
                    precio:parseFloat("0"), 
                    descripcion:"Among Us es un juego multijugador en línea con clasificación PEGI 7+ que permite que un máximo de 10 jugadores asuman los roles de 'Compañero de tripulación' o 'Impostor'. El objetivo del juego es que los Crewmates identifiquen a los jugadores que son los impostores en el juego.",
                    criticas:"8/10 · IGN España",
                    img:"img/amongus.jpeg"
                },
                {
                    name:"Roblox",
                    gene:"Multijugador",
                    ram:parseFloat("2"),
                    almac:parseFloat("0.02"),
                    plataforma:"Movil"+ ", " + "PC" + ", "+ "Consola",
                    precio:parseFloat("0"), 
                    descripcion:"Roblox es una plataforma de entretenimiento online para jugar que permite a las personas crear juegos para el público a través de herramienta digital de Roblox conocida como Roblox Estudio. Hay literalmente millones de juegos en Roblox.",
                    criticas:"2.2/5 · Trustpilot",
                    img:"img/roblox.jpeg"
                },
                {
                    name:"Genshin Impact",
                    gene:"Aventura" + ", " + "Acción",
                    ram:parseFloat("4"),
                    almac:parseFloat("8"),
                    plataforma:"Movil" + ", "+ "PC" ,
                    precio:parseFloat("0"), 
                    descripcion:"Genshin Impact es un videojuego de rol de acción de mundo abierto y gratuito, con una mecánica de monetización de gacha para conseguir elementos adicionales como personajes especiales y armas.",
                    criticas:"Al 86% les ha gustado este juego - 8.2/10 · Vandal",
                    img:"img/genshin.jpeg"
                },
                {
                    name:"Terraria",
                    gene:"Sandbox" + ", " + "Aventura" + ", " + "Acción",
                    ram:parseFloat("2"),
                    almac:parseFloat("0.2"),
                    plataforma:"Movil" + ", "+ "PC" + ", "+ "Consola" ,
                    precio:parseFloat("23,500"), 
                    descripcion:"Terraria es un videojuego de mundo abierto en 2D. Contiene elementos de construcción, exploración, aventura y combate, muy similar a juegos clásicos de la consola Super NES, como por ejemplo la serie Metroid, y a otras entregas no tan antiguas como Minecraft. El juego comienza en un mundo creado de forma aleatoria.",
                    criticas:"Al 79% les ha gustado este juego - 8.5/10 · LevelUp",
                    img:"img/terraria.jpeg"
                },
                {
                    name:"Minecraft",
                    gene:"Sandbox" + ", "+  "Acción"+ ", " + "Aventura"+ ", " + "Survival",
                    ram:parseFloat("2"),
                    almac:parseFloat("0.2"),
                    plataforma:"Movil"+ ", " + "PC"+ ", " + "Consola" ,
                    precio:parseFloat("116,500"), 
                    descripcion:"Minecraft es un videojuego tipo sandbox, su traducción literal sería “caja de arena” y es lo que representa la experiencia de juego. Los jugadores pueden modelar el mundo a su gusto, destruir y construir, como si estuviesen jugando en una caja de arena.",
                    criticas:"2.9/5 · Trustpilot - 9/10 · Vandal",
                    img:"img/minecraft.jpeg"
                },
                {
                    name:"The binding of Isaac",
                    gene:"Acción"+ ", " + "Aventura",
                    ram:parseFloat("2"),
                    almac:parseFloat("0.05"),
                    plataforma:"PC"+ ", "+ "Consola" ,
                    precio:parseFloat("84,500"), 
                    descripcion:"The Binding of Isaac es un juego de acción RPG con fuertes elementos de tipo Roguelike, en el cual los niveles son generados aleatoriamente. En el transcurso del viaje de un niño llamado Isaac, los jugadores encontrarán extraños tesoros que cambiarán la forma de Isaac, le darán habilidades y poderes sobrehumanos que le permitirán luchar contra hordas de criaturas aterradoras y diabólicas, descubrir secretos y abrirse camino a su supervivencia. ",
                    criticas:"Al 95% les ha gustado este videojuego - 8.8/10 · Vandal - 4.6/5 · Gamehag",
                    img:"img/tboi.jpeg"
                },
                {
                    name:"Don't Starve Together",
                    gene:"Survival"+ ", " + "Aventura" ,
                    ram:parseFloat("2"),
                    almac:parseFloat("0.5"),
                    plataforma:"PC" + ", "+ "Movil"+ ", "+ "Consola",
                    precio:parseFloat(`25,000`), 
                    descripcion:"Don't Starve es un videojuego de supervivencia con elementos de survival horror y roguelike lanzado en 2013. Fue desarrollado y publicado por la empresa de videojuegos independiente Klei Entertainment. El juego fue lanzado inicialmente a través de Steam para Microsoft Windows, OS X y Linux el 23 de abril de 2013, con una versión para PlayStation 4 al año siguiente. Recientemente los desarrolladores lanzaron al Mercado Don't Starve Pocket Edition que es para móviles.",
                    criticas:"Al 95% les ha gustado este videojuego - 8.2/10 IGN España - 8.6/10 · Vandal",
                    img:"img/dst.jpeg"
                },
                {
                    name:"Undertale",
                    gene: "Aventura"+ ", " + "Acción",
                    ram:parseFloat("2"),
                    almac:parseFloat("0.2"),
                    plataforma:"PC"+ ", " + "Consola",
                    precio:parseFloat("23,500"), 
                    descripcion:"Undertale es un videojuego de rol en 2D de 2015 creado por el desarrollador independiente estadounidense Toby Fox. El jugador controla a un niño que ha caído al subsuelo: una gran región aislada bajo la superficie de la Tierra, separada por una barrera mágica.",
                    criticas:"Al 97% les ha gustado este videojuego - 8.2/10 IGN España - 8.6/10 · Vandal",
                    img:"img/undertale.jpeg"
                }
            ]
        }))
    }
}