const STORAGE_KEY = "jeonwoon-bocho-progress-v1";

const curriculum = [
  {
    id: "day1",
    day: "Day 1",
    title: "차량 기본 조작",
    goal: "운전 자세, 미러, 기어, 출발과 제동을 익힙니다.",
    items: [
      item("day1-item1", "운전자세", "guide/guide/Day1/Item1_운전자세.png", "guide/guide/Day1/Item1_운전자세/Content1.png"),
      item("day1-item2", "미러조정", "guide/guide/Day1/Item2_미러조정.png", "guide/guide/Day1/Item2_미러조정/Content1.png"),
      item("day1-item3", "명칭과 기능", "guide/guide/Day1/Item3_명칭과기능.png", "guide/guide/Day1/Item3_명칭과기능/Content1.png"),
      item("day1-item4", "기어변속", "guide/guide/Day1/Item4_기어변속.png", "guide/guide/Day1/Item4_기어변속/Content1.png"),
      item("day1-item5", "출발", "guide/guide/Day1/Item5_출발.png", "guide/guide/Day1/Item5_출발/Content1.png"),
      item("day1-item6", "제동", "guide/guide/Day1/Item6_제동.png", "guide/guide/Day1/Item6_제동/Content1.png"),
      item("day1-item7", "조향", "guide/guide/Day1/Item7_조향.png", "guide/guide/Day1/Item7_조향/Content1.png"),
    ],
  },
  {
    id: "day2",
    day: "Day 2",
    title: "차선과 회전",
    goal: "차선 맞추기, 거리감, 신호 체계와 회전 감각을 연습합니다.",
    items: [
      item("day2-item1", "차선맞추기", "guide/guide/Day2/Item1_차선맞추기.png", "guide/guide/Day2/Item1_차선맞추기/Content1.png"),
      item("day2-item2", "거리감", "guide/guide/Day2/Item2_거리감.png", "guide/guide/Day2/Item2_거리감/Content1.png"),
      item("day2-item3", "속도감", "guide/guide/Day2/Item3_속도감.png", "guide/guide/Day2/Item3_속도감/Content1.png"),
      item("day2-item4", "신호 체계", "guide/guide/Day2/Item4_신호 체계.png", "guide/guide/Day2/Item4_신호 체계/Content1.png"),
      item("day2-item5", "좌회전", "guide/guide/Day2/Item5_좌회전.png", "guide/guide/Day2/Item5_좌회전/Content1.png"),
      item("day2-item6", "우회전", "guide/guide/Day2/Item6_우회전.png", "guide/guide/Day2/Item6_우회전/Content1.png"),
      item("day2-item7", "U턴", "guide/guide/Day2/Item7_U턴.png", "guide/guide/Day2/Item7_U턴/Content1.png"),
      item("day2-item8", "코너링", "guide/guide/Day2/Item8_코너링.png", "guide/guide/Day2/Item8_코너링/Content1.png"),
    ],
  },
  {
    id: "day3",
    day: "Day 3",
    title: "주차 기본",
    goal: "주차 원리를 이해하고 후면, 전면, 평행 주차를 익힙니다.",
    items: [
      item("day3-item1", "기본원리", "", "guide/guide/Day3/Item1_기본원리/Content1.png"),
      item("day3-item2", "후면주차", "guide/guide/Day3/Item2_후면주차.png", "guide/guide/Day3/Item2_후면주차/후면 주차1.png"),
      item("day3-item3", "전면주차", "guide/guide/Day3/Item3_전면주차.png", "guide/guide/Day3/Item3_전면주차/전면 주차1.png"),
      item("day3-item4", "평행주차", "guide/guide/Day3/Item4_평행주차.png", "guide/guide/Day3/Item4_평행주차/평행 주차1.png"),
    ],
  },
  {
    id: "day4",
    day: "Day 4",
    title: "실전 도로 주행",
    goal: "안전거리, 차선 변경, 고속도로와 교차로 흐름을 익힙니다.",
    items: [
      item("day4-item1", "안전거리", "guide/guide/Day4/Item1_안전거리.png", "guide/guide/Day4/Item1_안전거리/Content1.png"),
      item("day4-item2", "차선 변경", "guide/guide/Day4/Item2_차선 변경.png", "guide/guide/Day4/Item2_차선 변경/Content3.png"),
      item("day4-item3", "고속도로", "guide/guide/Day4/Item3_고속도로.png", "guide/guide/Day4/Item3_고속도로/Content2.png"),
      item("day4-item4", "교차로", "guide/guide/Day4/Item4_교차로.png", "guide/guide/Day4/Item4_교차로/Content1.png"),
      item("day4-item5", "엉키는 병목구간", "guide/guide/Day4/Item5_엉키는병목구간.png", "guide/guide/Day4/Item5_엉키는병목구간/Content1.png"),
    ],
  },
  {
    id: "day5",
    day: "Day 5",
    title: "종합 주행",
    goal: "시내, 이면도로, 비보호 좌회전과 무신호 교차로를 점검합니다.",
    items: [
      item("day5-item1", "시내주행", "guide/guide/Day5/Item1_시내주행.png", "guide/guide/Day5/Item1_시내주행/Content1.png"),
      item("day5-item2", "이면도로 주행", "guide/guide/Day5/Item2.이면도로 주행.png", "guide/guide/Day5/Item2.이면도로 주행/Content1.png"),
      item("day5-item3", "비보호 좌회전", "guide/guide/Day5/Item3_비보호 좌회전.png", ""),
      item("day5-item4", "신호등 없는 교차로", "guide/guide/Day5/Item4_신호등없는교차로.png", ""),
    ],
  },
];

function item(id, title, cover, preview) {
  return { id, title, cover, preview };
}

const elements = {
  list: document.querySelector("#curriculum-list"),
  dayFilter: document.querySelector("#hero-day-filter"),
  completedCount: document.querySelector("#completed-count"),
  totalCount: document.querySelector("#total-count"),
  completedDaysCount: document.querySelector("#completed-days-count"),
  progressPercent: document.querySelector("#progress-percent"),
  progressFill: document.querySelector("#progress-fill"),
  settingsProgressLabel: document.querySelector("#settings-progress-label"),
  settingsProgressFill: document.querySelector("#settings-progress-fill"),
  saveStatusLabel: document.querySelector("#save-status-label"),
  connectionStatus: document.querySelector("#connection-status"),
  connectionDot: document.querySelector("#connection-dot"),
  tabButtons: [...document.querySelectorAll("[data-screen-target]")],
  screens: [...document.querySelectorAll("[data-screen]")],
  completeNextButton: document.querySelector("#complete-next-button"),
  resetProgressButton: document.querySelector("#reset-progress-button"),
  installDialog: document.querySelector("#install-dialog"),
  openInstallDialogButton: document.querySelector("#open-install-dialog-button"),
  installActionButton: document.querySelector("#install-action-button"),
  installDescription: document.querySelector("#install-description"),
  installSteps: document.querySelector("#install-steps"),
  guideViewer: document.querySelector("#guide-viewer"),
  guideViewerDay: document.querySelector("#guide-viewer-day"),
  guideViewerTitle: document.querySelector("#guide-viewer-title"),
  guideViewerClose: document.querySelector("#guide-viewer-close"),
  guideCarousel: document.querySelector("#guide-carousel"),
  guideDots: document.querySelector("#guide-dots"),
  guidePageLabel: document.querySelector("#guide-page-label"),
  guidePrevButton: document.querySelector("#guide-viewer-prev"),
  guideNextButton: document.querySelector("#guide-viewer-next"),
  guidePassButton: document.querySelector("#guide-pass-button"),
};

const totalItems = curriculum.reduce((sum, day) => sum + day.items.length, 0);
let progressState = loadProgress();
let expandedDayId = null;
let deferredInstallPrompt = null;
let celebratedTaskId = null;
let activeGuideTaskId = null;

const dayIcons = ["🚗", "🛣️", "🅿️", "🚦", "🏁"];
const GUIDE_CONTENTS = {
  "day1-item1": [
    "guide/guide/Day1/Item1_운전자세/Content1.png",
    "guide/guide/Day1/Item1_운전자세/Content2.png",
    "guide/guide/Day1/Item1_운전자세/Content3.png",
    "guide/guide/Day1/Item1_운전자세/Content4.png",
    "guide/guide/Day1/Item1_운전자세/Content5.png",
    "guide/guide/Day1/Item1_운전자세/Content6.png",
  ],
  "day1-item2": [
    "guide/guide/Day1/Item2_미러조정/Content1.png",
    "guide/guide/Day1/Item2_미러조정/Content2.png",
    "guide/guide/Day1/Item2_미러조정/Content3.png",
    "guide/guide/Day1/Item2_미러조정/Content4.png",
  ],
  "day1-item3": [
    "guide/guide/Day1/Item3_명칭과기능/Content1.png",
    "guide/guide/Day1/Item3_명칭과기능/Content2.png",
    "guide/guide/Day1/Item3_명칭과기능/Content3.png",
    "guide/guide/Day1/Item3_명칭과기능/Content4.png",
    "guide/guide/Day1/Item3_명칭과기능/Content5.png",
    "guide/guide/Day1/Item3_명칭과기능/Content6.png",
    "guide/guide/Day1/Item3_명칭과기능/Content7.png",
  ],
  "day1-item4": [
    "guide/guide/Day1/Item4_기어변속/Content1.png",
    "guide/guide/Day1/Item4_기어변속/Content2.png",
    "guide/guide/Day1/Item4_기어변속/Content3.png",
    "guide/guide/Day1/Item4_기어변속/Content4.png",
    "guide/guide/Day1/Item4_기어변속/Content5.png",
  ],
  "day1-item5": [
    "guide/guide/Day1/Item5_출발/Content1.png",
    "guide/guide/Day1/Item5_출발/Content2.png",
    "guide/guide/Day1/Item5_출발/Content3.png",
    "guide/guide/Day1/Item5_출발/Content4.png",
    "guide/guide/Day1/Item5_출발/Content5.png",
    "guide/guide/Day1/Item5_출발/Content6.png",
  ],
  "day1-item6": [
    "guide/guide/Day1/Item6_제동/Content1.png",
    "guide/guide/Day1/Item6_제동/Content2.png",
    "guide/guide/Day1/Item6_제동/Content3.png",
  ],
  "day1-item7": [
    "guide/guide/Day1/Item7_조향/Content1.png",
    "guide/guide/Day1/Item7_조향/Content2.png",
    "guide/guide/Day1/Item7_조향/Content3.gif",
  ],
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progressState));
}

function isComplete(itemId) {
  return progressState[itemId] === true;
}

function getDayCompletion(day) {
  const completed = day.items.filter((task) => isComplete(task.id)).length;
  return {
    completed,
    total: day.items.length,
    isDone: completed === day.items.length,
  };
}

function getFirstIncompleteIndex() {
  const index = curriculum.findIndex((day) => !getDayCompletion(day).isDone);
  return index === -1 ? curriculum.length - 1 : index;
}

function getDayState(day) {
  const index = curriculum.findIndex((entry) => entry.id === day.id);
  const status = getDayCompletion(day);
  const firstIncompleteIndex = getFirstIncompleteIndex();

  if (status.isDone) {
    return "completed";
  }

  if (index === firstIncompleteIndex || status.completed > 0) {
    return "active";
  }

  return "available";
}

function renderCurriculum() {
  elements.totalCount.textContent = totalItems;
  renderDayFilter();
  elements.list.innerHTML = curriculum.map(renderDay).join("");
  elements.list.addEventListener("change", handleChecklistChange);
  elements.dayFilter.addEventListener("click", handleDayFilterClick);
  elements.list.addEventListener("click", handleDayCardClick);
  elements.tabButtons.forEach((button) => button.addEventListener("click", handleTabClick));
  elements.completeNextButton.addEventListener("click", completeNextTask);
  elements.resetProgressButton.addEventListener("click", resetProgress);
  elements.openInstallDialogButton.addEventListener("click", openInstallGuide);
  elements.installActionButton.addEventListener("click", handleInstallAction);
  elements.guideViewerClose.addEventListener("click", closeGuideViewer);
  elements.guideViewer.addEventListener("click", handleGuideBackdropClick);
  elements.guideViewer.addEventListener("close", () => document.body.classList.remove("is-guide-open"));
  elements.guideCarousel.addEventListener("scroll", updateGuidePosition);
  elements.guidePrevButton.addEventListener("click", () => moveGuideSlide(-1));
  elements.guideNextButton.addEventListener("click", () => moveGuideSlide(1));
  elements.guidePassButton.addEventListener("click", completeActiveGuideTask);
  window.addEventListener("keydown", handleGuideKeydown);
  updateProgress();
}

function renderDayFilter() {
  elements.dayFilter.innerHTML = curriculum
    .map((day, index) => {
      const state = getDayState(day);
      const isActive = day.id === expandedDayId;

      return `<button class="hero-member-filter__button${isActive ? " is-active" : ""}" type="button" data-day-filter="${day.id}">${index + 1}일</button>`;
    })
    .join("");
}

function renderDay(day) {
  const status = getDayCompletion(day);
  const state = getDayState(day);
  const doneClass = status.isDone ? " is-complete" : "";
  const isExpanded = day.id === expandedDayId;
  const selectedClass = isExpanded ? " is-selected" : "";
  const stateClass = ` course-card--${state}`;
  const ratio = Math.round((status.completed / status.total) * 100);
  const detail = isExpanded
    ? `<div class="course-detail">${day.items.map((task) => renderTask(task)).join("")}</div>`
    : "";
  const stateLabel = {
    completed: "완료됨",
    active: status.completed > 0 ? "진행중" : "시작 가능",
    available: "열람 가능",
  }[state];
  const actionLabel = {
    completed: isExpanded ? "접기" : "복습하기",
    active: isExpanded ? "접기" : status.completed > 0 ? "계속하기" : "시작하기",
    available: isExpanded ? "접기" : "살펴보기",
  }[state];
  const index = curriculum.findIndex((entry) => entry.id === day.id);

  return `
    <section class="course-card${stateClass}${doneClass}${selectedClass}" data-day-id="${day.id}" data-day-state="${state}">
      <button class="course-card__button" type="button" data-day-open="${day.id}" aria-expanded="${isExpanded}">
        <div class="course-node" aria-hidden="true">
          <span class="course-node__icon">${state === "completed" ? "✓" : dayIcons[index]}</span>
        </div>
        <div class="course-card__copy">
          <span class="day-chip">${day.day} · ${stateLabel}</span>
          <h3>${day.title}</h3>
          <p>${day.goal}</p>
          <span class="course-cta">${actionLabel}</span>
        </div>
        <div class="course-ring" style="--progress:${ratio * 3.6}deg" aria-label="${ratio}% 완료">
          <span>${ratio}%</span>
        </div>
      </button>
      <div class="course-card__meta">
        <span class="day-status" data-day-status="${day.id}">${status.completed}/${status.total} PASS</span>
        <span>${status.isDone ? "완료" : "진행 중"}</span>
      </div>
      ${detail}
    </section>
  `;
}

function renderTask(task) {
  const checked = isComplete(task.id) ? " checked" : "";
  const passed = isComplete(task.id);
  const cover = task.cover || task.preview;
  const coverMarkup = cover
    ? `<img src="${encodeURI(cover)}" alt="${task.title} 대표 자료" loading="lazy">`
    : `<span aria-hidden="true">Guide</span>`;
  const previewLink = task.preview || task.cover;
  const previewMarkup = previewLink
    ? `<button class="guide-link" type="button" data-guide-open="${task.id}">자료 보기</button>`
    : `<span class="guide-link is-disabled">자료 준비중</span>`;

  return `
    <article class="record-card${passed ? " is-passed" : ""}${celebratedTaskId === task.id ? " is-celebrating" : ""}" data-task-id="${task.id}">
      <div class="record-card__leading">
        <label class="pass-button${checked ? " is-passed" : ""}" aria-label="${task.title} PASS">
        <input type="checkbox" data-task-checkbox="${task.id}"${checked}>
          <span>${passed ? "DONE" : "PASS"}</span>
        </label>
        <div class="record-card__content">
          <span class="record-card__category">${checked ? "PASS 완료" : "가이드 항목"}</span>
          <p class="record-card__note">${task.title}</p>
          <span class="record-card__meta">${isComplete(task.id) ? "통과 처리됨" : "자료 확인 후 PASS를 누르세요"}</span>
        </div>
        <div class="guide-thumb">${coverMarkup}</div>
      </div>
      <div class="guide-link-row">
        ${previewMarkup}
      </div>
    </article>
  `;
}

function handleChecklistChange(event) {
  const checkbox = event.target.closest("[data-task-checkbox]");

  if (!checkbox) {
    return;
  }

  progressState[checkbox.dataset.taskCheckbox] = checkbox.checked;
  celebratedTaskId = checkbox.checked ? checkbox.dataset.taskCheckbox : null;
  saveProgress();
  updateProgress();

  if (celebratedTaskId) {
    window.setTimeout(() => {
      celebratedTaskId = null;
      updateProgress();
    }, 680);
  }
}

function handleDayFilterClick(event) {
  const button = event.target.closest("[data-day-filter]");

  if (!button) {
    return;
  }

  elements.dayFilter
    .querySelectorAll("[data-day-filter]")
    .forEach((filterButton) => filterButton.classList.toggle("is-active", filterButton === button));
  expandedDayId = expandedDayId === button.dataset.dayFilter ? null : button.dataset.dayFilter;
  updateProgress();
  document.querySelector(`[data-day-id="${button.dataset.dayFilter}"]`)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function handleDayCardClick(event) {
  const guideButton = event.target.closest("[data-guide-open]");

  if (guideButton) {
    openGuideViewer(guideButton.dataset.guideOpen);
    return;
  }

  const button = event.target.closest("[data-day-open]");

  if (!button) {
    return;
  }

  expandedDayId = expandedDayId === button.dataset.dayOpen ? null : button.dataset.dayOpen;
  elements.dayFilter
    .querySelectorAll("[data-day-filter]")
    .forEach((filterButton) =>
      filterButton.classList.toggle("is-active", filterButton.dataset.dayFilter === expandedDayId),
    );
  updateProgress();
}

function handleTabClick(event) {
  const button = event.currentTarget;
  const target = button.dataset.screenTarget;

  elements.tabButtons.forEach((tabButton) =>
    tabButton.classList.toggle("is-active", tabButton === button),
  );
  elements.screens.forEach((screen) =>
    screen.classList.toggle("screen--active", screen.dataset.screen === target),
  );
}

function completeNextTask() {
  const nextTask = curriculum.flatMap((day) => day.items).find((task) => !isComplete(task.id));

  if (!nextTask) {
    return;
  }

  progressState[nextTask.id] = true;
  saveProgress();
  updateProgress();
}

function resetProgress() {
  progressState = {};
  localStorage.removeItem(STORAGE_KEY);
  updateProgress();
}

function findTask(taskId) {
  for (const day of curriculum) {
    const task = day.items.find((item) => item.id === taskId);

    if (task) {
      return { day, task };
    }
  }

  return null;
}

function getGuideAssets(task) {
  const explicitAssets = GUIDE_CONTENTS[task.id] || [];
  const fallbackAssets = [task.preview, task.cover].filter(Boolean);

  return explicitAssets.length ? explicitAssets : [...new Set(fallbackAssets)];
}

function renderGuideAsset(asset, title, index) {
  const encodedAsset = encodeURI(asset);
  const pageLabel = `${title} 자료 ${index + 1}`;

  if (/\.mp4$/i.test(asset)) {
    return `
      <article class="guide-slide">
        <video src="${encodedAsset}" controls playsinline preload="metadata" aria-label="${pageLabel}"></video>
      </article>
    `;
  }

  return `
    <article class="guide-slide">
      <img src="${encodedAsset}" alt="${pageLabel}" loading="lazy">
    </article>
  `;
}

function openGuideViewer(taskId) {
  const result = findTask(taskId);

  if (!result) {
    return;
  }

  const { day, task } = result;
  const assets = getGuideAssets(task);

  activeGuideTaskId = task.id;
  elements.guideViewerDay.textContent = `${day.day} · ${day.title}`;
  elements.guideViewerTitle.textContent = task.title;
  elements.guideCarousel.innerHTML = assets.length
    ? assets.map((asset, index) => renderGuideAsset(asset, task.title, index)).join("")
    : `<article class="guide-slide guide-slide--empty"><p>준비된 자료가 없습니다.</p></article>`;
  elements.guideDots.innerHTML = assets
    .map((_, index) => `<span class="${index === 0 ? "is-active" : ""}"></span>`)
    .join("");
  elements.guidePageLabel.textContent = assets.length ? `1/${assets.length}` : "0/0";
  elements.guidePassButton.textContent = isComplete(task.id) ? "PASS 완료됨" : "학습 완료 PASS";
  elements.guidePassButton.classList.toggle("is-complete", isComplete(task.id));
  document.body.classList.add("is-guide-open");

  if (elements.guideViewer.showModal) {
    elements.guideViewer.showModal();
  }

  elements.guideCarousel.scrollTo({ left: 0, behavior: "auto" });
  updateGuidePosition();
}

function closeGuideViewer() {
  activeGuideTaskId = null;
  document.body.classList.remove("is-guide-open");
  elements.guideViewer.close();
}

function handleGuideBackdropClick(event) {
  if (event.target === elements.guideViewer) {
    closeGuideViewer();
  }
}

function getCurrentGuideIndex() {
  const width = elements.guideCarousel.clientWidth || 1;
  return Math.round(elements.guideCarousel.scrollLeft / width);
}

function updateGuidePosition() {
  const slides = [...elements.guideCarousel.querySelectorAll(".guide-slide")];
  const index = Math.min(getCurrentGuideIndex(), Math.max(slides.length - 1, 0));

  elements.guidePageLabel.textContent = slides.length ? `${index + 1}/${slides.length}` : "0/0";
  elements.guideDots
    .querySelectorAll("span")
    .forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
  elements.guidePrevButton.disabled = index <= 0;
  elements.guideNextButton.disabled = index >= slides.length - 1;
}

function moveGuideSlide(direction) {
  const width = elements.guideCarousel.clientWidth;

  elements.guideCarousel.scrollBy({
    left: width * direction,
    behavior: "smooth",
  });
}

function completeActiveGuideTask() {
  if (!activeGuideTaskId) {
    return;
  }

  progressState[activeGuideTaskId] = true;
  celebratedTaskId = activeGuideTaskId;
  saveProgress();
  elements.guidePassButton.textContent = "PASS 완료됨";
  elements.guidePassButton.classList.add("is-complete");
  updateProgress();

  window.setTimeout(() => {
    celebratedTaskId = null;
    updateProgress();
  }, 680);
}

function handleGuideKeydown(event) {
  if (!elements.guideViewer.open) {
    return;
  }

  if (event.key === "ArrowLeft") {
    moveGuideSlide(-1);
  }

  if (event.key === "ArrowRight") {
    moveGuideSlide(1);
  }
}

function updateProgress() {
  const completed = curriculum.reduce(
    (sum, day) => sum + day.items.filter((task) => isComplete(task.id)).length,
    0,
  );
  const percent = Math.round((completed / totalItems) * 100);
  const completedDays = curriculum.filter((day) => getDayCompletion(day).isDone).length;

  elements.completedCount.textContent = completed;
  elements.completedDaysCount.textContent = `${completedDays}/${curriculum.length}`;
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressFill.style.width = `${percent}%`;
  elements.settingsProgressLabel.textContent = `${completed}/${totalItems} 항목 완료`;
  elements.settingsProgressFill.style.width = `${percent}%`;
  elements.saveStatusLabel.textContent = completed > 0 ? "저장 완료" : "로컬 저장";

  renderDayFilter();
  elements.list.innerHTML = curriculum.map(renderDay).join("");
}

function updateConnectionStatus() {
  const isOnline = navigator.onLine;

  elements.connectionStatus.textContent = isOnline ? "온라인 상태" : "오프라인 상태";
  elements.connectionDot.classList.toggle("is-online", isOnline);
  elements.connectionDot.classList.toggle("is-offline", !isOnline);
}

renderCurriculum();

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
updateConnectionStatus();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  elements.installDescription.textContent = "이 브라우저에서는 전운보초를 바로 설치할 수 있습니다.";
  elements.installActionButton.textContent = "설치하기";
});

function openInstallGuide() {
  const canPrompt = Boolean(deferredInstallPrompt);

  elements.installActionButton.textContent = canPrompt ? "설치하기" : "확인";
  elements.installDescription.textContent = canPrompt
    ? "설치 버튼을 누르면 브라우저 설치 확인창이 열립니다."
    : "iPhone/iPad에서는 공유 버튼을 누른 뒤 '홈 화면에 추가'를 선택하세요. Android Chrome에서는 브라우저 메뉴의 '앱 설치'를 선택할 수 있습니다.";
  elements.installSteps.innerHTML = canPrompt
    ? "<li>설치하기 버튼을 누릅니다.</li><li>브라우저 확인창에서 설치를 선택합니다.</li><li>홈 화면의 전운보초 아이콘으로 실행합니다.</li>"
    : "<li>브라우저 하단 또는 상단의 공유/메뉴 버튼을 엽니다.</li><li>'홈 화면에 추가' 또는 '앱 설치'를 선택합니다.</li><li>전운보초 아이콘을 확인하고 추가합니다.</li>";

  if (elements.installDialog.showModal) {
    elements.installDialog.showModal();
  }
}

async function handleInstallAction(event) {
  if (!deferredInstallPrompt) {
    return;
  }

  event.preventDefault();
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  elements.installDialog.close();
}
