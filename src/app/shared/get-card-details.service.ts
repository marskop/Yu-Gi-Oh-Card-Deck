import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GetCardDetailsService {

  constructor( private http: HttpClient) {}

  cardSelectionEmitter = new Subject<string>();

  loadCardDetails(cardName: string) {
    let baseUrl = "https://cors-anywhere.herokuapp.com/http://yugiohprices.com/api/card_data";

    if (cardName !== null) {
      baseUrl = baseUrl + "/" + cardName;
      console.log(baseUrl);
      return this.http.get(baseUrl);
    } else {
      console.log("An error occured");
    }
  }
}
