const express = require("express");
const api = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const {getEmployeeByIdentity, fireEmployee, updateEmployee, hireEmployee, getEmployees} = require("../repository/mongo-repository-hr");
const createApi = (callbackFun) => {
    api.use(bodyParser.json({limit: "5mb"}));
    api.use(logger("dev"));
    api.use(function(req,res,next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "HEAD,OPTIONS,POST,PUT,PATCH,DELETE,GET");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    api.get("/hr/api/v1/employees/:identity",async (req,res) => {
        const {identity} = req.params;
        getEmployeeByIdentity(identity).then((employee) => {
            res.set("Content-Type", "application/json");
            res.status(200).send(employee);
        }).catch((err) => {
                res.status(400).send(err);
            })
    });
    api.get("/hr/api/v1/employees",async (req,res) => {
        const {pageNo, pageSize} = req.query;
        getEmployees(pageNo,pageSize).then((employees) => {
            res.set("Content-Type", "application/json");
            res.status(200).send(employees);
        }).catch((err) => {
                res.status(400).send(err);
            })
    });
    //region POST /hr/api/v1/employees
    api.post("/hr/api/v1/employees", (req, res) => {
        const employee = req.body;
        hireEmployee(employee).then(
            insertedEmployee => {
                res.set("Content-Type", "application/json");
                res.status(200).send(insertedEmployee);
            }
        ).catch(error => {
            res.set("Content-Type", "application/json");
            res.status(400).send({error});
        })
    });
//endregion
//region PUT /hr/api/v1/employees/:identity
    api.put("/hr/api/v1/employees/:identity", (req, res) => {
        const employee = req.body;
        updateEmployee(employee).then(
            updatedEmployee => {
                res.set("Content-Type", "application/json");
                res.status(200).send(updatedEmployee);
            }
        ).catch(error => {
            res.set("Content-Type", "application/json");
            res.status(400).send({error});
        })
    });
//endregion
//region DELETE /hr/api/v1/employees/:identity
    api.delete("/hr/api/v1/employees/:identity", (req, res) => {
        const identity = req.params.identity;
        fireEmployee(identity).then(
            removedEmployee => {
                res.set("Content-Type", "application/json");
                res.status(200).send(removedEmployee);
            }
        ).catch(error => {
            res.set("Content-Type", "application/json");
            res.status(400).send({error});
        })
    });
//endregion
    const server = api.listen(process.env.API_PORT || 8100, callbackFun);
}

exports.getApi = () => {
    return api;
}

exports.createApi = createApi;
