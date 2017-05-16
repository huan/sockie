/**
 * Modeling WebSocket streams with RxJS - http://stackoverflow.com/a/37390611/1123955
 */
import {
  Observable,
  Observer,
  Subject,
}                         from 'rxjs/Rx'

import {
  WebSocketSubject,
  WebSocketSubjectConfig,
}                         from 'rxjs/observable/dom/WebSocketSubject'

import * as WebSocket     from 'ws'

import * as http          from 'http'
import * as https         from 'https'

import {
  Sockie,
}                         from './sockie'

export interface SockieServerOptoin {
  url: string,
}

export interface SockieServerEvent {
  data:   Object,
  sock:   Sockie,
}

export class SockieServer extends Subject<SockieServerEvent> {

  private $connect: Subject<Sockie>
  public get connect() {
    return this.$connect.asObservable()
                        .share()
  }

  constructor() {
    super()

    this.init()
  }

  init() {
    this.$connect = new Subject<Sockie>()
  }

  create(httpServer: https.Server | http.Server) {
    const socket$ = Observable.create(({complete, next}) => {
      const server = new WebSocket.Server({server: httpServer})
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
  }
}

export default Server
