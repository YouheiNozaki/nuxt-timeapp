# senseitime

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# run storybook localhost:6066
$ yarn storybook
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Components 作成時のルール

## Base Atomic Design

参考：  
https://zenn.dev/takepepe/articles/atomic-redesign

### atoms

コンポーネントの最小単位
State を持たない。
props のみを定義出来る
他のコンポーネントをインポートしない。

### molecules

atoms のコンポーネントを import 出来る
local state props のみを持つことが出来る

### organisms

atoms のコンポーネントを import 出来る
global state props を持つことが出来る

### templates

atoms molecules organisms を import 出来る
state props を受け取ることができる

### pages

atoms molecules organism を import 出来ない
templates を import してページを構築する
fetchAPI,サーバーサイドからなどのデータを取得することが出来る
