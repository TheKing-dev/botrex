module.exports = [{
  name: "çeviri",
  code: `
  $setMessageVar[cevirimsg;;$messageID]
  $getMessageVar[cevirimsg;$messageID]
  $reply[$messageID;false]
  $wait[1]

$setMessageVar[cevirimsg;$nonEscape[$jsonRequest[https://api.kastg.xyz/api/tool/translate?input=$uri[$message]&to=tr&from=auto;result[0].output;$nonEscape[Bir hata oluştu.]]];$messageID]
$clientTyping

 `
}]