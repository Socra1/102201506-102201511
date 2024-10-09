document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    renderLoginForm();
});

function renderNavigation() {
    const nav = document.getElementById('mainNav');
    nav.innerHTML = `
        <ul>
            <li><a href="../index.html">首页</a></li>
            <li><a href="login.html">登录</a></li>
            <li><a href="register.html">注册</a></li>
        </ul>
    `;
}

function renderLoginForm() {
    const main = document.getElementById('mainContent');
    main.innerHTML = `
        <div class="container login-container">
            <h2>登录</h2>
            <form id="loginForm" class="login-form">
                <div class="form-group">
                    <label for="username">用户名</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">密码</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <label>身份</label>
                    <div class="radio-group">
                        <input type="radio" id="roleStudent" name="role" value="student" checked>
                        <label for="roleStudent">学生</label>
                        <input type="radio" id="roleTutor" name="role" value="tutor">
                        <label for="roleTutor">导师</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">登录</button>
            </form>
            <p class="register-link">还没有账户? <a href="register.html">立即注册</a></p>
        </div>
    `;

    document.getElementById('loginForm').addEventListener('submit', handleLogin);
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const role = document.querySelector('input[name="role"]:checked').value;

    // 简单的表单验证
    if (!username || !password) {
        showError('请填写所有字段');
        return;
    }

    // 模拟登录过程
    simulateLogin(username, password, role);
}

function simulateLogin(username, password, role) {
    // 在实际应用中，这里应该发送请求到服务器进行验证
    setTimeout(() => {
        // 模拟登录成功
        const user = {
            id: 1, // 这里应该是从服务器获取的用户ID
            name: username,
            role: role
        };

        // 将用户信息存储在 localStorage 中
        localStorage.setItem('currentUser', JSON.stringify(user));

        // 登录成功后
        if (typeof window.updateCurrentUser === 'function') {
            window.updateCurrentUser();
        }
        window.location.href = 'dashboard.html';
    }, 1000); // 模拟网络延迟
}

function showError(message) {
    alert(message); // 在实际应用中，你可能想使用更友好的错误显示方式
}