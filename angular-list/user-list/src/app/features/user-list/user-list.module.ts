import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLustRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UserListHeaderComponent } from './components/user-list-header/user-list-header.component';
import { UserListExpansionComponent } from './components/user-list-expansion/user-list-expansion.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    UserListComponent,
    UserListHeaderComponent,
    UserListExpansionComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    UserLustRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    UserListComponent,
  ]
})
export class UserListModule { }
