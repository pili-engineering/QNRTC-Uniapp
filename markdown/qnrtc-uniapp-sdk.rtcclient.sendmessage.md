<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [qnrtc-uniapp-sdk](./qnrtc-uniapp-sdk.md) &gt; [RTCClient](./qnrtc-uniapp-sdk.rtcclient.md) &gt; [sendMessage](./qnrtc-uniapp-sdk.rtcclient.sendmessage.md)

## RTCClient.sendMessage() method

发送自定义消息到指定用户群

<b>Signature:</b>

```typescript
sendMessage(message: string, users: string[], messageId: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  message | string | 自定义消息内容 |
|  users | string\[\] | 用户 ID 列表 |
|  messageId | string | 自定义消息 ID |

<b>Returns:</b>

void

## Remarks

发送成功后，会触发远端用户的 RTCClinetEvent.onMessageReceived 回调接口
