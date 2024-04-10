import styles from './PagInicial.module.css'
import { Link } from 'react-router-dom'
// import logo from './imgs/veio.png'
function PagInicial() {
    return (
            <header className={styles.center}>
                    {/* <div className={styles.logo}><img src={logo} alt='a' /></div> */}
                    <div className={styles.menu}>
                        <Link to='/'>Home</Link>
                        <Link to='/facil'>Bot</Link>
                        <Link to='/amigo'>Friend</Link>
                    </div>

            </header>
    )
}
export default PagInicial