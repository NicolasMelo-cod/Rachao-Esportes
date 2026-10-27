import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

function senhasIguaisValidator(
  control: AbstractControl
): ValidationErrors | null {

  const senha = control.get('senha')?.value;
  const confirmarSenha = control.get('confirmarSenha')?.value;

  // Não compara campos vazios.
  // A obrigatoriedade será verificada pelos Validators.required.
  if (!senha || !confirmarSenha) {
    return null;
  }

  // Se forem diferentes, o formulário recebe um erro.
  return senha === confirmarSenha
    ? null
    : { senhasDiferentes: true };
}

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {

  submitted = false;

  mostrarSenha = false;
  mostrarConfirmacaoSenha = false;

  cadastroForm = new FormGroup({

    nome: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),

    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    }),

    senha: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(8)
      ]
    }),

    confirmarSenha: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required
      ]
    })

  }, {
    validators: senhasIguaisValidator
  });

  onSubmit(): void {

    this.submitted = true;

    this.cadastroForm.markAllAsTouched();

    if (this.cadastroForm.invalid) {
      return;
    }

    console.log(
      'Validações concluídas. Aguardando integração com o Backend.'
    );
  }
}