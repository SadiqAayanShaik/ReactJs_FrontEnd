import axios from "axios";

const EMPLOYEE_BASE_URL="http://localhost:9990/emp";
class EmployeeService
{
    getEmployee()
    {
        return axios.get(EMPLOYEE_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL,employee);
    }

    getEmployeeById(EmployeeId)
    {
        return axios.get(EMPLOYEE_BASE_URL+"/"+EmployeeId)
    }

    updateEmployee(EmployeeId,employee){
        return axios.put(EMPLOYEE_BASE_URL+'/'+EmployeeId,employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_URL+'/'+employeeId)
    }
}

export default new EmployeeService;

