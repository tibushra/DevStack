import { FaStar } from "react-icons/fa";
import type { Technology } from "../../types/technologyType";
type TechListProps = {
    techs: Technology[]
    saved: Technology[];
    setSaved: React.Dispatch<React.SetStateAction<Technology[]>>;
     handleSavedStack : (technology :Technology) => void
};

const TechList = ({ techs, saved,handleSavedStack }: TechListProps) => {

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">

            {techs.map((tech: Technology) => {
               const isSelected = saved.some((item) => item.id === tech.id);
                return <div className="grid gap-5 rounded-lg border border-slate-200 p-6" key={tech.id}>
                    <div className="flex items-start justify-between">
                        <img className="h-10" src={tech.icon} alt={tech.name} />
                        <p className="rounded-full px-3 py-1 font-medium"
                            style={{
                                backgroundColor: `${tech.badgeColor}20`,
                                color: tech.badgeColor,
                            }}>{tech.badge}</p>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-2xl font-bold">{tech.name}</h3>
                        <p className="text-[#64748B]">{tech.description}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="bg-slate-100 rounded-2xl px-2 text-[#475569]">{tech.category}</p>
                        <p className="text-[#64748B]">{tech.difficulty}</p>
                        <p className="flex text-[#334155] gap-2"><FaStar />{tech.rating}</p>
                    </div>
                    <div>
                        <button
                            onClick={() => handleSavedStack(tech)}
                            disabled={isSelected}
                            className="w-full rounded-md bg-[#0A0F1D] font-medium text-white px-4 py-2 shadow-md transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50">
                            {isSelected ? "Selected" : "Add to Stack"}
                        </button>
                    </div>
                </div>

            })}

        </div>

    );
};


export default TechList;