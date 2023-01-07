import { HintStatus } from "../pages"

interface Props{
    hint: HintStatus[]
}

export default function GameRowHints({hint}:Props){
    return (
        <div className="flex flex-col w-5 h-5 justify-between rotate-45 relative before:transition-all before:hover:bg-transparent before:absolute before:w-[140%] before:h-[140%] before:-top-[20%] before:-left-[20%] before:border before:border-slate-400">
            <div className="flex justify-between flex-row">
                <div className={"w-2 h-2 rounded-full border border-slate-400 " + hint[0]}></div>
                <div className={"w-2 h-2 rounded-full border border-slate-400 " + hint[2]}></div>
            </div>
            <div className="flex justify-between flex-row">
                <div className={"w-2 h-2 rounded-full border border-slate-400 " + hint[1]}></div>
                <div className={"w-2 h-2 rounded-full border border-slate-400 " + hint[3]}></div>
            </div>
        </div>
    )
}