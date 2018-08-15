var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var isAndroid = navigator.userAgent.indexOf('Android') > -1;

// import 'common/modules/token.js';
// if (window.ydwToken === '' && window.ydwVersion === '') {
//     checkUser();
// };

window.getMobile = function (mobile) {
    window.ydwMobile = mobile;
}

//跳转至登录页
export function login() {

    if (isiOS && !window.mars) {
        location.href = 'ydlc://h5/login';
    } else if (window.mars) {
        window.mars.login();
    }
};


//open函数需要引入非token.js并获取ydwVersion值
//跳转至自定义页面！Id
//id类型列表：
//0:无动作，1：精品推荐，2：理财产品，3：账号，4：发现，5：URL，6：产品详情，7：立即，8：账户中心，9：完善，10：我的钱包，11：邀请好友，12：个人信息
//110版本意思时候，我的页面为4  小于时候为3
export function open(id, url, sid, text) {

    var $url = url || '';
    var $sid = sid || '';
    var $text = text || '';

    if (isiOS && !window.mars) {
        if ($url != '' || $sid != '' || $text != '') {
            // location.href = 'ydlc://h5/open?action=' + id + '&url=' + $url;

            location.href = 'ydlc://h5/open?action=' + id + '&url=' + $url + '&id=' + $sid + '&text=' + $text;
        }else {

            location.href = 'ydlc://h5/open?action=' + id;
        }
    } else if (window.mars) {
        let idNum = Number(id);
        let mathVersion = '';
            mathVersion=String(window.ydwVersion).replace(/[^0-9]/ig,'')+'000';
            mathVersion=Number(mathVersion.substr(0,3));

        // if (Number(mathVersion) <= 105) {
        //     switch (idNum) {
        //         case 4:
        //             idNum = 3
        //             break;
        //         case 3:
        //             idNum = 4
        //             break;
        //         case 12:
        //             idNum = 17
        //             break;
        //         case 14:
        //             idNum = 21
        //             break ;
        //         case 17:
        //             idNum=12;
        //         default:
        //             idNum = idNum;
        //     }
        // };
        // if (Number(mathVersion) <= 110 && Number(mathVersion) > 105) {
        //     if (idNum == 4) {
        //         idNum = 3
        //     } else if (idNum == 3) {
        //         idNum = 4
        //     }
        // };
        if ($url != '' || $sid != '' || $text != '') {
            window.mars.toAction(idNum, $url, $sid, $text);
        } else {
            window.mars.toAction(idNum);
        }
    }
};

//获取手机号
export function mobile() {


    if (isiOS && !window.mars) {

        location.href = 'ydlc://h5/getMobile'
    } else if (window.mars) {



        window.ydwMobile = window.mars.getMobile();
    }
};

//分享跳转
export function share(url, title, summary, mobile) {

    if (isiOS && !window.mars) {
        if (mobile) {
            url = url + '%3Fmo%3D' + mobile;
        };
        location.href = 'ydlc://h5/share?url=' + url + '&title=' + title + '&summary=' + summary;
    } else if (window.mars) {
        if (mobile) {
            url = url + '?mo=' + mobile;
        }
        window.mars.shareActivity(url, title, summary);
    }
};


//事件-----暂时无用！
export function eventStatistic(eventId) {
    if (isiOS && !window.mars) {
        location.href = 'ydlc://h5/eventStatic?eventid=' + eventId;
    } else if (window.mars) {
        window.mars.onEventStatistic(eventId);
    }
};


//loginOrCash:点击button时候，会识别是否在app内，如果在app外部跳转至下载app页面；如果登录时候，跳转至optionType代号页面（默认调至理财产品页面）；未登录时候，跳转至登录页
export function loginOrCash(optionType, callback) {
    if (ydwToken === '' && ydwVersion === '') {
        if (callback) {
            callback();
            return;
        };
        return;
    };
    let actionType = 2;
    if (parseInt(optionType)) {
        actionType = optionType;
    }
    if (ydwToken && ydwToken.length > 10) {
        !isiOS ? window.mars.toAction(actionType) : window.location.href = 'ydlc://h5/open?action=' + actionType;
    } else {
        !isiOS ? window.mars.login() : window.location.href = 'ydlc://h5/login';

    };
}


// 判断是否在微信中打开
export function isWeixin() {

    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }

}