import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormPageComponent } from './form-page/form-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { FormsModule } from '@angular/forms';
import { AboutPageComponent } from './about-page/about-page.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth/auth.service';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:"login", pathMatch:"full"},
  {path: 'home', component: FormPageComponent, canActivate:[authGuard]},
  {path: 'auth', component: AuthPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'signup', component: SignupComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormPageComponent,
    AuthPageComponent,
    AboutPageComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
