import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let router: Router;
  let navigateSpy: jasmine.Spy;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);

    navigateSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('yksikkötesti 4 should navigate back to homecomponent when cancel button is clicked', () => {

    const button = fixture.debugElement.nativeElement.querySelector('.cancelButton');
    button.click();

    expect(navigateSpy).toHaveBeenCalledWith(['home']);

  });

  it('yksikkötesti 5 form should give error if name is only 1 character long', () => {

    const form = component.fbForm;
    const name = component.fbForm.get("name");
    const title = component.fbForm.get("title");
    const description = component.fbForm.get("description");
    const email = component.fbForm.get("email");
    const phone = component.fbForm.get("phone");

    const submitButton = fixture.debugElement.nativeElement.querySelector('.submitButton')

    name?.setValue('a');
    title?.setValue('aaa');
    description?.setValue('aaa');
    email?.setValue('akukoskela1@gmail.com');
    phone?.setValue('12345678901');

    fixture.detectChanges();
    expect(name?.invalid).toBeTruthy();

    fixture.detectChanges();

  });

  it('yksikkötesti 6 form should give error if number is lower than 10 character', () => {

    const form = component.fbForm;
    const name = component.fbForm.get("name");
    const title = component.fbForm.get("title");
    const description = component.fbForm.get("description");
    const email = component.fbForm.get("email");
    const phone = component.fbForm.get("phone");

    const submitButton = fixture.debugElement.nativeElement.querySelector('.submitButton')

    name?.setValue('a');
    title?.setValue('aaa');
    description?.setValue('aaa');
    email?.setValue('akukoskela1@gmail.com');
    phone?.setValue('12345678');

    fixture.detectChanges();
    expect(phone?.invalid).toBeTruthy();

    fixture.detectChanges();

  });
});
