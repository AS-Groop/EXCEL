import {range} from "../../core/utils";

export function shouldResult(event){
  return event.target.dataset?.resize
}


export function isCell(event){
  return event.target.dataset.type === 'cell'
}

export function matrix($target, $current){
  const target = $target.id(true);
  const current = $current.id(true);

  const row = range(current.row, target.row);
  const col = range(current.col, target.col);

  return col.reduce((acc, item) => {
    row.forEach(e => acc.push(item + ':' + e))
    return acc
  }, [])
}

export function nextSelector(key,{col,row}){
  const MIN_VALUE = 0
  switch (key){
    case 'Enter':
    case 'ArrowDown':
      row++;
      break;
    case 'Tab':
    case 'ArrowRight':
      col++;
      console.log('col')
      break;
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
      break
    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1;
      break
  }

  return `[data-id="${col}:${row}"]`
}