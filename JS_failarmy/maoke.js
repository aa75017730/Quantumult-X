/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#猫课付费内容
^https:\/\/www\.maoke123\.com\/api\/(app\/courseDetail|app\/userIndex) url script-response-body maoke.js

商店直接搜索 猫课

MITM = www.maoke123.com
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const p2 = '/app/courseDetail';
const p3 = '/app/userIndex';


if (url.indexOf(p2) != -1) {
    obj.data.free = 0;
    obj.data.checkbuy = 1;
    body = JSON.stringify(obj);
} 
if (url.indexOf(p3) != -1) {
    obj.data.vip = 1;
    obj.data.expire_time = "2099-09-09";
    obj.data.nickname = "ios黑科技";
    body = JSON.stringify(obj);
} 
$done({body});
