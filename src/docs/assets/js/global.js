// 初始化动画状态
let running = false

window.addEventListener('hashchange', () => {
    // 获取当前 hash 对应的元素
    const targetId = location.hash.substring(1)
    const targetElement = document.getElementById(targetId)

    // 删除 hash，不刷新页面 (保持 URL 干净)
    history.replaceState(null, '', location.pathname + location.search)

    // 判断动画状态
    if(running)return

    // 判断元素是否存在
    if (targetElement) {
        const ani = targetElement.animate(
            [
                // 起始状态
                { backgroundColor: 'transparent' },
                // 中间状态
                { backgroundColor: 'skyblue', offset: 0.5 },
                // 结束状态
                { backgroundColor: 'transparent' }
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
        ani.finished.finally(()=>{
            running = false
        })
    }
})