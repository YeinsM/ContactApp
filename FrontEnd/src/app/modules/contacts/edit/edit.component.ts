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
  ) { }

  fgValidation = this.fb.group({
    contactId: [0, [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  id: String = '';
  getById(id: String) {
    const data = this.contactService.getById(id)
      console.log(data);
      this.fgValidation.controls['contactId'].setValue(id);
      this.fgValidation.controls['name'].setValue(data?.name);
      this.fgValidation.controls['lastName'].setValue(data?.lastName);
      this.fgValidation.controls['phone'].setValue(data?.phone);
      this.fgValidation.controls['email'].setValue(data?.email);
  }

  edit() {
    let contact = new ContactModel();
    contact.contactId = this.fgValidation.controls['contactId'].value;
    contact.name = this.fgValidation.controls['name'].value;
    contact.lastName = this.fgValidation.controls['lastName'].value;
    contact.phone = this.fgValidation.controls['phone'].value;
    contact.email = this.fgValidation.controls['email'].value;
    try {
      this.contactService.update(contact)
      Swal.fire('Successfully edited!', '', 'success');
      this.router.navigate(['/contacts/get']);
    } catch (error) {
      console.log(error);
      alert('Error sending data');
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getById(this.id);
  }
}
