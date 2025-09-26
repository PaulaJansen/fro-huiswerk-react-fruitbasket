import './InputField.css';

function InputField({label, as = "input", type, name, id, register, value, options = [], placeholder = ""}) {
    const Component = as;
    const wrapInputInLabel = type === "radio" || type === "checkbox";

    if (as === "select") {
        return (
            <label htmlFor={id}>
                {label}
                <Component
                    id={id}
                    {...register(name)}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value} disabled={option.disabled}
                                hidden={option.hidden}>
                            {option.label}
                        </option>))}
                </Component>
            </label>
        )
    }
    return wrapInputInLabel ? (
        <label>
            <Component
                {...register(name)}
                id={id}
                value={value}
                type={type}
            />
            {label}
        </label>
    ) : (
        <label htmlFor={id}>
            {label}
            <Component
                {...register(name)}
                id={id}
                placeholder={placeholder}
                type={type}
            />
        </label>
    )
}

export default InputField;