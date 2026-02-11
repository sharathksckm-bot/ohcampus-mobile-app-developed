import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursewiseexamdetailsPage } from './coursewiseexamdetails.page';

describe('CoursewiseexamdetailsPage', () => {
  let component: CoursewiseexamdetailsPage;
  let fixture: ComponentFixture<CoursewiseexamdetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursewiseexamdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursewiseexamdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
