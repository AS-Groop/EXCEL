import {$} from "../../core/dom";
import {range} from "../../core/utils";

export class TableSelection {

  static className = 'selected'

  constructor() {
    this.group = [];
    this.current = null;
  }


  select($el) {
    this.clear();
    $el.focus().addClass(TableSelection.className);
    this.group.push($el);
    this.current = $el;
  }

  clear(){
    this.group.forEach(e => {
      e.removeClass(TableSelection.className);
    });
    this.group = [];
  }

  selectGroup($group = []) {
    this.clear();
    this.group = $group;

    this.group.forEach($el=>{
      $el.addClass(TableSelection.className)
    })
  }
  //
  // controlKeys(key, $el, $root) {
  //   const cellId = $el.id(true);
  //   if (key === 'Enter' || key === 'ArrowDown') {
  //     $el = $root.find(`[data-id="${cellId.col}:${cellId.row + 1}"]`);
  //   }
  //   if (key === 'Tab' || key === 'ArrowRight') {
  //     $el = $root.find(`[data-id="${cellId.col+1}:${cellId.row}"]`);
  //   }
  //   if (key === 'ArrowUp') {
  //     $el = $root.find(`[data-id="${cellId.col}:${cellId.row - 1}"]`);
  //   }
  //   if (key === 'ArrowLeft') {
  //     $el = $root.find(`[data-id="${cellId.col-1}:${cellId.row}"]`);
  //   }
  //   if ($el.$el) {
  //     this.select($el);
  //     $el.focus();
  //   }
  // }

}