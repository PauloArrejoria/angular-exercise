import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostModule } from './post/post.module';
import { PostFormComponent } from './post/post-form/post-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  {
    path: 'post',
    loadChildren: () => PostModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
