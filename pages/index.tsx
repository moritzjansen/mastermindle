import Link from 'next/link'
import GameInput from '../components/GameInput'
import GameRow from '../components/GameRow'
import GameRowGuesses from '../components/GameRowGuesses'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'

export type HintStatus = 'correct' | 'present' | 'absent' 



function IndexPage() {
  const maxGuesses = 6
  const [solution, setSolution] = useState([1,2,3,4])

  const [currentRow, setCurrentRow] = useState(0)
  const [selectedCell, setSelectedCell] = useState(0)

  const [guesses, setGuesses] = useState<number[][]>(() => {
    let initialRows : number[][] = []
    for(let i = 0; i < maxGuesses; i++){
      initialRows.push([-1,-1,-1,-1])
    }
    return initialRows
  })
  
  const [hints, setHints] = useState<HintStatus[][]>(() => {
    let initialHints : HintStatus[][] = []
    for(let i = 0; i < maxGuesses; i++){
      initialHints.push(['absent', 'absent','absent','absent'])
    }
    return initialHints
  })

  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(()=>{
    let newSolution:number[] = []
    const possibilities = [0,1,2,3,4,5,6]
    for(let i = 0; i<4; i++){
      newSolution.push(possibilities.splice(Math.floor((Math.random() * possibilities.length)), 1)[0])
    }
    setSolution(newSolution)
    console.log(newSolution)
  },[])


  function setSelectedCellColor(colorId: number){
    if (isGameOver)
      return
    let newGuesses = structuredClone(guesses);
    let [row, column] = [currentRow, selectedCell]
    newGuesses[row][column] = colorId
    setGuesses(newGuesses)
    column = Math.min(column+1, 3)
    setSelectedCell(column) 
  }

  function updateSelectedCell(row:number, column:number){
    if(isGameOver)
      return
    if (row != currentRow){
      return
    }
    else{
      setSelectedCell(column)
    }
  }

  function getHints(solution:number[], guess:number[]):HintStatus[]{
    let hints: HintStatus[] = []
    for(let i = 0; i < solution.length; i++){
      if(solution[i] == guess[i])
        hints.push('correct')
      else if(guess.includes(solution[i]))
        hints.push('present')
      else
        hints.push('absent')
    }
    hints.sort((a,b)=>{
      if (a == 'correct')
        return -1
      else if (a== 'absent')
        return 1
      else if (a== 'present' && b == 'correct')
        return 1
      else if (a == 'present' && b == 'absent')
        return -1
      else return 0
    })
    return hints
  }

  function checkGuess(){
    if(isGameOver){
      return
    }
    let currentGuess = guesses[currentRow]
    if(currentGuess.includes(-1))
      return

    
    let newHints = getHints(solution, currentGuess)
    let updatedHints= structuredClone(hints)
    updatedHints[currentRow] = newHints
    setHints(updatedHints)
    console.log(solution, currentGuess)
    if(!newHints.includes('absent') && !newHints.includes('present')){
      console.log('GG!')
      setIsGameOver(true)
      setSelectedCell(-1)
    }
    else if(currentRow+1 === maxGuesses){
      setIsGameOver(true)
      setSelectedCell(-1)
    }
    else{
      setCurrentRow(currentRow+1)
      setSelectedCell(0)
    }
  }

  function undo(){
    if(isGameOver){
      return
    }
    let updatedSelectedCell = selectedCell
    if (guesses[currentRow][selectedCell] == -1){
      if(updatedSelectedCell === 0)
        return
      else{
        updatedSelectedCell -= 1
        setSelectedCell(updatedSelectedCell)
      }
    }
    let updatedGuesses = structuredClone(guesses)
    updatedGuesses[currentRow][updatedSelectedCell] = -1
    setGuesses(updatedGuesses)
  }

  return(
    <Layout title="Mastermindle">
      <div className='flex-col flex flex-grow'>
        <div className='flex-grow flex flex-col justify-center' id='GameRows'>
          <div className='flex-grow flex flex-col max-h-[520px] justify-between'>
            {guesses.map((guess, i)=>{
              return <GameRow key={i} hint = {hints[i]} guess = {guess} id={i} isCurrentRow={currentRow==i}selectedColumn={currentRow==i?selectedCell:null} updateSelectedRow = {updateSelectedCell}></GameRow>
            })}
          </div>
        </div>
        <GameInput setSelectedCellColor={setSelectedCellColor} checkGuess={checkGuess} undo = {undo}></GameInput>
      </div>
    </Layout>
  )
}


export default IndexPage
