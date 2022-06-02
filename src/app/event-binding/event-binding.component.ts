import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';



@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {

  

  buttonName="Enviar";
  i =0;

  constructor() { }
  spinnerMode="determinate";
  btnEnable= true;
  selectDisabled= false;
  selectedOption = 1;

  inputName= "";

  ngOnInit(): void {
  }

  salvar(){

    console.log ("click");
  }

  inc(){

    this.i++;
    this.buttonName=" Foi clicado " + this.i + " vezes";
  }

  disable(){

    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( ()=>{ 
      this.btnEnable = true;
    this.spinnerMode = "determinate";
    }, 3000 )  ;  

  }

  cbChange(event){
  console.log(event.checked);
  this.selectDisabled = event.checked;
  }

  selectionChange(event){
    console.log(event);
    this.selectedOption = event.value;
  }

  inputEvent(event){
    console.log(event.target.value);
    console.log(this.inputName);
    this.inputName =event.target.value;
  }
}
