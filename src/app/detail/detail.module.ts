import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectCommentComponent } from './project-comment/project-comment.component';

@NgModule({
  declarations: [ProjectDetailComponent, ProjectCommentComponent],
  imports: [CommonModule, DetailRoutingModule],
})
export class DetailModule {}
