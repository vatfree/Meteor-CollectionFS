Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-CollectionFS.git',
  name: 'cfs:standard-packages',
  version: '0.5.11',
  summary: 'Filesystem for Meteor, collectionFS'
});

Package.onUse(function(api) {
  // Rig the collectionFS package v2
  api.imply([
    // Base util rigs the basis for the FS scope and some general helper mehtods
    'cfs:base-package',
    // Want to make use of the file object and its api, yes!
    'cfs:file',
    // Add the FS.Collection to keep track of everything
    'cfs:collection',
    // Support filters for easy rules about what may be inserted
    'cfs:collection-filters',
    // Add the option to have ddp and http access point
    'cfs:access-point',
    // We might also want to have the server create copies of our files?
    'cfs:worker',
    // By default we want to support uploads over HTTP
    'cfs:upload-http',
  ]);
});

Package.onTest(function (api) {
  api.use('cfs:standard-packages');
  api.use('test-helpers@1.0.0', 'server');
  api.use([
    'tinytest@1.0.0',
    'underscore@1.0.0',
    'ejson@1.0.0',
    'ordered-dict@1.0.0',
    'random@1.0.0',
    'tracker@1.0.3'
  ]);

  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});
