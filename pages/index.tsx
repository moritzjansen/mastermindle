import GameInput from '../components/GameInput'
import GameRow from '../components/GameRow'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import SolutionRow from '../components/SolutionRow'

export type HintStatus = 'correct' | 'present' | 'absent' 

function IndexPage() {
  const maxGuesses = 6
  const [solution, setSolution] = useState([1,2,3,4])

  const [currentRow, setCurrentRow] = useState(0)
  const [selectedCell, setSelectedCell] = useState(0)

  const [guesses, setGuesses] = useState<number[][]>(initGuesses())
  
  const [hints, setHints] = useState<HintStatus[][]>(initHints())

  const [isGameOver, setIsGameOver] = useState(false)
  const [isGameWon, setIsGameWon] = useState(false)

  useEffect(()=>{
    const initialState = JSON.parse(loadInitialState())
    if(initialState){
      if (initialState['isGameOver']){
        initNewGame();
      }
      else{
        setGameState(initialState)
      }
    }
  },[])

  useEffect(()=>{
    saveState();
  })

  function initGuesses(){
    let initialRows : number[][] = []
    for(let i = 0; i < maxGuesses; i++){
      initialRows.push([-1,-1,-1,-1])
    }
    return initialRows
  }

  function initHints(){
    let initialHints : HintStatus[][] = []
    for(let i = 0; i < maxGuesses; i++){
      initialHints.push(['absent', 'absent','absent','absent'])
    }
    return initialHints
  }

  function initNewGame(){
    setSolution(generateSolution())
    setCurrentRow(0)
    setSelectedCell(0)
    setGuesses(initGuesses())
    setHints(initHints())
    setIsGameOver(false)
    setIsGameWon(false)
  }

  function generateSolution(){
    let newSolution:number[] = []
    const possibilities = [0,1,2,3,4,5,6]
    for(let i = 0; i<4; i++){
      newSolution.push(possibilities.splice(Math.floor((Math.random() * possibilities.length)), 1)[0])
    }
    return newSolution
  }

  function loadInitialState(){
    return localStorage.getItem('gameState')
  }

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
      setIsGameWon(true)
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

  function getGameState(){
    let gameState = {
      'solution':solution,
      'guesses':guesses,
      'hints':hints,
      'currentRow':currentRow,
      'selectedCell':selectedCell,
      'isGameOver':isGameOver,
      'isGameWon':isGameWon
    }
    return gameState
  }

  function saveState(){
    let gameState = getGameState()
    localStorage.setItem('gameState', JSON.stringify(gameState))
  }

  function setGameState({solution, guesses, hints, currentRow, selectedCell, isGameOver, isGameWon}){
    setSolution(solution)
    setGuesses(guesses)
    setHints(hints)
    setCurrentRow(currentRow)
    setSelectedCell(selectedCell)
    setIsGameOver(isGameOver)
    setIsGameWon(isGameWon)
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
    <Layout title="Bigbraindle">
      <SolutionRow solution = {solution} reveal = {isGameOver}></SolutionRow>
      <div className='flex-grow flex flex-col max-h-[520px]justify-start z-10'>
        {guesses.map((guess, i)=>{
          return <GameRow key={i} hint = {hints[i]} guess = {guess} id={i} currentRowID={currentRow}selectedColumn={currentRow==i?selectedCell:null} updateSelectedRow = {updateSelectedCell} isGameOver={isGameOver} isGameWon={isGameWon}></GameRow>
        })}
      </div>
      <GameInput setSelectedCellColor={setSelectedCellColor} checkGuess={checkGuess} undo = {undo}></GameInput>
    </Layout>
  )
}


export default IndexPage
