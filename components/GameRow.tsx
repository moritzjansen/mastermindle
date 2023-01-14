import GameRowGuesses from "./GameRowGuesses"
import GameRowHints from "./GameRowHints"
import { HintStatus } from "../pages"
import { RSA_NO_PADDING } from "constants"

interface Props {
    guess: number[]
    id: number
    hint: HintStatus[]
    currentRowID: number
    isGameOver: boolean
    isGameWon: boolean
    updateSelectedRow: (row: number, column: number) => void
    selectedColumn?: number
}

export default function GameRow({guess, hint, id, selectedColumn, currentRowID, isGameOver, isGameWon, updateSelectedRow}:Props){
    const isCurrentRow = currentRowID === id
    return (
        
        <div className="game-row flex flex-col text-center w-full items-center">
            <div className="flex flex-row items-end w-[90%] justify-center">
                <GameRowGuesses guess={guess} selectedColumn={selectedColumn} rowId={id} updateSelectedRow={updateSelectedRow} isSelectedRow={id===currentRowID}></GameRowGuesses>
                <GameRowHints hint ={hint}></GameRowHints>
            </div>
            <svg className={"w-full h-auto fill-slate-400" + (isGameOver ? " animate-separator" : "") + (isGameWon ? " game-won": " game-lost")} viewBox="0 0 297 18" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M0.339746 9L9 17.6603L17.6603 9L9 0.339746L0.339746 9ZM296.66 8.99997L288 0.339721L279.34 8.99998L288 17.6602L296.66 8.99997ZM9 10.5L288 10.5L288 7.49998L9 7.5L9 10.5Z"/>
                </g>
    
            </svg>
        </div>
    )
}