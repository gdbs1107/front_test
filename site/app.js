const e = React.createElement;

function App() {
  return e(
    "main",
    { className: "container" },
    e(
      "section",
      { className: "card" },
      e("h1", null, "React 정적 사이트"),
      e("p", null, "기본 스캐폴드가 준비되었습니다.")
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
