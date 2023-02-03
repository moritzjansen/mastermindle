import { HintStatus } from "../pages"
import HintDot from "./HintDot"

interface Props{
    hint: HintStatus[]
}

export default function GameRowHints({hint}:Props){
    return (
        <div className="flex flex-row flex-wrap justify-around items-center w-1/5 ml-[5%] mr-[3%] aspect-square scale-[calc(1/1.4142)] border border-slate-400 rotate-45 p-1">
                <HintDot key={"hint-1"} status={hint[0]}></HintDot>
                <HintDot key={"hint-2"} status={hint[2]}></HintDot>
                <HintDot key={"hint-3"} status={hint[1]}></HintDot>
                <HintDot key={"hint-4"} status={hint[3]}></HintDot>
        </div>
    )
}