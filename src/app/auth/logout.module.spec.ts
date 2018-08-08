import { LogoutModule } from './logout.module';

describe('logoutModule', () => {
  let logoutModule: LogoutModule;

  beforeEach(() => {
    logoutModule = new LogoutModule();
  });

  it('should create an instance', () => {
    expect(logoutModule).toBeTruthy();
  });
});
