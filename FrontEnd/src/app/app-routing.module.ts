import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './assets/error/error.component';
import { IndexComponent } from './assets/index/index.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/index',
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./modules/contacts/contacts.module').then((c) => c.ContactsModule),
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '/error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule, ReactiveFormsModule],
})
export class AppRoutingModule {}
