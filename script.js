// 当页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取h1标签
    const h1 = document.querySelector('h1');
    // 为它添加点击事件
    h1.addEventListener('click', function() {
        alert('你点击了标题！');
    });
});