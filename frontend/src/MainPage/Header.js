import styles from './style.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
			<div className={styles.banner}>
				<h1>Programowanie w Internecie</h1>
				<p>Maciej Dominiak</p>
			</div>
			<div className={styles.nav}></div>
		</header>
    )
}

export default Header