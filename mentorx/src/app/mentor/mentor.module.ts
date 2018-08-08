import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MentorListComponent } from './mentor-list.component';
import { MentorService } from './mentor.service';
import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, HttpClientModule, MentorRoutingModule
  ],
  declarations: [MentorListComponent, MentorComponent],
  providers: [MentorService]
})
export class MentorModule { }
