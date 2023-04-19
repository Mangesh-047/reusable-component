import { Component } from '@angular/core';
import { Ireels } from './shared/model/reels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusableComponent';


  reelsArray : Array<Ireels>= [
    {
      title: 'music',
      isLiked: false,
      likeCount: 548,
      id: 11
    },
    {
      title: 'music',
      isLiked: false,
      likeCount: 652,
      id: 12
    },
    {
      title: 'music',
      isLiked: false,
      likeCount: 475,
      id: 13
    },
    {
      title: 'music',
      isLiked: false,
      likeCount: 956,
      id: 14
    }
  ]
}
