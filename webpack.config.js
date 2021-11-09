var Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('build/')
  .setPublicPath('/wp-content/themes/garumba/build/')
  .addEntry('app', './assets/app.js')
  .addStyleEntry('main', './assets/scss/app.scss')
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = 3;
  })
  .enableVueLoader(() => {}, { runtimeCompilerBuild: true })
  .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();
