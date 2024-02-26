import {Component, Input, numberAttribute} from '@angular/core';

function handlePlanType(value: string){
  return value.toUpperCase()
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({required: true, transform: numberAttribute}) planPrice: number = 0
  //using transform
  @Input({alias: "planTypeAlias", transform: (value: string) => handlePlanType(value)}) planType: string = ""


  //used to intercept the values when needed (Get and Set)
  // private _planType: string = ""
  // @Input("planTypeAlias")
  // set planType(value: string){
  //   this._planType = value.toUpperCase()
  // }
  //
  // get planType(): string {
  //   return this._planType
  // }


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
