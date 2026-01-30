// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 隐藏加载屏幕
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1500);

    // 初始化导航栏
    initNavigation();

    // 初始化滚动效果
    initScrollEffects();

    // 初始化表单功能
    initForm();

    // 初始化粒子效果
    initParticles();

    // 初始化动画观察器
    initIntersectionObserver();

    // 初始化返回顶部按钮
    initScrollTopButton();

    // 添加客户徽章轮播
    initClientCarousel();

    // 初始化神经网络动画
    initNeuralNetwork();

    // 初始化鼠标跟随效果（仅桌面设备）
    addMouseFollowEffect();

    // 初始化滚动进度条
    addScrollProgress();

    console.log('Dream AI 企业智能体平台网站已加载完成 - Tech Theme');
});

// 初始化导航栏
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // 动画汉堡菜单
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // 点击菜单项后关闭移动端菜单
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // 导航栏滚动效果
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}

// 初始化滚动效果
function initScrollEffects() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // 减去导航栏高度
                
                // 使用更流畅的滚动
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 滚动时添加动画类
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                
                // 特殊处理某些元素
                if (entry.target.classList.contains('feature-card')) {
                    entry.target.style.animationDelay = entry.target.dataset.index * 0.1 + 's';
                }
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    document.querySelectorAll('.feature-card, .case-card, .mode-card, .stage, .scenario-category').forEach((el, index) => {
        el.dataset.index = index;
        observer.observe(el);
    });
}

// 初始化表单功能
function initForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // 简单验证
            if (!data.name || !data.email) {
                showError('请填写必填项');
                return;
            }
            
            // 模拟提交过程
            const submitBtn = contactForm.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '提交中...';
            submitBtn.disabled = true;
            
            // 模拟API调用
            setTimeout(() => {
                showSuccess('您的咨询已提交，我们将尽快与您联系！');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// 显示错误消息
function showError(message) {
    // 创建错误提示
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(220, 38, 38, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(errorDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        errorDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(errorDiv);
        }, 300);
    }, 3000);
}

// 显示成功消息
function showSuccess(message) {
    // 创建成功提示
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(16, 185, 129, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(successDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        successDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 3000);
    }, 3000);
}

// 初始化粒子效果
function initParticles() {
    // 如果页面中有particles容器，初始化粒子效果
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#64ffda"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#64ffda",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
}

// 初始化交叉观察器（用于动画）
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // 添加淡入动画
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.feature-card, .case-card, .mode-card, .stage, .scenario-category, .tech-feature').forEach(el => {
        // 设置初始状态
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 初始化返回顶部按钮
function initScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        // 监听滚动事件
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        // 点击返回顶部
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 初始化客户徽章轮播
function initClientCarousel() {
    // 这里可以添加客户徽章轮播功能
    console.log('客户徽章轮播已初始化');
}

// 初始化神经网络动画
function initNeuralNetwork() {
    const nodes = document.querySelectorAll('.neural-node');
    if (nodes.length > 0) {
        // 添加连接线动画
        setInterval(() => {
            nodes.forEach(node => {
                // 随机改变节点亮度以产生脉冲效果
                const brightness = 0.7 + Math.random() * 0.3;
                node.style.opacity = brightness;
                node.style.transform = `scale(${0.9 + Math.random() * 0.2})`;
            });
        }, 300);
    }
}

// 添加鼠标跟随效果
function addMouseFollowEffect() {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".neural-node");
    const colors = ["#64ffda", "#00f3ff", "#bd34fe", "#00b4a0", "#0a192f", "#172a45"];

    let currentCircle = 0;
    let currentCircleStyleIndex = 0;

    circles.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function(e){
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";

            circle.style.scale = (circles.length - index) / circles.length;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) / 8;
            y += (nextCircle.y - y) / 8;
        });

        requestAnimationFrame(animateCircles);
    }

    // Only enable mouse follow effect on desktop devices
    if (window.innerWidth > 768) {
        animateCircles();
    }
}

// 添加滚动进度条
function addScrollProgress() {
    const progressContainer = document.createElement('div');
    progressContainer.id = 'scroll-progress';
    progressContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #64ffda, #00b4a0);
        z-index: 9999;
        transition: width 0.05s ease;
    `;
    document.body.appendChild(progressContainer);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressContainer.style.width = scrollPercent + '%';
    });
}

// 添加动画CSS
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        /* 添加悬停效果 */
        .feature-card:hover,
        .case-card:hover,
        .mode-card:hover,
        .stage:hover,
        .scenario-category:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border-color: #667eea;
        }
        
        /* 添加神经网络动画 */
        .neural-node {
            animation: neuralPulse 2s infinite alternate;
        }
        
        .neural-node:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .neural-node:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes neuralPulse {
            0% {
                transform: scale(1);
                opacity: 0.8;
                box-shadow: 0 0 10px #64ffda;
            }
            100% {
                transform: scale(1.3);
                opacity: 1;
                box-shadow: 0 0 20px #64ffda, 0 0 30px rgba(100, 255, 218, 0.6);
            }
        }
        
        /* 添加平台架构图动画 */
        .layer {
            animation: layerFloat 3s ease-in-out infinite;
        }
        
        .layer:nth-child(2) {
            animation-delay: 1s;
        }
        
        .layer:nth-child(3) {
            animation-delay: 2s;
        }
        
        @keyframes layerFloat {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        
        /* 客户徽章样式 */
        .clients-section {
            padding: 60px 0;
            background: rgba(10, 25, 47, 0.5);
        }
        
        .clients-grid {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .client-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            background: var(--glass-bg);
            border-radius: 10px;
            transition: all 0.3s ease;
            font-weight: bold;
            color: #64ffda;
            border: 1px solid rgba(100, 255, 218, 0.1);
        }
        
        .client-logo:hover {
            transform: scale(1.1);
            box-shadow: 0 10px 25px rgba(100, 255, 218, 0.2);
            border-color: rgba(100, 255, 218, 0.3);
        }
        
        /* 业务板块样式 */
        .business-section {
            padding: 100px 0;
            background: rgba(10, 25, 47, 0.7);
        }
        
        .business-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .business-card {
            background: var(--glass-bg);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
            transition: all 0.4s ease;
            text-align: center;
            border: 1px solid rgba(100, 255, 218, 0.1);
            backdrop-filter: blur(10px);
        }
        
        .business-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 15px 50px rgba(100, 255, 218, 0.2);
            border-color: rgba(100, 255, 218, 0.3);
        }
        
        .business-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #64ffda 0%, #00b4a0 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            color: #0a192f;
            font-size: 1.8rem;
            box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
        }
        
        .business-card h3 {
            color: #64ffda;
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }
        
        .business-card p {
            color: var(--text-secondary);
            line-height: 1.6;
        }
        
        /* Cyber tag pulse animation */
        @keyframes pulseGlow {
            0% {
                box-shadow: 0 0 15px rgba(100, 255, 218, 0.2);
            }
            100% {
                box-shadow: 0 0 25px rgba(100, 255, 218, 0.4);
            }
        }
    `;
    document.head.appendChild(style);
}

// 页面加载时添加动画样式
addAnimationStyles();