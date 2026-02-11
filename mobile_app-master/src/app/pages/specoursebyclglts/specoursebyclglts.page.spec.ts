import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecoursebyclgltsPage } from './specoursebyclglts.page';

describe('SpecoursebyclgltsPage', () => {
  let component: SpecoursebyclgltsPage;
  let fixture: ComponentFixture<SpecoursebyclgltsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecoursebyclgltsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecoursebyclgltsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
