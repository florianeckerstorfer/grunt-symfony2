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
    sf2_console: {
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
    sf2_console: {
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

### Environment Auto Detection
The execution environment of a task can be auto detected based on the target. If the targets name is either `prod`,
`dev` or `staging` and the `env` argument is not present the task uses the target name as environment.

#### Example

The following task executes automatically in `prod` environment.

```js
grunt.initConfig({
    sf2_cache_clear: {
        options: {},
        prod: {}
    }
});
```

## Other "sf_*" tasks
`grunt_symfony2` contains additional tasks that allow you to quickly execute Symfony2 commands from grunt. The tasks
work exactly like the `sf2_console` task, you just don't need to provide the `cmd` option. Arguments and auto detection
of the environment are also supported. Currently we support the following commands:

- **sf2_assetic_dump**: `assetic:dump`
- **sf2_assets:install**: `assets:install`
- **sf2_cache_clear**: `cache:clear`
- **sf2_cache_warmup**: `cache:warmup`
- **sf2_doctrine_cache_clear_metadata**: `doctrine:cache:clear-metadata`
- **sf2_doctrine_cache_clear_query**: `doctrine:cache:clear-query`
- **sf2_doctrine_cache_clear_result**: `doctrine:cache:clear-result`
- **sf2_doctrine_database_create**: `doctrine:database:create`
- **sf2_doctrine_database_drop**: `doctrine:database:drop`
- **sf2_doctrine_ensure_production_settings**: `doctrine:ensure-production-settings`
- **sf2_doctrine_fixtures_load**: `doctrine:fixtures:load`
- **sf2_doctrine_schema_create**: `doctrine:schema:create`
- **sf2_doctrine_schema_drop**: `doctrine:schema:drop`
- **sf2_doctrine_schema_update**: `doctrine:schema:update`
- **sf2_doctrine_schema_validate**: `doctrine:schema:validate`
- **sf2_orm_convert_mapping**: `orm:convert:mapping`
- **sf2_translation_update**: `translation:update`
- **sf2_twig_lint**: `twig:lint`

## Author
- [Florian Eckerstorfer](http://florian.ec) ([Twitter](http://twitter.com/Florian_), [App.net](http://app.net/florian))

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### Version 0.1 (24 March 2014)

- Initial release
