import { TestBed, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { PostsContainerComponent } from '../components/posts-container/posts-container.component';
import { PostService } from './post.service';
import {Subject} from 'rxjs';
import {Posts} from '../Posts';


describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
