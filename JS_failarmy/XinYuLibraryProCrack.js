/*
 *
 *
脚本功能：新语听书解锁会员
软件版本：4.2.9
下载地址：http://t.cn/A6xkFpuX
脚本作者：Hausd0rff
更新时间：2021.11.15
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# 新语听书解锁会员
^https?:\/\/i\.xinyulib\.com\.cn\/api\/querytoken.+ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/XinYuLibraryProCrack.js

[mitm] 

hostname = i.xinyulib.com.cn
*
*
*/


var objc = JSON.parse($response.body);

objc.data["vipstartTime"] = "2020-09-28";
objc.data["vipendtime"] = "2999-09-28";
objc.data["trueName"] = "静心คิดถึง";
objc.data["headImg"] = "https://raw.githubusercontent.com/aa75017730/Quantumult-X/main/logo/zijitouxiang.png";

$done({body: JSON.stringify(objc)});
