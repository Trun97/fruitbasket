import './App.css'

function App() {

    return (
        <>
        <main>
        <section className="outer-coll">
            <h1>🍓Aardbei</h1>
            <button>+</button>
            <span>0</span>
            <button>-</button>
        </section>
        <section className="outer-coll">
            <h1>🍌Banaan</h1>
            <button>+</button>
            <span>0</span>
            <button>-</button>
        </section>
        <section className="outer-coll">
            <h1>🍏Appel</h1>
            <button>+</button>
            <span>0</span>
            <button>-</button>
        </section>
        <section className="outer-coll">
            <h1>🥝Kiwi</h1>
            <button>+</button>
            <span>0</span>
            <button>-</button>
        </section>
        <button className="reset-button">Reset</button>
        </main>
            <footer>
                <p>Voornaam</p>
                <input/>
                <p>Achternaam</p>
                <input/>
                <p>Leeftijd</p>
                <input/>
                <p>Postcode</p>
                <input/>
                <p>Bezorgfrequentie</p>
                <select id="dropdown">
                    <option value="iedere week">iedere week</option>
                </select>
                <br/>
                <br/>
                <p>Overdag</p>
                <input type="radio"/>
                <p>'s Avonds</p>
                <input type="radio"/>
                <p>Opmerking</p>
                <textarea>
                <input type="text"/>
                </textarea>
                <br/>
                <br/>
                <input type="checkbox"/>
                <p>Ik ga akkoord met de voorwaarden</p>
                <button>Verzend</button>
            </footer>
        </>
    )
}

export default App
