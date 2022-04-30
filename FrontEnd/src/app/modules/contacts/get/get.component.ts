import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css'],
})
export class GetComponent implements OnInit {
  constructor(private contactService: ContactService) { }

  contactList: ContactModel[] = [];

  getAll() {
    this.contactList = this.contactService.getAll();
    console.log(this.contactList);
  }

  delete(id?: any) {
    console.log(id);
    Swal.fire({
      title: 'Are you sure you want to delete this record?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactService.delete(id)
        Swal.fire('Successfully removed!', '', 'success').then(caca =>
          this.getAll()
        );
      };
    }
    );
  }

  ngOnInit(): void {
    this.getAll();
  }
}
