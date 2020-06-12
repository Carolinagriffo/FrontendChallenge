import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogRegisterComponent } from './dialog/dialog-register/dialog-register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogRegisterComponent, {
      width: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  title = 'Bem vindos a página oficial do torneio';
}
