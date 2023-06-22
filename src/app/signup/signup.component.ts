import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../user-data';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isSuccess = false;
  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }
  user: UserData = {
    name: '',
    email: '',
    password: ''
  };
  
  onSubmit(form: NgForm) {
    const formData: UserData = form.value;
    this.dataService.postData(formData).subscribe(
      response => {
        // Handle successful response
        console.log(response);
        this.isSuccess = true;
        form.reset();
        this.router.navigate(['/auth']);
      },
      error => {
        // Handle error
        console.error(error);
      }
    );
  }

}
