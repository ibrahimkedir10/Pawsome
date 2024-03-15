import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogBreedService {
  private selectedBreedSource = new BehaviorSubject<string | null>(null); // BehaviorSubject to store the selected breed
  selectedBreed$ = this.selectedBreedSource.asObservable(); // Observable to subscribe to changes in the selected breed

  constructor(private http: HttpClient) { }

  // Method to fetch all dog breeds
  getAllBreeds() {
    return this.http.get<any>('https://dog.ceo/api/breeds/list/all');
  }

  // Method to fetch a random image for a specific breed
  getRandomImageForBreed(breedName: string) {
    return this.http.get<any>(`https://dog.ceo/api/breed/${breedName}/images/random`);
  }

  // Method to set the selected breed
  setSelectedBreed(breed: string) {
    this.selectedBreedSource.next(breed); // Update the selected breed in the BehaviorSubject
  }
}
