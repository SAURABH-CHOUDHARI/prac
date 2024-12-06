const Card = () => {
    const arr = [
        {img: "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0f2f8c562d5ec23fe20e_VANMOOK_HEADER-p-1080.webp"},
        {img: "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbe5150f5f7884b492573_GAAF_Header-p-1080.webp"},
        {img: "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64b164fa9716bc66dcf4137e_ADEKWAAD_BrandBox-min-p-1080.webp"},
        {img: "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64b164fa9716bc66dcf4137e_ADEKWAAD_BrandBox-min-p-1080.webp"},
        {img: "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64b164fa9716bc66dcf4137e_ADEKWAAD_BrandBox-min-p-1080.webp"},
        {img: "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0f2f8c562d5ec23fe20e_VANMOOK_HEADER-p-1080.webp"},
        {img: "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0eccc99b0aed7676e414_FL_Werkboek-cover_Nan-min-p-1080.webp"}
    ];

    return (
        <div className="scrollbar flex gap-10 overflow-x-scroll py-10">
            {arr.map((item, index) => (
                <img 
                    key={index} 
                    src={item.img} 
                    alt={`Image ${index + 1}`} 
                    className="h-[50rem] w-[35rem] object-cover rounded-[7rem]"
                />
            ))}
        </div>
    );
};

export default Card;