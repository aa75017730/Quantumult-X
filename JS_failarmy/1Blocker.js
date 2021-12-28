/*
Loon：
http-response ^https:\/\/api\.revenuecat\.com\/v1\/receipts requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/aa75017730/Quantumult-X/main/JS_failarmy/1Blocker.js
QX：
^https:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/aa75017730/Quantumult-X/main/JS_failarmy/1Blocker.js

Loon&QX = api.revenuecat.com
*/

var obj = JSON.parse($response.body);
obj = {
  "request_date": "2021-07-19T05:46:36Z",
  "request_date_ms": 1626673596608,
  "subscriber": {
    "entitlements": {
      "premium": {
        "expires_date": "2999-08-02T05:45:42Z",
        "grace_period_expires_date": null,
        "product_identifier": "blocker.ios.subscription.yearly",
        "purchase_date": "2021-07-19T05:45:42Z"
      }
    },
    "first_seen": "2021-07-19T05:41:16Z",
    "last_seen": "2021-07-19T05:41:16Z",
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "EED0A7DC-9A59-4743-BAE0-1E17A209E000",
    "original_application_version": "1035",
    "original_purchase_date": "2021-07-19T05:40:07Z",
    "other_purchases": {},
    "subscriptions": {
      "blocker.ios.subscription.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2999-08-02T05:45:42Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2021-07-19T05:45:43Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2021-07-19T05:45:42Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};

$done({body: JSON.stringify(obj)})
     
