import {DomListener} from "./DomListener";

export class ExcelComponent extends DomListener {
  constructor($root,options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribe = [];
    this.prepare()
  }
  toHtml() {
    return ''
  }

  prepare(){}


  $emit(event, ...args){
    this.emitter.emit(event, ...args)
  }

  $on(event, fn){
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribe.push(unsub)
  }


  init(){
    this.initDOMListeners();
  }

  destroy(){
    this.removeDOMListeners()
    this.unsubscribe.forEach(unsub=>{
      unsub()
    })
  }
}