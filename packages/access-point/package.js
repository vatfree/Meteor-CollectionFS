Package.describe({
  name: 'cfs:access-point',
  version: '0.1.50',
  summary: 'CollectionFS, add ddp and http accesspoint capability',
  git: 'https://github.com/CollectionFS/Meteor-cfs-access-point.git'
});

Npm.depends({
  "content-disposition": "0.5.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // This imply is needed for tests, and is technically probably correct anyway.
  api.imply([
    'cfs:base-package'
  ]);

  api.use([
    //CFS packages
    'cfs:base-package',
    'cfs:file',
    //Core packages
    'check',
    'ejson',
    //Other packages
    'cfs:http-methods',
    'cfs:http-publish'
  ]);

  api.addFiles([
    'access-point-common.js',
    'access-point-handlers.js',
    'access-point-server.js'
  ], 'server');

  api.addFiles([
    'access-point-common.js',
    'access-point-client.js'
  ], 'client');
});

Package.onTest(function (api) {
  api.versionsFrom('1.0');

  api.use([
    //CFS packages
    'cfs:access-point',
    'cfs:standard-packages',
    'cfs:gridfs',
    //Core packages
    'test-helpers',
    'http@~2.0.0',
    'tinytest',
    'underscore',
    'ejson',
    'ordered-dict',
    'random',
    'deps'
  ]);

  api.addFiles('tests/client-tests.js', 'client');
  api.addFiles('tests/server-tests.js', 'server');
});
