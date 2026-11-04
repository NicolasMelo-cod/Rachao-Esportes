import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  submitted = false;

  mostrarSenha = false;

  loginForm = new FormGroup({
    email: new FormControl('', {
    nonNullable: true,
    validators: [
    Validators.required,
    Validators.email
  ]
  }),

    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

onSubmit(): void {
  this.submitted = true;

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }
}
}