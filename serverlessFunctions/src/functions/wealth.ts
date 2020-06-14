import { Func, Inject, Provide } from '@midwayjs/decorator';
import { FaaSContext, FunctionHandler } from '@midwayjs/faas';

@Provide()
export class WealthService implements FunctionHandler {

  @Inject()
  ctx: FaaSContext;  // context

  @Func('wealth.handler')
  async handler() {
    return 'hello world wealth';
  }
}
