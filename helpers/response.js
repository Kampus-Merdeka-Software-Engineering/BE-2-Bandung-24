const STATUS_SUCCESS = 'success';
const STATUS_ERROR = 'error';
const createResponse = (status, data = null, message = '') => {
    const response = { status };

    // jika status success dan data tidak null, set data
    if (status === STATUS_SUCCESS && data !== null) {
        response.data = data;
    }

    // jika ada pesan, set pesan
    if (message !== '') {
        response.message = message;
    }

    return response;
};

const successResponse = (data, message = '') => createResponse(STATUS_SUCCESS, data, message);
const errorResponse = (message = '') => createResponse(STATUS_ERROR, null, message);

module.exports = {
    createResponse,
    successResponse,
    errorResponse,
};
