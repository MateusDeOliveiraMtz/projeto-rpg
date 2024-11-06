import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const arqueiroMagoMateus = new ArqueiroMago('Mateus', 999, 999, 'Fogo', 999, 999)
const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const guerreiroEdvaldo = new Guerreiro('Edvaldo', 3, 4)


const personagens = [arqueiroMagoMateus, guerreiroEdvaldo, magoAntonio, arqueiroBruno, ]

new PersonagemView(personagens).render()


