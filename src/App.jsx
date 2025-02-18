import './App.css'
import React, {useState} from "react";

function App() {

    const [sum, setSum] = useState({
        aardbei: 0,
        banaan: 0,
        appel: 0,
        kiwi: 0});

    function addButton(fruit) {
        setSum(function(prevSum) {
            let newSum = {
                aardbei: prevSum.aardbei,
                banaan: prevSum.banaan,
                appel: prevSum.appel,
                kiwi: prevSum.kiwi
            };
            newSum[fruit] = prevSum[fruit] + 1;
            return newSum;
        });
    }

    function subtractButton(fruit) {
        setSum(function(prevSum) {
            let newSum = {
                aardbei: prevSum.aardbei,
                banaan: prevSum.banaan,
                appel: prevSum.appel,
                kiwi: prevSum.kiwi
            };
            newSum[fruit] = prevSum[fruit] > 0 ? prevSum[fruit] - 1 : 0;
            return newSum;
        });
    }
    function handleReset () {
        setSum({
            aardbei: 0,
            banaan: 0,
            appel: 0,
            kiwi: 0});
    }


    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        age: "",
        postalCode: "",
        remark: "",
        deliverFrequency: "iedere week",
        timeSlot: "Overdag",
        terms: false
    })

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit (e) {
        e.preventDefault();
        console.log(sum);
        console.log(formState);
    }

    return (
        <>
            <main>
                <section className="outer-coll">
                    <h1>🍓Aardbei</h1>
                    <button type="button" onClick={() => subtractButton("aardbei")}>-</button>
                    <span>{sum.aardbei}</span>
                    <button type="button" onClick={() => addButton("aardbei")}>+</button>
                </section>
                <section className="outer-coll">
                    <h1>🍌 Banaan</h1>
                    <button type="button" onClick={() => subtractButton("banaan")}>-</button>
                    <span>{sum.banaan}</span>
                    <button type="button" onClick={() => addButton("banaan")}>+</button>
                </section>
                <section className="outer-coll">
                    <h1>🍏 Appel</h1>
                    <button type="button" onClick={() => subtractButton("appel")}>-</button>
                    <span>{sum.appel}</span>
                    <button type="button" onClick={() => addButton("appel")}>+</button>
                </section>
                <section className="outer-coll">
                    <h1>🥝 Kiwi</h1>
                    <button type="button" onClick={() => subtractButton("kiwi")}>-</button>
                    <span>{sum.kiwi}</span>
                    <button type="button" onClick={() => addButton("kiwi")}>+</button>
                </section>
                <div>
                    <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
                </div>
            </main>
            <footer>
                <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">Voornaam:</label>
                    <input type="text" name= "firstName" id="first-name" value={formState.firstName} onChange={handleChange}/>
                    <br/>
                    <label htmlFor="last-name">Achternaam:</label>
                    <input type="text" name= "lastName" id="last-name" value={formState.lastName} onChange={handleChange}/>
                    <br/>
                    <label htmlFor="age">Leeftijd:</label>
                    <input type="number" name="age" id="age" value={formState.age} onChange={handleChange}/>
                    <br/>
                    <label htmlFor="postal-code">Postcode</label>
                    <input type="text" name="postalCode" value={formState.postalCode} id="postal-code" onChange={handleChange}/>
                    <br/>
                    <label htmlFor="deliver-freq">Bezorgfrequentie</label>
                    <select id="deliver-freq" name="deliverFrequency" value={formState.deliverFrequency} onChange={handleChange}>
                        <option value={"iedere week"}>iedere week</option>
                        <option value={"om de week"}>om de week</option>
                        <option value={"iedere maand"}>iedere maand</option>
                    </select>
                    <br/>
                    <label>
                        <input type="radio" name="timeSlot" value="Overdag" checked={formState.timeSlot === "Overdag"} onChange={handleChange} />
                        Overdag</label>
                    <label>
                        <input type="radio" name="timeSlot" value="'s Avonds" checked={formState.timeSlot === "'s Avonds"} onChange={handleChange}/>
                        s Avonds</label>
                    <br/>
                    <label htmlFor="remark">Opmerking:</label>
                    <textarea id="remark" name= "remark" value={formState.remark} onChange={handleChange}></textarea>
                    <br/>
                    <label htmlFor="terms">
                        <input type="checkbox" id="terms" name="terms" checked={formState.terms} onChange={handleChange}/>
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <br/>
                    <button type="submit">Verzend</button>
                </form>
            </footer>
        </>
    )
}

export default App
