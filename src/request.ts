import * as EventEmitter        from 'events'
import * as http                from 'http'
// import * as https               from 'https'
import * as url                 from 'url'

import {
  ICookie,
  // server as WebSocketServer,
  // connection  as WebSocketConnection,
  request as WebSocketRequest,
}                               from 'websocket'

import { Sockie }               from './sockie'

export type SockieRequestEventName = 'accept' | 'reject'

export class SockieRequest extends EventEmitter {
  public origin: string

  constructor(
    public webSocketRequest: WebSocketRequest,
  ) {
    super()

    this.origin = webSocketRequest.origin

    this.webSocketRequest.on('requestAccepted', connection  => this.emit('accept', new Sockie(connection)))
    this.webSocketRequest.on('requestRejected', ()          => this.emit('reject'))

  }

  /**
   * After inspecting the `request` properties, call this function on the
   * request object to accept the connection. If you don't have a particular subprotocol
   * you wish to speak, you may pass `null` for the `acceptedProtocol` parameter.
   *
   * @param [acceptedProtocol] case-insensitive value that was requested by the client
   */
  public accept(acceptedProtocol?: string, allowedOrigin?: string, cookies?: ICookie[]): Sockie {
    const connection = this.webSocketRequest.accept(acceptedProtocol, allowedOrigin, cookies)
    const sock = new Sockie(connection)
    return sock
  }

  /**
   * Reject connection.
   * You may optionally pass in an HTTP Status code (such as 404) and a textual
   * description that will be sent to the client in the form of an
   * `X-WebSocket-Reject-Reason` header.
   * Optional extra http headers can be added via Object key/values on extraHeaders.
   */
  public reject(httpStatus?: number, reason?: string, extraHeaders?: Object): void {
    return this.webSocketRequest.reject(httpStatus, reason)
  }

  public on(event: 'accept', cb: (sock: Sockie) => void): this
  public on(event: 'reject', cb: () => void): this

  public on(event: SockieRequestEventName, cb: Function): this {
    super.on(event, cb)
    return this
  }
}


export interface Memo {
    /** A reference to the original Node HTTP request object */
    httpRequest: http.ClientRequest
    /** This will include the port number if a non-standard port is used */
    host: string
    /** A string containing the path that was requested by the client */
    resource: string
    /** `Sec-WebSocket-Key` */
    key: string
    /** Parsed resource, including the query string parameters */
    resourceURL: url.Url

    /**
     * Client's IP. If an `X-Forwarded-For` header is present, the value will be taken
     * from that header to facilitate WebSocket servers that live behind a reverse-proxy
     */
    remoteAddress: string;

    /**
     * If the client is a web browser, origin will be a string containing the URL
     * of the page containing the script that opened the connection.
     * If the client is not a web browser, origin may be `null` or "*".
     */
    origin: string;

    /** The version of the WebSocket protocol requested by the client */
    webSocketVersion: number;
    /** An array containing a list of extensions requested by the client */
    requestedExtensions: any[];

    // cookies: ICookie[];
    // socket: net.Socket;

    /**
     * List of strings that indicate the subprotocols the client would like to speak.
     * The server should select the best one that it can support from the list and
     * pass it to the `accept` function when accepting the connection.
     * Note that all the strings in the `requestedProtocols` array will have been
     * converted to lower case.
     */
    requestedProtocols: string[];
    protocolFullCaseMap: { [key: string]: string };

    // constructor(socket: net.Socket, httpRequest: http.ClientRequest, config: IServerConfig);

    // Events
    on(event: string, listener: () => void): this;
    on(event: 'requestAccepted', cb: (connection: connection) => void): this;
    on(event: 'requestRejected', cb: () => void): this;
    addListener(event: string, listener: () => void): this;
    addListener(event: 'requestAccepted', cb: (connection: connection) => void): this;
    addListener(event: 'requestRejected', cb: () => void): this;

}
