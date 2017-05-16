import { Subject }    from 'rxjs/Subject'

import {
  WebSocketSubject,
  WebSocketSubjectConfig,
}                         from 'rxjs/observable/dom/WebSocketSubject'

export class Sockie extends Subject<Object> {
  constructor() {
    super()
  }
}
