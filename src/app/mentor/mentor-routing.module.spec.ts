import { MentorRoutingModule } from './mentor-routing.module';

describe('MentorRoutingModule', () => {
  let mentorRoutingModule: MentorRoutingModule;

  beforeEach(() => {
    mentorRoutingModule = new MentorRoutingModule();
  });

  it('should create an instance', () => {
    expect(mentorRoutingModule).toBeTruthy();
  });
});
