import { colorStrings } from "../constants/colors"

interface Props{
    id: number
    colorId: number
    selected: boolean
    rowId: number
    updateSelectedRow: (row: number, column: number) => void
}

    

export default function GuessBit({id, colorId, selected, rowId, updateSelectedRow}: Props){
    
    function clickHandler(){
        updateSelectedRow(rowId, id)
    }
    return <div onClick={clickHandler} className={"w-1/4 aspect-square rounded-full transition-shadow " + colorStrings[colorId]  + (selected?' selected-cell':'')+ ((colorId === -1)? " guess-empty":" guess")}></div>
}