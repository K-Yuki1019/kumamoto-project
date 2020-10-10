import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { ProjectCommentComponent } from './project-comment/project-comment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProjectDetailComponent, ProjectCommentComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class DetailModule {}
