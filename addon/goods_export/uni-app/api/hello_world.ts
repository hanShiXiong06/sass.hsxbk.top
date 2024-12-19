
import request from '@/utils/request'

/***************************************************** hello world ****************************************************/
export function getHelloWorld() {
    return request.get(`exam/hello_world`)
}

