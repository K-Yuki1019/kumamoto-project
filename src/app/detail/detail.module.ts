import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [ProjectDetailComponent],
  imports: [CommonModule, DetailRoutingModule],
})
export class DetailModule {}
