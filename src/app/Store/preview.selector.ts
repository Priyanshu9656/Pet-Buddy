/* eslint-disable sort-imports */
import { createSelector } from "@ngrx/store";
import { selectEnvironmentState, selectToyState, selectToyTypeState } from "./selector";

export const selectBoardingSpaceDetails = createSelector(
  selectToyState,
  selectToyTypeState,
    selectEnvironmentState,
    ( toys, toys1, environment) => ({
      date: 'On Oct 21, 2024', 
      time: 'At 6:30 PM',      
      bedding: {
        size: toys.toys?.size || 'Small', 
        type: toys.toys?.size ||  'Mattresses with Raised Edges' 
      },
      toys: {
        fetchToy: toys1.toys?.fetch || 'Frisbees', 
        plushToy : toys1.toys?.plush || 'Tug Toy',
        chewToy: toys1.toys?.chew|| 'Rubber Chew Toy' 
      },
      environment: {
        safetyFeatures: environment.environment?.safety|| 'Non Slip Floor',
        playArea: environment.environment?.play || 'Indoor Play Area',
        lightingOptions: environment.environment?.lighting || 'Bright Lighting'
      },
      note: 'We will send the latest updates and communications to your number and email.'
    })
  );