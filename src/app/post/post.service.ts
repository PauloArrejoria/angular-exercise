import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const POST_SERVICE_KEY = new InjectionToken<string>('POST_SERVICE_KEY');

export interface Result {
  Search: Post[];
}

export interface Post {
  Title?: string;
  Year?: number;
  Poster?: string;
}

@Injectable()
export class PostService {
  constructor(
    @Inject(POST_SERVICE_KEY) public serviceUrl: string,
    private http: HttpClient
  ) {
    console.log(this.serviceUrl);
  }

  public getAllPosts() {
    return this.http.get(this.serviceUrl) as Observable<Result>;
  }
}
