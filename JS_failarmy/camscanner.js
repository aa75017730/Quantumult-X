/*
surge
扫描全能 pro = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/aa75017730/Quantumult-X/main/JS_failarmy/camscanner.js,type=http-response,pattern=https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\?,script-update-interval=0

QX
https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/aa75017730/Quantumult-X/main/JS_failarmy/camscanner.js
hostname = api-cs.intsig.net
*/

let body = JSON.parse($response.body)
    body.data.psnl_vip_property = {"renew_method": "appstore",
      "initial_tm": "1614867690",
      "svip": 1,
      "auto_renewal": true,
      "ms_first_pay": 0,
      "pending": 0,
      "group2_paid": 0,
      "inherited_flag": 0,
      "nxt_renew_tm": "9915126887",
      "level_info": {
        "level": 1,
        "days": 1,
        "end_days": 30
      },
      "group1_paid": 1,
      "ys_first_pay": 0,
      "renew_type": "year",
      "expiry": 9915130487,
      "grade": 2,
      "last_payment_method": "appstore",
      "product_id": "com.intsig.camscanner.premiums.oneyear.autorenewable.svip.low"}
    $done({body:JSON.stringify(body)})
