import CategoryCard from "./CategoryCard"
export default function CategoryList(){
    return(
        <main className="flex flex-wrap gap-3 ms-6">
            <CategoryCard name="Charlando" viewers={508858} genre="IRL" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"/>
            <CategoryCard name="Anime World" viewers={5491} genre="RPG" image="https://static-cdn.jtvnw.net/ttv-boxart/637756067_IGDB-285x380.jpg"/>
            <CategoryCard name="Fortine" viewers={231117} genre="Shooter" image="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg"/>
            <CategoryCard name="The Simpsons: Hit..." viewers={661} genre="Plataformas" image="https://static-cdn.jtvnw.net/ttv-boxart/2897_IGDB-285x380.jpg"/>
            <CategoryCard name="Grand Thef Auto V" viewers={367646} genre="Shooter" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"/>
            <CategoryCard name="Eventos especiales" viewers={8662} genre="IRL" image="https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg"/>
            <CategoryCard name="Dragon Ball" viewers={1532} genre="Acción" image="https://static-cdn.jtvnw.net/ttv-boxart/317912951_IGDB-285x380.jpg"/>
            <CategoryCard name="League of Legends" viewers={162832} genre="RPG" image="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"/>
            <CategoryCard name="Rust" viewers={185551} genre="Shooter" image="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg"/>
            <CategoryCard name="Dota 2" viewers={75611} genre="MOBA" image="https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"/>
        </main>
    )
}