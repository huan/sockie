import { log }            from 'brolog'

import {
  SockieServer,
  SockieServerMessage,
}                           from '../src/server'

import { Sockie }           from '../src/sockie'
import { SockieRequest }    from '../src/request'

// import { SockieServer } from 'sockie'

const server = new SockieServer(/* TODO */) // 127.0.0.1:80

/**
 * Listen for new connection
 */
server.listen.subscribe((sockieRequest: SockieRequest) => {
  log.info('Server', 'listen.subscribe(request: %s)', sockieRequest)

  if (originIsAllowed(sockieRequest.origin)) {
    sockieRequest.accept(/* protocol */)
  } else {
    // Make sure we only accept requests from an allowed origin
    sockieRequest.reject()
    console.log((new Date()) + ' Connection from origin ' + sockieRequest.origin + ' rejected.')
  }
  return

  function originIsAllowed(origin: string): boolean {
    return true
  }

  // const connection = request.accept('echo-protocol', request.origin)
  // console.log((new Date()) + ' Connection accepted.')

})

server.message.subscribe((sockieServerMessage: SockieServerMessage) => {
  const { data, sock } = sockieServerMessage
  log.info('Server', 'data %s from sock %s', data, sock)

  sock.next('roger from server.message.subscribe()')

})

server.disconnection.subscribe((sock: Sockie) => {
  log.info('Server', 'disconnected sock: %s', sock)
  sock.next('roger from server.disconnection.subscribe()')
})

// dealing with event
server.subscribe((sock: Sockie) => {
  log.info('Server', 'new sockie accept: %s',  sock)

  sock.next('roger from server.subscribe()')

  sock.subscribe(message => {
    log.info('Server', 'sock.subscribe() new message: %s', message)
  })
})

server.acceptCounter.subscribe(counter => {
  log.info('Server', 'acceptCounter: %d', counter)
})

server.rejectCounter.subscribe(counter => {
  log.info('Server', 'rejectCounter: %d', counter)
})

server.listenCounter.subscribe(counter => {
  log.info('Server', 'listenCounter: %d', counter)
})

server.sockieCounter.subscribe(counter => {
  log.info('Server', 'sockieCounter: %d', counter)
  log.info('Server', 'sockieList length: %d', server.sockieList.length)
})

server.next('broadcast!')
