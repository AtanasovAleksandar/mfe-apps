import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from '../../models/User';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-user-list-expansion',
  templateUrl: './user-list-expansion.component.html',
  styleUrls: ['./user-list-expansion.component.scss']
})
export class UserListExpansionComponent implements OnInit {
  panelOpenState = false;
  
  @Input() users: Users[];
  @Output() getAllUsers = new EventEmitter<any>();
  
  term: string;

  constructor(public userStoreService$: UserStoreService) { }

  ngOnInit(): void {
    this.userStoreService$.term$.subscribe((term) => {
      this.term = term;
      if (term.length === 0) {
        this.getAllUsers.emit()
      }
    })
  }

}
