# 🎯 Task Management SaaS

**プロフェッショナル向けタスク管理プラットフォーム**

このプロジェクトは、**vibe-coding-template**の検証プロジェクトとして、複雑なモノレポ構成での大規模アプリケーション開発を実践するためのものです。Claude Codeとの協働開発における知見の蓄積と、効率的な開発手法の検証を目的としています。

## 🎯 プロジェクト概要

- **目的**: エンタープライズ向けタスク管理SaaSの構築
- **特徴**: リアルタイム更新、マルチテナント対応、ロールベースアクセス制御
- **構成**: Turborepoを使用したモノレポ構成
- **検証対象**: vibe-coding-templateの実用性と改善点の発見

## 🛠️ 技術スタック

### 🏗️ アーキテクチャ
- **Turborepo**: モノレポ管理とビルドオーケストレーション
- **pnpm**: 高速パッケージマネージャー
- **TypeScript**: 全体の型安全性

### 🎨 フロントエンド
- **Next.js 14**: App Router対応の最新版
- **React 18**: Server Components + Client Components
- **Tailwind CSS**: ユーティリティファーストCSS
- **Radix UI**: アクセシブルUIコンポーネント

### 🚀 バックエンド
- **Express.js**: 高速Webフレームワーク
- **Socket.io**: リアルタイム通信
- **TypeScript**: 型安全なAPI開発

### 📊 データベース
- **Prisma**: 次世代ORMとスキーマ管理
- **PostgreSQL**: エンタープライズグレードのRDB

### 🧪 テスト環境（予定）
- **Vitest**: 高速テストランナー
- **Playwright**: E2Eテスト自動化

## 📁 プロジェクト構成

```
task-management-saas/
├── apps/
│   ├── web/                    # Next.js 14 フロントエンド
│   │   ├── app/               # App Router構成
│   │   ├── components/        # Reactコンポーネント
│   │   └── package.json       # Web固有の依存関係
│   └── api/                    # Express バックエンド
│       ├── src/               # APIソースコード
│       ├── routes/            # APIエンドポイント
│       └── package.json       # API固有の依存関係
├── packages/
│   ├── ui/                     # 共有UIコンポーネント
│   │   ├── src/components/    # Radix UI + Tailwindコンポーネント
│   │   └── tailwind.config.ts # 共有Tailwind設定
│   ├── database/               # Prismaデータベース設定
│   │   ├── prisma/schema.prisma # データベーススキーマ
│   │   └── index.ts           # Prisma Client エクスポート
│   └── shared/                 # 共有型定義・ユーティリティ
│       ├── types/             # TypeScript型定義
│       └── utils/             # 共通ユーティリティ関数
├── turbo.json                  # Turborepo設定
├── pnpm-workspace.yaml         # pnpm workspace設定
└── .ai/                        # AI開発支援ドキュメント
```

## 🚀 セットアップ手順

### 1. 依存関係のインストール

```bash
# pnpmをグローバルインストール（未インストールの場合）
npm install -g pnpm

# プロジェクトの依存関係をインストール
pnpm install
```

### 2. PostgreSQLの設定

```bash
# PostgreSQLを起動（Dockerを使用する場合）
docker run --name task-management-db \
  -e POSTGRES_USER=user \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=taskmanagement \
  -p 5432:5432 -d postgres:15

# または、ローカルのPostgreSQLを使用
createdb taskmanagement
```

### 3. 環境変数の設定

```bash
# ルートディレクトリに.envファイルを作成
cp .env.example .env

# 必要な環境変数を設定
DATABASE_URL="postgresql://user:password@localhost:5432/taskmanagement"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

### 4. データベースのセットアップ

```bash
# Prisma Clientの生成
pnpm turbo db:generate

# データベーススキーマの適用
pnpm turbo db:push
```

### 5. 開発サーバーの起動

```bash
# 全体の開発サーバーを起動
pnpm dev

# または個別に起動
pnpm --filter=@task-management/web dev  # フロントエンド: http://localhost:3000
pnpm --filter=@task-management/api dev  # バックエンド: http://localhost:3001
```

## 📈 開発状況

### ✅ 実装済み機能

- **モノレポ基盤**: Turborepo + pnpm workspace構成
- **フロントエンド基盤**: Next.js 14 App Router + Tailwind CSS
- **バックエンド基盤**: Express + Socket.io + TypeScript
- **データベース基盤**: Prisma + PostgreSQL スキーマ設計
- **共有パッケージ**: UI、Database、Shared型定義
- **開発環境**: 型チェック、Linting、フォーマット設定

### 🚧 開発中の機能

- **認証システム**: NextAuth.js v5統合
- **リアルタイム機能**: Socket.ioの詳細実装
- **UI コンポーネント**: Radix UIベースの共有コンポーネント拡充

### 📋 今後の予定

- **ユーザー管理**: 登録、ログイン、プロフィール管理
- **ワークスペース**: マルチテナント対応
- **タスク管理**: CRUD操作、ステータス管理、優先度設定
- **プロジェクト管理**: プロジェクト作成、メンバー管理
- **リアルタイム更新**: タスク状態の即座の反映
- **ロールベースアクセス**: Owner、Admin、Member、Viewer権限
- **通知システム**: リアルタイム通知とメール通知
- **ダッシュボード**: アナリティクスと進捗可視化
- **API設計**: REST API + GraphQL検討
- **テスト**: Unit、Integration、E2Eテストの実装

## 🔧 開発コマンド

### 全体操作
```bash
# 全体ビルド
pnpm build

# 全体開発サーバー起動
pnpm dev

# 全体Lint実行
pnpm lint

# 全体フォーマット
pnpm format
```

### パッケージ別操作
```bash
# Web アプリのみ起動
pnpm --filter=@task-management/web dev

# API サーバーのみ起動  
pnpm --filter=@task-management/api dev

# 特定パッケージのビルド
pnpm --filter=@task-management/ui build
```

### データベース操作
```bash
# Prisma Client生成
pnpm turbo db:generate

# データベースにスキーマをプッシュ
pnpm turbo db:push

# マイグレーション作成・適用
pnpm turbo db:migrate

# Prisma Studio起動
pnpm --filter=@task-management/database db:studio
```

## 🧪 vibe-coding-templateとの関係

### このプロジェクトの目的

1. **実用性検証**: 複雑なモノレポ構成でのvibe-coding-templateの効果測定
2. **スケーラビリティ検証**: 大規模アプリケーション開発での適用可能性
3. **知識蓄積**: 実開発で得られた知見の体系的な収集
4. **改善点発見**: テンプレートの不足部分や改善点の特定

### 発見した課題と改善点

#### 🔍 現在の発見事項

**良かった点:**
- `.ai/`ディレクトリによる知識管理システムの有効性
- Claude Codeとの協働開発における作業効率の向上
- 構造化されたドキュメントによるコンテキスト維持

**改善が必要な点:**
- モノレポ構成に特化したガイドラインの不足
- 複数パッケージ間の依存関係管理の複雑さ
- 大規模プロジェクトでの知識管理スケーリングの課題

**今後のテンプレート改善提案:**
- モノレポテンプレートの追加
- パッケージ間設計パターンのドキュメント化
- 大規模プロジェクト用の知識管理フロー

### 知見の記録場所

プロジェクト進行中に得られた知見は以下に蓄積しています：

- `.ai/troubleshooting.md`: 技術的問題と解決策
- `.ai/tech-notes.md`: 技術選択の理由と決定事項  
- `.ai/lessons-learned.md`: 開発パターンとベストプラクティス
- `.ai/journal/`: 日次開発記録

## 🤝 コントリビューション

このプロジェクトは実験的なものですが、以下の点で貢献いただけます：

1. **バグ報告**: Issues での不具合報告
2. **機能提案**: 新機能や改善のアイデア
3. **知見共有**: vibe-coding-templateの使用体験
4. **ドキュメント改善**: READMEや`.ai/`ドキュメントの改善

## 📞 サポート

- **プロジェクト固有の問題**: `.ai/troubleshooting.md`を確認
- **vibe-coding-template**: ベーステンプレートのドキュメント参照
- **技術的質問**: Issuesでお気軽にご質問ください

## 📝 ライセンス

MIT License - 自由に使用・改変してください

---

**🚀 Enterprise-Grade Task Management with Modern Tech Stack! 📋**

このプロジェクトを通じて、vibe-coding-templateの実用性を検証し、より良いAI協働開発環境の構築を目指しています。