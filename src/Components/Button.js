
import React from 'react'
import empate from './sons/empate.mp3'
import derrota from './sons/Derrota.mp3'
import click from './sons/click.mp3'
import vitoria from './sons/vitoria.mp3'
import Styles from './sozinho.module.css'
import PagInicial from "./PagInicial";


function Square(props) {
  return (
    <button className={Styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  )
}


function Tocar(Qsom) {
  switch (Qsom) {
    case 1:
      new Audio(empate).play()
      break
    case 2:
      new Audio(derrota).play()
      break
    case 3:
      new Audio(click).play()
      break
    case 4:
      new Audio(vitoria).play()
      break


    default:
      console.log('aaaaaaa')
      break
  }
}



class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
    return (
      <div>
        <div className={Styles.status}>
          {this.props.status}
        </div>
        <div className={Styles.boardrow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={Styles.boardrow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={Styles.boardrow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
      Placarx: 0,
      placarO: 0,
      empate: 0,
      winner: null,
    }
  }

  handleClick(i) {
    Tocar(3)

    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    const winner = calculateWinner(squares)
    let Placarx = this.state.Placarx
    let placarO = this.state.placarO
    let empate = this.state.empate
    if (winner) {
      if (winner === 'X') {
        Placarx++
        Tocar(4)

      } else {
        placarO++
        Tocar(2)

      }
      if (this.state.stepNumber === 9) {
        empate++
        Tocar(1)

      }
    }
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      Placarx: Placarx,
      placarO: placarO,
      empate: empate,
      winner: winner,
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      winner: null,
    })
  }

  resetarPlacar() {
    this.setState({
      Placarx: 0,
      placarO: 0,
      empate: 0,
    })
  }

  resetGame() {
    this.setState({
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
      winner: null,
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = this.state.winner

    let status
    if (winner) {
      status = 'Ganhador ' + winner
    } else {
      status = 'Próximo Jogador:' + (this.state.xIsNext ? 'X' : 'O')
    }

    // const moves = history.map((step, move) => {
    //   const desc = move ? 'Voltar para a jogada ' + move : 'Inicio'
    //   return (
    //     <li key={move}>
    //       <button onClick={() => this.jumpTo(move)}>{desc}</button>
    //     </li>
    //   )
    // })

    // let resultado = null
    if (winner) {
      // resultado = <div className={Styles.resultado}> {winner} </div>
    } else if (this.state.stepNumber === 9) {
      // resultado = <div className={Styles.resultado}>Empate!</div>
      status = "Empate"
    }

    let newGameButton = null
    if (winner || this.state.stepNumber >= 1) {
      newGameButton = <button className={Styles.novozerar} onClick={() => this.resetGame()}>Novo Jogo</button>
    }

    return (
      <div className={Styles.game}>
        <div className={Styles.gameboard}>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}

          />
        </div>
        <div className={Styles.gameinfo}>
          <div className={Styles.status}><h1>{status}</h1></div>
          <h2>Placar:</h2>
          <h3>Jogador X: {this.state.Placarx}</h3>
          <h3>Jogador O: {this.state.placarO}</h3>
          {/* <h3>Empate: {this.state.empate}</h3> */}
          <button className={Styles.novozerar} onClick={() => this.resetarPlacar()}>Zerar Placar</button>
          {newGameButton}
          {/* <ol>{moves}</ol> */}
        </div>
        {/* <div className="resultado-container">
          {resultado}
        </div> */}
      </div>
    )
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}




function ComAmigo() {
  return (
    <>
      <PagInicial />
      <Game />
    </>)
}
export default ComAmigo