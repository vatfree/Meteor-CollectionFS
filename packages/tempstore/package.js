 Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-cfs-tempstore.git',
  name: 'cfs:tempstore',
  version: '0.1.6',
  summary: 'CollectionFS, temporary storage'
});

Npm.depends({
  'combined-stream': '0.0.4'
});

Package.onUse(function(api) {
  api.versionsFrom(['1.0','2.0']);

  api.use(['cfs:base-package', 'cfs:file']);

  api.use('cfs:filesystem', { weak: true });
  //api.use('cfs:gridfs@0.0.30', { weak: true });

  api.use('mongo');

  api.addFiles([
    'tempStore.js'
  ], 'server');
});

// Package.onTest(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.addFiles('tests/server-tests.js', 'server');
// });
