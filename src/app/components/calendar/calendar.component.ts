import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-datepicker-inline',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
 
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }
  ngOnInit(): void {
  }

}
