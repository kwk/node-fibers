// package metadata file for Meteor.js
var packageName = 'kwk:fibers';
var where = ''; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '1.0.5';
var summary = 'Cooperative multi-tasking for Javascript';
var gitLink = 'https://github.com/kwk/node-fibers';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

//  api.addFiles('FILE_NAME', where); // Files in use
});   
