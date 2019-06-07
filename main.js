const fs = require('fs-extra');
const iconv = require('iconv-lite');
const AipSpeechClient = require('baidu-aip-sdk').speech;
const mconfig = require('./mconfig');

exports.gene = function(finput, fouput) {
    let prostr = readf(finput);
    prostr.then((res) => {
        getvoice(res, fouput)
    });
}

function readf(_location) {
    return new Promise((resolve, reject) => {
        let proreadf = fs.readFile(_location);
        proreadf.then((data) => {
            let str = iconv.decode(data, 'GB2312');
            resolve(str);
        });
    })
}

function getvoice(_vsrting, _vname) {
    return new Promise((resolve, reject) => {
        let client = new AipSpeechClient(mconfig.APP_ID, mconfig.API_KEY, mconfig.SECRET_KEY);

        let options = { spd: 3, per: 1, vol: 10 };

        let progene = client.text2audio(_vsrting, options);
        progene.then((result) => {
            let prowr = fs.writeFile(_vname, result.data);
            prowr.then(() => {
                resolve();
            })
        })
    })
}
