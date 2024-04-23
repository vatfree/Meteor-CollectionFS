Package.describe({
  git: "https://github.com/CollectionFS/Meteor-cfs-file.git",
  name: "cfs:file",
  version: "0.1.19",
  summary: "CollectionFS, FS.File object",
});

Package.onUse(function (api) {
  api.versionsFrom(["1.0", "2.0"]);

  // This imply is needed for tests, and is technically probably correct anyway.
  api.imply(["cfs:base-package"]);

  api.use([
    "cfs:base-package",
    "cfs:storage-adapter",
    "tracker",
    "check",
    "ddp",
    "mongo",
    "http@~2.0.0",
    "cfs:data-man",
    "raix:eventemitter",
  ]);

  api.addFiles(["fsFile-common.js"], "client");

  api.addFiles(["fsFile-common.js", "fsFile-server.js"], "server");
});

Package.onTest(function (api) {
  api.use([
    "cfs:standard-packages",
    //'cfs:gridfs@0.0.0',
    "tinytest",
    "http@~2.0.0",
    "test-helpers",
    "cfs:http-methods",
  ]);

  api.addFiles(["tests/file-tests.js"]);
});
