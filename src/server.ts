import * as http                from 'http'
import * as https               from 'https'

import {
  BehaviorSubject,
  Observable,
  Observer,
  Subject,
}                               from 'rxjs/Rx'
import {
  WebSocketSubject,
  WebSocketSubjectConfig,
}                               from 'rxjs/observable/dom/WebSocketSubject'

import {
  server  as WebSocketServer,
  request as WebSocketRequest,
}                               from 'websocket'

import { Sockie }               from './sockie'
import { SockieRequest }        from './request'

export interface SockieServerOptoin {
  url: string,
}

export interface SockieServerMessage {
  data:   Object, // string is an `Object`, but not an `object`
  sock:   Sockie,
}

/**
 * Modeling WebSocket streams with RxJS - http://stackoverflow.com/a/37390611/1123955
 */
export class SockieServer extends Subject<Sockie> {

  private $listen: Subject<SockieRequest>
  public get listen() {
    return this.$listen.asObservable()
                        .share()
  }

  private $message: Subject<SockieServerMessage>
  public get message() {
    return this.$message.asObservable()
                        .share()
  }

  private $disconnection: Subject<Sockie>
  public get disconnection() {
    return this.$disconnection.asObservable()
                              .share()
  }

  private $acceptCounter: BehaviorSubject<number>
  public get acceptCounter() {
    return this.$acceptCounter.asObservable()
                              .share()
  }

  private $rejectCounter: BehaviorSubject<number>
  public get rejectCounter() {
    return this.$rejectCounter.asObservable()
                              .share()
  }

  private $listenCounter: BehaviorSubject<number>
  public get listenCounter() {
    return this.$listenCounter.asObservable()
                              .share()
  }

  private $sockieCounter: BehaviorSubject<number>
  public get sockieCounter() {
    return this.$sockieCounter.asObservable()
                              .share()
  }

  public sockieList: Sockie[]

  // public connectionMap:  {
  //   [id: string]: Sockie,
  // }

  constructor() {
    super()

    this.init()
  }

  init() {
    this.$message         = new Subject<SockieServerMessage>()
    this.$disconnection = new Subject<Sockie>()
    this.$listen        = new Subject<SockieRequest>()
  }

  create(httpServer: https.Server | http.Server): SockieServer {
    const socket$ = Observable.create(({complete, next}) => {
      const server = new

      WebSocket.Server({server: httpServer})
      server.on('connection', next)
      return () => {
        server.close()
        complete()
      }
    })

    // http://stackoverflow.com/a/37390611/1123955
    const socketMessage$ = socket$.flatMap(
      socket => Observable.create(({complete, next}) => {
        socket.on('message', next)
        socket.on('close', complete)
        return () => socket.disconnect()
      }),
      (socket, message) => ({socket, message})
    ).share()

    return

  }

  public next(data: Object): void {
    return
  }
}

// client.error(new Error())
// subClient = client.multiplex('subType')

// export {
//   WebSocketRequest,
// }
export default SockieServer

const server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url)
    response.writeHead(404)
    response.end()
})
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080')
})

const wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false,
})
wsServer.on()
wsServer.on('request', function(request) {

  const sockieRequest = new SockieRequest(request)
  sockieRequest.on('accept', sock => {
    connection.on('close', function(reasonCode, description) {
      console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.')
      this.$disconnection.next(connection)
    })
    this.$connection.next(connection)
  })

  this.$listen.next(sockieRequest)

})
