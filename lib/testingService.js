"use strict";
exports.container = null;
var request = ('request');


exports.init = function(container, callback) {

    exports.container = container;

    console.log("START testingService");
};

// managerServer �� ���� �� �׽��� ���� ����� ����ϱ� ���� request�� ������.
(function send() {

    var serviceName = process.argv[3],
        serviceModuleName  = process.argv[4],
        serverIPAddress  = process.argv[5],
        serverPortNumber = process.argv[6];

    console.log(serviceName, serverIPAddress);

    if(serviceName && serverIPAddress && serverPortNumber) {

        console.log('send command - ' + command + '  data - ', req);

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
            console.log('FROM testingServcieJS '+res);
        });
    } else {
        callback(new Error(this.serviceName + ' service not found (send)'));
    }
})();
