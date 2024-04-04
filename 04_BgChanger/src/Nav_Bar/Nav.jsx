

function Nav() {


    return (
        <>
            <div className="flex sticky top-0 m-1 justify-between bg-[#212121] rounded-lg ">
                <div className="flex justify-center text-center items-center ">
                    <img src="./src/Nav_Bar/ico.png" alt="Please Change url" className="h-10" />
                    <p className="p-1 border-solid border-white transition-all border-2 hover:border-[#212121] rounded-tl-xl hover:rounded-br-lg hover:rounded-bl-lg cursor-pointer 
                    ">BG Changer</p>
                </div>
                <div className="flex justify-center text-center items-center">
                    <textarea name="Search" id="" cols="30" rows="1" className="h-9 m-2 rounded-full border-none outline-none resize-none ps-2 pt-2 text-black" placeholder="Search...">Search</textarea>
                    <button className=" p-2 m-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-500">Search</button>
                </div>
            </div>
        </>
    )
}

export default Nav