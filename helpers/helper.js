// fungsi untuk menghitung offset paginasi
function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * listPerPage;
}

// fungsi untuk memeriksa dan mengembalikan data atau array kosong
function isEmpty(data) {
    return data || [];
}

// fungsi untuk menghasilkan objek respons sukses
function successResponse(message, data = null) {
    return {
        status: 'success',
        code: 200,
        message,
        data
    };
}

// fungsi untuk menghasilkan objek respons kegagalan
function errorResponse(message) {
    return {
        status: 'error',
        code: 400,
        message
    };
}

module.exports = {
    getOffset,
    isEmpty,
    successResponse,
    errorResponse
};
