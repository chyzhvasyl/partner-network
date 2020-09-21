import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsCardComponent implements OnInit {
  @Input() headerText: string;
  @Input() data?: {[key: string]: string | number};
  constructor() { }

  ngOnInit(): void {
  }

}
