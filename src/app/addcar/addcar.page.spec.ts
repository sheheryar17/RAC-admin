import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcarPage } from './addcar.page';

describe('AddcarPage', () => {
  let component: AddcarPage;
  let fixture: ComponentFixture<AddcarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
