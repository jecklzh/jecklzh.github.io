// 清空密码
function clearPassword() {
  localStorage.removeItem('encrypted_password');
}

// 监听页面卸载事件（如关闭页面、刷新页面等）
window.addEventListener('beforeunload', function(event) {
  clearPassword(); // 页面卸载前清空密码
});

// 监听页面刷新事件
window.addEventListener('unload', function(event) {
  clearPassword(); // 页面刷新时清空密码
});
