(() => {
  function autoRootFontSize () {
    // getBoundingClientRect返回元素的大小及其相对于视口的位置
    const boundingClientWidth = document.documentElement.getBoundingClientRect().width
    const fontSize = Math.min(screen.width, boundingClientWidth) / 750 * 32 + 'px'
    // 为网页根节点赋值
    document.documentElement.style.fontSize = fontSize
    // 取screen.width和document.documentElement.getBoundingClientRect().width的最小值；
    // 除以750，乘以32；就是原本是750大小的32px;如果屏幕大小变成了375px,那么字体就是16px;
    // 根字体fontSize大小和屏幕大小成正比变化
  }
  // 监听屏幕变化,更新根节点fontsize值
  window.addEventListener('resize', autoRootFontSize)
  // 初始化fontsize值
  autoRootFontSize()
})()
