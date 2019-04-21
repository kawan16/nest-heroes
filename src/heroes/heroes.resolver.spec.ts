import { Test, TestingModule } from '@nestjs/testing';
import { HeroesResolver } from './heroes.resolver';

describe('HeroesResolver', () => {
  let resolver: HeroesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroesResolver],
    }).compile();

    resolver = module.get<HeroesResolver>(HeroesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
