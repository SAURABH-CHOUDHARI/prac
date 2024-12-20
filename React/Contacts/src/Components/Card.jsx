
const Card = ({submittedData, DeleteHandler}) => {
    return (
        <div className="mt-6 w-full">
                    
        <ul className="mt-2 space-y-2">
            {submittedData.map((data, index) => (
                <li key={index}  className="p-2 border border-gray-300 rounded-md">
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Company:</strong> {data.company}</p>
                    <p><strong>Phone:</strong> {data.phoneNumber}</p>
                    <p><strong>{data.favorite ? 'Favorite' : ''}</strong> </p>
                    <button id={index} className="px-5 py-2 bg-red-500" onClick={(e) =>{
                        DeleteHandler(e.target.id)
                    }}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Card