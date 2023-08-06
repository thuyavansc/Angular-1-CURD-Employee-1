import { EmployeesService } from './../../../services/employees.service';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeesService.getEmployee(id).subscribe({
            next: (Response) => {
              this.employeeDetails = Response;
            },
          });
        }
      },
    });
  }

  updateEmployee() {
    this.employeesService
      .updateEmployee(this.employeeDetails.id, this.employeeDetails)
      .subscribe({
        next: (Response) => {
          this.router.navigate(['employees']);
        },
      });
  }

  deleteEmployee(id: string) {
    this.employeesService.deleteEmployee(id).subscribe({
      next: (Response) => {
        this.router.navigate(['employees']);
      },
    });
  }
}
