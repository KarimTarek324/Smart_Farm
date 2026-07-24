// ================= بيانات الترجمة والتحقق =================
const translations = {
    ar: {
        title: "المزرعة الذكية",
        section1: "بيانات الطيور والبيئة",
        birdsCount: "عدد الطيور",
        birdsAge: "عمر الطيور (يوم)",
        avgWeight: "متوسط الوزن الحالي (كجم)",
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
        rDarkness: "ساعات الإظلام",
        rTotalWeight: "الوزن الحي الكلي",
        rAirSpeed: "سرعة الهواء",
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
        unitMSec: "م/ث",
        unitM3: "م³/ساعة",
        unitM3Kg: "م³/كجم",
        unitM2: "م²",
        unitHour: "ساعة",
        dangerMsg: "تحذير خطير: قدرة الشفاطات لا تغطي احتياج الطيور! ننصح بزيادة عدد الشفاطات في أسرع وقت لتجنب اختناق القطيع.",
        humWarning: "* الزيادة في الرطوبة عن الحد الأقصى قد تؤدي إلى احتباس حراري",
        darknessWarning: "* يظل الاظلام 6 ساعات حتى قبل البيع ب 4 أيام ثم يقل حتى يوم البيع بحيث لا يوجد اظلام يوم البيع يجب ان يكون الاظلام دامس اى لا يوجد اى اضاءة ويفضل ان يكون على تايمر لتثبيت الوقت بالاظلام الكامل.",
        errEmpty: "رجاء إدخال قيمة",
        errNegative: "لا يمكن إدخال قيمة سالبة",
        errHigh: "القيمة عالية وقد تؤثر على الحسابات"
    },
    en: {
        title: " Smart Farm",
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
        rDarkness: "Darkness Hours",
        rTotalWeight: "Total Live Weight",
        rAirSpeed: "Air Speed",
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
        unitMSec: "m/s",
        unitM3: "m³/h",
        unitM3Kg: "m³/Kg",
        unitM2: "m²",
        unitHour: "hrs",
        dangerMsg: "CRITICAL WARNING: Fan capacity does not cover birds' needs! Add more fans immediately to prevent flock suffocation.",
        humWarning: "* Exceeding maximum humidity may lead to heat stress",
        darknessWarning: "* Darkness remains 6 hrs until 4 days before sale, then decreases. Must be total darkness, preferably using a timer.",
        errEmpty: "Please enter a value",
        errNegative: "Cannot enter a negative value",
        errHigh: "Value is too high and may affect calculations"
    }
};

let currentLang = 'ar';
let currentTheme = 'light';
const inputsList = ['birdsCount', 'birdsAge', 'avgWeight', 'outTemp', 'roomWidth', 'roomHeight', 'fansCount', 'fanCapacity', 'inletLength', 'inletWidth', 'inletCount', 'tunnelLength', 'tunnelWidth', 'tunnelCount', 'padThickness'];

// ================= الإعدادات والأحداث =================
window.onload = () => {
    currentLang = localStorage.getItem('farmLang') || 'ar';
    currentTheme = localStorage.getItem('farmTheme') || 'light';
    applyTheme(currentTheme); applyLanguage(currentLang);

    const saved = localStorage.getItem('poultryData');
    if (saved) {
        const data = JSON.parse(saved);
        inputsList.forEach(id => {
            if (id !== 'padThickness' && document.getElementById(id)) document.getElementById(id).value = data[id] || '';
        });
    }

    inputsList.forEach(id => {
        const el = document.getElementById(id);
        if (el && id !== 'padThickness') {
            el.addEventListener('input', function() {
                this.classList.remove('error-input');
                const wrapper = this.closest('.form-group');
                const errorMsg = wrapper.querySelector('.error-msg');
                if (errorMsg) errorMsg.remove();
                if (id === 'fanCapacity') document.getElementById('fanHint').style.opacity = '0';
            });
        }
    });
};

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light': 'dark'; localStorage.setItem('farmTheme', currentTheme); applyTheme(currentTheme);
}
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme); document.getElementById('themeIcon').innerText = theme === 'dark' ? '☀️': '🌙';
}
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en': 'ar'; localStorage.setItem('farmLang', currentLang); applyLanguage(currentLang);
}
function applyLanguage(lang) {
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl': 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerText = translations[lang][el.getAttribute('data-i18n')];
    });
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        el.placeholder = translations[lang][el.getAttribute('data-placeholder')];
    });
    document.getElementById('dangerMsgText').innerText = translations[lang].dangerMsg;
    document.querySelectorAll('.error-msg').forEach(el => {
        let type = el.getAttribute('data-err-type');
        if (type) el.innerText = translations[lang][type];
    });
}
function scrollToTimer() {
    document.getElementById('timerCardDiv').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// ================= التحقق من صحة المدخلات =================
function validateInputs() {
    let isValid = true;
    let firstErrorElement = null;

    document.querySelectorAll('.error-msg').forEach(el => el.remove());
    document.querySelectorAll('.error-input').forEach(el => el.classList.remove('error-input'));

    for (let i = 0; i < inputsList.length; i++) {
        const id = inputsList[i];
        if (id === 'padThickness') continue;

        const input = document.getElementById(id);
        let valRaw = input.value;
        let val = parseFloat(valRaw);
        let errorType = null;

        if (valRaw.trim() === '' || isNaN(val)) {
            errorType = 'errEmpty';
        } else if (val < 0) {
            errorType = 'errNegative';
        } else if (id === 'birdsAge' && val > 40) {
            errorType = 'errHigh';
        } else if (id === 'outTemp' && val > 60) {
            errorType = 'errHigh';
        } else if (id === 'avgWeight' && val > 3) {
            errorType = 'errHigh';
        }

        if (errorType) {
            isValid = false;
            input.classList.add('error-input');

            let errorSpan = document.createElement('div');
            errorSpan.className = 'error-msg';
            errorSpan.setAttribute('data-err-type', errorType);
            errorSpan.innerText = translations[currentLang][errorType];

            const parentGroup = input.closest('.form-group');
            parentGroup.appendChild(errorSpan);

            if (!firstErrorElement) firstErrorElement = input;
        }
    }

    if (!isValid && firstErrorElement) {
        firstErrorElement.scrollIntoView({
            behavior: 'smooth', block: 'center'
        });
    }

    return isValid;
}

// ================= عرض الداشبورد =================
function editData() {
    document.getElementById('dangerNotification').classList.remove('alert-show');
    document.getElementById('dashboardSection').classList.remove('active-view');
    document.getElementById('dashboardSection').classList.add('hidden-view');
    setTimeout(() => {
        document.getElementById('inputSection').classList.remove('hidden-view');
        document.getElementById('inputSection').classList.add('active-view');
    }, 300);
}

function processDashboard() {
    if (!validateInputs()) return;

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

// ================= الأنيميشن والحسابات =================
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
        obj.innerHTML = isFloat ? current.toFixed(2): Math.round(current);
        if (progress < 1) animationFrames[id] = window.requestAnimationFrame(step);
        else obj.innerHTML = isFloat ? end.toFixed(2): Math.round(end);
    };
    animationFrames[id] = window.requestAnimationFrame(step);
}

// تعديل مصفوفة الأوزان للأيام من 36 إلى 40 بحيث يبدأ المينيمم من 2600 والماكس لا يتجاوز 3000
const weightsDB = [
    "42 - 45 - 38", "54 - 81", "74 - 99", "94 - 118", "114 - 140", "140 - 160", "179 - 210", "187 - 225", "230 - 259", "255 - 300",
    "293 - 340", "334 - 382", "378 - 429", "400 - 490", "457 - 509", "510 - 568", "568 - 642", "625 - 705", "687 - 773", "752 - 841",
    "770 - 1000", "1000 - 1017", "1018 - 1093", "1094 - 1172", "1173 - 1253", "1254 - 1336", "1337 - 1420", "1421 - 1507", "1508 - 1564", "1565 - 1653",
    "1654 - 1742", "1743 - 1833", "1834 - 1925", "1926 - 2250", "2250 - 2500",
    "2600 - 2680", "2600 - 2760", "2600 - 2840", "2600 - 2920", "2600 - 3000"
];

function getTargetTemp(day) {
    if (day <= 1) return 34;
    if (day <= 5) return 33;
    if (day <= 8) return 31.5;
    if (day <= 11) return 30;
    if (day <= 14) return 28.5;
    if (day <= 17) return 28;
    if (day <= 20) return 27;
    if (day <= 23) return 26;
    if (day <= 35) return 25;
    return 24;
}

function getDarknessHours(day) {
    if (day <= 1) return 0;
    if (day <= 3) return 1;
    if (day <= 5) return 2;
    if (day == 6) return 3;
    if (day == 7) return 4;
    if (day == 8) return 5;
    return 6;
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
    let roomWidth = getVal('roomWidth'),
    roomHeight = getVal('roomHeight');

    let targetTemp = getTargetTemp(age),
    targetHumidity = Math.max(40, Math.min(70, 93 - targetTemp));
    let darknessHours = getDarknessHours(age);
    let cycleTime = getTimerDur(age);
    let targetWeightText = weightsDB[Math.min(age > 0 ? age-1: 0, weightsDB.length-1)];

    let totalLiveWeight = birdsCount * avgWeight,
    airPerKg = outTemp / 4,
    totalAirReq = totalLiveWeight * airPerKg;
    let totalPower = getVal('fansCount') * (getVal('fanCapacity') * 0.8);
    let roomCrossSection = roomWidth * roomHeight;
    let airSpeed = roomCrossSection > 0 ? totalPower / (3600 * roomCrossSection): 0;
    let onRatio = totalPower > 0 ? Math.min(totalAirReq / totalPower, 1): 0,
    offRatio = 1 - onRatio;
    let tOn = cycleTime * onRatio,
    tOff = cycleTime * offRatio;
    let inletArea = ((getVal('inletLength') * getVal('inletWidth')) / 10000) * getVal('inletCount');
    let tunnelArea = ((getVal('tunnelLength') * getVal('tunnelWidth')) / 10000) * getVal('tunnelCount');
    let inletOpenRatio = 0,
    tunnelOpenRatio = 0;

    if (outTemp <= targetTemp) {
        if (inletArea * 14400 > 0) inletOpenRatio = Math.min((totalAirReq / (inletArea * 14400)) * 100, 100);
    } else {
        let padCapacity = (getVal('padThickness') == 15 ? 7200: 4500);
        if (tunnelArea * padCapacity > 0) tunnelOpenRatio = Math.min((totalAirReq / (tunnelArea * padCapacity)) * 100, 100);
    }

    if (totalAirReq > totalPower && totalAirReq > 0) {
        document.getElementById('timerCardDiv').classList.add('danger-mode-card');
        setTimeout(() => {
            document.getElementById('dangerNotification').classList.add('alert-show');
        }, 600);
    } else {
        document.getElementById('timerCardDiv').classList.remove('danger-mode-card');
        document.getElementById('dangerNotification').classList.remove('alert-show');
    }

    const weightEl = document.getElementById('anim_targetWeight');
    weightEl.innerText = targetWeightText; weightEl.style.fontSize = targetWeightText.length > 8 ? "20px": "28px";

    const humEl = document.getElementById('anim_targetHum'),
    humExtra = document.getElementById('humExtra'),
    humNote = document.getElementById('humNote');
    if (age <= 15) {
        humExtra.style.display = 'none'; humNote.style.display = 'none';
        animateValue('anim_targetHum', 0, targetHumidity, 1500, false);
    } else {
        let maxHum = Math.round(targetHumidity),
        minHum = 40,
        avgHum = Math.round((minHum + maxHum) / 2);
        if (animationFrames['anim_targetHum']) cancelAnimationFrame(animationFrames['anim_targetHum']);
        humEl.innerHTML = `<span dir="ltr">${minHum} - ${maxHum}</span>`;
        humExtra.innerText = currentLang === 'ar' ? `(متوسط ${avgHum})`: `(Avg ${avgHum})`;
        humExtra.style.display = 'inline-block'; humNote.style.display = 'block';
    }

    // إعدادات رسالة الإظلام
    const darknessNote = document.getElementById('darknessNote');
    if (age >= 9) {
        darknessNote.style.display = 'block';
    } else {
        darknessNote.style.display = 'none';
    }

    animateValue('anim_targetTemp', 0, targetTemp, 1500, false);
    animateValue('anim_darkness', 0, darknessHours, 1500, false);
    animateValue('anim_timerDur', 0, cycleTime, 1500, false);
    animateValue('anim_totalWeight', 0, totalLiveWeight, 1800, true);
    animateValue('anim_airSpeed', 0, airSpeed, 1800, true);
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