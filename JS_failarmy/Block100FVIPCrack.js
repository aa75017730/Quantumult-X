/*
 *
 *
脚本功能：拦截100解锁永久会员
软件版本：3.0.2【最高支持版本】
下载地址：http://t.cn/A6MLFAJf
脚本作者：Hausd0rff
特别鸣谢：感谢@凉意大佬提供的数据
更新时间：2022-02-08
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 拦截100解锁永久超级会员
^https?:\/\/tagit\.hyhuo\.com\/cypt\/block100\/get_vip_info$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/Block100FVIPCrack.js

[mitm] 

hostname = tagit.hyhuo.com
*
*
*/


var body = $response.body;
body = "lvCQG8cCxqficLk+LttK+OvjY+kGEoGHRWop15GMRVg1TU8oQTFHsNCJIEJMEYYfDjqpfM0sxeXRILHsoullvHqzmN6X7HmMRHqOjr3G0AXp2FtlU91l2+2ZbtUpL8p2cc6Y6JdCOUiADpqc4GZktNpGoED1rMVltIjdbhLGVgO0tYaNtQ/dV52tpmn+Lcm+/3pCU8/wXdnCfkkMB0QZc6psJavFUF6dLfDRzagLuxiwgOQmNQraUG99e4YLDmoQ";
$done({ 
    body 
});
