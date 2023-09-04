import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm!: FormGroup;
  isCheck:boolean=true;
  user:any={}


  
  constructor(private formBuilder: FormBuilder,
    private authService:AuthService) {
    this.signUpForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10),
          ],
        ],
        conformpassword: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10),
          ],
        ],
        checkbox: [],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator = (
    control: FormGroup
  ): { [key: string]: boolean } | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('conformpassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  };
  onSubmit(): void {
    this.authService.signup(this.user).subscribe({
      next: (response: any) => {
        console.log(response);
        // Handle successful registration (e.g., display success message)
      },
      error: (error: any) => {
        console.log('Error:', error);
        // Handle registration failure (e.g., display error message)
      },
    });
  
    if (this.signUpForm) {
      console.log(this.signUpForm.value);
    }
  }
}  
