import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DataPipe } from '../../data.pipe';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [CurrencyPipe, DataPipe],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.scss'
})
export class ExtratoComponent {
  
  public date = new Date();
  public salario = 12000;

}
