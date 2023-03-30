import {ExcelComponent} from "../../core/ExcelComponent";
import {createTable} from "./table.template";
import {$} from "../../core/dom";
import { resizeHandler} from "./table.resize";

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    });
  }

  toHtml() {
    return createTable(20)
  }


  onMousedown(event) {
    if (event.target.dataset?.resize) {
      resizeHandler(event, this.$root)
    }
  }

  // msScripting 231
  // msRendering 503

  resizeCol(event) {

  }

  resizeRow() {

  }


}
