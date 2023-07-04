import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {  
    constructor(private authService: AuthService, private router: Router) {
      
    }

    isLogged(): boolean {
      return this.authService.isLoggedIn;
    }
    
    onLogout(): void {
      this.authService.setLoggedIn(false);
      this.router.navigate(['/auth']); 
    }

    onNavigate(): void {
      this.router.navigate(['/auth']); 
    }


}
