// 生成一个随机的32位数字字符串
function generateRandomString() {
  const chars = '0123456789';
  let result = '';
  for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// 生成随机字符串并使用chrome.storage.local.set()方法存储
function storeRandomString() {
  const randomString = generateRandomString();
  chrome.storage.local.set({ userBehaviorId: randomString }, function() {
      console.log('userBehaviorId has been set to: ' + randomString);
  });
}

// 调用函数
storeRandomString();
