function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage]
}
function isEmpty(data) {
    if (!data) {
        return []
    }
    return data
}

function reqSuccess(message, isCreate = false, data = null) {
    if (data) {
        return {
            code: isCreate ? 201 : 200,
            message,
            data
        }
    } else {
        return {
            code: 200,
            message
        }
    }
}

function reqFail(message) {
    return {
        code: 400,
        message
    }
}

module.exports = {
    getOffset,
    isEmpty,
    reqSuccess,
    reqFail
}