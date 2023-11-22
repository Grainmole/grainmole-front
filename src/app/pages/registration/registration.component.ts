import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../shared/services/auth/auth.service";
import { User } from "../../shared/types/User";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService) {}

  register(): void {
    if (!this.registrationForm.invalid) {
      const user: User = {firstname: this.registrationForm.controls.firstname.value!, lastname: this.registrationForm.controls.lastname.value!,
        email: this.registrationForm.controls.email.value!, password: this.registrationForm.controls.password.value!}
      this.authService.registration(user);
    }
  }
}
