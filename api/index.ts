type CallApiParams = {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    onSuccessfullApiResponse: () => void;
    onInvalidApiResponse: () => void;
    payload?: object;
};

export const callApi = (params: CallApiParams) => {
    const { url, payload = {}, method, onSuccessfullApiResponse, onInvalidApiResponse } = params;
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = () => {
        if ((xhr.readyState === 4 && xhr.status >= 200) || xhr.status <= 299) {
            onSuccessfullApiResponse();
        } else {
            onInvalidApiResponse();
        }
    };

    // Sends the request
    if (Object.keys(payload).length) {
        xhr.send(JSON.stringify(payload));
    } else {
        xhr.send();
    }
};
