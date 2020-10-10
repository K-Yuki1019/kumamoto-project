import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { ProjectEditDialogComponent } from '../shared/project-edit-dialog/project-edit-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$ = this.authService.user$;

  constructor(private authService: AuthService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  openProjectEditDialog() {
    this.dialog
      .open(ProjectEditDialogComponent, {
        maxWidth: '100vw',
        minWidth: '30%',
        autoFocus: false,
      })
      .afterClosed();
  }
}
