// @desc    
// @author  wanqiang.pan
// @date    2017/7/18
const stream = weex.requireModule('stream')
const modal = weex.requireModule('modal')

const pullData = (page, cat) => {
    return new Promise(function (resolve, reject) {
        let url = `http://sapi.beibei.com/martgoods/food/${page}-20-${cat}.html`;
        stream.fetch({
            method: 'GET',
            url: url,
            type: 'json',
            timeout: '60000',
        }, resp => {
            if (resp.status === -1) {
                modal.toast({message: '网络未连接，请检查再试', duration: 2})
                reject(resp);
            } else {
                resolve(resp);
            }
        })
    })
};

module.exports = {
    pullData
}