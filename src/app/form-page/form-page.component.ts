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
  customer: User = {
    name: '',
    email: '',
    phone: ''
};

constructor(private localStorageService: LocalStorageService) { }

saveCustomer(formData: any) : void {
  const jsonData = JSON.stringify(this.customer);
    this.localStorageService.put(formData, jsonData);
}
submitForm(customerForm: any) {
    if (customerForm.valid) {
        console.log('Form Submitted', customerForm.value);
    }
    this.isSuccess = true;
    this.saveCustomer(customerForm);
  }

  clearFormData(form: any) {
    this.localStorageService.clear(form);
  }
}
