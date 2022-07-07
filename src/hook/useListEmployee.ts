import { useCallback, useState } from "react";
import { employeeService } from "../service/employee";
import { ListEmployeeOutput } from "../service/employee.interface";

export function useListEmployee() {
  const [employees, setEmployees] = useState<ListEmployeeOutput[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const listEmployee = useCallback(() => {
    setLoading(true);
    setError(null);

    const sub = employeeService.list().subscribe({
      next(employees) {
        setLoading(false);
        setEmployees(employees.data.data);
      },
      error(error) {
        setLoading(false);
        setError(error);
      },
    });

    return sub;
  }, []);

  return {
    listEmployee,
    employees,
    error,
    loading,
  };
}
