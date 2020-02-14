import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private http: HttpClient
  ) { }

  getAllAlbums() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums888');
  }
}
