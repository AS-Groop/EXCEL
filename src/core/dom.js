class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html){
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this
    }
    return this.$el.outerHTML.trim();
  }

  on(eventName,callback){
    this.$el.addEventListener(eventName,callback)
  }

  off(eventName, callback){
    this.$el.removeEventListener(eventName, callback);
  }

  text(text){
    if(typeof text === 'string'){
      this.$el.textContent = text;
      return this
    }
    if(this.$el.tagName.toLowerCase() === 'input') {
      return this.$el.value.trim()
    }
    return this.$el.textContent.trim()
  }

  clear(){
    this.html('');
    return this
  }

  append(node){
    if(node instanceof Dom){
      node = node.$el
    }
    if (Element.prototype.append){
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }

    return this
  }

  get data(){
    return this.$el.dataset
  }

  findAll(selector){
    return this.$el.querySelectorAll(selector);
  }
  find(selector){
    return $(this.$el.querySelector(selector));
  }

  focus() {
    this.$el.focus()
    return this
  }

  id(parse){
    if (parse){
      const parser = this.id().split(':');

      return {
        col: +parser[0],
        row: +parser[1]
      }
    }
    return this.data.id
  }

  closest(selector){
    return $(this.$el.closest(selector));
  }

  getBoundingClientRect(){
    return this.$el.getBoundingClientRect()
  }

  css(styles={}){
    Object
      .keys(styles)
      .forEach ((key)=>this.$el.style[key]= styles[key])
  }

  removeClass(name){
    this.$el.classList.remove(name);
    return this
  }

  addClass(name){
    this.$el.classList.add(name);
    return this
  }

}

export function $(selector){
  return new Dom(selector)
}

$.create = (tagName, classes = '')=>{
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
}