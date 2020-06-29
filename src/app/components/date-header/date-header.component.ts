import { Component } from '@angular/core';

@Component({
  selector: 'app-date-header',
  templateUrl: './date-header.component.html',
  styleUrls: ['./date-header.component.scss']
})
export class DateHeaderComponent {

  curDate = new Date();

}
