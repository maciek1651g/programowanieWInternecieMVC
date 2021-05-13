import styles from './style.module.css'
import React from 'react';
import ClientAPI from "./ClientAPI";

const $ = (id) => document.getElementById(id);


const Main = () => {
	const [showAge, setAge] = React.useState("Tutaj pojawi się informacja zwrotna.");

	const calculate = (event) => {
		event.preventDefault();
		const age = parseInt($("age").value);
		const sex = parseInt($("men").checked?0:1);
		const sex2 = parseInt($("women").checked?0:1);
		const smoke = parseInt($("no").checked?0:1);
		const smoke2 = parseInt($("yes").checked?0:1);
		const live = parseInt($("city").value);
		const weight = parseInt($("weight").value);
		const height = parseInt($("height").value);

		if(isNaN(age) || isNaN(weight) || height===0 ||  sex===sex2 || smoke===smoke2)
		{
			setAge("Uzupełnij wszystkie pola!");
			return;
		}


		const api = new ClientAPI();
		api.ageRequest(age,sex,smoke,live,weight,height, (res)=>{
			setAge("W przybliżeniu, pozostało Ci "+res+" lat życia.");
		}, (err)=>{
			setAge("Błąd podczas wysyłania zapytania");
		})
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
						<div style={{fontSize: "20px"}}>
							{showAge!==null? <p>{showAge}</p>: null}
						</div>

					</div>
				</article>
			</section>
		</main>
    )
}

export default Main