import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  starWidth: number;
  @Input() rating: number = 4;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = (this.rating * 75) / 5;
  }
  onClick(): void {
    this.ratingClicked.emit(`Current rating is ${this.rating}`);
  }
}
