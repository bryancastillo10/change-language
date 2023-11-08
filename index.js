// Translation Functionality
const langSec = document.querySelector('.languageSection');
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector('.title');
const textdes1 = document.querySelector('.des1');
const textdes2 = document.querySelector('.des2');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        langSec.querySelector('.active').classList.remove('active');
        button.classList.add('active');
        
        const attr = button.getAttribute('language');

        textTitle.textContent = data[attr].title;
        textdes1.textContent = data[attr].des1;
        textdes2.textContent = data[attr].des2;

    });
});

const data = {
    "english": {
        "title": "Hello everyone, Welcome to the Website! We will test changing language.",
        "des1": `Programming is the art of instructing computers to perform specific tasks by writing lines of code. 
        It's like giving a set of detailed instructions to a machine, and the machine follows them to achieve 
        a desired outcome. Coding is the language of technology, a way to communicate with computers and make 
        them do incredible things. Whether you want to build websites, create mobile apps, or analyze data, learning to 
        code is the gateway to a world of endless possibilities. 
        It's an essential skill in today's digital age, and with the right 
        guidance and resources, anyone can embark on the exciting journey of
        becoming a programmer.`,
  
        "des2": `Coding cultivates logical thinking, problem-solving skills, and a deep understanding of technology. It's accessible to everyone, with a supportive community and abundant learning resources. 
        Whether you're a novice or a seasoned developer, coding is a path to unleash creativity, 
        boost career prospects, and explore the digital world.`,
    },
    "chinese": {
        "title": `大家好，歡迎來到本網站！ 我們將測試改變語言。`,
        "des1": `程式設計是透過編寫程式碼行指示電腦執行特定任務的藝術。 這就像給機器一組詳細的指令，
        機器遵循這些指令來實現期望的結果。 編碼是技術語言，是一種與電腦通訊並讓電腦做出令人難以置信的事情的方式。
         無論您是想建立網站、創建行動應用程式還是分析數據，學習編碼都是通往無限可能世界的門戶。
         這是當今數位時代的基本技能，只要有正確的指導和資源，任何人都可以踏上成為程式設計師的令人興奮的旅程。`,
        "des2": `編碼培養邏輯思維、解決問題的能力以及對技術的深刻理解。 每個人都可以使用它，並擁有支持性社區和豐
        富的學習資源。 無論您是新手還是經驗豐富的開發人員，編碼都是釋放創造力、提升職業前景和探索數位世界的途徑。`
    },

    "japanese": {
        "title": `みなさん、こんにちは。ウェブサイトへようこそ！ 言語の変更をテストしてみます。`,
        "des1": `プログラミングは、コード行を記述することによってコンピューターに特定のタスクを実行するよう指示する技術です。 
        これは、一連の詳細な指示を機械に与え、機械がその指示に従って望ましい結果を達成するようなものです。 コーディングはテクノ
        ロジーの言語であり、コンピューターと通信し、驚くべきことを実行させる方法です。 Web サイトの構築、モバイル アプリの作成、
        データ分析のいずれを行う場合でも、コーディングを学ぶことは無限の可能性の世界への入り口です。 これは今日のデジタル時代では不可欠なスキルであり、
        適切なガイダンスとリソースがあれば、誰でもプログラマーになるというエキサイティングな旅に乗り出すことができます。`,
        "des2": `コーディングは、論理的思考、問題解決スキル、テクノロジーへの深い理解を養います。 支援的なコミュニティと
        豊富な学習リソースがあり、誰でもアクセスできます。 初心者でも経験豊富な開発者でも、コーディングは創造性を解き放ち、
        キャリアの可能性を高め、デジタル世界を探索するための手段です。`
    }

}