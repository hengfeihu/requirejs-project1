require.config({
    paths: {
        'jquery': 'jquery.min'
    }
});
require(['jquery'], function ($) {
    $(function () {
        alert("加载jquery成功！");
    });
});