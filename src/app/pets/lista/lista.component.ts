import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PetModel } from '../pets.Model';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})


export class ListaComponent implements OnInit {
  lista: PetModel[]=[];
  @Output()
  itemSelecionado: EventEmitter<PetModel> = new EventEmitter();
  constructor(private PetStore: PetsService) { }

  async ngOnInit() {
    this.lista = await this.PetStore.findByStatus('available');
    console.log(this.lista);
  }

  displayedColumns: string[] = ['id','name'];
   

}
