/*
 * @Description: axios
 * @Autor: HuiSir<273250950@qq.com>
 * @Date: 2022-08-29 23:42:23
 * @LastEditTime: 2022-08-30 01:38:00
 */
import axios from 'axios'

const Axios = axios.create({
    baseURL: import.meta.env.VITE_BASE_API, //api路径
    withCredentials: true, // 跨域时允许设置cookie
    timeout: 10000,      //超时
})

export default Axios