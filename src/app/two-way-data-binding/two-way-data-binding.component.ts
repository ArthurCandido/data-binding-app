import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1 : string ="";
  name2 : string ="";

  client ={

    Nome: "Arthur",
    Sobrenome: "Candido",
    Endereco: "AV. Rio G do Sul",
    Age : 0

  }

  constructor() { }

  ngOnInit(): void {
  }

}
