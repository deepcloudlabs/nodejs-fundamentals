import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

export default function Card({children,headerContent,title}) {
    return (
        <div className={"card"}>
          <CardHeader title={title} headerContent={headerContent}></CardHeader>
            <CardBody>{children}</CardBody>
        </div>
    )
}
