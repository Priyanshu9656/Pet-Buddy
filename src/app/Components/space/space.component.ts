import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Space } from 'src/app/Model/space.model';
import { selectSelectedSpaces } from 'src/app/Store/selector';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {
  selectedSpace$: Observable<Space | null>;

  constructor(private store: Store) {
    this.selectedSpace$ = this.store.select(selectSelectedSpaces);
    console.log(this.selectedSpace$);
   
  }

  ngOnInit(): void {
  }

  showSpace : number = 1;

  proceed() {
    if (this.showSpace < 5) {
      this.showSpace++;
    }
  }

}
