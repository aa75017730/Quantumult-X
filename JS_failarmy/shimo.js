/*
石墨文档解锁VIP
https://shimo.im/lizard-api/users/me

QX
# 石墨文档 vip
^https:\//shimo.im\/lizard-api\/users\/me url script-response-body https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/shimo.js

Surge 4.0+
石墨文档 vip= type=http-response,pattern=^https:\//shimo.im\/lizard-api\/users\/me,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/shimo.js
#hostname = shimo.im
*/

let obj = JSON.parse($response.body);
    obj.membership = {
    "accountTypeExpiredAt": "2099-12-30T16:00:00.000Z",
    "accountTypeCreatedAt": "2020-03-25T13:09:31.000Z",
    "accountType": "personal_premium",
    "isEnterprisePremium": true,
    "isExpired": false,
    "isNewDing": false,
    "isOfficial": true
  }
  obj.accountMetadata= {
    "isDingtalk" : false,
    "isFreeEnterprise" : false,
    "isTrial" : false,
    "expiredAt" : {
      "seconds" : 4102415999,
      "nanos" : 55173442
    },
    "isWework" : false,
    "isExpired" : false,
    "isEnterprise" : false,
    "isPersonalPremium" : true,
    "isEnterprisePremium" : true,
    "isEnterpriseLight" : false
  }
$done({body: JSON.stringify(obj)});
