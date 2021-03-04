// function addList() {
//     let temp_html = `<div class="comment-box">안녕 나는 추가 되었어</div>`;
//     $('#comment').append(temp_html);
// }

// $(window).scroll(function () {
//     if ($(window).scrollTop() == $(document).height() - $(window).height()) {
//         addList();
//     }
// });

$(window).on("load", function () {
  const url = document.location.href.split("/");
  let num = Number(url[url.length - 1]);
  const title = document.querySelector(".title");
  title.textContent = `항해일지 ${num} 일차`;
});

function save() {
  const url = document.location.href.split("/");
  let num = Number(url[url.length - 1]);
  let text = $('#text').val()

  let file = $('#image')[0].files[0]
  let form_data = new FormData()

  form_data.append("text_give", text)
  form_data.append("num_give", num)
  form_data.append("file_give", file)

  $.ajax({
    type: "POST",
    url: "/api/logbook",
    data: form_data,
    cache: false,
    contentType: false,
    processData: false,
    success: function (response) {
      alert(response["msg"])
      modal_close();
      window.location.reload();
    }
  });
}

function go_main() {
  $.ajax({
    type: "GET",
    url: "/api/get_email",
    data: {},
    success: function (response) {
      window.location.href = '/main/' + response["email"]
    }
  });
}

function modal_active() {
  const signup = document.querySelector('.modal');
  signup.classList.add('is-active');
  bsCustomFileInput.init();
}
function modal_close() {
  const modalClose = document.querySelector('.modal');
  modalClose.classList.remove('is-active');
}

function move(direction) {
  let url = document.location.href.split("/");
  let num = Number(url[url.length - 1]);
  let length = 0;

  if(num > 10)
  {
    length = 2
  }
  else{
    length = 1
  }

  if (direction === "R") {
    num = num + 1 > 99 ? 1 : num + 1;
  } else if (direction === "L") {
    console.log("here");
    num = num - 1 < 1 ? 99 : num - 1;
  }
  
  let url_str = ''
  url = document.location.href;

  for(let i = 0; i < url.length - length; i++)
  {
      url_str += url[i];
  }
  url_str += num;
  window.location.href = url_str;
}

function like(obj) {
  let find_img = $(obj.closest('.card')).children('.card-content').children('#img').attr('src').split("/")
  let img = find_img[3]
  let url = document.location.href.split("/");
  let num = Number(url[url.length - 1]);
  let email = url[url.length - 2];
  let form_data = new FormData()

  form_data.append("num_give", num)
  form_data.append("email_give", email)
  form_data.append("file_give",img)

  $.ajax({
    type: 'POST',
    url: '/api/like',
    data: form_data,
    success: function (response) {
        alert(response['msg']);
        window.location.reload();
    }
});
}

function delete_card() {
  let find_img = $(obj.closest('.card')).children('.card-content').children('#img').attr('src').split("/")
  let img = find_img[3]
  let url = document.location.href.split("/");
  let num = Number(url[url.length - 1]);
  let email = url[url.length - 2];
  let form_data = new FormData()

  form_data.append("num_give", num)
  form_data.append("email_give", email)
  form_data.append("file_give",img)

  $.ajax({
    type: 'POST',
    url: '/api/delete',
    data: form_data,
    success: function (response) {
        alert(response['msg']);
        window.location.reload();
    }
});
}