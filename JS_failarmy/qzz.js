/*趣制作2.1.3版解锁Pro
支持2.1.1版本
# QX
[rewrite_local]
^https://cm.szsszykj.com/interface/GetVip.php url script-response-body https://raw.githubusercontent.com/aa75017730/Quantumult-X/main/JS_failarmy/qzz.js
[mitm]
hostname= cm.szsszykj.com
*/
let body= $response.body; 
var obj = JSON.parse(body); 
obj={
  "Header": {
    "Result": 0,
    "Msg": "67e58be26210529f"
  },
  "Content": {
    "style": [],
    "end_time": "2069-10-10 22:08:05",
    "type": 2,
    "facility_list": [],
    "system_time": "2020-09-17 22:08:43"
  }
}
$done({body: JSON.stringify(obj)});
