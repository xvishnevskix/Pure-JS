import {storage} from "@core/utils";

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {}, //{0,1} dsadas
    currentText: '',
}

export const initialState
    = storage('excel-state') ? storage('excel-state') : defaultState