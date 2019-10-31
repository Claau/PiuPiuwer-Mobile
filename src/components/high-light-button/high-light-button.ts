import { Component } from '@angular/core';

@Component({
  selector: 'high-light-button',
  templateUrl: 'high-light-button.html'
})
export class HighLightButtonComponent {

  text: string;

  constructor() {
   
  }

  editPiu(piu){
    console.log(piu);
  }

}
