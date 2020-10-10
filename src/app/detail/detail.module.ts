import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProjectDetailComponent],
  imports: [CommonModule, DetailRoutingModule, MatIconModule],
})
export class DetailModule {}
