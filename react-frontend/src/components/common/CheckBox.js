export default function CheckBox({name,label,value,onChange}) {
    return (
        <div className={"form-check"}>
            <label htmlFor={name}>{label}
              <input type="checkbox"
                     id={name}
                     name={name}
                     checked={value}
                     onChange={onChange}
              />
            </label>
        </div>
    )
}
