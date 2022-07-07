import { httpRequest } from "../module/http";
import { Response } from "../module/http.interface";
import { ListEmployeeOutput } from "./employee.interface";

export const employeeService = {
  list() {
    return httpRequest.get<Response<ListEmployeeOutput[]>>("/v1/employees");
  },
};
