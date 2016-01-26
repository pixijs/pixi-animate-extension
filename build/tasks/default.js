module.exports = function(gulp, options, plugins) {
    gulp.task('default', function(done){

        var debug = options.argv.debug;

        plugins.gutil.log("+-------------------+".green);
        plugins.gutil.log("|    PixiAnimate    |".green);
        plugins.gutil.log("+-------------------+".green);
        plugins.gutil.log("Mode: ".gray, (debug ? "Debug" : "Release").yellow);
        
        var tasks = [];

        tasks.push('clean', 'stage');

        // Turn on remote debugging
        if (debug) {
            tasks.push('remote-debug');
        }

        tasks.push(
            'vendor-copy',
            'build',
            'move',
            'package',
            'clean-stage',
            'uninstall',
            'pre-install',
            'install',
            done
        );

        plugins.sequence.apply(plugins.sequence, tasks);
    });  
};