import Streamer from "./Streamer";

const streamers = [
    {
        name: "ibai",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-70x70.png",
        isLive: true,
        description: "Eventos especi...",
        viewers: 127890
    },
    {
        name: "easportsfc",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/d5ac63ef-75f5-4392-9032-ca59a170a4a1-profile_image-70x70.png",
        isLive: true,
        description: "EA Sports FC 24",
        viewers: 211683
    },
    {
        name: "evaanna",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/ff27b921-6c97-4b5c-ab7e-7a39daad3ea1-profile_image-70x70.png",
        isLive: true,
        description: "Piscinas,jacuzzis...",
        viewers: 2985
    },
    {
        name: "SandrsSkins",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/a16b82f7-78c7-4ea9-9203-703f2f50dfcf-profile_image-70x70.png",
        isLive: true,
        description: "Charlando",
        viewers: 1638
    }
];

export default function StreamerList(){
    return(
        <aside className="w-[280px] bg-[#1f1f23] h-screen flex flex-col">
            <h2 className="text-[0.9rem] font-semibold uppercase leading-5 p-1">Canales recomendados</h2>
            {
                streamers.map((streamer) => {
                    return(
                        <Streamer 
                        avatar={streamer.avatar} 
                        key={streamer.name}
                        name={streamer.name} 
                        description={streamer.description} 
                        viewers={streamer.viewers}/>
                    )
                })
            }
        </aside>
    );
}