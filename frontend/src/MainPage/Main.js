import styles from './style.module.css'
import React from 'react';

const $ = (id) => document.getElementById(id);


const Main = () => {
	const [showAge, setAge] = React.useState(null);

	const calculate = (event) => {
		event.preventDefault();
		const age = $("age").value;
		const sex = $("men").checked?0:1;
		const sex2 = $("women").checked?0:1;
		const smoke = $("no").checked?0:1;
		const smoke2 = $("yes").checked?0:1;
		const live = $("city").value;
		const weight = $("weight").value;
		const height = $("height").value/100;

		if(age==="" || weight==="" || height===0 ||  sex===sex2 || smoke===smoke2)
		{
			setAge("Uzupełnij wszystkie pola!");
			return;
		}

		fetch("http://localhost:3000/"+age+"/"+sex+"/"+smoke+"/"+live+"/"+weight+"/"+height)
			.then((res)=>res.json())
			.then((data)=>{
				setAge("W przybliżeniu, pozostało Ci "+data+" lat życia.");
			})
			.catch((err)=>{
				setAge("Błąd podczas wysyłania zapytania");
			});
	}

    return (
        <main className={styles.main}>
			<section className={styles.leftcolumn}>
				<article className={styles.artykul}>
					<h2>Jak długo będziesz żył?</h2>
					<p>Wypełnij poniższy formularz, a aplikacja powie Ci ile lat życia Ci zostało.</p>
					<div className={styles.board}>
						<form>
							<div className={styles.input}>
								<label htmlFor="age" className={styles.inputName}>Podaj swój wiek(lata):</label>
								<input id="age" name="age" type="number" required/>
							</div>
							<div className={styles.input}>
								<label htmlFor="weight" className={styles.inputName}>Podaj swoją wagę(kilogramy):</label>
								<input id="weight" name="weight" type="number" required/>
							</div>
							<div className={styles.input}>
								<label htmlFor="height" className={styles.inputName}>Podaj swój wzrost(centymetry):</label>
								<input id="height" name="height" type="number" required/>
							</div>
							<div className={styles.input}>
								<label className={styles.inputName}>Wybierz płeć:</label>
								<span>
									<label htmlFor="men">Mężczyzna</label>
									<input id="men" name="sex" type="radio" value={0} style={{marginRight: "20px"}}/>
								</span>
								<span>
									<label htmlFor="women">Kobieta</label>
									<input id="women" name="sex" type="radio" value={1}/>
								</span>
							</div>
							<div className={styles.input}>
								<label className={styles.inputName}>Czy palisz papierosy:</label>
								<span>
									<label htmlFor="yes">Tak</label>
									<input id="yes" name="smoke" type="radio" value={0}  style={{marginRight: "20px"}}/>
								</span>
								<span>
									<label htmlFor="no">Nie</label>
									<input id="no" name="smoke" type="radio" value={1}/>
								</span>
							</div>
							<div className={styles.input}>
								<label htmlFor="city" className={styles.inputName}>Gdzie mieszkasz:</label>
								<select id="city" name="city">
									<option value={0}>Wieś</option>
									<option value={1}>Małe miasteczko</option>
									<option value={2}>Przedmieścia</option>
									<option value={3}>Miasto</option>
								</select>
							</div>
							<button onClick={calculate}>Oblicz liczbę pozostałych lat życia</button>
						</form>
						{showAge!==null? <div><p>{showAge}</p></div> : null}
					</div>
				</article>
			</section>
		</main>
    )
}

export default Main