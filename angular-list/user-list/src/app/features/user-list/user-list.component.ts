import { Component, OnInit } from '@angular/core';
import { Users } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user-lust',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Users[] = [];
  sortAsc: boolean = true;

  constructor(public UserService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.UserService.get().subscribe(
      (users) => {
        this.users = users;
      }
    )
  }

  sortUsersByAge() {
    this.sortAsc = !this.sortAsc;

    if (this.sortAsc) {
      this.users.sort((a, b) => (a.age > b.age) ? 1 : -1)
    } else {
      this.users.sort((a, b) => (a.age < b.age) ? 1 : -1)
    }
  }
}
