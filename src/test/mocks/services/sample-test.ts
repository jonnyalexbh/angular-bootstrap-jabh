import { BehaviorSubject } from 'rxjs';

export class MockTestService {
  private showOnBoarding = new BehaviorSubject(false);
  public currentOnBoarding = this.showOnBoarding.asObservable();

  changeOnBoarding(onboarding: boolean) {
    this.showOnBoarding.next(onboarding);
  }
}
