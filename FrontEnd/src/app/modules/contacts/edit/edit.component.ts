import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactModel } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  fgValidation = this.fb.group({
    contactId: [0, [Validators.required]],
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phones: ['', [Validators.required, Validators.minLength(6)]],
  });

  id: String = '';
  getById(id: String) {
    this.contactService.getById(id).subscribe((data: ContactModel) => {
      console.log(data);
      this.fgValidation.controls['contactId'].setValue(id);
      this.fgValidation.controls['name'].setValue(data.name);
      this.fgValidation.controls['lastName'].setValue(data.lastName);
      this.fgValidation.controls['email'].setValue(data.email);
      this.fgValidation.controls['phones'].setValue(data.phones);
    });
  }

  edit() {
    let contact = new ContactModel();
    contact.contactId = this.fgValidation.controls['contactId'].value;
    contact.name = this.fgValidation.controls['name'].value;
    contact.lastName = this.fgValidation.controls['lastName'].value;
    contact.email = this.fgValidation.controls['email'].value;
    contact.phones = this.fgValidation.controls['phones'].value;

    this.contactService.update(contact).subscribe({
      next: (data: ContactModel) => {
        Swal.fire('Successfully edited!', '', 'success');
        this.router.navigate(['/contacts/get']);
      },
      error: (error: any) => {
        console.log(error);
        alert('Error sending data');
      },
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getById(this.id);
  }
}
