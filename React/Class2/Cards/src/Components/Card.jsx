
const Card = (arr) => {
    console.log(arr)
    return (
        <div className=" h-[35rem] w-[25rem] p-5 rounded-3xl font-medium text-zinc-300 bg-[url('https://wallpapercave.com/wp/wp13104038.png')] hover:bg-cover hover:bg-blend-soft-light hover:bg-right-bottom hover:bg-black relative shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] hover:scale-[1.05] duration-1000">
            <div className="flex justify-between">
                <div id="date" className="flex gap-3 items-center">
                    <h4 className="text-sm">{arr.id.date}</h4>
                    <h5 className="text-xs">{arr.id.time}</h5>
                </div>
                <div className="hole h-10 w-10 rounded-full bg-zinc-800 absolute top-[5%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-inner"></div>
                <div id="City">{arr.id.city}</div>
            </div>
            <div className="w-4/5">
                <div className="h-52 w-44 rounded-3xl overflow-hidden mt-24  border-white border-solid border-4 hover:scale-[1.3] duration-500">
                    <img src={arr.id.img} alt=""
                        className="h-full w-full object-cover object-center pointer-events-none"
                    />
                </div>
                <div className="flex flex-col gap-1 mt-10">
                    <h1 className="text-3xl text-zinc-200">{arr.id.name}</h1>
                    <h3 className="text-lg text-zinc-200">{arr.id.profession}</h3>
                </div>
                <div className="bottom mt-10 text-xs">
                    {arr.id.address}
                </div>
            </div>
        </div>
    )
}

export default Card