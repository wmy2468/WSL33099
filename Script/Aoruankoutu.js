/*
###############################
TG Channel：https://t.me/QuantX
苹果商店下载: 傲软抠图
修改内容：解锁永久会员 
注意事项：每次解锁需启动圈叉
##############################

本地重写
[rewrite_local]
^https:\/\/gw\.aoscdn\.com\/base\/vip\/client\/authorizations url script-response-body https://raw.githubusercontent.com/WSL33099/QuantumultX/main/Script/Aoruankoutu.js
[mitm]
hostname=gw.aoscdn.com


*/


 
var gjwj = JSON.parse($response.body); 
// 

gjwj ={
  "status": 200,
  "message": "success",
  "data": {
    "license_type": "free",
    "period_type": "trial",
    "is_activated": 1,
    "remain_days": 0,
    "will_expire": 1,
    "allowed_device_count": 1,
    "begin_activated_time": 1647668173,
    "durations": 88888,
    "vip_special": 1,
    "has_buy_extend": 0,
    "has_present": 0,
    "product_id": 369,
    "is_lifetime": 8888,
    "expired_at": 1,
    "expire_time": "4094350700",
    "device_id": 2200207779,
    "exist_trial": 1
  }
}

$done({body:JSON.stringify(gjwj)});
