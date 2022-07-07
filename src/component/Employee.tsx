import React from 'react'

interface EmployeeProps {
    readonly id: number;
    readonly employee_name: string;
    readonly employee_salary: number;
    readonly employee_age: number;
    readonly profile_image: string;
}

export function Employee(props: EmployeeProps) {
    const alt = `The ${props.employee_name} photo`;

    const photo = props.profile_image || '/default-employee.jpg'

    return (
        <div>
            <img width={96} alt={alt} src={photo} />
            <p>{props.id}</p>
            <p>{props.employee_name}</p>
            <p>{props.employee_salary}</p>
            <p>{props.employee_age}</p>
        </div>
    )
}
