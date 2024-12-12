
const Card = (arr) => {
    return (
        <div className=" h-[35rem] w-[25rem] p-10 rounded-3xl flex flex-col gap-10 items-center font-medium text-zinc-300 bg-[url('https://wallpapercave.com/wp/wp13104038.png')] hover:bg-cover hover:bg-blend-soft-light hover:bg-right-bottom hover:bg-black relative shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] hover:scale-[1.05] duration-1000">
            <div className="h-1/2 w-2/3 bg-white ">
                <img src={arr.id.image} alt=""  className="h-full w-full object-cover"/>
            </div>
            <div className=" w-full text-center ">
                <h1 className="text-5xl">{arr.id.name}</h1>
                <p className="mt-5 text-lg ">{arr.id.description}</p>
            </div>
            
        </div>
    )
}

export default Card