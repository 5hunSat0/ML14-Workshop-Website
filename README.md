# ML14-Workshop-Website

ML14-研修会のWebページのソースコード。
 
ML14-workshopのWebページは、dockerコンテナとして作成し、作者の自宅kubernetes環境で動作・公開されています。このrepositoryは、フロントエンドの知識の乏しい作者のために有志の方にいい感じのwebページにしてもらうことを目的として公開しています。

### 使い方 / How to Use
- **Webページの内容の変更・修正**
  - html フォルダ以下のファイル群が表示内容になります。表示内容を更新したい場合はこのフォルダ以下を変更してください
- **アプリケーションレベルでの挙動の変更**
  - dockerfile, kubernetesフォルダ以下を更新します。dockerfileが`dockerfile` と `dockerfile.arm` の2種類がありますが、作者の環境がx64環境でbuildしてarm環境でコンテナを動かすややこしい状態になっているためです。通常、buildして試してみる場合は、以下のdockerコマンドを実行します。
    - container build
      - ``` docker build -t ml14-nginx .```
    - container run
      - ``` docker run -d --name ml14-webpage -p 80:80 ml14-nginx ```
    - 接続確認
      - ブラウザで、```http://localhost``` にアクセス 

### 注意点 / Caution
- 当repositoryのコードで作成されたWebページのURLは、関係者のみにしかお伝えしていませんが、広くインターネットに公開されるものなので、出してはいけない個人情報は載せないようにお願いします。※あえて自身のアピールをしたい場合は止めません。
  - 悪い例: 発表資料自体をWebページからダウンロードできるようにする → google driveなど、関係者のみがアクセスしてダウンロード可能なcloud drive にリンクを張るようにしてください。
- 極力軽いwebページを指向してください。作者のサーバーは比較的貧弱です。
- backendのapplicationサーバー・DBサーバーを必要とするような構成をとる場合は、できればちゃんと動くように`kubernetes`ディレクトリ以下を確認し、必要なアプリケーションが動くようにyamlを書いてくれると助かります。
