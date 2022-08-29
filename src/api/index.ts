/*
 * @Description: api
 * @Autor: HuiSir<github.com/huisir001>
 * @Date: 2022-08-26 18:08:55
 * @LastEditTime: 2022-08-30 02:22:40
 */
import Req from "../utils/request"
import JSONP from "../utils/jsonp"

export const getBaiduKwds = (wd: string) => JSONP(
    'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
    {
        wd,
        json: 1
    }
)