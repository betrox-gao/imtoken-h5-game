import RequestService from '../common/request.js'

export const report = (data) => {
	return RequestService('POST','/api/integral', data)
}