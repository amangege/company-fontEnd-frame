/*
    展示图片
    发送ajax请求
    错误校验
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

/* 错误校验 */

self.errors = ko.validation.group([]);
self.isValid = ko.computed(function () {
    return self.errors.length === 0;
});

if (!self.isValid()) {
    self.errors.showAllMessages();
    return false;
                }