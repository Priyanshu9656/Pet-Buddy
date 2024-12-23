import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AuthServiceService } from '../../auth-service.service';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock: any;
  let routerMock: any;

  beforeEach(() => {
    authServiceMock = {
      ProceedLogin: jasmine.createSpy('ProceedLogin').and.returnValue(of({ accessToken: 'mockToken' }))
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthServiceService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize loginForm with empty values', () => {
    expect(component.loginForm.value).toEqual({ username: '', password: '' });
  });

  it('should call ProceedLogin on valid form submission', () => {
    component.loginForm.setValue({ username: 'test', password: 'test' });
    component.onSubmit();
    expect(authServiceMock.ProceedLogin).toHaveBeenCalledWith({ username: 'test', password: 'test' });
  });

  it('should navigate to /addPet on successful login', () => {
    component.loginForm.setValue({ username: 'test', password: 'test' });
    component.onSubmit();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/addPet']);
  });

  it('should set errorMessage on login failure', () => {
    authServiceMock.ProceedLogin.and.returnValue(throwError({ message: 'Login error' }));
    component.loginForm.setValue({ username: 'test', password: 'test' });
    component.onSubmit();
    expect(component.errorMessage).toBe('Please enter correct details');
  });
});
