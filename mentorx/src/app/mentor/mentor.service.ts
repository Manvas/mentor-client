import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { Mentor } from './mentor';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  private mentorUrl = 'http://localhost:8080/mentor';
  public mentors: Observable<Mentor[]>
  public mentorsCount = 0;

  constructor(private http: Http) { }

  getMentorsByProfession(professionCode: string): Observable<Mentor[]> {
    let path = '';
    if (professionCode != null){
      path = '/' + professionCode;
    }

    return this.http.get(this.mentorUrl + path).pipe(map(this.extractData),catchError(this.handleError));
  }

  private extractData(res: Response){
    let body = res.json();
    let mentors = [];
    for (let i = 0; i < body.mentors.length; i++) {
      let mentorInfo = body.mentors[i];
      let mentor = new Mentor(mentorInfo.user.firstname, mentorInfo.user.lastname, mentorInfo.user.email, mentorInfo.specialityCode);
      mentors.push(mentor);
      this.mentorsCount++;
    }
    return mentors;
  }

  private handleError (error: Response | any){
    let errMsg:string;
    if(error instanceof Response){
      const body = JSON.parse(JSON.stringify(error)) || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText} || ''}  ${err}`;
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
