
const Footer = () => {
  return (
    <div className="bg-black text-white  ">
        <div className="flex py-20 justify-between px-20">
            <div className="flex flex-col gap-10">
                <h1 className="text-6xl">Let's turn some heads!</h1>
                <button className="text-white border-solid border-2 rounded-3xl border-white w-44 py-5 text-xl hover:rounded-[2rem] hover:underline underline-offset-2 duration-1000">Contact <i className="ri-arrow-right-line ml-5 text-zinc-500 hover:text-zinc-300"></i></button>
            </div>
            <div className="flex gap-14">
                <div className="text-lg">
                    <h2 className="text-3xl pb-5">Socials</h2>
                    <h3>Instagram</h3>
                    <h3>LinkedIn</h3>
                </div>
                <div className="text-lg pb-5">
                    <h2 className="text-3xl pb-5">Sitemap</h2>
                    <h3>Home</h3>
                    <h3>Project</h3>
                    <h3>Over</h3>
                    <h3>ContaCT</h3>
                </div>
                <div className="text-lg pb-5">
                    <h2 className="text-3xl pb-5">Info</h2>
                    <h3>Algemene voorwaarden</h3>
                    <h3>Privacybeleid</h3>
                    <h3>Cookiebeleid</h3>
                </div>
            </div>
        </div>
        <div className="overflow-hidden w-full">
            <img src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png" alt="" />
        </div>
    </div>
  )
}

export default Footer