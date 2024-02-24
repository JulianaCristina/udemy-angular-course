import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  plano = {

    infos: {
      tipo: "Teste",
      preco: 100,
    }
  }

  getFullPrice(){
    setTimeout(() => {
      this.plano.infos.tipo = "Simples"
    }, 4000)
    return "R$"+ this.plano.infos.preco + ",00/Mês"
  }
}
