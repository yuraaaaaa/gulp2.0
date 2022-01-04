# GULP
## Collector structure GULP
### 1. Folder "gulp"
#### a) Folder "config"
##### there are files in the folder, namely
    -ftp.js     (for uploading to the ftp-server);
    -path.js    (file with the path used in the prijects);
    -plugins.js (file for plug-ins during assembly);

#### b) Folder "tasks"
##### there are files in the folder, namely
    -copy.js  (file for copying ready-made items during development)
    -html.js  (analogy with the file above, only for HTML)
    -reset.js (file to clear the "dist folder")

export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "IMAGES",
                message: "Error <%= error.message%>",
            })
        ))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream());
}
