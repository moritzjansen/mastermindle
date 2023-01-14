import { colorStrings } from "../constants/colors"

interface Props{
    id: number
    colorId: number
    selected: boolean
    rowId: number
    isSelectedRow: boolean
    updateSelectedRow: (row: number, column: number) => void
}

    

export default function GuessBit({id, colorId, selected, rowId, isSelectedRow, updateSelectedRow}: Props){
    
    function clickHandler(){
        updateSelectedRow(rowId, id)
    }
    return <button onClick={clickHandler} className={"w-1/4 aspect-square rounded-full transition-shadow " + colorStrings[colorId]  + (selected?' selected-cell':'')+ ((colorId === -1)? " guess-empty":" guess") + (!isSelectedRow? " cursor-default":"")}></button>
}