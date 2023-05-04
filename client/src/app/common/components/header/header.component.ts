import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR647xb6obvvTm3aIe-WYJai_Ee_zjMammJRJ1Pw5lKh-K-hBuiU-YT5rEMpKx7leH6t8g&usqp=CAU'
  constructor() { }

  ngOnInit(): void {
  }

}
