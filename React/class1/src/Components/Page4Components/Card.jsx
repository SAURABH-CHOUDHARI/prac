
const Card = () => {
    const card = [
        {
            img: "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan-p-800.jpg",
            h1: "Brand Story",
            p: "Description for the first card goes here.",
            bg: "#AA81B7"
        },
        {
            img: "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit-p-800.jpg",
            h1: "Markidentiteit",
            p: "Description for the second card goes here.",
            bg: "#10100F"
        },
        {
            img: "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign-p-800.jpg",
            h1: "Webdesign",
            p: "Description for the third card goes here.",
            bg: "#36A96A"
        },
        {
            img: "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte-p-800.jpg",
            h1: "A la Carte",
            p: "Description for the fourth card goes here.",
            bg: "#FA8A58"
        }
    ];
    return (
        <div className="flex justify-between overflow-x-scroll gap-5 py-20 scrollbar">
            {card.map((item, index) => (
                <div
                    key={index}
                    className="group shrink-0"
                >
                    <img
                        src={item.img}
                        alt={`Image ${index + 1}`}
                        className="h-[22rem] w-[25rem] object-cover rounded-t-3xl group-hover:rounded-[5rem] duration-1000"
                    />
                    <div className="flex flex-col items-center justify-between rounded-b-3xl group-hover:rounded-[5rem] duration-1000"
                        style={{ backgroundColor: item.bg }}
                    >
                        <div className="flex  justify-between gap-20 py-10">
                            <h1 className="text-4xl font-bold text-white">{item.h1}</h1>
                            <i className="ri-arrow-right-line text-white text-xl opacity-0 group-hover:opacity-100 duration-1000"></i>
                        </div>
                        <p className=" text-white py-10">{item.p}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card