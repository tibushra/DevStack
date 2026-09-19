import { use } from "react"
import type { Technology } from "../../types/technologyType";
import TechList from "./TechList";

const Technologies = ({technologyPromise}:{technologyPromise : Promise<Technology[]>}) => {
    const techs = use(technologyPromise)
    return (
        <>
        <div className="container mx-auto grid ">
           <div className="grid gap-3">
                <h2  className="text-5xl font-bold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
                <p className="text-[#64748B] text-2xl">Pick one technology per category to build your ideal stack.</p>
            </div> 
        </div>
         <TechList techs = {techs}></TechList> 
        </>
    );
};

export default Technologies;
 
            
           