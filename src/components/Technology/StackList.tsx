import { RxCross2 } from "react-icons/rx";
import type { Technology } from "../../types/technologyType";

type StackListProps = {
    technologies: Technology[];
    setSaved: React.Dispatch<React.SetStateAction<Technology[]>>;
};

const StackList = ({ technologies, setSaved }: StackListProps) => {
    const handleRemoveStack = (id: number) => {
        setSaved((prev) =>
            prev.filter((tech) => tech.id !== id)
        );
    };
    const handleRemoveAllStack = () => {
        setSaved([]);
    };
    return (
        <div>
            <div className="grid gap-5 rounded-lg border border-slate-200 p-6">
                <div>
                    <h3 className="font-bold text-2xl">Your Stack</h3>
                    <p className="mt-1 text-[#94A3B8]">
                        {technologies.length === 0
                            ? "No technologies selected yet."
                            : `${technologies.length} Technology Selected`}
                    </p>
                </div>
                {technologies.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-slate-200 px-4 py-6 text-center">
                        <p className="text-xs text-[#94A3B8]">
                            Your stack is empty.
                        </p>
                    </div>
                ) : (
                    <div>
                        <div className="grid gap-2">
                            {technologies.map((tech) => (
                                <div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2" key={tech.id}>
                                    <div className="flex items-center gap-3">
                                        <img className="h-7 w-7 object-contain" src={tech.icon} alt={tech.name} />
                                        <div>
                                            <p className="text-sm font-medium text-[#1E293B]">{tech.name}</p>
                                            <p className="text-[9px] text-[#94A3B8]"> {tech.category} </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveStack(tech.id)}
                                        className="text-lg text-slate-400 transition hover:text-red-500">
                                        <RxCross2 />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleRemoveAllStack}
                            className="mt-5 w-full rounded-md border border-red-200 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50">
                            Remove All
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StackList;