import { dyContainer } from './dy.container';
import { ContextService } from './modules/context/context.service';
import { MjolnirSubscriptionService } from './modules/mjolnir/application/mjolnir-subscription.service';
import { MjolnirService } from './modules/mjolnir/application/mjolnir.service';
import { MjolnirController } from './modules/mjolnir/infrastructure/controller/mjolnir.controller';

export class AppDependencies {
    public services: { name: string }[] = [
        MjolnirService,
        MjolnirSubscriptionService,
        ContextService
    ];
    public controllers: { name: string }[] = [
        MjolnirController
    ];

    public loadDependencies() {
        for (let controller of this.controllers) {
            dyContainer.setDependency(dyContainer.getDependencyKey(controller.name), controller);
        }
        for (let services of this.services) {
            dyContainer.setDependency(dyContainer.getDependencyKey(services.name), services, 'TRANSIENT');
        }
    }

}