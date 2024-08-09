module.exports = [{
  name: "chatgpt",
  code: `
  $setMessageVar[chatgptmsg;;$messageID]
  $getMessageVar[chatgptmsg;$messageID]
  $reply[$messageID;false]
  $wait[1s]

  $setMessageVar[chatgptmsg;$jsonRequest[https://tilki.dev/api/hercai?soru=$uri[$message];cevap;Bir hata oluştu.];$messageID]
  $clientTyping
  $reply[$messageID;$getMessageVar[chatgptmsg;$messageID];false]
  `
}]
