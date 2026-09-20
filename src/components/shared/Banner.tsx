import banner from "../../../asset/banner-stack.png"

const Banner = () => {
    return (
        <div className="container mx-auto max-w-7xl flex flex-col px-4 py-8 text-center md:flex-row md:justify-between items-center md:text-left ">
            <div className="grid w-full gap-5 md:w-1/2 md:gap-9">
                <h1 className="text-4xl font-bold leading-tight md:text-7xl">
                    Build Your Ideal
                    <br />
                    <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>
                <p className="text-[#475569] text-base md:text-2xl">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="flex gap-2">
                    <button className="rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899] px-5 py-3 font-semibold text-[#FFFFFF] hover:scale-105">
                        Explore Technologies
                    </button>
                    <button className="rounded-lg px-13 py-3 font-semibold text-[#374151] border border-slate-200 hover:scale-105" >Learn More</button>
                </div>
            </div>
            <div><img className="h-64 md:h-155" src={banner} alt="DevStack Banner" /></div>
        </div>
    );
};

export default Banner;