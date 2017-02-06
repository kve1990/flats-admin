import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

import { ApartmentsService } from 'app/services/apartments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApartmentsService]
})
export class AppComponent {

  isDarkTheme: boolean = true;
  // lastDialogResult: string;

  // foods: any[] = [
  //   {name: 'Pizza', rating: 'Excellent'},
  //   {name: 'Burritos', rating: 'Great'},
  //   {name: 'French fries', rating: 'Pretty good'},
  // ];

  // progress: number = 0;

  // constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
  //   // Update the value for the progress-bar on an interval.
  //   setInterval(() => {
  //     this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
  //   }, 200);
  // }

  // openDialog() {
  //   let dialogRef = this._dialog.open(DialogContent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.lastDialogResult = result;
  //   })
  // }

  // showSnackbar() {
  //   this._snackbar.open('YUM SNACKS', 'CHEW');
  // }
}
