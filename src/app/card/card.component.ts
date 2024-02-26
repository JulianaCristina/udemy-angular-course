import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({required: true}) planPrice: number = 0

  private _planType: string = ""

  //used to intercept the values when needed
  @Input("planTypeAlias")
  set planType(value: string){
    this._planType = value.toUpperCase()
  }

  get planType(): string {
    return this._planType
  }


  buttonClicked(valueEmitted: boolean){
    console.log("buttonClicked",valueEmitted)
  }

  // plano = {
  //   infos: {
  //     tipo: "Teste", preco: 100,
  //   }
  // }
  //
  // getFullPrice(){
  //   setTimeout(() => {
  //     this.plano.infos.tipo = "Simples"
  //   }, 4000)
  //   return "R$"+ this.plano.infos.preco + ",00/Mês"
  // }
}
