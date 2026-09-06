const copy = {
  en: { nav: ['Work', 'Profile', 'Contact'], status: 'Available for work', heroEyebrow: 'BACKEND / PRODUCT ENGINEER', heroTitle: ['Technical depth,', 'thoughtful products.'], lede: 'I care about the systems underneath and the experience on top — turning complex problems into clear, useful products.', view: 'View work', chat: 'Get in touch', scroll: 'Scroll to explore', workEyebrow: 'SIDE PROJECTS', workTitle: ['Small ideas,', 'in progress.'], workNote: ['Side projects.', 'Currently in progress.'], p1Title: 'Urban Lens', p1Desc: 'A location-based urban analysis app for understanding everyday access and nearby nature.', p2Title: 'ClipBroad', p2Desc: 'An encrypted local-network app for moving text, images, and files between iPhone, iPad, and Windows — without accounts or cloud relay.', p3Title: 'Personal archive', p3Desc: 'A private, local-first archive for keeping meaningful moments close.', aboutEyebrow: 'PROFILE', aboutTitle: ['Backend / Product', 'Engineer.'], aboutDesc: 'Software Developer building and improving an electricity retail customer information system across backend, frontend, AWS infrastructure, testing, and production operations.<br /><br />Currently based in Fukuoka, Japan.', meta: ['Python / AWS', 'JLPT N1', 'Fukuoka, Japan'], contactEyebrow: 'CONTACT', contactTitle: ['Let’s build', 'something reliable.'] },
  ja: { nav: ['Work', 'Profile', 'Contact'], status: 'ご依頼受付中', heroEyebrow: 'バックエンド / プロダクトエンジニア', heroTitle: ['確かな技術で、', '心地よいプロダクトを。'], lede: 'システムの確かさと使う人の体験。その両方を考え、複雑な課題を明快で役に立つプロダクトに変えていきます。', view: '実績を見る', chat: '連絡する', scroll: 'スクロールして探索', workEyebrow: '個人プロジェクト', workTitle: ['小さなアイデアを、', '開発中。'], workNote: ['個人で開発しているプロジェクト。', '現在、少しずつ制作中です。'], p1Title: 'Urban Lens', p1Desc: '日常の便利さと身近な自然を読み解く、位置情報ベースの都市分析アプリ。', p2Title: 'ClipBroad', p2Desc: 'アカウントやクラウド中継を使わず、iPhone・iPad・Windows間でテキスト、画像、ファイルを暗号化転送するローカルネットワークアプリ。', p3Title: '個人アーカイブ', p3Desc: '大切な記録を残し、振り返るためのプライベートなローカルファーストアーカイブ。', aboutEyebrow: 'プロフィール', aboutTitle: ['バックエンド / プロダクト', 'エンジニア。'], aboutDesc: 'ソフトウェア開発者として、電力小売顧客情報システムのバックエンド、フロントエンド、AWS基盤、テスト、運用改善に携わっています。<br /><br />現在は福岡を拠点にしています。', meta: ['Python / AWS', 'JLPT N1', '福岡 / 日本'], contactEyebrow: 'お問い合わせ', contactTitle: ['信頼できるものを、', '一緒につくる。'] },
  zh: { nav: ['作品', '简介', '联系'], status: '可接受工作机会', heroEyebrow: '后端 / 产品工程师', heroTitle: ['技术深度，', '有思考的产品。'], lede: '我关注系统底层的可靠性，也关注用户使用时的体验，把复杂问题做成清晰、好用的产品。', view: '查看作品', chat: '联系我', scroll: '向下探索', workEyebrow: '个人项目', workTitle: ['一些想法，', '正在进行。'], workNote: ['个人开发项目。', '目前正在逐步完善。'], p1Title: 'Urban Lens', p1Desc: '一个用来理解日常便利性与附近自然环境的城市位置分析应用。', p2Title: 'ClipBroad', p2Desc: '一个无需账号或云端中继、在 iPhone、iPad 与 Windows 之间加密传输文字、图片和文件的局域网应用。', p3Title: '个人记录', p3Desc: '一个用于保存和回看重要片段的私人本地优先记录空间。', aboutEyebrow: '个人简介', aboutTitle: ['后端 / 产品', '工程师。'], aboutDesc: '作为软件开发者，参与电力零售客户信息系统的后端、前端、AWS 基础设施、测试与生产运维。<br /><br />目前在日本福冈。', meta: ['Python / AWS', 'JLPT N1', '福冈 / 日本'], contactEyebrow: '联系', contactTitle: ['一起构建', '可靠的产品。'] }
};
const timelineCopy = {
  en: [['APR 2026 — PRESENT', 'Electricity retail customer information system', 'System delivery, billing workflows, integrations, migration, and production improvement.'], ['NOV 2025 — FEB 2026', 'Residential energy management application', 'IoT integration testing and a reviewed BFF / microservices prototype.'], ['APR 2025 — NOV 2025', 'EV charging and energy management platform', 'OCPP 2.0.1, MQTT recovery, reliability, testing, and launch support.'], ['MAR 2025', 'Kyoto University — Graduate School of Agriculture', 'Master of Agricultural Science · English-taught program and thesis.']],
  ja: [['2026年4月 — 現在', '電力小売顧客情報システム', 'システム開発、請求ワークフロー、連携、移行、運用改善。'], ['2025年11月 — 2026年2月', '住宅エネルギーマネジメントアプリ', 'IoT連携テストとBFF / マイクロサービス構成のプロトタイプ。'], ['2025年4月 — 11月', 'EV充電・エネルギーマネジメント基盤', 'OCPP 2.0.1、MQTT復旧、信頼性、テスト、ローンチ支援。'], ['2025年', '京都大学大学院 農学研究科', '農学修士・英語プログラムおよび修士論文。']],
  zh: [['2026年4月 — 至今', '电力零售客户信息系统', '系统交付、计费流程、服务集成、数据迁移与生产改进。'], ['2025年11月 — 2026年2月', '住宅能源管理应用', 'IoT 集成测试与 BFF / 微服务架构原型。'], ['2025年4月 — 11月', 'EV 充电与能源管理平台', 'OCPP 2.0.1、MQTT 自动恢复、可靠性、测试与上线支持。'], ['2025年', '京都大学大学院 农学研究科', '农学硕士・英语授课项目与硕士论文。']]
};
const setHTML = (selector, value) => { const el = document.querySelector(selector); if (el) el.innerHTML = value; };
function setLanguage(lang) {
  const t = copy[lang]; document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.querySelectorAll('.lang-switcher button[data-lang]').forEach((button) => button.classList.toggle('active', button.dataset.lang === lang));
  document.querySelectorAll('nav a').forEach((el, i) => { el.textContent = t.nav[i]; });
  setHTML('.status', `<span></span> ${t.status}`); setHTML('.hero-copy .eyebrow', `<span class="eyebrow-line"></span> ${t.heroEyebrow}`); setHTML('.hero h1', `${t.heroTitle[0]}<br /><em>${t.heroTitle[1]}</em>`); setHTML('.lede', t.lede); setHTML('.button-primary', `${t.view} <span>↘</span>`); setHTML('.text-link', `${t.chat} <span>→</span>`); setHTML('.scroll-hint', `<span></span> ${t.scroll}`); setHTML('.work-section .eyebrow', `<span class="eyebrow-line"></span> ${t.workEyebrow}`); setHTML('.section-heading h2', `${t.workTitle[0]}<br /><em>${t.workTitle[1]}</em>`); setHTML('.section-note', `${t.workNote[0]}<br />${t.workNote[1]}`);
  setHTML('.project-large h3', t.p1Title); setHTML('.project-large p', t.p1Desc); setHTML('.project:nth-child(2) h3', t.p2Title); setHTML('.project:nth-child(2) p', t.p2Desc); setHTML('.project:nth-child(3) h3', t.p3Title); setHTML('.project:nth-child(3) p', t.p3Desc); setHTML('.about-label .eyebrow', `<span class="eyebrow-line"></span> ${t.aboutEyebrow}`); setHTML('.about-copy h2', `${t.aboutTitle[0]}<br /><em>${t.aboutTitle[1]}</em>`); setHTML('.about-copy>p', t.aboutDesc); document.querySelectorAll('.profile-meta span').forEach((el, i) => { el.textContent = t.meta[i]; }); document.querySelectorAll('.timeline-item').forEach((item, i) => { item.querySelector('.timeline-date').textContent = timelineCopy[lang][i][0]; item.querySelector('strong').textContent = timelineCopy[lang][i][1]; item.querySelector('p').textContent = timelineCopy[lang][i][2]; }); localStorage.setItem('portfolio-lang', lang);
}
document.querySelectorAll('.lang-switcher button[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem('portfolio-lang') || 'en');
document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', (event) => { const target = document.querySelector(link.getAttribute('href')); if (!target) return; event.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }));

// Keep the positioning factual and job-search friendly across all language modes.
const profileCopy = {
  en: {
    heroTitle: ['Backend systems,', 'thoughtful products.'],
    about: 'Backend / Product Engineer with 1.5 years of hands-on experience building and improving production software. I work across Python backends, AWS infrastructure, data, React frontends, automated testing, and operations.<br /><br />In my current work, I turn complex business rules and loosely documented workflows into reliable systems that people can use with confidence. I care about the connection between engineering quality and product experience: understanding the problem, making the flow clear, and delivering software that works in practice.',
    meta: ['Python / AWS', 'JLPT N1', 'AWS SAA', 'AWS CLF', 'EN / JA / ZH']
  },
  ja: {
    heroTitle: ['バックエンドシステムと、', '使いやすいプロダクト。'],
    about: 'バックエンド / プロダクトエンジニアとして、1.5年にわたり本番ソフトウェアの開発と改善に携わっています。Python、AWS基盤、データ、Reactフロントエンド、自動テスト、運用まで幅広く担当しています。<br /><br />現在の仕事では、複雑な業務ルールや文書化が不十分なワークフローを整理し、安心して使えるシステムに変えています。技術品質とプロダクト体験のつながりを大切にしています。',
    meta: ['Python / AWS', 'JLPT N1', 'AWS SAA', 'AWS CLF', 'EN / JA / ZH']
  },
  zh: {
    heroTitle: ['后端系统，', '好用的产品。'],
    about: '我是一名后端 / 产品工程师，有 1.5 年参与生产软件开发与改进的经验，工作范围包括 Python 后端、AWS 基础设施、数据、React 前端、自动化测试和生产运维。<br /><br />目前的工作中，我会梳理复杂的业务规则和文档不完整的流程，把它们转化为用户可以放心使用的可靠系统。我重视技术质量与产品体验之间的联系：理解问题、理清流程，并把真正有效的软件交付出来。',
    meta: ['Python / AWS', 'JLPT N1', 'AWS SAA', 'AWS CLF', 'EN / JA / ZH']
  }
};

function applyProfileCopy() {
  const lang = localStorage.getItem('portfolio-lang') || 'en';
  const t = profileCopy[lang];
  setHTML('.hero h1', `${t.heroTitle[0]}<br /><em>${t.heroTitle[1]}</em>`);
  setHTML('.about-copy>p', t.about);
  const meta = document.querySelector('.profile-meta');
  if (meta) meta.innerHTML = t.meta.map((item) => `<span>${item}</span>`).join('');
}

document.querySelectorAll('.lang-switcher button[data-lang]').forEach((button) => button.addEventListener('click', applyProfileCopy));
applyProfileCopy();

const stackCopy = [
  ['BACKEND / DATA', 'Python · FastAPI · Pydantic · SQLAlchemy · PostgreSQL · DynamoDB · REST · OpenAPI'],
  ['CLOUD / DELIVERY', 'AWS Lambda · API Gateway · SQS · EventBridge · Cognito · S3 · ECS · IoT Core · CDK · CI/CD · CloudWatch'],
  ['TESTING / QUALITY', 'pytest · Vitest · Playwright · TDD · Integration · Contract · Smoke · E2E'],
  ['FRONTEND / UI / UX', 'React · TypeScript · Material UI · UI/UX · Design thinking · Figma · Stitch']
];
const stackList = document.querySelector('.stack-list');
if (stackList) stackList.innerHTML = stackCopy.map(([label, items]) => `<div class="stack-row"><span>${label}</span><span>${items}</span></div>`).join('');

const leadTimelineCopy = {
  en: 'Independently developed and supported the system across billing workflows, integrations, data migration, testing, and production improvement.',
  ja: '独立してシステム開発と運用改善を担当し、請求ワークフロー、連携、データ移行、テストまで幅広く携わっています。',
  zh: '独立负责系统开发与运用改进，覆盖计费流程、服务集成、数据迁移和测试等工作。'
};
function applyLeadTimelineCopy() {
  const lang = localStorage.getItem('portfolio-lang') || 'en';
  const firstTimelineItem = document.querySelector('.timeline-item p');
  if (firstTimelineItem) firstTimelineItem.textContent = leadTimelineCopy[lang];
}
document.querySelectorAll('.lang-switcher button[data-lang]').forEach((button) => button.addEventListener('click', applyLeadTimelineCopy));
applyLeadTimelineCopy();

const timelineBadges = {
  en: [['Independent development', 'Operations & improvement'], ['Refactoring design'], ['Maintenance & operations', 'CSMS implementation'], []],
  ja: [['独立開発', '運用改善'], ['リファクタリング設計'], ['保守運用', 'CSMS実装'], []],
  zh: [['独立开发', '运用改进'], ['重构设计'], ['维护运用', 'CSMS 实现'], []]
};
function applyTimelineBadges() {
  const lang = localStorage.getItem('portfolio-lang') || 'en';
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.querySelector('.timeline-badges')?.remove();
    const badges = timelineBadges[lang][index] || [];
    const title = item.querySelector('strong');
    if (!title || badges.length === 0) return;
    const wrapper = document.createElement('span');
    wrapper.className = 'timeline-badges';
    wrapper.innerHTML = badges.map((badge) => `<span>${badge}</span>`).join('');
    title.insertAdjacentElement('afterend', wrapper);
  });
}
document.querySelectorAll('.lang-switcher button[data-lang]').forEach((button) => button.addEventListener('click', applyTimelineBadges));
applyTimelineBadges();

const statusCopy = { en: 'Available for work', ja: '仕事を探しています', zh: '正在求职' };
function applyStatusCopy() {
  const lang = localStorage.getItem('portfolio-lang') || 'en';
  setHTML('.status', `<span></span> ${statusCopy[lang]}`);
}
document.querySelectorAll('.lang-switcher button[data-lang]').forEach((button) => button.addEventListener('click', applyStatusCopy));
applyStatusCopy();

function alignTimelineBadges() {
  document.querySelectorAll('.timeline-item').forEach((item) => {
    const title = item.querySelector('strong');
    if (!title) return;
    let row = item.querySelector('.timeline-title-row');
    if (!row) {
      row = document.createElement('div');
      row.className = 'timeline-title-row';
      title.parentNode.insertBefore(row, title);
      row.appendChild(title);
    }
    const badges = item.querySelector('.timeline-badges');
    if (badges) row.appendChild(badges);
  });
}
document.querySelectorAll('.lang-switcher button[data-lang]').forEach((button) => button.addEventListener('click', alignTimelineBadges));
alignTimelineBadges();

const clipbroadModalCopy = {
  en: {
    eyebrow: 'PRODUCT STORY',
    lede: 'An encrypted local-network app for moving text, images, and files between devices without accounts or cloud relay.',
    storyTitle: 'A quiet handoff between screens.',
    story: 'ClipBroad keeps the transfer simple: choose a device, pair once, and send text, images, or files directly over the local network. The product is designed around privacy without making the basic action feel technical.',
    builtWith: 'Built with',
    close: 'Close',
    captions: ['Pairing on iPad', 'Pairing on iPhone', 'Sending on iPad'],
    alts: ['ClipBroad iPad pairing screen', 'ClipBroad iPhone pairing screen', 'ClipBroad iPad Send screen']
  },
  ja: {
    eyebrow: 'プロダクトストーリー',
    lede: 'アカウントやクラウド中継を使わず、デバイス間でテキスト・画像・ファイルを暗号化転送するローカルネットワークアプリ。',
    storyTitle: '画面と画面の間を、静かにつなぐ。',
    story: 'ClipBroadは、デバイスを選び、一度ペアリングして、ローカルネットワーク経由で送るというシンプルな流れを大切にしています。プライバシーを守りながら、基本操作が技術的になりすぎないように設計しています。',
    builtWith: 'Built with',
    close: '閉じる',
    captions: ['iPadでのペアリング', 'iPhoneでのペアリング', 'iPadでの送信'],
    alts: ['ClipBroad iPadのペアリング画面', 'ClipBroad iPhoneのペアリング画面', 'ClipBroad iPadの送信画面']
  },
  zh: {
    eyebrow: '产品故事',
    lede: '一个无需账号或云端中继、在设备之间加密传输文字、图片和文件的局域网应用。',
    storyTitle: '让屏幕之间的传递保持安静。',
    story: 'ClipBroad 把流程保持得很简单：选择设备、完成一次配对，然后直接通过局域网发送文字、图片或文件。在保护隐私的同时，也不让基础操作显得过于技术化。',
    builtWith: '技术栈',
    close: '关闭',
    captions: ['iPad 配对页面', 'iPhone 配对页面', 'iPad 发送页面'],
    alts: ['ClipBroad iPad 配对页面', 'ClipBroad iPhone 配对页面', 'ClipBroad iPad 发送页面']
  }
};

const clipbroadModal = document.querySelector('#clipbroad-modal');
const clipbroadDetailButton = document.querySelector('.project-detail-link');
const galleryImage = document.querySelector('#clipbroad-gallery-image');
const galleryCaption = document.querySelector('#clipbroad-gallery-caption');
const galleryThumbs = [...document.querySelectorAll('.gallery-thumb')];

function currentLanguage() {
  return localStorage.getItem('portfolio-lang') || 'en';
}

function applyClipBroadModalCopy() {
  const lang = currentLanguage();
  const t = clipbroadModalCopy[lang];
  if (!t || !clipbroadModal) return;
  setHTML('.project-modal-header .eyebrow', `<span class="eyebrow-line"></span> ${t.eyebrow}`);
  setHTML('.modal-lede', t.lede);
  setHTML('.modal-kicker', t.eyebrow);
  setHTML('#clipbroad-modal-heading', t.storyTitle);
  setHTML('#clipbroad-modal-copy', t.story);
  setHTML('.modal-stack span', t.builtWith);
  const closeButton = clipbroadModal.querySelector('.modal-close');
  if (closeButton) closeButton.setAttribute('aria-label', t.close);
  galleryThumbs.forEach((thumb, index) => {
    thumb.setAttribute('aria-label', t.captions[index]);
    thumb.dataset.galleryCaption = t.captions[index];
  });
  const activeIndex = Math.max(0, galleryThumbs.findIndex((thumb) => thumb.classList.contains('active')));
  if (galleryImage) galleryImage.alt = t.alts[activeIndex];
  if (galleryCaption) galleryCaption.textContent = t.captions[activeIndex];
}

function openClipBroadModal() {
  applyClipBroadModalCopy();
  if (clipbroadModal?.showModal) clipbroadModal.showModal();
}

function closeClipBroadModal() {
  if (clipbroadModal?.open) clipbroadModal.close();
}

clipbroadDetailButton?.addEventListener('click', openClipBroadModal);
clipbroadModal?.querySelector('.modal-close')?.addEventListener('click', closeClipBroadModal);
clipbroadModal?.addEventListener('click', (event) => {
  if (event.target === clipbroadModal) closeClipBroadModal();
});
galleryThumbs.forEach((thumb) => thumb.addEventListener('click', () => {
  galleryThumbs.forEach((item) => item.classList.remove('active'));
  thumb.classList.add('active');
  const index = galleryThumbs.indexOf(thumb);
  const t = clipbroadModalCopy[currentLanguage()];
  if (galleryImage) {
    galleryImage.src = thumb.dataset.galleryImage;
    galleryImage.alt = t.alts[index];
  }
  if (galleryCaption) galleryCaption.textContent = t.captions[index];
}));
document.querySelectorAll('.lang-switcher button[data-lang]').forEach((button) => button.addEventListener('click', applyClipBroadModalCopy));
applyClipBroadModalCopy();
