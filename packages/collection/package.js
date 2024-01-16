Package.describe({
  name: 'cfs:collection',
  version: '0.5.6',
  summary: 'CollectionFS, FS.Collection object',
  git: 'https://github.com/CollectionFS/Meteor-cfs-collection.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    // CFS
    'ecmascript',
    'cfs:base-package',
    'cfs:tempstore',
    // Core
    'deps',
    'check',
    'livedata',
    'mongo-livedata',
    // Other
    'raix:eventemitter@0.1.1'
  ]);

  // Weak dependencies for uploaders
  api.use(['cfs:upload-http', 'cfs:upload-ddp'], { weak: true });

  api.addFiles([
    'common.js',
    'api.common.js'
  ], 'client');

  api.addFiles([
    'common.js',
    'api.common.js'
  ], 'server');
});

Package.onTest(function (api) {
  api.use(['cfs:standard-packages', 'cfs:gridfs', 'tinytest', 'underscore', 'test-helpers']);

  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});
