
const StackList = () => {
    return (
        <div>
            <div className="grid gap-5 rounded-lg border border-slate-200 p-6">
                <div> <h3 className="font-bold text-2xl">Your Stack</h3>
                    <p className="text-[#64748B]">No Technology Selected</p></div>
                <div className="flex justify-center rounded-md border border-slate-200 text-[#94A3B8] py-4">Your Stack is empty</div>
            </div>

        </div>
    );
};

export default StackList;