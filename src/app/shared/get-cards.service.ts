import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCardsService {

  constructor() { }

  cards = [
    { name: "Burial from a Different Dimension", type: "Spell" },
    { name: "Charge of the Light Brigade", type: "Spell" },
    { name: "Infernoid Antra", type: "Monster" },
    { name: "Infernoid Attondel", type: "Monster" },
    { name: "Infernoid Decatron", type: "Monster" },
    { name: "Infernoid Devyaty", type: "Monster" },
    { name: "Infernoid Harmadik", type: "Monster" },
    { name: "Infernoid Onuncu", type: "Monster" },
    { name: "Infernoid Patrulea", type: "Monster" },
    { name: "Infernoid Pirmais", type: "Monster" },
    { name: "Infernoid Seitsemas", type: "Monster" },
    { name: "Lyla, Lightsworn Sorceress", type: "Monster" },
    { name: "Monster Gate", type: "Spell" },
    { name: "One for One", type: "Spell" },
    { name: "Raiden, Hand of the Lightsworn", type: "Monster" },
    { name: "Reasoning", type: "Spell" },
    { name: "Time-Space Trap Hole", type: "Trap" },
    { name: "Torrential Tribute", type: "Trap" },
    { name: "Upstart Goblin", type: "Spell" },
    { name: "Void Seer", type: "Spell" }
  ];
  
}
