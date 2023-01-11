import { colorHexCodes } from "../constants/colors"

interface Props{
    solution: number[]
    reveal: boolean
}

export default function SolutionRow({solution, reveal}:Props){
    const firstStyle = { "--solution-color": colorHexCodes[solution[0]] } as React.CSSProperties;
    const secondStyle = { "--solution-color": colorHexCodes[solution[1]] } as React.CSSProperties;
    const thirdStyle = { "--solution-color": colorHexCodes[solution[2]] } as React.CSSProperties;
    const fourthStyle = { "--solution-color": colorHexCodes[solution[3]] } as React.CSSProperties;

    return (
        <div className={"flex-row flex justify-center items-center w-full gap-2 mb-2" + (reveal? " reveal-solution": " ")}>
            <svg className="w-[24%] h-auto fill-slate-500" viewBox="0 0 42 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M37 3.5L42 5.88676L42 0.113252L37 2.5L37 3.5ZM-4.37114e-08 3.5L37.5 3.5L37.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z"/>
            </svg>
            <div className={'solution-dot w-[8%] aspect-square rounded-full bg-slate-700'} style={firstStyle}></div>
            <svg className="w-[8%] h-auto  fill-slate-500" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L0 0.613249L0 6.38675L5 4V3ZM6 4L11 6.38675V0.613249L6 3V4ZM4.5 4L6.5 4V3L4.5 3V4Z"/>
            </svg>
            <div className={'solution-dot w-[8%] aspect-square rounded-full bg-slate-700'} style={secondStyle}></div>
            <svg className="w-[8%] h-auto fill-slate-500" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L0 0.613249L0 6.38675L5 4V3ZM6 4L11 6.38675V0.613249L6 3V4ZM4.5 4L6.5 4V3L4.5 3V4Z"/>
            </svg>
            <div className={'solution-dot w-[8%] aspect-square rounded-full bg-slate-700'} style={thirdStyle}></div>
            <svg className="w-[8%] h-auto fill-slate-500" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L0 0.613249L0 6.38675L5 4V3ZM6 4L11 6.38675V0.613249L6 3V4ZM4.5 4L6.5 4V3L4.5 3V4Z"/>
            </svg>
            <div className={'solution-dot w-[8%] aspect-square rounded-full bg-slate-700'} style={fourthStyle}></div>
            <svg className="w-[24%] h-auto fill-slate-500" viewBox="0 0 40 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM4.5 3.5H40V2.5H4.5V3.5Z"/>
            </svg>
        </div>
    )
}