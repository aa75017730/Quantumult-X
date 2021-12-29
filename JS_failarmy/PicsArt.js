/*
QX：
^https:\/\/api\.meiease\.cn\/shop\/subscription\/validate* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/PicsArt.js

Loon&QX = api.meiease.cn
*/

var obj = JSON.parse($response.body);
obj = {
  "status" : "success",
  "response" : {
    "is_eligible_for_grant" : true,
    "expire_date" : 1999900182000,
    "limitation" : {
      "max_count" : 10,
      "limits_exceeded" : false
    },
    "order_id" : "180001035733989",
    "purchase_date" : 1622095382000,
    "app" : "com.picsart.studio",
    "original_order_id" : "180001035733989",
    "winback_screen_id" : 1,
    "is_eligible_for_introductory" : false,
    "subscription_id" : "com.picsart.studio.subscription_plus_yearly",
    "is_trial" : true,
    "status" : "SUBSCRIPTION_PURCHASED",
    "plan_meta" : {

    }
  },
  "reason" : "ok"
}
;

$done({body: JSON.stringify(obj)})
