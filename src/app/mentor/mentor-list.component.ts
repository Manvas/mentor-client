import { Component, OnInit } from '@angular/core';
import { MentorService } from './mentor.service';
import { Mentor } from './mentor';
import { RootContext } from '@angular/core/src/render3/interfaces/view';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'mentor-list',
  providers: [MentorService],
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {

  mentors : Mentor[];
  errorMessage: string;
  constructor(private mentorService : MentorService, private router : Router, 
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.mentorService.getMentorsByProfession(params.get('profession')))
    )
    .subscribe(mentors => this.mentors = mentors, error => this.errorMessage = <any>error);
  }

}
