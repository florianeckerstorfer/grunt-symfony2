# grunt-symfony2

> Grunt plugin for running Symfony2 commands.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-symfony2 --save-dev
```

Once you installed the plugin you can enable it inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-symfony2');
```

## The "sf2_console" task

The `sf2_console` task let's you execute arbitrary commands of your Symfony2 application.

### Overview
In your project's Gruntfile, add a section named `sf2_console` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    sf2_console: {
        options: {
            // Task-specific options go here.
        },
        your_target: {
            cmd: 'command:name',
            args: {
                // Arguments
            }
        }
    }
});
```

### Options

#### options.bin
Type: `String`
Default value: `app/console`

Path to console application that you want to use.

### Usage Examples

#### Default Options
`grunt-symfony2` uses by default `app/console` as binary to execute commands.

```js
grunt.initConfig({
    sf_console: {
        options: {},
        cache_clear_prod: {
            cmd: 'cache:clear',
            args: {
                env: 'prod'
            }
        }
    }
});
```

#### Custom Options
If you want to use a custom binary, you can change the `bin` option.

```js
grunt.initConfig({
    symfony2: {
        options: {
            bin: 'app/sf2console'
        },
        cache_clear_prod: {
            cmd: 'cache:clear',
            args: {
                env: 'prod'
            }
        }
  }
});
```

## Other "sf_*" tasks
`grunt_symfony2` contains additional tasks that allow you to quickly execute Symfony2 commands from grunt. Currently
we support the following commands:

- **sf2_cache_clear**: `cache:clear`
- **sf2_cache_warmup**: `cache:warmup`

## Author
- [Florian Eckerstorfer](http://florian.ec) ([Twitter](http://twitter.com/Florian_), [App.net](http://app.net/florian))

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### Version 0.1 (24 March 2014)

- Initial release
