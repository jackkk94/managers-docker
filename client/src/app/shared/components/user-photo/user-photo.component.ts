import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss']
})
export class UserPhotoComponent {
  @Input()
  public link: string;
}
