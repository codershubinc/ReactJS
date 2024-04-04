function Card() {
    return (
        <div className="flex flex-wrap ">
            <div className=" h-16 shadow-[0_10px_60px_-15px_grey] bg-black m-2  border-solid border-2 border-grey  justify-center w-max p-2  rounded-lg">
                shadow-sm
            </div>
            <div className=" h-16 shadow bg-black m-2    border-solid border-2 border-grey  justify-center w-max p-2 rounded-lg">
                shadow
            </div>
            <div className=" h-16 shadow-md bg-black m-2   border-solid border-2 border-grey  justify-center w-max p-2  rounded-lg">
                shadow-md
            </div>
            <div className=" h-16 shadow-lg bg-black m-2    border-solid border-2 border-grey  justify-center w-max p-2 rounded-lg">
                shadow-lg
            </div>
            <div className=" h-16 shadow-xl bg-black m-2    border-solid border-2 border-grey justify-center w-max p-2  rounded-lg">
                shadow-xl
            </div>
            <div className=" h-16 shadow-2xl bg-black m-2    border-solid border-2 border-grey  justify-center w-max p-2 rounded-lg">
                shadow-2xl
            </div>
        </div>
    )
}
export default Card