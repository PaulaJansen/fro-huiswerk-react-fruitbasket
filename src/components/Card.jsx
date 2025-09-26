import './Card.css';
import Button from "./Button.jsx";

function Card({id, fruit, counter, fruitCounter}){

    return (
        <article id={id}>
            <h3>{fruit}</h3>
            <Button type="button" label="-" onClick={() => fruitCounter(prev => (prev > 0 ? prev - 1 : 0))} />
            <span>{counter}</span>
            <Button type="button" label="+" onClick={() => fruitCounter(prev => prev + 1)} />
        </article>
    )
}

export default Card;