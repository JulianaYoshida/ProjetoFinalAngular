import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.models';
import { Column } from 'src/app/models/column.model';
import { Card } from 'src/app/models/card.model';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements OnInit {
  constructor(private mainService: MainService) {}

  board: Board = new Board('Test Board', [
    new Column(
      'To do', [new Card ("First1", "First11"),new Card ("Second1", "Second1")]
    ),
    new Column(
      'Doing', [new Card ("First2", "First2"),new Card ("Second2", "Second2")]

    ),
    new Column(
      'Done', [new Card ("First3", "First3"),new Card ("Second3", "Second3")]

    ),
  ]);

  ngOnInit(): void {}

  createNewCard() {
    this.mainService.createCard("Testing").subscribe((response: any) => {
      console.log(response)
    });
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
