import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { POST_SERVICE_KEY, PostService } from './post.service';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: PostListComponent,
  },
  {
    path: 'create',
    component: PostFormComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    PostComponent,
    PostListComponent,
    PostFormComponent,
  ],
  exports: [PostComponent, PostListComponent, PostFormComponent],
  providers: [
    PostService,
    {
      provide: POST_SERVICE_KEY,
      useValue: 'https://www.omdbapi.com/?s=harry+potter&p=1&apikey=3f24f265',
    },
  ],
})
export class PostModule {}
