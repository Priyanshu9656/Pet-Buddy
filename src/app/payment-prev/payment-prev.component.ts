import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-prev',
  templateUrl: './payment-prev.component.html',
  styleUrls: ['./payment-prev.component.scss']
})
export class PaymentPrevComponent implements OnInit{

  paymentMode: string = 'place'; // Default payment mode
  onlinePaymentMethod: string = 'upi'; // Default online payment method

  constructor(private router:Router){}

  confirmAppointment() {
    
    if (this.paymentMode === 'online') {
      if (this.onlinePaymentMethod === 'upi') {
        console.log("User chose to pay via UPI");
      } else if (this.onlinePaymentMethod === 'card') {
        console.log("User chose to pay via Credit/Debit Card");
      }
      this.router.navigate(['main-screen' ,'payment']);
    } else {
      console.log("User chose to pay at place");
    }
  }

  ngOnInit(): void {
      
  }

  

}
