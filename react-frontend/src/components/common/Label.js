export default function Label({id,title,className}) {
    className = className || 'form-label';
    return (
        <label htmlFor={id} className={className}>{title}:</label>
    )
}
