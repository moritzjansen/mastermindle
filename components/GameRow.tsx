import GameRowGuesses from "./GameRowGuesses"
import GameRowHints from "./GameRowHints"

export default function GameRow(){
    return (
        <div className="flex flex-col text-center w-96 items-center mx-auto">
            <GameRowHints></GameRowHints>
            <GameRowGuesses></GameRowGuesses>
            <svg className="-mt-2" width="297" height="18" viewBox="0 0 297 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_4_104)">
<path d="M0.339746 9L9 17.6603L17.6603 9L9 0.339746L0.339746 9ZM296.66 8.99997L288 0.339721L279.34 8.99998L288 17.6602L296.66 8.99997ZM9 10.5L288 10.5L288 7.49998L9 7.5L9 10.5Z" fill="black" fill-opacity="0.49"/>
</g>
<defs>
<filter id="filter0_i_4_104" x="0.339752" y="0.339722" width="297.32" height="18.3205" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_104"/>
</filter>
</defs>
</svg>

        </div>
    )
}