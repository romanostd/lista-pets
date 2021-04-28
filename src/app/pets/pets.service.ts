import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PetModel } from './pets.Model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(
    private http: HttpClient,
  ) {
    this.http = http;
  }

  async findByStatus(status: 'available' | 'pending' | 'sold') {
    const endpoint = `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}` ;

    return await this.http.get<PetModel[]>(endpoint).toPromise();
  }
  
  async update(pet : PetModel) {
    const endpoint = 'https://petstore.swagger.io/v2/pet' ;

    const result = await this.http.put<PetModel>
    (endpoint , pet).toPromise();

  }

  async new(pet : PetModel) {
    const endpoint = 'https://petstore.swagger.io/v2/pet' ;
  }

  async ListarPets(){
    const result = await this.http.get<PetModel[]>('https://petstore.swagger.io/v2/pet/findByStatus?status=available').toPromise();
    return result;
  }
}