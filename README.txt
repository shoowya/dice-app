サイコロ PWA（スマホアプリ版）

【公開方法】このフォルダ全体を HTTPS のホスティングに置くだけです。
  例: Netlify Drop (app.netlify.com/drop) にフォルダをドラッグ / GitHub Pages / Cloudflare Pages
【インストール】
  iPhone : Safari で開く → 共有 → 「ホーム画面に追加」
  Android: Chrome で開く → メニュー → 「アプリをインストール」
初回アクセス後はオフラインでも動きます（three.js もキャッシュされます）。
※ file:// や http:// では Service Worker が動かないため、必ず HTTPS で公開してください。
