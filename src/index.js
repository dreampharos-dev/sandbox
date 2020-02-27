const clockField = document.getElementById("LastEditTime");

function getTime() {
  const date = new Date();

  // 今度、入力作業が終わる時間を読み込んで表示するが、今はテストで現在時間表示する。
  clockField.innerText = `最終修正日時：` + date;
}

function init() {
  getTime();
}

init();
