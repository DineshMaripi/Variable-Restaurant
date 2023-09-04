import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm!:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.signUpForm=this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:[ '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]
    ],
      conformpassword:[ '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]
    ],
      checkbox:[]

    },{validator:this.passwordMatchValidator })
  }

  passwordMatchValidator = (control: FormGroup): { [key: string]: boolean } | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('conformpassword')?.value;
  
    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  };
  onSubmit(){
  if(this.signUpForm){
    console.log(this.signUpForm.value)
  }
 }
}
