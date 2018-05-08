import { ErrorTermsService } from './../../so-common-app/services/error-terms.service';
import { DebugElement, Type } from '@angular/core';
import { SpyLocation } from '@angular/common/testing';
import { By }                 from '@angular/platform-browser';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, fakeAsync, async, tick, ComponentFixture } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

//import { ErrorTermsService } from './../../so-common-app/src/app/services/error-terms.service';
import { AppComponent } from './app.component';
const MockData: any = require('../assets/data/GetTerms.json');

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let router: Router;
let location: SpyLocation;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent
      ], providers: [{ provide: ErrorTermsService, useClass: ErrorTermServiceSpy }]
    }).compileComponents();
  }));

  class ErrorTermServiceSpy {
    getErrorTerminologies() {
      return Observable.of(MockData.error)
    }
  }
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
