import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interfaces/user.interface';
import { AppState } from 'src/app/states/app.state';
import { requestPosts } from 'src/app/states/posts/posts.actions';
import { requestToDos } from 'src/app/states/toDos/toDos.actions';
import { userIdSelector, usersArraySelector } from 'src/app/states/users/users.selectors';
import * as AlbumActions from "../../states/albums/albums.actions";

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent {

  constructor(
    private store: Store<AppState>,
    private breakpointObserver: BreakpointObserver) {
    this.sizeView();
  };

  userId!: number;

  user!: User;


  ngOnInit(): void {
    this.store.select(userIdSelector).subscribe(
      (userId) => this.userId = userId
    );

    this.store.select(usersArraySelector).subscribe(
      (user) => this.user = user[this.userId]
    );
  }

  //------------ROUTERS-------------------

  routerAlbums(userId: number): void {
    this.store.dispatch(AlbumActions.requestAlbums({ userId: userId }));
  };

  routerPosts(userId: number): void {
    this.store.dispatch(requestPosts({ userId: userId }));
  }

  routerTodos(userId: number): void {
    this.store.dispatch(requestToDos({ userId: userId }));
  }

  //------------ROUTERS-------------------

  displayMap = new Map(
    [
      [Breakpoints.XSmall, '1'],
      [Breakpoints.Small, '2'],
      [Breakpoints.Medium, '3'],
      [Breakpoints.Large, '4'],
      [Breakpoints.XLarge, '5']
    ]
  );

  colList = 2;
  colsTile = 2;
  rowTile = 2;

  constView(actSizeView: string): void {
    switch (actSizeView) {
      case '1' || '2':
        console.log("View: " + actSizeView)
        this.colList = 1;
        this.colsTile = 1;
        this.rowTile = 4;
        break;
      case '3' || '4' || '5':
        console.log("View: " + actSizeView)
        this.colList = 2;
        this.colsTile = 2;
        this.rowTile = 2;
        break;
    }
  }

  sizeView(): void {
    this.breakpointObserver.observe(
      [Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge]
    ).subscribe(
      result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.constView(this.displayMap.get(query) as string);
          }
        }
      }
    )
  }



}
