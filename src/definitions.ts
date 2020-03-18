declare module "@capacitor/core" {
  interface PluginRegistry {
    TestDefault: TestDefaultPlugin;
  }
}

export interface TestDefaultPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
