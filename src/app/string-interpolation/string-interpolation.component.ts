import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = 'Arthur';
  

  person = {

    firstname:'Arthur',
    lastname:'Candido',
    age:'18',
    address:'Av. Rio G do Sul',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
