import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ContactService } from 'src/app/services/contact.service';
import { ContactModel } from 'src/app/models/contact.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) { }

  fgValidation = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void { }

  store() {
    let contact = new ContactModel();
    contact.name = this.fgValidation.controls['name'].value;
    contact.lastName = this.fgValidation.controls['lastName'].value;
    contact.email = this.fgValidation.controls['email'].value;
    try {
      this.contactService.store(contact);
      Swal.fire('Successfully saved!', '', 'success');
      this.router.navigate(['/contacts/get']);
    } catch (error) {
      console.log(error);
      alert('Error sending data');
    }
  }
}
