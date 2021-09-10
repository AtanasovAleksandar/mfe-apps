import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-user-list-header',
  templateUrl: './user-list-header.component.html',
  styleUrls: ['./user-list-header.component.scss']
})
export class UserListHeaderComponent implements OnInit {
  searchValue: string;
  @Output() searchedTerm = new EventEmitter<string>();
  @Output() sortByAge = new EventEmitter<boolean>();
  constructor(public userStore: UserStoreService) { }

  ngOnInit(): void {
  }

  onSortClick() {
    this.sortByAge.emit()
  }

  onSearchChange(val:any) {
    if (this.searchValue.length >= 3 || this.searchValue.length === 0) {
      this.userStore.setSearchTerm(this.searchValue)
    }
  }
}
