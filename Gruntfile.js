/*
* grunt-symfony2
* https://github.com/florianeckerstorfer/grunt-symfony2
*
* Copyright (c) 2014 Florian Eckerstorfer
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>',
            ],
            options: {
                jshintrc: '.jshintrc',
            },
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp'],
        },

        // Configuration to be run (and then tested).
        'sf2-console': {
            console_with_task: {
                cmd: 'cache:clear'
            },
            console_with_task_and_option: {
                cmd: 'cache:clear',
                args: { env: 'prod' }
            },
            console_with_option: {
                args: { 'version': true }
            },
            options: {
                bin: 'test/fixtures/console',
            }
        },

        'sf2-assetic-dump': {
            assetic_dump: {},
            options: {
                bin: 'test/fixtures/console',
            }
        },
        'sf2-assets-install': {
            assets_install: {},
            options: {
                bin: 'test/fixtures/console',
            }
        },
        'sf2-cache-clear': {
            dev: {
                args: { env: 'dev' }
            },
            options: {
                bin: 'test/fixtures/console',
            }
        },
        'sf2-cache-warmup': {
            dev: {
                args: { env: 'dev' }
            },
            prod: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-doctrine-cache-clear-metadata': {
            doctrine_cache_clear_metadata: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-doctrine-cache-clear-query': {
            doctrine_cache_clear_query: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-doctrine-cache-clear-result': {
            doctrine_cache_clear_result: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-doctrine-database-create': {
            doctrine_database_create: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-doctrine-database-drop': {
            doctrine_database_drop: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-doctrine-ensure-production-settings': {
            doctrine_ensure_production_settings: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-doctrine-fixtures-load': {
            doctrine_fixtures_load: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-doctrine-schema-create': {
            doctrine_schema_create: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-doctrine-schema-drop': {
            doctrine_schema_drop: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-doctrine-schema-update': {
            doctrine_schema_update: {},
            doctrine_schema_update_with_force: {
                args: {
                    'force': true
                }
            },
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-doctrine-schema-validate': {
            doctrine_schema_validate: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-orm-convert-mapping': {
            orm_convert_mapping: {
                'to-type': 'xml',
                'dest-path': 'src/Acme/DemoBundle/Entity'
            },
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-translation-update': {
            orm_translation_update: {
                locale: 'en',
                bundle: 'AcmeDemoBundle'
            },
            options: {
                bin: 'test/fixtures/console'
            }
        },
        'sf2-twig-lint': {
            orm_twig_lint: {},
            options: {
                bin: 'test/fixtures/console'
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js'],
        },

        // Linting.
        jslint: { // configure the task
            tasks: {
                src: [
                    'tasks/*.js'
                ],
                exclude: [],
                directives: {
                    node: true
                },
                options: {
                    errorsOnly: true, // only display errors
                    failOnError: false, // defaults to true
                }
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-jslint');

    grunt.registerTask(
        'sf2',
        [
            'sf2-console',
            'sf2-assetic-dump',
            'sf2-assets-install',
            'sf2-cache-clear',
            'sf2-cache-warmup',
            'sf2-doctrine-cache-clear-metadata',
            'sf2-doctrine-cache-clear-query',
            'sf2-doctrine-cache-clear-result',
            'sf2-doctrine-database-create',
            'sf2-doctrine-database-drop',
            'sf2-doctrine-ensure-production-settings',
            'sf2-doctrine-fixtures-load',
            'sf2-doctrine-schema-create',
            'sf2-doctrine-schema-drop',
            'sf2-doctrine-schema-update',
            'sf2-doctrine-schema-validate',
            'sf2-orm-convert-mapping',
            'sf2-translation-update',
            'sf2-twig-lint'
        ]
    );

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'sf2', 'nodeunit', 'jslint']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};
