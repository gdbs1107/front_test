const h = React.createElement;

const NAV_ITEMS = [
  { id: "intro", label: "HOME" },
  { id: "company", label: "COMPANY" },
  { id: "business", label: "BUSINESS" },
  { id: "contactus", label: "CONTACT" },
  { id: "foot", label: "FOOT" },
];

const INTRO_SLIDES = [
  {
    id: "intro-1",
    kicker: "GLOBAL AIR SOLUTION",
    title: ["깨끗한 공기가 흐르는 곳,", "우리의 기술이 있습니다."],
    description:
      "정밀 공조와 클린룸 시스템을 설계·시공·운영까지 연결하는 원스톱 엔지니어링 체계",
    visualClass: "visual-a",
  },
  {
    id: "intro-2",
    kicker: "40 YEARS JOURNEY",
    title: ["공기 청정 분야의 축적된 경험", "청정한 미래를 약속합니다."],
    description:
      "산업 현장 데이터 기반 설계와 고도화된 제어 로직으로 안정적인 생산 환경을 구현",
    visualClass: "visual-b",
  },
  {
    id: "intro-3",
    kicker: "ONE-STOP SOURCE",
    title: ["Non-Stop Development", "현장에 맞춘 맞춤형 시스템"],
    description:
      "Clean Filter / Clean Energy / Clean Room 라인업으로 전 공정을 유기적으로 연결",
    visualClass: "visual-c",
  },
];

const ESG_ITEMS = [
  {
    key: "env",
    en: "Environment",
    ko: "환경경영",
    text: "고효율 장비와 저탄소 운영 전략으로 지속 가능한 생산 환경을 구축합니다.",
    visualClass: "esg-a",
  },
  {
    key: "social",
    en: "Social",
    ko: "상생경영",
    text: "협력사와 고객사, 현장 운영자 중심 프로세스로 장기적 성과를 만듭니다.",
    visualClass: "esg-b",
  },
  {
    key: "gov",
    en: "Governance",
    ko: "윤리경영",
    text: "투명한 품질 검증과 데이터 기반 의사결정으로 신뢰 가능한 운영 체계를 유지합니다.",
    visualClass: "esg-c",
  },
];

const BUSINESS_ITEMS = [
  {
    key: "filter",
    title: "Clean Filter",
    subtitle: "ECO 고효율 주름 필터백",
    desc: "분진 포집 성능과 압력 손실의 균형을 맞춘 고효율 필터 솔루션",
    visualClass: "biz-a",
  },
  {
    key: "energy",
    title: "Clean Energy",
    subtitle: "Zero Energy Control",
    desc: "공조 에너지 비용을 줄이는 실시간 모니터링 및 최적 제어 시스템",
    visualClass: "biz-b",
  },
  {
    key: "room",
    title: "Clean Room",
    subtitle: "Industrial / Bio Cleanroom",
    desc: "산업 및 바이오 라인에 맞춘 청정도 제어형 클린룸 설계·시공",
    visualClass: "biz-c",
  },
];

const CONTACT_META = [
  { key: "본사", value: "충남 당진시 송악읍 부곡공단4길 28-90" },
  { key: "TEL", value: "041-358-0020" },
  { key: "R&D", value: "경기도 시흥시 시화호수로 322" },
];

const FOOT_COLUMNS = [
  {
    title: "회사소개",
    items: ["CEO 인사말", "연혁", "CI/BI 소개", "오시는길"],
  },
  {
    title: "사업소개",
    items: ["Clean Filter", "Clean Energy", "Clean Room"],
  },
  {
    title: "고객센터",
    items: ["자료실", "기술문의", "A/S 문의"],
  },
];

function classNames() {
  return Array.from(arguments)
    .filter(Boolean)
    .join(" ");
}

function Header(props) {
  const { activeSection } = props;

  return h(
    "header",
    { className: classNames("header-top", activeSection === "intro" && "on-intro") },
    h(
      "div",
      { className: "inner header-inner" },
      h(
        "a",
        { href: "#intro", className: "logo" },
        h("span", { className: "logo-dot", "aria-hidden": "true" }, "D"),
        h(
          "span",
          { className: "logo-copy" },
          h("strong", null, "DAEHAN PNC"),
          h("small", null, "Global Leader In Air Solution")
        )
      ),
      h(
        "nav",
        { className: "top-nav", "aria-label": "Main" },
        NAV_ITEMS.slice(0, 4).map((item) =>
          h(
            "a",
            {
              key: item.id,
              href: `#${item.id}`,
              className: classNames("top-link", activeSection === item.id && "active"),
            },
            item.label
          )
        )
      ),
      h("a", { href: "#contactus", className: "header-cta" }, "문의하기")
    )
  );
}

function RightFixed(props) {
  const { activeSection } = props;

  return h(
    "aside",
    { className: "right-fixed", "aria-label": "Section" },
    NAV_ITEMS.slice(0, 4).map((item) =>
      h(
        "a",
        {
          key: item.id,
          href: `#${item.id}`,
          className: classNames("rf-link", activeSection === item.id && "active"),
        },
        h("span", { className: "rf-text" }, item.label),
        h("span", { className: "rf-dot", "aria-hidden": "true" })
      )
    )
  );
}

function IntroSection(props) {
  const { slideIndex, onSlideSelect } = props;
  const slide = INTRO_SLIDES[slideIndex];

  return h(
    "section",
    { id: "intro", className: "section visual-intro section-anchor" },
    h(
      "div",
      { className: "main-visual" },
      INTRO_SLIDES.map((item, index) =>
        h("article", {
          key: item.id,
          className: classNames("visual-layer", item.visualClass, index === slideIndex && "active"),
          "aria-hidden": index !== slideIndex,
        })
      ),
      h("div", { className: "visual-dim", "aria-hidden": "true" }),
      h(
        "div",
        { className: "inner visual-copy" },
        h("p", { className: "kicker reveal" }, slide.kicker),
        h(
          "h1",
          { className: "reveal" },
          slide.title[0],
          h("br"),
          slide.title[1]
        ),
        h("p", { className: "visual-desc reveal" }, slide.description),
        h(
          "div",
          { className: "visual-actions reveal" },
          h("a", { href: "#business", className: "btn btn-solid" }, "사업영역 보기"),
          h("a", { href: "#contactus", className: "btn btn-line" }, "상담 문의")
        )
      )
    ),
    h(
      "div",
      { className: "visual-dots" },
      INTRO_SLIDES.map((item, index) =>
        h("button", {
          key: item.id,
          type: "button",
          className: classNames("visual-dot", index === slideIndex && "active"),
          onClick: () => onSlideSelect(index),
          "aria-label": `${index + 1}번 슬라이드`,
        })
      )
    )
  );
}

function CompanySection() {
  return h(
    "section",
    { id: "company", className: "section company-main section-anchor" },
    h(
      "div",
      { className: "inner section-shell" },
      h(
        "header",
        { className: "section-title reveal" },
        h("span", null, "COMPANY")
      ),
      h(
        "div",
        { className: "section-lead reveal" },
        h(
          "h2",
          null,
          h("b", { className: "txt-blue" }, "ESG 경영"),
          "으로",
          h("br"),
          "더 나은 산업 환경을 만듭니다"
        ),
        h(
          "p",
          null,
          "대한피엔씨는 최고의 기술과 품질을 기반으로 환경 관련 분야에서 글로벌 리더가 되기 위해 설계, 제조, 시공, 운영관리 전 영역을 고도화하고 있습니다."
        )
      ),
      h(
        "div",
        { className: "esg-grid" },
        ESG_ITEMS.map((item) =>
          h(
            "article",
            { key: item.key, className: classNames("esg-card reveal", item.visualClass) },
            h("p", { className: "esg-en" }, item.en),
            h("h3", null, item.ko),
            h("p", { className: "esg-copy" }, item.text)
          )
        )
      )
    )
  );
}

function BusinessSection() {
  return h(
    "section",
    { id: "business", className: "section business-main section-anchor" },
    h(
      "div",
      { className: "inner section-shell" },
      h(
        "header",
        { className: "section-title reveal" },
        h("span", null, "BUSINESS")
      ),
      h(
        "div",
        { className: "section-lead reveal" },
        h(
          "h2",
          null,
          h("b", { className: "txt-blue" }, "깨끗한 환경"),
          "과 ",
          h("b", { className: "txt-orange" }, "고품질 생산"),
          "의 균형"
        ),
        h(
          "p",
          null,
          "Clean Filter System / Clean Room System / Clean Energy System의 제조, 설계, 시공 및 사후관리까지 ONE-STOP SOURCE를 제공합니다."
        )
      ),
      h(
        "div",
        { className: "business-grid" },
        BUSINESS_ITEMS.map((item) =>
          h(
            "article",
            { key: item.key, className: "biz-card reveal" },
            h("div", { className: classNames("biz-visual", item.visualClass), "aria-hidden": "true" }),
            h("button", { type: "button", className: "plus-btn", "aria-label": `${item.title} 더보기` }, "+"),
            h(
              "div",
              { className: "biz-body" },
              h("h3", null, item.title),
              h("p", { className: "biz-sub" }, item.subtitle),
              h("p", { className: "biz-copy" }, item.desc)
            )
          )
        )
      )
    )
  );
}

function ContactSection() {
  return h(
    "section",
    { id: "contactus", className: "section contact-main section-anchor" },
    h(
      "div",
      { className: "inner contact-shell" },
      h(
        "div",
        { className: "contact-left reveal" },
        h(
          "div",
          { className: "contact-visual" },
          h("p", null, "Project Consulting"),
          h("h3", null, "현장 조건에 맞는 시스템을 제안합니다"),
          h(
            "ul",
            { className: "contact-meta" },
            CONTACT_META.map((item) =>
              h(
                "li",
                { key: item.key },
                h("strong", null, item.key),
                h("span", null, item.value)
              )
            )
          )
        )
      ),
      h(
        "div",
        { className: "contact-right" },
        h(
          "header",
          { className: "section-title reveal" },
          h("span", null, "CONTACT US")
        ),
        h(
          "form",
          {
            className: "contact-form reveal",
            onSubmit: (event) => event.preventDefault(),
          },
          h(
            "div",
            { className: "contact-tabs" },
            h("input", { type: "radio", id: "q1", name: "qtype", defaultChecked: true }),
            h("label", { htmlFor: "q1" }, "제품문의"),
            h("input", { type: "radio", id: "q2", name: "qtype" }),
            h("label", { htmlFor: "q2" }, "A/S문의")
          ),
          h(
            "ul",
            { className: "form-grid" },
            h(
              "li",
              null,
              h("p", null, "이름", h("span", null, "*")),
              h("input", { type: "text", placeholder: "이름을 입력해주세요." })
            ),
            h(
              "li",
              null,
              h("p", null, "기업명", h("span", null, "*")),
              h("input", { type: "text", placeholder: "기업명을 입력해주세요." })
            ),
            h(
              "li",
              null,
              h("p", null, "이메일", h("span", null, "*")),
              h("input", { type: "email", placeholder: "이메일을 입력해주세요." })
            ),
            h(
              "li",
              null,
              h("p", null, "연락처", h("span", null, "*")),
              h("input", { type: "text", placeholder: "연락처를 입력해주세요." })
            ),
            h(
              "li",
              { className: "full" },
              h("p", null, "문의내용", h("span", null, "*")),
              h("textarea", { rows: 5, placeholder: "문의내용을 입력해주세요." })
            )
          ),
          h(
            "div",
            { className: "form-action" },
            h("button", { type: "submit" }, "문의하기")
          )
        )
      )
    )
  );
}

function FooterSection() {
  return h(
    "section",
    { id: "foot", className: "section foot section-anchor" },
    h(
      "div",
      { className: "inner foot-shell" },
      h(
        "div",
        { className: "foot-left" },
        h("p", { className: "foot-title" }, h("b", null, "주식회사 대한피엔씨")),
        h(
          "p",
          { className: "foot-info" },
          h("span", null, "본사 : 충남 당진시 송악읍 부곡공단4길 28-90"),
          h("span", null, "TEL : 041-358-0020"),
          h("span", null, "FAX : 041-358-0026")
        ),
        h(
          "p",
          { className: "foot-info" },
          h("span", null, "연구소 : 경기도 시흥시 시화호수로 322"),
          h("span", null, "TEL : 031-365-4641"),
          h("span", null, "FAX : 041-358-0026")
        ),
        h("p", { className: "copy" }, "Copyright 2026 pnc21-refactor demo. All rights reserved.")
      ),
      h(
        "ul",
        { className: "foot-nav" },
        FOOT_COLUMNS.map((col) =>
          h(
            "li",
            { key: col.title },
            h("p", null, col.title),
            col.items.map((item) => h("a", { key: item, href: "#none" }, item))
          )
        )
      )
    )
  );
}

function App() {
  const [activeSection, setActiveSection] = React.useState("intro");
  const [slideIndex, setSlideIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % INTRO_SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    const revealNodes = Array.from(document.querySelectorAll(".reveal"));

    revealNodes.forEach((node, index) => {
      node.style.setProperty("--stagger", `${(index % 6) * 70}ms`);
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
    revealNodes.forEach((node) => revealObserver.observe(node));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return h(
    "div",
    { className: "site-shell" },
    h(Header, { activeSection }),
    h(RightFixed, { activeSection }),
    h(
      "main",
      { className: "main-wrap" },
      h(IntroSection, { slideIndex, onSlideSelect: setSlideIndex }),
      h(CompanySection),
      h(BusinessSection),
      h(ContactSection),
      h(FooterSection)
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h(App));
