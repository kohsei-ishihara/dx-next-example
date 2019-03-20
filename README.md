# DX next.js example

DX フロントエンド開発用に調整した Next.js によるアプリケーションです。ボイラープレート的な。  
アクセシビリティ、ユーザビリティ、SEO対策、SNS対応、Docker環境の設定などが含まれています。


## Description
下記は、レポジトリに含まれるファイルとその説明となります。各プロジェクトに合わせて調整してください。  
特に画像はうわがいてください。

```
.
├── actions
│   ├── actions.tsx
│   └── api.tsx
├── components　// コンポーネント
│   ├── functions // 関数群
│   │   └── CheckUndefined.tsx // Undefinedの判定
│   ├── index // index ページ関連
│   │   └── IndexMain.tsx　// index ページ main コンポーネント
│   ├── layouts　// レイアウト関連
│   │   ├── BreadCrumb.tsx　// パンくずリスト
│   │   ├── CustomHead.tsx　// カスタム head タグ
│   │   ├── Footer.tsx　// フッター
│   │   ├── Header.tsx　// ヘッダー
│   │   ├── JsonLd.tsx　// json-ld タグ
│   │   └── SkipToContent.tsx　// レイアウト関係のコンポーネント
│   ├── other // other ページ関連
│   │   └── OtherMain.tsx // other ページ main コンポーネント
│   ├── LazyImg.tsx // Lazyloading Img タグ
│   ├── StyledButton.tsx // MaterialUI Button タグカスタマイズサンプル
│   └── StyledButton2.tsx // Bootstrap Button タグカスタマイズサンプル
├── docker
│   ├── development
│   │   ├── express
│   │   │   └── Dockerfile
│   │   └── nginx
│   │       └── Dockerfile
│   └── production
│       ├── express
│       │   └── Dockerfile
│       └── nginx
│           └── Dockerfile
├── keys // SSL用のキー郡
│   ├── private.key
│   └── server.crt
├── nginx // docker内 nginx設定
│   └── conf.d
│       ├── default.conf
│       ├── private.key
│       ├── private.pass
│       └── server.crt
├── pages // ページファイル
│   ├── _app.tsx // アプリケーション本体
│   ├── _document.tsx // headタグ拡張用
│   ├── index.tsx // index ページ
│   └── other.tsx // other ページ
├── reducers
│   └── reducer.tsx
├── sagas
│   └── saga.tsx
├── scss
│   └── custom.scss // サイト全体のカスタマイズ用 SASS ファイル、基本的には styled-components を使う コンパイル必須
├── src
│   └── getPageContext.tsx
├── static // 静的ファイル郡
│   ├── images // 画像ファイル
│   │   ├── favicon.ico
│   │   ├── icon-1200×630.png // OGP
│   │   ├── icon-128x128.png // manifest
│   │   ├── icon-144x144.png // manifest, msapplication-TileImage
│   │   ├── icon-150x150.png // browserconfig
│   │   ├── icon-152x152.png // manifest
│   │   ├── icon-16x16.png // favicon
│   │   ├── icon-180x180.png // apple-touch-icon
│   │   ├── icon-192x192.png // manifest
│   │   ├── icon-310x150.png // browserconfig
│   │   ├── icon-310x310.png // browserconfig
│   │   ├── icon-32x32.png // favicon 大
│   │   ├── icon-512x512.png // manifest
│   │   ├── icon-70x70.png // browserconfig
│   │   ├── icon-96x96.png // favicon Google TV
│   │   ├── safari-pinned-tab.svg
│   │   └── shim.png // 1x1透過png
│   ├── browserconfig.xml // win10用タイル設定
│   ├── manifest.json
│   ├── robots.txt // クローリング除外設定
│   ├── site.webmanifest // pws設定, Android Chrome設定
│   └── sitemap.xml　// クローリング用、Google Search Consoleから更新
├── stores
│   └── store.tsx
├── .babelrc
├── .env.sample // 環境変数 .envにリネームで利用
├── .eslintrc
├── .gitignore // git 除外設定
├── .npmrc
├── .prettierignore // prettier 除外設定
├── .stylelintrc.json
├── README.md // このファイル
├── docker-compose.development.sh
├── docker-compose.development.yml
├── docker-compose.sh
├── docker-compose.yml
├── enzyme.js // enzyme の設定
├── jest.config.js
├── jest.setup.js
├── jest.tsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── server.js // express サーバー
├── tsconfig.json
└── yarn.lock yarnで入れたnodeモジュールのバージョン管理
```
## Demo

## VS. 

## Requirement

## Usage

## Install

## Contribution

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author

[xxx](https://github.com/xxx)


----
# Project Title

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
----

