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
  ) {}

  fgValidation = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phones: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {}

  store() {
    let contact = new ContactModel();
    contact.name = this.fgValidation.controls['name'].value;
    contact.lastName = this.fgValidation.controls['lastName'].value;
    contact.email = this.fgValidation.controls['email'].value;
    contact.phones = this.fgValidation.controls['phones'].value;

    this.contactService.store(contact).subscribe({
      next: (data: ContactModel) => {
        Swal.fire('Successfully saved!', '', 'success');
        this.router.navigate(['/contacts/get']);
      },
      error: (error: any) => {
        console.log(error);
        alert('Error sending data');
      },
    });
  }
}
