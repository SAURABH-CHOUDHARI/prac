
function Card({ value, isFlipped, onClick }) {
    return (
        <div
            className={`w-40 h-52 bg-gray-200 rounded-lg shadow-md cursor-pointer transform transition-transform duration-700 hover:scale-105 ${isFlipped ? 'rotate-y-180' : ''
                }`}
            onClick={onClick}
        >
            <div className="relative w-full h-full">
                <div
                    className={`absolute inset-0 flex items-center justify-center bg-zinc-700 rounded-lg text-white text-7xl font-bold ${isFlipped ? 'hidden' : ''
                        }`}
                >
                    🃏
                </div>
                <div
                    className={`absolute inset-0 flex items-center justify-center bg-zinc-600 rounded-lg text-white text-7xl font-bold ${isFlipped ? '' : 'hidden'
                        }`}
                >
                    {value}
                </div>
            </div>
        </div>
    );
}

export default Card;