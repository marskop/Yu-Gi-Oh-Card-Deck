import { Component, OnInit } from '@angular/core';
import { GetCardDetailsService } from 'src/app/shared/get-card-details.service';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  selectedCardName: string = null;
  cardDetails: any;
  dataReady: boolean = false;
  loadingData: boolean = false;

  constructor(private getCardDetailsService: GetCardDetailsService) { }

  ngOnInit() {

    this.getCardDetailsService.cardSelectionEmitter.subscribe(
       cardName => {

        this.selectedCardName = cardName;
        this.loadCardDetails();
      }  
    );
  }

  loadCardDetails() {
    this.dataReady = false;
    this.loadingData = true;
    this.getCardDetailsService.loadCardDetails(this.selectedCardName).subscribe(
      data => {
        this.cardDetails = data;
        this.dataReady = true;
        console.log( this.cardDetails)
        this.loadingData = false;
      }
    )
  }




}
