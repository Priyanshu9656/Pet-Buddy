import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Output() proceed = new EventEmitter<void>();

  onProceed() {
    this.proceed.emit(); 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
