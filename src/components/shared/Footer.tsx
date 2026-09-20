import { GoDotFill } from "react-icons/go";

const Footer = () => {
    return (
        <div>
            <hr className="border-slate-200" />
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-8 py-12 md:flex md:justify-between md:items-center md:py-20">
                    <div className="grid justify-items-center gap-4 md:justify-items-start md:gap-5">
                        <img src="../../../asset/logo-text.png" alt="DevStack logo" />
                        <p className="text-center md:text-left text-[#64748B]">Curated tools, technologies, and resources for developers building
                            modern software.</p>
                        <div className="flex gap-4 text-[#475569] font-semibold">
                            <a href="https://github.com/">GitHub</a>
                            <p className="md:hidden"><GoDotFill /></p>
                            <a href="https://x.com/">Twitter</a>
                             <p className="md:hidden"><GoDotFill /></p>
                            <a href="https://bd.linkedin.com/">Linkedin</a>
                        </div>
                    </div>
                    <div className="hidden md:grid gap-3">
                        <h3 className="font-bold">PRODUCT</h3>
                        <div className="grid gap-2 text-[#64748B]">
                            <a href="home">Home</a>
                            <a href="Technologies">Technologies</a>
                            <a href="Projects">Projects</a>
                        </div>
                    </div>
                    <div className="hidden md:grid gap-3">
                        <h3 className="font-bold">COMPANY</h3>
                        <div className="grid gap-2 text-[#64748B]">
                            <a href="About">About</a>
                            <a href="Contac">Contac</a>
                            <a href="Careers">Careers</a>
                        </div>
                    </div>
                    <div className="hidden md:grid gap-3">
                        <h3 className="font-bold">LOCAL</h3>
                        <div className="grid gap-2 text-[#64748B]">
                            <a href="Privacy Policy">Privacy Policy</a>
                            <a href="Terms of Service">Terms of Service</a>
                        </div>
                    </div>

                </div>
                <hr className="border-slate-200" />
                <div className="flex gap-3 py-5 text-xs text-[#94A3B8] md:flex-row md:justify-between md:py-8">
                    <div>
                        <h4>© 2026 Dev Stack. All rights reserved.</h4>
                    </div>
                    <div className="flex gap-5">
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;