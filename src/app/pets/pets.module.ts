import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { ItemComponent } from './item/item.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets.component';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    ListaComponent,
    ItemComponent,
    PetsComponent,
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    MatTableModule

  ]
})
export class PetsModule { }
