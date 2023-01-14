import { useState } from "react"
import { colorStrings } from "../constants/colors"
import GuessBit from "./GuessBit"


type Props = {
    guess: number[]
    selectedColumn: number
    rowId: number
    isSelectedRow: boolean
    updateSelectedRow: (row: number, column: number) => void
}

export default function GameRowGuesses({guess, selectedColumn, rowId, updateSelectedRow, isSelectedRow}:Props){
    return (
        <div className="flex flex-row justify-center gap-2 w-[70%] flex-shrink-0">
            {guess.map((colorId, i) =>{
                return <GuessBit key={i} id={i} colorId={colorId} selected={selectedColumn===i} updateSelectedRow={updateSelectedRow} rowId={rowId} isSelectedRow={isSelectedRow}></GuessBit>
            })}
        </div>
    )
}