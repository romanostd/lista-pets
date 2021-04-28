
import { Component, OnInit } from '@angular/core';
import { PetsService } from './pets.service';
import { PetModel } from './pets.Model';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls:['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  constructor(private PetStore: PetsService) { }

  async ngOnInit() {
  }

}