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
        };

    grunt.registerMultiTask('sf2_console', 'Grunt plugin for running Symfony2 commands.', function () {
        var cmd = this.data.cmd || '',
            args = this.data.args || {},
            options = this.options(),
            bin = options.bin || 'app/console',
            execOpts = {},
            done = this.async(),
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
    });

};
