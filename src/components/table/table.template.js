const CODE = {
  A: 65,
  Z: 90
}

function toCell(el,id){
  return `<div class="cell" data-col="${el+id}" contenteditable=""></div>`
}

function toColumn(el,id){

  return `
  <div class="column" data-col="${el+id}" data-type="resizable">
    ${el}
    <div class="col-resize" data-resize="col"></div>
  </div>
  `
}

function createRow(content, number){
  const resize = number ? `<div class="row-resize" data-resize="row"></div>` : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">${number || ''}${resize}</div>
      <div class="row-data">${content}</div>
    </div>
  `;
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
      .map(toChar)
      .map(toCell)
      .join('');
    rows.push(createRow(cells, i + 1))
  }
  return rows.join('')
}