import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardItemComponent } from './cards-list/card-item/card-item.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    CardsListComponent, 
    CardItemComponent, 
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
