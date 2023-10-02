import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-materialsnackbar',
  templateUrl: './materialsnackbar.component.html',
  styleUrls: ['./materialsnackbar.component.css']
})
export class MaterialsnackbarComponent {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

