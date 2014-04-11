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
                if (stdout) {
                    grunt.log.writeln(stdout);
                }
                if (stderr) {
                    grunt.fatal(stderr);
                }
                if (err && 127 === err.code) {
                    grunt.warn('Could not execute app/console.');
                }
                cb();
            });
        },
        prepareCmd = function (cmd, args, argOptions, options, target, done) {
            var bin = options.bin || 'app/console',
                execOpts = {},
                arg;

            if (options.cwd) {
                execOpts.cwd = options.cwd;
            }

            if (!argOptions.env && ('prod' === target || 'dev' === target || 'staging' === target)) {
                argOptions.env = target;
            }

            for (arg in args) {
                if (args.hasOwnProperty(arg)) {
                    cmd += ' ' + args[arg];
                }
            }

            for (arg in argOptions) {
                if (argOptions.hasOwnProperty(arg)) {
                    cmd += ' --' + arg;
                    if (argOptions[arg] && true !== argOptions[arg]) {
                        cmd += '=' + argOptions[arg];
                    }
                }
            }
            execCmd('php ' + bin + ' ' + cmd, done, execOpts);
        };

    grunt.registerMultiTask('sf2-console', 'Grunt task for running Symfony2 commands.', function () {
        var cmd = this.data.cmd || '',
            args = {},
            argOptions = this.data.args || {},
            options = this.options(),
            target = this.target || '';

        prepareCmd(cmd, args, argOptions, options, target, this.async());
    });

    grunt.registerMultiTask('sf2-cache-clear', 'Grunt task for running Symfony2 cache:clear commands.', function () {
        var args = {},
            argOptions = this.data.args || {},
            options = this.options(),
            target = this.target || '';

        prepareCmd('cache:clear', args, argOptions, options, target, this.async());
    });

    grunt.registerMultiTask('sf2-cache-warmup', 'Grunt task for running Symfony2 cache:warmup commands', function () {
        var args = {},
            argOptions = this.data.args || {},
            options = this.options(),
            target = this.target || '';

        prepareCmd('cache:warmup', args, argOptions, options, target, this.async());
    });

    grunt.registerMultiTask('sf2-assetic-dump', 'Grunt task for running Symfony2 assetic:dump commands.', function () {
        var args = { write_to: this.data.write_to || '' },
            argOptions = this.data.args || {},
            options = this.options(),
            target = this.target || '';

        prepareCmd('assetic:dump', args, argOptions, options, target, this.async());
    });

    grunt.registerMultiTask(
        'sf2-assets-install',
        'Grunt task for running Symfony2 assets:install commands.',
        function () {
            var args = { target: this.data.target || '' },
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('assets:install', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask('sf2-twig-lint', 'Grunt task for running Symfony2 twig:linkt commands.', function () {
        var args = { filename: this.data.filename || '' },
            argOptions = this.data.args || {},
            options = this.options(),
            target = this.target || '';

        prepareCmd('twig:lint', args, argOptions, options, target, this.async());
    });

    grunt.registerMultiTask(
        'sf2-translation-update',
        'Grunt task for running Symfony2 translation:update commands.',
        function () {
            var args = { locale: this.data.locale, bundle: this.data.bundle },
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('translation:update', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-orm-convert-mapping',
        'Grunt task for running Symfony2 orm:convert:mapping commands.',
        function () {
            var args = { 'to-type': this.data['to-type'], 'dest-path': this.data['dest-path'] },
                argOptions = this.data.argOptions || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('orm:convert:mapping', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-doctrine-cache-clear-metadata',
        'Grunt task for running Symfony2 doctrine:cache:clear-metadata commands.',
        function () {
            var args = {},
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('doctrine:cache:clear-metadata', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-doctrine-cache-clear-query',
        'Grunt task for running Symfony2 doctrine:cache:query commands.',
        function () {
            var args = {},
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('doctrine:cache:clear-query', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-doctrine-cache-clear-result',
        'Grunt task for running Symfony2 doctrine:cache:result commands.',
        function () {
            var args = {},
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('doctrine:cache:clear-result', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-doctrine-database-create',
        'Grunt task for running Symfony2 doctrine:database:create commands.',
        function () {
            var args = {},
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('doctrine:database:create', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-doctrine-database-drop',
        'Grunt task for running Symfony2 doctrine:database:drop commands.',
        function () {
            var args = {},
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('doctrine:database:drop', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-doctrine-ensure-production-settings',
        'Grunt task for running Symfony2 doctrine:ensure-production-settings commands.',
        function () {
            var args = {},
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('doctrine:ensure-production-settings', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-doctrine-fixtures-load',
        'Grunt task for running Symfony2 doctrine:fixtures:load commands.',
        function () {
            var args = {},
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('doctrine:fixtures:load', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-doctrine-schema-create',
        'Grunt task for running Symfony2 doctrine:schema:create commands.',
        function () {
            var args = {},
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('doctrine:schema:create', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-doctrine-schema-drop',
        'Grunt task for running Symfony2 doctrine:schema:drop commands.',
        function () {
            var args = {},
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('doctrine:schema:drop', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-doctrine-schema-update',
        'Grunt task for running Symfony2 doctrine:schema:update commands.',
        function () {
            var args = {},
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('doctrine:schema:update', args, argOptions, options, target, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2-doctrine-schema-validate',
        'Grunt task for running Symfony2 doctrine:schema:validate commands.',
        function () {
            var args = {},
                argOptions = this.data.args || {},
                options = this.options(),
                target = this.target || '';

            prepareCmd('doctrine:schema:validate', args, argOptions, options, target, this.async());
        }
    );

};
