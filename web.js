/*
    展示图片
    发送ajax请求(包含了notify函数)
    错误校验
    特殊的校验规则
*/
/* 展示图片 */

self.showImg = function (img) {
    return 'http://' + jsParam.cdn + '/' + img;
};

self.showImg = function (img) {
    var w = arguments[1] ? arguments[1] : '';
    var h = arguments[2] ? arguments[2] : '';
    var type = arguments[3] ? arguments[3] : '';
    if (img && w && type) {
        return 'url(http://' + jsParam.cdn + '/' + img + '?imageView2/1/w/' + w + '/h/' + h + '|imageMogr2/size-limit/' + getImgSize + '!)';
    }
    if (img && w) {
        return 'url(http://' + jsParam.cdn + '/' + img + '?imageView2/1/w/' + w + '/h/' + h + '|imageMogr2/size-limit/' + listImgSize + '!)';
    }
    return 'url(http://' + jsParam.cdn + '/' + img + ')';
};

/ * 发送ajax请求 */
$.ajax({
    url: '/web/product/addpost',
    data: JSON.stringify(modelData)
}).done(function(res){
    switch (res.code) {
        case 1:
            notify('发布产品成功', 'tip-tb-black');
            break;
        case 911:
            var redirectUrl = window.location.href;
            window.location.href = res.url + '?redirectUrl=' + encodeURIComponent(redirectUrl);
            break;
        case 2003:
            notify('发布产品失败', 'tip-tb-red');
            break;
        default:
            notify('发布产品, 请重试!', 'tip-tb-red');
    }
})

function notify(message, type) {
    var notify = $.notify({
        message: message
    }, {
        allow_dismiss: false,
        type: type,
        delay: '50',
        placement: {
            align: 'center'
        },
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        offset: {
            x: $('body').hasClass('sidebar-collapse') ? 0 : 230,
            y: 20
        }
    });
};
 head.load(
     '/static/web/bootstrap/notify/bootstrap-notify.min.js?v=1'
 );

/* 错误校验 */

self.errors = ko.validation.group([]);
self.isValid = ko.computed(function () {
    return self.errors.length === 0;
});

if (!self.isValid()) {
    self.errors.showAllMessages();
    return false;
}


/* 特殊的校验规则 */
specialValidation();
var errorList = self.errorList();
if (errorList.length !== 0) {
    notify(errorList[0], 'tip-tb-red');
    return false;
}

function specialValidation() {
    viewModel.errorList([])

    if (a === b) {
        viewModel.errorList.push('有什么错误')
    }
}
