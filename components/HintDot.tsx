import { HintStatus } from "../pages"

interface Props{
    status: HintStatus
}

export default function HintDot({status}:Props){
    return <div className={"hint aspect-square rounded-full border border-slate-400 " + status}></div>
}