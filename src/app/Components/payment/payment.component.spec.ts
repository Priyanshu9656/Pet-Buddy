// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Router } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { Observable, of } from 'rxjs';
// import { PaymentComponent } from './payment.component';
// import { Space } from 'src/app/Model/space.model';
// import { selectSelectedSpaces } from 'src/app/Store/selector';

// class MockStore {
//   select(selector: any): Observable<Space | null> {
//     return of({ 
//       logo: 'pet-logo.png', 
//       name: 'Pet Resort', 
//       location: '123 Pet Lane' 
//     }); // Mocked data
//   }
// }

// class MockRouter {
//   navigate = jasmine.createSpy('navigate');
// }

// describe('PaymentComponent', () => {
//   let component: PaymentComponent;
//   let fixture: ComponentFixture<PaymentComponent>;
//   let router: MockRouter;
//   let store: MockStore;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ PaymentComponent ],
//       providers: [
//         { provide: Store, useClass: MockStore },
//         { provide: Router, useClass: MockRouter },
//       ]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PaymentComponent);
//     component = fixture.componentInstance;
//     router = TestBed.inject(Router);
//     store = TestBed.inject(Store);
//     fixture.detectChanges(); // Trigger ngOnInit
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call selectSelectedSpaces from the store', () => {
//     component.selectedSpace$.subscribe(space => {
//       expect(space).toBeTruthy();
//       expect(space.logo).toEqual('pet-logo.png');
//       expect(space.name).toEqual('Pet Resort');
//       expect(space.location).toEqual('123 Pet Lane');
//     });
//   });

//   it('should navigate to "main-screen/home" on backtohome()', () => {
//     component.backtohome();
//     expect(router.navigate).toHaveBeenCalledWith(['main-screen', 'home']);
//   });

//   it('should emit proceed event when onProceed is called', () => {
//     spyOn(component.proceed, 'emit');
//     component.onProceed();
//     expect(component.proceed.emit).toHaveBeenCalled();
//   });
// });
