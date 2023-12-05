import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

describe('Yksikkötesti 2', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let component: HomeComponent;
  let navigateSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent]
    });

    fixture = TestBed.createComponent(HomeComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;

    navigateSpy = spyOn(router, 'navigate');
  });

  it('should navigate to feedback when feedback button is clicked', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(navigateSpy).toHaveBeenCalledWith(['feedback']);
  });
});
