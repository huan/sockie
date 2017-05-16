# sockie
Easy Rx WebSocket Client/Server Management Framework

<img alt="Sockie Logo" src="http://zixia.github.io/sockie/images/sockie.svg" width="50%">

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

### WebSocket

* [WebSockets - Methods for Real-Time Data Streaming](https://os.alfajango.com/websockets-slides/#/)
* [RxJS Observerable Reference Document](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-webSocket)
* [Auto WebSocket reconnection with RxJS](https://gearheart.io/blog/auto-websocket-reconnection-with-rxjs/)

### RxJS

* [Modeling WebSocket streams with RxJS](http://stackoverflow.com/a/37390611/1123955)
* [WebSockets with Angular2 and RxJS](https://medium.com/@lwojciechowski/websockets-with-angular2-and-rxjs-8b6c5be02fac)
* [websocket rxjs streams provided by an injectable service](https://github.com/ohjames/rxjs-websockets)
* [webSocket-spec.ts](https://github.com/ReactiveX/rxjs/blob/master/spec/observables/dom/webSocket-spec.ts)
* [WebSocketSubject.ts](https://github.com/ReactiveX/rxjs/blob/master/src/observable/dom/WebSocketSubject.ts)
* [docs(webSocket): create documentation for the operator](https://github.com/ReactiveX/rxjs/pull/2450/files)

### Reference

* [600k concurrent websocket connections on AWS using Node.js](https://blog.jayway.com/2015/04/13/600k-concurrent-websocket-connections-on-aws-using-node-js/)
* [Finding the right Node.js WebSocket implementation](https://medium.com/@denizozger/finding-the-right-node-js-websocket-implementation-b63bfca0539)
* [Creates a WebSocket Subject with a given URL, protocol and an optional observer for the open event and for close.](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/doc/operators/fromwebsocket.md)
* [A more advanced web socket wrapper for RxJS](https://github.com/fikrimuhal/RxSocketSubject)
* <https://github.com/TigorC/rxjs_websocket/blob/master/client/src/index.ts>
