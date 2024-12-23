// src/app/models.ts


export interface Doctor {
    image: string;
    name: string;
    specialty: string;
    experience: string;
    location: string;
    rating: number;
    distance: string;
}

export interface History {
    image: string;
    name: string;
    location: string;
    rating: number;
    distance: string;
}

export interface Data {
    clinics: Clinic[];
    smartBoarding: Boarding[];
    specialists: Specialist[];
    doctors: Doctor[];
    boardingHistory: History[];
}

export interface Clinic {
    image: string;
    name: string;
    type: string;
    location: string;
    rating: number;
    distance: string;
}

export interface Boarding {
    image: string;
    title: string;
    description: string;
}

export interface Specialist {
    image: string;
    name: string;
}
