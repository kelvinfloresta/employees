import React, { useEffect } from 'react';
import { Employee } from './component/Employee';
import { useListEmployee } from './hook/useListEmployee';

function App() {
  const {employees, listEmployee, error, loading} = useListEmployee()

  useEffect(listEmployee, [listEmployee])

  if (loading) {
    return <div>Loading employees...</div>
  }

  if (error) {
    return <div>
      <div>An error has occurred!</div>
      <p>Click <button onClick={listEmployee}>here</button> and try again</p>
    </div>
  }

  return (
    <>
    {employees.map(({
      id,
      employee_age,
      employee_name,
      employee_salary,
      profile_image,
    }) => {
      return <Employee
        key={id}
        id={id}
        employee_age={employee_age}
        employee_name={employee_name}
        employee_salary={employee_salary}
        profile_image={profile_image}
      />
    })}
    </>
  );
}

export default App;
