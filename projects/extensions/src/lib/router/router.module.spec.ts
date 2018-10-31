import { NgxRouterModule } from './router.module';
import {
  NGX_EVALUATION_OPTIONS,
  DefaultEvaluationOptions
} from './parametrised-router-link/parametrised-link-evaluator';

describe('NgxRouterModule', () => {
  it('should correctly be created', () => {
    const uut = new NgxRouterModule();

    expect(uut).toBeTruthy();
  });

  describe('forRoot', () => {
    it('should correctly set a default provider when no arguments are given', () => {
      const { ngModule, providers } = NgxRouterModule.forRoot();

      expect(ngModule).toBe(NgxRouterModule);
      expect(providers).toBeTruthy();
      expect(providers).toContain(
        jasmine.objectContaining({
          provide: NGX_EVALUATION_OPTIONS,
          useClass: DefaultEvaluationOptions
        })
      );
    });
  });
});
