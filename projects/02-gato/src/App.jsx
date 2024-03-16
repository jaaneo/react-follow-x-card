import { useState } from 'react'
import './App.css'
import './index.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [ //combinaciones ganadoras
  [0, 1, 2], // horizontal
  [3, 4, 5], // horizontal
  [6, 7, 8], // horizontal
  [0, 3, 6], // vertical
  [1, 4, 7], // vertical
  [2, 5, 8], // vertical
  [0, 4, 8], // diagonal
  [2, 4, 6], // diagonal
]

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.O)
  // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    // recorrer todas las combinaciones ganadoras
    // y verificar si hay un ganador
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // si es diferente de null
        boardToCheck[a] === boardToCheck[b] && // si es igual a b
        boardToCheck[a] === boardToCheck[c] // si es igual a c
      ){
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn // x u o
    setBoard(newBoard) //actualizamos el dashboard

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn) //actualizamos el turno
    console.log({index}) // para ver el index en consola
    const newWinner = checkWinner(newBoard) //verificamos si hay un ganador
    if (newWinner){
      setWinner(newWinner) //actualizamos el ganador
      console.log("Hay un ganador", newWinner) // para ver el ganador en consola
    }
  }


  return (
    <main className='board'>
      <h1>Gato 😺</h1>
      <p>
        Hola soy Isita y este es mi primer juego de gato
      </p>
      
      <section className='game'>
        {
          board.map((_, index) => {
            return  (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      {
        winner !== null && ( // si no es null
          // seccion ganador
          <section className="winner"> 
            <div className='text'>
              <h2>
                { // si es null
                  winner === false // si es falso
                    ? 'Empate' // empate
                    : `Ganador: ${winner}` // si no, ganador
                }
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button>Jugar otra vez</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App