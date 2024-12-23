import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit {


  selectTime(time: string) {
    this.selectedTime = time;
  }

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
    this.showDatePicker = false; 
  }
  
  constructor() { }

  ngOnInit(): void {
  }



  selectedPeriod = 'Morning';
  selectedTime: string | null = null;
  selectedDate: string = new Date().toISOString().split('T')[0]; 


  showDatePicker = false;

  
  get selectedTimes() {
    const period = this.periods.find(p => p.name === this.selectedPeriod);
    return period ? period.times : [];
  }

  selectPeriod(period: string) {
    this.selectedPeriod = period;
    this.selectedTime = null; 
  }

  

  @Output() proceed = new EventEmitter<void>();

  onProceed() {
    this.proceed.emit(); 
  }

  periods = [
    { name: 'Morning', times: ['8:00 AM', '9:00 AM'] },
    { name: 'Afternoon', times: ['1:00 PM', '2:00 PM'] },
    { name: 'Evening', times: ['5:30 PM', '6:30 PM'] },
    { name: 'Night', times: ['8:00 PM', '9:00 PM'] }
  ];
}
