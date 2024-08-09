module.exports = [{
  name: "çiz",
  code: `
  $setMessageVar[resimmsg;;$messageID]
  $getMessageVar[resimmsg;$messageID]
  $reply[$messageID;false]
  $wait[1]

$setMessageVar[resimmsg;$nonEscape[$jsonRequest[https://api.kastg.xyz/api/ai/playground?prompt=$uri[$message]&key=Kastg_Gcza36Vz1ky0xqHbqw0B_free;result[0].url;$nonEscape[Bir hata oluştu.]]];$messageID]
$clientTyping

 `
}]