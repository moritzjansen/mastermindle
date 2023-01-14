import ColorInput from "./ColorInput"

interface Props {
    setSelectedCellColor: (colorId: number) => void
    checkGuess: () => void
    undo: ()=>void
}

export default function GameInput({setSelectedCellColor, checkGuess, undo}:Props){
    return (
        <div className="w-full aspect-square grid gap-2 grid-cols-4 scale-[calc(1/1.4142)] -mt-32 -rotate-45 translate-y-[8%]">
            <ColorInput colorId={0} setSelectedCellColor={setSelectedCellColor}></ColorInput>
            <div className="aspect-square bg-transparent" ></div>
            <div className="aspect-square bg-transparent"></div>
            <div className="aspect-square bg-transparent"></div>

            <ColorInput colorId={4} setSelectedCellColor={setSelectedCellColor}></ColorInput>
            <ColorInput colorId={1} setSelectedCellColor={setSelectedCellColor}></ColorInput>
            <div className="aspect-square bg-transparent"></div>
            <div className="aspect-square bg-transparent"></div>

            <button className="aspect-square bg-slate-600 rounded-sm  transition-all p-2 hover-hover:hover:shadow-xl hover-hover:hover:scale-105 hover-hover:hover:bg-slate-500" onClick={undo}>
                <svg className="rotate-45 m-1" fill="#aaaaaa" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-51.2 -51.2 614.40 614.40" enableBackground="new 0 0 512 512">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M256,1C179.8,1,111.7,34.4,64.9,87.2L0,22.3V193h170.7l-60.2-60.2C145.6,91.5,197.5,65,256,65c106.1,0,192,85.9,192,192 c0,106.1-85.9,192-192,192c-53,0-101-21.5-135.8-56.2L75,438c46.4,46.3,110.4,75,181,75c141.4,0,256-114.6,256-256S397.4,1,256,1z">
                        </path> 
                    </g>
                </svg>
            </button>
            <ColorInput colorId={5} setSelectedCellColor={setSelectedCellColor}></ColorInput>
            <ColorInput colorId={2} setSelectedCellColor={setSelectedCellColor}></ColorInput>
            <div className="aspect-square bg-transparent"></div>

            <div className="aspect-square bg-transparent"></div>
            <button className="aspect-square bg-slate-600 rounded-sm  transition-all hover-hover:hover:shadow-xl hover-hover:hover:scale-105 hover-hover:hover:bg-slate-500" onClick={checkGuess}>
            <svg className="rotate-45"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#aaaaaa"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#aaaaaa" strokeWidth="2" d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"></path> </g></svg>
            </button>
            <ColorInput colorId={6} setSelectedCellColor={setSelectedCellColor}></ColorInput>
            <ColorInput colorId={3} setSelectedCellColor={setSelectedCellColor}></ColorInput>
        </div>
    )
}