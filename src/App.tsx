import React, { useEffect } from 'react';
import { Employee } from './component/Employee/Employee';
import { List } from './component/List';
import { useListEmployee } from './hook/useListEmployee';

function App() {
  const {employees, listEmployee, error, loading} = useListEmployee()

  useEffect(() => {
    const sub = listEmployee()

    return () => sub.unsubscribe()
  }, [listEmployee])

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
    <List>
    {employees.map(({
      id,
      employee_age,
      employee_name,
      employee_salary,
      profile_image,
    }, i) => {
      return <Employee
        key={id}
        id={id}
        index={i}
        employee_age={employee_age}
        employee_name={employee_name}
        employee_salary={employee_salary}
        profile_image={profile_image}
      />
    })}
    </ List>
  );
}

export default App;
