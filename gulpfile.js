import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { copy } from './gulp/tasks/copy.js';
import { copyCSS } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js'
import { images } from './gulp/tasks/images.js';
import { js } from './gulp/tasks/js.js';
import { zip } from './gulp/tasks/zip.js';
import { fonts } from './gulp/tasks/fonts.js';

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(copy, copyCSS, scss, images, js, html, fonts)
const dev       = gulp.series(reset , mainTasks, gulp.parallel(watcher, server));
const deployZIP = gulp.series(reset, mainTasks, zip);

export {deployZIP}

gulp.task('default', dev);
