$(function(){
  // htmlの作成
  function buildHTML(message){
    var image = message.image ? `<img src="${message.image}"> ` : ""
    var html =
     `<div class="chat-main__message" data-message-id=${message.id}>
        <div class="chat-main__message-name">
          ${message.user_name}
        </div>
        <div class="chat-main__message-time">
          ${message.date}
        </div>
        <div class="lower-message">
          <p class="chat-main__message-body">
            ${message.content}
          </p>
        </div>
      </div>`
    return html;
  }
// 非同期通信
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
     .done(function(data){
       var html = buildHTML(data);
       var messageList = $('.chat-main__body-message-list')
       messageList.append(html);
       messageList.animate({scrollTop: messageList[0].scrollHeight}, 'fast');
       $('#new_message')[0].reset();
     })
     .fail(function(){
      alert('error(失敗しました)');
    })
    return false;
  });


// 自動更新
//   setInterval(function() {
//       console.log("aaa")
//    } , 5000 );

});
