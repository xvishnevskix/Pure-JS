
const CODES = {
    A: 65,
    Z: 90
}


function toColumn(col) {
    return `
    <div class="column" data-type="resizable">
    ${col}
    <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

   function toCell() {
   return `
     <div class="cell" contenteditable></div>
  `
 }

function createRow(index, content) {
    const resize = index
        ? '<div class="row-resize" data-resize="row"></div>'
        : ''
    return `
    <div class="row">
      <div class="row-info">
        ${index ? index : ''}
        ${resize}
        
        </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 30) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount) //создаём массив от кол-во колоннок
        .fill('')// заполняем пустой строчкой
        .map(toChar) // преобразовываем к символу
        .map(toColumn) //преобразовываем в колонну
        .join('') //соединяем

    rows.push(createRow(null,cols)) // создание строки для колонн


    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(i+1, cells))
    }

    return rows.join('')
}
