const h = React.createElement;

const CART_STORAGE_KEY = "itisminea_shop_cart_v1";

const CATEGORY_META = {
  men: {
    label: "Men",
    title: "남성 컬렉션",
    description: "데일리 핏부터 미니멀 오피스웨어까지 준비했습니다.",
  },
  women: {
    label: "Women",
    title: "여성 컬렉션",
    description: "레이어드가 쉬운 실루엣 중심 아이템을 모았습니다.",
  },
  outer: {
    label: "Outer",
    title: "아우터 컬렉션",
    description: "계절 전환기 스타일을 완성하는 핵심 아이템입니다.",
  },
  accessories: {
    label: "Accessories",
    title: "액세서리 컬렉션",
    description: "전체 룩의 무드를 정리해 주는 포인트 제품입니다.",
  },
};

const PRODUCTS = [
  {
    id: "m-coat-01",
    name: "스탠다드 맥 코트",
    category: "outer",
    for: "men",
    price: 169000,
    badge: "NEW",
    tone: "ink",
    summary: "절제된 실루엣의 기본 맥 코트",
    detail:
      "어깨 라인을 단단하게 잡아주고 허리선은 여유 있게 떨어져 포멀과 캐주얼을 모두 소화합니다.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "m-knit-01",
    name: "리브드 울 니트",
    category: "men",
    for: "men",
    price: 79000,
    badge: "BEST",
    tone: "stone",
    summary: "입체감 있는 조직감의 베이직 니트",
    detail:
      "세로 골 조직으로 단독 착용 시에도 안정적인 실루엣을 만들고, 코트 이너로도 매끄럽습니다.",
    sizes: ["M", "L", "XL"],
  },
  {
    id: "m-denim-01",
    name: "테이퍼드 데님 팬츠",
    category: "men",
    for: "men",
    price: 69000,
    badge: "STEADY",
    tone: "indigo",
    summary: "과하지 않은 테이퍼드 핏 데님",
    detail:
      "허벅지는 편안하게, 밑단은 깔끔하게 정리되어 스니커즈와 로퍼 모두에 맞는 균형을 잡았습니다.",
    sizes: ["28", "30", "32", "34"],
  },
  {
    id: "w-jacket-01",
    name: "크롭드 트위드 자켓",
    category: "women",
    for: "women",
    price: 129000,
    badge: "NEW",
    tone: "sand",
    summary: "가볍게 걸치기 좋은 크롭 자켓",
    detail:
      "트위드 텍스처를 현대적으로 정리해 데님과 슬랙스 모두에 활용하기 쉽도록 설계했습니다.",
    sizes: ["S", "M", "L"],
  },
  {
    id: "w-skirt-01",
    name: "플리츠 미디 스커트",
    category: "women",
    for: "women",
    price: 76000,
    badge: "BEST",
    tone: "blush",
    summary: "움직일 때 실루엣이 살아나는 플리츠",
    detail:
      "허리 밴드의 복원력이 좋아 장시간 착용에도 형태가 흐트러지지 않는 미디 길이 스커트입니다.",
    sizes: ["S", "M", "L"],
  },
  {
    id: "w-shirt-01",
    name: "오버핏 스트라이프 셔츠",
    category: "women",
    for: "women",
    price: 62000,
    badge: "STEADY",
    tone: "sky",
    summary: "단독/레이어드 모두 가능한 셔츠",
    detail:
      "어깨선은 부드럽게 내리고 소매 볼륨을 살려 가벼운 레이어드만으로도 룩의 균형을 만듭니다.",
    sizes: ["FREE"],
  },
  {
    id: "o-blazer-01",
    name: "투버튼 클래식 블레이저",
    category: "outer",
    for: "men",
    price: 142000,
    badge: "LIMITED",
    tone: "charcoal",
    summary: "시즌리스 클래식 블레이저",
    detail:
      "견고한 라펠과 균형 잡힌 기장감으로 티셔츠 위에 가볍게 걸쳐도 단정한 무드를 유지합니다.",
    sizes: ["M", "L", "XL"],
  },
  {
    id: "o-trench-01",
    name: "벨티드 트렌치 코트",
    category: "outer",
    for: "women",
    price: 189000,
    badge: "NEW",
    tone: "khaki",
    summary: "여유 있는 볼륨의 트렌치",
    detail:
      "벨트로 실루엣을 조절할 수 있어 루즈한 실루엣과 슬림한 실루엣을 모두 연출할 수 있습니다.",
    sizes: ["S", "M"],
  },
  {
    id: "a-bag-01",
    name: "소프트 레더 숄더백",
    category: "accessories",
    for: "women",
    price: 98000,
    badge: "BEST",
    tone: "cacao",
    summary: "데일리 사이즈의 미니멀 숄더백",
    detail:
      "핸드폰, 파우치, 카드지갑이 안정적으로 들어가는 데일리 용량으로 출퇴근 모두에 적합합니다.",
    sizes: ["ONE SIZE"],
  },
  {
    id: "a-cap-01",
    name: "코튼 로고 볼캡",
    category: "accessories",
    for: "men",
    price: 32000,
    badge: "STEADY",
    tone: "olive",
    summary: "곡선 챙의 베이직 볼캡",
    detail:
      "빈티지 워싱을 더해 과한 로고 없이도 얼굴선이 자연스럽게 정리되는 깊이감으로 제작했습니다.",
    sizes: ["FREE"],
  },
  {
    id: "a-scarf-01",
    name: "울 블렌드 머플러",
    category: "accessories",
    for: "women",
    price: 48000,
    badge: "NEW",
    tone: "rose",
    summary: "볼륨감이 살아있는 윈터 머플러",
    detail:
      "부드러운 촉감의 울 블렌드 원사로 길고 넓게 짜여 다양한 매듭 스타일을 연출할 수 있습니다.",
    sizes: ["ONE SIZE"],
  },
  {
    id: "m-hood-01",
    name: "헤비 코튼 후드",
    category: "men",
    for: "men",
    price: 83000,
    badge: "BEST",
    tone: "graphite",
    summary: "도톰한 원단의 데일리 후드",
    detail:
      "중량감 있는 코튼 원단을 사용해 실루엣이 잘 유지되고, 안쪽 기모가 편안한 보온감을 제공합니다.",
    sizes: ["M", "L", "XL"],
  },
];

function classNames() {
  return Array.from(arguments)
    .filter(Boolean)
    .join(" ");
}

function formatPrice(value) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(value);
}

function getPathFromHash() {
  const raw = window.location.hash.replace(/^#/, "").trim();
  if (!raw) return "/";
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  const normalized = withSlash.replace(/\/+$/, "");
  return normalized || "/";
}

function parseRoute(path) {
  if (path === "/") return { name: "home" };
  if (path === "/shop") return { name: "shop" };
  if (path === "/cart") return { name: "cart" };
  if (path.startsWith("/category/")) {
    const slug = path.split("/")[2];
    return { name: "category", slug };
  }
  if (path.startsWith("/product/")) {
    const id = path.split("/")[2];
    return { name: "product", id };
  }
  return { name: "notfound" };
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const next = {};
    Object.entries(parsed).forEach(([id, qty]) => {
      if (typeof id === "string" && Number.isFinite(qty) && qty > 0) {
        next[id] = Math.floor(qty);
      }
    });
    return next;
  } catch {
    return {};
  }
}

function cartItemCount(cart) {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function buildCartRows(cart) {
  return Object.entries(cart)
    .map(([id, quantity]) => {
      const product = PRODUCTS.find((item) => item.id === id);
      if (!product) return null;
      return { product, quantity, subtotal: product.price * quantity };
    })
    .filter(Boolean);
}

function ProductCard(props) {
  const { product, onAdd } = props;
  return h(
    "article",
    { className: "product-card" },
    h(
      "a",
      { href: `#/product/${product.id}`, className: "product-media-link" },
      h(
        "div",
        { className: classNames("product-media", `tone-${product.tone}`) },
        h("span", { className: "media-badge" }, product.badge)
      )
    ),
    h(
      "div",
      { className: "product-info" },
      h("p", { className: "product-category" }, CATEGORY_META[product.category].label),
      h(
        "a",
        { href: `#/product/${product.id}`, className: "product-name" },
        product.name
      ),
      h("p", { className: "product-summary" }, product.summary),
      h("p", { className: "product-price" }, formatPrice(product.price))
    ),
    h(
      "div",
      { className: "product-actions" },
      h(
        "button",
        {
          type: "button",
          className: "btn btn-dark",
          onClick: () => onAdd(product.id, 1),
        },
        "장바구니"
      ),
      h(
        "a",
        { href: `#/product/${product.id}`, className: "btn btn-line" },
        "상세보기"
      )
    )
  );
}

function HomePage(props) {
  const { onAdd } = props;
  const featured = PRODUCTS.slice(0, 6);
  const categoryCards = Object.entries(CATEGORY_META).map(([slug, data]) =>
    h(
      "a",
      { key: slug, href: `#/category/${slug}`, className: "category-card" },
      h("p", { className: "category-label" }, data.label),
      h("h3", null, data.title),
      h("p", null, data.description)
    )
  );

  return h(
    "div",
    { className: "page-stack" },
    h(
      "section",
      { className: "hero-block" },
      h(
        "div",
        { className: "hero-copy" },
        h("p", { className: "eyebrow" }, "SPRING DROP 26"),
        h("h1", null, "ITISMINEA 의류 스토어"),
        h(
          "p",
          null,
          "가볍게 시작하는 샘플 이커머스 구조입니다. 카테고리, 상세페이지, 장바구니까지 한 번에 확인하세요."
        ),
        h(
          "div",
          { className: "hero-actions" },
          h("a", { href: "#/shop", className: "btn btn-dark" }, "전체 상품 보기"),
          h("a", { href: "#/category/women", className: "btn btn-line" }, "여성 컬렉션")
        )
      ),
      h(
        "div",
        { className: "hero-panel" },
        h("p", null, "Most Wanted"),
        h("h3", null, "트위드 자켓 + 플리츠 스커트"),
        h("span", null, "세트 연출 시 10% 할인"),
        h("a", { href: "#/product/w-jacket-01", className: "btn btn-accent" }, "지금 보기")
      )
    ),
    h(
      "section",
      { className: "category-grid" },
      h("div", { className: "section-title-wrap" }, h("h2", null, "컬렉션 둘러보기")),
      h("div", { className: "category-grid-inner" }, categoryCards)
    ),
    h(
      "section",
      { className: "catalog-section" },
      h(
        "div",
        { className: "section-title-wrap section-title-spaced" },
        h("h2", null, "인기 상품"),
        h("a", { href: "#/shop", className: "inline-link" }, "전체 보기")
      ),
      h(
        "div",
        { className: "product-grid" },
        featured.map((product) =>
          h(ProductCard, { key: product.id, product, onAdd })
        )
      )
    )
  );
}

function ShopPage(props) {
  const { title, description, products, onAdd } = props;
  return h(
    "div",
    { className: "page-stack" },
    h(
      "section",
      { className: "section-header" },
      h("p", { className: "eyebrow" }, "CATALOG"),
      h("h1", null, title),
      h("p", null, description)
    ),
    h(
      "section",
      { className: "catalog-section" },
      h(
        "div",
        { className: "product-grid" },
        products.map((product) =>
          h(ProductCard, { key: product.id, product, onAdd })
        )
      )
    )
  );
}

function ProductDetailPage(props) {
  const { product, onAdd, cartQuantity } = props;
  if (!product) return h(NotFoundPage);

  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    setQuantity(1);
  }, [product.id]);

  return h(
    "div",
    { className: "page-stack" },
    h(
      "section",
      { className: "detail-layout" },
      h(
        "div",
        { className: "detail-media-wrap" },
        h(
          "div",
          { className: classNames("detail-media", `tone-${product.tone}`) },
          h("span", { className: "media-badge" }, product.badge)
        )
      ),
      h(
        "div",
        { className: "detail-panel" },
        h("p", { className: "eyebrow" }, CATEGORY_META[product.category].label),
        h("h1", null, product.name),
        h("p", { className: "detail-price" }, formatPrice(product.price)),
        h("p", { className: "detail-copy" }, product.detail),
        h(
          "div",
          { className: "size-group" },
          h("p", { className: "label" }, "SIZE"),
          h(
            "div",
            { className: "size-list" },
            product.sizes.map((size) =>
              h("span", { key: size, className: "size-chip" }, size)
            )
          )
        ),
        h(
          "div",
          { className: "qty-line" },
          h("p", { className: "label" }, "QTY"),
          h(
            "div",
            { className: "qty-control" },
            h(
              "button",
              {
                type: "button",
                onClick: () => setQuantity((prev) => Math.max(1, prev - 1)),
              },
              "-"
            ),
            h("span", null, quantity),
            h(
              "button",
              {
                type: "button",
                onClick: () => setQuantity((prev) => prev + 1),
              },
              "+"
            )
          )
        ),
        h(
          "div",
          { className: "detail-actions" },
          h(
            "button",
            {
              type: "button",
              className: "btn btn-dark",
              onClick: () => onAdd(product.id, quantity),
            },
            "장바구니 담기"
          ),
          h("a", { href: "#/cart", className: "btn btn-accent" }, "장바구니 이동")
        ),
        h(
          "p",
          { className: "cart-hint" },
          `현재 장바구니에 ${cartQuantity}개 담겨 있습니다.`
        )
      )
    )
  );
}

function CartPage(props) {
  const { rows, onIncrease, onDecrease, onRemove } = props;
  const subTotal = rows.reduce((sum, row) => sum + row.subtotal, 0);
  const shipping = rows.length === 0 ? 0 : subTotal >= 120000 ? 0 : 3000;
  const total = subTotal + shipping;

  if (rows.length === 0) {
    return h(
      "section",
      { className: "empty-cart" },
      h("h1", null, "장바구니가 비어 있습니다."),
      h("p", null, "카테고리 페이지에서 마음에 드는 상품을 먼저 담아보세요."),
      h("a", { href: "#/shop", className: "btn btn-dark" }, "상품 보러 가기")
    );
  }

  return h(
    "div",
    { className: "cart-layout" },
    h(
      "section",
      { className: "cart-list" },
      h("h1", null, "장바구니"),
      rows.map((row) =>
        h(
          "article",
          { key: row.product.id, className: "cart-item" },
          h(
            "div",
            { className: classNames("cart-thumb", `tone-${row.product.tone}`) },
            h("span", null, row.product.badge)
          ),
          h(
            "div",
            { className: "cart-item-info" },
            h("p", { className: "cart-item-category" }, CATEGORY_META[row.product.category].label),
            h(
              "a",
              { href: `#/product/${row.product.id}`, className: "cart-item-name" },
              row.product.name
            ),
            h("p", { className: "cart-item-price" }, formatPrice(row.product.price))
          ),
          h(
            "div",
            { className: "cart-item-actions" },
            h(
              "div",
              { className: "qty-control" },
              h(
                "button",
                { type: "button", onClick: () => onDecrease(row.product.id) },
                "-"
              ),
              h("span", null, row.quantity),
              h(
                "button",
                { type: "button", onClick: () => onIncrease(row.product.id) },
                "+"
              )
            ),
            h("p", { className: "cart-subtotal" }, formatPrice(row.subtotal)),
            h(
              "button",
              {
                type: "button",
                className: "delete-link",
                onClick: () => onRemove(row.product.id),
              },
              "삭제"
            )
          )
        )
      )
    ),
    h(
      "aside",
      { className: "cart-summary" },
      h("h2", null, "주문 요약"),
      h(
        "div",
        { className: "summary-row" },
        h("span", null, "상품 금액"),
        h("strong", null, formatPrice(subTotal))
      ),
      h(
        "div",
        { className: "summary-row" },
        h("span", null, "배송비"),
        h("strong", null, shipping === 0 ? "무료" : formatPrice(shipping))
      ),
      h(
        "div",
        { className: "summary-row total" },
        h("span", null, "결제 예정"),
        h("strong", null, formatPrice(total))
      ),
      h(
        "button",
        { type: "button", className: "btn btn-dark wide" },
        "결제하기 (샘플)"
      ),
      h("p", { className: "summary-note" }, "실결제 기능은 제외된 데모 페이지입니다.")
    )
  );
}

function NotFoundPage() {
  return h(
    "section",
    { className: "not-found" },
    h("p", { className: "eyebrow" }, "404"),
    h("h1", null, "페이지를 찾을 수 없습니다."),
    h("p", null, "주소를 다시 확인하거나 스토어 메인으로 이동하세요."),
    h(
      "div",
      { className: "hero-actions" },
      h("a", { href: "#/", className: "btn btn-dark" }, "홈으로"),
      h("a", { href: "#/shop", className: "btn btn-line" }, "상품 보기")
    )
  );
}

function App() {
  const [path, setPath] = React.useState(getPathFromHash);
  const [cart, setCart] = React.useState(loadCart);

  React.useEffect(() => {
    function onHashChange() {
      setPath(getPathFromHash());
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  React.useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const route = parseRoute(path);
  const rows = buildCartRows(cart);
  const cartCount = cartItemCount(cart);

  React.useEffect(() => {
    if (route.name === "home") document.title = "ITISMINEA | 홈";
    if (route.name === "shop") document.title = "ITISMINEA | 전체 상품";
    if (route.name === "category") {
      const current = CATEGORY_META[route.slug];
      document.title = current
        ? `ITISMINEA | ${current.title}`
        : "ITISMINEA | 카테고리";
    }
    if (route.name === "product") {
      const product = PRODUCTS.find((item) => item.id === route.id);
      document.title = product
        ? `ITISMINEA | ${product.name}`
        : "ITISMINEA | 상품";
    }
    if (route.name === "cart") document.title = "ITISMINEA | 장바구니";
    if (route.name === "notfound") document.title = "ITISMINEA | 404";
  }, [route.name, route.slug, route.id]);

  function addToCart(id, quantity) {
    const amount = Math.max(1, Number(quantity) || 1);
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + amount,
    }));
  }

  function increaseItem(id) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }

  function decreaseItem(id) {
    setCart((prev) => {
      const nextQty = (prev[id] || 0) - 1;
      if (nextQty <= 0) {
        const clone = { ...prev };
        delete clone[id];
        return clone;
      }
      return { ...prev, [id]: nextQty };
    });
  }

  function removeItem(id) {
    setCart((prev) => {
      const clone = { ...prev };
      delete clone[id];
      return clone;
    });
  }

  const shopActive =
    route.name === "shop" || route.name === "category" || route.name === "product";

  let content = null;

  if (route.name === "home") {
    content = h(HomePage, { onAdd: addToCart });
  } else if (route.name === "shop") {
    content = h(ShopPage, {
      title: "전체 상품",
      description: "남성/여성/아우터/액세서리 전 카테고리 상품을 둘러보세요.",
      products: PRODUCTS,
      onAdd: addToCart,
    });
  } else if (route.name === "category") {
    const category = CATEGORY_META[route.slug];
    if (!category) {
      content = h(NotFoundPage);
    } else {
      const filtered = PRODUCTS.filter((item) => item.category === route.slug || item.for === route.slug);
      content = h(ShopPage, {
        title: category.title,
        description: category.description,
        products: filtered,
        onAdd: addToCart,
      });
    }
  } else if (route.name === "product") {
    const product = PRODUCTS.find((item) => item.id === route.id);
    content = h(ProductDetailPage, {
      product,
      onAdd: addToCart,
      cartQuantity: cart[route.id] || 0,
    });
  } else if (route.name === "cart") {
    content = h(CartPage, {
      rows,
      onIncrease: increaseItem,
      onDecrease: decreaseItem,
      onRemove: removeItem,
    });
  } else {
    content = h(NotFoundPage);
  }

  return h(
    "div",
    { className: "app-shell" },
    h(
      "header",
      { className: "topbar" },
      h(
        "div",
        { className: "topbar-inner" },
        h("a", { href: "#/", className: "brand" }, "ITISMINEA"),
        h(
          "nav",
          { className: "nav-menu" },
          h("a", { href: "#/", className: classNames("nav-link", route.name === "home" && "active") }, "홈"),
          h("a", { href: "#/shop", className: classNames("nav-link", shopActive && "active") }, "샵"),
          h("a", { href: "#/category/men", className: classNames("nav-link", route.slug === "men" && "active") }, "남성"),
          h(
            "a",
            { href: "#/category/women", className: classNames("nav-link", route.slug === "women" && "active") },
            "여성"
          ),
          h(
            "a",
            { href: "#/cart", className: classNames("nav-link", route.name === "cart" && "active") },
            `장바구니 (${cartCount})`
          )
        )
      )
    ),
    h("main", { className: "page-content" }, content),
    h(
      "footer",
      { className: "site-footer" },
      h("p", null, "ITISMINEA SAMPLE STORE"),
      h("span", null, "© 2026 front_test · static React + Vercel")
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h(App));
