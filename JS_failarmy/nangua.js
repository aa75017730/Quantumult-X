/*  
#南瓜电影  4.7.3[文明使用，请勿用于牟利,临期我会更新id]
hostname = p.doras.api.vcinema.cn
^https\:\/\/p\.doras\.api\.vcinema\.cn\/v5\.0\/user\/\d+$
*/
let obj = JSON.parse($response.body);
obj.content.user_id = "1088707";//2020-03-01
//obj.content.user_vip_end_date = "2088.08.08";
//obj.content.user_vip_state = "2";
$done({body: JSON.stringify(obj)});
