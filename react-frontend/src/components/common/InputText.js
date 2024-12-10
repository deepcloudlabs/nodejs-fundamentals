export default function InputText({name,value,onChange,placeholder}) {
    return (
        <input type={"text"}
               name={name}
               id={name}
               placeholder={placeholder}
               className={"form-control"}
               value={value}
               onChange={onChange}
        />)
}
