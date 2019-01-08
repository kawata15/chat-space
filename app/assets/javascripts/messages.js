$( "document" ).on(function(){

  function buildHTML(message){
    var image = message.image ? `<img src="${message.image}"> ` : ""
    var html =
     `<div class="message" data-message-id=${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.date}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
    return html;
  }

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
       $('#new_form')[0].reset();
     })
     .fail(function(){
      alert('error(失敗しました)');
    })
    return false;
  });
});
