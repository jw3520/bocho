const STORAGE_KEY = "jeonwoon-bocho-progress-v1";
const PASS_DATE_STORAGE_KEY = "jeonwoon-bocho-pass-dates-v1";
const ONBOARDING_KEY = "jeonwoon-bocho-onboarding-v1";
const SESSION_KEY = "jeonwoon-bocho-session-v1";
const UPDATE_SEEN_STORAGE_KEY = "BOCHO_UPDATE_SEEN";
const LAST_UPDATE_CHECK_STORAGE_KEY = "BOCHO_LAST_UPDATE_CHECK";
const UPDATE_BANNER_TOKEN_STORAGE_KEY = "BOCHO_UPDATE_TOKEN";
const UPDATE_BANNER_DISMISSED_STORAGE_KEY = "BOCHO_UPDATE_BANNER_DISMISSED";
const APP_VERSION = "1.00.62";
const UPDATE_CHECK_ASSETS = ["/index.html", "/app.js", "/styles.css", "/service-worker.js"];

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
  calendarKicker: document.querySelector("#calendar-kicker"),
  calendarTitle: document.querySelector("#calendar-title"),
  calendarToggle: document.querySelector("#calendar-toggle"),
  calendarMonthPicker: document.querySelector("#calendar-month-picker"),
  calendarPickerPreview: document.querySelector("#calendar-picker-preview"),
  calendarYearWheel: document.querySelector("#calendar-year-wheel"),
  calendarMonthGrid: document.querySelector("#calendar-month-grid"),
  calendarPickerApply: document.querySelector("#calendar-picker-apply"),
  calendarPickerClose: document.querySelector("#calendar-picker-close"),
  calendarPrevPeriod: document.querySelector("#calendar-prev-period"),
  calendarNextPeriod: document.querySelector("#calendar-next-period"),
  calendarTodayButton: document.querySelector("#calendar-today-button"),
  calendarGrid: document.querySelector("#calendar-grid"),
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
  logoutButton: document.querySelector("#logout-button"),
  mainUpdateBanner: document.querySelector("#main-update-banner"),
  applyUpdateBannerButton: document.querySelector("#apply-update-banner-button"),
  dismissUpdateBannerButton: document.querySelector("#dismiss-update-banner-button"),
  clearWebCacheButton: document.querySelector("#clear-web-cache-button"),
  settingsUpdateBadge: document.querySelector("#settings-update-badge"),
  updateVersionLabel: document.querySelector("#update-version-label"),
  updateTimeLabel: document.querySelector("#update-time-label"),
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
  onboardingFlow: document.querySelector("#onboarding-flow"),
  appShell: document.querySelector("#app-shell"),
  onboardingScreens: [...document.querySelectorAll("[data-onboarding-step]")],
  startButton: document.querySelector("[data-onboarding-next='role']"),
  mockLoginButton: document.querySelector("#mock-login-button"),
  roleButtons: [...document.querySelectorAll("[data-role-option]")],
  genderButtons: [...document.querySelectorAll("[data-gender-option]")],
  nicknameInput: document.querySelector("#nickname-input"),
  nicknameSuggestButton: document.querySelector("#nickname-suggest-button"),
  finishOnboardingButton: document.querySelector("#finish-onboarding-button"),
  homeRoleLabel: document.querySelector("#home-role-label"),
  homeGreeting: document.querySelector("#home-greeting"),
  homeSubtitle: document.querySelector("#home-subtitle"),
};

const totalItems = curriculum.reduce((sum, day) => sum + day.items.length, 0);
let progressState = loadProgress();
let passDateState = loadPassDates();
let expandedDayId = null;
let isCalendarExpanded = false;
let calendarDisplayDate = new Date();
let deferredInstallPrompt = null;
let celebratedTaskId = null;
let activeGuideTaskId = null;
let swRegistrationRef = null;
let reloadingForServiceWorker = false;
let onboardingDraft = loadOnboarding() || {
  step: "welcome",
  role: "",
  gender: "",
  nickname: "",
  completed: false,
};
const pwaUpdateState = {
  updateAvailable: localStorage.getItem(UPDATE_SEEN_STORAGE_KEY) === "1",
  updateToken: localStorage.getItem(UPDATE_BANNER_TOKEN_STORAGE_KEY) || "",
  lastUpdateCheckedAt: Number(localStorage.getItem(LAST_UPDATE_CHECK_STORAGE_KEY) || 0),
  currentScreen: "curriculum",
};

const dayNumbers = ["1", "2", "3", "4", "5"];
const ROAD_VIEWBOX = { width: 390, height: 220 };
const ROAD_DAY_PROGRESS_POINTS = [0, 20, 42, 62, 82];
const ROAD_PATH_D =
  "M52 100 C70 47 112 36 146 70 C182 101 114 124 129 162 C168 199 238 165 242 114 C240 64 300 30 334 50 C366 66 364 96 364 112";
const ROAD_PATH_SEGMENTS = [
  {
    start: { x: 52, y: 100 },
    control1: { x: 70, y: 47 },
    control2: { x: 112, y: 36 },
    end: { x: 146, y: 70 },
  },
  {
    start: { x: 146, y: 70 },
    control1: { x: 182, y: 101 },
    control2: { x: 114, y: 124 },
    end: { x: 129, y: 162 },
  },
  {
    start: { x: 129, y: 162 },
    control1: { x: 168, y: 199 },
    control2: { x: 238, y: 165 },
    end: { x: 242, y: 114 },
  },
  {
    start: { x: 242, y: 114 },
    control1: { x: 240, y: 64 },
    control2: { x: 300, y: 30 },
    end: { x: 334, y: 50 },
  },
  {
    start: { x: 334, y: 50 },
    control1: { x: 366, y: 66 },
    control2: { x: 364, y: 96 },
    end: { x: 364, y: 112 },
  },
];
const roleCopy = {
  closet: {
    label: "장롱면허 · 완전 기초형",
    title: "기초부터 다시 잡는 연수 코스",
    subtitle: "조작법과 감각을 천천히 되찾는 흐름으로 준비했어요.",
  },
  beginner: {
    label: "초보운전 · 실전 주행형",
    title: "오늘도 한 단계 더 당당하게",
    subtitle: "실전 주행에서 바로 쓸 수 있는 감각을 쌓아보세요.",
  },
  coach: {
    label: "지도자 · 서포터형",
    title: "연수 지도 가이드를 시작해볼까요?",
    subtitle: "초보 운전자가 안전하게 익힐 수 있도록 단계별로 확인하세요.",
  },
  guest: {
    label: "게스트 모드",
    title: "오늘의 연수를 시작할까요?",
    subtitle: "오늘도 하나씩 눌러가며 실전 감각을 올려봐요.",
  },
};
const nicknameSuggestions = [
  "도로연습러",
  "차선연습러",
  "주차연습러",
  "안전주행러",
  "실전연습러",
  "도로적응중",
];
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

function loadPassDates() {
  try {
    const saved = JSON.parse(localStorage.getItem(PASS_DATE_STORAGE_KEY));
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function loadOnboarding() {
  try {
    const saved = JSON.parse(localStorage.getItem(ONBOARDING_KEY));
    return saved && typeof saved === "object" ? saved : null;
  } catch {
    return null;
  }
}

function saveOnboarding() {
  localStorage.setItem(ONBOARDING_KEY, JSON.stringify(onboardingDraft));
}

function hasSavedProfile() {
  const profile = loadOnboarding();
  return Boolean(profile?.completed && profile.nickname);
}

function hasActiveSession() {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY));
    return Boolean(session?.active);
  } catch {
    return false;
  }
}

function setActiveSession(active) {
  if (active) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ active: true, updatedAt: Date.now() }));
    return;
  }

  localStorage.removeItem(SESSION_KEY);
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progressState));
}

function savePassDates() {
  localStorage.setItem(PASS_DATE_STORAGE_KEY, JSON.stringify(passDateState));
}

function isComplete(itemId) {
  return progressState[itemId] === true;
}

function syncTaskPassDate(taskId, isPassed) {
  if (isPassed) {
    passDateState[taskId] = passDateState[taskId] || toDateInputValue(new Date());
    return;
  }

  delete passDateState[taskId];
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
  if (elements.totalCount) {
    elements.totalCount.textContent = totalItems;
  }
  renderCalendar();
  renderDayFilter();
  elements.list.innerHTML = renderRoadExperience();
  elements.startButton.addEventListener("click", startNewProfile);
  elements.mockLoginButton.addEventListener("click", loginWithSavedProfile);
  elements.roleButtons.forEach((button) => button.addEventListener("click", handleRoleSelect));
  elements.genderButtons.forEach((button) => button.addEventListener("click", handleGenderSelect));
  elements.nicknameSuggestButton.addEventListener("click", suggestNickname);
  elements.finishOnboardingButton.addEventListener("click", finishOnboarding);
  elements.nicknameInput.addEventListener("input", handleNicknameInput);
  elements.list.addEventListener("change", handleChecklistChange);
  elements.calendarToggle?.addEventListener("click", toggleCalendar);
  elements.calendarKicker?.addEventListener("click", toggleMonthPicker);
  elements.calendarMonthPicker?.addEventListener("click", handleMonthPickerClick);
  elements.calendarPickerApply?.addEventListener("click", applyMonthPicker);
  elements.calendarPickerClose?.addEventListener("click", closeMonthPicker);
  document.addEventListener("click", closeMonthPickerOnOutsideClick);
  elements.calendarPrevPeriod?.addEventListener("click", () => moveCalendarPeriod(-1));
  elements.calendarNextPeriod?.addEventListener("click", () => moveCalendarPeriod(1));
  elements.calendarTodayButton?.addEventListener("click", resetCalendarToToday);
  elements.dayFilter?.addEventListener("click", handleDayFilterClick);
  elements.list.addEventListener("click", handleDayCardClick);
  elements.tabButtons.forEach((button) => button.addEventListener("click", handleTabClick));
  elements.completeNextButton.addEventListener("click", shareProgress);
  elements.resetProgressButton.addEventListener("click", resetProgress);
  elements.logoutButton.addEventListener("click", logout);
  elements.dismissUpdateBannerButton.addEventListener("click", dismissMainUpdateBanner);
  elements.applyUpdateBannerButton.addEventListener("click", openSettingsForUpdate);
  elements.clearWebCacheButton.addEventListener("click", clearWebCacheAndReload);
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
  initOnboarding();
  syncUpdateUi();
  updateProgress();
}

function initOnboarding() {
  if (hasSavedProfile() && hasActiveSession()) {
    onboardingDraft = loadOnboarding();
    showAppShell();
    return;
  }

  setActiveSession(false);
  elements.appShell.hidden = true;
  elements.onboardingFlow.hidden = false;
  onboardingDraft = loadOnboarding() || onboardingDraft;
  updateWelcomeActions();
  reflectOnboardingDraft();
  showOnboardingStep("welcome");
}

function reflectOnboardingDraft() {
  elements.roleButtons.forEach((button) =>
    button.classList.toggle("is-selected", button.dataset.roleOption === onboardingDraft.role),
  );
  elements.genderButtons.forEach((button) =>
    button.classList.toggle("is-selected", button.dataset.genderOption === onboardingDraft.gender),
  );
  elements.nicknameInput.value = onboardingDraft.nickname || "";
  handleNicknameInput();
}

function showOnboardingStep(step) {
  onboardingDraft.step = step;
  elements.onboardingScreens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.onboardingStep === step);
  });
  saveOnboarding();
}

function updateWelcomeActions() {
  const hasProfile = hasSavedProfile();

  elements.startButton.textContent = hasProfile ? "새로 시작하기" : "시작하기";
  elements.mockLoginButton.textContent = hasProfile
    ? "이어서 로그인"
    : "이미 계정이 있다면? 로그인";
}

function handleRoleSelect(event) {
  onboardingDraft.role = event.currentTarget.dataset.roleOption;
  elements.roleButtons.forEach((button) =>
    button.classList.toggle("is-selected", button === event.currentTarget),
  );
  showOnboardingStep("gender");
}

function handleGenderSelect(event) {
  onboardingDraft.gender = event.currentTarget.dataset.genderOption;
  elements.genderButtons.forEach((button) =>
    button.classList.toggle("is-selected", button === event.currentTarget),
  );
  showOnboardingStep("nickname");
  elements.nicknameInput.focus();
}

function handleNicknameInput() {
  onboardingDraft.nickname = elements.nicknameInput.value.trim();
  elements.finishOnboardingButton.disabled = onboardingDraft.nickname.length < 2;
  saveOnboarding();
}

function resetOnboardingDraft() {
  onboardingDraft = {
    step: "welcome",
    role: "",
    gender: "",
    nickname: "",
    completed: false,
  };
  elements.nicknameInput.value = "";
  reflectOnboardingDraft();
}

function startNewProfile() {
  if (hasSavedProfile()) {
    const confirmed = window.confirm(
      "기존 저장된 데이터가 있습니다. 새로 시작하면 기존 데이터가 삭제됩니다. 계속하시겠습니까?",
    );

    if (!confirmed) {
      return;
    }

    localStorage.removeItem(ONBOARDING_KEY);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PASS_DATE_STORAGE_KEY);
    setActiveSession(false);
    progressState = {};
    passDateState = {};
    resetOnboardingDraft();
    updateWelcomeActions();
    updateProgress();
  }

  showOnboardingStep("role");
}

function loginWithSavedProfile() {
  const savedProfile = loadOnboarding();

  if (!savedProfile?.completed) {
    window.alert("저장된 계정 정보가 없습니다. 새로 시작해주세요.");
    return;
  }

  onboardingDraft = savedProfile;
  progressState = loadProgress();
  passDateState = loadPassDates();
  setActiveSession(true);
  showAppShell();
}

function suggestNickname() {
  const roleIndex = ["closet", "beginner", "coach"].indexOf(onboardingDraft.role);
  const genderOffset = onboardingDraft.gender === "female" ? 1 : 0;
  const suggestion = nicknameSuggestions[Math.max(roleIndex, 0) + genderOffset] || nicknameSuggestions[0];

  elements.nicknameInput.value = suggestion;
  elements.nicknameInput.dispatchEvent(new Event("input"));
  elements.nicknameInput.focus();
}

function finishOnboarding() {
  const nickname = elements.nicknameInput.value.trim();

  if (!onboardingDraft.role || !onboardingDraft.gender || nickname.length < 2) {
    return;
  }

  onboardingDraft.nickname = nickname;
  onboardingDraft.completed = true;
  onboardingDraft.step = "done";
  saveOnboarding();
  setActiveSession(true);
  showAppShell();
}

function skipOnboarding() {
  onboardingDraft = {
    role: "guest",
    gender: "unknown",
    nickname: "게스트",
    completed: true,
    step: "done",
  };
  saveOnboarding();
  setActiveSession(true);
  showAppShell();
}

function showAppShell() {
  elements.onboardingFlow.hidden = true;
  elements.appShell.hidden = false;
  updateHomeProfile();
  updateProgress();
}

function logout() {
  setActiveSession(false);
  closeGuideViewerIfOpen();
  elements.screens.forEach((screen) =>
    screen.classList.toggle("screen--active", screen.dataset.screen === "curriculum"),
  );
  elements.tabButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.screenTarget === "curriculum"),
  );
  elements.appShell.hidden = true;
  elements.onboardingFlow.hidden = false;
  updateWelcomeActions();
  showOnboardingStep("welcome");
}

function closeGuideViewerIfOpen() {
  if (elements.guideViewer.open) {
    closeGuideViewer();
  }
}

function updateHomeProfile() {
  const profile = loadOnboarding() || onboardingDraft;
  const copy = roleCopy[profile.role] || roleCopy.guest;
  const nickname = profile.nickname || "운전자";

  if (elements.homeRoleLabel) {
    elements.homeRoleLabel.textContent = copy.label;
  }

  if (elements.homeGreeting) {
    elements.homeGreeting.textContent = `${nickname}님, ${copy.title}`;
  }

  if (elements.homeSubtitle) {
    elements.homeSubtitle.textContent = copy.subtitle;
  }
}

function renderDayFilter() {
  ensureSelectedDay();
  if (!elements.dayFilter) {
    return;
  }

  elements.dayFilter.innerHTML = curriculum
    .map((day, index) => {
      const state = getDayState(day);
      const isActive = day.id === expandedDayId;

      return `<button class="hero-member-filter__button${isActive ? " is-active" : ""}" type="button" data-day-filter="${day.id}">${index + 1}일</button>`;
    })
    .join("");
}

function toggleCalendar() {
  isCalendarExpanded = !isCalendarExpanded;
  closeMonthPicker();
  renderCalendar();
}

function renderCalendar() {
  if (!elements.calendarGrid) {
    return;
  }

  const today = new Date();
  const baseMonth = calendarDisplayDate;
  const visibleDates = isCalendarExpanded ? getMonthDates(baseMonth) : getWeekDates(calendarDisplayDate);

  elements.calendarTitle.hidden = true;
  elements.calendarKicker.textContent = isCalendarExpanded ? getMonthLabel(baseMonth) : getWeekLabel(calendarDisplayDate);
  elements.calendarKicker.setAttribute("aria-expanded", String(!elements.calendarMonthPicker?.hidden));
  elements.calendarKicker.classList.toggle("is-month-mode", isCalendarExpanded);
  elements.calendarToggle?.setAttribute("aria-expanded", String(isCalendarExpanded));
  elements.calendarToggle?.setAttribute("aria-label", isCalendarExpanded ? "달력 접기" : "달력 펼치기");
  elements.calendarToggle?.classList.toggle("is-expanded", isCalendarExpanded);
  renderMonthPickerOptions(baseMonth);

  elements.calendarGrid.classList.toggle("is-month", isCalendarExpanded);
  elements.calendarGrid.innerHTML = visibleDates.map((date) => renderCalendarDay(date, baseMonth, today)).join("");
}

function renderMonthPickerOptions(baseDate) {
  if (!elements.calendarYearWheel || !elements.calendarMonthGrid || !elements.calendarMonthPicker) {
    return;
  }

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 3;
  const endYear = currentYear + 3;
  const years = [];
  const draftYear = Number(elements.calendarMonthPicker.dataset.year || baseDate.getFullYear());
  const draftMonth = Number(elements.calendarMonthPicker.dataset.month || baseDate.getMonth());

  for (let year = startYear; year <= endYear; year += 1) {
    years.push(`
      <button class="calendar-year-option${year === draftYear ? " is-selected" : ""}" type="button" data-picker-year="${year}" aria-pressed="${year === draftYear}">
        ${year}
      </button>
    `);
  }

  elements.calendarYearWheel.innerHTML = years.join("");
  elements.calendarMonthGrid.innerHTML = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    return `
      <button class="calendar-month-option${index === draftMonth ? " is-selected" : ""}" type="button" data-picker-month="${index}" aria-pressed="${index === draftMonth}">
        ${month}월
      </button>
    `;
  }).join("");
  updateMonthPickerPreview();

  window.requestAnimationFrame(() => {
    elements.calendarYearWheel
      ?.querySelector(".calendar-year-option.is-selected")
      ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  });
}

function toggleMonthPicker(event) {
  event.stopPropagation();

  if (!isCalendarExpanded || !elements.calendarMonthPicker) {
    return;
  }

  if (elements.calendarMonthPicker.hidden) {
    elements.calendarMonthPicker.dataset.year = String(calendarDisplayDate.getFullYear());
    elements.calendarMonthPicker.dataset.month = String(calendarDisplayDate.getMonth());
    renderMonthPickerOptions(calendarDisplayDate);
  }

  elements.calendarMonthPicker.hidden = !elements.calendarMonthPicker.hidden;
  elements.calendarKicker?.setAttribute("aria-expanded", String(!elements.calendarMonthPicker.hidden));
}

function closeMonthPicker() {
  if (!elements.calendarMonthPicker) {
    return;
  }

  elements.calendarMonthPicker.hidden = true;
  elements.calendarKicker?.setAttribute("aria-expanded", "false");
}

function closeMonthPickerOnOutsideClick(event) {
  if (
    elements.calendarMonthPicker?.hidden ||
    event.target.closest("#calendar-month-picker") ||
    event.target.closest("#calendar-kicker")
  ) {
    return;
  }

  closeMonthPicker();
}

function handleMonthPickerClick(event) {
  const yearButton = event.target.closest("[data-picker-year]");
  const monthButton = event.target.closest("[data-picker-month]");

  if (!elements.calendarMonthPicker || (!yearButton && !monthButton)) {
    return;
  }

  event.stopPropagation();

  if (yearButton) {
    elements.calendarMonthPicker.dataset.year = yearButton.dataset.pickerYear;
  }

  if (monthButton) {
    elements.calendarMonthPicker.dataset.month = monthButton.dataset.pickerMonth;
  }

  renderMonthPickerOptions(calendarDisplayDate);
}

function updateMonthPickerPreview() {
  if (!elements.calendarPickerPreview || !elements.calendarMonthPicker) {
    return;
  }

  const year = Number(elements.calendarMonthPicker.dataset.year || calendarDisplayDate.getFullYear());
  const month = Number(elements.calendarMonthPicker.dataset.month || calendarDisplayDate.getMonth()) + 1;
  elements.calendarPickerPreview.textContent = `${year}년 ${month}월`;
}

function applyMonthPicker(event) {
  event.stopPropagation();

  const year = Number(elements.calendarMonthPicker?.dataset.year || calendarDisplayDate.getFullYear());
  const month = Number(elements.calendarMonthPicker?.dataset.month || calendarDisplayDate.getMonth());
  calendarDisplayDate = new Date(year, month, 1);
  closeMonthPicker();
  renderCalendar();
}

function getWeekLabel(baseDate) {
  const weekStart = getWeekDates(baseDate)[0];
  const monthStart = new Date(weekStart.getFullYear(), weekStart.getMonth(), 1);
  const monthStartDay = monthStart.getDay();
  const firstWeekStart = new Date(monthStart);
  firstWeekStart.setDate(monthStart.getDate() - monthStartDay);
  const diffDays = Math.round((weekStart - firstWeekStart) / 86400000);
  const weekNumber = Math.floor(diffDays / 7) + 1;

  return `${weekStart.getMonth() + 1}월 ${weekNumber}주차`;
}

function getMonthLabel(baseDate) {
  return `${baseDate.getFullYear()}년 ${baseDate.getMonth() + 1}월`;
}

function renderCalendarDay(date, baseMonth, today) {
  const isCurrentMonth = date.getMonth() === baseMonth.getMonth();
  const isToday = isSameDate(date, today);
  const dateValue = toDateInputValue(date);
  const hasPassMark = hasPassOnDate(dateValue);
  const dateLabel = `${date.getMonth() + 1}월 ${date.getDate()}일`;

  return `
    <time class="calendar-day${isToday ? " is-today" : ""}${isCurrentMonth ? "" : " is-muted"}${hasPassMark ? " has-pass-mark" : ""}" datetime="${dateValue}" aria-label="${dateLabel}${hasPassMark ? " PASS 기록 있음" : ""}">
      <span>${date.getDate()}</span>
    </time>
  `;
}

function hasPassOnDate(dateValue) {
  return curriculum.some((day) =>
    day.items.some((task) => isComplete(task.id) && passDateState[task.id] === dateValue),
  );
}

function getWeekDates(baseDate) {
  const sunday = new Date(baseDate);
  sunday.setDate(sunday.getDate() - sunday.getDay());

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(sunday);
    date.setDate(sunday.getDate() + index);
    return date;
  });
}

function getMonthDates(baseDate) {
  const firstDay = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1);
  const lastDay = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0);
  const start = new Date(firstDay);
  const firstWeekday = start.getDay();
  start.setDate(start.getDate() - firstWeekday);

  const end = new Date(lastDay);
  const lastWeekday = end.getDay();
  end.setDate(end.getDate() + (6 - lastWeekday));

  const dates = [];
  const cursor = new Date(start);

  while (cursor <= end) {
    dates.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}

function isSameDate(date, otherDate) {
  return (
    date.getFullYear() === otherDate.getFullYear() &&
    date.getMonth() === otherDate.getMonth() &&
    date.getDate() === otherDate.getDate()
  );
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function ensureSelectedDay() {
  if (expandedDayId && curriculum.some((day) => day.id === expandedDayId)) {
    return;
  }

  expandedDayId = curriculum[getFirstIncompleteIndex()]?.id || curriculum[0]?.id || null;
}

function renderRoadExperience() {
  ensureSelectedDay();
  const selectedDay = curriculum.find((day) => day.id === expandedDayId) || curriculum[0];
  const mapPoints = ROAD_DAY_PROGRESS_POINTS.map((progress) => getRoadPathPosition(progress));
  const finishPoint = getRoadPathPosition(100);
  const completedItems = curriculum.reduce(
    (sum, day) => sum + day.items.filter((task) => isComplete(task.id)).length,
    0,
  );
  const totalProgress = Math.round((completedItems / totalItems) * 100);
  const roadProgress = Math.max(4, totalProgress);
  const carPosition = getRoadPathPosition(totalProgress);

  return `
    <section class="road-course" aria-label="Day별 주행 코스">
      <div class="progress-map-card">
        <div class="progress-map-stage" style="--car-x:${carPosition.x}%; --car-y:${carPosition.y}%; --car-angle:${carPosition.angle}deg; --flag-x:${finishPoint.x}%; --flag-y:${finishPoint.y}%;">
          <svg class="progress-map-road" viewBox="0 0 ${ROAD_VIEWBOX.width} ${ROAD_VIEWBOX.height}" aria-hidden="true">
            <path class="progress-map-road__shadow" d="${ROAD_PATH_D}"></path>
            <path class="progress-map-road__base" d="${ROAD_PATH_D}"></path>
            <path class="progress-map-road__progress" pathLength="100" style="stroke-dasharray:${roadProgress} 100" d="${ROAD_PATH_D}"></path>
            <path class="progress-map-road__dash" d="${ROAD_PATH_D}"></path>
          </svg>
          <div class="progress-map-finish" aria-hidden="true"><span></span></div>
          <div class="progress-map-car" aria-hidden="true">
            <span class="progress-map-car__cabin"></span>
            <span class="progress-map-car__wheel progress-map-car__wheel--front-left"></span>
            <span class="progress-map-car__wheel progress-map-car__wheel--front-right"></span>
            <span class="progress-map-car__wheel progress-map-car__wheel--rear-left"></span>
            <span class="progress-map-car__wheel progress-map-car__wheel--rear-right"></span>
          </div>
          <div class="progress-map-nodes">
            ${curriculum.map((day, index) => renderRoadDayNode(day, index, mapPoints[index])).join("")}
          </div>
        </div>
      </div>
    </section>
    ${renderSelectedDayPanel(selectedDay)}
  `;
}

function getRoadPathPosition(progress) {
  const samples = sampleRoadPath();
  const clamped = Math.max(0, Math.min(progress, 100));
  const targetLength = samples.totalLength * (clamped / 100);
  const target =
    samples.points.find((point) => point.length >= targetLength) ||
    samples.points[samples.points.length - 1];
  const previous = samples.points[Math.max(0, samples.points.indexOf(target) - 1)] || target;
  const deltaX = target.x - previous.x;
  const deltaY = target.y - previous.y;
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  return {
    x: (target.x / ROAD_VIEWBOX.width) * 100,
    y: (target.y / ROAD_VIEWBOX.height) * 100,
    angle,
  };
}

function sampleRoadPath() {
  const points = [];
  let totalLength = 0;
  let previous = ROAD_PATH_SEGMENTS[0].start;
  points.push({ ...previous, length: 0 });

  for (const segment of ROAD_PATH_SEGMENTS) {
    for (let step = 1; step <= 60; step += 1) {
      const point = getCubicBezierPoint(segment, step / 60);
      totalLength += Math.hypot(point.x - previous.x, point.y - previous.y);
      points.push({ ...point, length: totalLength });
      previous = point;
    }
  }

  return { points, totalLength };
}

function getCubicBezierPoint(segment, t) {
  const oneMinusT = 1 - t;
  const startWeight = oneMinusT ** 3;
  const control1Weight = 3 * oneMinusT ** 2 * t;
  const control2Weight = 3 * oneMinusT * t ** 2;
  const endWeight = t ** 3;

  return {
    x:
      startWeight * segment.start.x +
      control1Weight * segment.control1.x +
      control2Weight * segment.control2.x +
      endWeight * segment.end.x,
    y:
      startWeight * segment.start.y +
      control1Weight * segment.control1.y +
      control2Weight * segment.control2.y +
      endWeight * segment.end.y,
  };
}

function renderRoadDayNode(day, index, point) {
  const status = getDayCompletion(day);
  const state = getDayState(day);
  const ratio = Math.round((status.completed / status.total) * 100);
  const ringColor = getDayRingColor(ratio);
  const doneClass = status.isDone ? " is-complete" : "";
  const isExpanded = day.id === expandedDayId;
  const selectedClass = isExpanded ? " is-selected" : "";
  const stateClass = ` progress-map-node--${state}`;

  return `
    <article class="progress-map-node${stateClass}${doneClass}${selectedClass}" data-map-day-id="${day.id}" style="--node-x:${point.x}%; --node-y:${point.y}%; --day-progress:${ratio * 3.6}deg; --day-ring-color:${ringColor};">
      <button class="progress-map-node__button" type="button" data-day-open="${day.id}" aria-pressed="${isExpanded}" aria-label="${day.day} ${day.title}">
        <span class="day-progress-circle">${ratio}%</span>
      </button>
      <small>${day.day}</small>
    </article>
  `;
}

function getDayRingColor(ratio) {
  if (ratio === 100) {
    return "#4db6ac";
  }

  return ratio >= 50 ? "#8ccf5e" : "#f2c94c";
}

function renderSelectedDayPanel(day) {
  const status = getDayCompletion(day);
  const state = getDayState(day);
  const ratio = Math.round((status.completed / status.total) * 100);
  const stateLabel = {
    completed: "완료됨",
    active: status.completed > 0 ? "진행중" : "시작 가능",
    available: "열람 가능",
  }[state];

  return `
    <section class="drive-detail-panel" data-selected-day="${day.id}">
      <div class="drive-detail-panel__header">
        <div>
          <span class="day-chip">${day.day} · ${stateLabel}</span>
          <h3>${day.day}: ${day.title}</h3>
          <p>${day.goal}</p>
        </div>
        <span class="day-progress-text" aria-label="${ratio}% 완료">${ratio}% 완료</span>
      </div>
      <div class="course-card__meta">
        <span class="day-status" data-day-status="${day.id}">${status.completed}/${status.total} PASS</span>
        <span>모든 Day 열람 가능</span>
      </div>
      <div class="course-detail">${day.items.map((task) => renderTask(task)).join("")}</div>
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

  const taskId = checkbox.dataset.taskCheckbox;
  progressState[taskId] = checkbox.checked;
  syncTaskPassDate(taskId, checkbox.checked);
  savePassDates();
  celebratedTaskId = checkbox.checked ? taskId : null;
  saveProgress();
  updateProgressWithoutRerender(taskId);

  if (celebratedTaskId) {
    window.setTimeout(() => {
      celebratedTaskId = null;
      updateTaskCardUi(taskId);
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
  expandedDayId = button.dataset.dayFilter;
  updateProgress();
  scrollRoadDayIntoView(button.dataset.dayFilter);
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

  expandedDayId = button.dataset.dayOpen;
  elements.dayFilter
    ?.querySelectorAll("[data-day-filter]")
    .forEach((filterButton) =>
      filterButton.classList.toggle("is-active", filterButton.dataset.dayFilter === expandedDayId),
    );
  updateProgress();
  scrollRoadDayIntoView(button.dataset.dayOpen);
}

function scrollRoadDayIntoView(dayId) {
  window.requestAnimationFrame(() => {
    const scrollContainer = document.querySelector(".road-scroll");

    if (!scrollContainer) {
      return;
    }

    const day = document.querySelector(`[data-map-day-id="${dayId}"]`);

    if (!day) {
      return;
    }

    day.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  });
}

function handleTabClick(event) {
  const button = event.currentTarget;
  const target = button.dataset.screenTarget;

  pwaUpdateState.currentScreen = target;
  elements.tabButtons.forEach((tabButton) =>
    tabButton.classList.toggle("is-active", tabButton === button),
  );
  elements.screens.forEach((screen) =>
    screen.classList.toggle("screen--active", screen.dataset.screen === target),
  );
  syncUpdateUi();
}

async function shareProgress() {
  const completedItems = curriculum.reduce(
    (sum, day) => sum + day.items.filter((task) => isComplete(task.id)).length,
    0,
  );
  const percent = Math.round((completedItems / totalItems) * 100);
  const shareData = {
    title: "전운보초",
    text: `전운보초 연습 진도 ${percent}% 완료`,
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }
    }
  }

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
  }
}

function resetProgress() {
  progressState = {};
  passDateState = {};
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(PASS_DATE_STORAGE_KEY);
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
  syncTaskPassDate(activeGuideTaskId, true);
  celebratedTaskId = activeGuideTaskId;
  savePassDates();
  saveProgress();
  elements.guidePassButton.textContent = "PASS 완료됨";
  elements.guidePassButton.classList.add("is-complete");
  updateProgressWithoutRerender(activeGuideTaskId);

  window.setTimeout(() => {
    celebratedTaskId = null;
    updateTaskCardUi(activeGuideTaskId);
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
  updateProgressMetrics();
  renderCalendar();
  renderDayFilter();
  elements.list.innerHTML = renderRoadExperience();
}

function updateProgressMetrics() {
  const completed = curriculum.reduce(
    (sum, day) => sum + day.items.filter((task) => isComplete(task.id)).length,
    0,
  );
  const percent = Math.round((completed / totalItems) * 100);
  const completedDays = curriculum.filter((day) => getDayCompletion(day).isDone).length;

  if (elements.completedCount) {
    elements.completedCount.textContent = completed;
  }

  if (elements.completedDaysCount) {
    elements.completedDaysCount.textContent = `${completedDays}/${curriculum.length}`;
  }

  if (elements.progressPercent) {
    elements.progressPercent.textContent = `${percent}%`;
  }

  if (elements.progressFill) {
    elements.progressFill.style.width = `${percent}%`;
  }

  if (elements.settingsProgressLabel) {
    elements.settingsProgressLabel.textContent = `${completed}/${totalItems} 항목 완료`;
  }

  if (elements.settingsProgressFill) {
    elements.settingsProgressFill.style.width = `${percent}%`;
  }

  if (elements.saveStatusLabel) {
    elements.saveStatusLabel.textContent = completed > 0 ? "저장 완료" : "로컬 저장";
  }

  return { completed, percent, completedDays };
}

function updateProgressWithoutRerender(taskId) {
  updateProgressMetrics();
  updateRoadMapUi();
  updateSelectedDayPanelUi();
  renderCalendar();

  if (taskId) {
    updateTaskCardUi(taskId);
  }
}

function updateRoadMapUi() {
  const completedItems = curriculum.reduce(
    (sum, day) => sum + day.items.filter((task) => isComplete(task.id)).length,
    0,
  );
  const totalProgress = Math.round((completedItems / totalItems) * 100);
  const roadProgress = Math.max(4, totalProgress);
  const carPosition = getRoadPathPosition(totalProgress);
  const stage = elements.list.querySelector(".progress-map-stage");
  const roadProgressPath = elements.list.querySelector(".progress-map-road__progress");

  if (stage) {
    stage.style.setProperty("--car-x", `${carPosition.x}%`);
    stage.style.setProperty("--car-y", `${carPosition.y}%`);
    stage.style.setProperty("--car-angle", `${carPosition.angle}deg`);
  }

  if (roadProgressPath) {
    roadProgressPath.style.strokeDasharray = `${roadProgress} 100`;
  }

  curriculum.forEach((day) => {
    const node = elements.list.querySelector(`[data-map-day-id="${day.id}"]`);

    if (!node) {
      return;
    }

    const status = getDayCompletion(day);
    const state = getDayState(day);
    const ratio = Math.round((status.completed / status.total) * 100);
    const button = node.querySelector(".progress-map-node__button");
    const percentLabel = node.querySelector(".day-progress-circle");

    node.classList.toggle("is-complete", status.isDone);
    node.classList.toggle("progress-map-node--completed", state === "completed");
    node.classList.toggle("progress-map-node--active", state === "active");
    node.classList.toggle("progress-map-node--available", state === "available");
    node.style.setProperty("--day-progress", `${ratio * 3.6}deg`);
    node.style.setProperty("--day-ring-color", getDayRingColor(ratio));

    if (button) {
      button.setAttribute("aria-pressed", String(day.id === expandedDayId));
    }

    if (percentLabel) {
      percentLabel.textContent = `${ratio}%`;
    }
  });
}

function updateSelectedDayPanelUi() {
  const selectedDay = curriculum.find((day) => day.id === expandedDayId);

  if (!selectedDay) {
    return;
  }

  const status = getDayCompletion(selectedDay);
  const state = getDayState(selectedDay);
  const ratio = Math.round((status.completed / status.total) * 100);
  const stateLabel = {
    completed: "완료됨",
    active: status.completed > 0 ? "진행중" : "시작 가능",
    available: "열람 가능",
  }[state];
  const chip = elements.list.querySelector(".drive-detail-panel__header .day-chip");
  const progressText = elements.list.querySelector(".day-progress-text");
  const dayStatus = elements.list.querySelector(`[data-day-status="${selectedDay.id}"]`);

  if (chip) {
    chip.textContent = `${selectedDay.day} · ${stateLabel}`;
  }

  if (progressText) {
    progressText.textContent = `${ratio}% 완료`;
    progressText.setAttribute("aria-label", `${ratio}% 완료`);
  }

  if (dayStatus) {
    dayStatus.textContent = `${status.completed}/${status.total} PASS`;
  }
}

function updateTaskCardUi(taskId) {
  const card = elements.list.querySelector(`[data-task-id="${taskId}"]`);

  if (!card) {
    return;
  }

  const passed = isComplete(taskId);
  const checkbox = card.querySelector("[data-task-checkbox]");
  const passButton = card.querySelector(".pass-button");
  const passText = passButton?.querySelector("span");
  const category = card.querySelector(".record-card__category");
  const meta = card.querySelector(".record-card__meta");

  card.classList.toggle("is-passed", passed);
  card.classList.toggle("is-celebrating", celebratedTaskId === taskId);

  if (checkbox) {
    checkbox.checked = passed;
  }

  if (passButton) {
    passButton.classList.toggle("is-passed", passed);
  }

  if (passText) {
    passText.textContent = passed ? "DONE" : "PASS";
  }

  if (category) {
    category.textContent = passed ? "PASS 완료" : "가이드 항목";
  }

  if (meta) {
    meta.textContent = passed ? "통과 처리됨" : "자료 확인 후 PASS를 누르세요";
  }
}

function updateConnectionStatus() {
  const isOnline = navigator.onLine;

  elements.connectionStatus.textContent = isOnline ? "온라인 상태" : "오프라인 상태";
  elements.connectionDot.classList.toggle("is-online", isOnline);
  elements.connectionDot.classList.toggle("is-offline", !isOnline);
}

function ensureUpdateToken() {
  if (pwaUpdateState.updateToken) {
    return pwaUpdateState.updateToken;
  }

  const stored = localStorage.getItem(UPDATE_BANNER_TOKEN_STORAGE_KEY);
  if (stored) {
    pwaUpdateState.updateToken = stored;
    return stored;
  }

  const nextToken = `update-${Date.now()}`;
  pwaUpdateState.updateToken = nextToken;
  localStorage.setItem(UPDATE_BANNER_TOKEN_STORAGE_KEY, nextToken);
  return nextToken;
}

function shouldShowMainUpdateBanner() {
  if (!pwaUpdateState.updateAvailable) {
    return false;
  }

  if (pwaUpdateState.currentScreen !== "curriculum") {
    return false;
  }

  const dismissedToken = localStorage.getItem(UPDATE_BANNER_DISMISSED_STORAGE_KEY);
  return !dismissedToken || dismissedToken !== pwaUpdateState.updateToken;
}

function showUpdateAvailableUI() {
  ensureUpdateToken();
  setUpdateAvailable(true);
}

function hideUpdateAvailableUI() {
  pwaUpdateState.updateToken = "";
  localStorage.removeItem(UPDATE_BANNER_TOKEN_STORAGE_KEY);
  localStorage.removeItem(UPDATE_BANNER_DISMISSED_STORAGE_KEY);
  setUpdateAvailable(false);
}

function setUpdateAvailable(isAvailable) {
  pwaUpdateState.updateAvailable = Boolean(isAvailable);

  if (pwaUpdateState.updateAvailable) {
    localStorage.setItem(UPDATE_SEEN_STORAGE_KEY, "1");
  } else {
    localStorage.removeItem(UPDATE_SEEN_STORAGE_KEY);
  }

  syncUpdateUi();
}

function syncUpdateUi() {
  if (elements.settingsUpdateBadge) {
    elements.settingsUpdateBadge.hidden = !pwaUpdateState.updateAvailable;
  }

  if (elements.mainUpdateBanner) {
    elements.mainUpdateBanner.classList.toggle("is-hidden", !shouldShowMainUpdateBanner());
  }

  if (elements.clearWebCacheButton) {
    elements.clearWebCacheButton.classList.toggle("primary-button", pwaUpdateState.updateAvailable);
    elements.clearWebCacheButton.classList.toggle("secondary-button", !pwaUpdateState.updateAvailable);
    elements.clearWebCacheButton.classList.toggle(
      "is-pulsing",
      pwaUpdateState.updateAvailable && pwaUpdateState.currentScreen === "settings",
    );
  }

  elements.applyUpdateBannerButton?.classList.toggle("is-pulsing", shouldShowMainUpdateBanner());
  syncUpdateTimestampUi();
}

function syncUpdateTimestampUi() {
  if (elements.updateVersionLabel) {
    elements.updateVersionLabel.textContent = `ver ${APP_VERSION}`;
  }

  if (!elements.updateTimeLabel) {
    return;
  }

  elements.updateTimeLabel.textContent = pwaUpdateState.lastUpdateCheckedAt
    ? `마지막 확인: ${formatRelativeTime(pwaUpdateState.lastUpdateCheckedAt)}`
    : "마지막 확인: 아직 기록이 없어요.";
}

function formatRelativeTime(timestamp) {
  const seconds = Math.max(0, Math.round((Date.now() - timestamp) / 1000));

  if (seconds < 60) {
    return "방금 전";
  }

  const minutes = Math.round(seconds / 60);
  if (minutes < 60) {
    return `${minutes}분 전`;
  }

  const hours = Math.round(minutes / 60);
  if (hours < 24) {
    return `${hours}시간 전`;
  }

  return new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(timestamp);
}

function markUpdateChecked() {
  pwaUpdateState.lastUpdateCheckedAt = Date.now();
  localStorage.setItem(LAST_UPDATE_CHECK_STORAGE_KEY, String(pwaUpdateState.lastUpdateCheckedAt));
  syncUpdateTimestampUi();
}

function dismissMainUpdateBanner() {
  const token = ensureUpdateToken();
  localStorage.setItem(UPDATE_BANNER_DISMISSED_STORAGE_KEY, token);
  syncUpdateUi();
}

function openSettingsForUpdate() {
  const settingsButton = elements.tabButtons.find((button) => button.dataset.screenTarget === "settings");
  settingsButton?.click();
  window.setTimeout(() => elements.clearWebCacheButton?.focus(), 120);
}

async function detectCachedAssetUpdate() {
  if (!("caches" in window)) {
    return false;
  }

  for (const asset of UPDATE_CHECK_ASSETS) {
    try {
      const [cachedResponse, networkResponse] = await Promise.all([
        caches.match(asset),
        fetch(`${asset}${asset.includes("?") ? "&" : "?"}t=${Date.now()}`, { cache: "no-store" }),
      ]);

      if (!cachedResponse || !networkResponse.ok) {
        continue;
      }

      const [cachedText, networkText] = await Promise.all([cachedResponse.text(), networkResponse.text()]);
      if (cachedText !== networkText) {
        return true;
      }
    } catch {
      // Keep the existing update UI if a transient check fails.
    }
  }

  return false;
}

async function clearAppCaches() {
  if (!("caches" in window)) {
    return;
  }

  const keys = await caches.keys();
  await Promise.all(keys.map((key) => caches.delete(key)));
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    console.warn("[PWA] serviceWorker not supported in this browser.");
    return;
  }

  try {
    const hadPendingUpdate = localStorage.getItem(UPDATE_SEEN_STORAGE_KEY) === "1";

    if (hadPendingUpdate) {
      showUpdateAvailableUI();
    }

    const registration = await navigator.serviceWorker.register("/service-worker.js");
    swRegistrationRef = registration;

    if (registration.waiting) {
      showUpdateAvailableUI();
      markUpdateChecked();
    }

    registration.addEventListener("updatefound", () => {
      const installingWorker = registration.installing;
      if (!installingWorker) {
        return;
      }

      installingWorker.addEventListener("statechange", () => {
        if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
          showUpdateAvailableUI();
          markUpdateChecked();
        }
      });
    });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (reloadingForServiceWorker) {
        return;
      }

      reloadingForServiceWorker = true;
      hideUpdateAvailableUI();
      window.location.reload();
    });

    await registration.update();

    if (registration.waiting) {
      showUpdateAvailableUI();
      markUpdateChecked();
      return;
    }

    if (hadPendingUpdate) {
      markUpdateChecked();
      return;
    }

    const hasAssetUpdate = await detectCachedAssetUpdate();
    if (hasAssetUpdate) {
      showUpdateAvailableUI();
    } else {
      hideUpdateAvailableUI();
    }
    markUpdateChecked();
  } catch (error) {
    console.error("[PWA] service worker registration failed:", error);
  }
}

async function clearWebCacheAndReload() {
  const originalText = elements.clearWebCacheButton.textContent;
  elements.clearWebCacheButton.textContent = "확인 중...";
  elements.clearWebCacheButton.disabled = true;

  try {
    const shouldActivateWaitingWorker = pwaUpdateState.updateAvailable && Boolean(swRegistrationRef?.waiting);

    if (shouldActivateWaitingWorker) {
      hideUpdateAvailableUI();
      markUpdateChecked();
      swRegistrationRef.waiting.postMessage({ type: "SKIP_WAITING" });
      window.setTimeout(() => {
        if (!reloadingForServiceWorker) {
          window.location.reload();
        }
      }, 300);
      return;
    }

    if (swRegistrationRef) {
      await swRegistrationRef.update();
      markUpdateChecked();

      if (swRegistrationRef.waiting) {
        showUpdateAvailableUI();
        swRegistrationRef.waiting.postMessage({ type: "SKIP_WAITING" });
        window.setTimeout(() => {
          if (!reloadingForServiceWorker) {
            window.location.reload();
          }
        }, 300);
        return;
      }
    }

    const hasAssetUpdate = await detectCachedAssetUpdate();
    if (hasAssetUpdate || pwaUpdateState.updateAvailable) {
      hideUpdateAvailableUI();
      await clearAppCaches();
      window.location.reload();
      return;
    }

    elements.clearWebCacheButton.textContent = "최신 상태";
    hideUpdateAvailableUI();
    window.setTimeout(() => {
      elements.clearWebCacheButton.textContent = originalText;
      elements.clearWebCacheButton.disabled = false;
      syncUpdateUi();
    }, 900);
  } catch (error) {
    console.error("[PWA] failed to apply update:", error);
    elements.clearWebCacheButton.textContent = "다시 시도";
    elements.clearWebCacheButton.disabled = false;
    syncUpdateUi();
  }
}

renderCurriculum();

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
updateConnectionStatus();

window.addEventListener("load", registerServiceWorker);

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
