export default function Label({id,title}) {
    return (
        <label htmlFor={id} className="form-label">{title}:</label>
    )
}
