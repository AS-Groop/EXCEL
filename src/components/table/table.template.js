const CODE = {
  A: 65,
  Z: 90
}

function toCell(){
  return `<div class="cell" contenteditable=""></div>`
}

function toColumn(el){

  return `
  <div class="column">
    ${el}
  </div>
  `
}

function createRow(content, number){

  return `
    <div class="row">
      <div class="row-info">${number || ''}</div>
      <div class="row-data">${content}</div>
    </div>
`
}

function toChar(_, index){
  return String.fromCharCode(CODE.A + index)
}

export function createTable(rowsCount = 15) {
  const colCount = CODE.Z - CODE.A + 1;
  const rows = [];

  const cols = new Array(colCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('');



  rows.push(createRow(cols,''))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colCount)
      .fill('')
      .map(toCell)
      .join('');
    rows.push(createRow(cells, i + 1))
  }
  return rows.join('')
}