import { WebPlugin } from '@capacitor/core';
import { TestDefaultPlugin } from './definitions';
export declare class TestDefaultWeb extends WebPlugin implements TestDefaultPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const TestDefault: TestDefaultWeb;
export { TestDefault };
