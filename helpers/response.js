const STATUS_SUCCESS = 'success';
const STATUS_ERROR = 'error';

const createResponse = (status, data = null, message = '') => ({ status, data, message });

const successResponse = (data, message = '') => createResponse(STATUS_SUCCESS, data, message);

const errorResponse = (message = '') => createResponse(STATUS_ERROR, null, message);

module.exports = {
    createResponse,
    successResponse,
    errorResponse,
};
