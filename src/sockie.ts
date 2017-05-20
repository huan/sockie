import { Subject }                      from 'rxjs/Subject'

import {
  WebSocketSubject,
  WebSocketSubjectConfig,
}                                       from 'rxjs/observable/dom/WebSocketSubject'

import {
  connection  as WebSocketConnection,
  request     as WebSocketRequest,
  server      as WebSocketServer,
}                                       from 'websocket'

export class Sockie extends Subject<Object> {
  constructor(
    private connection: WebSocketConnection,
  ) {
    super()
  }

  init() {
    this.connection.on('message', message => {
      switch (message.type) {
        case 'utf8':
          console.log('Received Message: ' + message.utf8Data)
          this.xxx.next(message.utf8Data)
          break

        default:
        case 'binary':
          throw new Error('not supported message type')
      }
    })
  }
}
