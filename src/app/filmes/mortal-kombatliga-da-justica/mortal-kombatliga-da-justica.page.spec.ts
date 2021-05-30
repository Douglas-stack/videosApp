import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MortalKombatligaDaJusticaPage } from './mortal-kombatliga-da-justica.page';

describe('MortalKombatligaDaJusticaPage', () => {
  let component: MortalKombatligaDaJusticaPage;
  let fixture: ComponentFixture<MortalKombatligaDaJusticaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MortalKombatligaDaJusticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MortalKombatligaDaJusticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
