import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card-button',
  styleUrls: ['./card-button.component.scss'],
  templateUrl: './card-button.component.html'
})
export class CardButtonComponent {
  @Output("buttonClick") buttonClickEmitter = new EventEmitter<boolean>()

  @Input({transform: booleanAttribute}) buttonDisabled: boolean = false

  onButtonClick(){
    console.log("onButtonClick")
    this.buttonClickEmitter.emit(true)
  }
}
