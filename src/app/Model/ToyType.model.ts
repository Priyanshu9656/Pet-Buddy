export interface ToyType {
    fetch: string , 
    plush: string , 
    chew: string
}

export interface ToyTypeState {
    toys : ToyType | null;
}