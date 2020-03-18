import { WebPlugin } from '@capacitor/core';
import { TestDefaultPlugin } from './definitions';

export class TestDefaultWeb extends WebPlugin implements TestDefaultPlugin {
  constructor() {
    super({
      name: 'TestDefault',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const TestDefault = new TestDefaultWeb();

export { TestDefault };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(TestDefault);
