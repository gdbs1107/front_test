const e = React.createElement;

const STORAGE_KEY = "front_test_deploy_tasks";
const VISIT_KEY = "front_test_visit_count";

const DEFAULT_TASKS = [
  {
    id: "repo",
    title: "GitHub 저장소 연결",
    description: "원격 저장소와 push 동작을 확인합니다.",
    done: false,
  },
  {
    id: "vercel",
    title: "Vercel 프로젝트 연결",
    description: "Git 연동 후 main 브랜치 자동 배포를 확인합니다.",
    done: false,
  },
  {
    id: "check",
    title: "배포 URL 접속 테스트",
    description: "모바일/데스크톱에서 페이지가 열리는지 확인합니다.",
    done: false,
  },
];

const NOTES = [
  "Vercel은 나중에 커스텀 도메인을 붙이기 쉽습니다.",
  "작게 배포하고 자주 배포하는 습관이 속도를 만듭니다.",
  "첫 배포가 끝나면 브랜치 전략과 릴리즈 규칙을 정리하세요.",
];

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_TASKS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return DEFAULT_TASKS;
    const valid = parsed.every(
      (task) =>
        typeof task.id === "string" &&
        typeof task.title === "string" &&
        typeof task.description === "string" &&
        typeof task.done === "boolean"
    );
    return valid ? parsed : DEFAULT_TASKS;
  } catch {
    return DEFAULT_TASKS;
  }
}

function App() {
  const [tasks, setTasks] = React.useState(loadTasks);
  const [noteIndex, setNoteIndex] = React.useState(0);
  const [visitCount, setVisitCount] = React.useState(1);

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  React.useEffect(() => {
    const prev = Number(localStorage.getItem(VISIT_KEY) || "0");
    const next = Number.isNaN(prev) ? 1 : prev + 1;
    localStorage.setItem(VISIT_KEY, String(next));
    setVisitCount(next);
  }, []);

  const doneCount = tasks.filter((task) => task.done).length;
  const progress = Math.round((doneCount / tasks.length) * 100);

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  return e(
    "main",
    { className: "container" },
    e(
      "header",
      { className: "hero card" },
      e("p", { className: "badge" }, "React Static Deployment"),
      e("h1", null, "front_test 배포 리허설"),
      e(
        "p",
        { className: "muted" },
        `이 브라우저에서 ${visitCount}번째 열람 중입니다. 체크 상태는 로컬에 저장됩니다.`
      )
    ),
    e(
      "section",
      { className: "card" },
      e(
        "div",
        { className: "progress-row" },
        e("h2", null, "배포 체크리스트"),
        e("strong", null, `${progress}%`)
      ),
      e(
        "div",
        { className: "progress-track", role: "progressbar", "aria-valuenow": progress },
        e("div", { className: "progress-fill", style: { width: `${progress}%` } })
      ),
      e(
        "ul",
        { className: "task-list" },
        tasks.map((task) =>
          e(
            "li",
            { key: task.id, className: task.done ? "task done" : "task" },
            e(
              "div",
              null,
              e("strong", null, task.title),
              e("p", { className: "muted" }, task.description)
            ),
            e(
              "button",
              {
                type: "button",
                className: "toggle-btn",
                onClick: () => toggleTask(task.id),
              },
              task.done ? "되돌리기" : "완료"
            )
          )
        )
      )
    ),
    e(
      "section",
      { className: "card note" },
      e("h2", null, "배포 노트"),
      e("p", null, NOTES[noteIndex]),
      e(
        "button",
        {
          type: "button",
          className: "toggle-btn",
          onClick: () => setNoteIndex((prev) => (prev + 1) % NOTES.length),
        },
        "다음 노트"
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
