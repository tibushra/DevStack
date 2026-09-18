const Navbar = () => {
    return (
        <>
        <div className="container mx-auto flex justify-between items-center h-20">
            <div><img src="../../../asset/logo-text.png" alt="logo" /></div>
            <div>
                <ul className="flex justify-between items-center gap-5">
                    <li className="text-[#DB2777]"><a href="home">Home</a></li>
                    <div className="text-[#475569] flex justify-between items-center gap-5">
                        <li><a href="Technologies">Technologies</a></li>
                        <li><a href="Projects">Projects</a></li>
                        <li><a href="About">About</a></li>
                        <li><a href="Contact">Contact</a></li>
                    </div>
                </ul>
            </div>
            <div>
                <button className="bg-[#FFFFFF] text-[#334155] px-6 py-2 rounded-3xl">Sign In</button>
                <button className="bg-[#D91B7E] text-[#FFFFFF] px-6 py-2 rounded-3xl">Sign Up</button>
            </div>
        </div>
       <hr className="border-slate-200" />
        </>
    );
};

export default Navbar;