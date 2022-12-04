import base from './config.js'

const reqHeader = {
    "Content-Type": "application/json; charset=UTF-8",
}

const RequestService = (method = 'GET',url, data) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url,
            data: data,
            method: method,
            withCredentials: true,
            header: reqHeader,
            dataType: 'json',
            success(res) {
				if(res.statusCode === 200) {
					resolve(res.data)
				} else {
                    reject({
                        message: 'err'
                    });
                }
            },
            fail(err) {
				// uni.showModal({
				// 	content:err
				// })
                reject(err)
            }
        })
    })
}

export function setUserToken(token) {
    reqHeader.Authorization = token;
}
export function setRequestLang(lang) {
    reqHeader.Language = lang;
}
export default RequestService;
