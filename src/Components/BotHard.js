import React from 'react'
import empate from './sons/empate.mp3'
import derrota from './sons/Derrota.mp3'
import click from './sons/click.mp3'
import vitoria from './sons/vitoria.mp3'
import Styles from './sozinho.module.css'
import { Link } from 'react-router-dom'
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

// function esperarCincoSegundos() {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 5000);
//   });
// }

async function BotFacil(repete, squares, aleatorio, jogada) {
    console.log('a1')

    if (repete) {

        aleatorio = Math.floor(Math.random() * 9)
        while (squares[aleatorio] !== null && jogada < 8) {

            aleatorio = Math.floor(Math.random() * 9)
        }

        // setTimeout(()=>{},5000)
        squares[aleatorio] = 'O'
        Tocar(3)


    }

}

function botdificil(squares, i, repete, primeira) {
    let Jogardnv = 0
    let aleatorio = null;
    if (primeira === 0) {
        if (repete) {
            if (squares[4] === null) {
                squares[4] = 'O'
            } else {
                squares[2] = 'O'
            }

            Tocar(3)
            Jogardnv = 1
        }
    }
    if (Jogardnv !== 1) {
        if (squares[0] === 'X' && squares[1] === 'X') {
            if (squares[2] === null) {
                squares[2] = 'O'
                Jogardnv = 1
            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[1] === 'X' && squares[2] === 'X') {
            if (squares[0] === null) {
                squares[0] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[3] === 'X' && squares[4] === 'X') {
            if (squares[5] === null) {
                squares[5] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[5] === 'X' && squares[4] === 'X') {
            if (squares[3] === null) {
                squares[3] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[6] === 'X' && squares[7] === 'X') {
            if (squares[8] === null) {
                squares[8] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[8] === 'X' && squares[7] === 'X') {
            if (squares[6] === null) {
                squares[6] = 'O'
                Jogardnv = 1

            }
        }
    }
    //horizontal
    if (Jogardnv !== 1) {
        if (squares[0] === 'X' && squares[3] === 'X') {
            if (squares[6] === null) {
                squares[6] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[6] === 'X' && squares[3] === 'X') {
            if (squares[0] === null) {
                squares[0] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[1] === 'X' && squares[4] === 'X') {
            if (squares[7] === null) {
                squares[7] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[7] === 'X' && squares[4] === 'X') {
            if (squares[1] === null) {
                squares[1] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[2] === 'X' && squares[5] === 'X') {
            if (squares[8] === null) {
                squares[8] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[8] === 'X' && squares[5] === 'X') {
            if (squares[2] === null) {
                squares[2] = 'O'
                Jogardnv = 1
            }
        }
    }
    //diagonal
    if (Jogardnv !== 1) {
        if (squares[0] === 'X' && squares[4] === 'X') {
            if (squares[8] === null) {
                squares[8] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[8] === 'X' && squares[4] === 'X') {
            if (squares[0] === null) {
                squares[0] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[2] === 'X' && squares[4] === 'X') {
            if (squares[6] === null) {
                squares[6] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[6] === 'X' && squares[4] === 'X') {
            if (squares[2] === null) {
                squares[2] = 'O'
                Jogardnv = 1

            }
        }
    }
    //intercalado
    if (Jogardnv !== 1) {
        if (squares[0] === 'X' && squares[2] === 'X') {
            if (squares[1] === null) {
                squares[1] = 'O'
                Jogardnv = 1
            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[3] === 'X' && squares[5] === 'X') {
            if (squares[4] === null) {
                squares[4] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[6] === 'X' && squares[8] === 'X') {
            if (squares[7] === null) {
                squares[7] = 'O'
                Jogardnv = 1

            }
        }
    }
    //vertical
    if (Jogardnv !== 1) {
        if (squares[0] === 'X' && squares[6] === 'X') {
            if (squares[3] === null) {
                squares[3] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[1] === 'X' && squares[7] === 'X') {
            if (squares[4] === null) {
                squares[4] = 'O'
                Jogardnv = 1

            }
        }
    }
    if (Jogardnv !== 1) {
        if (squares[2] === 'X' && squares[8] === 'X') {
            if (squares[5] === null) {
                squares[5] = 'O'
                Jogardnv = 1

            }
        }
    }
    console.log(Jogardnv)
    if (Jogardnv === 0) {
        BotFacil(repete, squares, aleatorio, primeira)
    }
}


class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => { this.props.onClick(i) }}
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
            Empate: 0,
            winner: null,
        }
    }



    async handleClick(i) {

        Tocar(3)

        let history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        // let aleatorio = null;


        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = "X"
        // await esperarCincoSegundos()

        let repete = false
        for (let rep = 0; rep < 8; rep++) {
            if (squares[rep] === null) {
                repete = true
            }
        }



        botdificil(squares, i, repete, this.state.stepNumber)

        const winner = calculateWinner(squares)
        let Placarx = this.state.Placarx
        let placarO = this.state.placarO
        let Empate = this.state.Empate
        if (winner) {
            if (winner === 'X') {
                Placarx++
                Tocar(5)
            } else {
                placarO++
                Tocar(5)
            }

        } else if (this.state.stepNumber === 4) {
            Empate++
            Tocar(1)
        }

        this.setState({
            history: history.concat([{ squares: squares }]),
            stepNumber: history.length,
            xIsNext: this.state.xIsNext,
            Placarx: Placarx,
            placarO: placarO,
            Empate: Empate,
            winner: winner,
        })
        // await esperarCincoSegundos()



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
            Empate: 0,
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
        let status2

        if (winner) {
            status = `Ganhador  ${winner}`
            status2 = 'Ganhador'


        } else if (!winner) {
            status = `Próximo Jogador :  ${(this.state.xIsNext ? 'X' : 'O')}`
            status2 = 'Próximo Jogador'

        }

        // const moves = history.map((step, move) => {
        //   const desc = move ? 'Voltar para a jogada ' + move : 'Inicio'
        //   return (
        //     <li key={move}>
        //       <button onClick={() => this.jumpTo(move)}>{desc}</button>
        //     </li>
        //   )
        // })


        if (this.state.stepNumber === 5 && !winner) {
            status = 'Empate'
            status2 = 'Empate'
        }


        let newGameButton = null
        if (this.state.stepNumber > 0) {
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
                    <div className={status2}><h1>{status}</h1></div>
                    <h2>Placar:</h2>
                    <h3>Jogador X: {this.state.Placarx}</h3>
                    <h3>Jogador O: {this.state.placarO}</h3>
                    {/* <h3>Empate: {this.state.Empate}</h3> */}
                    <button className={Styles.novozerar} onClick={() => this.resetarPlacar()}>Zerar Placar</button>
                    {newGameButton}
                    {/* <ol>{moves}</ol> */}
                </div>
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

function Dificil() {
    return (
        <>
            <PagInicial />
            <Game />
            <Link className={Styles.modo} to='/facil'>Easy</Link>
        </>)
}
export default Dificil