/*


苹果商店下载: 扫描全能王

修改内容：解锁高级账户 

注意事项：每次解锁需启动圈叉



[rewrite_local]

# 扫描全能王 pro
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/WSL33099/QuantumultX/main/Script/Smw.JS


主机名MITM

ap*.intsig.net


*/



let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"7955134580"}}};
$done({body: JSON.stringify(obj)});
