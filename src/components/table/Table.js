import {ExcelComponent} from "../../core/ExcelComponent";

import {createTable} from "@/components/table/table.template";



export class Table extends ExcelComponent {
    static className = 'excel__table'

    toHTML() {

        return createTable()

        return `<div class="row">

                <div class="row-info"></div>

                <div class="row-data">
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>

                </div>

            </div>`

    }
}