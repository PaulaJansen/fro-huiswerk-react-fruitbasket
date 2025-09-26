import './App.css'
import {useForm} from "react-hook-form";
import InputField from "./components/InputField.jsx";
import Button from "./components/Button.jsx";
import {useState} from "react";
import Card from "./components/Card.jsx";

function App() {
    function handleFormSubmit(data) {
        console.log(data);
    }

    const [counters, setCounters] = useState({
        strawberry: 0,
        banana: 0,
        apples: 0,
    });

    const fruits = [
        {id: "strawberry", emoji: "🍓", name: "Aardbeien"},
        {id: "banana", emoji: "🍌", name: "Bananen"},
        {id: "apple", emoji: "🍎", name: "Appels"},
    ];

    const {register, handleSubmit} = useForm();

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            {fruits.map(fruit => (
                <Card key={fruit.id}
                      id={fruit.id}
                      fruit={`${fruit.emoji} ${fruit.name}`}
                      counter={counters.fruit.id}
                      fruitCounter={newValue => setCounters(prev => ({...prev, [fruit.id]: typeof newValue === "function" ? newValue(prev[fruit.id]) : newValue}))}
                />
            ))}


            <Button type="button" label="Reset"
                    onClick={() => setCounters(prev => Object.fromEntries(Object.keys(prev).map(key => [key, 0])))}/>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <InputField label="Voornaam: " as="input" type="text" name="name" id="name" register={register}/>
                <InputField label="Achternaam: " as="input" type="text" name="surname" id="surname"
                            register={register}/>
                <InputField label="Leeftijd: " as="input" type="text" name="age" id="age" register={register}/>
                <InputField label="Postcode: " as="input" type="text" name="zipcode" id="zipcode" register={register}/>
                <InputField label="Bezorgfrequentie " as="select" name="frequency" id="frequency" register={register}
                            options={[{
                                value: "",
                                label: "Kies een bezorgfrequentie...",
                                disabled: true
                            }, {value: "weekly", label: "Iedere week"}, {
                                value: "daily",
                                label: "Dagelijks"
                            }, {value: "three-days", label: "Elke drie dagen"}, {
                                value: "biweekly",
                                label: "Om de week"
                            }, {value: "monthly", label: "Maandelijks"}]}/>
                <InputField label="Overdag" as="input" type="radio" name="time-of-day" id="time-of-day" value="day"
                            register={register}/>
                <InputField label="'s Avonds" as="input" type="radio" name="time-of-day" id="time-of-day"
                            value="evening" register={register}/>
                <InputField label="Opmerkingen: " as-="input" type="textarea" name="message" id="message"
                            register={register} placeholder="Schrijf hier je bericht..."/>
                <InputField label="Ik ga akkoord met de voorwaarden" as="input" type="checkbox"
                            name="terms-and-conditions" id="terms-and-conditions" register={register} value="yes"/>
                <Button type="submit" label="Verzend"/>
            </form>
        </>
    )
}

export default App
