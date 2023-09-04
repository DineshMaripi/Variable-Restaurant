import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  credentials: any = {};
  constructor(private formBuilder: FormBuilder,private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
    });
  
  }

  onSubmit() {
    this.authService.signup(this.credentials).subscribe({
      next: (response: any) => {
        console.log(response);
        // Handle successful registration (e.g., display success message)
      },
      error: (error: any) => {
        console.log('Error:', error);
        // Handle registration failure (e.g., display error message)
      },
    });
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
