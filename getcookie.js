function getCookie(name, key){
  var currentC = $request.headers.Cookie;
  var existC = key => $prefs.valueForKey(key);
  var create = (currentC, key) => $prefs.setValueForKey(currentC, key);
  if(currentC && existC(key)){
    currentC != existC(key) ?
    (create(currentC, key),
    $notify(name, "更新Cookie成功", "")) :
    console.log(name + "目前的cookie一致")
    }else{
        currentC != undefined ? 
        (create(currentC, key),
        $notify(name, "获取cookie成功", "")) : 
        $notify(name, "获取Cookie失败", "")
    }
}
$done({})
