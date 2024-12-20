import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
constructor(private _location: Location){

}
  back() {
    this._location.back();
  }
}
