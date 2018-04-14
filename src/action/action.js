import * as ActionConstants from '../common/constants';
import * as HttpClient from '../api/HttpClient';



export function getuserData () {
    return HttpClient.getForUrl('http://localhost:3100/get_task', ActionConstants.GET_USER_DATA)
};
