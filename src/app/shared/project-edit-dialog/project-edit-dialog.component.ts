import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { Project } from 'src/app/interfaces/project';
import { UserData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.scss'],
})
export class ProjectEditDialogComponent implements OnInit {
  uid: string;
  user$: Observable<UserData> = this.authService.user$;
  isProcessing: boolean;
  file: File;
  thumbnailURL: string | ArrayBuffer;
  project: Project;

  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(50)]],
    category: ['', [Validators.required]],
    projectURL: ['', [Validators.required, Validators.maxLength(400)]],
    body: ['', [Validators.required, Validators.maxLength(400)]],
  });

  categoryGroup: Category[] = [
    { value: 'エンタメ', viewValue: 'エンタメ' },
    { value: 'テクノロジー', viewValue: 'テクノロジー' },
    { value: '教育', viewValue: '教育' },
    { value: 'スポーツ', viewValue: 'スポーツ' },
    { value: 'デザイン', viewValue: 'デザイン' },
    { value: 'ビューティー', viewValue: 'ビューティー' },
    { value: 'ファッション', viewValue: 'ファッション' },
    { value: 'フード', viewValue: 'フード' },
    { value: 'モノづくり', viewValue: 'モノづくり' },
    { value: '政治経済', viewValue: '政治経済' },
    { value: 'メディア', viewValue: 'メディア' },
    { value: '効率化', viewValue: '効率化' },
  ];

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.form.get('description') as FormControl;
  }

  get category(): FormControl {
    return this.form.get('category') as FormControl;
  }

  get projectURL(): FormControl {
    return this.form.get('projectURL') as FormControl;
  }

  get body(): FormControl {
    return this.form.get('body') as FormControl;
  }

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private projectService: ProjectService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  ngOnInit(): void {}

  convertImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.thumbnailURL = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  setImage({ target }: { target: HTMLInputElement }) {
    if (target.files.length) {
      this.file = target.files[0];
      this.convertImage(this.file);
    }
  }

  submit(uid: string) {
    this.isProcessing = true;
    const formData = this.form.value;
    this.projectService
      .createProject(
        {
          title: formData.title,
          description: formData.description,
          projectURL: formData.projectURL,
          uid,
          category: formData.category,
          body: formData.body,
        },
        this.file
      )
      .then(() => this.snackBar.open('投稿しました'))
      .then(() => (this.isProcessing = false));
  }
}
