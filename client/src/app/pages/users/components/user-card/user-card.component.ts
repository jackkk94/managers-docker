import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/common/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input()
  public user: User;
  
  constructor() { }

  ngOnInit(): void {
  }

}
