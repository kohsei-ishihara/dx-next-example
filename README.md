# DX next.js example
DX フロントエンド開発用に調整した Next.js によるアプリケーションです。ボイラープレート的な。  
アクセシビリティ、ユーザビリティ、SEO対策、SNS対応、Docker環境の設定などが含まれています。


## Description
下記は、レポジトリに含まれるファイルとその説明となります。各プロジェクトに合わせて調整してください。  
特に画像は上書いてください。

```
.
├── components                                       // コンポーネント
│   ├── index                                        // index ページ関連
│   │   └── IndexMain.tsx                            // index ページ main コンポーネント
│   ├── layouts                                      // レイアウト関連
│   │   ├── BreadCrumb.tsx                           // パンくずリスト
│   │   ├── JsonLd.tsx                               // json-ld タグ
│   │   └── Layouts.tsx                              // レイアウト関係のコンポーネント
│   ├── other                                        // other ページ関連
│   │   └── OtherMain.tsx                            // other ページ main コンポーネント
│   ├── LazyImg.tsx                                  // Lazyloading Img タグ
│   ├── Page.tsx                                     // API 接続サンプル
│   ├── StyledButton.tsx                             // MaterialUI Button タグカスタマイズサンプル
│   └── StyledButton2.tsx                            // Bootstrap Button タグカスタマイズサンプル
├── containers                                       // Context API 用 Container
│   ├── CounterContainer.ts
│   └── IndexContainer.ts
├── deploy                                           // ディプロイ設定フォルダ
├── docker                                           // Dockerフォルダ
│   ├── development                                  // 開発用
│   │   ├── express                                  // アプリ用
│   │   │   ├── Dockerfile                           // Dockerイメージ設定
│   │   │   ├── docker-compose.yml                   // 通常開発用
│   │   │   └── docker-compose_build.yml             // ビルド確認用
│   │   ├── network                                  // ネットワーク設定ファイル
│   │   │   └── docker-compose.yml
│   │   └── nginx                                    // nginx用
│   │       └── docker-compose.yml
│   └── production                                   // 本番用
│       ├── express                                  // アプリ用 Docker
│       └── nginx                                    // nginx用 Docker
├── functions                                        // 関数群
│   ├── getPageContext.ts                            // Material UI SSR用
│   └── functions.ts                                 // Undefinedの判定
├── mounts                                           // Docker用マウントボリューム
│   ├── lsyncd                                       // express用 Docker lsyncd設定
│   │   └── conf.d
│   │       └── default.conf
│   └── nginx                                        // nginx用 Docker nginx設定
│       └── conf.d
│           ├── default.conf
│           ├── private.key
│           ├── private.pass
│           └── server.crt
├── pages                                            // ページファイル
│   ├── _app.tsx                                     // アプリケーション本体
│   ├── _document.tsx                                // head タグ拡張用
│   ├── index.tsx                                    // index ページ
│   └── other.tsx                                    // other ページ
├── scss                                             // Sass フォルダ
│   └── custom.scss                                  // サイト全体のカスタマイズ用
├── static                                           // 静的ファイル郡
│   ├── images                                       // 画像ファイル
│   │   ├── favicon.ico                              // デフォルトの favicon
│   │   ├── icon-1200×630.png                        // OGP
│   │   ├── icon-128x128.png                         // manifest
│   │   ├── icon-144x144.png                         // manifest, msapplication-TileImage
│   │   ├── icon-150x150.png                         // browserconfig
│   │   ├── icon-152x152.png                         // manifest
│   │   ├── icon-16x16.png                           // favicon
│   │   ├── icon-180x180.png                         // apple-touch-icon
│   │   ├── icon-192x192.png                         // manifest
│   │   ├── icon-310x150.png                         // browserconfig
│   │   ├── icon-310x310.png                         // browserconfig
│   │   ├── icon-32x32.png                           // favicon 大
│   │   ├── icon-512x512.png                         // manifest
│   │   ├── icon-70x70.png                           // browserconfig
│   │   ├── icon-96x96.png                           // favicon Google TV
│   │   └── shim.png                                 // 1x1 透過 png
│   ├── browserconfig.xml                            // win10 用タイル設定
│   ├── robots.txt                                   // クローリング除外設定
│   ├── site.webmanifest                             // pws 設定, Android Chrome 設定
│   └── sitemap.xml                                  // クローリング用、Google Search Consoleから更新
├── .babelrc                                         // babel 設定
├── .env.sample                                      // 環境変数 .env にリネームで利用
├── .eslintrc                                        // eslint 設定
├── .gitignore                                       // git 除外設定
├── .npmrc                                           // fontawesome pro 用 npmライセンス設定
├── .prettierignore                                  // prettier 除外設定
├── .stylelintrc.json                                // stylelint 設定
├── README.md                                        // このファイル
├── docker-compose.dev.sh                            // Docker compose 起動ファイル 開発用
├── docker-compose.dev_build.sh                      // Docker compose 起動ファイル ビルド確認用
├── jest.config.js                                   // jest 設定
├── jest.setup.js                                    // jest 用アダプタ
├── jest.tsconfig.json                               // jset 用 Typescript 設定
├── next-seo.config.js                               // ogp 設定
├── next.config.js                                   // next.js 設定
├── package-lock.json                                // アプリ設定バージョン管理
├── package.json                                     // アプリ設定
├── postcss.config.js                                // PostCSS 設定
├── server.js                                        // express サーバー
├── tsconfig.json                                    // Typescript 設定
└── yarn.lock                                        // yarn で入れた node モジュールのバージョン管理

```

## Demo
N/A

## Requirement
[Docker](https://www.docker.com/)  
[Visual Studio Code](https://code.visualstudio.com/) またはその他のエディタ・IDE  

## Install
### アプリフォルダの準備
Github でアプリの新しいレポジトリを準備しておく

このレポジトリをクローン
```
git clone [このレポジトリ] [新しいアプリのフォルダ]
```

リモートレポジトリを確認するとこのレポジトリの URL になっているので変更、push しておく
```
cd [新しいアプリのフォルダ]

git remote -v

git remote set-url origin [新しいレポジトリのURL]

git push
```

### 調整作業
1. localhost の 80, 443, 3000 番ポートを開けておく。すでにふさがっている場合は、docker-compose ファイルのポートを調整したり、お使いの PC の hosts ファイルにドメインを設定してたりなど適宜調整してください。
2. .env.sample をコピーして .env ファイルを作成適宜変更してください。
3. static フォルダの設定ファイルや画像ファイルをアプリに合わせて適宜変更してください。
4. .npmrc ファイルに fontawesome pro のライセンスを設定してください。または、フリー版を利用するように変更してください。

### Docker 起動
* 開発用
    ```
    ./docker-compose.dev.sh up -d
    ```
* ビルド確認用
    ```
    ./docker-compose.dev_build.sh up -d
    ```
### ブラウザ確認
* 開発用  
    [http://localhost](http://localhost)

* ビルド確認用  
    [https://localhost](https://localhost)  
    (自家製のSSL認証を使っているので、サーティフィケート無視で起動すること)
    
### サーティフィケート無視でのプラウザ起動コマンド例
* Chromium
    ```
    /Applications/Chromium.app/Contents/MacOS/Chromium --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost
    ```
* Chrome
    ``` 
    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost  
    ```
## Usage
### ページの追加
* `/containers/[ページ名].tsx`ファイルを作成
* `/containers/[ページ名].tsx`ファイルにステートとステートを操作する関数を記述
    ```
    例)
    class IndexContainer extends Container {
      state = {
        page: null
      }
    
      setPage = val => {
        this.setState({
          page: val
        })
      }
    }
    ```
* `/pages/[ページ名].tsx`ファイルを作成
* `/pages/[ページ名].tsx`ファイルに`NextSeo`、`JsonLd`、`SkipToContent`等のSEO、アクセシビリティ対応のコンポーネントを配置
* `components/[ページ名]/[ページ名]Main.tsx`ファイルを作成
* `components/[ページ名]/[ページ名]Main.tsx`ファイルにHOCとしてコンテナを配置
    ```
    例)
    <Subscribe to={[IndexContainer]}>
      {indexContainer => (
        <>
        {/*コンポーネントやその他JSXを配置*/}
        </>
      )}
    </Subscribe>
    ```
* `/pages/[ページ名].tsx`ファイルに`[ページ名]Main`を配置
    ```
    例)
    <Grid container direction="row" justify="center" alignItems="center">
      <NextSeo config={SEO} />
      <JsonLd contents={json_contents} />
      <Grid item xs={12}>
        <SkipToContent />
        <Header />
        <BreadCrumb />
        <IndexMain
            page={checkUndefined(this.props.router.query.page) ? this.props.router.query.page : 1}
            title={contents.title}
            description={contents.description}
            fetchData={this.props.fetchData}
        />
        <Footer />
      </Grid>
    </Grid>
    ```
    
### API等からデータを取得
* 基本的にはコンテナファイルの関数の中で`fetch`する
* 初期データは、ページファイル`getInitialProps`で`fetch`する

## Todo
* [x] SEO対策
* [x] Accessibility対策
* [x] SNS対策
* [x] CSS組み込み
* [x] コンポーネント単位でのスタイル掛け
* [x] ユニットテストの整理
* [ ] インフラ、ディプロイ方法周りの整理
* [x] データアクセス部分の整理
* [ ] ログイン処理の実装

### 既存サービスに実装
* [ ] サービスのUIを移植
* [ ] サービスとのAPIつなぎ込み

## Licence
UNLICENSED

## Author
[Author](https://github.com/Author)
