/*
 * grunt-symfony2
 * https://github.com/florianeckerstorfer/grunt-symfony2
 *
 * Copyright (c) 2014 Florian Eckerstorfer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var exec = require('child_process').exec,
        execCmd = function (cmd, cb, execOpts) {
            grunt.verbose.writeln('Exec: ' + cmd);
            exec(cmd, execOpts, function (err, stdout, stderr) {
                grunt.verbose.writeln(stdout);
                if (stderr) {
                    grunt.fatal(stderr);
                }
                if (err && 127 === err.code) {
                    grunt.warn('Could not execute app/console.');
                }
                cb();
            });
        },
        prepareCmd = function (cmd, args, options, done) {
            var bin = options.bin || 'app/console',
                execOpts = {},
                arg;

            if (options.cwd) {
                execOpts.cwd = options.cwd;
            }

            for (arg in args) {
                if (args.hasOwnProperty(arg)) {
                    cmd += ' --' + arg;
                    if (args[arg] && true !== args[arg]) {
                        cmd += '=' + args[arg];
                    }
                }
            }
            execCmd('php ' + bin + ' ' + cmd, done, execOpts);
        };

    grunt.registerMultiTask('sf2_console', 'Grunt task for running Symfony2 commands.', function () {
        var cmd = this.data.cmd || '',
            args = this.data.args || {},
            options = this.options();

        prepareCmd(cmd, args, options, this.async());
    });

    grunt.registerMultiTask('sf2_cache_clear', 'Grunt task for running Symfony2 cache:clear commands.', function () {
        var args = this.data.args || {},
            options = this.options();

        prepareCmd('cache:clear', args, options, this.async());
    });

    grunt.registerMultiTask('sf2_cache_warmup', 'Grunt task for running Symfony2 cache:warmup commands', function () {
        var args = this.data.args || {},
            options = this.options();

        prepareCmd('cache:warmup', args, options, this.async());
    });

};
