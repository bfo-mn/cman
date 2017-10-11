import { Component } from '@angular/core';

// conceptually a component is a class that manages a square of visual real estate in your app
@Component({
  selector: 'my-app', // css selector i.e. the name in the DOM
  template: `
  <h1>
    <h1>{{name}}</h1>
    <p><i>{{name}}, is located in the {{region}} region.</i></p>
    <br/>
    <input [value]="name" (input)="name=$event.target.value"/><br/>
    <input [value]="name" (keyup.enter)="name=$event.target.value" (blur)="name=$event.target.value"/><br/>
    <button (click)="showHideAddress()">Show/Hide Address</button>
    <div [hidden]="hideAddress">
      <fieldset>
        <label>Street: </label>{{street}}
      </fieldset>
      <fieldset>
        <label>City: </label>{{city}}
      </fieldset>
      <fieldset>
        <label>Region: </label>
        <select (change)="regionChange($event.target.value)">
        <option>north</option>
        <option>south</option>
        <option>east</option>
        <option>west</option>
      </select>
      </fieldset>
    </div>
    <fieldset>
      <img [src]="image"/> 
    </fieldset>
    <label [style.color]="color">Favorite Color: </label>
    <button (click)="clicked()">Toggle Color</button>
    <select (change)="colorChange($event.target.value)">
      <option>red</option>
      <option>blue</option>
      <option>green</option>
    </select>
  </h1>
  `, // HTML fragment square brackets is angular syntax for a property indexer, parens provide syntax for function indexing
    //  equivalent:  <select #selector (change)="colorChange(selector.value)">
    //               <select (change)="colorChange($event.target.value)">
})
export class AppComponent {

        name = 'Khanh Nguyen';
        street = '123 main street';
        city = 'any town usa';
        hideAddress = false;
        region = 'east';
        image = 'favicon.ico';
        color = 'red';
        clicked() {
          this.color = this.color === 'red' ? 'blue' : 'red';
        }
        colorChange(color: string) {
          this.color = color;
        }
        regionChange(region: string) {
          this.region = region;
        }

        showHideAddress() {
          this.hideAddress = !this.hideAddress;
        }
}
