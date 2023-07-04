import { Component } from '@angular/core';
import { UserData } from '../shared/user-data';
import { AuthService } from '../auth/auth.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {
  user: UserData = {
    name: '',
    email: '',
    password: ''
  };  

  isLoginFailed = false;
  isSuccess = false;
  
  constructor(private authService:AuthService, private http:HttpClient, private router:Router) { }

  onSubmit(formData: NgForm): void {
    this.http.get<any>('https://json-servr.vercel.app/signup').subscribe( 
      response => {
        const user = response.find((user: { email: string; password: string; }) => {  
          return user.email === this.user.email && user.password === this.user.password;
        });
        if (user) {
          this.authService.setLoggedIn(true);
          this.router.navigate(['/form']);
          this.isSuccess = true;
        } else {
          this.authService.setLoggedIn(false);
          this.router.navigate(['/auth']);
          console.log('Invalid email or password');
          this.isLoginFailed = true;
          
        }
        },
      error => {
        console.error(error);
      }
    );
      if(this.authService.isLoggedIn){
        this.router.navigate(['/form']);
      }
  }
}
