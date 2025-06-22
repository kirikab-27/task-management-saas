# トラブルシューティング

## モノレポセットアップの問題

### k001: pnpm dev で "No tasks were executed" エラー
**エラー:** pnpm dev で "No tasks were executed"  
**原因:** 各パッケージの実装が不完全  
**解決:** 各apps/packages配下にpackage.jsonと実装を含める  
**日付:** 2025-06-22  
**バージョン情報:**
- pnpm: latest
- Turborepo: latest

## PostgreSQL認証エラー

### k002: Authentication failed for user 'postgres'
**エラー:** Authentication failed for user 'postgres'  
**原因:** pg_hba.confがpeer認証になっている  
**解決手順:**
1. sudo vim /etc/postgresql/16/main/pg_hba.conf
2. peerをtrustに変更
3. sudo service postgresql restart
4. ALTER USER postgres WITH PASSWORD 'postgres';
5. trustをmd5に戻す

**日付:** 2025-06-22  
**バージョン情報:**
- PostgreSQL: 16

## Prismaセットアップエラー

### k003: schema.prismaが見つからない
**エラー:** schema.prismaが見つからない  
**原因:** packages/database直下に配置されていた  
**解決:** mkdir prisma && mv schema.prisma prisma/  
**日付:** 2025-06-22  
**バージョン情報:**
- Prisma: latest

## 環境変数の引き継ぎ問題

### k004: packages/databaseで環境変数が読めない
**問題:** packages/databaseで環境変数が読めない  
**解決:** cp ../../.env . でローカルにコピー  
**日付:** 2025-06-22  
**関連知識:** モノレポ環境変数管理パターン

## 依存ツールの確認

### k005: 必要な依存ツールのインストール
**必要ツール:**
- pnpm: npm install -g pnpm
- PostgreSQL: sudo apt install postgresql  
- 初期DB作成: CREATE DATABASE task_management;

**日付:** 2025-06-22  
**適用環境:** WSL2/Ubuntu