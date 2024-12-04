import { Routes } from '@angular/router';
import { Contact } from './contact.component';
import { Home } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'contact',
    component: Contact,
  },
];
