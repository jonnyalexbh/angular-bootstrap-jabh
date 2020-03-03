import { of } from 'rxjs';

export class MockAlbumsService {
  private albums =
    [
      {
        userId: 1,
        id: 1,
        title: 'album one'
      },
      {
        userId: 1,
        id: 2,
        title: 'album two'
      },
    ];

  getAllAlbums() {
    return of(this.albums);
  }
}
