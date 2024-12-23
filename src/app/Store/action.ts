import { createAction, props } from '@ngrx/store';
import { Pet } from '../Model/pet.model';
import { Space } from '../Model/space.model';
import { Environment } from '../Model/enviroment.model';
import { ToyType } from '../Model/ToyType.model';
import { Toy } from '../Model/toy.model';


export const findToys = createAction(
  '[Space] Select Toys Bedding' ,
  props<{ toy: Toy }>() 
);



export const findToyState = createAction(
  '[Toy] Find Toy State',
  props<{ toyType: ToyType }>()
);


export const findEnvironmentState = createAction(
  '[Environment] Find Environment State',
  props<{ environment: Environment }>() 
);

export const addPet = createAction(
  '[Pet] Add Pet',
  props<{ pet: Pet }>()
);


export const addSpace = createAction(
  '[Space] Add Space',
  props<{ space: Space }>()
);


export const selectSelectedSpace = createAction(
  '[Space] Select Selected Space',
  props<{ space: Space }>() 
);


export const addToy = createAction(
  '[Toy] Add Toy',
  props<{ toy: Toy }>() 
);


export const addToyType = createAction(
  '[ToyType] AddToy Type',
  props<{ toyType: ToyType }>() 
);


export const addEnvironment = createAction(
  '[Environment] Add Environment',
  props<{ environment: Environment }>() 
)

