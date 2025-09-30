import "./App.css";
import {useForm} from "react-hook-form";
import InputField from "./components/InputField.jsx";
import Button from "./components/Button.jsx";
import {useState} from "react";
import Card from "./components/Card.jsx";

function App() {
    function handleFormSubmit(data) {
        console.log(data);
    }

    const {register, handleSubmit} = useForm();
    const [active, setActive] = useState(false);
    const [counters, setCounters] = useState({
        strawberry: 0,
        banana: 0,
        apple: 0,
        pineapple: 0,
        grapes: 0,
        orange: 0,
    });

    const fruits = [
        {id: "strawberry", emoji: "🍓", name: "Aardbeien (100 gr)"},
        {id: "banana", emoji: "🍌", name: "Bananen"},
        {id: "apple", emoji: "🍎", name: "Appels"},
        {id: "pineapple", emoji: "🍍", name: "Ananas"},
        {id: "grapes", emoji: "🍇", name: "Druiven (100 gr)"},
        {id: "orange", emoji: "🍊", name: "Sinaasappelen"},
    ];

    return (
        <div className="background-wrapper">
            <header>
                <h1>Je lievelingsfruit, altijd wanneer jij er zin in hebt!</h1>
            </header>
            <main>
                <section className="cards-wrapper">
                    {fruits.map(fruit => (
                        <Card key={fruit.id}
                              id={fruit.id}
                              register={register}
                              fruit={`${fruit.emoji} ${fruit.name}`}
                              counter={counters[fruit.id]}
                              fruitCounter={setCounters}
                              buttonActive={active[fruit.id]}
                              setButtonActive={(val) => setActive(prev => ({...prev, [fruit.id]: val}))}
                        />
                    ))}
                </section>
                <Button className="button-secondary" type="button"
                        onClick={() => {
                            setCounters(Object.fromEntries(fruits.map(fruit => [fruit.id, 0])));
                            setActive({});}}
                            >Reset</Button>
                <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
                    <InputField label="Voornaam: " as="input" type="text" name="name" id="name" register={register}/>
                    <InputField label="Achternaam: " as="input" type="text" name="surname" id="surname"
                                register={register}/>
                    <InputField label="Leeftijd: " as="input" type="text" name="age" id="age" register={register}/>
                    <InputField label="Postcode: " as="input" type="text" name="zipcode" id="zipcode"
                                register={register}/>
                    <InputField label="Bezorgfrequentie: " as="select" name="frequency" id="frequency"
                                register={register}
                                options={[{
                                    value: "",
                                    label: "Kies bezorging...",
                                    disabled: true
                                }, {value: "weekly", label: "Iedere week"}, {
                                    value: "daily",
                                    label: "Dagelijks"
                                }, {value: "three-days", label: "Elke drie dagen"}, {
                                    value: "biweekly",
                                    label: "Om de week"
                                }, {value: "monthly", label: "Maandelijks"}]}/>
                    <InputField label="Overdag" as="input" type="radio" name="time-of-day" id="time-of-day-day" value="day"
                                register={register}/>
                    <InputField label="'s Avonds" as="input" type="radio" name="time-of-day" id="time-of-day-evening"
                                value="evening" register={register}/>
                    <InputField label="Opmerkingen: " as="textarea" className="textarea" name="message" id="message"
                                register={register} placeholder="Schrijf hier je bericht..."/>
                    <InputField label="Ik ga akkoord met de voorwaarden" as="input" type="checkbox"
                                name="terms-and-conditions" id="terms-and-conditions" register={register} value="yes"/>
                    <Button className="button-secondary" type="submit">Verzend</Button>
                </form>
            </main>
        </div>
    )
}

export default App
