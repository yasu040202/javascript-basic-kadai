// HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('text'));

 // HTML要素がクリックされたときにイベント処理を実行する
 btn.addEventListener('click', () => {

    const text = document.getElementById('text').textContent;

    document.getElementById('text').textContent = 'ボタンをクリックしました';
  });