import { useState } from "react"

const Form = ({ getuser }) => {
    const [name, setName] = useState("")
    const [details, setDetails] = useState("")
    const [url, setUrl] = useState("")
    const [isFemale, setIsFemale] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()

        const user = { name, details, url, gender: isFemale }
        getuser(user)


        setName("")
        setDetails("")
        setUrl("")
        setIsFemale(false)
    }

    return (
        <div className="flex justify-center bg-zinc-800  px-10 ">
            <form className="flex flex-col w-full items-center gap-2 py-5" onSubmit={(e) => {
                submitHandler(e)
            }}>
                <div className="flex justify-between w-1/2">
                {/* <label htmlFor="Name" className="text-2xl text-white ">Name</label> */}
                <input type="text" id="Name" className="border-2 border-black rounded px-4 py-2 w-full ml-3 active:scale-[0.99]" placeholder="Enter a Name" required value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />

                {/* <label htmlFor="Details" className="text-2xl text-white ml-20">Details</label> */}
                <input type="text" id="Details" className="border-2 border-black rounded px-4 py-2 w-full ml-3 active:scale-[0.99]" placeholder="Enter Details" required value={details} onChange={(e) => {
                    setDetails(e.target.value)
                }} />
                </div>

                {/* <label htmlFor="imgurl" className="text-2xl text-white ">Img Url</label> */}
                <input type="text" id="imgurl" className="border-2 border-black rounded px-4 py-2 w-1/2 ml-3 active:scale-[0.99]" placeholder="Paste Img Url" required value={url} onChange={(e) => {
                    setUrl(e.target.value)
                }} />

                <div className="flex items-center text-white justify-center">
                    <label htmlFor="gender" className="text-2xl text-white mr-5">Gender:</label>
                    <input
                        type="radio"
                        id="male"
                        checked={!isFemale}
                        onChange={() => setIsFemale(false)}
                        name="gender"
                        className="scale-150 accent-blue-600 active:scale-125"
                    />
                    <label htmlFor="male" className="ml-1">Male</label>
                    <input
                        type="radio"
                        id="female"
                        checked={isFemale}
                        onChange={() => setIsFemale(true)}
                        name="gender"
                        className="scale-150 ml-5 accent-pink-500 active:scale-125 "
                    />
                    <label htmlFor="female" className="ml-1">Female</label>
                </div>
                <button className="rounded text-white py-2 text-2xl font-semibold w-1/5 active:scale-[0.99] bg-black hover:bg-green-500 duration-200 mt-5">Submit</button>
            </form>
        </div>
    )
}



export default Form