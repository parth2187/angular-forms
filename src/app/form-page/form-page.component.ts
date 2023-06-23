import { Component } from '@angular/core';
import { User } from '../user';
import { LocalStorageService } from '../local-storage.service';

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
        console.log('Form Submitted', surveyForm.value);
        const formData = JSON.stringify(surveyForm.value);
        this.localStorageService.setItem('formData', formData);
        this.isSuccess = true;
        surveyForm.reset();
    }
 }

}
