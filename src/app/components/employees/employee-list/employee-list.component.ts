import { EmployeesService } from './../../../services/employees.service';
import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  /*employees1: Employee[] = [
    {
      id: '010',
      name: 'Joe doew',
      email: 'sample@gmail.com',
      phone: 98678222,
      salary: 8000,
      department: 'human resource',
    },
    {
      id: '020',
      name: 'doctor abragam',
      email: 'abgran@gmail.com',
      phone: 98678222,
      salary: 8000,
      department: 'human resource',
    },
    {
      id: '030',
      name: 'Michel dison',
      email: 'michel@gmail.com',
      phone: 98678222,
      salary: 8000,
      department: 'human resource',
    },
  ];*/
  constructor(private employeesService: EmployeesService) {}
  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        // console.log(employees);
        this.employees = employees;
      },
      error: (Response) => {
        console.log(Response);
      },
    });
  }
}
