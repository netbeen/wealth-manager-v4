import { Func, Inject, Provide } from '@midwayjs/decorator';
import { FaaSContext, FunctionHandler } from '@midwayjs/faas';

@Provide()
export class IndexService implements FunctionHandler {

  @Inject()
  ctx: FaaSContext;  // context

  @Func('index.handler')
  async handler() {
    return 'hello world index';
  }
}
