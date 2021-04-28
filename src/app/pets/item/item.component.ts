import { Component, OnInit, Input } from '@angular/core';
import { PetModel } from '../pets.Model';
import { PetsService } from '../pets.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  form : FormGroup = this.fb.group ({
    name:['', []]
  })
  private _source?: PetModel; 
  
  @Input()
  get source (): PetModel {
    return this._source||{};
  }

  set source(value: PetModel) {
    
    this._source = value;
  
    this.form.reset({
      name: this.source.name
    })
  }

  constructor(private service :PetsService ,private fb: FormBuilder,) { }

  ngOnInit() {
  }

  async save() {
    await this.service.update(this.source);
  }

}
