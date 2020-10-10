import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './card/card.component';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@NgModule({
  declarations: [CardComponent, CreateDialogComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
