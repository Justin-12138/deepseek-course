// 创建AI粒子效果
function createAIParticles() {
    const container = document.getElementById('aiCanvas');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('ai-particle');
        
        // 随机大小
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // 随机位置
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `-${size}px`;
        
        // 随机动画延迟和持续时间
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 20;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
    }
}

// 页面加载后初始化
window.addEventListener('DOMContentLoaded', () => {
    createAIParticles();
    
    // 添加AI相关交互效果
    const features = document.querySelectorAll('.feature-card');
    features.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.feature-icon');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.feature-icon');
            icon.style.transform = 'scale(1)';
        });
    });
});