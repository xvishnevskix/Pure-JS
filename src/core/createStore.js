export function createStore(rootReducer, initialState = {}) {
    let state = rootReducer({...initialState}, {type: '__INIT__'}) //состояние для нашего приложения
    let listeners = [] //будет содержать слушателей для стора

    return {
        subscribe(fn) {
            listeners.push(fn)
            return {
                unsubscribe() {
                        listeners = listeners.filter(l => l !== fn)
                    }
                }
            },

            dispatch(action) {
               state = rootReducer(state, action)
                listeners.forEach(listener => listener(state))
            },
            getState() {
                return state
            }
        }
}


//reducer проверяет на совпадение экшн type, и если там есть такой type
//редусер меняет стейт. Функция возвращающая новый state
//initialState = {} начальная состояние