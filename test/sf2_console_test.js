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
    setUp: function(done) {
        // setup here if necessary
        done();
    },
    cache_clear_env_prod: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/cache_clear_env_prod');
        var expected = grunt.file.read('test/expected/cache_clear_env_prod');
        test.equal(actual, expected, 'should run cache:clear with --env=prod option.');

        test.done();
    },
    version: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/version');
        var expected = grunt.file.read('test/expected/version');
        test.equal(actual, expected, 'should run no command with --version option.');

        test.done();
    }

};
