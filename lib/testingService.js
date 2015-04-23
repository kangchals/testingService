"use strict";
exports.container = null;
var request = require('request');


exports.init = function(container, callback) {

    exports.container = container;

    console.log("START testingService");
};

// managerServer 에 지금 이 테스팅 서비스 모듈을 등록하기 위해 request를 보낸다.
(function send() {
/*
    var serviceName = process.argv[3],
        serviceModuleName  = process.argv[4],
        serverIPAddress  = process.argv[5],
        serverPortNumber = process.argv[6];
*/
    var serviceName = 'testingService',
        serviceModuleName  = 'kangchals/testingService',
        serverIPAddress  = '127.0.0.1',
        serverPortNumber = '8080';

    console.log(serviceName, serverIPAddress);

    if(serviceName && serverIPAddress && serverPortNumber) {

        console.log('serviceName  - ' + serviceName );

        var options = {
            method : 'post',
            uri : 'http://' + serverIPAddress + ':' + serverPortNumber + '/' + 'CS_addNewService',
            body : {
                serviceName: serviceName,
                moduleName: serviceModuleName
            },
            timeout : 10000
        };
        options.json = true;

        request(options, function(err, res) {
               var i;
                for ( i in res) {
                    if (temp.hasOwnProperty(i)) {
                        console.log( i + '  ' + i.serviceName);
                    }
                }
        });
    } else {
        callback(new Error(this.serviceName + ' service not found (send)'));
    }
})();
