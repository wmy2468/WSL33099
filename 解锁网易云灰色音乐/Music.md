首先获取CA证书并信任ios系统比较特殊，需要先下载并信任CA证书才可以。

首先用ios手机浏览器打开本页面，直接点击链接：https://raw.githubusercontent.com/nondanee/UnblockNeteaseMusic/master/ca.crt
在弹出的对话框中点击允许下载CA证书，然后进入设置>通用>描述文件，安装CA证书，并在设置>通用>关于本机>证书信任设置 开启对CA证书的信任。

然后打开Quantumult X，在配置文件区域-点击编辑-在打开的配置界面中对应的【xxx】项后面添加以下内容，如果没有对应的【xxx】项则手动输入。

1、在[server_local]下面添加：

http=106.52.127.72:19951, fast-open=false, udp-relay=false, tag=解锁网易云音乐

2、在[filter_local]下面添加：

host-suffix, music.126.net, direct

3、在[filter_remote]下面添加：

https://raw.githubusercontent.com/Hedilict/QuantumultX/master/Filter/NetEaseCloudMusic.list, tag=🙈 网易云音乐, enabled=true

4、在[policy]下面添加：

static=🙈 网易云音乐, DIRECT, 解锁网易云音乐, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Netease_Music.png

最后保存配置并将全部内容更新后，打开网易云音乐APP即可解锁！
