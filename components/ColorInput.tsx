import { colorStrings, accentColorStrings } from "../constants/colors"

interface Props{
    colorId : number,
    setSelectedCellColor : (colorId: number) => void
}

export default function ColorInput({colorId, setSelectedCellColor}: Props){
    function clickHandler(){
        setSelectedCellColor(colorId)
    }

    return (
        <div className={"aspect-square rounded-sm  transition-all hover:shadow-xl hover:scale-105 hover:bg-" + accentColorStrings[colorId] + " bg-" + colorStrings[colorId]} onClick={clickHandler}></div>
    )
}