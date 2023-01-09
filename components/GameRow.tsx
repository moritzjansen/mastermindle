import GameRowGuesses from "./GameRowGuesses"
import GameRowHints from "./GameRowHints"
import { HintStatus } from "../pages"

interface Props {
    guess: number[]
    id: number
    hint: HintStatus[]
    isCurrentRow:  boolean
    updateSelectedRow: (row: number, column: number) => void
    selectedColumn?: number
}

export default function GameRow({guess, hint, id, selectedColumn, isCurrentRow, updateSelectedRow}:Props){
    return (
        <div className="flex flex-col text-center w-full items-center">
            <div className="flex flex-row items-end w-[90%] justify-center">
                <GameRowGuesses guess={guess} selectedColumn={selectedColumn} rowId={id} updateSelectedRow={updateSelectedRow}></GameRowGuesses>
                <GameRowHints hint ={hint}></GameRowHints>
            </div>
            <svg className="w-full h-auto" viewBox="0 0 297 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_4_130)">
                    <path d="M0.339746 9L9 17.6603L17.6603 9L9 0.339746L0.339746 9ZM296.66 8.99997L288 0.339721L279.34 8.99998L288 17.6602L296.66 8.99997ZM9 10.5L288 10.5L288 7.49998L9 7.5L9 10.5Z" fill="black" fillOpacity="0.2"/>
                </g>
                <defs>
                    <filter id="filter0_i_4_130" x="0.339752" y="0.339722" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="1" dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_130"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}