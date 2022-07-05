
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://a.591master.com/5.0.0/uicommon/reward`;
const method = `POST`;
const headers = {
'Accept' : `*/*`,
'Cookie' : `AT=44027990a80%251%2517006422%2547612%2515502511%251657019667`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `a.591master.com`,
'User-Agent' : `CPUMonitor/5.0.5 (iPhone; iOS 15.5; Scale/3.00)`,
'X-BBT-RID' : `8e93a14c6af664c38234a507fc1ea8a6`,
'X-BBT-TR' : `sysv=ios15.5&hw=iPhone10%2C3&version=ios5.0.5.552&openudid=d7c3a9c205dae4973a127f52bdb704ce3d98efbb&width=1125&height=2436&ts=1657019864&bbtid=f661b9bb88bf38e7b3fbd22546f7eab3&timeMachine=1657019864`,
'Accept-Language' : `zh-Hans-CN;q=1, en-CN;q=0.9`
};
const body = `rsa=dcO1tM9mTTQ%2Bph7m8Ox/C3sTKgovpI05f1FDY4MGLSSCE3D84pLVgjiiHG0m/mKKrVtrsFf/%2BRHqPSh/fmCAUQ%3D%3D`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
