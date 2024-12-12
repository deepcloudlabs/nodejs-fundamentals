import Container from "./components/common/Container";
import Card from "./components/common/Card";
import {useState} from "react";
import FormGroup from "./components/common/FormGroup";
import Label from "./components/common/Label";
import InputText from "./components/common/InputText";
import SelectBox from "./components/common/SelectBox";
import CheckBox from "./components/common/CheckBox";
import Photo from "./components/common/Photo";
import Button from "./components/common/Button";
import Table from "./components/common/Table";
const initialEmployee = {
    identity: "11111111110",
    fullname: "John Doe",
    salary: 100_000,
    iban: "TR1",
    department: "IT",
    birthYear: 1973,
    fulltime: true,
    email: "john.doe@example.com",
    photo: "data:image/jpeg;base64,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"
}

function App() {
  let [employee, setEmployee] = useState(initialEmployee);
  let [employees, setEmployees] = useState([]);
  let columns = [
      {name: "Identity", field: "identity"},
      {name: "Full Name", field: "fullname"},
      {name: "Salary", field: "salary"},
      {name: "IBAN", field: "iban"},
      {name: "Email", field: "email"},
      {name: "Birth Year", field: "birthYear"},
      {name: "Department", field: "department"}
  ]
  const handleChange = (e) => {
      let newEmployee = {...employee};
      if (e.target.name === "fulltime") {
        newEmployee[e.target.name] = !newEmployee[e.target.name];
      } else {
        newEmployee[e.target.name] = e.target.value;
      }
      setEmployee(newEmployee);
  }
  const retrieveEmployees = () => {
      fetch("http://localhost:8100/hr/api/v1/employees?pageNo=0&pageSize=25")
          .then(res => res.json())
          .then(employees => setEmployees(employees.map(emp => {
              emp.identity = emp._id;
              return emp;
          })));
  }
  const handlePhotoChange = (newPhoto) => {
      let newEmployee = {...employee};
      newEmployee.photo = newPhoto;
      setEmployee(newEmployee);
  }
  return (
    <Container>
        <br />
        <Card title={"Employee Panel"}>
            <FormGroup>
                <Label id={"identity"} title={"Identity"} />
                <InputText value={employee.identity} onChange={handleChange} name={"identity"} placeholder={"Enter a valid employee ID"} />
                <Button label={"Find"} color={"btn-success"} onClick={() => alert("Clicked.")}></Button>
            </FormGroup>
            <FormGroup>
                <Label id={"fullname"} title={"Full Name"} />
                <InputText value={employee.fullname} onChange={handleChange} name={"fullname"} placeholder={"Enter a valid full name"} />
            </FormGroup>
            <FormGroup>
                <Label id={"salary"} title={"Salary"} />
                <InputText value={employee.salary} onChange={handleChange} name={"salary"} placeholder={"Enter a valid salary"} />
            </FormGroup>
            <FormGroup>
                <Label id={"iban"} title={"IBAN"} />
                <InputText value={employee.iban} onChange={handleChange} name={"iban"} placeholder={"Enter a valid IBAN"} />
            </FormGroup>
            <FormGroup>
                <Label id={"department"} title={"Department"} />
                <SelectBox value={employee.department} onChange={handleChange} label={"Pick a department"} name={"department"} options={["HR", "SALES", "IT", "FINANCE"]} />
            </FormGroup>
            <FormGroup>
                <CheckBox value={employee.fulltime} name={"fulltime"} label={"Full time"} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Photo name={"photo"} label={"Photo"} value={employee.photo} onChange={handlePhotoChange}></Photo>
            </FormGroup>
            <FormGroup>
                <Label id={"email"} title={"E-mail"} />
                <InputText value={employee.email} onChange={handleChange} name={"email"} placeholder={"Enter a valid e-mail"} />
            </FormGroup>
            <FormGroup>
                <Label className={"bg-info"} id={"birthYear"} title={"Birth Year"} />
                <InputText value={employee.birthYear} onChange={handleChange} name={"birthYear"} placeholder={"Enter a valid e-mail"} />
            </FormGroup>
            <FormGroup>
                <Button label={"Hire Employee"} color={"btn-warning"} onClick={() => alert("Clicked.")}></Button>
                <Button label={"Fire Employee"} color={"btn-danger"} onClick={() => alert("Clicked.")}></Button>
                <Button label={"Update Employee"} color={"btn-warning"} onClick={() => alert("Clicked.")}></Button>

            </FormGroup>
        </Card>
        <br />
        <Card title={"Employees"} headerContent={<Button label={"Find Employees"} color={"btn-info"} onClick={retrieveEmployees}></Button>}>
            <Table keyName={"identity"} data={employees} columns={columns}>
            </Table>
        </Card>
    </Container>
  );
}

export default App;
