# grunt-symfony2

> Grunt plugin for running Symfony2 commands.

[![Build Status](https://travis-ci.org/florianeckerstorfer/grunt-symfony2.svg?branch=master)](https://travis-ci.org/florianeckerstorfer/grunt-symfony2)

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

## The "sf2-console" task

The `sf2-console` task let's you execute arbitrary commands of your Symfony2 application.

### Overview
In your project's Gruntfile, add a section named `sf2-console` to the data object passed into `grunt.initConfig()`.

```js
'sf2-console': {
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
'sf2-console': {
    options: {},
    cache_clear_prod: {
        cmd: 'cache:clear',
        args: {
            env: 'prod'
        }
    }
}
```

#### Custom Options
If you want to use a custom binary, you can change the `bin` option.

```js
'sf2-console': {
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
```

### Environment Auto Detection
The execution environment of a task can be auto detected based on the target. If the targets name is either `prod`,
`dev` or `staging` and the `env` argument is not present the task uses the target name as environment.

#### Example

The following task executes automatically in `prod` environment.

```js
'sf2-cache-clear': {
    options: {},
    prod: {}
}
```

## Other "sf-*" tasks
`grunt-symfony2` contains additional tasks that allow you to quickly execute Symfony2 commands from grunt. The tasks
work exactly like the `sf2-console` task, you just don't need to provide the `cmd` option. Arguments and auto detection
of the environment are also supported. Currently we support the following commands:

- **sf2-assetic-dump**: `assetic:dump`
- **sf2-assets-install**: `assets:install`
- **sf2-cache-clear**: `cache:clear`
- **sf2_cache_warmup**: `cache:warmup`
- **sf2-doctrine-cache-clear-metadata**: `doctrine:cache:clear-metadata`
- **sf2-doctrine-cache-clear-query**: `doctrine:cache:clear-query`
- **sf2-doctrine-cache-clear-result**: `doctrine:cache:clear-result`
- **sf2-doctrine-database-create**: `doctrine:database:create`
- **sf2-doctrine-database-drop**: `doctrine:database:drop`
- **sf2-doctrine-ensure-production-settings**: `doctrine:ensure-production-settings`
- **sf2-doctrine-fixtures-load**: `doctrine:fixtures:load`
- **sf2-doctrine-schema-create**: `doctrine:schema:create`
- **sf2-doctrine-schema-drop**: `doctrine:schema:drop`
- **sf2-doctrine-schema-update**: `doctrine:schema:update`
- **sf2-doctrine-schema-validate**: `doctrine:schema:validate`
- **sf2-orm-convert-mapping**: `orm:convert:mapping`
- **sf2-translation-update**: `translation:update`
- **sf2-twig-lint**: `twig:lint`

### Examples

Set the value to `true` if you want to use an option without value:

```js
'sf2-doctrine-schema-update': {
    dev: {
        args: { force: true }
    }
}
```

It's a little bit confusing, but you have to put arguments (speaking in Symfony2 console terms) outside of the `args` array.

```js
'sf2-orm-convert-mapping': {
    dev: {
        'to-type': 'xml',
        'dest-path': 'src/Acme/DemoBundle/Entity'
    },
    options: {
        bin: 'test/fixtures/console'
    }
}
```

## Author
- [Florian Eckerstorfer](http://florian.ec) ([Twitter](http://twitter.com/Florian_), [App.net](http://app.net/florian))

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### Version 0.3 (30 March 2014)

- Added support for arguments in tasks

### Version 0.2 (30 March 2014)

- Improved task names
- Additional tests

### Version 0.1 (24 March 2014)

- Initial release
