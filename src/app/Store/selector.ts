import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PetState } from './reducer';
import { SpacesState } from '../Model/space.model';
import { ToyState } from '../Model/toy.model';
import { ToyTypeState } from '../Model/ToyType.model';
import { EnvironmentState } from '../Model/enviroment.model';

export const selectPetState = createFeatureSelector<PetState>('pets');

export const selectAllPets = createSelector(
  selectPetState,
  (state: PetState) => state.pets
);

export const selectSpacesState = createFeatureSelector<SpacesState>('spaces');

export const selectSelectedSpaces = createSelector(
  selectSpacesState,
  (state: SpacesState) => state.selectedSpaces
);


export const selectToyState = createFeatureSelector<ToyState>('toy');
export const selectToyTypeState = createFeatureSelector<ToyTypeState>('toytype');
export const selectEnvironmentState = createFeatureSelector<EnvironmentState>('enviroment');

// Selector for finding toys
export const selectFetchedToy = createSelector(
  selectToyState,
  (state: ToyState) => state.toys 
);

// Selector for finding toy state based on ToyType
export const selectFetchedToyType = createSelector(
  selectToyTypeState,
  (state: ToyTypeState) => state.toys 
);

// Selector for finding environment state
export const selectFetchedEnvironment = createSelector(
  selectEnvironmentState,
  (state: EnvironmentState) => state.environment 
);

