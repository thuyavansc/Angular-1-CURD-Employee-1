import { EmployeesService } from './../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addEmployee() {
    // console.log(this.addEmployeeRequest);
    this.employeesService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        // console.log(employee);
        this.router.navigate(['employees']);
      },
      error: (Response) => {
        console.log(Response);
      },
    });
  }
}
