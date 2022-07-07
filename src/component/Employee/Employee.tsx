import React from 'react'
import { formatCurrency } from '../../module/format';
import { EmployeeAvatar, EmployeeContainer, EmployeeDescription } from './style';

interface EmployeeProps {
    readonly index: number;
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
        <EmployeeContainer index={props.index}>
            <p>{props.id}</p>
            <EmployeeAvatar alt={alt} src={photo} />
            <EmployeeDescription>
                Hi, I'm {props.employee_name}. <br />
                I'm {props.employee_age} <br />
                My current salary is <br />
                {formatCurrency(props.employee_salary)}
            </EmployeeDescription>
        </EmployeeContainer>
    )
}
