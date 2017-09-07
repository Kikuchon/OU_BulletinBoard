/*$(function(){
  //load時のboardcontentの書き込み
  //------------------------------------------------//
  //アクセス時にgasにリクエスト送信→レスポンスを書き込み//
  //------------------------------------------------//
  for (var i = 1; i <=6; i++) {
    var content = '<table id="boardcontent">'+'<tr>'+'<td>'+'<h1>'+'TEST'+i+'</h1>'+'</td>'+'</tr>'+'<tr>'+'<td>'+'test'+i+'<td>'+'</tr>'+'</table>';
    //gasのreturnで書き込み↑//
    $('.board-content').append(content);
  }
})*/

$(function(){
  function startRequest() {
    request("DataLoad",["home"],function(Data) {
      if(Data.error) {
        alert("error");
      }
      else {
        var res = Data.response.result;
        $('.board-content').html(res);
        loaded();
      }
    });
  }
})
