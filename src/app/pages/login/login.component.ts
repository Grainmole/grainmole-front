import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginUser } from "../../shared/types/LoginUser";
import { AuthService } from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService) {}

  login() {
    if (!this.loginForm.invalid) {
      const user: LoginUser = {email: this.loginForm.controls.email.value!, password: this.loginForm.controls.password.value!}
      this.authService.login(user);
      this.loginForm.reset();
    }
  }
}
