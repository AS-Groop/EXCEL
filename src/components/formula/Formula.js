import {ExcelComponent} from "../../core/ExcelComponent";
import {$} from "../../core/dom";

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input','keyup'],
      ...options
    });
  }
  toHtml() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  init() {
    super.init();
    this.formula = this.$root.find('.input')
    this.$on('table:onEnter', ($cell) => {
      this.formula.text($cell.text())
    });
    this.$on('table:input', ($target) => {
      this.formula.text($target.text())
    });
  }

  onInput(event){
    this.$emit('input_formula',$(event.target).text())
  }

  onKeyup(event){
    if (event.key === 'Enter' && !event.shiftKey) {
      this.$emit('formula:keyEnter', event);
    }
  }
}