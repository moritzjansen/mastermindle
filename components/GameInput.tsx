export default function GameInput(){
    return (
        <div className="flex flex-col mb-10 mt-5">
            <div className="row1 flex flex-row justify-center gap-8">
                <div className="shrink-0 w-20 h-20 bg-red-600 rounded-sm rotate-45 z-0 transition-all hover:shadow-xl hover:z-50 m-1 hover:scale-105 hover:bg-red-500"></div>
                <div className="shrink-0 w-20 h-20 bg-orange-600 rounded-sm rotate-45 z-0 transition-all hover:shadow-xl hover:z-50 m-1 hover:scale-105 hover:bg-orange-500"></div>
                <div className="shrink-0 w-20 h-20 bg-yellow-400 rounded-sm rotate-45 z-0 transition-all hover:shadow-xl hover:z-50 m-1 hover:scale-105 hover:bg-yellow-300"></div>
                <div className="shrink-0 w-20 h-20 bg-amber-800 rounded-sm rotate-45 z-0 transition-all hover:shadow-xl hover:z-50 m-1 hover:scale-105 hover:bg-amber-700"></div>
            </div>
            <div className="row2 flex flex-row justify-center gap-8 -mt-6">
                <div className="w-20 h-20 bg-green-600 rounded-sm rotate-45 z-0 transition-all hover:shadow-xl hover:z-50 m-1 hover:scale-105 hover:bg-green-500"></div>
                <div className="w-20 h-20 bg-sky-600 rounded-sm rotate-45 z-0 transition-all hover:shadow-xl hover:z-50 m-1 hover:scale-105 hover:bg-sky-500"></div>
                <div className="w-20 h-20 bg-fuchsia-600 rounded-sm rotate-45 z-0 transition-all hover:shadow-xl hover:z-50 m-1 hover:scale-105 hover:bg-fuchsia-500"></div>
            </div>
            <div className="row3 flex flex-row justify-center gap-8 -mt-6">
                <div className="w-20 h-20 bg-slate-700 rounded-sm rotate-45 z-0 transition-all hover:shadow-xl hover:z-50 m-1 hover:scale-105 hover:bg-slate-600">
                    <svg className="mt-4 ml-4 -rotate-45" fill="#aaaaaa" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-51.2 -51.2 614.40 614.40" enable-background="new 0 0 512 512" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path d="M256,1C179.8,1,111.7,34.4,64.9,87.2L0,22.3V193h170.7l-60.2-60.2C145.6,91.5,197.5,65,256,65c106.1,0,192,85.9,192,192 c0,106.1-85.9,192-192,192c-53,0-101-21.5-135.8-56.2L75,438c46.4,46.3,110.4,75,181,75c141.4,0,256-114.6,256-256S397.4,1,256,1z"></path> </g></svg></div>
                <div className="w-20 h-20 bg-slate-700 rounded-sm rotate-45 z-0 transition-all hover:shadow-xl hover:z-50 m-1 hover:scale-105 hover:bg-slate-600">
                <svg className="-rotate-45"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#aaaaaa"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#aaaaaa" stroke-width="2" d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"></path> </g></svg>
                </div>
            </div>
        </div>
    )
}