import { Component, OnInit } from '@angular/core';
import { DogBreedService } from '../services/dog-breed.service';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.css']
})
export class BreedsListComponent implements OnInit {
  breeds: string[] = []; // Array to store the list of dog breeds

  constructor(private dogBreedService: DogBreedService) { }

  // Lifecycle hook called after Angular has initialized all data-bound properties of a directive
  ngOnInit(): void {
    // Fetch all dog breeds
    this.dogBreedService.getAllBreeds().subscribe(data => {
      // Extract breed names from the response object and store them in the breeds array
      this.breeds = Object.keys(data.message);
    });
  }

  // Method to handle breed selection
  onSelectBreed(breed: string) {
    // Set the selected breed in the DogBreedService
    this.dogBreedService.setSelectedBreed(breed);
  }
}
