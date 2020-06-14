// src/configuration.ts
import { Configuration } from '@midwayjs/decorator';

@Configuration({
    importConfigs: [
        './config/',
    ]
})
export class ContainerLifeCycle {
}
