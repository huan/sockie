# sockie

Easy Rx WebSocket Client/Server Management Framework

<!-- markdownlint-disable MD033 -->
<img alt="Sockie Logo" src="http://huan.github.io/sockie/images/sockie.svg" width="50%">

> Picture credit: [Clker-Free-Vector-Images @ Pixabay](https://pixabay.com/photo-306249/)

## Goal

Sockie is design to simplify the Websocket Server/Client API with Reactive Extensions.

1. Out-of-Box WebSocket Server with Reactive Extensions
1. Out-of-Box WebSocket Client RxJS Subject that support both Node.js & Browser
1. Socket as a Subject
1. `readyState` as a Observable
1. `event` as a Observable
1. Sockie will always be HOT(Observable).
1. Always automaticaly reconnect untill you call `complete()` or `error()`
1. Not support Binary Type

## Example

Talk is cheap, show me the code!

### Server

```ts
```

### Client


## Resources

### Angular

- [Making Use of WebSockets in Angular — Way Easier Than You Expected](https://medium.com/briebug-blog/making-use-of-websockets-in-angular-way-easier-than-you-expected-25dd0061db1d)

### WebSocket

- [WebSockets - Methods for Real-Time Data Streaming](https://os.alfajango.com/websockets-slides/#/)
- [RxJS Observerable Reference Document](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-webSocket)
- [Auto WebSocket reconnection with RxJS](https://gearheart.io/blog/auto-websocket-reconnection-with-rxjs/)
- [Simplifying WebSockets in RxJS.](https://itnext.io/simplifying-websockets-in-rxjs-a177b887f3b8)
- [REAL-TIME IN ANGULAR: A JOURNEY INTO WEBSOCKET AND RXJS](https://javascript-conference.com/blog/real-time-in-angular-a-journey-into-websocket-and-rxjs/)

### RxJS

- [Modeling WebSocket streams with RxJS](http://stackoverflow.com/a/37390611/1123955)
- [WebSockets with Angular2 and RxJS](https://medium.com/@lwojciechowski/websockets-with-angular2-and-rxjs-8b6c5be02fac)
- [websocket rxjs streams provided by an injectable service](https://github.com/ohjames/rxjs-websockets)
- [webSocket-spec.ts](https://github.com/ReactiveX/rxjs/blob/master/spec/observables/dom/webSocket-spec.ts)
- [WebSocketSubject.ts](https://github.com/ReactiveX/rxjs/blob/master/src/observable/dom/WebSocketSubject.ts)
- [docs(webSocket): create documentation for the operator](https://github.com/ReactiveX/rxjs/pull/2450/files)
- [RxJS - Subject](https://rxjs-dev.firebaseapp.com/guide/subject)
- [RxJS - WebSocketSubject](https://rxjs-dev.firebaseapp.com/api/webSocket/WebSocketSubject)
- [RxJS - webSocket](https://rxjs-dev.firebaseapp.com/api/webSocket/webSocket)
- [RxJS - WebSocketSubjectConfig](https://rxjs-dev.firebaseapp.com/api/webSocket/WebSocketSubjectConfig)
- [The magic of RXJS sharing operators and their differences](https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255)

### Redux

- [Building on the duck legacy](https://github.com/alexnm/re-ducks)
- [Redux Observable Backend - WebSockets](https://github.com/Sawtaytoes/Redux-Observable-Backend/tree/2d561c327421328d64f42dc95c2e24dde5d81bea/packages/websocket)
- [Scaling Your Redux App with Ducks](https://medium.com/better-programming/scaling-your-redux-app-with-ducks-6115955638be#.4ppptx7oq)
- [WebSocket Connection & Reconnection with RxJS & Redux Observables](https://techinscribed.com/websocket-connection-reconnection-rxjs-redux-observable/)

### Reference

- [600k concurrent websocket connections on AWS using Node.js](https://blog.jayway.com/2015/04/13/600k-concurrent-websocket-connections-on-aws-using-node-js/)
- [Finding the right Node.js WebSocket implementation](https://medium.com/@denizozger/finding-the-right-node-js-websocket-implementation-b63bfca0539)
- [Creates a WebSocket Subject with a given URL, protocol and an optional observer for the open event and for close.](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/doc/operators/fromwebsocket.md)
- [A more advanced web socket wrapper for RxJS](https://github.com/fikrimuhal/RxSocketSubject)
- <https://github.com/TigorC/rxjs_websocket/blob/master/client/src/index.ts>

## Author

[Huan LI](https://github.com/huan) ([李卓桓](http://linkedin.com/in/zixia)) zixia@zixia.net

[![Profile of Huan LI (李卓桓) on StackOverflow](https://stackexchange.com/users/flair/265499.png)](https://stackexchange.com/users/265499)

## Copyright & License

- Code & Docs © 2017-now Huan LI \<zixia@zixia.net\>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
