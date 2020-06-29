import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddtaskComponent } from './components/addtask/addtask.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anuglar-task';
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddtaskComponent, {
      width:
        '500px',
    });
  }
}
