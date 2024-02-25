import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputText = "Texto inicial 2";
  inputType = "text";
  isDisabled = false
  buttonTitle = "Texto do botão"
  buttonDisabled = false


  enableInput(){
    this.isDisabled = false
  }

  disableInput(){
    this.isDisabled = true
  }

  setPasswordTypeInput(){
    this.inputType = "password"
  }

  setTextTypeInput(){
    this.inputType = "text"
  }

  logInputText() {
    console.log(this.inputText)
  }

  handleInputKeyUp(event: any){
    this.inputText = event.target.value
    console.log(event)
  }



}
