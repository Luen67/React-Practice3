export default function NavBar(){
    return(
        <nav className="bg-[#18181a] h-12 flex flex-row p-2">
            <div className="flex flex-row gap-5  w-[20%]">
                <img  src="https://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png" alt="" />
                <div className="font-bold hover:text-purple-400 hover:cursor-pointer">Explorar</div>
            </div>
            <div className="flex flex-row justify-center w-[80%]">
                <input type="text" placeholder="Buscar" className="text-[#efeff1] bg-[#18181b] border-[1px] border-solid rounded-s-md p-[0.5rem_1rem_0.5rem_1rem] shadow-[hsla(240,8%,88%,.4)] focus:border-[#097ff] focus:shadow-purple-900 w-[40%]" />
                <button className="font-semibold bg-[rgba(83,83,95,.38)] text-[#efeff1] rounded-r-md">
                <svg width="90%" height="90%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" data-a-selector="tw-core-button-icon"><g className="fill-current"><path fill-rule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clip-rule="evenodd"></path></g></svg>
                </button>
            </div>
            <div className="flex flex-row justify-end  w-[20%]">

            </div>
        </nav>
    );
}