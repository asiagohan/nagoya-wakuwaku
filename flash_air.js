// flash airにリクエストを送信する
function fa_get(data){
    var url = "http://192.168.11.203/command.cgi?op=190&CTRL=0x1e&DATA=0x";
    var request = new XMLHttpRequest();
    url = url + data.toString(16)
    request.open("GET", url, false);
    request.send(null);
}
