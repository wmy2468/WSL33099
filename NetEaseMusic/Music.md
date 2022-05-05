首先获取CA证书并信任ios系统比较特殊，需要先下载并信任CA证书才可以。

首先用ios手机浏览器打开本页面，直接点击链接：https://raw.githubusercontent.com/nondanee/UnblockNeteaseMusic/master/ca.crt
在弹出的对话框中点击允许下载CA证书，然后进入设置>通用>描述文件，安装CA证书，并在设置>通用>关于本机>证书信任设置 开启对CA证书的信任。

然后打开Quantumult X，在配置文件区域-点击编辑-在打开的配置界面中对应的【xxx】项后面添加以下内容，如果没有对应的【xxx】项则手动输入。
第一种配置方法：

在[server_local]下面添加

http=106.52.127.72:19951, fast-open=false, udp-relay=false, tag=解锁网易云音乐

在[filter_local]下面添加

host-suffix, music.126.net, direct

在[filter_remote]下面添加

https://raw.githubusercontent.com/Hedilict/QuantumultX/master/Filter/NetEaseCloudMusic.list, tag=🙈 网易云音乐, enabled=true

在[policy]下面添加

static=🙈 网易云音乐, DIRECT, 解锁网易云音乐, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Netease_Music.png

最后保存配置并将全部内容更新后，打开网易云音乐APP即可解锁！

第二种配置方法

[server_remote]

https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/AgentNode/NeteaseMusicUnlock.list, tag=网易云音乐解锁1, img-url=pianokeys.system, update-interval=-1, opt-parser=false, enabled=true

https://raw.githubusercontent.com/O7Y0/Attached/main/UnblockNeteaseMusic/UnblockNeteaseMusic.txt, tag=网易云音乐解锁2, img-url=pianokeys.system, update-interval=-1, opt-parser=false, enabled=true

[filter_remote]

https://raw.githubusercontents.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/NetEaseMusic/NetEaseMusic.list, tag=网易云音乐, force-policy=网易音乐, update-interval=-1, opt-parser=true, enabled=true

[policy]

static=网易音乐, direct, 网音检查, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netease_Music.png

static=网音检查, resource-tag-regex=网易云, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netease_Music_Unlock.png

[task_local]

event-interaction https://raw.githubusercontents.com/I-am-R-E/QuantumultX/main/TaskLocal/NeteaseMusicUnlockCheck.js, tag=查询网易云音乐解锁, img-url=https://raw.githubusercontents.com/Orz-3/mini/master/Color/Clubhouse.png, enabled=true

注意与排查：注意所对应位置，不要全部复制后就粘贴，也不要粘贴[xxx]这个内容，提示task_local里的内容错误就升级自己的qx，配置好后在网易音乐策略选择网音检查，然后在网音检查先长按节点查看是否可用，后面的延迟是访问qx里设置的网站延迟，不代表不可用，播放音乐可能需要时间加载，目前支持商店最新版本，  
测试版未知，会员音乐提示时点x等加载。qx主界面右上角不能出现红字或不能出现问号，查看的地方在右下角小风车，然后下拉最下面的其他设置，再下拉最下面。有一些第三方网易云客户端无法使用，还有一些旧版本网易云客户端无法使用。网易云分流放在国内域名ip分流订阅之前可以避免国内域名ip分流订阅包括网易云音乐域名ip导致无法走网易云节点出现不可用情况。
网络不稳定可能导致网易云音乐打开时慢或无法使用的情况，手机卡一般在旧手机或旧处理器高版本，可能会导致时不时无法使用。必须规则模式和安装并信任qx证书及开启重写和mitm，要确定添加的已全部更新，还是不行尝试重新安装网易云音乐客户端，依然不行等一段时间后尝。
