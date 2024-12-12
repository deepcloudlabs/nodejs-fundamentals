export default function Table({data,keyName,columns,children}) {
    return (
        <table className={"table table-bordered table-responsive table-hover"}>
            <thead>
                <tr>
                    {
                        columns.map( (column,index) => (
                            <th  key={index}>{column.name}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
            {
                data.map( (value) => (
                    <tr  key={value[keyName]}>
                        {
                            columns.map( (column,index) => (
                                <td key={index}>{value[column.field]}</td>
                            ))
                        }
                    </tr>
                ))
            }
            {children}
            </tbody>
        </table>
    )
}
