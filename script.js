// Dữ liệu câu hỏi (141 câu)
const quizData = [
    {
        question: "あなたはMyAppアプリケーションを開発しています。このアプリケーションにはTable Aというテーブルがあります。MyAppアプリケーションがインスタンスにインストールされるとき、Table Aのレコードもアプリケーションの一部としてインストールされるようにしたいです。Table Aのレコードがインストールされる条件は何ですか？",
        type: "single",
        options: [
            "Table Aがアクティブであり、Taskテーブルを拡張している",
            "Table Aのレコードが「Create Application Files」コンテキストメニュー項目を使用してアプリケーションのレコードに追加されている",
            "Table Aに新しいレコード用の自動番号カウンターがある",
            "Table AがSystem Gone > Exclude Tablesリストに含まれていない"
        ],
        correct: [1],
        explanation: "Table Aのレコードがアプリケーションの一部としてインストールされるためには、「Create Application Files」コンテキストメニューを使用してアプリケーションのレコードに明示的に追加されている必要があります。これにより、レコードがアプリと一緒にパッケージ化されます。参照：https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/task/t_IncludeAppli"
    },
    {
        question: "アプリケーション開発者は、Record Producer UIを使用して新しいレコードを送信した後にユーザーが見るServiceNowページを指定できます。このページはどのように指定されますか？",
        type: "single",
        options: [
            "Record Producerのテーブルに対してafter Business Ruleスクリプトを記述する：window.redirect = \"<URL>\";",
            "URLを保存するためのアプリケーションのプロパティを作成する",
            "Record ProducerのScriptフィールドにスクリプトを記述する：producer.redirect = \"<URL>\";",
            "Record Producer UIを開くモジュールでページを設定する"
        ],
        correct: [2],
        explanation: "アプリケーション開発者は、Record ProducerのScriptフィールドにスクリプトを記述することで、リダイレクトページを指定できます。具体的には、producer.redirect = \"<URL>\" を使用します。たとえば、producer.redirect = \"home.do\"; とすると、ユーザーはホームページにリダイレクトされます。参照：/bundle record producer data and redirect users"
    },
    {
        question: "ServiceNowアプリケーションをGitリポジトリにリンクするために必要なものは何ですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "URI",
            "ACL",
            "ユーザー名",
            "URL",
            "アプリケーション名",
            "パスワード"
        ],
        correct: [2, 3, 5],
        explanation: "ServiceNowアプリケーションをGitリポジトリにリンクするには、Gitアカウントのユーザー名、URL、パスワードが必要です。URLはリポジトリのアドレスであり、ユーザー名とパスワードは認証情報です（または個人アクセストークンを使用することもできます）。参照：Link an application to source control - ServiceNow Docs"
    },
    {
        question: "ServiceNow App Repositoryとは何ですか？",
        type: "single",
        options: [
            "リクエストテーブル",
            "アップデートセットの別名",
            "ServiceNowアプリを含むデータベース",
            "Gitデータベース内のファイルのコレクション"
        ],
        correct: [2],
        explanation: "ServiceNow App Repositoryは、すべてのServiceNow顧客が公開するスコープ付きアプリケーションの中央リポジトリです。アップロードや配布、バージョン管理が可能です。参照：ServiceNow application repository"
    },
    {
        question: "プライベートスコープアプリケーション内のテーブルのベースライン動作として正しいものは次のうちどれですか？",
        type: "single",
        options: [
            "テーブルとそのデータはウェブサービスを使用してアクセスできません",
            "任意のBusiness Ruleがテーブルから読み書き、削除、更新できます",
            "テーブルのアプリケーション内のアーティファクトのみがテーブルから読み取ることができます",
            "すべてのアプリケーションスコープがテーブルから読み取ることができます"
        ],
        correct: [3],
        explanation: "プライベートスコープアプリケーション内のテーブルのベースライン動作は、すべてのアプリケーションスコープがテーブルから読み取ることができるというものです。アクセス制御ルールで制限されない限り、デフォルトで読み取りが許可されます。参照：https://docs.servicenow.com"
    },
    {
        question: "モジュールとは何ですか？",
        type: "single",
        options: [
            "アプリケーションメニュー内の機能で、コンテンツフレームや別のタブ、ウィンドウでページを開くなどの機能",
            "関連する情報や機能を提供するメニューまたはページのグループ",
            "Application Navigator内のアイテムをフィルタリングして、ユーザーが情報やサービスに素早くアクセスできるようにする方法",
            "エンドユーザーにソフトウェアを提供するウェブベースの方法"
        ],
        correct: [0],
        explanation: "モジュールは、アプリケーションメニュー内の機能であり、たとえばコンテンツフレームや別のタブ/ウィンドウでページを開くことができます。たとえば、Problemアプリケーションの「Open」モジュールは問題レコードのリストを開きます。参照：Modules | ServiceNow Tutorials"
    },
    {
        question: "Record Producerスクリプトで、Record Producerフォームフィールドの値にアクセスするために使用される構文は何ですか？",
        type: "single",
        options: [
            "producer.field_name",
            "producer.variablename",
            "current seventeenth",
            "current.variable_name",
            "current.field_name"
        ],
        correct: [1],
        explanation: "正しい構文は producer.variablename です。ここで、producerはRecord Producerフォームを表すグローバルオブジェクトであり、variablenameは変数の名前です。参照：ServiceNow Docs - Record producers"
    },
    {
        question: "Email Notificationにおいて、Weightフィールドについて正しくないものは次のうちどれですか？",
        type: "single",
        options: [
            "同じレコードと受信者に対して最も高いWeightを持つ通知のみが送信されます",
            "Weight値がゼロの場合、メールが送信されないことを意味します",
            "Weight値はデフォルトでゼロです",
            "Weight値がゼロの場合、通知の送信条件が満たされると通知が常に送信されます"
        ],
        correct: [1],
        explanation: "Weight値がゼロであっても、メールが送信されないわけではありません。条件が満たされれば通知は常に送信されます。Weightが-1の場合に送信が防止されます。参照：Email Notification Weight"
    },
    {
        question: "ソースコントロールリポジトリ操作（たとえば、ソースコントロールからアプリケーションをインポートする、またはアプリケーションをソースコントロールにリンクする）にアクセスを許可するロールはどれですか？（2つ選択してください）",
        type: "multiple",
        options: [
            "source_control",
            "source_control_admin",
            "admin",
            "git_admin"
        ],
        correct: [0, 2],
        explanation: "source_controlロールは基本的なソースコントロール操作を許可し、adminロールは高度な操作を含むすべてのアクセスを許可します。source_control_adminやgit_adminは有効なロールではありません。参照：Source Control Roles"
    },
    {
        question: "フローアクションを含むスコープ付きアプリケーションを作成する場合、そのアプリケーションは何と呼ばれますか？",
        type: "single",
        options: [
            "Bundle",
            "Row",
            "Action",
            "Spoke"
        ],
        correct: [3],
        explanation: "Spokeは、Flow Designerで使用されるフローアクションを含むスコープ付きアプリケーションであり、アプリケーション間で再利用可能なアクションを提供します。参照：Spokes - Product Documentation: San Diego"
    },
    {
        question: "以下のリストから、アプリケーションがServiceNowに適していない可能性がある理由を1つ特定してください。アプリケーションが：",
        type: "single",
        options: [
            "プロセス管理のためのワークフローが必要",
            "低レベルプログラミングライブラリの「そのままの」使用が必要",
            "レポート機能が必要",
            "データと対話するためにフォームを多用する"
        ],
        correct: [1],
        explanation: "ServiceNowは低レベルプログラミングを抽象化するため、低レベルライブラリの「そのままの」使用が必要なアプリケーションには適していません。他の選択肢はServiceNowの強みと一致します。参照：N/A"
    },
    {
        question: "ServiceNowでカスタムアプリケーションを構築する可能性のある理由は次のうちどれですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "古くて不十分なカスタムビジネスアプリケーションやプロセスを置き換えるため",
            "サービス提供と管理をすべての企業部門に拡張するため",
            "ユーザーにServiceNowのすべてのテーブル、レコード、フィールドへの完全なアクセスを許可するため",
            "ServiceNowの価値を拡張するため"
        ],
        correct: [0, 1, 3],
        explanation: "カスタムアプリは、従来のプロセスを置き換え、サービス提供を拡張し、ServiceNowのプラットフォーム機能を活用できます。すべてのデータへの完全なアクセスを許可することは、セキュリティ上の理由から適切ではありません。参照：Build Custom Apps in ServiceNow - eBook"
    },
    {
        question: "ServiceNowのレポートについて正しいものは次のうちどれですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "共有されたレポートはどのユーザーでも見ることができます",
            "データのグラフィカルな表現が可能です",
            "すべてのユーザーが任意のテーブルでレポートを生成できます",
            "権限を持つユーザーがオンデマンドで実行できます",
            "スケジュール設定して実行し、メールで配布できます"
        ],
        correct: [1, 3, 4],
        explanation: "レポートはグラフィカルに表示でき、権限を持つユーザーがオンデマンドで実行でき、メールでスケジュール配布が可能です。共有レポートを見るにはデータアクセスが必要であり、すべてのユーザーが任意のテーブルでレポートを生成できるわけではありません。参照：Reports, Report Security"
    },
    {
        question: "テーブル作成時にCreate moduleフィールドを選択した場合、新しいモジュールのデフォルトの動作は何ですか？",
        type: "single",
        options: [
            "新しいレコードを作成できるように空のフォームを開く",
            "新しいモジュールの動作をカスタマイズする方法を説明するWiki記事へのリンクを開く",
            "アプリケーションの空のホームページを表示する",
            "テーブルからすべてのレコードのリストを表示する"
        ],
        correct: [3],
        explanation: "新しいモジュールのデフォルトの動作は、テーブルからすべてのレコードのリストを表示することです。後で変更が可能です。参照：Create a table"
    },
    {
        question: "ServiceNow Storeとは何ですか？",
        type: "single",
        options: [
            "ServiceNowコミュニティが作成した開発者コンテンツのソース",
            "無料および有料の認定済みServiceNowアプリケーションと統合のためのマーケットプレイス",
            "ServiceNowスクリプトアーカイブのダウンロード可能なコンテンツ",
            "ServiceNow Developer Shareサイトの別名"
        ],
        correct: [1],
        explanation: "ServiceNow Storeは、ServiceNowの機能を強化する認定済みの無料および有料アプリケーションと統合のためのマーケットプレイスです。参照：ServiceNow Store"
    },
    {
        question: "ウェブサービスとは何ですか？",
        type: "single",
        options: [
            "組織内の部門が提供する利用可能なサービスと製品オファリングの顧客向けビューを提供する",
            "アプリケーションがネットワークを介して他のソフトウェアアプリケーションに接続する方法",
            "UI Pagesを作成および維持する方法",
            "さまざまなシステムやアプリケーションを発見する方法"
        ],
        correct: [1],
        explanation: "ウェブサービスは、XMLやHTTPなどの標準化されたプロトコルを使用して、アプリケーションがネットワークを介してデータを接続および交換できるようにします。参照：What are Web Services? - GeeksforGeeks"
    },
    {
        question: "Application Scopeについて正しいものは次のうちどれですか？",
        type: "single",
        options: [
            "すべてのアプリケーションは自動的にGlobalスコープの一部です",
            "サードパーティのServiceNowアプリケーション開発者からダウンロードしたアプリケーションは、名前の衝突がありません",
            "どの開発者でも任意のアプリケーションを編集できます",
            "開発者はスコープの名前空間のプレフィックスを選択できます"
        ],
        correct: [1],
        explanation: "Application Scopeは、サードパーティアプリケーションが一意の名前空間を持つことを保証し、名前の衝突を防ぎます。参照：Product Documentation | ServiceNow"
    },
    {
        question: "Application MenusとModulesへのアクセスはどのように制御されますか？",
        type: "single",
        options: [
            "Access Controls",
            "Application Rules",
            "Client Scripts",
            "ロール"
        ],
        correct: [3],
        explanation: "Application MenusとModulesへのアクセスは、ユーザーのロールに基づいて可視性を決定するロールによって制御されます。参照：Grant a role access to applications and modules"
    },
    {
        question: "アプリケーションのスコープを変更することは可能ですか？",
        type: "single",
        options: [
            "はい、ただしGlobalスコープからプライベートスコープにのみ変更可能です",
            "はい、可能です",
            "いいえ、不可能です",
            "はい、ただしプライベートスコープからGlobalスコープにのみ変更可能です"
        ],
        correct: [1],
        explanation: "アプリケーションのスコープは変更可能ですが（Globalからプライベート、またはその逆）、影響を考慮して徹底的なテストが必要です。参照：How To Change Application Scope In ServiceNow - YouTube"
    },
    {
        question: "アプリケーションがServiceNowプラットフォームで開発される理由は何ですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "データと対話するためにフォームを多用する",
            "プロセス管理のためのワークフローが必要",
            "レポート機能が必要",
            "低レベルプログラミングライブラリが必要",
            "マルチメディア機能を使用する"
        ],
        correct: [0, 1, 2],
        explanation: "ServiceNowは、フォーム、ワークフロー、レポートを使用するアプリケーションに最適です。低レベルプログラミングライブラリやマルチメディア機能はネイティブではサポートされていません。参照：ServiceNow Certified Application Developer Exam Specification"
    },
    {
        question: "ServiceNowアプリケーションのApplication Filesとは何ですか？",
        type: "single",
        options: [
            "アプリケーションのテーブルレコードのXMLエクスポート",
            "アプリケーションを構成するServiceNowアーティファクト",
            "アプリケーションのUpdate SetのXMLエクスポート",
            "アプリケーションにインポートされたデータを含むCSVファイル"
        ],
        correct: [1],
        explanation: "Application Filesは、テーブル、スクリプト、フォームなど、ServiceNowアプリケーションを構成するアーティファクトです。参照：Application Files"
    },
    {
        question: "Utils Script Includeを作成する際の基本的な戦略があります。該当しないステップを特定してください。",
        type: "single",
        options: [
            "テーブルを特定する",
            "関数をスクリプト化する",
            "クラスを作成する",
            "新しいクラスからプロトタイプオブジェクトを作成する"
        ],
        correct: [0],
        explanation: "テーブルを特定することは、Utils Script Includeの作成の一部ではありません。Script Includeは特定のテーブルに紐づいていません。参照：ServiceNow Docs - Script Includes"
    },
    {
        question: "Inbound Actionスクリプトで使用できるオブジェクトはどれですか？",
        type: "single",
        options: [
            "currentとprevious",
            "currentとemail",
            "currentとevent",
            "currentとproducer"
        ],
        correct: [1],
        explanation: "Inbound Actionスクリプトでは、レコード用のcurrentオブジェクトと、メールプロパティ用のemailオブジェクトが使用されます。参照：Inbound Action scripts"
    },
    {
        question: "SOAP Messageを作成する場合、関数が呼び出されるときに渡す変数を指定する構文は何ですか？",
        type: "single",
        options: [
            "current variable_name",
            "$[variable_name]",
            "< variable_name >",
            "< variable_name >.do?WSDL"
        ],
        correct: [1],
        explanation: "SOAP Messageで変数を指定する構文は $[variable_name] です。参照：Tutorial: Handling a SOAP Response in ServiceNow"
    },
    {
        question: "次のうち、ServiceNow REST APIの一部ではないメソッドはどれですか？",
        type: "single",
        options: [
            "COPY",
            "POST",
            "GET",
            "DELETE"
        ],
        correct: [0],
        explanation: "COPYはServiceNow REST APIで有効なHTTPメソッドではありません。サポートされているメソッドにはPOST、GET、DELETE、PUT、PATCHがあります。参照：ServiceNow REST API methods"
    },
    {
        question: "REST API Explorerは何のために使用されますか？",
        type: "single",
        options: [
            "RESTを使用して公開データプロバイダーと対話する練習をする",
            "RESTについて学ぶためのウェブ上のリソースを見つける",
            "SOAP Message関数をRESTメソッドに変換する",
            "ServiceNowにRESTリクエストを送信するためのサンプルコードを作成する"
        ],
        correct: [3],
        explanation: "REST API Explorerは、ServiceNowにRESTリクエストを送信するためのサンプルコードを生成し、APIのテストと開発を支援します。参照：Use the REST API Explorer"
    },
    {
        question: "tableというテーブルが存在し、field1、field2、field3の3つのフィールドを持っていると仮定します。tableのAccess Controlリストを確認してください：table.Noneはadminとitilロールを持つユーザーに対して読み取りAccess Control、table.*はadminロールを持つユーザーに対して読み取りAccess Control、table.field3はitilロールを持つユーザーに対して読み取りAccess Controlです。itilロールを持つユーザーが読み取れるフィールドはどれですか？",
        type: "single",
        options: [
            "field1、field2、field3",
            "field3のみ",
            "field1とfield3",
            "field3を除くすべてのフィールド"
        ],
        correct: [1],
        explanation: "itilロールを持つユーザーは、table.field3の読み取りACLによりfield3のみを読み取ることができます。table.Noneルールにより他のフィールドへの読み取りアクセスが拒否されます。参照：Access Control Lists - ServiceNow Docs"
    },
    {
        question: "Application Pickerについて正しいものは次のうちどれですか？",
        type: "single",
        options: [
            "すべてのカスタムアプリケーションスコープとGlobalスコープがApplication Pickerに表示されます",
            "ServiceNow内のすべてのアプリケーション（Incidentなどのベースラインアプリケーションを含む）がApplication Pickerに表示されます",
            "カスタムアプリケーションのみがApplication Pickerに表示されます",
            "ダウンロードしたアプリケーションのみがApplication Pickerに表示されます"
        ],
        correct: [0],
        explanation: "Application Pickerには、すべてのカスタムアプリケーションスコープとGlobalスコープが表示されます。参照：https://docs.servicenow.com"
    },
    {
        question: "クライアントサイドのスコープ付きAPIに含まれないクラスはどれですか？",
        type: "single",
        options: [
            "GuideDialogWindow",
            "GuideAjax",
            "GuideRecord",
            "GuideForm"
        ],
        correct: [2],
        explanation: "GuideRecordはサーバーサイドAPIであり、クライアントサイドのスコープ付きAPIではありません。他のものはUI操作のためのクライアントサイドAPIです。参照：Client side scoped APIs"
    },
    {
        question: "プライベートスコープアプリケーションでスクリプトを記述する際に、日付を操作するためのメソッドを提供するサーバーサイドオブジェクトはどれですか？",
        type: "single",
        options: [
            "GlideDateTime",
            "current",
            "GlideRecord",
            "GlideSystem"
        ],
        correct: [0],
        explanation: "GlideDateTimeは、サーバーサイドスクリプトで日付を操作するためのメソッドを提供します。参照：https://developer.servicenow.com"
    },
    {
        question: "Record Producersに適用されるクライアントサイドスクリプトは次のうちどれですか？",
        type: "single",
        options: [
            "Catalog Client ScriptsとCatalog UI Policies",
            "UI ScriptsとUI Actions",
            "UI ScriptsとRecord Producer Scripts",
            "Client ScriptsとUI Policies"
        ],
        correct: [0],
        explanation: "Catalog Client ScriptsとCatalog UI Policiesは、Record Producersに適用されるクライアントサイドスクリプトです。参照：Catalog client scripts"
    },
    {
        question: "Access Controlsを評価する際、ServiceNowはどのように検索および評価しますか？",
        type: "single",
        options: [
            "現在のテーブルの一致のみを対象とする",
            "現在のフィールドの一致のみを対象とする",
            "最も具体的な一致から最も一般的な一致まで",
            "最も一般的な一致から最も具体的な一致まで"
        ],
        correct: [2],
        explanation: "ServiceNowは、Access Controlsを最も具体的な（フィールドレベル）から最も一般的な（グローバル）一致まで評価します。参照：Access Control Rules"
    },
    {
        question: "ワークフローコンテキストとは何ですか？",
        type: "single",
        options: [
            "編集中のチェックアウトされたワークフロー",
            "ワークフローバージョンから生成され、アクティビティを実行し、トランジションに従うもの",
            "ワークフローが定義されているテーブルと「Active is true」などの条件",
            "ワークフローが設計されたビジネス理由またはプロセス"
        ],
        correct: [1],
        explanation: "ワークフローコンテキストは、特定のレコードに対してアクティビティを実行し、トランジションに従うワークフローのインスタンスです。参照：Workflow context"
    },
    {
        question: "アプリケーションのサーバーサイドスクリプトロジックの大部分をScript Includeに保存する利点は何ですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "これにより実行が速くなります",
            "スクリプトから呼び出されたときのみ実行されます",
            "ServiceNow Storeからアプリケーションがインストールされたときにスクリプトロジックを非表示にできます",
            "アプリケーションロジックの変更の一部では、編集する場所が1つだけになります"
        ],
        correct: [1, 2, 3],
        explanation: "Script Includeは、スクリプトから呼び出されたときのみ実行され、ServiceNow Storeで非表示にでき、編集を一元化できます。実行速度は本質的に速くなりません。参照：https://developer.servicenow.com"
    },
    {
        question: "アプリケーション、アプリケーションリソース、またはイベントへのアクセスを要求するクロススコープアプリケーションやスクリプトを追跡するために使用されるレコードは何ですか？",
        type: "single",
        options: [
            "Restricted caller access records",
            "Caller tracking records",
            "Access control level records",
            "Cross-scope access records"
        ],
        correct: [0],
        explanation: "Restricted caller access recordsは、クロススコープアクセス要求を追跡します。参照：https://docs.servicenow.com"
    },
    {
        question: "Display Business Ruleがアクセスできないオブジェクトは次のうちどれですか？",
        type: "single",
        options: [
            "previous",
            "GlideSystem",
            "g_scratchpad",
            "current"
        ],
        correct: [0],
        explanation: "Display Business Ruleは、current、g_scratchpad、GlideSystemオブジェクトにアクセスできますが、previousオブジェクトにはアクセスできません。previousオブジェクトはBefore Business Ruleでのみ利用可能です。参照：https://docs.servicenow.com/bundle/tokyo-application-development/page/script/business-rules/concept/c_Busine"
    },
    {
        question: "GuideRecordのどのメソッドがデータベーステーブルに対してクエリを実行しますか？（3つ選択してください）",
        type: "multiple",
        options: [
            "query()",
            "runQuery()",
            "query()",
            "get()",
            "get()"
        ],
        correct: [0, 2, 4],
        explanation: "データベーステーブルに対してクエリを実行するGuideRecordメソッドは、query()とget()です。選択肢AとC、DとEは重複しています。参照：https://docs.servicenow.com/bundle/tokyo-application-development/page/app-store/dev_portal/API_reference/G"
    },
    {
        question: "アプリケーション開発者は、業界標準のJavaScriptを使用してServiceNowを構成し、次のことを行います：",
        type: "single",
        options: [
            "ナビゲーター内のアプリケーションのコンテキストメニューを右クリックで編集できるようにする",
            "機能の拡張と追加",
            "組織の会社ロゴとバナーテキストをカスタマイズする",
            "送信メールの表示名を構成する"
        ],
        correct: [1],
        explanation: "アプリケーション開発者は、JavaScriptを使用してServiceNowアプリケーションに機能を拡張および追加し、クライアントスクリプトやビジネスルールなどのAPIやフレームワークを活用します。参照：https://docs.servicenow.com/bundle/tokyo-application-development/page/script/general-scripting/concept/c_ScriptingInServiceNow"
    },
    {
        question: "次のうち、デフォルトで現在のフォームの上部に青い背景でメッセージを表示するメソッドはどれですか？",
        type: "single",
        options: [
            "g_form.addInfoMsg()",
            "g_form.addInfoMessage()",
            "g_form.showFieldMessage()",
            "g_form.showFieldMsg()"
        ],
        correct: [1],
        explanation: "g_form.addInfoMessage()メソッドは、デフォルトでフォームの上部に青い背景でメッセージを表示します。参照：https://docs.servicenow.com/bundle/paris-application-development/page/script/general-scripting/reference"
    },
    {
        question: "アプリケーション開発計画の一部として、どのビジネス要件とプロセスを文書化する必要がありますか？（4つ選択してください）",
        type: "multiple",
        options: [
            "データの入力/出力",
            "ビジネス上の問題",
            "プロジェクトスケジュール",
            "プロセスのステップ",
            "データベース容量",
            "ユーザー/ステークホルダー",
            "利用可能なライセンス"
        ],
        correct: [0, 1, 3, 5],
        explanation: "アプリケーション開発計画では、データの入力/出力、ビジネス上の問題、プロセスのステップ、ユーザー/ステークホルダーを文書化して、スコープと要件を定義する必要があります。参照：Application Development Lifecycle: Phases, Steps and Process"
    },
    {
        question: "GlideUser (g_user) メソッドについて正しいものは次のうちどれですか？",
        type: "single",
        options: [
            "Client ScriptsとUI Policiesでのみ使用できます",
            "Business Rulesでのみ使用できます",
            "Client Scripts、UI Policies、UI Actionsで使用できます",
            "Business RulesとScripts Includesで使用できます"
        ],
        correct: [2],
        explanation: "GlideUser (g_user) メソッドはクライアントサイドであり、Client Scripts、UI Policies、UI Actionsでユーザー情報にアクセスするために使用できます。参照：Client-Side Scripting APIs"
    },
    {
        question: "taskテーブルは次のうちどれの例ですか？（2つ選択してください）",
        type: "multiple",
        options: [
            "レガシークラス",
            "子クラス",
            "ベースクラス",
            "親クラス"
        ],
        correct: [2, 3],
        explanation: "Taskテーブルはベースクラスであり、親クラスでもあります。Incidentなどの他のテーブルがこれを拡張します。参照：https://docs.servicenow.com/en-US/bundle/tokyo-platform-administration/page/administer/table-administ"
    },
    {
        question: "Import Setテーブルのフィールドと既存のServiceNowテーブルのフィールド間の関係を決定するのは何ですか？",
        type: "single",
        options: [
            "Data Sources",
            "Schema Map Relationship Builder",
            "Business Service Management Map",
            "Transform Map"
        ],
        correct: [3],
        explanation: "Transform Mapは、Import Setテーブルのフィールドと既存のServiceNowテーブルのフィールド間の関係を定義します。参照：What Exactly is an Import Set? - ServiceNow Developers"
    },
    {
        question: "あなたが開発する各アプリケーションに対してApplication Propertiesページを作成する利点は次のうちどれですか？",
        type: "single",
        options: [
            "Application Propertiesページはアプリケーションの良いランディングページです",
            "Application Propertiesを使用すると、開発者はServiceNowから継承されたアプリケーションのプロパティを上書きできます",
            "アプリケーションユーザーは、アプリケーションの外観を変更するためにApplication Propertiesページにアクセスすることを知っています",
            "Application Propertiesを使用すると、開発者または管理者はアプリケーションのアーティファクトを変更せずにアプリケーションの動作を変更できます"
        ],
        correct: [3],
        explanation: "Application Propertiesを使用すると、アプリケーションのアーティファクトを変更せずに動作を変更でき、柔軟性が向上します。参照：Working with System Properties"
    },
    {
        question: "Modulesについて正しくないものは次のうちどれですか？",
        type: "single",
        options: [
            "Modulesへのアクセスはロールで制御されます",
            "Modulesはコンテンツページを開きます",
            "すべてのModuleはテーブルに関連付けられている必要があります",
            "すべてのModuleはApplication Menuの一部である必要があります"
        ],
        correct: [2],
        explanation: "Modulesはテーブルに関連付けられている必要はありません。ダッシュボードやスクリプトなど、さまざまなコンテンツタイプにリンクできます。参照：Modules"
    },
    {
        question: "ServiceNowインスタンスがウェブサービスから情報をリクエストする場合、ServiceNowはウェブサービスの何として機能しますか？",
        type: "single",
        options: [
            "Publisher",
            "Specialist",
            "Provider",
            "Consumer"
        ],
        correct: [3],
        explanation: "ServiceNowは、ウェブサービスから情報をリクエストする際にウェブサービスConsumerとして機能します。参照：Web services"
    },
    {
        question: "Email Notificationのコンテンツを構成する際、通知をトリガーするイベントのプロパティを参照するために使用する構文は何ですか？",
        type: "single",
        options: [
            "${event.< property name >}",
            "${current.< property name >}",
            "${< property name >.getDisplayValue()}",
            "${gs.< property name >}"
        ],
        correct: [0],
        explanation: "Email Notificationでイベントのプロパティを参照する正しい構文は ${event.< property name >} です。参照：https://www.servicenow.com/community/it-service-management-forum/email-notification/mp/695221"
    },
    {
        question: "Business Ruleで、現在ログインしているユーザーがadminロールを持っている場合にtrueを返すものは次のうちどれですか？",
        type: "single",
        options: [
            "g_form.hasRoleExactly('admin')",
            "gs.hasRole('admin')",
            "g_form.hasRole('admin')",
            "gs.hasRoleExactly('admin')"
        ],
        correct: [1],
        explanation: "Business Rule（サーバーサイド）では、gs.hasRole('admin') がユーザーがadminロールを持っている場合にtrueを返します。参照：Business Rules, GlideSystem"
    },
    {
        question: "Form Designerの一部ではないものは次のうちどれですか？",
        type: "single",
        options: [
            "フォームレイアウト",
            "ページヘッダー",
            "スキーママップ",
            "フィールドナビゲーター"
        ],
        correct: [2],
        explanation: "スキーママップはForm Designerの一部ではなく、テーブル関係を表示するための別のツールです。参照：https://developer.servicenow.com/dev.do#!/learn/courses/sandiego/app_store_learnv2_learnmore_sandiego_learn"
    },
    {
        question: "アプリケーション開発計画の一部として、ビジネス要件とプロセスを定義することがベストプラクティスです。ビジネスプロセスとして文書化すべき考慮事項は何ですか？",
        type: "single",
        options: [
            "ビジネス上の問題、データの入力/出力、ユーザー/ステークホルダー、プロセスのステップ",
            "ビジネス上の問題、データの入力/出力、プロジェクトスケジュール、プロセスのステップ",
            "ビジネス上の問題、データの入力/出力、ユーザー/ステークホルダー、データベース容量",
            "ビジネス上の問題、ユーザー/ステークホルダー、利用可能なライセンス、データベース容量"
        ],
        correct: [0],
        explanation: "ビジネスプロセスでは、ビジネス上の問題、データの入力/出力、ユーザー/ステークホルダー、プロセスのステップを文書化する必要があります。参照：Application Development Process"
    },
    {
        question: "REST Messageを構成する際、Endpointとは何ですか？",
        type: "single",
        options: [
            "RESTスクリプトの実行を停止するためのコマンド",
            "アクセス、クエリ、または変更されるデータのURI",
            "返されるデータの形式に関する情報",
            "プロバイダーからの応答で、送信するデータがないことを示す"
        ],
        correct: [1],
        explanation: "REST MessageのEndpointは、アクセス、クエリ、または変更されるデータのURIです。参照：REST Messages"
    },
    {
        question: "ここにBusiness Ruleスクリプトテンプレートがあります。このタイプのJavaScript関数は次のように知られています：",
        type: "single",
        options: [
            "Constructor",
            "Scoped",
            "Anonymous",
            "Self-invoking"
        ],
        correct: [3],
        explanation: "Business Ruleスクリプトテンプレートは、ローカルスコープを作成するためにSelf-invoking（即時実行関数式、IIFE）関数を使用します。参照：W3Schools - JavaScript Function Definitions"
    },
    {
        question: "サーバーで実行されるスクリプトタイプはどれですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "Business Rule",
            "Client Scripts",
            "UI Policies",
            "Script Actions",
            "Scheduled Jobs"
        ],
        correct: [0, 3, 4],
        explanation: "Business Rules、Script Actions、Scheduled Jobsはサーバーで実行されます。参照：https://docs.servicenow.com/bundle/tokyo-application-development/page/script/server-scripting/concept/c_Serve"
    },
    {
        question: "Application Accessに「Allow access to this table via web services」という構成オプションがあります。このオプションが選択されている場合に正しいものは次のうちどれですか？",
        type: "single",
        options: [
            "このオプションはウェブサービスを介したレコードの削除を制限しますが、レコードは常に読み取ることができます",
            "ウェブサービスを介してクエリを実行するユーザーは、テーブルのレコードにアクセスするための正しい権限を持っている必要があります",
            "選択されていない場合でも、正しい権限を持つユーザーはウェブサービスを使用してテーブルのレコードにアクセスできます",
            "このオプションはSOAPウェブサービスのみにアクセスを制限し、RESTには適用されません"
        ],
        correct: [1],
        explanation: "このオプションが選択されている場合、ユーザーはウェブサービスを介してテーブルにアクセスするために正しい権限を持っている必要があります。参照：Application Access"
    },
    {
        question: "Flow Designerの機能は何ですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "フローにステージを追加する",
            "別のフローまたはサブフローからフローを呼び出す",
            "「Run as」機能を使用してフローをテストする",
            "フローをトリガーする条件をテストするためのJava Scriptingコードをサポートする",
            "クライアントサイドでフォームフィールドデータの検証を実行する"
        ],
        correct: [0, 1, 2],
        explanation: "Flow Designerは、ステージの追加、フロー/サブフローの呼び出し、「Run as」機能でのテストをサポートします。参照：Flow Designer - ServiceNow"
    },
    {
        question: "ServiceNowのDelegated Developmentについて正しくない記述を特定してください。",
        type: "single",
        options: [
            "管理者は、非管理者ユーザーにグローバルアプリケーションを開発する権限を付与できます",
            "管理者は、開発者がアクセスできるアプリケーションファイルタイプを指定できます",
            "管理者は、開発者にスクリプトフィールドへのアクセスを付与できます",
            "管理者は、開発者にセキュリティレコードへのアクセスを付与できます"
        ],
        correct: [0],
        explanation: "Delegated Developmentはスコープ付きアプリケーションにのみ適用され、グローバルアプリケーションには適用されません。参照：Delegated Development"
    },
    {
        question: "Email Notificationsをデバッグする際、ユーザーレコードで確認する必要があるものは何ですか？（2つ選択してください）",
        type: "multiple",
        options: [
            "ユーザーがロックアウトされていないこと",
            "委任が有効になっていること",
            "Activeがtrueであること",
            "First nameとLast nameフィールドに値があること",
            "Emailフィールドに有効な値があること"
        ],
        correct: [2, 4],
        explanation: "ユーザーは通知を受け取るためにActiveである必要があり、有効なメールアドレスが必要です。参照：Create an email notification"
    },
    {
        question: "アプリケーションテーブルを作成する際、テーブルレコードに自動的に追加されるユーザーロールがあります。アプリケーションが通常持つ他のロールはどれですか？",
        type: "single",
        options: [
            "Application Manager",
            "Application Fulfiller",
            "Application Super User",
            "Application Admin"
        ],
        correct: [3],
        explanation: "アプリケーションには通常、すべてのコンポーネントにフルアクセスするためのApplication Adminロールがあります。参照：Application administration - ServiceNow Docs"
    },
    {
        question: "Guided Application Creatorについて正しいものは次のうちどれですか？",
        type: "single",
        options: [
            "グローバルスコープオプションはデフォルトでオンになっています",
            "スコープアプリケーションのユーザーロールが自動的に作成されます",
            "デフォルトのアクセス制御が自動的に作成されます",
            "新しいアプリケーションが作成されるたびにウェルカム画面が表示されます"
        ],
        correct: [3],
        explanation: "Guided Application Creatorでは、新しいアプリケーションが作成されるたびにウェルカム画面が表示されます。参照：Guided App Creator"
    },
    {
        question: "次のうち、Script Actionスクリプトで使用できないオブジェクトはどれですか？",
        type: "single",
        options: [
            "previous",
            "GlideRecord",
            "event",
            "current"
        ],
        correct: [0],
        explanation: "previousオブジェクトはScript Actionスクリプトでは利用できません。参照：https://docs.servicenow.com/bundle/tokyo-platform-administration/page/administer/platform-events/reference/r_"
    },
    {
        question: "Record Producerの特性を特定してください。（3つ選択してください）",
        type: "multiple",
        options: [
            "ユーザーインターフェースにグラフィックを含めることができます",
            "この戦略を使用して作成されたすべてのレコードはRequested Item [sc_req_item]テーブルに挿入されます",
            "ユーザーインターフェースのフィールドの動作をスクリプトできます",
            "スクリプト化する必要があります",
            "各フィールドはフィールドラベルではなく質問でユーザーにプロンプトを表示します"
        ],
        correct: [0, 2, 4],
        explanation: "Record Producerは、グラフィックを含めたり、フィールドの動作をスクリプトしたり、質問を使用してラベルを表示したりできます。参照：Record Producers"
    },
    {
        question: "カスタムアプリを構築する理由は何ですか？（2つ選択してください）",
        type: "multiple",
        options: [
            "内部プロセスの特定のユースケースを満たすため",
            "GitHubやGitLabなどのコードリポジトリを使用しないため",
            "サードパーティシステム用のカスタム統合を作成するため",
            "ServiceNowのベーステーブルを置き換えるため"
        ],
        correct: [0, 2],
        explanation: "カスタムアプリは、特定の内部ユースケースに対応したり、サードパーティシステムと統合したりするために構築されます。参照：Build Custom Apps in ServiceNow - eBook"
    },
    {
        question: "Flow Designerコンテンツを含むスコープ付きアプリケーションで、特定のアプリケーション専用のものは何と呼ばれますか？",
        type: "single",
        options: [
            "Spoke",
            "Bundle",
            "Action",
            "Flow"
        ],
        correct: [0],
        explanation: "Spokeは、特定のアプリケーション用のFlow Designerコンテンツを含むスコープ付きアプリケーションです。参照：https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/spokes.ht"
    },
    {
        question: "次のうち、Field Watcherを使用してデバッグできないものはどれですか？",
        type: "single",
        options: [
            "Business Rules",
            "Script Includes",
            "Client Scripts",
            "Access Controls"
        ],
        correct: [1],
        explanation: "Field Watcherは、特定のフィールドやフォームに紐づいていないScript Includesをデバッグできません。参照：Field Watcher"
    },
    {
        question: "テーブルを拡張するテーブルは何をしますか？",
        type: "single",
        options: [
            "親テーブルのフィールドを時々継承する",
            "アプリケーションスコープを自動的に更新する",
            "親テーブルのフィールドを継承しない",
            "親テーブルのフィールドを継承する"
        ],
        correct: [3],
        explanation: "テーブルを拡張するテーブルは、親テーブルのすべてのフィールドを継承します。参照：Table extension and classes"
    },
    {
        question: "ServiceNowでアプリケーションを作成する理由は何ですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "古くて不十分なカスタムビジネスアプリケーションやプロセスを置き換えるため",
            "サービス提供と管理をすべての企業部門に拡張するため",
            "ユーザーにServiceNowのすべてのテーブル、レコード、フィールドへの完全なアクセスを許可するため",
            "ServiceNowの価値を拡張するため"
        ],
        correct: [0, 1, 3],
        explanation: "ServiceNowでのアプリケーションは、従来のプロセスを置き換え、サービス提供を拡張し、プラットフォームの価値を高めます。参照：Build Custom Apps in ServiceNow - eBook"
    },
    {
        question: "テーブルからフィールドを削除する際の正しい記述は次のうちどれですか？",
        type: "single",
        options: [
            "テーブル上の任意のフィールドを削除できます",
            "ユーザー定義の非継承フィールドを削除できます",
            "継承されたフィールドを削除できます",
            "フィールドを削除するとテーブルのレコードも削除されます"
        ],
        correct: [1],
        explanation: "テーブルから削除できるのは、ユーザー定義の非継承フィールドのみです。参照：Delete fields"
    },
    {
        question: "スコープ付きアプリケーションで新しいアプリケーションファイルを作成する際、デフォルトでクロススコープアクセスがオンになっているものは次のうちどれですか？",
        type: "single",
        options: [
            "REST messages",
            "Table",
            "Script Include",
            "Workflow"
        ],
        correct: [1],
        explanation: "スコープ付きアプリケーションのテーブルでは、デフォルトでクロススコープアクセスがオンになっています。参照：https://developer.servicenow.com/dev.do#!/learn/learning-plans/tokyo/servicenow_administrator/app"
    },
    {
        question: "Studioで利用可能な機能は次のうちどれですか？（2つ選択してください）",
        type: "multiple",
        options: [
            "外部ソースコントロールにプッシュする",
            "ブランチを検索する",
            "ブランチをマージする",
            "アップデートセットにプッシュする"
        ],
        correct: [1, 2],
        explanation: "Studioはブランチの検索とマージをサポートします。参照：Studio"
    },
    {
        question: "Application Propertiesページにアクセスするために使用されるModule Linkタイプは何ですか？",
        type: "single",
        options: [
            "URL (from Arguments)",
            "HTML (from Arguments)",
            "Script (from Arguments)",
            "Single Record"
        ],
        correct: [0],
        explanation: "URL (from Arguments)リンクタイプは、Application Propertiesページにアクセスするために使用されます。参照：Module link types - ServiceNow Docs"
    },
    {
        question: "ServiceNowはどのようにして受信メールを既存のレコードと一致させますか？",
        type: "single",
        options: [
            "Watermark",
            "Record link",
            "Subject line",
            "sys_id"
        ],
        correct: [0],
        explanation: "ServiceNowは、メールに含まれるWatermarkを使用して受信メールを既存のレコードと一致させます。参照：https://developer.servicenow.com/dev.do#!/learn/courses/tokyo/app_store_learnv2_flowdesigner_tokyo_flow_de"
    },
    {
        question: "リストとフォームに使用する最適なUX形式は何ですか？",
        type: "single",
        options: [
            "Forms",
            "Lists",
            "Standard",
            "Classic"
        ],
        correct: [3],
        explanation: "Classic UX形式は、リストとフォームを介してレコードを管理するのに最適です。参照：N/A"
    },
    {
        question: "次のうち、ServiceNowインスタンスにアプリケーションをインストールする方法ではないものはどれですか？",
        type: "single",
        options: [
            "Application Repositoryからアプリケーションをインストールする",
            "アプリケーションレコードのCopyボタンを選択する",
            "ServiceNow Shareウェブサイトからアプリケーションをダウンロードしてインストールする",
            "ServiceNow Storeからサードパーティアプリケーションをダウンロードしてインストールする"
        ],
        correct: [1],
        explanation: "アプリケーションレコードに「Copy」ボタンはありません。参照：https://docs.servicenow.com/bundle/sandiego-application-development/page/build/applications/reference/r_"
    },
    {
        question: "Can read構成フィールドが選択されていない場合、利用できないApplication Access構成フィールドはどれですか？",
        type: "single",
        options: [
            "このテーブルへのすべてのウェブサービスアクセス",
            "Can create、Can update、Can delete",
            "Can readは他のApplication Accessフィールドの利用可能性に影響しません",
            "Allow configuration"
        ],
        correct: [1],
        explanation: "Can readが選択されていない場合、Can create、Can update、Can deleteフィールドは利用できません。参照：https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/reference"
    },
    {
        question: "次のうち正しいものはどれですか？",
        type: "single",
        options: [
            "UI PolicyのActionsはUI PolicyのScriptsより先に実行されます",
            "UI PolicyのScriptsとActionsの実行順序は実行時に決定されます",
            "UI PolicyのScriptsはUI PolicyのActionsより先に実行されます",
            "UI PolicyのActionsとScriptsは同時に実行されます"
        ],
        correct: [0],
        explanation: "UI PolicyのActionsはScriptsより先に実行されます。参照：ServiceNow Docs - UI policy actions"
    },
    {
        question: "Guided Application Creator (GAC)を使用してデータテーブルを指定する方法は何ですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "既存のPDFをアップロードする",
            "プラットフォーム上で新しいテーブルを作成する",
            "プラットフォーム上の既存のテーブルを使用する",
            "既存のスプレッドシートをアップロードする",
            "既存のワードプロセッシングドキュメントをアップロードする",
            "フリーフォームデータベースを使用する"
        ],
        correct: [0, 1, 3],
        explanation: "GACでは、PDFのアップロード、新しいテーブルの作成、スプレッドシートのアップロードによってテーブルを指定できます。参照：Guided Application Creator"
    },
    {
        question: "Flow Designerの変数のデータ型のうち、レコードデータや複雑なデータを保存するためにサポートされているものはどれですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "Label data type",
            "Integer",
            "Array.Reference",
            "Choice",
            "String"
        ],
        correct: [1, 2, 4],
        explanation: "Flow Designerの変数は、以下のデータ型を使用してレコードデータや複雑なデータを保存できます：\nInteger：数学的な操作に使用できる整数。\nArray：インデックスでアクセスしたり、For eachアクションを使用して反復処理できるアイテムのコレクション。\nString：メールアドレスやファイルのテキスト内容など、あらゆる種類のテキスト。\n参照：Define and Use Data Types in a Flow (Flow Designer)\nVariable data types - Power Automate | Microsoft Learn* Product Documentation | ServiceNow"
    },
    {
        question: "アプリケーションにはいくつのアプリケーションメニューを持つことができますか？",
        type: "single",
        options: [
            "3つ。アプリケーションのユーザーモジュール用に1つ、アプリケーションの管理者モジュール用に1つ、ServiceNow管理者のモジュール用に1つ",
            "アプリケーション設計が必要とする数だけ",
            "2つ。アプリケーションのユーザーモジュール用に1つ、アプリケーションの管理者モジュール用に1つ",
            "1つ。すべてのアプリケーションモジュールに使用される"
        ],
        correct: [1],
        explanation: null
    },
    {
        question: "「Allow configuration」Application Accessオプションが選択されたテーブルについて正しいものは次のうちどれですか？",
        type: "single",
        options: [
            "スコープ内のアプリケーションのスクリプトのみがそのテーブルのBusiness Ruleを作成できます",
            "アプリケーションのユーザーロールを持つ任意のユーザーがアプリケーションのスクリプトを変更できます",
            "スコープ外のアプリケーションがそのテーブルのBusiness Ruleを作成できます",
            "スコープ外のアプリケーションがスコープ付きアプリケーションに新しいテーブルを追加できます"
        ],
        correct: [2],
        explanation: "「Allow configuration」Application Accessオプションは、ユーザーがアプリケーションテーブルを構成できるかどうかを決定します（たとえば、フィールド、ビュー、インデックスを追加または変更する）。「Allow configuration」オプションが選択されたテーブルについて以下のことが正しいです：\nスコープ外のアプリケーションがそのテーブルのBusiness Ruleを作成できます。これは、「Allow configuration」オプションが、アプリケーションスコープに関係なく、adminまたはpersonalize_dictionaryロールを持つ任意のユーザーにテーブル構成へのアクセスを許可するためです。つまり、ユーザーはどのアプリケーションからでもそのテーブルのBusiness Rule（レコードが表示、挿入、更新、または削除されたときに実行されるサーバーサイドスクリプト）を作成できます。\n以下のものは「Allow configuration」オプションが選択されたテーブルには当てはまりません：\nスコープ内のアプリケーションのスクリプトのみがそのテーブルのBusiness Ruleを作成できる。これは誤りです。上述の通り、「Allow configuration」オプションはBusiness Ruleの作成をスコープ内のアプリケーションに制限しません。\nアプリケーションのユーザーロールを持つ任意のユーザーがアプリケーションのスクリプトを変更できる。これは誤りです。「Allow configuration」オプションは、アプリケーションのスクリプト（クライアントスクリプトやスクリプトインクルードなど）へのアクセスをアプリケーションのユーザーロールを持つ任意のユーザーに付与しません。アプリケーションのスクリプトを変更するには、adminロールまたはアプリケーションのadminロールが必要です。\nスコープ外のアプリケーションがスコープ付きアプリケーションに新しいテーブルを追加できる。これは誤りです。「Allow configuration」オプションは、スコープ外のアプリケーションがスコープ付きアプリケーションに新しいテーブルを追加することを許可しません。スコープ付きアプリケーションに新しいテーブルを追加するには、adminロールまたはアプリケーションのadminロールを持ち、アプリケーションスコープ内にいる必要があります。\n参照：Application Access, Business Rules"
    },
    {
        question: "tableというテーブルが存在し、field1、field2、field3の3つのフィールドを持っていると仮定します。tableのAccess Controlリストを確認してください：\n\nどのフィールドをitilロールを持つユーザーが読み取ることができますか？",
        type: "single",
        options: [
            "field3のみ",
            "field1とfield3",
            "すべてのフィールド",
            "field3を除くすべてのフィールド"
        ],
        correct: [3],
        explanation: "https://docs.servicenow.com/bundle/tokyo-platform-security/page/administer/contextualsecurity/concept/access"
    },
    {
        question: "アプリケーションがファイアウォールの背後にあるリポジトリにリンクする方法は何ですか？",
        type: "single",
        options: [
            "このオプションはサポートされていません",
            "MID Serverを通じてアプリケーションをソースコントロールにリンクする",
            "アクセストークンを通じてアプリケーションをソースコントロールにリンクする",
            "多要素認証を使用してアプリケーションをソースコントロールにリンクする"
        ],
        correct: [1],
        explanation: "「既存のMID Serverを使用してソースコントロールリポジトリに接続します。MID Serverを通じてアプリケーションをリンクまたはインポートすることで、ファイアウォールの背後にあるリポジトリにアクセスできます。」\nhttps://docs.servicenow.com/bundle/tokyo-applicationdevelopment/page/build/applications/concept/c_"
    },
    {
        question: "ServiceNowアプリケーションをGitリポジトリにリンクするために必要でないものは次のうちどれですか？",
        type: "single",
        options: [
            "パスワード",
            "URL",
            "ユーザー名",
            "アプリケーション名"
        ],
        correct: [3],
        explanation: "ServiceNowアプリケーションをGitリポジトリにリンクするためにアプリケーション名は必要ありません。GitリポジトリのURL、ユーザー名、パスワード、ブランチ名、認証タイプを提供するだけで十分です。アプリケーション名は、アプリケーションのスコープ名に基づいて自動的に生成されます。\n参照：[Link an application to a Git repository]"
    },
    {
        question: "特定のフィールドを対象としたフィードバックを提供するClient Scriptを記述する際に使用すべきメソッドはどれですか？",
        type: "single",
        options: [
            "g_form.showInfoMessage()",
            "g_form.showFieldMsg()",
            "g_form.addInfoMessage()",
            "g_form.addFieldMsg()"
        ],
        correct: [1],
        explanation: "https://docs.servicenow.com/bundle/tokyo-application-development/page/script/usefulscripts/reference/r_Displa"
    },
    {
        question: "Business Ruleにおいて、現在ログインしているユーザーのsys_idを返すものは次のうちどれですか？",
        type: "single",
        options: [
            "g_form.getUserID()",
            "g_form.getUserSysy",
            "gs.getUserSysID()",
            "gs.getUserID()"
        ],
        correct: [3],
        explanation: "https://docs.servicenow.com/bundle/tokyo-application-development/page/appstore/dev_portal/API_reference/gl"
    },
    {
        question: "以下のcaller accessフィールドオプションのうち、存在しないものはどれですか？",
        type: "single",
        options: [
            "Caller Tracking",
            "Caller Restriction",
            "None",
            "Caller Permission"
        ],
        correct: [3],
        explanation: "https://docs.servicenow.com/bundle/tokyo-applicationdevelopment/page/build/applications/task/set-RCA-level."
    },
    {
        question: "Form Designerで作業する際、子テーブルのフィールドのラベルを構成すると、どのテーブルのラベルが変更されますか？",
        type: "single",
        options: [
            "ベーステーブル",
            "子テーブル",
            "親テーブル",
            "すべてのテーブル"
        ],
        correct: [1],
        explanation: "子テーブルのフィールドのラベルを構成すると、そのテーブル（子テーブル）のみのラベルが変更され、ベーステーブルや親テーブルのラベルには影響しません。ベーステーブルは、すべての拡張テーブルに共通のフィールドを含むテーブルであり、親テーブルは子テーブルが直接拡張するテーブルです。ベーステーブルや親テーブルのフィールドのラベルは、子テーブルのラベルと異なる場合があります。\n参照：[ServiceNow Docs - Table extension], [ServiceNow Community - How to change field label in child table]"
    },
    {
        question: "フォームに指示を追加するための良い方法は次のうちどれですか？",
        type: "single",
        options: [
            "Annotations",
            "Wikiページへの関連リンク",
            "コンテキストメニューUI Action",
            "読み取り専用のフィールドを埋める"
        ],
        correct: [0],
        explanation: "「Form Builderでフォームアノテーションを使用して、フォームに説明テキストやその他のデザイン要素を追加します。」\nhttps://docs.servicenow.com/bundle/sandiego-applicationdevelopment/page/administer/form-builder/ta"
    },
    {
        question: "StudioとGitリポジトリの両方から利用可能なソースコントロール操作はどれですか？",
        type: "single",
        options: [
            "Create Branch",
            "Apply Remote Changes",
            "Stash Local Changes",
            "Edit Repository Configurations"
        ],
        correct: [0],
        explanation: "Create Branch操作は、StudioとGitリポジトリの両方から利用可能です。この操作により、既存のブランチから新しいブランチを作成できます。ブランチを使用すると、メインのブランチに影響を与えずに、さまざまな機能やバージョンのアプリケーションに取り組むことができます。\n参照：[Create a branch]"
    },
    {
        question: "Protection Policy値がProtectedであるScript Includeについて正しいものは次のうちどれですか？",
        type: "single",
        options: [
            "protected_editロールを持つ任意のユーザーがScript Includeを確認および編集できます",
            "Protection policyオプションは、adminロールを持つユーザーのみが有効にできます",
            "Protection Policyは、glide.app.apply_protectionシステムプロパティ値がtrueの場合にのみ適用されます",
            "Protection Policyは、アプリケーションがServiceNow App Storeからダウンロードされた場合にのみ適用されます"
        ],
        correct: [3],
        explanation: "https://docs.servicenow.com/bundle/rome-applicationdevelopment/page/build/applications/concept/c_ScriptProt\n以下のことがProtection Policy値がProtectedであるScript Includeについて正しいです：\nProtection Policyは、アプリケーションがServiceNow App Storeからダウンロードされた場合にのみ適用されます。これは、Protection Policyが、開発者がServiceNow App Storeを通じてアプリケーションを配布する際に、Script Includeが他のユーザーによって閲覧または変更されるのを防ぐための機能であるためです。Protection Policyは、アプリケーションがApp Storeからインストールされた場合にのみ強制され、インスタンス上で開発またはテストされている場合には適用されません。\n以下のものはProtection Policy値がProtectedであるScript Includeには当てはまりません：\nprotected_editロールを持つ任意のユーザーがScript Includeを確認および編集できる。これは誤りです。protected_editロールはProtection Policyとは関係なく、Access Control（ACL）ルールに関連しています。protected_editロールは、sys_scriptテーブルなどの保護されたフィールド（スクリプトフィールドなど）を編集する権限をユーザーに付与します。Protection Policyは、ロールを使用してScript Includeへのアクセスを制御するのではなく、アプリケーションがApp Storeに公開されたときに生成される暗号鍵を使用します。\nProtection policyオプションは、adminロールを持つユーザーのみが有効にできる。これは誤りです。Protection policyオプションは、スコープ付きアプリケーションのapplication_adminロールを持つ任意のユーザーが有効にできます。application_adminロールは、アプリケーションの開発および管理にフルアクセスを付与します。\nProtection Policyは、glide.app.apply_protectionシステムプロパティ値がtrueの場合にのみ適用される。これは誤りです。glide.app.apply_protectionシステムプロパティはProtection Policyとは関係なく、Application Restricted Caller Access（ARCA）機能に関連しています。ARCA機能は、開発者が呼び出し元のスコープに基づいて他のアプリケーションからのScript Includeへのアクセスを制限できるようにします。glide.app.apply_protectionシステムプロパティは、ARCA機能がインスタンス上で有効か無効かを決定します。\n参照：Script Includes, Protect Script Includes, Application Restricted Caller Access"
    },
    {
        question: "既存のテーブルを拡張する際に当てはまらない記述は次のうちどれですか？",
        type: "single",
        options: [
            "親テーブルのAccess Controlsは、新しいテーブルのレコードやフィールドへのアクセスを決定する際に評価されます",
            "新しいテーブルは親テーブルに組み込まれた機能を継承します",
            "新しいテーブルは親テーブルのすべてのフィールドを継承します",
            "必要なすべての動作をスクリプトおよび構成する必要があります"
        ],
        correct: [3],
        explanation: "提供されたリンクには次の記述があります：既存のServiceNowテーブルを拡張することは、新しいテーブルが親テーブルの列およびビジネスロジックを継承することを意味します。\n既存のテーブルを拡張する際に以下の記述が当てはまります：\n親テーブルのAccess Controlsは、新しいテーブルのレコードやフィールドへのアクセスを決定する際に評価されます。これは、Access Control（ACL）ルールが親テーブルから子テーブルに継承されるためです。ただし、子テーブルが独自のACLルールを持つ場合は、親テーブルのルールを上書きします。ACLルールは、ユーザーのロールや条件に基づいてServiceNowプラットフォームのデータや機能へのアクセスを制限するために使用されます。\n新しいテーブルは親テーブルに組み込まれた機能を継承します。これは、新しいテーブルが親テーブルのビジネスロジックや関係（Business Rules、Script Includes、UI Actions、UI Policies、Reference Fieldsなど）を継承するためです。ビジネスロジックと関係は、ServiceNowプラットフォーム上のデータの動作と構造を定義します。\n新しいテーブルは親テーブルのすべてのフィールドを継承します。これは、新しいテーブルが親テーブルの列と属性（Field Name、Data Type、Default Value、Mandatoryなど）を継承するためです。列と属性は、ServiceNowプラットフォーム上のデータの特性を定義します。\n以下の記述は既存のテーブルを拡張する際には当てはまりません：\n必要なすべての動作をスクリプトおよび構成する必要があります。これは誤りです。上述の通り、親テーブルから一部の動作がすでに継承されるため、既存のテーブルを拡張する際にすべての動作をスクリプトおよび構成する必要はありません。ただし、新しいテーブルに対して追加の動作やカスタマイズされた動作（新しいフィールドの追加、新しいBusiness Ruleの作成、既存のUI Actionsの変更など）をスクリプトおよび構成することは可能です。\n参照：Table Extension, Access Control Rules"
    },
    {
        question: "Guided Application Creatorを有効にするプラグインは何ですか？",
        type: "single",
        options: [
            "com.glide.sn-guided-app-creator",
            "com.glide.service_creator",
            "com.glide.snc.apps_creator",
            "com.snc.apps_creator_template"
        ],
        correct: [0],
        explanation: "「Guided Application Creatorは、Guided Application Creator（com.glide.sn-guided-app-creator）プラグインを介して有効になります。このプラグインはNow Platformでデフォルトでアクティブです。」\n「Activation Information」セクションに記載されています：\nhttps://docs.servicenow.com/en-US/bundle/tokyo-application-development/page/build/guided-appcreator/conce"
    },
    {
        question: "インスタンス上でローカルの変更を後で適用するために保存するソースコントロール操作は、次の<空白>と呼ばれます。",
        type: "single",
        options: [
            "Branch",
            "Tag",
            "Stash",
            "Update set"
        ],
        correct: [2],
        explanation: "インスタンス上でローカルの変更を後で適用するために保存するソースコントロール操作は、Stashと呼ばれます。Stashは、リモートリポジトリにプッシュする準備ができていない未コミットの変更を一時的に保存する領域です。開発者は、作業中の変更をローカルリポジトリにコミットしたり破棄したりせずに保存するためにStashを使用できます。Stashは後で適用して作業ディレクトリに変更を復元したり、不要になった場合は破棄したりできます。\n参照：[ServiceNow Docs - Stash local changes], [ServiceNow Docs - Source control]"
    },
    {
        question: "アプリケーションを共有する準備が整った後、ServiceNowがサポートする公開方法は次のうちどれですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "アプリケーションリポジトリに公開する",
            "スプレッドシートに公開する",
            "ローカルUSBデバイスに公開する",
            "ローカルドライブに公開する",
            "Update Setに公開する",
            "ServiceNow Storeに公開する"
        ],
        correct: [0, 4, 5],
        explanation: "ServiceNowは、アプリケーションリポジトリ、Update Set、またはServiceNow Storeにアプリケーションを公開することをサポートしています。これらの方法により、アプリケーションを他のインスタンスにインストールしたり、他のユーザーと共有したりできます。\n参照：\nPublish an application to the application repository\n4 Ways to Publish a ServiceNow Application\nPublish applications to the ServiceNow Store"
    },
    {
        question: "ユーザーがAccess Controlを通過するために評価がtrueでなければならない記述は次のうちどれですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "レコードに対する他の一致するAccess Controlsがtrueと評価される",
            "Access Controlに設定された条件がtrueと評価される",
            "ユーザーがBusiness Ruleを通じてアクセスを付与されている",
            "ユーザーがRequired roles関連リストに指定されたロールのいずれかを持っている",
            "Access Controlに設定されたスクリプトがtrueと評価される"
        ],
        correct: [1, 3, 4],
        explanation: "ユーザーがAccess Controlを通過するために評価がtrueでなければならない記述は次の通りです：\nAccess Controlに設定された条件がtrueと評価される。\nユーザーがRequired roles関連リストに指定されたロールのいずれかを持っている。\nAccess Controlに設定されたスクリプトがtrueと評価される。\nAccess Controlは、ユーザーがServiceNow内の特定のオブジェクトや操作にアクセスできるかどうかを決定するルールです。Access Controlは、条件、ロール、スクリプトの3つの要素で構成されています。各要素は、ユーザーがオブジェクトや操作にアクセスするための要件を指定します。これらの要素のいずれかがfalseを返した場合、Access Controlはアクセスを拒否し、残りの要素の評価を停止します。したがって、ユーザーがAccess Controlを通過するには、3つの要素すべてがtrueと評価される必要があります。\n他の記述は、ユーザーがAccess Controlを通過するために必要ではありません。レコードに対する他の一致するAccess Controlsがtrueと評価される必要はありません。アクセスを付与するには、一致するAccess Controlが1つだけtrueを返せば十分です。ユーザーがBusiness Ruleを通じてアクセスを付与される必要はありません。Business RuleはAccess Controlの一部ではなく、その評価に影響を与えません。\n参照：Access control rules, Access Controls"
    },
    {
        question: "Access Controlデバッグ情報は、Access Controlの各要素がアクセスを許可したか拒否したかを識別します。Access Controlの要素は評価の順序でデバッグ情報に表示されます。Access Controlの要素はどの順序で評価されますか？",
        type: "single",
        options: [
            "Conditions, Roles, Script",
            "Conditions, Script, Roles",
            "Roles, Conditions, Script",
            "Script, Conditions, Roles"
        ],
        correct: [2],
        explanation: "「順序はまずROLES、次にcondition、次にscriptです。」 - Chuck Tomasiがこのリンクで述べています：\nhttps://www.servicenow.com/community/grc-forum/order-of-execution-of-an-acl/mp/1311962/highlight/tru"
    },
    {
        question: "以下のうち、アプリケーションのプロパティを取得する正しいメソッドはどれですか？",
        type: "single",
        options: [
            "gs.getProperty()",
            "g_form.getAppProperty()",
            "g_form.getProperty()",
            "gs.getAppProperty()"
        ],
        correct: [0],
        explanation: "https://developer.servicenow.com/dev.do#!/learn/learningplans/tokyo/new_to_servicenow/app_store_learnv2_a"
    },
    {
        question: "Application Accessで制御できないデータベース操作は次のうちどれですか？",
        type: "single",
        options: [
            "Update",
            "Delete",
            "Create",
            "Query"
        ],
        correct: [3],
        explanation: "Application Accessは、他のアプリケーションスコープがアプリケーションのデータテーブルにアクセスするレベルを制御する機能です。Application Accessを使用して以下のデータベース操作を制御できます：\nCreate：ユーザーがテーブルに新しいレコードを作成できる操作です。Can createオプションを選択または解除することでこの操作を有効または無効にできます。\nDelete：ユーザーがテーブル上の既存のレコードを削除できる操作です。Can deleteオプションを選択または解除することでこの操作を有効または無効にできます。\nRead：ユーザーがテーブル上のレコードを表示できる操作です。Can readオプションを選択または解除することでこの操作を有効または無効にできます。\nWrite：ユーザーがテーブル上のレコードを変更できる操作です。Can writeオプションを選択または解除することでこの操作を有効または無効にできます。\nApplication Accessで制御できないデータベース操作はQueryです。Queryは操作ではなく、サーバーサイドでデータベースからレコードを取得するために使用されるGlideRecordクラスのメソッドです。QueryはApplication Accessルールの一部ではありませんが、Access Controlsやユーザーのロールに影響を受けます。\n参照：\nApplication Access\n[GlideRecord methods]"
    },
    {
        question: "Import Setテーブルのフィールドと既存のServiceNowテーブルのフィールド間の関係を決定するために使用できるプラットフォーム機能は何ですか？",
        type: "single",
        options: [
            "Business Service Management Map",
            "Data Sources",
            "Transform Map",
            "Cl Relationship Builder"
        ],
        correct: [2],
        explanation: "Transform Mapは、Import Setテーブルに表示されるフィールドと、IncidentやUsersテーブルなどの既存のServiceNowテーブルのフィールド間の関係を決定します。"
    },
    {
        question: "Globalアプリケーションで利用可能な機能は次のうちどれですか？（2つ選択してください）",
        type: "multiple",
        options: [
            "Automated Test Framework",
            "Source Control",
            "Delegated Development",
            "Flow Designer"
        ],
        correct: [0, 3],
        explanation: "Globalアプリケーションは、Automated Test FrameworkとFlow Designerの機能を使用できますが、Source ControlとDelegated Developmentの機能は使用できません。Source ControlとDelegated Developmentの機能は、スコープ付きアプリケーションでのみ利用可能です。\n参照：[Global vs Scoped Applications], [Delegated Development]"
    },
    {
        question: "Guided Application Creatorを通じてアプリケーションを作成する際、ユーザーエクスペリエンスのオプションとして選択できるものは次のうちどれですか？",
        type: "single",
        options: [
            "Portal",
            "Mobile",
            "Self-service",
            "Workspace"
        ],
        correct: [1],
        explanation: "https://docs.servicenow.com/bundle/tokyo-application-development/page/build/guided-appcreator/concept/guid"
    },
    {
        question: "以下のうち、UI Actionタイプではないものはどれですか？",
        type: "single",
        options: [
            "List choice",
            "Form button",
            "List banner button",
            "Form choice"
        ],
        correct: [0],
        explanation: "UI Actionは、ユーザーがクリックしてアクション（フォームの送信やスクリプトの実行など）を実行できるボタン、リンク、または選択肢です。以下のものはUI Actionタイプです：\nList choice：レコードのリスト上で選択リストとして表示されるUI Actionです。複数のレコードに対して一括でアクション（削除や更新など）を実行するために使用できます。\nForm button：フォーム上にボタンとして表示されるUI Actionです。現在のレコードに対してアクション（保存や承認など）を実行するために使用できます。\nList banner button：レコードのリストのバナー上にボタンとして表示されるUI Actionです。リスト全体に対してアクション（エクスポートや印刷など）を実行するために使用できます。\n以下のものはUI Actionタイプではありません：\nForm choice：これはUI Actionタイプではなく、フィールドタイプです。Form choiceは、フォーム上で選択リストを表示するフィールドです。優先度や状態などの事前定義されたオプションから値を選択するために使用できます。\n参照：UI Actions, Field Types"
    },
    {
        question: "フォームを設計および作成する際、フィールドを整理するために作成するものは何ですか？",
        type: "single",
        options: [
            "Related lists",
            "Tabs",
            "Sections",
            "Buttons"
        ],
        correct: [2],
        explanation: "フォームを設計および作成する際、フィールドを整理するためにセクションを作成します。セクションは、関連するフィールドをグループ化し、グループにラベルと説明を提供するコンテナです。セクションを使用することで、フォームの読みやすさと使いやすさを向上させることができます。また、セクションを折り畳んだり展開したりして、内部のフィールドを表示または非表示にすることもできます。\n他の選択肢は、フォーム上でフィールドを整理するための有効な方法ではありません。Related listsはフィールドではなく、フォーム上の現在のレコードに関連するレコードのリストです。Tabsはフォームの一部ではなく、異なるモジュール間を移動するためのアプリケーションメニューの一部です。Buttonsはフィールドではなく、フォーム上でアクション（レコードの保存、更新、削除など）を実行する要素です。\n参照：\n[Form sections]\n[Related lists]\n[Application menus and modules]\n[Form buttons]"
    },
    {
        question: "スクリプトを使用せずにBusiness Ruleが実行できるアクションは次のうちどれですか？",
        type: "single",
        options: [
            "フィールド値を設定し、データベースをクエリする",
            "フィールド値を設定し、イベントを生成する",
            "フィールド値を設定し、システムログに書き込む",
            "フィールド値を設定し、メッセージを追加する"
        ],
        correct: [1],
        explanation: "Business Ruleは、スクリプトを使用せずに、フィールド値を設定したりイベントを生成したりするアクションを実行できます。Business Ruleは、レコードが表示、挿入、更新、削除、またはクエリされたときに実行されるサーバーサイドスクリプトです。Business Ruleは、フィルター条件、ロール条件、アクションを使用して、実行するタイミングと方法を定義できます。アクションは、レコードに対して実行できる事前定義された操作であり、フィールド値の設定、イベントの生成、メッセージの追加、システムログへの書き込みなどが含まれます。これらのアクションはスクリプトを必要とせず、ドロップダウンリストから選択できます。\n参照：Use business rules and client scripts to control field values"
    },
    {
        question: "現在ログインしているユーザーがcatalog_adminロールを持っている場合にのみtrueを返し、それ以外の場合はfalseを返すメソッド呼び出しはどれですか？",
        type: "single",
        options: [
            "g_user.hasRole('catalog_admin')",
            "g_user.hasRoleExactly('catalog_admin')",
            "g_user.hasRoleOnly('catalog_admin')",
            "g_user.hasRoleFromList('catalog_admin')"
        ],
        correct: [1],
        explanation: "現在ログインしているユーザーがcatalog_adminロールを持っている場合にのみtrueを返し、それ以外の場合はfalseを返すメソッド呼び出しは、g_user.hasRoleExactly('catalog_admin')です。このメソッドは、ユーザーが指定されたロールを正確に1つだけ持っているかどうかを確認し、引数と一致する場合にtrueを返します。他のメソッドは、ユーザーが1つ以上のロールを持っている場合や、指定されたロールのリストからいずれかのロールを持っている場合にtrueを返します。\n参照：[ServiceNow Docs - GlideUser API], [ServiceNow Community - Difference between hasRole() and hasRoleExactly()]"
    },
    {
        question: "Access Controlデバッグ情報は、Access Controlの各要素がアクセスを許可したか拒否したかを識別します。Access Controlの要素はどの順序で評価されますか？",
        type: "single",
        options: [
            "Conditions, Script, Roles",
            "Script, Conditions, Roles",
            "Conditions, Roles, Script",
            "Roles, Conditions, Script"
        ],
        correct: [3],
        explanation: "Access Controlの要素は、次の順序で評価されます：Roles、Conditions、Script。Conditionsは、Access Controlが適用されるための基準のセットです。Rolesは、オブジェクトにアクセスするために必要なユーザーロールのリストです。Scriptは、カスタムロジックに基づいてアクセスをさらに制限または許可するオプションのスクリプトです。これらの要素のいずれかがfalseを返した場合、Access Controlはアクセスを拒否し、残りの要素の評価を停止します。\n参照：Access control rules"
    },
    {
        question: "条件やスクリプトがないAccess Controlを構成する際、次の記述のうち正しくないものはどれですか？",
        type: "single",
        options: [
            "table.*はレコード内のすべてのフィールドへのアクセスを許可します",
            "table.Noneはテーブル上のすべてのレコードへのアクセスを許可します",
            "table.fieldはレコード内の特定のフィールドへのアクセスを許可します",
            "table.idはテーブル上の特定のレコードへのアクセスを許可します"
        ],
        correct: [3],
        explanation: "Access Controlsは、誰がどのデータにアクセスできるか、どのようにアクセスできるかを定義するルールです。Access Controlを構成する際、テーブル、操作、ロールを指定できます。また、条件やスクリプトを追加してルールをさらに絞り込むこともできます。条件やスクリプトを追加しない場合、ルールはテーブル上のすべてのレコードとフィールドに適用されます。\n記述A、B、Cは、条件やスクリプトがないAccess Controlsに対して正しいです。たとえば：\ntable.*はレコード内のすべてのフィールドへのアクセスを許可します。これは、ユーザーがロールやその他の基準に関係なく、レコード上のすべてのフィールドを表示および編集できることを意味します。\ntable.Noneはテーブル上のすべてのレコードへのアクセスを許可します。これは、ユーザーがロールやその他の基準に関係なく、テーブル上のすべてのレコードを表示および編集できることを意味します。\ntable.fieldはレコード内の特定のフィールドへのアクセスを許可します。これは、ユーザーがロールやその他の基準に関係なく、そのフィールドのみを表示および編集できることを意味します。\n記述Dは、条件やスクリプトがないAccess Controlsに対して正しくありません。table.idはテーブル上の特定のレコードへのアクセスを許可しません。idはフィールド名ではなく、レコードの一意の識別子だからです。テーブル上の特定のレコードへのアクセスを許可するには、レコードのidに一致する条件やスクリプトを追加する必要があります。\n参照：\n[Access Control rules]\n[Create an Access Control rule]"
    },
    {
        question: "Event Registryとは何ですか？",
        type: "single",
        options: [
            "ServiceNowシステムが認識するすべてのイベントのレコードを含むテーブルで、イベントが発生したときにServiceNowが反応できるようにします",
            "イベントが発生するたびに起動するワークフロー。イベントのデバッグに使用されます",
            "サーバーサイドスクリプトでイベントを生成し、パラメータを渡すために使用されるメソッド",
            "生成されたすべてのイベントをリストするEvent Log"
        ],
        correct: [0],
        explanation: "Event Registryは、ServiceNowシステムでトリガーまたは処理可能なすべてのイベントの定義を保存するテーブルです。Event Registryは、イベントが発生したときにServiceNowが反応できるようにし、通知の送信、スクリプトの実行、ワークフローの開始などのアクションを実行します。Event Registryは、イベントのパラメータ、説明、ソースに関する情報も提供します。\n参照：Event Registry - ServiceNow Docs, Event Management - ServiceNow Docs, Event Registry form - ServiceNow Docs"
    },
    {
        question: "公開されるアプリケーションに含まれるスクリプト、レポート、その他のアプリケーションアーティファクトを確認するにはどうすればよいですか？",
        type: "single",
        options: [
            "Global検索フィールドにアプリケーション名を入力する",
            "インスタンスのUpdate Setsリストを開く",
            "公開するアプリケーションのApplication Files関連リストを確認する",
            "アーティファクトレコードを個別に開き、Applicationフィールドの値を確認する"
        ],
        correct: [2],
        explanation: "公開されるアプリケーションに含まれるスクリプト、レポート、その他のアプリケーションアーティファクトを確認するには、公開するアプリケーションのApplication Files関連リストを確認するのが最善の方法です。これにより、アプリケーションに属するすべてのアプリケーションファイルがファイルタイプとスコープごとにグループ化されて表示されます。リストをフィルタリング、ソート、または検索して特定のファイルを見つけることもできます。\n以下の選択肢は、公開されるアプリケーションアーティファクトを確認するための最善の方法ではありません：\nGlobal検索フィールドにアプリケーション名を入力する。これは、インスタンス上でグローバルテキスト検索を実行し、アプリケーション名に一致するレコードを返しますが、関連性のない結果や不完全な結果が含まれる可能性があります。\nインスタンスのUpdate Setsリストを開く。これは、インスタンス上で作成またはインポートされたすべてのUpdate Setを表示しますが、公開するアプリケーションに属するものとは限りません。Update Setは、カスタマイズをインスタンス間で移動するために使用され、ServiceNow StoreやShareにアプリケーションを公開するためには使用されません。\nアーティファクトレコードを個別に開き、Applicationフィールドの値を確認する。これは、アプリケーションの一部である可能性のある各レコードを開き、Applicationフィールドを確認する必要がありますが、手間がかかりエラーが発生しやすいです。\n参照：Publish an Application, Application Files"
    },
    {
        question: "プライベートスコープアプリケーションでテーブルを作成する際、テーブルに対して作成されるAccess Controlsは次のうちどれですか？（4つ選択してください）",
        type: "multiple",
        options: [
            "Insert, Delete, Query, Write",
            "Create, Delete, Read, Write",
            "Create, Delete, Read, Update",
            "Insert, Delete, Query, Update"
        ],
        correct: [1],
        explanation: "プライベートスコープアプリケーションでテーブルを作成する際、テーブルに対して4つのAccess Controlsが自動的に作成されます。これらのAccess Controlsは、テーブル上の4つの基本操作（Create、Delete、Read、Write）に対する権限を定義します。Create操作は、ユーザーがテーブルに新しいレコードを作成することを許可します。Delete操作は、ユーザーがテーブル上の既存のレコードを削除することを許可します。Read操作は、ユーザーがテーブル上のレコードを表示することを許可します。Write操作は、ユーザーがテーブル上のレコードを変更することを許可します。デフォルトでは、これらのAccess Controlsはadminロールとアプリケーションスコープにアクセスを付与します。必要に応じて、これらのAccess Controlsを変更または削除できます。\n他の選択肢は、テーブルに対する有効なAccess Controlsではありません。Insert、Query、Updateは操作ではなく、サーバーサイドでレコードを操作するために使用されるGlideRecordクラスのメソッドです。これらはAccess Controlルールの一部ではありません。\n参照：\n[Access Control rules]\nCreate a table in a scoped application\n[GlideRecord methods]"
    },
    {
        question: "スコープ付きアプリケーションで利用可能なサーバーサイドAPIデバッグログメソッドはどれですか？",
        type: "single",
        options: [
            "gs.print()",
            "gs.log()",
            "gs.debuglog()",
            "gs.info()"
        ],
        correct: [3],
        explanation: "スコープ付きアプリケーションで利用可能なサーバーサイドAPIデバッグログメソッドは、gs.info()です。このメソッドは、アプリケーションの進行状況を説明する情報メッセージを記録します。gs.print()やgs.log()などの古いメソッドは、スコープ付きアプリケーションでは利用できません。gs.debuglog()メソッドは存在しません。gs.info()、gs.warn()、gs.error()、gs.debug()メソッドは、スコープ付きアプリケーションとグローバルアプリケーションの両方で動作するため、将来のバージョンでもより汎用的です。\n参照：Debugging best practices"
    },
    {
        question: "Scheduled Script Execution（Scheduled Job）スクリプトで使用できるオブジェクトはどれですか？",
        type: "single",
        options: [
            "GlideRecordとcurrent",
            "GlideUserとGlideRecord",
            "GlideSystemとGlideRecord",
            "GlideSystemとcurrent"
        ],
        correct: [2],
        explanation: "https://developer.servicenow.com/dev.do#!/learn/learningplans/quebec/servicenow_administrator/app_store_lea\nScheduled Script Execution（Scheduled Job）スクリプトで使用できるオブジェクトは、GlideSystemとGlideRecordです。GlideSystemは、ログ記録、バックグラウンドスクリプトの実行、システム情報の取得などのシステム操作を実行するためのメソッドを提供します。GlideRecordは、データベース内のレコードを操作するためのメソッド（クエリ、更新、挿入、削除など）を提供します。currentオブジェクトは、フォームやリスト上の現在のレコードを参照するため、Scheduled Script Executionスクリプトでは利用できません。GlideUserオブジェクトも、現在のユーザーセッションを参照するため利用できません。\n参照：Scheduled Script Execution, GlideSystem, GlideRecord"
    },
    {
        question: "Form Designerについて正しくない記述は次のうちどれですか？",
        type: "single",
        options: [
            "フォームレイアウトにセクションを追加するには、Field Typesタブからセクションをドラッグして目的の場所に移動します",
            "フォームレイアウトにフィールドを追加するには、Fieldsタブからフィールドをドラッグして目的の場所に移動します",
            "フォームレイアウトからフィールドを削除するには、フィールドにカーソルを合わせてActionボタンを有効にし、Delete（X）ボタンを選択します",
            "フォームのテーブルに新しいフィールドを作成するには、Field Typesタブから適切なデータ型をフォームにドラッグし、新しいフィールドを構成します"
        ],
        correct: [0],
        explanation: "https://docs.servicenow.com/bundle/tokyo-platform-administration/page/administer/formadministration/concept"
    },
    {
        question: "ATFテストステップのうち、テスト用に指定されたロールとグループを持つユーザーを作成できるものはどれですか？",
        type: "single",
        options: [
            "Create a user",
            "Create a role",
            "Create a group",
            "Impersonation"
        ],
        correct: [0],
        explanation: "Automated Test Framework（ATF）は、ServiceNowプラットフォーム上で自動テストを作成および実行するためのツールです。ATFは、テストステップを使用して各テストのアクションと検証を定義します。テスト用に指定されたロールとグループを持つユーザーを作成できるテストステップは、Create a userテストステップです。このテストステップは、テストの終了時に削除される一時的なユーザーレコードを作成します。ユーザー名、パスワード、ロール、グループを指定できます。また、Impersonate a userテストステップを使用して、作成したユーザーに切り替えてそのユーザーとしてアクションを実行することもできます。\n他の選択肢は、ユーザーを作成するための有効なテストステップではありません。Create a roleやCreate a groupテストステップはATFには存在しません。ロールやグループを作成するには、Create a recordテストステップを使用してsys_user_roleまたはsys_user_groupテーブルを指定する必要があります。Impersonationテストステップはユーザーを作成するのではなく、既存のユーザーに切り替えます。\n参照：\n[Automated Test Framework overview]\n[Automated Test Framework test steps]\n[Create a user test step]\n[Impersonate a user test step]"
    },
    {
        question: "Record Producerを作成および構成する最も速い方法は次のうちどれですか？",
        type: "single",
        options: [
            "Catalog Categoryを作成し、カテゴリを開いてAdd New Record Producerボタンを選択する",
            "Record Producerモジュールを使用して、すべての変数を手動で追加および構成する",
            "Table recordsでテーブルを開き、Add to Service Catalog関連リンクを選択する",
            "テーブルのフォームを開き、フォームヘッダーを右クリックしてCreate Record Producerメニュー項目を選択する"
        ],
        correct: [2],
        explanation: "Record Producerを作成および構成する最も速い方法は、Table recordsでテーブルを開き、Add to Service Catalog関連リンクを選択することです。これにより、テーブルと同じフィールドを持つRecord Producerが自動的に作成され、Service Catalogに追加されます。その後、必要に応じてRecord Producerを変更できます。\n他の選択肢はより多くの手順と手動構成が必要です。\n参照：\nCreate a record producer"
    },
    {
        question: "プライベートスコープアプリケーションのサーバーサイドスクリプトでメッセージを記録するために使用されないメソッドは次のうちどれですか？",
        type: "single",
        options: [
            "gs.log()",
            "gs.error()",
            "gs.warn()",
            "gs.debug()"
        ],
        correct: [0],
        explanation: "gs.print()とgs.log()は古いメソッドであり、スコープ付きアプリケーションでは利用できません。一方、gs.debug()、gs.info()、gs.warn()、gs.error()は、スコープ付きアプリケーションとグローバルの両方で動作するため、将来のバージョンでもより汎用的です。"
    },
    {
        question: "フォームに表示されるフィールドのデータ型を選択する際、次の記述のうち正しくないものはどれですか？",
        type: "single",
        options: [
            "Choiceデータ型を使用してフィールドのオプションを制限する",
            "Dataデータ型を使用して日付と時刻を入力する",
            "Phone Numberデータ型を使用して電話番号データの検証を自動化する",
            "Stringデータ型を使用して自由形式のテキストフィールドを作成する"
        ],
        correct: [1],
        explanation: "フィールドのデータ型は、フォーム上のフィールド値の形式、検証、表示を決定します。フィールドのデータ型を選択する際、フィールドの目的と機能を考慮する必要があります。記述A、C、Dは、フィールドのデータ型を選択する際に正しいです。たとえば：\nChoiceデータ型を使用してフィールドのオプションを制限する：Choiceデータ型を使用すると、ユーザーが選択できる事前定義されたオプションセットを持つフィールドを作成できます。オプションはドロップダウンリスト、ラジオボタン、チェックボックスとして表示できます。たとえば、タスクの優先度を示すフィールドにChoiceデータ型を使用できます。\nPhone Numberデータ型を使用して電話番号データの検証を自動化する：Phone Numberデータ型を使用すると、電話番号を受け入れて検証するフィールドを作成できます。フィールドは、ユーザーのロケールと国コードに従って電話番号を自動的にフォーマットします。たとえば、ユーザーの連絡先番号を保存するフィールドにPhone Numberデータ型を使用できます。\nStringデータ型を使用して自由形式のテキストフィールドを作成する：Stringデータ型を使用すると、ユーザーからの任意のテキスト入力を受け入れるフィールドを作成できます。フィールドの最大長は255文字です。たとえば、インシデントの簡単な説明をキャプチャするフィールドにStringデータ型を使用できます。\n記述Bは、フィールドのデータ型を選択する際に正しくありません。ServiceNowにはDataデータ型はありません。日付と時刻を入力するには、Date/Timeデータ型を使用する必要があります。Date/Timeデータ型を使用すると、日付と時刻の値を受け入れて表示するフィールドを作成できます。フィールドは、カレンダーウィジェットと時間ピッカーを使用してユーザーが値を入力するのを支援します。たとえば、タスクの期限を記録するフィールドにDate/Timeデータ型を使用できます。\n参照：\n[Field types]\n[Date/Time field type]"
    },
    {
        question: "ServiceNowテーブル作成の方法は次のうちどれですか？（3つ選択してください）",
        type: "multiple",
        options: [
            "レガシーワークフローを使用する",
            "スプレッドシートをアップロードしてカスタムテーブルに変換する",
            "Flow Designerを使用する",
            "Now Experience Table Creatorを使用する",
            "テーブルを拡張する",
            "カスタムテーブルを作成する"
        ],
        correct: [1, 4, 5],
        explanation: "「アプリケーションに使用できるスプレッドシートや既存のテーブルがない場合、新しいテーブルを作成してカスタマイズできます。」以下のリンクを参照：\nhttps://docs.servicenow.com/bundle/tokyo-application-development/page/build/app-enginestudio/task/create-tab\nまた、以下も参照：\nhttps://docs.servicenow.com/bundle/tokyo-application-development/page/build/guided-appcreator/task/gac-crea\nまた、「Now Experience Table Creator」で検索しても結果が見つかりません。"
    },
    {
        question: "テーブル間の関係をグラフィカルに表現するものは次のうちどれですか？",
        type: "single",
        options: [
            "Schema map",
            "Dependency view",
            "Graphical User Interface",
            "Map source report"
        ],
        correct: [0],
        explanation: "「Schema map：テーブル間の関係をグラフィカルに表現します。」\nhttps://docs.servicenow.com/bundle/tokyo-platform-administration/page/administer/tableadministration/concept"
    },
    {
        question: "Application PickerとApplication Scopeについて正しいものは次のうちどれですか？",
        type: "single",
        options: [
            "Application Pickerからアプリケーションを選択しても、Application Scopeは設定されません",
            "Application PickerでGlobalを選択すると、Application Scopeがincidentに設定されます",
            "Globalは予約済みのアプリケーションであり、Application Pickerには表示されません",
            "Application Pickerからアプリケーションを選択すると、Application Scopeが設定されます"
        ],
        correct: [3],
        explanation: "「アプリケーション開発者は、現在のスコープコンテキストとしてアプリケーションを選択する必要があります。」\nhttps://docs.servicenow.com/bundle/tokyo-applicationdevelopment/page/build/applications/task/t_Sele"
    },
    {
        question: "アプリケーションスコープの目的として正しくないものは次のうちどれですか？",
        type: "single",
        options: [
            "アプリケーションアーティファクト間の関係を提供する",
            "アプリケーションを開発したユーザーを追跡する方法を提供する",
            "クロスアプリケーションの名前衝突を防ぐための名前空間（プレフィックスとスコープ名）を提供する",
            "別のスコープからのスクリプトがスコープ付きアプリケーションのテーブルを変更する方法を制御する"
        ],
        correct: [1],
        explanation: "アプリケーションスコープの目的は、アプリケーションを開発したユーザーを追跡する方法を提供することではありません。アプリケーションスコープは、アプリケーションやそのアーティファクトを作成または変更したユーザーに関する情報を保存または表示しません。アプリケーションスコープの目的は、アプリケーションアーティファクト間の関係を提供し、クロスアプリケーションの名前衝突を防ぐための名前空間を提供し、別のスコープからのスクリプトがスコープ付きアプリケーションのテーブルを変更する方法を制御することです。\n参照：[Product Documentation | ServiceNow], [Advantages of Scoped Applications in ServiceNow]"
    },
    {
        question: "テーブルのリストの列ヘッダーを右クリックして作成できるレポートタイプはどれですか？",
        type: "single",
        options: [
            "Bar Chart, Pie Chart, Histogram, Line",
            "Bar Chart",
            "Bar Chart, Pie Chart, Histogram",
            "Bar ChartとPie Chart"
        ],
        correct: [3],
        explanation: "テーブルのリストの列ヘッダーを右クリックして作成できるレポートタイプは、Bar ChartとPie Chartです。これらのレポートタイプは、比例するバーやスライスを使用してデータ全体に対する個々のデータの関係を示します。カウント、合計、平均、最小、最大、パーセントなどの異なる集計方法を選択することもできます。\n参照：[Create reports from lists]"
    },
    {
        question: "gs.eventQueue()メソッドを使用してイベントに応答する方法は次のうちどれですか？",
        type: "single",
        options: [
            "Script Action",
            "Scheduled Script Execution (Scheduled Job)",
            "UI Policy",
            "Email Notification",
            "bとc",
            "c",
            "aとd",
            "aとc"
        ],
        correct: [6],
        explanation: "「イベントに応答する方法は2つあります：\nEmail Notification\nScript Action」 - 以下のリンクを参照：\nhttps://developer.servicenow.com/dev.do#!/learn/learningplans/tokyo/new_to_servicenow/app_store_learnv2_a"
    },
    {
        question: "モジュールを構成する際、Override application menu roles構成オプションは何を行いますか？",
        type: "single",
        options: [
            "モジュールロールを持つがアプリケーションメニューにアクセスできないユーザーがモジュールにアクセスできる",
            "セルフサービスユーザーがロールを持っていなくてもモジュールにアクセスできる",
            "Access Controlsが通常アクセスを防ぐ場合でも、adminがモジュールにアクセスできる",
            "アプリケーションメニューにアクセスできるユーザーは、モジュールロールを持っていなくてもモジュールを見ることができます"
        ],
        correct: [0],
        explanation: "チェックボックスのツールチップ：「指定されたロールを持つユーザーにこのモジュールを表示します。それ以外の場合は、ユーザーはアプリケーションメニューとモジュールの両方で指定されたロールを持っている必要があります。」\nモジュールを構成する際のOverride application menu roles構成オプションについて以下のことが正しいです：\nモジュールロールを持つがアプリケーションメニューにアクセスできないユーザーがモジュールにアクセスできる。これは、Override application menu rolesオプションが、アプリケーションメニューのロール要件をバイパスし、モジュールロールを持っていればモジュールに直接アクセスできるようにするためです。たとえば、モジュールがitilロールを持ち、Override application menu rolesオプションが有効で、アプリケーションメニューがadminロールを持っている場合、itilロールを持つがadminロールを持っていないユーザーでもモジュールにアクセスできます。\n以下のものは、モジュールを構成する際のOverride application menu roles構成オプションには当てはまりません：\nセルフサービスユーザーがロールを持っていなくてもモジュールにアクセスできる。これは誤りです。Override application menu rolesオプションは、ロールを持っていないユーザー（セルフサービスユーザーなど）にモジュールへのアクセスを付与しません。セルフサービスユーザーは、ロールが割り当てられていないユーザーであり、セルフサービスポータルとナレッジベースにのみアクセスできます。モジュールにアクセスするには、少なくともモジュールロールが必要です。\nAccess Controlsが通常アクセスを防ぐ場合でも、adminがモジュールにアクセスできる。これは誤りです。Override application menu rolesオプションは、モジュールに適用されるAccess Control（ACL）ルールを上書きしません。Access Controlルールは、ユーザーのロールや条件に基づいてServiceNowプラットフォームのデータや機能へのアクセスを制限するために使用されます。adminはロールです。\n参照：N/A"
    },
    {
        question: "プライベートスコープアプリケーションのテーブルのベースライン動作として正しいものは次のうちどれですか？",
        type: "single",
        options: [
            "任意のBusiness Ruleがテーブルから読み書き、削除、更新できます",
            "テーブルとそのデータはウェブサービスを使用してアクセスできません",
            "テーブルのアプリケーション内のアーティファクトのみがテーブルから読み取ることができます",
            "すべてのアプリケーションスコープがテーブルから読み取ることができます"
        ],
        correct: [3],
        explanation: null
    },
    {
        question: "Form Designerについて正しい記述は次のうちどれですか？",
        type: "multiple",
        options: [
            "フォームレイアウトにフィールドを追加するには、Fieldsタブからフィールドをドラッグして目的の場所に移動します",
            "フォームのテーブルに新しいフィールドを作成するには、Field Typesタブから適切なデータ型をフォームにドラッグし、新しいフィールドを構成します",
            "フォームレイアウトからフィールドを削除するには、フィールドにカーソルを合わせてActionボタンを有効にし、Delete（X）ボタンを選択します",
            "フォームレイアウトにセクションを追加するには、Field Typesタブからセクションをドラッグして目的の場所に移動します"
        ],
        correct: [0, 1, 2],
        explanation: "https://docs.servicenow.com/bundle/tokyo-platform-administration/page/administer/formadministration/concept\nForm Designerは、フォームを作成およびカスタマイズするためのグラフィカルインターフェースです。Form Designerについて以下の記述が正しいです：\nフォームレイアウトにフィールドを追加するには、Fieldsタブからフィールドをドラッグして目的の場所に移動します。これにより、テーブル定義を変更せずにフォームビューにフィールドを追加できます。\nフォームのテーブルに新しいフィールドを作成するには、Field Typesタブから適切なデータ型をフォームにドラッグし、新しいフィールドを構成します。これにより、テーブルに新しい列が作成され、フォームビューにフィールドが追加されます。\nフォームレイアウトからフィールドを削除するには、フィールドにカーソルを合わせてActionボタンを有効にし、Delete（X）ボタンを選択します。これにより、フォームビューからフィールドが削除されますが、テーブル定義からは削除されません。\n以下の記述はForm Designerについて正しくありません：\nフォームレイアウトにセクションを追加するには、Field Typesタブからセクションをドラッグして目的の場所に移動します。これは誤りです。セクションはField Typesタブにはありません。セクションを追加するには、ツールバーのAdd Sectionボタンをクリックするか、フォームを右クリックしてAdd Sectionを選択します。\n参照：Introduction to App Engine Studio for Developers, ServiceNow Studio Overview, Form Designer"
    },
    {
        question: "モジュールにはLink typeが必要です。以下のうち、Link typeのリストとして正しいものはどれですか？",
        type: "single",
        options: [
            "List of Records, Separator, Catalog Type, Roles",
            "Assessment, List of Records, Separator, Timeline Page",
            "List of Records, Content Page, Order, URL (from arguments:)",
            "Assessment, List of Records, Content Page, Roles"
        ],
        correct: [1],
        explanation: null
    },
    {
        question: "クライアントサイドスクリプトは何を管理しますか？",
        type: "single",
        options: [
            "FormsとForms Fields",
            "Playbook access",
            "Databaseとbackend",
            "User access"
        ],
        correct: [0],
        explanation: "https://docs.servicenow.com/bundle/tokyo-application-development/page/script/serverscripting/concept/c_Serve"
    },
    {
        question: "Guided Application Creatorを通じてアプリケーションを作成する際、テーブルを作成するオプションとして含まれていないものは次のうちどれですか？",
        type: "single",
        options: [
            "スプレッドシートをアップロードする",
            "テンプレートからテーブルを作成する",
            "テーブルを拡張する",
            "ゼロからテーブルを作成する"
        ],
        correct: [1],
        explanation: "Guided Application Creatorを通じてテーブルを作成する際、テンプレートからテーブルを作成するオプションはありません。他の選択肢は、アプリ内でテーブルを作成するために利用可能です。スプレッドシートをアップロードするオプションでは、Excelファイルからデータをインポートし、スプレッドシートの列と行に基づいてテーブルを作成できます。テーブルを拡張するオプションでは、親テーブルからフィールドと動作を継承する子テーブルを作成できます。ゼロからテーブルを作成するオプションでは、独自のフィールドとデータ型を定義して新しいテーブルを作成できます。\n参照：Create tables\nhttps://docs.servicenow.com/bundle/tokyo-application-development/page/build/guided-appcreator/concept/gac-t"
    },
    {
        question: "アプリケーションのデータテーブル上で他のプライベートアプリケーションスコープが構成レコードを作成するのを防ぐために、Application Accessをどのように構成する必要がありますか？",
        type: "single",
        options: [
            "Application Accessを使用するのではなく、他のすべてのアプリケーションスコープがアプリケーションのデータテーブル上で構成レコードを作成するのを防ぐAccess Controlsを作成する必要があります",
            "Accessible fromフィールド値をAll application scopesに設定し、Can createオプションを解除する",
            "Accessible fromフィールド値をThis application scope onlyに設定し、Allow access to this table via web servicesオプションを解除する",
            "Accessible fromフィールド値をThis application scope onlyに設定する"
        ],
        correct: [3],
        explanation: "Application Accessは、他のアプリケーションスコープがアプリケーションのデータテーブルにアクセスするレベルを制御する機能です。Accessible fromフィールド値をThis application scope onlyに設定することで、データテーブルへのアクセスをアプリケーションスコープのみに制限できます。これにより、他のアプリケーションスコープは、Access Controlsやその他の手段で明示的な権限を持っていない限り、データテーブル上でレコードを作成、読み取り、書き込み、削除できません。\n参照：\nApplication Access\n[Application scope]\nhttps://developer.servicenow.com/dev.do#!/learn/learningplans/rome/new_to_servicenow/app_store_learnv2_se\nhttps://docs.servicenow.com/bundle/rome-applicationdevelopment/page/build/applications/concept/c_ExampleD"
    },
    {
        question: "Access Controlスクリプトで役立つメソッドは次のうちどれですか？",
        type: "single",
        options: [
            "g_user.hasRole()とcurrent.isNewRecord()",
            "gs.hasRole()とcurrent.isNewRecord()",
            "g_user.hasRole()とcurrent.isNew()",
            "gs.hasRole()とcurrent.isNew()"
        ],
        correct: [1],
        explanation: "Access Controlスクリプトは、Access Controlルールが評価されるときに実行されるサーバーサイドスクリプトです。gsとcurrentオブジェクトを使用して、GlideSystemとGlideRecordメソッドにアクセスできます。\nAccess Controlスクリプトで役立つメソッドには以下が含まれます：\ngs.hasRole() - このメソッドは、現在のユーザーが指定されたロールを持っているかどうかを確認します。ユーザーがロールを持っている場合はtrueを返し、そうでない場合はfalseを返します。たとえば、gs.hasRole('admin')は、ユーザーが管理者であればtrueを返し、そうでなければfalseを返します。\ncurrent.isNewRecord() - このメソッドは、現在のレコードがまだデータベースに挿入されていない新しいレコードかどうかを確認します。レコードが新しい場合はtrueを返し、そうでない場合はfalseを返します。たとえば、current.isNewRecord()は、レコードが作成中の場合はtrueを返し、更新または削除中の場合はfalseを返します。\ng_user.hasRole()とcurrent.isNew()は、サーバーサイドスクリプトAPIの一部ではありません。これらは、Client ScriptsやUI Policiesで使用されるクライアントサイドスクリプトAPIの一部です。Access Controlスクリプトでは使用できません。\n参照：\n[Access Control scripts]\n[GlideSystem methods]\n[GlideRecord methods]"
    },
    {
        question: "新しいアプリケーションを作成する際に、既存のTaskテーブルを拡張することの利点は何ですか？",
        type: "multiple",
        options: [
            "既存のフィールドをラベルを変更するだけで再利用できます",
            "既存のフィールドを変更せずに使用できます",
            "親テーブルからの既存のロジックが新しいテーブルに自動的に適用されます",
            "親テーブルのすべてのレコードが新しいテーブルにコピーされます"
        ],
        correct: [0, 1, 2],
        explanation: "新しいアプリケーションを作成する際に、既存のTaskテーブルを拡張することにはいくつかの利点があります：\n既存のフィールドをラベルを変更するだけで再利用できます。たとえば、Short descriptionフィールドをSummaryやTitleに変更して新しいテーブルで使用できます。\n既存のフィールドを変更せずに使用できます。たとえば、Assigned to、Priority、Stateフィールドを新しいテーブルでそのまま使用できます。\n親テーブルからの既存のロジックが新しいテーブルに自動的に適用されます。たとえば、TaskテーブルからのBusiness Rules、Client Scripts、UI Policiesを新しいテーブルに継承できます。\n唯一正しくない選択肢は、親テーブルのすべてのレコードが新しいテーブルにコピーされるというものです。テーブルを拡張しても、親テーブルのレコードは新しいテーブルにコピーされません。新しいテーブルは、親テーブルのフィールドとロジックのみを継承します。\n参照：\n[Extend a table]\n[Task table]"
    },
    {
        question: "Flow Designerのトリガータイプとしてサポートされていないものは次のうちどれですか？",
        type: "single",
        options: [
            "Outbound Email",
            "Application",
            "Record",
            "Schedule"
        ],
        correct: [0],
        explanation: "Flow Designerのトリガータイプは、Application、Record、Schedule、Topicです。Outbound Emailはトリガータイプではなく、フロー内でメールメッセージを送信するために使用できるアクションタイプです。\n参照：Flow Designer Trigger Types\nhttps://docs.servicenow.com/en-US/bundle/tokyo-applicationdevelopment/page/administer/flow-desig"
    },
    {
        question: "アプリケーションがScheduled Script Execution（Scheduled Job）を使用しない場合の例として正しくないものは次のうちどれですか？",
        type: "single",
        options: [
            "アプリケーションがテーブル上のすべてのレコードに対してリクエスターに毎週メールリマインダーを送信する必要がある",
            "アプリケーションが毎月最終日にクリーンアップスクリプトを実行する必要がある",
            "アプリケーションが毎日データベースをクエリして割り当てられていないレコードを探す必要がある",
            "アプリケーションが毎日同じ時間にクライアントサイドスクリプトを実行する必要がある"
        ],
        correct: [3],
        explanation: "アプリケーションがScheduled Script Execution（Scheduled Job）を使用しない場合の例として正しくないものは、アプリケーションが毎日同じ時間にクライアントサイドスクリプトを実行する必要がある場合です。Scheduled Script Executionは、指定されたスケジュールで実行され、サーバーまたはデータベース上でアクションを実行するサーバーサイドスクリプトです。クライアントサイドスクリプトはユーザーのブラウザ上で実行され、ServiceNowによってスケジュールすることはできません。\n他の選択肢は、アプリケーションがScheduled Script Executionを使用する場合の例です。たとえば、メールリマインダーの送信、クリーンアップスクリプトの実行、割り当てられていないレコードのデータベースクエリなどです。\n参照：Scheduled Script Execution, Client scripts"
    },
    {
        question: "Flow Designerでサポートされていないものは次のうちどれですか？",
        type: "single",
        options: [
            "フローからサブフローを呼び出す",
            "ロールバックを使用してフローをテストする",
            "Delegated Developerを使用する",
            "MetricBase Triggerからフローを実行する"
        ],
        correct: [1],
        explanation: "Flow Designerは、ServiceNowでプロセスを自動化するためのグラフィカルツールです。Flow Designerでサポートされているものは次の通りです：\nフローからサブフローを呼び出す。これは、ユーザーがサブフロー（再利用可能なロジックのユニット）をフローから呼び出すことができる機能です。複雑なフローを簡素化し、ロジックの重複を防ぐのに役立ちます。\nDelegated Developerを使用する。これは、管理者がフローやアクションの開発とメンテナンスを管理者でないユーザーに委任できる機能です。作業負荷を分散し、管理者でないユーザーが自動化を作成できるようにします。\nMetricBase Triggerからフローを実行する。これは、MetricBaseクエリ（ServiceNowで時系列データを分析する方法）に基づいてフローをトリガーできる機能です。データトレンドやパターンに基づいてアクションを自動化するのに役立ちます。\nFlow Designerでサポートされていないものは次の通りです：\nロールバックを使用してフローをテストする。これはFlow Designerの機能ではなく、Automated Test Framework（ATF）の機能です。ATFは、ServiceNowアプリケーションや機能を自動テストを作成および実行するためのツールです。ATFは、テスト実行中にフローによって行われた変更を元に戻すロールバックを使用したフローのテストをサポートします。\n参照：Flow Designer, Automated Test Framework"
    },
    {
        question: "Application Pickerの目的は何ですか？",
        type: "single",
        options: [
            "実行するアプリケーションを選択する",
            "Application Navigatorでお気に入りのアプリケーションを選択する",
            "編集するアプリケーションを選択し、Application Scopeを設定する",
            "ダウンロードしてインストールするアプリケーションを選択する"
        ],
        correct: [2],
        explanation: "https://docs.servicenow.com/bundle/tokyo-applicationdevelopment/page/build/applications/concept/c_Applicati"
    },
    {
        question: "Email Notificationで構成するものは次のうちどれですか？",
        type: "multiple",
        options: [
            "通知を受け取る人",
            "通知の内容",
            "通知を送信するタイミング",
            "通知の送信方法"
        ],
        correct: [0, 1, 2],
        explanation: "https://docs.servicenow.com/bundle/tokyo-servicenowplatform/page/administer/notification/task/t_CreateANoti"
    },
    {
        question: "以下のスクリプトフラグメントについて正しい記述はどれですか？\ng_user.hasRole('x_my_app_user');",
        type: "single",
        options: [
            "このメソッドは、現在ログインしているユーザーがx_my_app_userロールまたはadminロールを持っている場合にtrueを返します",
            "このメソッドは、現在ログインしているユーザーがx_my_app_userロールを持っている場合にのみfalseを返します",
            "g_user.hasRole()メソッドは存在しません",
            "このメソッドは、現在ログインしているユーザーがx_my_app_userロールを持っている場合にのみtrueを返します"
        ],
        correct: [0],
        explanation: "このスクリプトフラグメントについて正しい記述は、このメソッドが現在ログインしているユーザーがx_my_app_userロールまたはadminロールを持っている場合にtrueを返すというものです。g_user.hasRole()メソッドは、現在のユーザーが指定されたロールまたはロールのセットを持っているかどうかを確認するクライアントサイドメソッドです。ロールが指定されていない場合、ユーザーが任意のロールを持っていればtrueを返します。1つ以上のロールが指定されている場合、ユーザーが指定されたロールのいずれかを持っていればtrueを返します。ただし、このメソッドは、ユーザーがadminロールを持っている場合、ロールパラメータに関係なく常にtrueを返します。\nしたがって、この場合、ユーザーがx_my_app_userロールまたはadminロールのいずれかを持っていれば、メソッドはtrueを返します。\n参照：User Object Cheat Sheet, Checking user permissions"
    },
    {
        question: "Record Producersに適用されるクライアントサイドスクリプトは次のうちどれですか？",
        type: "single",
        options: [
            "UI ScriptsとUI Actions",
            "UI ScriptsとRecord Producer Scripts",
            "Client ScriptsとUI Policies",
            "Catalog Client ScriptsとCatalog UI Policies"
        ],
        correct: [3],
        explanation: "Catalog Client ScriptsとCatalog UI Policiesは、Record Producersに適用されるクライアントサイドスクリプトです。Catalog Client Scriptsを使用すると、カタログアイテムやRecord Producerフォームに機能を追加または変更できます。Catalog UI Policiesは、カタログアイテムやRecord Producerフォーム上の情報を動的に変更します。UI Scripts、UI Actions、Client Scripts、UI PoliciesはRecord Producersには適用されません。\n参照：Catalog client scripts, Catalog UI policies"
    },
    {
        question: "クライアントサイドスクリプトのデバッグ戦略として使用されないものは次のうちどれですか？",
        type: "single",
        options: [
            "g_form.addInfoMessage()",
            "Field Watcher",
            "jslog()",
            "gs.log()"
        ],
        correct: [3],
        explanation: "https://developer.servicenow.com/dev.do#!/learn/learningplans/rome/new_to_servicenow/app_store_learnv2_sc\n以下のものは、ウェブブラウザで実行され、ユーザーインターフェースを操作するクライアントサイドスクリプトのデバッグ戦略です：\ng_form.addInfoMessage()：フォームの上部に情報メッセージを表示するクライアントサイドAPIです。\nField Watcher：フォーム上の1つ以上のフィールドの現在値と以前の値を表示するデバッグツールです。\njslog()：ブラウザコンソールにメッセージを書き込むクライアントサイドAPIです。\n以下のものはクライアントサイドスクリプトではなく、ServiceNowプラットフォーム上で実行され、データベースを操作するサーバーサイドスクリプトのデバッグ戦略です：\ngs.log()：システムログにメッセージを書き込むサーバーサイドAPIです。\n参照：Client-Side Scripting APIs, Debugging Client Scripts"
    },
    {
        question: "クライアントサイドスクリプトAPIの一部であるものは次のうちどれですか？",
        type: "single",
        options: [
            "workflow.scratchpad",
            "GlideUser object (g_user)",
            "currentとprevious objects",
            "GlideSystem object (gs)"
        ],
        correct: [1],
        explanation: "https://developer.servicenow.com/dev.do#!/reference/api/rome/client\nGlideUser object (g_user)は、クライアントサイドスクリプトAPIの一部であり、現在のユーザーとユーザーの設定に関する情報を提供します。Client ScriptsやUI Policiesで使用して、ユーザーのロール、言語、タイムゾーンなどに基づいてユーザーインターフェースをカスタマイズできます。workflow.scratchpadオブジェクトは、プラットフォーム上でプロセスを自動化するために使用されるWorkflowスクリプトでのみ利用可能です。currentとpreviousオブジェクトは、Business RulesやScript Includesなどのサーバーサイドスクリプトでのみ利用可能です。GlideSystem object (gs)もサーバーサイドオブジェクトであり、ログ記録、デバッグ、日付と時刻の計算などのメソッドを提供します。\n参照：\n[GlideUser object (g_user)]\n[Workflow scripts]\n[Business Rules]\nScript Includes\n[GlideSystem object (gs)]"
    },
    {
        question: "スプレッドシートからServiceNowに新しいデータをインポートするために使用できる手順は次のうちどれですか？",
        type: "single",
        options: [
            "Select Data Source, Schedule Transform",
            "Load Data, Create Transform Map, Run Transform",
            "Define Data Source, Select Transform Map, Run Transform",
            "Select Import Set, Select Transform Map, Run Transform"
        ],
        correct: [1],
        explanation: "スプレッドシートからServiceNowに新しいデータをインポートする手順は次の通りです：Load Data、Create Transform Map、Run Transform。Load Dataは、スプレッドシートファイルをアップロードし、インポートするデータを含むImport Setテーブルを作成するプロセスです。Create Transform Mapは、Import SetテーブルのフィールドをServiceNowのターゲットテーブルのフィールドにマッピングする方法を定義するプロセスです。Run Transformは、Transform Mapを実行し、Import Setテーブルからターゲットテーブルにデータをコピーするプロセスです。\n参照：Import sets, Transform maps"
    },
];

// Xuất dữ liệu để sử dụng trong script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}

const QUESTIONS_PER_PAGE = 10;
let currentPage = 1;
let selectedAnswers = {}; // Lưu trữ trạng thái đã chọn
let submittedResults = {}; // Lưu trữ kết quả sau khi submit

// Tạo giao diện câu hỏi
function loadQuiz(page = 1) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    const start = (page - 1) * QUESTIONS_PER_PAGE;
    const end = Math.min(start + QUESTIONS_PER_PAGE, quizData.length);
    const currentQuestions = quizData.slice(start, end);

    currentQuestions.forEach((item, index) => {
        const globalIndex = start + index;
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<h3><span style="font-weight: bold;">質問 ${globalIndex + 1}.</span> ${item.question}</h3>`;

        item.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');
            const inputType = item.type === 'multiple' ? 'checkbox' : 'radio';
            const isChecked = selectedAnswers[globalIndex]?.includes(optIndex) ? 'checked' : '';
            optionDiv.innerHTML = `
                <input type="${inputType}" name="q${globalIndex}" value="${optIndex}" id="q${globalIndex}o${optIndex}" ${isChecked}>
                <label for="q${globalIndex}o${optIndex}">${String.fromCharCode(65 + optIndex)}. ${option}</label>
            `;
            questionDiv.appendChild(optionDiv);
        });

        const resultText = document.createElement('div');
        resultText.classList.add('result-text');
        resultText.id = `result-q${globalIndex}`;
        if (submittedResults[globalIndex]) {
            resultText.style.display = 'block';
            resultText.innerHTML = submittedResults[globalIndex];
        }
        questionDiv.appendChild(resultText);

        quizContainer.appendChild(questionDiv);
    });

    loadPagination();
}

// Tạo phân trang
function loadPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(quizData.length / QUESTIONS_PER_PAGE);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.classList.toggle('active', i === currentPage);
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            loadQuiz(currentPage);
            // checkAllAnswered();
        });
        paginationContainer.appendChild(pageBtn);
    }
}

// Cập nhật trạng thái đã chọn
function updateSelectedAnswers() {
    const allInputs = document.querySelectorAll('#quiz input');
    allInputs.forEach(input => {
        const questionIndex = parseInt(input.name.replace('q', ''));
        if (!selectedAnswers[questionIndex]) selectedAnswers[questionIndex] = [];
        
        if (input.checked) {
            const value = parseInt(input.value);
            if (!selectedAnswers[questionIndex].includes(value)) {
                if (quizData[questionIndex].type === 'single') {
                    selectedAnswers[questionIndex] = [value];
                } else {
                    selectedAnswers[questionIndex].push(value);
                }
            }
        } else {
            const value = parseInt(input.value);
            selectedAnswers[questionIndex] = selectedAnswers[questionIndex].filter(v => v !== value);
        }
    });
}

// Kiểm tra xem tất cả câu hỏi đã được trả lời chưa
// function checkAllAnswered() {
//     let allAnswered = true;

//     quizData.forEach((_, index) => {
//         const isAnswered = selectedAnswers[index] && selectedAnswers[index].length > 0;
//         if (!isAnswered) allAnswered = false;
//     });

//     document.getElementById('submit-btn').disabled = !allAnswered;
// }

// Xử lý submit và hiển thị kết quả
function submitQuiz() {
    let score = 0;
    const totalQuestions = quizData.length;

    quizData.forEach((item, index) => {
        const selectedValues = selectedAnswers[index] || [];
        const isCorrect = item.type === 'multiple'
            ? arraysEqual(selectedValues.sort(), item.correct.sort())
            : selectedValues.length === 1 && selectedValues[0] === item.correct[0];

        submittedResults[index] = isCorrect
            ? `<span class="correct">Correct: ${item.correct.map(i => String.fromCharCode(65 + i)).join(', ')}</span><br><div class="explanation">${item.explanation}</div>`
            : `<span class="incorrect">Incorrect</span> - Correct Answer: ${item.correct.map(i => String.fromCharCode(65 + i)).join(', ')}<br><div class="explanation">${item.explanation}</div>`;

        const resultText = document.getElementById(`result-q${index}`);
        if (resultText) {
            resultText.style.display = 'block';
            resultText.innerHTML = submittedResults[index];
        }

        if (isCorrect) score++;
    });

    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.innerHTML = `あなたのスコア: ${score}/${totalQuestions} (${(score / totalQuestions * 100).toFixed(2)}%)`;
}

// So sánh hai mảng
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, idx) => val === arr2[idx]);
}

// Khởi chạy
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz(currentPage);
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);
    document.getElementById('quiz').addEventListener('change', () => {
        updateSelectedAnswers();
        // checkAllAnswered();
    });
});
