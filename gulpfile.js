//importar las funciones especificas de la API de gulp que vamos a utilizar
const {src,dest, series, parallel, watch} = require('gulp');

//importar los paquetes con los que vamos a trabajar
const sass = require('gulp-sass')
//importar browsersync
const browsersync = require('browser-sync').create();


function helloWorldTask(done){
    console.log("Hello horld! :D");
    done();
}


//constantes de trabajo
const file = {
    scssPath: 'src/scss/**/*.scss'
}
function scssTask(d){
    return src(file.scssPath)
        .pipe(sass())
        .pipe(dest('dist/css'));
}
function watchTask(){
    watch(
        [file.scssPath, files.htmlPath],seriesscssTask)

}function serveTask(d){
    browsersync.init({
        server: {
            baseDir: './dist/'
        }
    });
    d();
}
function reloadTask(d){
    browsersync.reload();
    d();
}
exports.default = helloWorldTask;
exports.css = series(scssTask, serveTask, watchTask);