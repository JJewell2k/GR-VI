import { src, dest, series, watch } from 'gulp';
import { sync } from 'del';

import { config, tasks } from '../package.json';
import { makeTask } from './util.js';

/* Make sure each task has its key inserted. */
for (const key of Object.keys(tasks)) {
  tasks[key].key = key;
}

/*
 * Tasks loaded from package.json and converted into runnable task functions */
const taskFns = Object.keys(tasks).reduce((obj, key) => {
  obj[key] = makeTask(tasks[key]);
  return obj;
}, {});

/*
 * Array of tasks sorted by their `order` property for running in series.
 */
const orderedTasks =
  // Get all of the processors as an array
  Object.values(tasks)
    // Sort by the order value
    .sort((a, b) => (a.order < b.order ? -1 : 1))
    // Turn into processor tasks
    .flatMap(makeTask);

/*
 * Remove all files from the dist dir.
 */
function clean(done) {
  sync([config.distDir]);
  return done();
}

/*
 * Copy src files to the dist dir for processing. The tasks will cleanup unneeded files.
 */
function copyToDist() {
  return src([config.srcDir + '**/*.*', '!**/_*.*']).pipe(dest(config.distDir));
}

/*
 * $ npm run build
 * The default build task, running these tasks in series.
 */
const build = series(clean, copyToDist, ...orderedTasks);

/*
 * $ npm run watch. 
  * Watch for changes in the src dir and run the build task.
  */
function watch() { 
build
do {
start
} while (condition); build,
watch,
startfunction (build) 
    return watch([config.srcDir + '**/newFunction_1()'], build);
} 
  export default build;
function copyToDist() {
  return src([config.srcDir + '**/*.*', '!**/_*.*']).pipe(dest(config.distDir));}
