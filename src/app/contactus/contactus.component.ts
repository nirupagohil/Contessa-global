import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  formData: FormGroup;

  constructor(private fb: FormBuilder){
    this.formData = this.fb.group({
      from_name: ['', [Validators.required]],
      to_name: ['Divyansu'],  
      from_email: ['', [Validators.required, Validators.email]],
      city: ['', []],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],  
      message: ['', []]
    });
  }
  
  async send(){
    if (!this.formData.valid) {
      return
    } 
    emailjs.init('eqWc9a1ssZ21srTdO');
    let responce = await emailjs.send("service_86etcht","template_n9ubpqt",{
    from_name: "Nirupa",
    to_name: "Divyansu",
    from_email: "niral@gmail.com",
    city: "Gandhinagar",
    mobile: "7201014059",
    message: "testing",
    });
    if(responce.status == 200){
      alert("We will contact you soon!")
    }
  }
  
}
