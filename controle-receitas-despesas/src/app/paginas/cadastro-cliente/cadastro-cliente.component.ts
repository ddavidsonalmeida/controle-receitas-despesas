import { Component } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';
import { ClienteService } from '../../cliente.service';
import { CurrencyPipe } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [NgxMaskDirective, CurrencyPipe, FormsModule, ReactiveFormsModule], 
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.scss'
})
export class CadastroClienteComponent {

  cadastroForm = this.formBuilder.group({ nome: '' , email: '', telefone: '', salario: ''});

  constructor( private clienteService: ClienteService, private formBuilder: FormBuilder, private router: Router)  { }

  public cadastrar(): void {
    this.clienteService.cadastrar(this.cadastroForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    this.router.navigate(['/extrato']);


  }




}
