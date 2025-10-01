import './InputField.css';

function InputField({label, as = "input", type, className, name, id, register, value, options = [], placeholder = ""}) {
    const Component = as === "textarea" ? "textarea" :
                             as === "select" ? "select" : "input";
    const wrapInputInLabel = type === "radio" || type === "checkbox";

    if (as === "select") {
        return (
            <label htmlFor={id} className="label-primary">
                <span>{label}</span>
                <Component
                    className={className}
                    id={id}
                    {...register(name)}>
                    {options?.map((option) => (
                        <option key={option.value} value={option.value} disabled={option.disabled}
                                hidden={option.hidden}>
                            {option.label}
                        </option>))}
                </Component>
            </label>
        )
    } else if (as === "textarea") {
        return (
            <label htmlFor={id} className="label-tertiary">
                <span>{label}</span>
                <Component
                    className={className}
                    {...register(name)}
                    id={id}
                    placeholder={placeholder}
                />
            </label>
        )
    } else {
        return wrapInputInLabel ? (
            <label className="label-secondary">
                <Component
                    className={className}
                    {...register(name)}
                    id={id}
                    value={value}
                    type={type}
                />
                <span>{label}</span>
            </label>
        ) : (
            <label htmlFor={id} className="label-primary">
                <span>{label}</span>
                <Component
                    className={className}
                    {...register(name)}
                    id={id}
                    type={type}
                />
            </label>
        )
    }
}

export default InputField;