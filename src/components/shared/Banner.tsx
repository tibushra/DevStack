const Banner = () => {
    return (
        <div className="flex justify-between items-center container mx-auto">
            <div className="grid gap-9">
                <h1 className="text-7xl font-bold">
                    Build Your Ideal
                    <br />
                    <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>
                <p className="text-[#475569] text-2xl">Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.</p>
                <div className="flex gap-2">
                    <button className="rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899] px-5 py-3 font-semibold text-[#FFFFFF] hover:scale-105">
                        Explore Technologies
                    </button>
                    <button className="rounded-lg px-13 py-3 font-semibold text-[#374151] border border-slate-200 hover:scale-105" >Learn More</button>
                </div>
            </div>
            <div><img className="h-155" src="../../../asset/banner-stack.png" alt="" /></div>
        </div>
    );
};

export default Banner;