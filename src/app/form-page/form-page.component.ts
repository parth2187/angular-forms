import { Component } from '@angular/core';
import { User } from '../user';
import { LocalStorageService } from '../shared/local-storage.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  isSuccess = false;
  survey: User = {
    name: '',
    email: '',
    phone: '',
    feedback: '',
    gender: '',
    age: null,
    
};

constructor(private localStorageService: LocalStorageService) { }

submitForm(surveyForm: any) {
    if (surveyForm.valid) {
        FormData = surveyForm.value;
        console.log('Form Submitted', surveyForm.value);
        this.localStorageService.put('formData', FormData);
        this.isSuccess = true;
        surveyForm.reset();
    }
 }

}
