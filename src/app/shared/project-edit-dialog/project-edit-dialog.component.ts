import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { UserData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.scss'],
})
export class ProjectEditDialogComponent implements OnInit {
  uid: string;
  user$: Observable<UserData> = this.authService.user$;
  isProcessing: boolean;
  request: Request;

  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    body: ['', [Validators.required, Validators.maxLength(400)]],
  });

  categoryGroup: Category[] = [
    { value: 'エンタメ', viewValue: 'エンタメ' },
    { value: 'テクノロジー', viewValue: 'テクノロジー' },
    { value: 'スポーツ', viewValue: 'スポーツ' },
    { value: 'デザイン', viewValue: 'デザイン' },
    { value: 'ビューティー', viewValue: 'ビューティー' },
    { value: 'ファッション', viewValue: 'ファッション' },
    { value: 'フード', viewValue: 'フード' },
    { value: 'モノづくり', viewValue: 'モノづくり' },
    { value: '政治経済', viewValue: '政治経済' },
    { value: '効率化', viewValue: '効率化' },
  ];

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get body(): FormControl {
    return this.form.get('body') as FormControl;
  }

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {}
}
