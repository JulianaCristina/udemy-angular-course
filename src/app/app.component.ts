import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputText = "Texto inicial 2";
  inputType = "password";
  isDisabled = true


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

}
