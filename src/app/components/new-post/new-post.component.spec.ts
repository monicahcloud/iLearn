import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { NewPostComponent } from './new-post.component';

describe('NewPostComponent', () => {
  let component: NewPostComponent;
  let fixture: ComponentFixture<NewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the value of error if there is no content', () => {
    //Error should only occur on submit if there is no content
    expect(component.error.valueOf()).toBeFalsy();
    component.onSubmit();
    fixture.detectChanges();
    expect(component.error.valueOf()).toBeTruthy();
  });

  it('should update the value of content when typed in', fakeAsync(() => {
    const input = fixture.debugElement.query(By.css('textarea')).nativeElement;
    fixture.detectChanges();
    tick();
    input.value = 'Test';
    input.dispatchEvent(new Event('input'));
    tick();
    expect(component.content).toBe('Test');
  }));

  it('should call the service method when submitted' ,fakeAsync(()=> {
    const input = fixture.debugElement.query(By.css('textarea')).nativeElement;
    fixture.detectChanges();
    tick();
    console.log(input);
    component.content = 'Test';
    fixture.detectChanges();
    tick();
    spyOn(component.onAddPost, 'emit');
    component.onSubmit();
    fixture.detectChanges();
    expect(component.onAddPost.emit).toHaveBeenCalled();
  }));
});
