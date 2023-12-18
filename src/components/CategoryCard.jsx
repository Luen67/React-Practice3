export default function CategoryCard(category){
    return(
        <div>
            <div className="w-[171px] max-h-[100%]">
                <img src={category.image} alt="" />
            </div>
            <div>
                <h2 className="text-[1rem] leading-6 font-bold">{category.name}</h2>
                <p className="text-[0.9rem] leading-6 text-[#adadb8]">{category.viewers} espectadores</p>
            </div>
            <div>
                <button className="rounded-full font-semibold bg-[rgba(83,83,95,.38)] border-2 border-solid h-[1.7rem] max-w-[100%] border-transparent inline-block">
                    <span className="text-xs text-center ps-[0.8rem] pe-[0.8rem] font-bold text-[#adadb8]">{category.genre}</span>
                </button>
            </div>            
        </div>
    );
}