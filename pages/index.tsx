import Link from 'next/link'
import GameInput from '../components/GameInput'
import GameRow from '../components/GameRow'
import GameRowGuesses from '../components/GameRowGuesses'
import Layout from '../components/Layout'
import { useState } from 'react'

export type HintStatus = 'correct' | 'present' | 'absent' 



function IndexPage() {
  const maxGuesses = 6
  const solution = [1,2,3,4]

  const [currentRow, setCurrentRow] = useState(0)
  const [selectedCell, setSelectedCell] = useState(0)

  const [guesses, setGuesses] = useState<[number[]]>(() => {
    var initialRows : [number[]] = [[-1,-1,-1,-1]]
    for(let i = 1; i < maxGuesses; i++){
      initialRows.push([-1,-1,-1,-1])
    }
    return initialRows
  })
  const [hints, setHints] = useState<[HintStatus[]]>(() => {
    var initialHints : [HintStatus[]] = [['absent', 'absent','absent','absent']]
    for(let i = 1; i < maxGuesses; i++){
      initialHints.push(['absent', 'absent','absent','absent'])
    }
    return initialHints
  })


  function setSelectedCellColor(colorId: number){
      let newGuesses = structuredClone(guesses);
      let [row, column] = [currentRow, selectedCell]
      newGuesses[row][column] = colorId
      setGuesses(newGuesses)
      column = Math.min(column+1, 3)
      setSelectedCell(column) 
  }

  function updateSelectedCell(row:number, column:number){
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
    let currentGuess = guesses[currentRow]
    if(currentGuess.includes(-1))
      return
    let newHints = getHints(solution, currentGuess)
    let updatedHints= structuredClone(hints)
    updatedHints[currentRow] = newHints
    setHints(updatedHints)
    setCurrentRow(currentRow+1)
    setSelectedCell(0)
  }

  function undo(){
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
        <div className='flex-grow flex flex-col gap-2 mt-5' id='GameRows'>
          {guesses.map((guess, i)=>{
            return <GameRow hint = {hints[i]} guess = {guess} id={i} isCurrentRow={currentRow==i}selectedColumn={currentRow==i?selectedCell:null} updateSelectedRow = {updateSelectedCell}></GameRow>
          })}
        </div>
        <GameInput setSelectedCellColor={setSelectedCellColor} checkGuess={checkGuess} undo = {undo}></GameInput>
      </div>
    </Layout>
  )
}


export default IndexPage
