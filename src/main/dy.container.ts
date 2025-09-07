import { createContainer, AwilixContainer, LifetimeType, Lifetime, asClass, asValue } from 'awilix';

class DyContainer {
  public container: AwilixContainer = createContainer({
    injectionMode: 'CLASSIC',
  });

  public async setDependency(
    dependencyKey: string,
    injectClassImplementation: any,
    scope: LifetimeType = Lifetime.SCOPED,
  ) {
    if (injectClassImplementation.useFactory) {
      this.container.register(dependencyKey, asValue(await injectClassImplementation.useFactory()));
    } else {
      this.container.register(dependencyKey, asClass(injectClassImplementation, { lifetime: scope }));
    }
  }

  public getDependencyKey(dependencyKey: string) {
    return dependencyKey.charAt(0).toLowerCase() + dependencyKey.slice(1);
  }

  public getByClass<T>(classConstructor: any): T {
    return this.get(this.getDependencyKey(classConstructor.name));
  }

  public get<T>(dependencyKey: string): T {
    return this.container.resolve(dependencyKey);
  }
}

export const dyContainer = new DyContainer();