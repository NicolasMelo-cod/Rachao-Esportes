import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarPartida } from './criar-partida';

describe('CriarPartida', () => {
  let component: CriarPartida;
  let fixture: ComponentFixture<CriarPartida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarPartida],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarPartida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
