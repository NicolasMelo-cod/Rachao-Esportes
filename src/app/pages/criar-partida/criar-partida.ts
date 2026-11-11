import { Cep } from '../../services/cep';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-criar-partida',
  imports: [ReactiveFormsModule],
  templateUrl: './criar-partida.html',
  styleUrl: './criar-partida.css'
})

export class CriarPartida {

  @Input() aberto = false;

  @Output() fechar = new EventEmitter<void>();

  constructor(private cepService: Cep) {}

  partidaForm = new FormGroup({

    esporte: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    dataHora: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    duracao: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    qtdTimes: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(2)
    ]),

    qtdJogadoresTime: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(1)
    ]),

   local: new FormControl('', {
  nonNullable: true,
  validators: [Validators.required]
}),

cep: new FormControl('', {
  nonNullable: true,
  validators: [
    Validators.required,
    Validators.pattern(/^\d{5}-?\d{3}$/)
  ]
}),

logradouro: new FormControl('', {
  nonNullable: true,
  validators: [Validators.required]
}),

numero: new FormControl('', {
  nonNullable: true,
  validators: [Validators.required]
}),

bairro: new FormControl('', {
  nonNullable: true,
  validators: [Validators.required]
}),

cidade: new FormControl('', {
  nonNullable: true,
  validators: [Validators.required]
}),

estado: new FormControl('', {
  nonNullable: true,
  validators: [Validators.required]
}),

complemento: new FormControl('', {
  nonNullable: true
})
  });

  submitted = false;
consultandoCep = false;
cepNaoEncontrado = false;
erroConsultaCep = false;

  fecharModal(): void {
    this.fechar.emit();
  }

  onSubmit(): void {

    this.submitted = true;

    this.partidaForm.markAllAsTouched();

    if (this.partidaForm.invalid) {
      return;
    }

    console.log('Dados da partida:', this.partidaForm.getRawValue());

  }

  get totalParticipantes(): number {

  const qtdTimes = this.partidaForm.controls.qtdTimes.value ?? 0;

  const qtdJogadores = this.partidaForm.controls.qtdJogadoresTime.value ?? 0;

  return qtdTimes * qtdJogadores;

}

consultarCep(): void {

  const cep = this.partidaForm.controls.cep.value.replace(/\D/g, '');

  this.cepNaoEncontrado = false;
  this.erroConsultaCep = false;

  if (cep.length !== 8) {
    return;
  }

  this.consultandoCep = true;

  this.partidaForm.patchValue({
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: ''
  });

  this.cepService.consultarCep(cep).subscribe({

    next: (endereco) => {

      this.consultandoCep = false;

      if (endereco.erro) {
        this.cepNaoEncontrado = true;
        return;
      }

      this.partidaForm.patchValue({

        logradouro: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        estado: endereco.uf

      });

    },

    error: () => {

      this.consultandoCep = false;
      this.erroConsultaCep = true;

    }

  });

}

}