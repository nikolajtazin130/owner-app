// data/awards.js  — версия наград клуба OWNER
// ⚠️ при изменении меняй ?v= в index.html

const TIER_ROMAN  = { 1: "I", 2: "II", 3: "III", 4: "IV" };
const TIER_COLORS = { 1: "#cd7f32", 2: "#c0c0c0", 3: "#ffd700", 4: "#7fdfff" };

// SVG-иконки наград (Lucide, 26x26 в сетке / 38 в модалке)
const AW_ICONS = {
  loyal:   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  explore: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/></svg>',
  mirror:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v6h6"/><path d="M21 12A9 9 0 0 0 6 5.3L3 8"/><path d="M21 22v-6h-6"/><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"/></svg>',
  flame:   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  effort:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v18"/><path d="M6 8h13a1 1 0 0 1 .78 1.63L17 13l2.78 3.37A1 1 0 0 1 19 18H6"/></svg>',
  word:    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>',
  give:    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  auth:    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>',
  check:   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>',
  comment: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
  init:    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
  friend:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  model:   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  anchor:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/></svg>',
  target:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  online:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>',
  context: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
  mentor:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  honest:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>',
  first:   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16"/><path d="M4 4h13l-2 4 2 4H4"/></svg>',
  founder: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M12 2 2 8l10 4 10-4z"/><path d="M6 10v6M18 10v6M10 11v6M14 11v6"/></svg>',
};

const AWARD_DEFS = [
  // ── АВТО ──
  { id:"loyal_days", type:"auto", title:"Верный делу", icon:AW_ICONS.loyal,
    desc:"Остаётся с клубом надолго. Награда за преданность делу.",
    tierLabels:["90 дней","150 дней","270 дней","365 дней"] },

  { id:"explorer", type:"auto", title:"Исследователь", icon:AW_ICONS.explore,
    desc:"Проходит задания, опросы и марафоны. Не стоит на месте.",
    tierLabels:["1 прохождение","5 прохождений","10 прохождений","25 прохождений"] },

  { id:"mirror", type:"auto", title:"Вернулся к зеркалу", icon:AW_ICONS.mirror,
    desc:"Возвращается к пройденным замерам, чтобы отследить динамику.",
    tierLabels:["6 повторов","12 повторов","24 повтора","36 повторов"] },

  { id:"marathoner", type:"auto", title:"Марафонец", icon:AW_ICONS.flame,
    desc:"Доходит до финиша марафонов. Дисциплина в действии.",
    tierLabels:["1 марафон","2 марафона","4 марафона","8 марафонов"] },

  { id:"long_effort", type:"auto", title:"Длинное усилие", icon:AW_ICONS.effort,
    desc:"Накопил большой объём ежедневной работы в марафонах.",
    tierLabels:["60 дней","90 дней","120 дней","240 дней"] },

  { id:"keeps_word", type:"auto", title:"Держит слово", icon:AW_ICONS.word,
    desc:"Проходит марафоны без пропусков — отмечает каждый день до конца.",
    tierLabels:["1 идеальный","3 идеальных","5 идеальных","10 идеальных"] },

  { id:"echo_out", type:"auto", title:"Поддерживает своих", icon:AW_ICONS.give,
    desc:"Отправляет реакции другим участникам. Замечает и поддерживает.",
    tierLabels:["10 реакций","50 реакций","100 реакций","200 реакций"] },

  { id:"echo_in", type:"auto", title:"Авторитет", icon:AW_ICONS.auth,
    desc:"Получает реакции от других участников. На тебя обращают внимание.",
    tierLabels:["10 реакций","50 реакций","100 реакций","200 реакций"] },

  { id:"not_passed", type:"auto", title:"Не прошёл мимо", icon:AW_ICONS.check,
    desc:"Отмечает прочитанные материалы. Не оставляет полезное непрочитанным.",
    tierLabels:["20 материалов","50 материалов","100 материалов","200 материалов"] },

  { id:"commentator", type:"auto", title:"Комментатор", icon:AW_ICONS.comment,
    desc:"За развёрнутые комментарии в чате клуба. Пиши по делу — система засчитает вклад.",
    tierLabels:["5 комментариев","20 комментариев","50 комментариев","100 комментариев"] },

  // ── РУЧНЫЕ (со ступенями) ──
  { id:"initiator", type:"manual", title:"Инициатор", icon:AW_ICONS.init,
    desc:"Запускает движение первым. Не ждёт, когда начнут другие." },

  { id:"owner_friend", type:"manual", noTiers:true, title:"Друг OWNER", icon:AW_ICONS.friend,
    desc:"Тот, кому OWNER доверяет лично." },

  { id:"role_model", type:"manual", title:"Личный пример", icon:AW_ICONS.model,
    desc:"Своими действиями задаёт планку для остальных." },

  { id:"circle_support", type:"manual", title:"Опора круга", icon:AW_ICONS.anchor,
    desc:"Регулярно поддерживает качество и устойчивость сообщества." },

  { id:"precise", type:"manual", title:"Точный собеседник", icon:AW_ICONS.target,
    desc:"Даёт обратную связь, которая проясняет ситуацию, а не просто поддерживает." },

  { id:"stays_online", type:"manual", title:"На связи", icon:AW_ICONS.online,
    desc:"Регулярно присутствует в жизни сообщества и не исчезает после первой активности." },

  { id:"adds_context", type:"manual", title:"Добавляет контекст", icon:AW_ICONS.context,
    desc:"Приносит факт или опыт, которого не хватало для полного разбора." },

  { id:"mentor", type:"manual", title:"Наставник", icon:AW_ICONS.mentor,
    desc:"Помогает новичкам освоиться и не бросает их одних." },

  { id:"honest_self", type:"manual", title:"Честный с собой", icon:AW_ICONS.honest,
    desc:"Не прячется за удобными ответами. Смотрит на себя прямо." },

  // ── РУЧНЫЕ БЕЗ СТУПЕНЕЙ ──
  { id:"first_member", type:"manual", noTiers:true, title:"Один из первых", icon:AW_ICONS.first,
    desc:"Пришёл в клуб в самом начале пути." },

  { id:"founder", type:"manual", noTiers:true, title:"Фаундер", icon:AW_ICONS.founder,
    desc:"Был с клубом ещё до запуска приложения." },
];

// форма фона бейджа: круг для auto, шестиугольник для manual
function shapeSvg(type, color) {
  if (type === "manual") {
    return '<svg class="aw-shape-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' +
      '<polygon points="50,4 92,27 92,73 50,96 8,73 8,27" fill="none" stroke="'+color+'" stroke-width="4"/></svg>';
  }
  return '<svg class="aw-shape-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="50" cy="50" r="46" fill="none" stroke="'+color+'" stroke-width="4"/></svg>';
}

// рендер одного бейджа
function renderAwardBadge(def, tier, sub) {
  tier = Number(tier) || 0;
  const locked  = tier < 1;
  const noTiers = def.noTiers === true;
  const color   = locked ? "var(--hint)" : (noTiers ? "#c8a86b" : TIER_COLORS[tier]);
  const cls     = "aw-badge" + (locked ? " aw-locked" : "") +
                  (tier === 4 && !noTiers ? " aw-tier4" : "") +
                  (def.type === "manual" ? " aw-manual" : "");
  // римская цифра — только для многоступенчатых полученных
  const tierNum = (!locked && !noTiers)
    ? '<span class="aw-tier-num">' + TIER_ROMAN[tier] + '</span>' : '';
  const subHtml = sub ? '<div class="aw-sub">' + sub + '</div>' : '';

  return '<div class="' + cls + '" style="--aw-color:' + color + '" ' +
           'onclick="openAwardModal(\'' + def.id + '\',' + tier + ')">' +
           '<div class="aw-icon-wrap">' +
             shapeSvg(def.type, color) +
             '<span class="aw-icon-svg">' + def.icon + '</span>' +
             tierNum +
           '</div>' +
           '<div class="aw-title">' + def.title + '</div>' +
           subHtml +
         '</div>';
}
