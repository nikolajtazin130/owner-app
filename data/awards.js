// ═══════════ НАГРАДЫ КЛУБА ═══════════
// type: "auto" (круг) | "manual" (шестиугольник)
// tierValues — пороги для тиров I/II/III/IV (для авто-наград)
// desc — общее описание, tierLabels — что значит каждый тир

const AWARD_DEFS = [
  {
    id: "loyal_days", type: "auto", title: "Верный делу",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="m9 16 2 2 4-4"/></svg>',
    desc: "Награда за верность клубу. Чем дольше ты с нами — тем выше тир.",
    tierLabels: ["30 дней в клубе", "100 дней в клубе", "250 дней в клубе", "365 дней в клубе"]
  },
  {
    id: "explorer", type: "auto", title: "Исследователь",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/></svg>',
    desc: "За изучение материалов клуба. Открывай посты сезонов и отмечай прочитанное.",
    tierLabels: ["10 постов прочитано", "30 постов прочитано", "60 постов прочитано", "100 постов прочитано"]
  },
  {
    id: "full_map", type: "auto", title: "Полная карта",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>',
    desc: "За полное прохождение сезонов клуба. Закрывай сезон целиком.",
    tierLabels: ["1 сезон пройден", "3 сезона пройдено", "6 сезонов пройдено", "все сезоны пройдены"]
  },
  {
    id: "mirror", type: "auto", title: "Вернулся к зеркалу",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5H11"/></svg>',
    desc: "За повторное прохождение опросов. Возвращайся к тестам, чтобы видеть свою динамику.",
    tierLabels: ["2 повторных замера", "5 повторных замеров", "10 повторных замеров", "20 повторных замеров"]
  },
  {
    id: "marathoner", type: "auto", title: "Марафонец",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    desc: "За пройденные марафоны дисциплины. Доходи до финиша.",
    tierLabels: ["1 марафон пройден", "2 марафона пройдено", "4 марафона пройдено", "8 марафонов пройдено"]
  },
  {
    id: "long_effort", type: "auto", title: "Длинное усилие",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    desc: "За длинные серии без пропусков. Держи строй день за днём.",
    tierLabels: ["серия 7 дней", "серия 21 день", "серия 50 дней", "серия 100 дней"]
  },
  {
    id: "first_echo", type: "auto", title: "Первый отклик",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    desc: "За реакции, которые ты ставишь другим участникам. Поддерживай своих.",
    tierLabels: ["5 реакций отправлено", "25 реакций отправлено", "75 реакций отправлено", "200 реакций отправлено"]
  },
  {
    id: "not_passed", type: "auto", title: "Не прошёл мимо",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>',
    desc: "За внимание к клубу: чтение, отметки, участие. Начисляется за общую вовлечённость.",
    tierLabels: ["уровень 2 достигнут", "уровень 4 достигнут", "уровень 7 достигнут", "уровень 10 достигнут"]
  },
  {
    id: "circle_support", type: "auto", title: "Опора круга",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    desc: "За полученные реакции от других участников. Ты — тот, на кого равняются.",
    tierLabels: ["10 реакций получено", "50 реакций получено", "150 реакций получено", "400 реакций получено"]
  },
  {
    id: "precise", type: "auto", title: "Точный собеседник",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
    desc: "За активность в чате клуба. Пиши по делу и поддерживай диалог.",
    tierLabels: ["активен в чате", "заметен в чате", "ядро общения", "голос клуба"]
  },
  {
    id: "stays_online", type: "auto", title: "На связи",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>',
    desc: "За регулярные заходы в приложение. Возвращайся — клуб живёт ритмом.",
    tierLabels: ["7 дней активности", "30 дней активности", "90 дней активности", "180 дней активности"]
  },
  {
    id: "adds_context", type: "auto", title: "Добавляет контекст",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
    desc: "За вдумчивое прохождение опросов и марафонов. Качество, а не только количество.",
    tierLabels: ["3 задания выполнено", "10 заданий выполнено", "25 заданий выполнено", "50 заданий выполнено"]
  },

  // ═══ РУЧНЫЕ (шестиугольник, вручает OWNER) ═══
  {
    id: "initiator", type: "manual", title: "Инициатор",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    desc: "Вручается лично за то, что ты запускаешь движение: предлагаешь, начинаешь, ведёшь за собой."
  },
  {
    id: "owner_friend", type: "manual", title: "Друг OWNER",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 17a2 2 0 0 0 2 2 2 2 0 0 0 2-2"/><path d="m14 8-2 3-2-3"/><path d="M8.5 8.5c-1 1-2.5 2-2.5 4a6 6 0 0 0 12 0c0-2-1.5-3-2.5-4"/><path d="M12 3v5"/></svg>',
    desc: "Вручается лично за особый личный вклад в клуб. Знак настоящей близости к делу."
  },
  {
    id: "role_model", type: "manual", title: "Личный пример",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="m17 11 1.5 1.5L22 9"/></svg>',
    desc: "Вручается лично тому, кто своим поведением задаёт планку для остальных."
  },
  {
    id: "march_2025", type: "manual", title: "Знак месяца",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/></svg>',
    desc: "Вручается лично лучшему участнику месяца. Признание за выдающийся вклад."
  }
];

function awardById(id) { return AWARD_DEFS.find(a => a.id === id); }

// цвета тиров: I бронза, II серебро, III золото, IV светлое золото (топ)
const TIER_COLORS = {
  1: "#cd7f32",
  2: "#c0c0c0",
  3: "#e0b84a",
  4: "#f5d97a"
};
const TIER_ROMAN = { 1: "I", 2: "II", 3: "III", 4: "IV" };

// SVG-обводка формы: круг для auto, шестиугольник для manual
function shapeSvg(type, color) {
  if (type === "manual") {
    // правильный шестиугольник, плоский верх; рамка ровная (SVG не режется как clip-path)
    return '<svg class="aw-shape-svg" viewBox="0 0 100 100" preserveAspectRatio="none">' +
      '<polygon points="25,6 75,6 98,50 75,94 25,94 2,50" ' +
      'fill="rgba(255,255,255,0.02)" stroke="' + color + '" stroke-width="4" stroke-linejoin="round"/>' +
      '<polygon points="29,13 71,13 91,50 71,87 29,87 9,50" ' +
      'fill="none" stroke="' + color + '" stroke-width="1.5" opacity="0.4" stroke-linejoin="round"/>' +
    '</svg>';
  }
  // круг
  return '<svg class="aw-shape-svg" viewBox="0 0 100 100" preserveAspectRatio="none">' +
    '<circle cx="50" cy="50" r="47" fill="rgba(255,255,255,0.02)" stroke="' + color + '" stroke-width="4"/>' +
  '</svg>';
}

// рендер одного бейджа. tier: 0 = locked
function renderAwardBadge(def, tier, sub) {
  const locked = !tier || tier < 1;
  const color = locked ? "var(--hint)" : TIER_COLORS[tier];
  const tierCls = tier === 4 ? " aw-tier4" : "";
  const typeCls = def.type === "manual" ? "aw-manual" : "aw-auto";
  const lockedCls = locked ? " aw-locked" : "";

  const tierNum = locked ? "" :
    '<span class="aw-tier-num">' + TIER_ROMAN[tier] + '</span>';

  return '<div class="aw-badge ' + typeCls + tierCls + lockedCls +
         '" style="--aw-color:' + color + '" onclick="openAwardModal(\'' + def.id + '\',' + tier + ')">' +
    '<div class="aw-icon-wrap">' +
      shapeSvg(def.type, color) +
      tierNum +
      '<span class="aw-icon-svg">' + def.icon + '</span>' +
    '</div>' +
    '<div class="aw-title">' + def.title + '</div>' +
    (sub ? '<div class="aw-sub">' + sub + '</div>' : '') +
  '</div>';
}
