// imports
var fs = require('fs'),
    scene = require('./scene');

//nodejs �������е�console.log��browser��ߵĲ�һ�����԰�browser��log��������..
module.exports = function (logger) {
    logger("img_data generating");
     //var start;
     //var end;
     //start = new Date();
    //var out = fs.createWriteStream(filePath);
    // end = new Date();
    // timeElasped(start, end, 'create stream');

    // start = new Date();
    var current = scene.current;
    var instance = new current();
    // end = new Date();
    // timeElasped(start, end, 'create instance');

    // start = new Date();
    var canvas = instance.canvas;

    var ret=canvas.toDataURL();
    logger("img_data generated");
    return ret;

    //canvas.pngStream().pipe(out);

    // timeElasped(start, end, 'write to stream');
};

// function timeElasped(start, end, name) {
//     var elasped = end - start;
//     console.log(name + ": " + elasped);
// }
