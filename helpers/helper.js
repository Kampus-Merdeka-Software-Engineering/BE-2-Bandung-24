// fungsi untuk menghitung offset paginasi
function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * listPerPage;
}

// fungsi untuk memeriksa dan mengembalikan data atau array kosong
function isEmpty(data) {
    return data || [];
}

// fungsi untuk menghasilkan objek respons sukses
function reqSuccess(message, isCreate = false, data = null) {
    return {
        code: isCreate ? 201 : 200,
        message,
        data
    };
}

// fungsi untuk menghasilkan objek respons kegagalan
function reqFail(message) {
    return {
        code: 400,
        message
    };
}

module.exports = {
    getOffset,
    isEmpty,
    reqSuccess,
    reqFail
};
