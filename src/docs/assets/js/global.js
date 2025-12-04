/*
    ANIMATION_DURATION_MS应为ANIMATION_STYLE的重复次数*每次时间例如
    const ANIMATION_STYLE = 'flash 0.3s ease 3'
    结果应为
    const ANIMATION_DURATION_MS = (0.3*3)
 */
const ANIMATION_DURATION_MS = 900
const ANIMATION_STYLE = 'flash 0.3s ease 3'
// 运行状态
window.addEventListener('hashchange', () => {
    // 1. 获取当前 hash 对应的元素
    const targetId = location.hash.substring(1)
    const targetElement = document.getElementById(targetId)

    // 2. 删除 hash，不刷新页面 (保持 URL 干净)
    history.replaceState(null, '', location.pathname + location.search)

    if (targetElement) {
        targetElement.animate(
            [
                { backgroundColor: 'transparent' },       // 起始状态
                { backgroundColor: 'skyblue', offset: 0.5 }, // 中间状态
                { backgroundColor: 'transparent' }        // 结束状态
            ],
            {
                // 单次动画时长 (ms)
                duration: 300,
                // 循环次数
                iterations: 3,
                easing: 'ease'
            }
        )
    }
})