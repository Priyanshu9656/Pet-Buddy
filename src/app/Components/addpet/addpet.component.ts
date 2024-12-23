import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pet } from '../../Model/pet.model';
import { addPet } from '../../Store/action';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.scss']
})
export class AddpetComponent implements OnInit {
  petForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder , private store : Store , private router : Router) {}

  ngOnInit(): void {
    this.petForm = this.fb.group({
      petName: ['', Validators.required],
      petType: ['', Validators.required],
      breed: ['', Validators.required],
      sex: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.petForm.valid) {
     
      const newPet : Pet = {
        name: this.petForm.value.petName,
      type: this.petForm.value.petType,
      breed: this.petForm.value.breed,
      sex: this.petForm.value.sex,
      dob: this.petForm.value.dateOfBirth
      }
     
      this.store.dispatch(addPet({ pet: newPet }));
      this.petForm.reset();
    }
    this.router.navigate(['main-screen' , 'home']);
  }

  onSkip(): void {
    this.router.navigate(['main-screen' , 'home']);
  }
}
