import van from 'vanjs-core';

const { div, h2, p, ol, li, strong, a, code, details, summary, br } = van.tags;

const Instruction = () => {
  return div(
    {
      class: 'instruction',
    },
    h2('常用漢字・非常用漢字チェッカーについて'),
    p(
      'このツールは、文化庁が公開する',
      a(
        {
          href: 'https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/kanji/',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        '常用漢字表（平成 22 年内閣告示第 2 号）'
      ),
      'に記載のある漢字、2,136文字を対象としています。なお、「々」という字は名前に使えますが、厳密には漢字ではなく記号のため含まれていません。余談ですが、これは通称ノマ点と読む（呼ぶ？）そうです。'
    ),

    details(
      summary('対象となる常用漢字(2,136字種)の一覧'),
      div(
        { class: 'p-4 font-normal' },
        '亜哀挨愛曖悪握圧扱宛嵐安案暗以衣位囲医依委威為畏胃尉異移萎偉椅彙意違維慰遺緯域育一壱逸茨芋引印因咽姻員院淫陰飲隠韻右宇羽雨唄鬱畝浦運雲永泳英映栄営詠影鋭衛易疫益液駅悦越謁閲円延沿炎怨宴媛援園煙猿遠鉛塩演縁艶汚王凹央応往押旺欧殴桜翁奥横岡屋億憶臆虞乙俺卸音恩温穏下化火加可仮何花佳価果河苛科架夏家荷華菓貨渦過嫁暇禍靴寡歌箇稼課蚊牙瓦我画芽賀雅餓介回灰会快戒改怪拐悔海界皆械絵開階塊楷解潰壊懐諧貝外劾害崖涯街慨蓋該概骸垣柿各角拡革格核殻郭覚較隔閣確獲嚇穫学岳楽額顎掛潟括活喝渇割葛滑褐轄且株釜鎌刈干刊甘汗缶完肝官冠巻看陥乾勘患貫寒喚堪換敢棺款間閑勧寛幹感漢慣管関歓監緩憾還館環簡観韓艦鑑丸含岸岩玩眼頑顔願企伎危机気岐希忌汽奇祈季紀軌既記起飢鬼帰基寄規亀喜幾揮期棋貴棄毀旗器畿輝機騎技宜偽欺義疑儀戯擬犠議菊吉喫詰却客脚逆虐九久及弓丘旧休吸朽臼求究泣急級糾宮救球給嗅窮牛去巨居拒拠挙虚許距魚御漁凶共叫狂京享供協況峡挟狭恐恭胸脅強教郷境橋矯鏡競響驚仰暁業凝曲局極玉巾斤均近金菌勤琴筋僅禁緊錦謹襟吟銀区句苦駆具惧愚空偶遇隅串屈掘窟熊繰君訓勲薫軍郡群兄刑形系径茎係型契計恵啓掲渓経蛍敬景軽傾携継詣慶憬稽憩警鶏芸迎鯨隙劇撃激桁欠穴血決結傑潔月犬件見券肩建研県倹兼剣拳軒健険圏堅検嫌献絹遣権憲賢謙鍵繭顕験懸元幻玄言弦限原現舷減源厳己戸古呼固股虎孤弧故枯個庫湖雇誇鼓錮顧五互午呉後娯悟碁語誤護口工公勾孔功巧広甲交光向后好江考行坑孝抗攻更効幸拘肯侯厚恒洪皇紅荒郊香候校耕航貢降高康控梗黄喉慌港硬絞項溝鉱構綱酵稿興衡鋼講購乞号合拷剛傲豪克告谷刻国黒穀酷獄骨駒込頃今困昆恨根婚混痕紺魂墾懇左佐沙査砂唆差詐鎖座挫才再災妻采砕宰栽彩採済祭斎細菜最裁債催塞歳載際埼在材剤財罪崎作削昨柵索策酢搾錯咲冊札刷刹拶殺察撮擦雑皿三山参桟蚕惨産傘散算酸賛残斬暫士子支止氏仕史司四市矢旨死糸至伺志私使刺始姉枝祉肢姿思指施師恣紙脂視紫詞歯嗣試詩資飼誌雌摯賜諮示字寺次耳自似児事侍治持時滋慈辞磁餌璽鹿式識軸七𠮟失室疾執湿嫉漆質実芝写社車舎者射捨赦斜煮遮謝邪蛇尺借酌釈爵若弱寂手主守朱取狩首殊珠酒腫種趣寿受呪授需儒樹収囚州舟秀周宗拾秋臭修袖終羞習週就衆集愁酬醜蹴襲十汁充住柔重従渋銃獣縦叔祝宿淑粛縮塾熟出述術俊春瞬旬巡盾准殉純循順準潤遵処初所書庶暑署緒諸女如助序叙徐除小升少召匠床抄肖尚招承昇松沼昭宵将消症祥称笑唱商渉章紹訟勝掌晶焼焦硝粧詔証象傷奨照詳彰障憧衝賞償礁鐘上丈冗条状乗城浄剰常情場畳蒸縄壌嬢錠譲醸色拭食植殖飾触嘱織職辱尻心申伸臣芯身辛侵信津神唇娠振浸真針深紳進森診寝慎新審震薪親人刃仁尽迅甚陣尋腎須図水吹垂炊帥粋衰推酔遂睡穂随髄枢崇数据杉裾寸瀬是井世正生成西声制姓征性青斉政星牲省凄逝清盛婿晴勢聖誠精製誓静請整醒税夕斥石赤昔析席脊隻惜戚責跡積績籍切折拙窃接設雪摂節説舌絶千川仙占先宣専泉浅洗染扇栓旋船戦煎羨腺詮践箋銭潜線遷選薦繊鮮全前善然禅漸膳繕狙阻祖租素措粗組疎訴塑遡礎双壮早争走奏相荘草送倉捜挿桑巣掃曹曽爽窓創喪痩葬装僧想層総遭槽踪操燥霜騒藻造像増憎蔵贈臓即束足促則息捉速側測俗族属賊続卒率存村孫尊損遜他多汰打妥唾堕惰駄太対体耐待怠胎退帯泰堆袋逮替貸隊滞態戴大代台第題滝宅択沢卓拓託濯諾濁但達脱奪棚誰丹旦担単炭胆探淡短嘆端綻誕鍛団男段断弾暖談壇地池知値恥致遅痴稚置緻竹畜逐蓄築秩窒茶着嫡中仲虫沖宙忠抽注昼柱衷酎鋳駐著貯丁弔庁兆町長挑帳張彫眺釣頂鳥朝貼超腸跳徴嘲潮澄調聴懲直勅捗沈珍朕陳賃鎮追椎墜通痛塚漬坪爪鶴低呈廷弟定底抵邸亭貞帝訂庭逓停偵堤提程艇締諦泥的笛摘滴適敵溺迭哲鉄徹撤天典店点展添転塡田伝殿電斗吐妬徒途都渡塗賭土奴努度怒刀冬灯当投豆東到逃倒凍唐島桃討透党悼盗陶塔搭棟湯痘登答等筒統稲踏糖頭謄藤闘騰同洞胴動堂童道働銅導瞳峠匿特得督徳篤毒独読栃凸突届屯豚頓貪鈍曇丼那奈内梨謎鍋南軟難二尼弐匂肉虹日入乳尿任妊忍認寧熱年念捻粘燃悩納能脳農濃把波派破覇馬婆罵拝杯背肺俳配排敗廃輩売倍梅培陪媒買賠白伯拍泊迫剝舶博薄麦漠縛爆箱箸畑肌八鉢発髪伐抜罰閥反半氾犯帆汎伴判坂阪板版班畔般販斑飯搬煩頒範繁藩晩番蛮盤比皮妃否批彼披肥非卑飛疲秘被悲扉費碑罷避尾眉美備微鼻膝肘匹必泌筆姫百氷表俵票評漂標苗秒病描猫品浜貧賓頻敏瓶不夫父付布扶府怖阜附訃負赴浮婦符富普腐敷膚賦譜侮武部舞封風伏服副幅復福腹複覆払沸仏物粉紛雰噴墳憤奮分文聞丙平兵併並柄陛閉塀幣弊蔽餅米壁璧癖別蔑片辺返変偏遍編弁便勉歩保哺捕補舗母募墓慕暮簿方包芳邦奉宝抱放法泡胞俸倣峰砲崩訪報蜂豊飽褒縫亡乏忙坊妨忘防房肪某冒剖紡望傍帽棒貿貌暴膨謀頰北木朴牧睦僕墨撲没勃堀本奔翻凡盆麻摩磨魔毎妹枚昧埋幕膜枕又末抹万満慢漫未味魅岬密蜜脈妙民眠矛務無夢霧娘名命明迷冥盟銘鳴滅免面綿麺茂模毛妄盲耗猛網目黙門紋問冶夜野弥厄役約訳薬躍闇由油喩愉諭輸癒唯友有勇幽悠郵湧猶裕遊雄誘憂融優与予余誉預幼用羊妖洋要容庸揚揺葉陽溶腰様瘍踊窯養擁謡曜抑沃浴欲翌翼拉裸羅来雷頼絡落酪辣乱卵覧濫藍欄吏利里理痢裏履璃離陸立律慄略柳流留竜粒隆硫侶旅虜慮了両良料涼猟陵量僚領寮療瞭糧力緑林厘倫輪隣臨瑠涙累塁類令礼冷励戻例鈴零霊隷齢麗暦歴列劣烈裂恋連廉練錬呂炉賂路露老労弄郎朗浪廊楼漏籠六録麓論和話賄脇惑枠湾腕'
      )
    ),
    p(
      '上のエディタにテキストを入力すると、常用漢字は緑、非常用漢字は赤でハイライトされます。'
    ),
    p(
      'また、文脈によって正誤が変わる可能性のある語は、「表記ゆれ設定」に追加することで、波線付きの黄色にハイライトされます。デフォルトでは、常用漢字表の注釈に沿って、制作者が独断でピックアップした語が設定されています。'
    ),
    p(
      '「表記ゆれ設定」は、１行につき１語を含めることができ、',
      code('#'),
      'で始まる行と空白行は無視されます。'
    ),
    p(
      'また、本ページではGoogleアナリティクスでページビュー数と滞在時間を計測しています。ただ、エディタに入力した内容は一切関知しません。ハイライトの処理はブラウザに読み込んだスクリプトで行っており、サーバーにデータが送信されることもありません。'
    ),
    p(
      'タブを閉じたり、再読み込みしたりすると、入力したデータはすべて消えます。'
    ),
    h2('免責事項'),
    p(
      '常用漢字・非常用漢字チェッカー（以下、「本ツール」）をご利用いただく前に、以下の免責事項を必ずお読みください。本ツールを使用することにより、ユーザーは以下の条件に同意したものとみなされます。'
    ),
    ol(
      li(
        p(
          strong('情報の正確性'),
          '：',
          br(),
          '本ツールは、常用漢字と非常用漢字を判別する目的で提供されていますが、完全な正確性を保証するものではありません。最新の公式情報と異なる場合がある可能性があります。'
        )
      ),
      li(
        p(
          strong('利用目的'),
          '：',
          br(),
          '本ツールは、教育および一般的な参考目的のみを意図しています。公式な文書作成や法的な判断には、必ず最新の公式情報源をご確認ください。'
        )
      ),
      li(
        p(
          strong('責任の制限'),
          '：',
          br(),
          '本ツールの使用によって生じたいかなる損害（直接的、間接的、偶発的、結果的損害を含む）に対しても、開発者は責任を負いません。'
        )
      ),
      li(
        p(
          strong('データの取り扱い'),
          '：',
          br(),
          '本ツールは、ユーザーが入力したデータをサーバーに送信せず、ブラウザ上でのみ処理します。ただし、インターネット上でのデータ転送の完全な安全性は保証できません。'
        )
      ),
      li(
        p(
          strong('第三者の権利'),
          '：',
          br(),
          'ユーザーは、著作権やその他の第三者の権利を侵害しない方法で本ツールを使用する責任があります。'
        )
      ),
      li(
        p(
          strong('更新と変更'),
          '：',
          br(),
          '本ツールの機能および本免責事項は、予告なく変更または中止される場合があります。定期的に最新情報をご確認ください。'
        )
      ),
      li(
        p(
          strong('準拠法'),
          '：',
          br(),
          '本免責事項の解釈および適用は、日本の法律に準拠するものとします。'
        )
      )
    ),
    p(
      '本ツールを使用することにより、ユーザーは上記の免責事項を理解し、同意したものとみなされます。ご不明な点がある場合は、',
      a(
        {
          href: 'https://toach.biz/contact/',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        'こちらのフォーム'
      ),
      'からお問い合わせください。'
    ),
    p('最終更新日：2024年10月4日')
  );
};

export default Instruction;
