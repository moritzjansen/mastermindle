import { HintStatus } from "../pages"

interface Props{
    status: HintStatus
}

export default function HintDot({status}:Props){
    return <div className={"hint w-[35%] m-[6%] aspect-square rounded-full border border-slate-400 " + status}></div>
}