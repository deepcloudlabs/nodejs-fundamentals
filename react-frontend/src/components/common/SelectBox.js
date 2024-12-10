export default function SelectBox({label,name,options,value,onChange}) {
    return (
        <select value={value} onChange={onChange} id={name} name={name} className={"form-select"} aria-label={label}>
            {
                options.sort().map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))
            }
        </select>
    )
}
