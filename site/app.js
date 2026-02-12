const h = React.createElement;

const SECTION_ITEMS = [
  { id: "intro", label: "HOME" },
  { id: "company", label: "COMPANY" },
  { id: "business", label: "BUSINESS" },
  { id: "contactus", label: "CONTACT" },
  { id: "foot", label: "FOOT" },
];

const INTRO_SLIDES = [
  {
    id: "slide-1",
    kicker: "Air Intelligence",
    title: ["깨끗한 공기가 흐르는 곳,", "새로운 공정의 기준이 시작됩니다."],
    visualClass: "intro-bg-a",
  },
  {
    id: "slide-2",
    kicker: "Since 1999",
    title: ["정밀 공조 분야의 축적된 경험으로", "안정적인 생산 환경을 설계합니다."],
    visualClass: "intro-bg-b",
  },
  {
    id: "slide-3",
    kicker: "One-Stop Source",
    title: ["설계부터 운영관리까지 연결해", "현장의 공기 품질을 책임집니다."],
    visualClass: "intro-bg-c",
  },
];

const ESG_CARDS = [
  {
    key: "environment",
    en: "Environment",
    title: "환경경영",
    text: "고효율 설비와 에너지 최적화 제어를 통해 지속 가능한 운영 전략을 구현합니다.",
    visualClass: "esg-a",
  },
  {
    key: "social",
    en: "Social",
    title: "상생경영",
    text: "협력사, 고객사, 현장 운영자와 투명한 프로세스로 장기 파트너십을 만들어갑니다.",
    visualClass: "esg-b",
  },
  {
    key: "governance",
    en: "Governance",
    title: "윤리경영",
    text: "데이터 기반 품질관리와 책임 있는 의사결정으로 신뢰 가능한 체계를 유지합니다.",
    visualClass: "esg-c",
  },
];

const BUSINESS_CARDS = [
  {
    key: "filter",
    title: "Clean Filter",
    text: "고효율 주름 필터 및 맞춤형 집진 솔루션",
    visualClass: "biz-a",
  },
  {
    key: "energy",
    title: "Clean Energy",
    text: "공조 에너지 관리와 하이브리드 절감 시스템",
    visualClass: "biz-b",
  },
  {
    key: "room",
    title: "Clean Room",
    text: "산업용·바이오 청정룸 설계 및 시공",
    visualClass: "biz-c",
  },
];

const FOOT_NAV = [
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
    { className: "header-top" },
    h(
      "div",
      { className: "inner" },
      h(
        "a",
        { href: "#intro", className: "logo-wrap" },
        h("span", { className: "logo-mark", "aria-hidden": "true" }, "D"),
        h(
          "span",
          { className: "logo-copy" },
          h("strong", null, "DAEHAN PNC"),
          h("small", null, "Global Leader In Air Solution")
        )
      ),
      h(
        "nav",
        { className: "nav-top", "aria-label": "Primary" },
        SECTION_ITEMS.slice(0, 4).map((item) =>
          h(
            "a",
            {
              key: item.id,
              href: `#${item.id}`,
              className: classNames("nav-link", activeSection === item.id && "active"),
            },
            item.label
          )
        )
      ),
      h("a", { href: "#contactus", className: "head-cta" }, "Contact Us")
    )
  );
}

function RightFixed(props) {
  const { activeSection } = props;

  return h(
    "aside",
    { className: "right-fixed", "aria-label": "Section Navigation" },
    SECTION_ITEMS.slice(0, 4).map((item) =>
      h(
        "a",
        {
          key: item.id,
          href: `#${item.id}`,
          className: classNames("rf-item", activeSection === item.id && "active"),
        },
        h("span", { className: "rf-label" }, item.label),
        h("span", { className: "rf-dot", "aria-hidden": "true" })
      )
    )
  );
}

function IntroSection(props) {
  const { slideIndex, onSlideSelect } = props;

  return h(
    "section",
    { id: "intro", className: "section visual-intro section-anchor" },
    h(
      "div",
      { className: "main-visual" },
      INTRO_SLIDES.map((slide, index) =>
        h(
          "article",
          {
            key: slide.id,
            className: classNames(
              "visual-item",
              slide.visualClass,
              index === slideIndex && "active"
            ),
          },
          h("div", { className: "visual-dim", "aria-hidden": "true" }),
          h(
            "div",
            { className: "inner visual-txt" },
            h("p", { className: "slide-kicker reveal" }, slide.kicker),
            h(
              "h1",
              { className: "reveal" },
              slide.title[0],
              h("br"),
              slide.title[1]
            )
          )
        )
      )
    ),
    h(
      "div",
      { className: "visual-dots" },
      INTRO_SLIDES.map((slide, index) =>
        h("button", {
          key: slide.id,
          type: "button",
          className: classNames("visual-dot", index === slideIndex && "active"),
          onClick: () => onSlideSelect(index),
          "aria-label": `${slide.kicker} 슬라이드`,
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
      { className: "inner" },
      h(
        "div",
        { className: "main-section-title reveal" },
        h("h2", null, h("span", null, "COMPANY"))
      ),
      h(
        "div",
        { className: "main-lead reveal" },
        h(
          "h3",
          null,
          h("b", { className: "color-b" }, "ESG 경영"),
          "을 통해",
          h("br"),
          "우리가 만드는 ",
          h("b", { className: "color-o" }, "더 나은 산업 환경")
        ),
        h(
          "p",
          null,
          "대한피엔씨는 공기 품질과 에너지 효율을 동시에 고려한 설계로, 환경 관련 산업에서 지속 가능한 성장을 위한 해법을 제공합니다."
        )
      ),
      h(
        "div",
        { className: "management-flex" },
        ESG_CARDS.map((card) =>
          h(
            "article",
            { key: card.key, className: classNames("management-card reveal", card.visualClass) },
            h("span", { className: "card-en" }, card.en),
            h("h3", null, card.title),
            h("p", null, card.text)
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
      { className: "inner" },
      h(
        "div",
        { className: "main-section-title reveal" },
        h("h2", null, h("span", null, "BUSINESS"))
      ),
      h(
        "div",
        { className: "main-lead reveal" },
        h(
          "h3",
          null,
          h("b", { className: "color-b" }, "깨끗한 환경"),
          "과 ",
          h("b", { className: "color-o" }, "고품질 생산")
        ),
        h(
          "p",
          null,
          "Clean Filter / Clean Energy / Clean Room의 제조, 설계, 시공, 사후관리까지 ONE-STOP SOURCE 체계를 제공합니다."
        )
      ),
      h(
        "div",
        { className: "business-flex" },
        BUSINESS_CARDS.map((card) =>
          h(
            "article",
            { key: card.key, className: "business-box reveal" },
            h("div", { className: classNames("biz-visual", card.visualClass), "aria-hidden": "true" }),
            h("button", { type: "button", className: "plus-btn", "aria-label": `${card.title} 더보기` }, "+"),
            h(
              "div",
              { className: "bu-box-txt" },
              h("h3", null, card.title),
              h("p", null, card.text)
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
      { className: "main-contact-area" },
      h(
        "div",
        { className: "left reveal" },
        h(
          "div",
          { className: "img-bg" },
          h("p", null, "Project Consulting"),
          h("strong", null, "현장 조건에 맞는 시스템을 제안합니다")
        )
      ),
      h(
        "div",
        { className: "right" },
        h(
          "div",
          { className: "main-section-title reveal" },
          h("h2", null, h("span", null, "CONTACT US"))
        ),
        h(
          "form",
          {
            className: "main-form-area reveal",
            onSubmit: (event) => event.preventDefault(),
          },
          h(
            "div",
            { className: "radio-custom" },
            h("input", { type: "radio", id: "rdo01", name: "rdo", defaultChecked: true }),
            h("label", { htmlFor: "rdo01" }, "제품문의"),
            h("input", { type: "radio", id: "rdo02", name: "rdo" }),
            h("label", { htmlFor: "rdo02" }, "A/S문의")
          ),
          h(
            "ul",
            null,
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
              { className: "w100" },
              h("p", null, "문의내용", h("span", null, "*")),
              h("textarea", { placeholder: "문의내용을 입력해주세요." })
            )
          ),
          h(
            "div",
            { className: "form-btn-area" },
            h("button", { type: "submit" }, "문의하기")
          )
        )
      )
    )
  );
}

function FootSection() {
  return h(
    "section",
    { id: "foot", className: "section foot section-anchor" },
    h(
      "div",
      { className: "foot-area inner" },
      h(
        "div",
        { className: "left" },
        h("p", { className: "title-foot" }, h("b", null, "주식회사 대한피엔씨")),
        h(
          "p",
          { className: "info-foot" },
          h("span", null, "본사 : 충남 당진시 송악읍 부곡공단4길 28-90"),
          h("span", null, "TEL : 041-358-0020"),
          h("span", null, "FAX : 041-358-0026")
        ),
        h(
          "p",
          { className: "info-foot" },
          h("span", null, "연구소 : 경기도 시흥시 시화호수로 322"),
          h("span", null, "TEL : 031-365-4641"),
          h("span", null, "FAX : 041-358-0026")
        ),
        h("p", { className: "copy-foot" }, "Copyright 2026 pnc21-refactor demo. All rights reserved.")
      ),
      h(
        "div",
        { className: "right" },
        h(
          "ul",
          { className: "foot-nav" },
          FOOT_NAV.map((group) =>
            h(
              "li",
              { key: group.title },
              h("p", null, group.title),
              group.items.map((item) =>
                h("a", { key: item, href: "#none" }, item)
              )
            )
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
    const sections = SECTION_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
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
        threshold: 0.52,
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
        threshold: 0.16,
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
    revealNodes.forEach((node) => revealObserver.observe(node));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  React.useEffect(() => {
    document.title = `대한피엔씨 리팩터링 | ${activeSection.toUpperCase()}`;
  }, [activeSection]);

  return h(
    "div",
    { className: "site-shell" },
    h(Header, { activeSection }),
    h(RightFixed, { activeSection }),
    h(
      "main",
      { className: "main-wrap" },
      h(IntroSection, {
        slideIndex,
        onSlideSelect: setSlideIndex,
      }),
      h(CompanySection),
      h(BusinessSection),
      h(ContactSection),
      h(FootSection)
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h(App));
