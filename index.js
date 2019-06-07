const mainf = require('./main');
const mconfig = require('./mconfig');

var ids = process.argv[2];
var finput = mconfig.lcsvs + ids + ".csv";
var foutput = mconfig.lvoices + ids + ".mp3";

mainf.gene(finput, foutput)