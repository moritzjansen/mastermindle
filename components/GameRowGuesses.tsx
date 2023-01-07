import { useState } from "react"
import { colorStrings } from "../constants/colors"
import GuessBit from "./GuessBit"

type Props = {
    guess: number[]
    selectedColumn: number
    rowId: number
    updateSelectedRow: (row: number, column: number) => void
}

export default function GameRowGuesses({guess, selectedColumn, rowId, updateSelectedRow}:Props){
    return (
        <div className="flex flex-row justify-center gap-2">
            {guess.map((colorId, i) =>{
                return <GuessBit id={i} colorId={colorId} selected={selectedColumn===i} updateSelectedRow={updateSelectedRow} rowId={rowId}></GuessBit>
            })}
        </div>
    )
}