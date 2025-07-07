// レスポンシブでボタンテキストを変更する関数
function updateButtonText() {
    const button = document.querySelector('.line-button');
    if (!button) return;
    
    // 画面幅が540px以下の場合
    if (window.innerWidth <= 540) {
        button.textContent = 'LINEで詳細を見る';
    } else {
        button.textContent = 'まずはLINE追加して詳細を見る';
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', updateButtonText);

// ウィンドウサイズが変更された時に実行
window.addEventListener('resize', updateButtonText);