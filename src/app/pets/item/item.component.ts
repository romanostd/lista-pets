import { Component, OnInit, Input } from '@angular/core';
import { PetModel } from '../pets.Model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  source?: PetModel;

  constructor() { }

  ngOnInit() {
  }

}
