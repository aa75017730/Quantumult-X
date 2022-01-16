/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:
[rewrite_local]
#Prisma解锁订阅@ioshkj007
^https:\/\/appapi\.neuralprisma\.com\/receipt\/ios\/status\/prisma\/.+ url script-response-body prisma.js

[mitm]
hostname = appapi.neuralprisma.com,

*/

let obj = JSON.parse($response.body);
obj = {
  "status": "ok",
  "is_valid": true,
  "expiration_date": "2099-09-09T06:16:52Z",
  "is_trial": false,
  "processing_count": 5,
  "is_introductory_used": true,
  "product_id": "",
  "promotional_offer_id": "",
  "is_grace_period": false,
  "auto_renew_enabled": false,
  "is_in_billing_retry_period": false,
  "subscription_type": "annual",
  "platform": "ios"
}

$done({body: JSON.stringify(obj)});
