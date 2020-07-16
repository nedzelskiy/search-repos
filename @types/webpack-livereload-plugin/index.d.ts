declare module 'webpack-livereload-plugin' {
    import webpack from 'webpack';

    export interface LiveReloadPluginOptions {
      protocol?: 'http' | 'https';
      port?: number;
      hostname?: string;
      appendScriptTag?: boolean;
      ignore?: RegExp;
      delay?: number;
      useSourceHash?: boolean;
    }

    export default class extends webpack.Plugin {
      constructor(options: LiveReloadPluginOptions);
      apply(compiler: webpack.Compiler): void;
      apply(...args: any[]): void;
    }
}
