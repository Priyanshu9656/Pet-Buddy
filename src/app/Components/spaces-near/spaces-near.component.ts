import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/data.service';
import { Space } from 'src/app/Model/space.model';
import { addSpace } from 'src/app/Store/action';

@Component({
  selector: 'app-spaces-near',
  templateUrl: './spaces-near.component.html',
  styleUrls: ['./spaces-near.component.scss']
})
export class SpacesNearComponent implements OnInit {

  public spacesData: any = {
    backLink: '',
    search: {
      placeholder: 'Search spaces...',
      buttonText: 'Search'
    },
    spaces: {
      title: 'Available Spaces',
      cards: []
    }
  };

  // Search input property
  public searchTerm: string = '';
  
  // Filtered spaces property
  public filteredSpaces: any[] = [];

  constructor(private dataService: DataService, private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getData2().subscribe(response => {
      this.spacesData = response;
      this.filteredSpaces = this.spacesData.spaces.cards; 
      console.log(this.spacesData);
    });
  }

  // Method to filter spaces based on search input
  filterSpaces(): void {
    this.filteredSpaces = this.spacesData.spaces.cards.filter((card: any) =>
      card.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      card.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectSpace(space: Space) {
    console.log(space);
    this.store.dispatch(addSpace({ space })); 
    this.router.navigate(['main-screen', 'addspace']);
  }
}
