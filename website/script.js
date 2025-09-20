// 导航功能
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            navLinks.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // 添加活动状态
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
            
            // 关闭移动端菜单
            navMenu.classList.remove('active');
        });
    });

    // 移动端菜单切换
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // 平滑滚动到页面顶部
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // 按钮点击事件
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // 移除所有活动状态
                navLinks.forEach(nav => nav.classList.remove('active'));
                sections.forEach(section => section.classList.remove('active'));
                
                // 显示目标页面
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).classList.add('active');
                
                // 更新导航状态
                document.querySelector(`[href="#${targetId}"]`).classList.add('active');
                
                // 滚动到顶部
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});