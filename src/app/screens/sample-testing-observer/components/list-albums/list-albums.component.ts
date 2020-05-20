
// import { tap} from 'rxjs/operators';
import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { SampleAlbumService } from 'src/app/services/sample-album.service';
import { SampleTestService } from 'src/app/services/sample-test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.scss']
})
export class ListAlbumsComponent implements OnInit, OnChanges, OnDestroy {
  albums: [];
  @Input() periodParent: string;
  showOnBoarding: boolean;
  initialized = false;
  subscriptions = new Subscription();

  constructor(
    private albumService: SampleAlbumService,
    private sampleTestService: SampleTestService,
  ) { }

  ngOnInit() {
    const showOnBoarding$ = this.sampleTestService.currentOnBoarding.subscribe(data => {
      this.showOnBoarding = data;
    });
    this.getAlbums();
    this.initialized = true;
    this.subscriptions.add(showOnBoarding$);
  }

  ngOnChanges() {
    if (this.initialized) {
      console.log('ngOnChanges');
      this.getAlbums();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getAlbums() {
    this.albumService.getAllAlbums()
      // .pipe(
      //   tap(console.log)
      // )
      .subscribe(albums => {
        this.albums = albums;
      });
  }

  closeOnBoarding() {
    this.sampleTestService.changeOnBoarding(false);
  }

}
