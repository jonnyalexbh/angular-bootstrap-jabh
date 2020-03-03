import { Component, OnInit } from '@angular/core';
import { SampleAlbumService } from '../../services/sample-album.service';

@Component({
  selector: 'app-sample-testing',
  templateUrl: './sample-testing.component.html',
  styleUrls: ['./sample-testing.component.scss']
})
export class SampleTestingComponent implements OnInit {
  albums: [];

  constructor(private albumService: SampleAlbumService) { }

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
