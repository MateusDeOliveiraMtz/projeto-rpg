import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
  static tipo = "Guerreiro";
  força;

  static descricao ='Sempre pronto para proteger seu povo e lutar por causas nobres!'

  constructor(nome, força) {
    super(nome);
    this.força = força;
  }

  obterInsignia() {
    if (this.força >= 5) return `Matador de dragões`;

    return super.obterInsignia();
  }
}
