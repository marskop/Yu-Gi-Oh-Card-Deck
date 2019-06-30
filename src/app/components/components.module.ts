import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardsListComponent } from "./cards-list/cards-list.component";
import { CardItemComponent } from "./cards-list/card-item/card-item.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [CardsListComponent, CardItemComponent, NavbarComponent],
  imports: [CommonModule, PerfectScrollbarModule],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ComponentsModule {}
