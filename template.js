/*
 */

'use strict';

// Basic template description.
exports.description = 'Create a basic project.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('project_name'),
    init.prompt('project_id'),
	init.prompt('ftp_host'),
	init.prompt('ftp_dir'),
	init.prompt('ftp_authkey')
  ], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
