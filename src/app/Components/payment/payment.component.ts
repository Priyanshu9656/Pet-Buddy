import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Space } from 'src/app/Model/space.model';
import { selectSelectedSpaces } from 'src/app/Store/selector';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Output() proceed = new EventEmitter<void>();

  onProceed() {
    this.proceed.emit(); // Emit the event to the parent
  }

  selectedSpace$: Observable<Space | null>;

  constructor(private store: Store,private route:Router) {
    this.selectedSpace$ = this.store.select(selectSelectedSpaces);
    console.log(this.selectedSpace$);
   
  }

  ngOnInit(): void {
  }

  backtohome()
  {
    this.route.navigate(['main-screen' ,'home']);
  }
}
