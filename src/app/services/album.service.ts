import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private http: HttpClient
  ) { }

  getAllAlbums() {
    return this.http.get<any>(`${environment.albumsApiUri}/albums`);
  }
}
