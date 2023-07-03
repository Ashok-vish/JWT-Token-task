import { TestBed } from '@angular/core/testing';

import { JwtinterceptInterceptor } from './jwtintercept.interceptor';

describe('JwtinterceptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtinterceptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtinterceptInterceptor = TestBed.inject(JwtinterceptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
