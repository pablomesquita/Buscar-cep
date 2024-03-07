import { Component } from '@angular/core';
import { ConsultaService } from './serviços/Consulta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'buscar_cep';
  cep: any;
  logradouro: any;
  localidade: any;
  bairro: any;
  uf: any;
  cepForm: any;

  myForm: FormGroup;

  constructor(
    private service: ConsultaService,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      cepForm: ["", Validators.required],
      logradouro: ["", Validators.required],
      localidade: ["", Validators.required],
      bairro: ["", Validators.required],
      uf: ["", Validators.required],
    });
  }

  enviarFormulario() {
    alert("Formulário enviado com sucesso !!");

    console.log(this.myForm.value);

  }

  ngOnInit(): void {}

  buscaCEP() {
    this.service.getCEP(this.cep).subscribe((data) => {
      this.cepForm = data.cep;
      this.logradouro = data.logradouro;
      this.localidade = data.localidade;
      this.bairro = data.bairro;
      this.uf = data.uf;
    });

  }
  blur() {
    this.buscaCEP();
  }
}
