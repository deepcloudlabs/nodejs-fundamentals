export default function Button({label,color, onClick}) {
    return (
        <button className={"btn ".concat(color)} onClick={onClick}>{label}</button>
    )
}
