/*
 * @Description: jsonp
 * @Autor: HuiSir<273250950@qq.com>
 * @Date: 2022-08-30 01:38:12
 * @LastEditTime: 2022-08-30 13:11:27
 */
export default (url: string, data: { [key: string]: string | number }, cbKey: string = 'cb') => {
    return new Promise((resolve, reject) => {
        try {
            const jsonpCb = '__JSONP_CALLBACK';
            (window as any)[jsonpCb] = (result: any) => {
                resolve(result)
            }
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = url + obj2Query(data) + `&${cbKey}=window.${jsonpCb}&sj=${Date.now()}`
            document.getElementsByTagName('head')[0].appendChild(script)
            script.onload = () => {
                // delete (window as any)[jsonpCb]
                script.remove()
            }
        } catch (error) {
            reject(error)
        }
    })
}


/* 请求数据转换为query格式 */
function obj2Query(data: { [key: string]: string | number }) {
    return Object.keys(data).reduce(
        (prev, key, index) => `${prev}${index > 0 ? '&' : ''}${key}=${data[key]}`,
        '?'
    )
}