const CUSTOMER_SITES = {
    red_bull: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '紅牛資源',
    },
    quantum: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子資源',
    },
    open_cinema: {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '開放電影',
    },
    high_quality_resource: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '优质资源库',
    },
    three_nine: {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影視',
    },
    paradise: {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源',
    },
    le_huo: {
        api: 'http://lehootv.com/api.php/provide/vod',
        name: '乐活影视',
    },
    chinatown: {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街',
    },
    cool_point: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源1',
    },
    wolong: {
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    cool_point: {
        api: 'http://kudian10.com/api.php/provide/vod',
        name: '酷点资源2',
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
