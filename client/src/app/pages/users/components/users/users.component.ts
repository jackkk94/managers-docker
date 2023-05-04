import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';

import { User } from 'src/app/common/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: Guid.create(),
      name: 'Петр',
      surname: 'Иванов',
      fullName: 'Петр Иванов',
      position: 'Старший разработчик информационных систем',
      phone: '+79345884333',
      email: 'wdw@mail.ru',
      office: { id: Guid.create(), name: 'Бц "Престиж"', city: 'Москва', isActive: true },
      experience: 3,
      age: 43,
      isActive: true,
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR647xb6obvvTm3aIe-WYJai_Ee_zjMammJRJ1Pw5lKh-K-hBuiU-YT5rEMpKx7leH6t8g&usqp=CAU',
      project: { id: Guid.create(), name: 'Мтс' },
    },
    {
      id: Guid.create(),
      name: 'Василий',
      surname: 'Петров',
      fullName: 'Василий Петров',
      position: 'Ux-дизайнер',
      phone: '+79322884333',
      email: 'w2dw@mail.ru',
      office: { id: Guid.create(), name: 'Бц "Призма"', city: 'Сочи', isActive: true },
      experience: 4,
      age: 23,
      isActive: true,
      photoUrl:
        'https://www.lego.com/cdn/cs/catalog/assets/blte20bc64d388425f8/1/70902_1to1_robin_360_480.png?width=320',
      project: { id: Guid.create(), name: 'Газпром' },
    },
    {
      id: Guid.create(),
      name: 'Павел',
      surname: 'Петров',
      fullName: 'Павел Петров',
      position: 'Уборщик',
      phone: '+79322184333',
      email: 'u2dw@mail.ru',
      office: { id: Guid.create(), name: 'Бц "Призма"', city: 'Сочи', isActive: true },
      experience: 4,
      age: 23,
      isActive: true,
      photoUrl:
        'https://rus.team/images/article/7629/2018-11-26-462_19079-1_764927.webp',
      project: { id: Guid.create(), name: 'Звезда смерти' },
    },
  ] as User[];
  constructor() {}

  ngOnInit(): void {}

  public onTextFilterChange(value: string){
    console.log(value)
  }
}
