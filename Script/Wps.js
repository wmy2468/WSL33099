/******************************

脚本功能：WPS解锁稻壳会员
软件版本：11.26.0
下载地址：http://t.cn/QuantX
脚本作者：Hausd0rff
*******************************
[rewrite_local]
# > WPS解锁稻壳会员
^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips url script-response-body https://raw.githubusercontent.com/WSL33099/QuantumultX/main/Script/Wps.js
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/WSL33099/QuantumultX/main/Script/Wps.js

[mitm] 
hostname = *.docer.wps.cn, vipapi.wps.cn, account.wps.cn

*******************************/

var body = $response.body;
var objc = JSON.parse(body);

objc.vips = [
    {
      "memberid" : 12,
      "expire_time" : 32495476149,
      "name" : "稻壳会员",
      "has_ad" : 0,
      "enabled" : null
    }
];

body = JSON.stringify(objc);
$done({ 
    body 
});
