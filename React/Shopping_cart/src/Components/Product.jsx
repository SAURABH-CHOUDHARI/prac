
const product = ({ products, addToCart }) => {
    return (
        <div className="flex flex-wrap gap-6">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="max-w-80 bg-white border border-gray-300 rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-105 transform duration-300"
                >
                    <img
                        className="rounded-t-lg w-full h-40 object-cover"
                        src={product.img}
                        alt={product.name}
                    />
                    <div className="p-6">
                        <h5 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                            {product.name}
                        </h5>
                        <p className="mt-2 text-gray-600 text-sm">{product.disc}</p>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-2xl font-bold text-green-600">
                                ${product.price}
                            </span>
                            <button onClick={() => addToCart(product)} className="px-5 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default product