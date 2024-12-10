import Label from "./Label";

export default function Photo({name,label,value,alt,onChange}) {
    function handleInputFileChange(e) {
        const fileName = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = (fileEvent) => {
            onChange(fileEvent.target.result);
        }
        fileReader.readAsDataURL(fileName);
    }
    return (
        <div className={"input-group"}>
            <Label id={name} title={label} />
            <img className={"img-thumbnail"} src={value} alt={alt}/>
            <label>
                <input type={"file"}
                       name={name}
                       id={name}
                       onChange={handleInputFileChange}
                       style={{display: "none"}}></input>
                <span className={"btn btn-success"}>File</span>
            </label>
        </div>
    )
}
