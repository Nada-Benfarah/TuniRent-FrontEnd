import {Component, ViewChild} from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent {

  @ViewChild('formTabs') formTabs?: TabsetComponent;

  advertForm = new FormGroup({
    address: new FormControl(),
    description: new FormControl(),
    type: new FormControl(),
    room: new FormControl(),
    bed: new FormControl(),
    nbPlaces: new FormControl(),
    photos: new FormControl()
  });

  constructor() {
  }

}
