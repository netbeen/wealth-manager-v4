import { Provide, ScopeEnum, Scope } from '@midwayjs/decorator';

@Provide('loginMiddleware')
@Scope(ScopeEnum.Singleton)
export class StaticMiddleware {

    resolve() {
        return async (ctx, next) => {
            // xxxxx
            console.log('loginMiddleware', ctx.request.req.originEvent.headers.cookie);
            await next();
        }
    }
}
