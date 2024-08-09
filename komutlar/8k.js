module.exports = [{
  name: "8k",
  code: `
  $setMessageVar[resim8kmsg;;$messageID]
  $getMessageVar[resim8kmsg;$messageID]
  $reply[$messageID;false]
  $wait[1]

$setMessageVar[resim8kmsg;$nonEscape[$jsonRequest[https://api.kastg.xyz/api/ai/real-esrgan?url=$uri[$message]/img/kastg.jpg&scale=8&key=Kastg_Gcza36Vz1ky0xqHbqw0B_free;result[0].url;$nonEscape[Bir hata oluştu.]]];$messageID]
$clientTyping

 `
}]