/*
跨页面通讯
发送ajax请求
从相机中选择图片
*/


/*
跨页面通讯
使用之前页面已经被openWin方法打开
*/
var arg = {
    type: 'refresh',
}
var jsFun = 'init(' + JSON.stringify(arg) + ')';
api.execScript({
    name: 'xxx',
    script: jsFun
})

// 写在接受信息的页面, 这些一般写在init里面
var arg = arguments[0] ? arguments[0] : '';
if (arg) {
    switch (arg.type) {
        case 'refresh':
            // ....
            break;
    }
}

/* 发送ajax请求 */
self.errors = ko.validation.group([])
self.isValid = ko.computed(function () {
    return self.errors().length === 0;
})

self.setUser = function () {
    if (!self.isValid()) {
        api.toast({
            msg: self.errors()[0],
            location: 'middle'
        });
        return false;
    }

    var modelData = {}

    if (self.qq.hasChanges()) {
        modelData.qq = self.qq();
    }

    if ($.fn.isEmpty(modelData)) {
        api.toast({
            msg: '没有进行任何修改',
            location: 'middle'
        });
        return false;
    }

    $('.spinner').show();
    api.ajax({
        url: webhost + '/app/user/setpost',
        method: 'post',
        headers: {
            "user-agent": navigator.userAgent,
            "Cookie": 'PHPSESSID=' + $api.getStorage('PHPSESSID'),
            "X-Requested-With": 'XMLHttpRequest'
        },
        data: {
            body: JSON.stringify(modelData)
        }
    }, function (ret, err) {
        if (ret) {
            switch (ret.code) {
                case 1:
                    self.commit();
                    self.beginEdit();
                    api.toast({
                        msg: '保存修改成功!',
                        location: 'middle'
                    });

                    break;
                case 911:
                    api.openWin({
                        name: 'login',
                        url: 'widget://html/login.html'
                    });
                    break;
                case 2003:
                    api.toast({
                        msg: ret.message,
                        location: 'middle'
                    });
                    break;
                default:
                    api.toast({
                        msg: '保存修改失败!',
                        location: 'middle'
                    });
            }
        } else {
            api.toast({
                msg: err.msg,
                location: 'middle'
            });
        }
        $('.spinner').hide();
    });
}

/* 从相机中选择图片 */
/*
从相机、相册中选择图片的html
<div class="ui-actionsheet" id = "choose" >
    <div class="ui-actionsheet-cnt">
        <button tapmode data-bind="click: cameraClick.bind($data, 180, 180)">拍照</button>
        <button tapmode data-bind="click: albumClick.bind($data, 180, 180)">从手机相册选择</button>
        <button tapmode data-bind="click: cancelChooseClick">取消</button>
    </div>
</div >
*/


self.cameraClick = function() {
    $('#choose').removeClass('show');
    api.getPicture({
        sourceType: 'camera',
        mediaValue: 'pic',
        destinationType: 'url',
        quality: 100
    }, function (ret, err) {
        if (ret.data == '') {
            return false;
        }
        if (ret) {
            qcloudCos.initCOSClient({
                appId: jsParam.appId,
                region: jsParam.region,
            });
            api.showProgress({
                style: 'default',
                animationType: 'fade',
                title: '图片上传',
                modal: false
            });
            var cosPath = 'company/' + (new Date()).valueOf()
            qcloudCos.putObject({
                bucket: jsParam.bucket,
                cosPath: cosPath,
                localPath: ret.data,
                insertOnly: "1",
                sign: jsParam.upToken
            }, function (res) {
                if (res.type == 'onProgress') {
                    var progress = (res.currentSize / res.totalSize * 100).toFixed(0) + '%';
                } else if (res.type == 'onComplete') {
                    self.headimgurl(cosPath);
                    api.hideProgress();
                }
            });
        } else {
            api.toast({
                msg: '用户取消拍照',
                location: 'middle'
            });
        }
    });
}


/* 从相册中选择图片 */

self.albumClick = function () {
    $('#choose').removeClass('show');
    var w = arguments[0] ? arguments[0] : '';
    var h = arguments[1] ? arguments[1] : '';
    api.getPicture({}, function (ret, err) {
        if (ret) {
            qcloudCos.initCOSClient({
                appId: jsParam.appId,
                region: jsParam.region,
            });
            api.showProgress({
                style: 'default',
                animationType: 'fade',
                title: '图片上传',
                modal: false
            });
            var cosPath = 'company/' + (new Date()).valueOf()
            qcloudCos.putObject({
                bucket: jsParam.bucket,
                cosPath: cosPath,
                localPath: ret.data,
                insertOnly: "1",
                sign: jsParam.upToken
            }, function (res) {
                if (res.type == 'onProgress') {
                    var progress = (res.currentSize / res.totalSize * 100).toFixed(0) + '%';
                } else if (res.type == 'onComplete') {
                    self.headimgurl(cosPath);
                    api.hideProgress();
                    self.setUser();
                }
            });
        } else {
            api.toast({
                msg: '打开相册失败, 请重试!',
                location: 'middle'
            });
        }
    });
}