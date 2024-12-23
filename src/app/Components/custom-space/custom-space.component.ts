import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Environment } from 'src/app/Model/enviroment.model';
import { Toy } from 'src/app/Model/toy.model';
import { ToyType } from 'src/app/Model/ToyType.model';
import { addEnvironment, addToy, addToyType } from 'src/app/Store/action';

@Component({
  selector: 'app-custom-space',
  templateUrl: './custom-space.component.html',
  styleUrls: ['./custom-space.component.scss']
})
export class CustomSpaceComponent {

  @Output() proceed = new EventEmitter<void>();

  onProceed() {
    this.proceed.emit(); 
  }

  constructor(private store: Store) { }

  currentTabIndex: number = 0;

  selectedBeddingSizes: string[] = [];
  selectedBeddingTypes: string[] = [];
  selectedFetchToys: string[] = [];
  selectedPlushToys: string[] = [];
  selectedChewToys: string[] = [];
  selectedPlayAreas: string[] = [];
  selectedSafetyFeatures: string[] = [];
  selectedLightingOptions: string[] = [];

  // Method to switch tabs
  switchTab(index: number) {
    this.currentTabIndex = index;
  }

  // Method for selecting a sizing option for bedding
  selectBeddingSize(size: string) {
    this.selectedBeddingSizes = [size]; // Set selected size and clear others
  }

  // Method for selecting a type of bedding
  selectBeddingType(type: string) {
    this.selectedBeddingTypes = [type];
  }

  // Method for selecting a fetch toy
  selectFetchToy(toy: string) {
    this.selectedFetchToys = [toy];
  }

  // Method for selecting a plush toy
  selectPlushToy(toy: string) {
    this.selectedPlushToys = [toy];
  }

  // Method for selecting a chew toy
  selectChewToy(toy: string) {
    this.selectedChewToys = [toy];
  }

  // Method for selecting a play area
  selectPlayArea(area: string) {
    this.selectedPlayAreas = [area];
  }

  // Method for selecting safety features
  selectSafetyFeature(feature: string) {
    this.selectedSafetyFeatures = [feature];
  }

  // Method for selecting lighting options
  selectLightingOption(option: string) {
    this.selectedLightingOptions = [option];
  }

  // Method to save selections and move to the next tab
  saveAndProceed() {
    if (this.currentTabIndex < 2) {
      if (this.currentTabIndex === 0) {
        const newToy: Toy = {
          size: this.selectedBeddingSizes[0],
          type: this.selectedBeddingTypes[0]
        };
        this.store.dispatch(addToy({ toy: newToy }));
      } else {
        const newToyType: ToyType = {
          fetch: this.selectedFetchToys[0],
          plush: this.selectedPlushToys[0],
          chew: this.selectedChewToys[0]
        };
        this.store.dispatch(addToyType({ toyType: newToyType }));
      }
      this.currentTabIndex++;
    } else {
      const newEnvironment: Environment = {
        play: this.selectedPlayAreas[0],
        safety: this.selectedSafetyFeatures[0],
        lighting: this.selectedLightingOptions[0]
      };
      this.store.dispatch(addEnvironment({ environment: newEnvironment }));
    this.proceed.emit(); 
    }
  }

  // Method to reset selections for the current tab
  resetCurrentTabSelections() {
    if (this.currentTabIndex === 0) {
      this.selectedBeddingSizes = [];
      this.selectedBeddingTypes = [];
    } else if (this.currentTabIndex === 1) {
      this.selectedFetchToys = [];
      this.selectedPlushToys = [];
      this.selectedChewToys = [];
    } else if (this.currentTabIndex === 2) {
      this.selectedPlayAreas = [];
      this.selectedSafetyFeatures = [];
      this.selectedLightingOptions = [];
    }
  }

  isNextStepEnabled(): boolean {
    switch (this.currentTabIndex) {
      case 0: // Bedding selections
        return this.selectedBeddingSizes.length > 0 && this.selectedBeddingTypes.length > 0;
      case 1: // Toy selections
        return this.selectedFetchToys.length > 0 && this.selectedPlushToys.length > 0 && this.selectedChewToys.length > 0;
      case 2: // Environment selections
        return this.selectedPlayAreas.length > 0 && this.selectedSafetyFeatures.length > 0 && this.selectedLightingOptions.length > 0;
      default:
        return false;
    }
  }
}
