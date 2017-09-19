/**
 * NAME : index
 * USER : FollowWinter
 * DATE : 2017/9/12
 * SUMMARY :
 */


function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());