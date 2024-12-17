

const Card = ({User ,id ,deleteUser }) => {
    return (
        <div className={`h-96 w-60 ${User.gender ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} pt-5 shadow-2xl hover:scale-105 my-10 duration-150 flex flex-col items-center justify-between rounded-2xl`}>
            <img src={User.url} alt=""  className='rounded-full h-52 w-52  duration-150 mx-auto object-cover shadow-2xl'/>
            <div className="text-center flex flex-col">
            <h1 className='text-2xl font-semibold  text-white'>{User.name}</h1>
            <h4 className='text-base font-medium  text-white'>{User.details}</h4>
            </div>
            <button className='bg-black hover:bg-red-700 duration-300 text-lg font-medium text-white active:scale-95 w-full rounded-b-xl py-2' onClick={() => {
                deleteUser(id)
            }}>Delete</button>
        </div>
    )
}

export default Card