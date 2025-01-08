import { useState } from "react"

const Main = ({getPrompt , result }) => {
    const [prompt, setPrompt] = useState('')
    const [url, setUrl] = useState('')

    
    const handleSubmit = (e) => {
        e.preventDefault();
        getPrompt(url ,prompt);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}
            className="mx-auto flex flex-col gap-5 w-96"
            >
                <input type="text" placeholder='Tell Which Image to Generate' value={prompt}
                    onChange={(e) => { setPrompt(e.target.value) }}
                    className="py-2 rounded-lg w-full px-2 bg-slate-300"
                />
                <input type="text" placeholder='Tell Which Image to Generate' value={url}
                    onChange={(e) => { setUrl(e.target.value) }}
                    className="py-2 rounded-lg w-full px-2 bg-slate-300"
                />
                <button className="bg-gray-300 ml-2 px-4 py-2 rounded-lg active:scale-95"
                onClick={handleSubmit} 
                >
                    Generate</button>
            </form>
            <div className="bg-gray-200 h-[30rem] w-[40rem] mt-20 text-black p-5 rounded-lg shadow-lg overflow-scroll">
                <p>{result}</p>
            </div>
        </div>
    )
}

export default Main