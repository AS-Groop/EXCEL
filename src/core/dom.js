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
  }

  addClass(name){
    this.$el.classList.add(name);
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