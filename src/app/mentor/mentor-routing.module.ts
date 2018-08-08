import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { MentorComponent } from './mentor.component';
import { MentorListComponent } from './mentor-list.component';
import { MentorHomeComponent } from './mentor-home.component';

const mentorRoutes: Routes = [
  {
    path: 'mentors',
    component: MentorComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: MentorListComponent,
          },
          {
            path: ':profession',
            component: MentorListComponent,
          }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mentorRoutes)
  ],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
