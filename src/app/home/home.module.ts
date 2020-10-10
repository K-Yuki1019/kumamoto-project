import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './card/card.component';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { CardListComponent } from './card-list/card-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    CardComponent,
    CreateDialogComponent,
    CardListComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
