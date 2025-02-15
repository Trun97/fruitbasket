import './App.css'
import {useState} from "react";
import Button from "./components/Button/Button.jsx";

function App() {
    return (
        <>
            <main>
                <section className="outer-coll">
                    <h1>🍓Aardbei</h1>
                    <Button/>
                </section>
                <section className="outer-coll">
                    <h1>🍌 Banaan</h1>
                    <Button/>
                </section>
                <section className="outer-coll">
                    <h1>🍏 Appel</h1>
                    <Button/>
                </section>
                <section className="outer-coll">
                    <h1>🥝 Kiwi</h1>
                    <Button/>
                </section>
                <div>
                    <button type="button" className="reset-button" onClick={()=>setSum(0)}>Reset</button>
                </div>
            </main>
            <footer>
                <form>
                    <label htmlFor="first-name">Voornaam:</label>
                    <input type="text" id="first-name"/>
                    <br/>
                    <label htmlFor="last-name">Achternaam:</label>
                    <input type="text" id="last-name"/>
                    <br/>
                    <label htmlFor="age">Leeftijd:</label>
                    <input type="number" id="age"/>
                    <br/>
                    <label htmlFor="postal-code">Postcode</label>
                    <input type="text" id="postal-code"/>
                    <br/>
                    <label htmlFor="deliver-freq">Bezorgfrequentie</label>
                    <select id="deliver-freq">
                        <option>iedere week</option>
                        <option>om de week</option>
                        <option>iedere maand</option>
                    </select>
                    <br/>
                    <label>
                        <input type="radio"/>
                        Overdag</label>
                    <label>
                        <input type="radio"/>
                        s Avonds</label>
                    <br/>
                    <label htmlFor="remark">Opmerking:</label>
                    <textarea id="remark" ></textarea>
                    <br/>
                    <label htmlFor="terms">
                        <input type="checkbox" id="terms"/>
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
