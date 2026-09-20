import { use } from "react";
import type { Technology } from "../../types/technologyType";
import TechList from "./TechList";

type TechnologiesProps = {
    technologyPromise: Promise<Technology[]>;
    saved : Technology[];
    setSaved: React.Dispatch<React.SetStateAction<Technology[]>>;
    handleSavedStack : (techs :Technology) => void
};

const Technologies = ({ technologyPromise, saved, setSaved,handleSavedStack }: TechnologiesProps) => {
    const techs = use(technologyPromise)
    return (
        <div className="container mx-auto max-w-7xl">
            <TechList techs={techs} saved ={saved} setSaved = {setSaved} handleSavedStack={handleSavedStack}></TechList>
            
        </div>
    );
};

export default Technologies;


