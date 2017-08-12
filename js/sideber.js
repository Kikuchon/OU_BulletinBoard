//サイドバーを開く時の関数を定義
function openSideber(){
  $('.k-sideber').show().animate({left:0},{duration:200});
  $('.k-filter').show().css({zIndex:3});
}

//サイドバーを閉じるときの関数を定義
function closeSideber(){
  $('.k-sideber').animate({left:-200},{duration:200,complete:function(){
      $('.k-sideber').hide();
      $('.k-filter').hide();
    }
  });
}

//サイドバーを開く関数
$(function(){
  $("#sidemenukey").click(function(){
    openSideber();
  });
});

//サイドバーを閉じる関数(ページ入れ替えなし)
$(function(){
  $(".k-filter").click(function(){
    closeSideber();
  });
});

//サイドバーを閉じる関数(ページ入れ替えあり)
$(function(){
  $('.k-sidebermenu').click(function(){
    var preId = $("#displayname").text();
    var newId = this.id;
    var newtxt = this.innerText;
    var preboxId = preId+'Box';
    var newboxId =newId+'Box';

     closeSideber();
     $(document.getElementById(preboxId)).hide();
     $('#pagename').html(newtxt);
     $('#displayname').html(newId);
     $(document.getElementById(newboxId)).show();

     switch (newId) {
       case "Home":
         $('.k-header').css({backgroundColor:"#eeeeee"});
         $('#mainarea').css({backgroundColor:"#F5F5F5"});
         break;
       case "Board":
         $('.k-header').css({backgroundColor:"#66BB6A"});
         $('#mainarea').css({backgroundColor:"#B9F6CA"});
         break;
       case "Link":
         $('.k-header').css({backgroundColor:"#eeeeee"});
         $('#mainarea').css({backgroundColor:"#F5F5F5"});
         break;
       case "Download":
         $('.k-header').css({backgroundColor:"#26A69A"});
         $('#mainarea').css({backgroundColor:"#F5F5F5"});
         break;

     }

  });
});
