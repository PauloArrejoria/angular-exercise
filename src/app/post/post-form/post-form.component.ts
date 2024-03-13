import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  constructor(private router: Router) {}
  postForm = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Year: new FormControl('', [Validators.required]),
    Poster: new FormControl('', [Validators.required]),
  });

  public titleErrors$ = this.postForm.get('Title')!.statusChanges.pipe(
    map((x) => {
      const errors = [];
      if (this.postForm.getError('required', ['Title'])) {
        errors.push('Title is required');
      }
      return errors;
    })
  );

  public yearErrors$ = this.postForm.get('Year')!.statusChanges.pipe(
    map((x) => {
      const errors = [];
      if (this.postForm.getError('required', ['Year'])) {
        errors.push('Year is required');
      }
      return errors;
    })
  );

  public posterErrors$ = this.postForm.get('Poster')!.statusChanges.pipe(
    map((x) => {
      const errors = [];
      if (this.postForm.getError('required', ['Poster'])) {
        errors.push('Poster is required');
      }
      return errors;
    })
  );

  public onSubmit() {
    if (this.postForm.invalid) return;
    //this.router.navigate(['post/list']);
  }
}
