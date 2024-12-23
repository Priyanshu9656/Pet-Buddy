import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBoardingSpaceDetails } from 'src/app/Store/preview.selector';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent{

  generatePDF() {
    const data = document.getElementById('contentToConvert');

    if (!data) {
      console.error('No content found to convert to PDF');
      return;
    }

    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
   
  
      const contentDataURL = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');


      let position = 0;


      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);

      
      pdf.save('Summary.pdf'); 
    });
  }


  @Output() proceed = new EventEmitter<void>();

  onProceed() {
    this.proceed.emit(); // Emit the event to the parent
  }

  goahead()
  {
    this.proceed.emit(); 
  }

  boardingSpaceDetails$: Observable<any>;

  constructor(private store: Store,private route:Router) {
    this.boardingSpaceDetails$ = this.store.select(selectBoardingSpaceDetails);
    console.log(this.boardingSpaceDetails$);
  }

  
}
