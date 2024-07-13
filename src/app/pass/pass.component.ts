import { Component, Input } from '@angular/core';
import { map, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css'],
})
export class PassComponent {
  @Input() seconds = 1980;

  timeRemaining$ = timer(0, 1000).pipe(
    map((n) => (this.seconds - n) * 1000),
    takeWhile((n) => n >= 0)
  );
}
