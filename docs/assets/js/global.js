// 初始化动画状态
let running = false

window.addEventListener('hashchange', () => {
    // 获取当前 hash 对应的元素
    const targetId = location.hash.substring(1)
    const targetElement = document.getElementById(targetId)

    // 删除 hash，不刷新页面 (保持 URL 干净)
    history.replaceState(null, '', location.pathname + location.search)

    // 判断动画状态
    if (running) return

    // 判断元素是否存在
    if (targetElement) {
        // 获取主题深浅状态
        const themeState = JSON.parse(localStorage.getItem("/Meme-Analysis/.__palette")).index

        // 定义动画颜色
        let animationColors
        switch (themeState) {
            case 0:
                animationColors = "dodgerblue"
                break
            case 1:
                animationColors = "skyblue"
                break
            default:
                alert("请反馈bug，https://github.com/qaq1919810/Meme-Analysis/issues/new/choose")
        }

        // 创建执行动画
        const ani = targetElement.animate(
            [
                // 起始状态
                {backgroundColor: 'transparent'},
                // 中间状态
                {backgroundColor: animationColors, offset: 0.5},
                // 结束状态
                {backgroundColor: 'transparent'}
            ],
            {
                // 单次动画时长 (ms)
                duration: 300,
                // 循环次数
                iterations: 3,
                // 动画类型
                easing: 'ease'
            }
        )

        // 标记动画状态
        running = true

        // 还原动画状态
        ani.finished.finally(() => {
            running = false
        })
    }
})