export default class createMatrix {
    constructor(data, columns, rows) {
        this.data = data
        this.columns = columns
        this.rows = rows
        this.rowValues = {}
        this.columnValues = {}
        this._matrix = []
    }

    
    show() {
        console.log()
    }

    __getTitleValues() {
        let rowValues = {}
        let columnValues = {}

        this.columns.forEach(column => columnValues[column] = [])
        this.rows.forEach(row => rowValues[row] = [])

        this.data.forEach(element => {
            this.columns(column => {
                if (!columnValues[column].includes(element[column])) columnValues[column].push(element[column])
            })

            this.rows(row => {
                if (!rowValues[row].includes(element[row])) rowValues[row].push(element[row])
            })
        })

        Object.keys(rowValues).forEach(key => {
            rowValues[key] = rowValues[key].sort((prev, next) => {
                if (prev < next) return -1
                else return 1
            })
        })

        Object.keys(columnValues).forEach(key => {
            columnValues[key] = columnValues[key].sort((prev, next) => {
                if (prev < next) return -1
                else return 1
            })
        })
        
        this.rowValues = rowValues
        this.columnValues = columnValues
    }
    
    
}
