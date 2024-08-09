module.exports = [{
  name: "kod-yaz",
  code: `
  $setMessageVar[blackaimsg;;$messageID]
  $getMessageVar[blackaimsg;$messageID]
  $reply[$messageID;false]
  $wait[1]

$setMessageVar[blackaimsg;$nonEscape[$jsonRequest[https://api.kastg.xyz/api/ai/blackbox?prompt=$uri[bana şu kodu yaz $message];result[0].response;$nonEscape[Bir hata oluştu.]]];$messageID]
$clientTyping

 `
}]