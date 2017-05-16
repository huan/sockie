#!/usr/bin/env ts-node

const { test }  = require('tap')

import { Server } from '../src/server'
import { Client } from '../src/client'

test('should instianciate', t => {
  const server = new Server()
  server.subscribe(socket => {
    // new socket
    socket.subscribe(event => {
      // new event
    })
  })
  
  t.end()
})

test('should ')