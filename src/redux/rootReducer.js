import {TABLE_RESIZE} from "@/redux/types";

export function rootReducer(state, action) {
      switch (action.type) {

              case TABLE_RESIZE:
                  const prevState = state.colState || {}
                  prevState[action.data.id] = action.data.value // для определённого id присваиваем значение
                      return {...state, colState: prevState} //id, value
              default: return state
      }
}

// Функция возвращающая новый state