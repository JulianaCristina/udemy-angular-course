import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input("planTypeAlias") planType: string = ""
  @Input({required: true}) planPrice: number = 0

  buttonClicked(valueEmitted: boolean){
    console.log("buttonClicked",valueEmitted)
  }

  // plano = {
  //   infos: {
  //     tipo: "Teste",
  //     preco: 100,
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
