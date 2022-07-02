/*
*
###############################
TG Channel：https://t.me/QuantX
苹果商店下载: 讯游手游加速器
修改内容：解锁永久会员 
注意事项：每次解锁需启动圈叉
##############################

本地重写
[rewrite_local]
^https:\/\/api\.xunyou\.mobi\/api\/v1\/android\/sessions url script-response-body https://raw.githubusercontent.com/WSL33099/QuantumultX/main/Script/Xyjsq.js

[mitm] 
hostname = api.xunyou.mobi
*
*
*/

var obj = JSON.parse($response.body); 
// 

obj ={"registerTime":"2022-04-13 08:19:02","accelToken":"eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJjb250ZW50Ijoie1widGVuYW50XCI6XCJhbmRyb2lkXCIsXCJhY2NvdW50XCI6XCI3NmRjZDIwYi1hNWE1LTRlZjMtYTM3MS0xOTBkN2ViMWE5YTZcIixcInNjb3Blc1wiOltcIlZhdWx0XCIsXCJCYWNrYm9uZVwiLFwiSHJcIixcIk11bHRpXCIsXCJNdGtcIl0sXCJzaG9ydElkXCI6XCIxOTU3ODgzODY4XCIsXCJleHBpcmVUaW1lXCI6MTY1NjIxNTM3NTgyOCxcInN0YXR1c1wiOjQsXCJjcmVkaXRTdGFydFwiOjE2NTYyMTE3NzUsXCJjcmVkaXRMZW5ndGhcIjowLFwiY3JlZGl0VHlwZVwiOjEsXCJjcmVkaXRJRFwiOlwiYW5kcm9pZFxcdTAwMjZwcm9tb3RlT3JkZXJcIn0iLCJleHAiOjE2NTYyMTUzNzUsImlhdCI6MTY1NjIxMTc4OCwic3ViIjoiIn0.U54rG7h1h7KGF6ZAhOVB6bDAYv5nYY8CobObr5mZvukt5ebkrxn9gCAvxPp_HRHTkYO7X8RxVGoT-8-QFltckrgBIxI0Qp_8aduJlwjGDCLOXT5IAxXHQRt6tACC8NOeG1SuwI4CZeFjWaWCLVJX5Mu_hXsFMTFK4xch130DjYI","expiresIn":3587,"shortId":"1957883868","userId":"76dcd20b-a5a5-4ef3-a371-190d7eb1a9a6","userStatus":4,"totalAccelDays":6,"contractStatus":1,"accelExpiredTime":"2099-09-09 11:49:35","currentTime":1908676175,"scopes":{"multi":1908676175,"qos":1908676175,"backbone":1908676175,"mtk":1908676175,"gameConsole":1908676175},"purchaseTimes":0,"unionPurchaseTimes":0,"useContractDiscount":false,"creditStart":1908676175,"creditLength":0,"creditType":1,"creditID":"android0026promoteOrder","consoleDrawState":2,"gameConsolePurchaseTimes":0,"userType":5}
$done({body:JSON.stringify(obj)});
// 
