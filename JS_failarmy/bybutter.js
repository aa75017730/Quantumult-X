/*
[rewrite_local]
^https://api4\.bybutter\.com(/v4/users/me|/v4/shop/.+) url script-response-body bybutter.js
[mitm]
hostname = api4.bybutter.com,
*/

if ($request.url.indexOf("/v4/users/me") != -1) {
re('memberships":\\[\\]', 'memberships":[{"endAt":1650842277,"id":"1","name":"普通会员","ownership":"temporary","startAt":1587425677,"usageType":"unlimited"}]')
}

if ($request.url.indexOf("/v4/shop/") != -1) {
re('ownership":"\\w+@usageType":"\\w+@remark":"[^"]+', 'ownership":"free@usageType":"unlimited@remark":"使用期限：永久')
}


function re() {
  var body = $response.body;
  if (arguments[0].includes("@")) {
   var regs = arguments[0].split("@");
   var strs = arguments[1].split("@");
   for (i = 0;i < regs.length;i++) {
    var reg = new RegExp(regs[i],"g");
    body = body.replace(reg, strs[i]);
  }
 }
  else {
   var reg = new RegExp(arguments[0],"g");
   body = body.replace(reg, arguments[1]);
 }
  $done(body);
}
