/**
 * Modeling WebSocket streams with RxJS - http://stackoverflow.com/a/37390611/1123955
 */
import { 
  Observable,
  Observer,
  Subject,
}                     from 'rxjs/Rx'

import * as WebSocket from 'ws'

import * as https     from 'https'

export class Server {
  constructor() {

  }

  create(httpsServer: https.Server) {
    const socket$ = Observable.create(({complete, next}) => {
      const server = new WebSocket.Server({server: httpsServer})
      server.on('connection', next)
      return () => {
        server.close()
        complete()
      }
    })
  
    const socketMessage$ = socket$.flatMap(
      socket => Observable.create(({complete, next}) => {
        socket.on('message', next)
        socket.on('close', complete)
        return () => socket.disconnect()
      }),
      (socket, message) => ({socket, message})
    ).share()
  }
}

export default Server

client.error(new Error())
subClient = client.multiplex('subType')