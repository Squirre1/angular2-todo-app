import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TasksDataService } from './tasks';
import { Task } from '../../models/index';


describe('TasksDataService', function () {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksDataService ]
    })
    .compileComponents();
  }));

  it('should ...', inject([TasksDataService], (service: TasksDataService) => expect(service).toBeTruthy()));

});
