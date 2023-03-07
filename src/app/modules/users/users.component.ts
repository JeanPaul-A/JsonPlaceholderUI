import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { AppState } from 'src/app/states/app.state';
import { requestUsers, sendUserId } from 'src/app/states/users/users.actions';
import * as UserSelectors from 'src/app/states/users/users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  loading$!: Observable<boolean>;

  users$!: Observable<ReadonlyArray<User>>;

  cols = "4";

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
  ) {
    this.sizeView();
  };

  onSubmit(userId: number) {
    this.store.dispatch(sendUserId({userId: userId}));
  }

  ngOnInit(): void {
    this.store.dispatch(requestUsers());
    this.users$ = this.store.select(UserSelectors.usersArraySelector);
  }

  displayMap = new Map(
    [
      [Breakpoints.XSmall, '1'],
      [Breakpoints.Small, '2'],
      [Breakpoints.Medium, '3'],
      [Breakpoints.Large, '4'],
      [Breakpoints.XLarge, '4']
    ]
  )

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
            this.cols = this.displayMap.get(query) as string;
          }
        }
      }
    )
  }

}

