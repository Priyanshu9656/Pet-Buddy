export interface Space {
    id: number;
    name: string;
    location: string;
    logo: string;
    rating: number;
    distance: string;
    timings: string;
    status: string;
  }
  
  export interface SpacesState {
    selectedSpaces: Space | null; // A single selected space or null if none is selected
  }