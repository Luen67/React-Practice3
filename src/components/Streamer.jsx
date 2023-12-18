export default function Streamer(streamer){
    return(
        <div className="flex p-1">
            <div className="w-[50%]">
                <div className="w-[2.5rem] h-[2.5rem] max-h-[100%]">
                    <img className="w-[100%] rounded-full block" src={streamer.avatar} alt="" />
                </div>
            </div>
            <div className=" w-[100%]">
                <p className="font-semibold text-[#dedee3] text-[1rem] leading-4">{streamer.name}</p>        
                <p className="text-[#adadb8] text-[1rem] leading-4">{streamer.description}</p>
            </div>
            <div className="flex items-center justify-end w-[100%]">
                <div className="bg-[#eb0400] w-[0.6rem] h-[0.6rem] inline-block rounded-full relative"></div>
                <span className="text-[#dedee3] text-[1rem]">{streamer.viewers}</span>
            </div>
        </div> 
    );
}