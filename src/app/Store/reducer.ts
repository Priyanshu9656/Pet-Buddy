import { createReducer, on } from '@ngrx/store';
import { Pet } from '../Model/pet.model';
import { addEnvironment, addPet, addSpace, addToy, addToyType, findEnvironmentState, findToys, findToyState, selectSelectedSpace } from './action';
import { SpacesState } from '../Model/space.model';
import { ToyState } from '../Model/toy.model';
import { ToyTypeState } from '../Model/ToyType.model';
import { EnvironmentState } from '../Model/enviroment.model';


export interface PetState {
  pets: Pet[];
}

export const initialState: PetState = {
  pets: []
};

export const petReducer = createReducer(
  initialState,
  on(addPet, (state, { pet }) => ({
    ...state,
    pets: [...state.pets, pet]
  })),
  
);

export const initialState1: SpacesState = {
  selectedSpaces: null,
};

export const spacesReducer = createReducer(
  initialState1,
  on(addSpace, (state, { space }) => ({
    ...state,
    selectedSpaces: space, 
  })),
  on(selectSelectedSpace, (state, { space }) => ({
    ...state,
    selectedSpace: space, 
  })),
);


export const initialToyState : ToyState = {
  toys: null
}

export const toyReducer = createReducer(
  initialToyState,
  on(addToy, (state, { toy }) => ({
    ...state,
    toys : toy,
  })),
  on(findToys , (state, { toy }) => ({
    ...state,
    toys : toy, 
  }))
);

export const intitalToyTypeState : ToyTypeState = {
  toys : null
}

export const toyTypeReducer = createReducer(
  intitalToyTypeState , 
  on(addToyType , (state, { toyType }) => ({
    ...state,
    toys : toyType, 
  })),
  on(findToyState , (state, { toyType }) => ({
    ...state,
    toys : toyType, 
  }))
);

export const initialEnvironmentState : EnvironmentState = {
  environment : null
}

export const environmentReducer = createReducer(
  initialEnvironmentState , 
  on(addEnvironment , (state, { environment }) => ({
    ...state,
    environment : environment, 
  })),
  on(findEnvironmentState , (state, { environment }) => ({
    ...state,
    environment : environment, 
  }))
)