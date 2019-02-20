import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private titleSource = new BehaviorSubject('default message');
  private imageSource = new BehaviorSubject('default message');
  private videoSource = new BehaviorSubject('default message');
  private contentSource = new BehaviorSubject('default message');
  private directorSource = new BehaviorSubject('default message');
  private genreSource = new BehaviorSubject('default message');
  private durationSource = new BehaviorSubject('default message');

  currentTitle = this.titleSource.asObservable();
  currentImage = this.imageSource.asObservable();
  currentVideo = this.videoSource.asObservable();
  currentContent = this.contentSource.asObservable();
  currentDirector = this.directorSource.asObservable();
  currentGenre = this.genreSource.asObservable();
  currentDuration = this.durationSource.asObservable();

  constructor() { }

  changeTitle(title: string) {
    this.titleSource.next(title);
  }

  changeImage(image: string) {
    this.imageSource.next(image);
  }
  changeVideo(video: string) {
    this.videoSource.next(video);
  }
  changeContent(content: string) {
      this.contentSource.next(content);
    }

  changeDirector(director: string) {
      this.directorSource.next(director);
    }

  changeGenre(genre: string) {
        this.genreSource.next(genre);
      }

  changeDuration(duration: string) {
      this.durationSource.next(duration);
    }

}
