import styles from './style.module.css'


const Main = () => {
    return (
        <main className={styles.main}>
			<section className={styles.leftcolumn}>
				<article className={styles.artykul}>
					<h2>Jak długo będziesz żył?</h2>
					<p>Wypełnij poniższy formularz, a aplikacja powie Ci ile średnio żyją osoby podobne do Ciebie.</p>
					<div className={styles.board}>
						<form>
							<div className={styles.input}>
								<label htmlFor="age" className={styles.inputName}>Podaj swój wiek:</label>
								<input id="age" name="age" type="number"/>
							</div>
							<div className={styles.input}>
								<label className={styles.inputName}>Wybierz płeć:</label>
								<label htmlFor="men">Mężczyzna</label>
								<input id="men" name="sex" type="radio" value={0} style={{marginRight: "20px"}} checked/>
								<label htmlFor="women">Kobieta</label>
								<input id="women" name="sex" type="radio" value={1}/>
							</div>
							<div className={styles.input}>
								<label className={styles.inputName}>Czy palisz papierosy:</label>
								<label htmlFor="yes">Tak</label>
								<input id="yes" name="smoke" type="radio" value={0}  style={{marginRight: "20px"}} checked/>
								<label htmlFor="no">Nie</label>
								<input id="no" name="smoke" type="radio" value={1}/>
							</div>
						</form>
					</div>
				</article>
			</section>
		</main>
    )
}

export default Main