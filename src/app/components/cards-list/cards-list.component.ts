import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetCardsService } from 'src/app/shared/get-cards.service';
import { GetCardDetailsService } from 'src/app/shared/get-card-details.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  
  cards;
  selectedCard: string;

  constructor(private router: Router, private getCardsService: GetCardsService, private getCardDetailsService: GetCardDetailsService) { }

  ngOnInit() {
    this.loadCards();
  }

  loadCards() {
    this.cards = this.getCardsService.cards;
  }

  onSelectCard(selectedCardName: string) {
    this.selectedCard = selectedCardName;
    this.getCardDetailsService.cardSelectionEmitter.next(this.selectedCard);
  }

}
