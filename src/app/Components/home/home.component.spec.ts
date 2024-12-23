import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

// Create a mock DataService
class MockDataService {
  getData() {
    return of({
      clinics: [
        { name: 'Clinic A', location: 'Location A', type: 'Type A', rating: 5, distance: '1 km', image: 'clinicA.jpg' },
        { name: 'Clinic B', location: 'Location B', type: 'Type B', rating: 4, distance: '2 km', image: 'clinicB.jpg' }
      ],
      doctors: [
        { name: 'Doctor A', specialty: 'Specialty A', experience: '5 years', location: 'Location A', rating: 4.5, distance: '1 km', image: 'doctorA.jpg' },
      ],
      boardingHistory: [
        { name: 'Boarding A', location: 'Location A', rating: 5, distance: '1 km', image: 'boardingA.jpg' }
      ],
      smartBoarding: []
    });
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: DataService, useClass: MockDataService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with data from the service', () => {
    expect(component.data).toBeTruthy();
    expect(component.data.clinics.length).toBe(2);
  });

  it('should filter clinics based on location search', () => {
    component.locationSearch = 'Location A';
    component.filterData(); // Trigger the filtering
    expect(component.filteredClinics.length).toBe(1); // Only Clinic A should be visible
    expect(component.filteredClinics[0].name).toBe('Clinic A');
  });

  it('should filter doctors based on search term', () => {
    component.doctorSearch = 'Doctor A';
    component.filterData(); // Trigger the filtering
    expect(component.filteredDoctors.length).toBe(1); // Only Doctor A should be visible
  });
});
