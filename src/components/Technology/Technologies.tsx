import { use } from "react";
import type { Technology } from "../../types/technologyType";
import TechList from "./TechList";

type TechnologiesProps = {
    technologyPromise: Promise<Technology[]>;
};

const Technologies = ({ technologyPromise}: TechnologiesProps) => {
    const techs = use(technologyPromise)
    return (
        <div>
            <TechList techs={techs}></TechList>
        </div>
    );
};

export default Technologies;


