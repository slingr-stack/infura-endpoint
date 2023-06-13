/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 * {text} method, This is used to config method.
 * {text} url, This is used to config external URL.
 * {Array[string]} pathVariables, This is used to config path variables.
 * {Array[string]} headers, This is used to config headers.
 * {Array[string]} params, This is used to config params.
 * {string} body, This is used to send body request.
 * {boolean} followRedirects, This is used to config follow redirects.
 * {boolean} download, This is used to config download.
 * {boolean} fullResponse, This is used to config full response.
 * {number} connectionTimeout, Read timeout interval, in milliseconds.
 * {number} readTimeout, Connect timeout interval, in milliseconds.
 */
step.apiCallInfura = function (inputs) {

    var inputsLogic = {
		method: inputs.method || "",
        id: inputs.id || "",
        params: inputs.params || {},
        followRedirects: inputs.followRedirects || false,
        download: inputs.download || false,
        fileName: inputs.fileName || "",
        fullResponse: inputs.fullResponse || false,
        connectionTimeout: inputs.connectionTimeout || 5000,
        readTimeout: inputs.readTimeout || 60000
    };

    var options = {
        path: "",
        body: {
            jsonrpc: "2.0",
            method: inputsLogic.method,
            params: inputsLogic.params || [],
            id: inputsLogic.id
        },
        followRedirects: inputsLogic.followRedirects,
        forceDownload: inputsLogic.download,
        downloadSync: false,
        fileName: inputsLogic.fileName,
        fullResponse: inputsLogic.fullResponse,
        connectionTimeout: inputsLogic.connectionTimeout,
        readTimeout: inputsLogic.readTimeout
    }

	return endpoint._post(options);
};