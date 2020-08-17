import { Employee, Ride, VehicleType } from "../models/employee.model";

let  employee : Employee[] = [
    {
        emp_id : 1,
        name : "Jack",
        vehicles : [
            {
                vehicle_type : VehicleType.CAR,
                seats : 5,
                vehicle_num : "RXT1023"
            }
        ]
    },
    {
        emp_id : 2,
        name : "Jill",
        vehicles : [
            {
                vehicle_type : VehicleType.BIKE,
                seats : 1,
                vehicle_num : "RXT1011"
            }
        ]
    },
    {
        emp_id : 3,
        name : "Bill",
        vehicles : []
    },
    {
        emp_id : 4,
        name : "Hill",
        vehicles : []
    },
    {
        emp_id : 5,
        name : "Jim",
        vehicles : [
            {
                vehicle_type : VehicleType.CAR,
                seats : 3,
                vehicle_num : "PAM1234"
            }
        ]
    },
    {
        emp_id : 6,
        name : "Pam",
        vehicles : []
    },
    {
        emp_id : 7,
        name : "Stanley",
        vehicles : []
    },
    {
        emp_id : 8,
        name : "Micheal",
        vehicles : [
            {
                vehicle_type : VehicleType.CAR,
                seats : 4,
                vehicle_num : "MOS1234"
            }
        ]
    },
    {
        emp_id : 9,
        name : "Dwight",
        vehicles : []
    },
    {
        emp_id : 10,
        name : "Erin",
        vehicles : []
    },
    {
        emp_id : 11,
        name : "Andy",
        vehicles : []
    }
]



export {employee}