function buildSuccessResponse(message, data = null) {
  return {
    success: true,
    message,
    data
  };
}

module.exports = {
  buildSuccessResponse
};
