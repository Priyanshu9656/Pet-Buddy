import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  
  // Search input properties
  locationSearch: string = '';
  doctorSearch: string = '';

  // Filtered data properties
  filteredClinics: any[] = [];
  filteredDoctors: any[] = [];
  filteredBoardingHistory: any[] = [];


  filterData() {
    // Filter Clinics
    this.filteredClinics = this.data.clinics.filter((clinic: { name: string; location: string; }) => 
      clinic.name.toLowerCase().includes(this.locationSearch.toLowerCase()) ||
      clinic.location.toLowerCase().includes(this.locationSearch.toLowerCase())
    );

    // Filter Doctors
    this.filteredDoctors = this.data.doctors.filter((doctor: { name: string; specialty: string; }) => 
      doctor.name.toLowerCase().includes(this.doctorSearch.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(this.doctorSearch.toLowerCase())
    );

    // Filter Boarding History
    this.filteredBoardingHistory = this.data.boardingHistory.filter((history: { name: string; }) => 
      history.name.toLowerCase().includes(this.locationSearch.toLowerCase())
    );
  }

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      this.filterData(); 
    });
  }

  navigate() {
    this.router.navigate(['main-screen', 'space-near']);
  }
}
