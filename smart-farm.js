// ================= بيانات الترجمة =================
const translations = {
    ar: {
        title: "داشبورد المزرعة",
        section1: "بيانات الطيور والبيئة",
        birdsCount: "عدد الطيور",
        birdsAge: "عمر الطيور (يوم)",
        avgWeight: "متوسط الوزن (كجم)",
        outTemp: "درجة الحرارة الخارجية (°C)",
        section2: "بيانات العنبر والشفاطات",
        roomWidth: "عرض العنبر (متر)",
        roomHeight: "ارتفاع السقف (متر)",
        fansCount: "عدد الشفاطات",
        fanCapacity: "قدرة الشفاط (م³/ساعة)",
        fanHint: "*يستخدم 80% من القدرة لتفادي الفقد",
        section3: "فتحات التهوية والتبريد",
        airInletSize: "مقاس Air Inlet (طول×عرض سم)",
        airInletCount: "عدد الفتحات (Air Inlets)",
        tunnelSize: "مقاس Tunnel Doors (طول×عرض سم)",
        tunnelCount: "عدد الفتحات (Tunnel Doors)",
        padThickness: "سمك خلايا التبريد",
        pad15: "15 سم",
        pad10: "10 سم",
        calcBtn: "إنشاء لوحة التحكم",
        dashTitle: "لوحة تحكم العنبر",
        editBtn: "تعديل البيانات",
        resSec2: "حسابات الهواء",
        resSec3: "التايمر",
        resSec4: "تحليل الفتحات",
        rTargetTemp: "الحرارة المطلوبة",
        rTargetHum: "الرطوبة المطلوبة",
        rTargetWeight: "الوزن المستهدف",
        rTimerDur: "زمن الدورة",
        rTotalWeight: "الوزن الحي الكلي",
        rAirPerKg: "احتياج الكيلو هواء",
        rTotalAir: "الهواء الكلي المطلوب",
        rOnRatio: "نسبة التشغيل",
        rOffRatio: "نسبة الإيقاف",
        rTon: "وقت التشغيل T-ON",
        rToff: "وقت الإيقاف T-OFF",
        rInletArea: "مساحة Air Inlets",
        rTunnelArea: "مساحة Tunnel Doors",
        rInletOpen: "نسبة فتح الـ Inlet",
        rTunnelOpen: "نسبة فتح الـ Tunnel",
        length: "الطول",
        width: "العرض",
        unitKg: "كجم",
        unitG: "جم",
        unitSec: "ث",
        unitM3: "م³/ساعة",
        unitM3Kg: "م³/كجم",
        unitM2: "م²"
    },
    en: {
        title: "Farm Dashboard",
        section1: "Birds & Env",
        birdsCount: "Total Birds",
        birdsAge: "Age (Days)",
        avgWeight: "Avg Weight (Kg)",
        outTemp: "Outside Temp (°C)",
        section2: "House & Fans",
        roomWidth: "Width (m)",
        roomHeight: "Height (m)",
        fansCount: "Total Fans",
        fanCapacity: "Fan Capacity (m³/h)",
        fanHint: "*Only 80% capacity is used",
        section3: "Ventilation",
        airInletSize: "Air Inlet Size (L×W cm)",
        airInletCount: "Inlets Count",
        tunnelSize: "Tunnel Door Size (L×W cm)",
        tunnelCount: "Tunnel Count",
        padThickness: "Pad Thickness",
        pad15: "15 cm",
        pad10: "10 cm",
        calcBtn: "Generate Dashboard",
        dashTitle: "Control Dashboard",
        editBtn: "Edit Data",
        resSec2: "Air Calculations",
        resSec3: "Timers",
        resSec4: "Openings Analysis",
        rTargetTemp: "Target Temp",
        rTargetHum: "Target Hum.",
        rTargetWeight: "Target Weight",
        rTimerDur: "Cycle Time",
        rTotalWeight: "Total Live Weight",
        rAirPerKg: "Air Needed/Kg",
        rTotalAir: "Total Air Needed",
        rOnRatio: "ON Ratio",
        rOffRatio: "OFF Ratio",
        rTon: "Time ON (T-ON)",
        rToff: "Time OFF (T-OFF)",
        rInletArea: "Inlets Area",
        rTunnelArea: "Tunnel Area",
        rInletOpen: "Inlet Open %",
        rTunnelOpen: "Tunnel Open %",
        length: "L",
        width: "W",
        unitKg: "Kg",
        unitG: "g",
        unitSec: "s",
        unitM3: "m³/h",
        unitM3Kg: "m³/Kg",
        unitM2: "m²"
    }
};

let currentLang = 'ar';
let currentTheme = 'light';
const inputsList = ['birdsCount', 'birdsAge', 'avgWeight', 'outTemp', 'roomWidth', 'roomHeight', 'fansCount', 'fanCapacity', 'inletLength', 'inletWidth', 'inletCount', 'tunnelLength', 'tunnelWidth', 'tunnelCount', 'padThickness'];

// ================= الإعدادات =================
window.onload = () => {
    currentLang = localStorage.getItem('farmLang') || 'ar';
    currentTheme = localStorage.getItem('farmTheme') || 'light';
    applyTheme(currentTheme); applyLanguage(currentLang);

    const saved = localStorage.getItem('poultryData');
    if (saved) {
        const data = JSON.parse(saved);
        inputsList.forEach(id => {
            if (id !== 'padThickness') document.getElementById(id).value = data[id] || '';
        });
    }
};

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light': 'dark';
    localStorage.setItem('farmTheme',
        currentTheme); applyTheme(currentTheme);
}
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme',
        theme);
    document.getElementById('themeIcon').innerText = theme === 'dark' ? '☀️': '🌙';
}
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en': 'ar';
    localStorage.setItem('farmLang',
        currentLang); applyLanguage(currentLang);
}
function applyLanguage(lang) {
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl': 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerText = translations[lang][el.getAttribute('data-i18n')];
    });
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        el.placeholder = translations[lang][el.getAttribute('data-placeholder')];
    });
}
function hideHint() {
    document.getElementById('fanHint').style.opacity = '0';
}

// ================= الأنيميشن =================
let animationFrames = {};
function animateValue(id, start, end, duration, isFloat = false) {
    const obj = document.getElementById(id);
    if (!obj) return;
    if (animationFrames[id]) cancelAnimationFrame(animationFrames[id]);

    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        let current = easeOut * (end - start) + start;

        obj.innerText = isFloat ? current.toFixed(2): Math.round(current);
        if (progress < 1) {
            animationFrames[id] = window.requestAnimationFrame(step);
        } else {
            obj.innerText = isFloat ? end.toFixed(2): Math.round(end);
        }
    };
    animationFrames[id] = window.requestAnimationFrame(step);
}

// ================= عرض الداشبورد =================
function editData() {
    document.getElementById('dashboardSection').classList.remove('active-view');
    document.getElementById('dashboardSection').classList.add('hidden-view');
    setTimeout(() => {
        document.getElementById('inputSection').classList.remove('hidden-view');
        document.getElementById('inputSection').classList.add('active-view');
    }, 300);
}

function processDashboard() {
    let dataToSave = {};
    inputsList.forEach(id => dataToSave[id] = document.getElementById(id).value);
    localStorage.setItem('poultryData', JSON.stringify(dataToSave));

    document.getElementById('inputSection').classList.remove('active-view');
    document.getElementById('inputSection').classList.add('hidden-view');
    setTimeout(() => {
        document.getElementById('dashboardSection').classList.remove('hidden-view');
        document.getElementById('dashboardSection').classList.add('active-view');
        runCalculationsAndAnimations();
    }, 400);
}

// ================= الحسابات =================
const weightsDB = [
    "42 - 45 - 38", "54 - 81", "74 - 99", "94 - 118", "114 - 140",
    "140 - 160", "179 - 210", "187 - 225", "230 - 259", "255 - 300",
    "293 - 340", "334 - 382", "378 - 429", "400 - 490", "457 - 509",
    "510 - 568", "568 - 642", "625 - 705", "687 - 773", "752 - 841",
    "770 - 1000", "1000 - 1017", "1018 - 1093", "1094 - 1172", "1173 - 1253",
    "1254 - 1336", "1337 - 1420", "1421 - 1507", "1508 - 1564", "1565 - 1653",
    "1654 - 1742", "1743 - 1833", "1834 - 1925", "1926 - 2250", "2250 - 2500"
];

function getTargetTemp(day) {
    if (day <= 1) return 34; if (day <= 5) return 33; if (day <= 8) return 31.5; if (day <= 11) return 30; if (day <= 14) return 28.5; if (day <= 17) return 28; if (day <= 20) return 27; if (day <= 23) return 26; return 25;
}
function getTimerDur(day) {
    if (day <= 12) return 300; if (day <= 21) return 180; return 120;
}

function runCalculationsAndAnimations() {
    const getVal = (id) => parseFloat(document.getElementById(id).value) || 0;
    let age = parseInt(getVal('birdsAge')),
    outTemp = getVal('outTemp'),
    birdsCount = getVal('birdsCount'),
    avgWeight = getVal('avgWeight');

    let targetTemp = getTargetTemp(age),
    targetHumidity = Math.max(40, Math.min(70, 93 - targetTemp));
    let cycleTime = getTimerDur(age);

    // سحب الوزن المستهدف كنص (String) حسب اليوم
    let targetWeightText = (age < 1 || isNaN(age)) ? "0": weightsDB[Math.min(age-1, weightsDB.length-1)];

    let totalLiveWeight = birdsCount * avgWeight,
    airPerKg = outTemp / 4,
    totalAirReq = totalLiveWeight * airPerKg;
    let totalPower = getVal('fansCount') * (getVal('fanCapacity') * 0.8);
    let onRatio = totalPower > 0 ? Math.min(totalAirReq / totalPower, 1): 0,
    offRatio = 1 - onRatio;
    let tOn = cycleTime * onRatio,
    tOff = cycleTime * offRatio;

    let inletArea = ((getVal('inletLength') * getVal('inletWidth')) / 10000) * getVal('inletCount');
    let tunnelArea = ((getVal('tunnelLength') * getVal('tunnelWidth')) / 10000) * getVal('tunnelCount');
    let inletOpenRatio = inletArea * 14400 > 0 ? Math.min((totalAirReq / (inletArea * 14400)) * 100, 100): 0;
    let tunnelOpenRatio = tunnelArea * (getVal('padThickness') == 15 ? 7200: 4500) > 0 ? Math.min((totalAirReq / (tunnelArea * (getVal('padThickness') == 15 ? 7200: 4500))) * 100, 100): 0;

    // عرض الوزن المستهدف كنص مباشر بدون أنيميشن رقمي وتعديل حجم الخط ديناميكياً
    const weightEl = document.getElementById('anim_targetWeight');
    weightEl.innerText = targetWeightText;
    weightEl.style.fontSize = targetWeightText.length > 8 ? "20px": "28px";

    animateValue('anim_targetTemp', 0, targetTemp, 1500, false);
    animateValue('anim_targetHum', 0, targetHumidity, 1500, false);
    animateValue('anim_timerDur', 0, cycleTime, 1500, false);

    animateValue('anim_totalWeight', 0, totalLiveWeight, 1800, true);
    animateValue('anim_airPerKg', 0, airPerKg, 1800, true);
    animateValue('anim_totalAir', 0, totalAirReq, 2000, false);

    animateValue('anim_onRatio', 0, onRatio * 100, 1500, true);
    animateValue('anim_offRatio', 0, offRatio * 100, 1500, true);
    animateValue('anim_ton', 0, tOn, 1500, false);
    animateValue('anim_toff', 0, tOff, 1500, false);

    animateValue('anim_inletArea', 0, inletArea, 1500, true);
    animateValue('anim_inletOpen', 0, inletOpenRatio, 1800, true);
    animateValue('anim_tunnelArea', 0, tunnelArea, 1500, true);
    animateValue('anim_tunnelOpen', 0, tunnelOpenRatio, 1800, true);
}