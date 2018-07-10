/*
    展示图片
    发送ajax请求(包含了notify函数)
    错误校验
    特殊的校验规则
    分页
    特殊的topbar
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

/* 分页 */

    <div class="pagination" id="pagination" data-bind="visible: total() > 0">
        <div class="prev" data-bind="click: prevClick, visible: pageNo() != 1">
            <span>上一页</span>
        </div>
        <div class="num" id="num">
        </div>
        <div class="next" data-bind="click: nextClick, visible: pageNo() != Math.ceil(total()/pageSize())">
            <span>下一页</span>
        </div>
        <div class="jump">
            <input type="number" placeholder="1" data-bind="value: jumpNum">
            <span data-bind="click: jumpClick">跳转</span>
        </div>
    </div>

/*  特殊的topbar
 *  点击跳转到相应条目
 *  滑到相应地方的时候回高亮那个条目
 *  html 照常布局
 * */
html
    main
        topbar - 标题1 标题2 标题3 
        content - [内容1 内容2, 内容3](content的css要设置高度,overflow=auto)

js (运行bindEvents即可) 
     var getTop = function(id) {
         return document.querySelector('#' + id).getBoundingClientRect().top;
     }
     
     var findClost = function(distanceList) {
         var baseValue = 380;
         var minIndex = 1;
         var minValue = distanceList[0];
         distanceList.map(function(data, index){
             if (Math.abs(minValue - baseValue) > Math.abs(data - baseValue)){
                 minValue = data;
                 minIndex = index + 1;
             }
         })
 
         $('.navbar > div:nth-child(' + minIndex + ')' ).addClass('active').siblings('.active').removeClass('active');
     }
 
 
     var ligntningSlide = function(index, ids`) {
         var distance = getTop(ids[index]) - 400;
 
         document.querySelector('.content').scrollTop += distance;
     }
 
     var bindEvents = function() {
         var ids = ['introduction', 'product', 'case', 'article', 'works', 'collect'];
 
         // 跳转到相应位置
         $('.navbar>div').on('click', function(e) {
             var $e = $(e.currentTarget);
             lightningSlide($e.index(), ids);
         })
 
         // 高亮最近的tab
         document.querySelector('.content').onscroll = function() {
             var distanceList = ids.map(function(data, index){
                 return getTop(data);
             })
             findClost(distanceList);
         }
     }






