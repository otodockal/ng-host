import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  template: `
    <h1>Contact Us</h1>
    <h2>Get in Touch</h2>
    <h3>Customer Support</h3>
    <h4>We're Here to Help</h4>
  `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    h2 {
      background-color: red;
      color: white;
    }
    h3 {
      background-color: green;
      color: white;
    }
    h4 {
      background-color: blue;
      color: white;
    }
  `,
})
export class Contact {}
