let gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


gulp.task('default', () => {
    nodemon({
        script: 'index.js',
        ext: 'js',
        env: {
            PORT: 8000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', () => {
        console.log('Restarting the web server')
    })
})

