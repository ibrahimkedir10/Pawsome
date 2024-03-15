import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DogBreedService } from '../services/dog-breed.service';

@Component({
  selector: 'app-breed-image',
  templateUrl: './breed-image.component.html',
  styleUrls: ['./breed-image.component.css']
})
export class BreedImageComponent implements OnInit, OnDestroy {
  imageUrl: string | null = null; // Stores the URL of the currently selected dog breed image
  private subscription: Subscription | null = null; // Subscription to listen for changes in selected dog breed

  constructor(private dogBreedService: DogBreedService) { }

  // Lifecycle hook called after Angular has initialized all data-bound properties of a directive
  ngOnInit(): void {
    // Subscribe to changes in selected dog breed
    this.subscription = this.dogBreedService.selectedBreed$.subscribe(breed => {
      // If a breed is selected
      if (breed) {
        // Fetch a random image for the selected breed
        this.dogBreedService.getRandomImageForBreed(breed).subscribe(data => {
          this.imageUrl = data.message; // Update the imageUrl with the fetched image URL
        }, error => {
          console.error('Error fetching image:', error); // Log any errors that occur during image fetch
          this.imageUrl = null; // Reset imageUrl in case of error
        });
      } else {
        this.imageUrl = null; // Reset imageUrl if no breed is selected
      }
    });
  }

  // Lifecycle hook called just before Angular destroys the component
  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); // Unsubscribe from the selectedBreed$ observable to prevent memory leaks
  }
}
