import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CustomDropdownComponent],
  templateUrl: './app.component.html',
  styles: [`
    .container { padding: 20px; }
    form > div { margin-bottom: 15px; }
    label { display: block; margin-bottom: 5px; }
    input { padding: 5px; width: 200px; }
  `]
})
export class AppComponent {
  form: FormGroup;
  submitted = false;
  formData: any;
  categories = ['Category 1', 'Category 2', 'Category 3'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      category: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      this.formData = this.form.value;
    }
  }
}
