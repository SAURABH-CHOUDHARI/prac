import 'remixicon/fonts/remixicon.css'
const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-end items-center py-2 px-10 text-white">
            <button 
            className='text-2xl outline-none bg-gradient-to-tr from-zinc-500 to-slate-100 py-2 px-6 rounded-2xl text-black'
            onClick={toggle}
            ><i class="ri-shopping-cart-2-fill"></i></button>
        </nav>
    );
};

export default Navbar;