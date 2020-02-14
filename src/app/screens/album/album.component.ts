import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albums: [];

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.albumService.getAllAlbums()
      .subscribe(albums => {
        this.albums = albums;
      });
  }

}
