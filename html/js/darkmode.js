// チェックボックスの取得
const btn = document.querySelector("#btn-mode");

// 初期テキストの取得
var toptext = document.getElementById("toptext");
var toptext_normal = toptext.innerHTML;
var dark1text = document.getElementById("dark1");
var dark1text_normal = dark1text.innerHTML;
var dark2text = document.getElementById("dark2");
var dark2text_normal = dark2text.innerHTML;
var dark3text = document.getElementById("dark3");
var dark3text_normal = dark3text.innerHTML;

// チェックした時の挙動
btn.addEventListener("change", () => {
  if (btn.checked == true) {
    // ダークモード
    document.body.classList.add("dark-theme");

    // main-imageの変更
    var mainimage = document.getElementById( "main_image_inner" );
    mainimage.style.backgroundImage = "url('images/main-image-dark.png')";

    var toptext = document.getElementById("toptext");
    toptext.innerHTML="　悠久の刻を超え、今再び邂逅する闇の使徒よ。与えられた資格を示し、その力を以って遍く領域を喰らいつくさん。<br>彼方より来し災禍は、空蝉の安寧を尽く蹂躙する。世界の様相は改変され、漆黒の濃霧が数多を侵食するだろう。求道者たちは仄暗き螺旋の塔を昇り、ついに天光満つる大伽藍へと辿り着く。<br>三方より集いし黒衣の導師は、怨嗟断絶の唄を謳う。輝く御名の元、地を這う穢れし魂よ、汝が災いを灰塵と化せと。<br>永久連鎖の終焉なき苦悩の果て、救済を告げる鐘の音が響く。聖女は祈る、古の叡智が黎明へと続く道導とならんことを。"

    var dark1 = document.getElementById("dark1");
		dark1.innerHTML="<h4>平賀 正樹<br>会長講話</h4><p>「さぁ、物語を始めようか」<br><ruby><rb>混沌</rb><rt>ケイオス</rt></ruby>渦巻く障がい者雇用という名の<ruby><rb>大迷宮</rb><rt>グレイト=ラビリンス</rt></ruby>。雇用率、それは我々にとっての祝福か、それとも呪いか。障がい特性の<ruby><rb>深淵</rb><rt>アヴィス</rt></ruby>の果て、そして君達は辿り着くだろう、<ruby><rb>合理的配慮のその先</rb><rt>エデン</rt></ruby>へ。今、壮大な物語の幕が上がるー！！<br></p>";

    var dark2 = document.getElementById("dark2");
		dark2.innerHTML="<h4>時田 椋子<br>地域医療としてのアディクション治療の実際</h4><p>入院ではない依存症の治療ーー万人が諦めたその先に光はあるのか。仏、バザーリアが追い求めた理想とは…？地域医療としての役割、そしてその闇とは…。闇とともに立ち上がる治療者と経営者、それでも縋りたい患者たちとの狭間で揺れ動く心理職としての存在に正解はあるのか……。<br>大学院では習えない？！理想と現実、司法と医療のスペクタクルデイナイトケア！！いま、あなたの倫理が試される…！！<br></p>";

    var dark3 = document.getElementById("dark3");
		dark3.innerHTML="<h4>坂本 次郎<br>これから中堅になられる皆様へ</h4><p>最近、指がカサついてレジ袋が開かない。もう大人だから自己申告するが、この1月に誕生日を迎え、三十路、すなわち大宇宙へと続くミルキーウェイに足をかけることとなった。リモートワークに運動不足。「ポン・デ・リングは真ん中がカロリーOFFだからダイエット食品」などと豪語していた二十代の過ちが今、腹部の暗黒物質を膨張させている(ドーナツ化現象)。<br>こうやって中堅にさしかかり、体系的に学ぶ機会が確保しづらくなっている皆様へ。めまぐるしく状況が変化する「子ども虐待対応」について、必要な基本理解と対応をここに改めて総論したい。<br></p>";

  } else {
    // ライトモード
    document.body.classList.remove("dark-theme");
    
    // main-imageの変更
    var mainimage = document.getElementById( "main_image_inner" );
    mainimage.style.backgroundImage = "url('images/main-image.png')";

    var toptext = document.getElementById("toptext");
    toptext.innerHTML=toptext_normal;
    var dark1 = document.getElementById("dark1");
    dark1.innerHTML=dark1text_normal;
    var dark2 = document.getElementById("dark2");
    dark2.innerHTML=dark2text_normal;
    var dark3 = document.getElementById("dark3");
    dark3.innerHTML=dark3text_normal;

  }
});