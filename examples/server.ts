import { log }            from 'brolog'

import {
  SockieServer,
  SockieServerEvent,
}                           from '../src/server'

import {
  Sockie,
}                           from '../src/sockie'

// import { SockieServer } from 'sockie'

const server = new SockieServer() // 127.0.0.1:80

server.open.subscribe((sock: Sockie) => {
  log.info('Server', 'new sock: %s', sock)
  sock.next('Hello!')
})
server.close.subscribe((sock: Sockie) => {
  log.info('Server', 'new sock: %s', sock)
  sock.next('Hello!')
})
server.accept.subscribe((sock: Sockie) => {
  log.info('Server', 'new sock: %s', sock)
  sock.next('Hello!')
})

// dealing with event
server.subscribe((serverEvent: SockieServerEvent) => {
  log.info('Server', 'new data: %s',    serverEvent.data)
  log.info('Server', 'from socket:%s',  serverEvent.sock)

  const sock = serverEvent.sock

  server.next({
    data: 'roger',
    sock,
  })

  sock.next('roger')

})

const socket = new WebSocket('wss://test')

const dataEvent = {
  data: 'test',
  socket,
}
server.next(dataEvent)
server
