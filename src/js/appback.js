/**
 * 解决hbuilder打包app之后点击手机返回键直接退出app的
 */
document.addEventListener('plusready', function () {
  var first = null;
  var webview = plus.webview.currentWebview();
  plus.key.addEventListener('backbutton', function () {
    webview.canBack(function (e) {
      if (e.canBack) {
        webview.back(); //这里不建议修改自己跳转的路径  
      } else {
        //首次按键，提示‘再按一次退出应用’  
        if (!first) {
          first = new Date().getTime(); //获取第一次点击的时间戳  
          plus.nativeUI.toast("再按一次退出应用", {
            duration: 'short'
          }); //通过H5+ API 调用Android 上的toast 提示框  
          setTimeout(function () {
            first = null;
          }, 1000);
        } else {
            // 获取第二次点击的时间戳, 两次之差 小于 1000ms 说明1s点击了两次, 
          if (new Date().getTime() - first < 1000) {  
            plus.runtime.quit(); //退出应用  
          }
        }
      }
    })
  });
});