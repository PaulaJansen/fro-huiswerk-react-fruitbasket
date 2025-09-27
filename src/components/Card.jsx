import './Card.css';
import Button from "./Button.jsx";
import InputField from "./InputField.jsx";

function Card({id, fruit, counter, fruitCounter, register}) {

    return (
        <article id={id}>
            <h2>{fruit}</h2>
            <div>
                <Button className="button-primary" type="button" onClick={() => fruitCounter(prev => ({
                    ...prev,
                    [id]: prev[id] > 0 ? prev[id] - 1 : 0
                }))}>-</Button>
                <span>{counter}</span>
                <Button className="button-primary" type="button" onClick={() => fruitCounter(prev => ({...prev, [id]: prev[id] + 1}))}>+</Button>
                {register && (<input type="hidden" {...register(id)} value={counter}/>)}
            </div>
        </article>
    )
}

export default Card;