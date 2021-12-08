/*
QX:
[rewrite_local]
#全家桶会员（by卢本伟-黑黑酱）
^https://app.xunjiepdf.com/api/v4/virtualactregister url script-response-body qjt.js

Surge4.0: https://app.xunjiepdf.com/api/v4/virtualactregister

[MITM]
hostname:app.xunjiepdf.com
*/

var obj = JSON.parse($response.body);
 
obj = {
  "code": 10000,
  "message": "success",
  "userinfo": {
    "usertoken": "AolhZLPXcQnWZ0oGUxi997CSzgo92GclGJORBnGzXNxXWfpKgMoX4kbszckYxKM9gs9I8j8kIabCJJIr4d6mxHayJrSK3meXbwDT",
    "nickname": "",
    "head_portrait": "",
    "username": "hd_e8ca131ed71a36d90a69f233f6a3029b",
    "nowtime": 1586752277,
    "lastloginip": "223.80.234.61",
    "lastlogintime": 1586751017,
    "createtime": 1586751017,
    "bindmobile": "",
    "bindemail": "",
    "ispwd": 0,
    "uid": 152883130,
    "accounttype": 5,
    "vip": [{
      "id": 10828947,
      "auth_type": 1,
      "auth_value": 1905508163
    }]
  }
}


$done({body: JSON.stringify(obj)});






