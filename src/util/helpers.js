function helpers(app) {
    app.locals.sortable = (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default'
        const icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending'
        }
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc'
        }

        const icon = icons[sortType]
        const type = types[sortType]

        return (
            `<a href="?_sort&type=${type}&column=${field}"><span class="${icon}"></span></a>`
        )
    }

    app.locals.findErrorByParam = (errors, paramName) => {
        return errors?.find(x => x.param == paramName)
    }

    app.locals.avatarByName = (fullName) =>{
        const arr = fullName.split(' ')
        if (arr.length<2) return arr[0][0]
        return `${arr[arr.length-2][0]}${arr[arr.length-1][0]}`
    }
}



export default helpers

