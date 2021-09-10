import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  exports: [
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
})
export class MaterialModule { }
