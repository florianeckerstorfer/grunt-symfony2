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

    grunt.registerMultiTask('sf2_assetic_dump', 'Grunt task for running Symfony2 assetic:dump commands.', function () {
        var args = this.data.args || {},
            options = this.options();

        prepareCmd('assetic:dump', args, options, this.async());
    });

    grunt.registerMultiTask(
        'sf2_assets_install',
        'Grunt task for running Symfony2 assets:install commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('assets:install', args, options, this.async());
        }
    );

    grunt.registerMultiTask('sf2_twig_lint', 'Grunt task for running Symfony2 twig:linkt commands.', function () {
        var args = this.data.args || {},
            options = this.options();

        prepareCmd('twig:lint', args, options, this.async());
    });

    grunt.registerMultiTask(
        'sf2_translation_update',
        'Grunt task for running Symfony2 translation:update commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('translation:update', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_orm_convert_mapping',
        'Grunt task for running Symfony2 orm:convert:mapping commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('orm:convert:mapping', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_doctrine_cache_clear_metadata',
        'Grunt task for running Symfony2 doctrine:cache:clear-metadata commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('doctrine:cache:clear-metadata', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_doctrine_cache_clear_query',
        'Grunt task for running Symfony2 doctrine:cache:query commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('doctrine:cache:query', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_doctrine_cache_clear_result',
        'Grunt task for running Symfony2 doctrine:cache:result commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('doctrine:cache:result', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_doctrine_database_create',
        'Grunt task for running Symfony2 doctrine:database:create commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('doctrine:database:create', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_doctrine_database_drop',
        'Grunt task for running Symfony2 doctrine:database:drop commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('doctrine:database:drop', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_doctrine_ensure_production_settings',
        'Grunt task for running Symfony2 doctrine:ensure-production-settings commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('doctrine:ensure-production-settings', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_doctrine_fixtures_load',
        'Grunt task for running Symfony2 doctrine:fixtures:load commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('doctrine:fixtures:load', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_doctrine_schema_create',
        'Grunt task for running Symfony2 doctrine:schema:create commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('doctrine:schema:create', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_doctrine_schema_drop',
        'Grunt task for running Symfony2 doctrine:schema:drop commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('doctrine:schema:drop', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_doctrine_schema_update',
        'Grunt task for running Symfony2 doctrine:schema:update commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('doctrine:schema:update', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sf2_doctrine_schema_validate',
        'Grunt task for running Symfony2 doctrine:schema:validate commands.',
        function () {
            var args = this.data.args || {},
                options = this.options();

            prepareCmd('doctrine:schema:validate', args, options, this.async());
        }
    );

};
