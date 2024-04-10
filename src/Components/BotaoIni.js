import Styles from './BotaoIni.module.css'
import { Link } from 'react-router-dom'
function PaginaInicial() {
    return (
        
            <div className={Styles.container}>

                <div className={Styles.gamecontainer}>

                    <h1>  JOGO DA VELHA </h1>
                    <Link className={Styles.startbutton} to='/facil'>Jogar com o BOT</Link>
                    <span className={Styles.x}>X</span>
                    <span className={Styles.x}>O</span>
                    <Link className={Styles.startbutton} to='/amigo'>Jogar com Amigo</Link>
                </div>
            </div>
      
    )
}
export default PaginaInicial