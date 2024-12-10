import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

export default function Card({children,title}) {
    return (
        <div className={"card"}>
          <CardHeader title={title}></CardHeader>
            <CardBody>{children}</CardBody>
        </div>
    )
}
