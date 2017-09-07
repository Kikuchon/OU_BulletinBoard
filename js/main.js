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
