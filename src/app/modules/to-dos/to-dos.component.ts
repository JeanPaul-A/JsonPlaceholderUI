import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/interfaces/toDo.interface';
import { AppState } from 'src/app/states/app.state';
import { toDosArraySelector } from 'src/app/states/toDos/ToDos.selectors';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent {

  toDos$!: Observable<ReadonlyArray<ToDo>>;

  constructor(
    private store: Store<AppState>
  ) {
    this.toDos$ = this.store.select(toDosArraySelector);
  }

  statusCompleted(statusCompleted: boolean): string {
    return (statusCompleted) ? "completedTrue" : "completedFalse"
  }

}
