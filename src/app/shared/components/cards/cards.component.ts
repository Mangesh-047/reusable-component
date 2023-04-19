import { Component, Input, OnInit } from '@angular/core';
import { Ireels } from '../../model/reels';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {


  @Input()
  reelInfo: Ireels[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
