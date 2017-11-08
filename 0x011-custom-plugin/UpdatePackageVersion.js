/**
 * NAME : UpdatePackageVersion
 * USER : FollowWinter
 * DATE : 2017/11/7
 * SUMMARY :
 */
function UpdatePackageVersion(options) {
    // Configure your plugin with options...
}

UpdatePackageVersion.prototype.apply = function (compiler) {
    compiler.plugin("compile", function (params) {
        console.log("The compiler is starting to compile...");
    });

    compiler.plugin("compilation", function (compilation) {
        console.log("The compiler is starting a new compilation...");

        compilation.plugin("optimize", function () {
            console.log("The compilation is starting to optimize files...");
        });
    });

    compiler.plugin("emit", function (compilation, callback) {
        console.log("The compilation is going to emit files...");
        callback();
    });
};

module.exports = UpdatePackageVersion;