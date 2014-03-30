'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.sf2_console = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },

    console_with_task: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/cache_clear').trim();
        test.equal(actual, 'cache:clear', 'should run cache:clear.');

        test.done();
    },
    console_with_task_and_option: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/cache_clear_env_prod').trim();
        test.equal(actual, 'cache:clear --env=prod', 'should run cache:clear with --env=prod option.');

        test.done();
    },
    console_with_option: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/version').trim();
        test.equal(actual, '--version', 'should run no command with --version option.');

        test.done();
    },

    assetic_dump: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/assetic_dump').trim();
        test.equal(actual, 'assetic:dump', 'should run assetic:dump command.');

        test.done();
    },
    assets_install: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/assets_install').trim();
        test.equal(actual, 'assets:install', 'should run assets:install command.');

        test.done();
    },
    cache_clear_env_dev: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/cache_clear_env_dev').trim();
        test.equal(actual, 'cache:clear --env=dev', 'should run cache:clear command with --env=dev option.');

        test.done();
    },
    cache_warmup_env_dev: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/cache_warmup_env_dev').trim();
        test.equal(actual, 'cache:warmup --env=dev', 'should run cache:warmup command with --env=dev option.');

        test.done();
    },
    cache_warmup_env_prod: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/cache_warmup_env_prod').trim();
        test.equal(actual, 'cache:warmup --env=prod', 'should run cache:warmup --env=prod when target is "prod".');

        test.done();
    },
    doctrine_cache_clear_metadata: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_cache_clear_metadata').trim();
        test.equal(actual, 'doctrine:cache:clear-metadata', 'should run doctrine:cache:clear-metadata command.');

        test.done();
    },
    doctrine_cache_clear_query: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_cache_clear_query').trim();
        test.equal(actual, 'doctrine:cache:clear-query', 'should run doctrine:cache:clear-query command.');

        test.done();
    },
    doctrine_cache_clear_result: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_cache_clear_result').trim();
        test.equal(actual, 'doctrine:cache:clear-result', 'should run doctrine:cache:clear-result command.');

        test.done();
    },
    doctrine_database_create: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_database_create').trim();
        test.equal(actual, 'doctrine:database:create', 'should run doctrine:database:create command.');

        test.done();
    },
    doctrine_database_drop: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_database_drop').trim();
        test.equal(actual, 'doctrine:database:drop', 'should run database:drop command.');

        test.done();
    },
    doctrine_ensure_production_settings: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_ensure_production_settings').trim();
        test.equal(
            actual,
            'doctrine:ensure-production-settings',
            'should run doctrine:ensure-production-settings command.'
        );

        test.done();
    },
    doctrine_fixtures_load: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_fixtures_load').trim();
        test.equal(actual, 'doctrine:fixtures:load', 'should run doctrine:fixtures:load command.');

        test.done();
    },
    doctrine_schema_create: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_schema_create').trim();
        test.equal(actual, 'doctrine:schema:create', 'should run doctrine:schema:create command.');

        test.done();
    },
    doctrine_schema_drop: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_schema_drop').trim();
        test.equal(actual, 'doctrine:schema:drop', 'should run doctrine:schema:drop command.');

        test.done();
    },
    doctrine_schema_update: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_schema_update').trim();
        test.equal(actual, 'doctrine:schema:update', 'should run doctrine:schema:update command.');

        test.done();
    },
    doctrine_schema_update_with_force: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_schema_update_force').trim();
        test.equal(actual, 'doctrine:schema:update --force', 'should run doctrine:schema:update command with --force option.');

        test.done();
    },
    doctrine_schema_validate: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/doctrine_schema_validate').trim();
        test.equal(actual, 'doctrine:schema:validate', 'should run doctrine:schema:validate command.');

        test.done();
    },
    orm_convert_mapping: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/orm_convert_mapping_xml_src_Acme_DemoBundle_Entity').trim();
        test.equal(actual, 'orm:convert:mapping xml src/Acme/DemoBundle/Entity', 'should run orm:convert:mapping command.');

        test.done();
    },
    translation_update: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/translation_update_en_AcmeDemoBundle').trim();
        test.equal(actual, 'translation:update en AcmeDemoBundle', 'should run translation:update command.');

        test.done();
    },
    twig_lint: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/twig_lint').trim();
        test.equal(actual, 'twig:lint', 'should run twig:lint command.');

        test.done();
    }

};
