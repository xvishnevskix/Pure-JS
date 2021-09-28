// Pure functions
export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(start, end) {
  if (start > end) {
    [end, start] = [start, end]
  }
  return new Array(end - start + 1)
      .fill('')
      .map((_, index) => start + index)
}

export function storage(key, data = null) {
      if (!data) { //если нет данных, то тогда storage работает как геттер(вернуть)
        return JSON.parse(localStorage.getItem(key)) //нет данных - парсим из локалстораджа
      }
      localStorage.setItem(key, JSON.stringify(data))
}
