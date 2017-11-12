/**
 * NAME : UpdatePackageVersion
 * USER : FollowWinter
 * DATE : 2017/11/7
 * SUMMARY :
 */
function UpdatePackageVersionPlugin(options) {
    console.log('hello plugin')
}

UpdatePackageVersionPlugin.prototype.apply = function (compiler) {
    compiler.plugin('emit', function (compilation, callback) {
        // Create a header string for the generated file:
        var filelist = 'In this build:\n\n';

        // Loop through all compiled assets,
        // adding a new line item for each filename.
        for (var filename in compilation.assets) {
            filelist += ('- '+ filename +'\n');
        }

        // Insert this list into the webpack build as a new file asset:
        compilation.assets['filelist.md'] = {
            source: function() {
                return filelist;
            },
            size: function() {
                return filelist.length;
            }
        };

        callback();
    })
};

module.exports = UpdatePackageVersionPlugin;