const formulas = [
    {
        id: 1,
        title: "Ohm's Law",
        category: "circuit-analysis",
        equation: "V = IR",
        description: "Relationship between voltage, current, and resistance.",
        variables: [
            { name: "V", description: "Voltage (V)" },
            { name: "I", description: "Current (A)" },
            { name: "R", description: "Resistance (Ohm)" }
        ]
    },
    {
        id: 2,
        title: "Kirchhoff's Voltage Law",
        category: "circuit-analysis",
        equation: "\\sum V = 0",
        description: "Loop voltages sum to zero in a closed path.",
        variables: [
            { name: "V", description: "Voltage (V)" }
        ]
    },
    {
        id: 3,
        title: "Kirchhoff's Current Law",
        category: "circuit-analysis",
        equation: "\\sum I_{in} = \\sum I_{out}",
        description: "Currents into a node equal currents out.",
        variables: [
            { name: "I", description: "Current (A)" }
        ]
    },
    {
        id: 4,
        title: "Voltage Divider",
        category: "circuit-analysis",
        equation: "V_{out} = V_{in} \\cdot \\frac{R_2}{R_1 + R_2}",
        description: "Output voltage in a two-resistor divider.",
        variables: [
            { name: "V_{out}", description: "Output voltage (V)" },
            { name: "V_{in}", description: "Input voltage (V)" },
            { name: "R_1, R_2", description: "Resistances (Ohm)" }
        ]
    },
    {
        id: 5,
        title: "Power in Circuits",
        category: "circuit-analysis",
        equation: "P = VI = I^2 R = \\frac{V^2}{R}",
        description: "Power expressed by voltage, current, and resistance.",
        variables: [
            { name: "P", description: "Power (W)" },
            { name: "V", description: "Voltage (V)" },
            { name: "I", description: "Current (A)" }
        ]
    },
    {
        id: 6,
        title: "Capacitor Charge",
        category: "passive-components",
        equation: "Q = CV",
        description: "Charge stored on a capacitor.",
        variables: [
            { name: "Q", description: "Charge (C)" },
            { name: "C", description: "Capacitance (F)" },
            { name: "V", description: "Voltage (V)" }
        ]
    },
    {
        id: 7,
        title: "Inductor Voltage",
        category: "passive-components",
        equation: "V = L \\frac{dI}{dt}",
        description: "Voltage across an inductor from changing current.",
        variables: [
            { name: "V", description: "Voltage (V)" },
            { name: "L", description: "Inductance (H)" },
            { name: "dI/dt", description: "Current slope (A/s)" }
        ]
    },
    {
        id: 8,
        title: "Resonant Frequency (RLC)",
        category: "ac-systems",
        equation: "f_0 = \\frac{1}{2\\pi\\sqrt{LC}}",
        description: "Natural frequency of an RLC circuit.",
        variables: [
            { name: "f_0", description: "Resonant frequency (Hz)" },
            { name: "L", description: "Inductance (H)" },
            { name: "C", description: "Capacitance (F)" }
        ]
    },
    {
        id: 9,
        title: "Impedance",
        category: "ac-systems",
        equation: "Z = \\sqrt{R^2 + (X_L - X_C)^2}",
        description: "Magnitude of impedance in RLC networks.",
        variables: [
            { name: "Z", description: "Impedance (Ohm)" },
            { name: "R", description: "Resistance (Ohm)" },
            { name: "X_L", description: "Inductive reactance" }
        ]
    },
    {
        id: 10,
        title: "Angular Frequency",
        category: "ac-systems",
        equation: "\\omega = 2\\pi f",
        description: "Conversion between frequency and angular frequency.",
        variables: [
            { name: "\\omega", description: "Angular frequency (rad/s)" },
            { name: "f", description: "Frequency (Hz)" }
        ]
    },
    {
        id: 11,
        title: "Diode Current (Shockley)",
        category: "semiconductors",
        equation: "I = I_0 (e^{V_D/(nV_T)} - 1)",
        description: "Diode I-V relationship in forward bias.",
        variables: [
            { name: "I", description: "Current (A)" },
            { name: "I_0", description: "Saturation current (A)" },
            { name: "V_D", description: "Diode voltage (V)" }
        ]
    },
    {
        id: 12,
        title: "BJT Current Gain",
        category: "semiconductors",
        equation: "I_C = \\beta I_B",
        description: "Collector current with current gain beta.",
        variables: [
            { name: "I_C", description: "Collector current (A)" },
            { name: "\\beta", description: "Current gain" },
            { name: "I_B", description: "Base current (A)" }
        ]
    },
    {
        id: 13,
        title: "MOSFET Saturation",
        category: "semiconductors",
        equation: "I_D = \\frac{1}{2} \\mu_n C_{ox} \\frac{W}{L} (V_{GS} - V_{TH})^2",
        description: "Drain current in saturation for a MOSFET.",
        variables: [
            { name: "I_D", description: "Drain current (A)" },
            { name: "V_{GS}", description: "Gate-source voltage (V)" },
            { name: "V_{TH}", description: "Threshold voltage (V)" }
        ]
    },
    {
        id: 14,
        title: "Voltage Gain (dB)",
        category: "amplifiers",
        equation: "A_v(dB) = 20 \\log_{10} \\frac{V_{out}}{V_{in}}",
        description: "Voltage gain expressed in decibels.",
        variables: [
            { name: "A_v(dB)", description: "Voltage gain (dB)" },
            { name: "V_{out}", description: "Output voltage (V)" },
            { name: "V_{in}", description: "Input voltage (V)" }
        ]
    },
    {
        id: 15,
        title: "Gain Bandwidth Product",
        category: "amplifiers",
        equation: "GBW = A_v \\cdot BW",
        description: "Amplifier gain times bandwidth.",
        variables: [
            { name: "GBW", description: "Gain bandwidth product" },
            { name: "A_v", description: "Voltage gain" },
            { name: "BW", description: "Bandwidth (Hz)" }
        ]
    },
    {
        id: 16,
        title: "Low-Pass Cutoff",
        category: "filters",
        equation: "f_c = \\frac{1}{2\\pi RC}",
        description: "Cutoff frequency of an RC low-pass filter.",
        variables: [
            { name: "f_c", description: "Cutoff frequency (Hz)" },
            { name: "R", description: "Resistance (Ohm)" },
            { name: "C", description: "Capacitance (F)" }
        ]
    },
    {
        id: 17,
        title: "High-Pass Cutoff",
        category: "filters",
        equation: "f_c = \\frac{1}{2\\pi RC}",
        description: "Cutoff frequency of an RC high-pass filter.",
        variables: [
            { name: "f_c", description: "Cutoff frequency (Hz)" },
            { name: "R", description: "Resistance (Ohm)" },
            { name: "C", description: "Capacitance (F)" }
        ]
    },
    {
        id: 18,
        title: "Signal to Noise Ratio",
        category: "signals",
        equation: "SNR(dB) = 10 \\log_{10} \\frac{P_{signal}}{P_{noise}}",
        description: "SNR in decibels.",
        variables: [
            { name: "SNR", description: "Signal to noise ratio" },
            { name: "P_{signal}", description: "Signal power" },
            { name: "P_{noise}", description: "Noise power" }
        ]
    },
    {
        id: 19,
        title: "Nyquist Sampling",
        category: "signals",
        equation: "f_s \\ge 2 f_{max}",
        description: "Minimum sampling rate for band-limited signals.",
        variables: [
            { name: "f_s", description: "Sampling frequency (Hz)" },
            { name: "f_{max}", description: "Max signal frequency (Hz)" }
        ]
    },
    {
        id: 20,
        title: "Decibel Conversion",
        category: "signals",
        equation: "dB = 20 \\log_{10}(x)",
        description: "Convert linear amplitude ratio to decibels.",
        variables: [
            { name: "dB", description: "Decibels" },
            { name: "x", description: "Linear ratio" }
        ]
    },
    {
        id: 21,
        title: "Coulomb's Law",
        category: "em-fields",
        equation: "F = k \\frac{q_1 q_2}{r^2}",
        description: "Force between two charges.",
        variables: [
            { name: "F", description: "Force (N)" },
            { name: "k", description: "Coulomb constant" },
            { name: "r", description: "Distance (m)" }
        ]
    },
    {
        id: 22,
        title: "Electric Field",
        category: "em-fields",
        equation: "E = \\frac{F}{q}",
        description: "Field strength from force on a charge.",
        variables: [
            { name: "E", description: "Electric field (N/C)" },
            { name: "F", description: "Force (N)" },
            { name: "q", description: "Charge (C)" }
        ]
    },
    {
        id: 23,
        title: "Magnetic Force",
        category: "em-fields",
        equation: "F = B I L \\sin(\\theta)",
        description: "Force on a current-carrying conductor.",
        variables: [
            { name: "F", description: "Force (N)" },
            { name: "B", description: "Magnetic field (T)" },
            { name: "I", description: "Current (A)" }
        ]
    },
    {
        id: 24,
        title: "Transformer Ratio",
        category: "em-fields",
        equation: "\\frac{V_p}{V_s} = \\frac{N_p}{N_s}",
        description: "Voltage to turns ratio for an ideal transformer.",
        variables: [
            { name: "V_p", description: "Primary voltage (V)" },
            { name: "V_s", description: "Secondary voltage (V)" },
            { name: "N_p", description: "Primary turns" }
        ]
    },
    {
        id: 25,
        title: "Quadratic Formula",
        category: "math-algebra",
        equation: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
        description: "Roots of a quadratic equation ax^2 + bx + c = 0.",
        variables: [
            { name: "a, b, c", description: "Quadratic coefficients" },
            { name: "x", description: "Root value" }
        ]
    },
    {
        id: 26,
        title: "Binomial Square",
        category: "math-algebra",
        equation: "(a+b)^2 = a^2 + 2ab + b^2",
        description: "Expanded form of a squared binomial.",
        variables: [
            { name: "a, b", description: "Input terms" }
        ]
    },
    {
        id: 27,
        title: "Distance Formula",
        category: "math-algebra",
        equation: "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}",
        description: "Distance between two points in Cartesian coordinates.",
        variables: [
            { name: "d", description: "Distance" },
            { name: "(x_1,y_1),(x_2,y_2)", description: "Point coordinates" }
        ]
    },
    {
        id: 28,
        title: "Pythagorean Identity",
        category: "math-trigonometry",
        equation: "\\sin^2(\\theta) + \\cos^2(\\theta) = 1",
        description: "Fundamental trigonometric identity.",
        variables: [
            { name: "\\theta", description: "Angle" }
        ]
    },
    {
        id: 29,
        title: "Sine Angle Sum",
        category: "math-trigonometry",
        equation: "\\sin(\\alpha+\\beta)=\\sin(\\alpha)\\cos(\\beta)+\\cos(\\alpha)\\sin(\\beta)",
        description: "Sine of a sum of two angles.",
        variables: [
            { name: "\\alpha, \\beta", description: "Input angles" }
        ]
    },
    {
        id: 30,
        title: "Derivative Power Rule",
        category: "math-calculus",
        equation: "\\frac{d}{dx}(x^n)=n x^{n-1}",
        description: "Derivative rule for polynomial power terms.",
        variables: [
            { name: "x", description: "Independent variable" },
            { name: "n", description: "Exponent constant" }
        ]
    },
    {
        id: 31,
        title: "Integration Power Rule",
        category: "math-calculus",
        equation: "\\int x^n dx = \\frac{x^{n+1}}{n+1}+C,\\; n\\neq -1",
        description: "Indefinite integral for power terms.",
        variables: [
            { name: "x", description: "Variable" },
            { name: "C", description: "Integration constant" }
        ]
    },
    {
        id: 32,
        title: "Product Rule",
        category: "math-calculus",
        equation: "\\frac{d}{dx}[u(x)v(x)] = u'(x)v(x) + u(x)v'(x)",
        description: "Derivative of a product of two functions.",
        variables: [
            { name: "u, v", description: "Differentiable functions" }
        ]
    }
];

const mainTopics = {
    elex: {
        label: "ELEX",
        subtopics: ["circuit-analysis", "passive-components", "semiconductors", "amplifiers"]
    },
    est: {
        label: "EST",
        subtopics: ["ac-systems", "filters", "signals"]
    },
    geas: {
        label: "GEAS",
        subtopics: ["em-fields"]
    },
    math: {
        label: "MATH",
        subtopics: ["math-algebra", "math-trigonometry", "math-calculus"]
    }
};

const state = {
    query: "",
    main: "elex",
    category: "all",
    pinnedOnly: false,
    sort: "default",
    pinned: loadPinnedSet()
};

const searchInput = document.getElementById("searchInput");
const mainTabs = document.getElementById("mainTabs");
const subTabs = document.getElementById("subTabs");
const grid = document.getElementById("formulaGrid");
const themeToggle = document.getElementById("themeToggle");
const pinnedOnlyToggle = document.getElementById("pinnedOnlyToggle");
const sortSelect = document.getElementById("sortSelect");
const resultsCount = document.getElementById("resultsCount");
const metricTotal = document.getElementById("metricTotal");
const metricVisible = document.getElementById("metricVisible");
const metricPinned = document.getElementById("metricPinned");
const metricTrack = document.getElementById("metricTrack");
const pinnedList = document.getElementById("pinnedList");
const toast = document.getElementById("toast");

let toastTimer;

init();

function init(){
    buildMainTabs();
    buildSubTabs();
    bindEvents();
    initTheme();
    render();
}

function loadPinnedSet(){
    try {
        const raw = localStorage.getItem("atlas-pinned");
        const parsed = raw ? JSON.parse(raw) : [];
        return new Set((parsed || []).filter((id) => Number.isInteger(id)));
    } catch {
        return new Set();
    }
}

function savePinnedSet(){
    localStorage.setItem("atlas-pinned", JSON.stringify(Array.from(state.pinned)));
}

function bindEvents(){
    if (searchInput){
        searchInput.addEventListener("input", (event) => {
            state.query = event.target.value.trim().toLowerCase();
            render();
        });
    }

    if (mainTabs){
        mainTabs.addEventListener("click", (event) => {
            const target = event.target.closest(".tab");
            if (!target || target.disabled) return;
            state.main = target.dataset.main;
            state.category = "all";
            buildMainTabs();
            buildSubTabs();
            render();
        });
    }

    if (subTabs){
        subTabs.addEventListener("click", (event) => {
            const target = event.target.closest(".tab");
            if (!target) return;
            state.category = target.dataset.category;
            buildSubTabs();
            render();
        });
    }

    if (themeToggle){
        themeToggle.addEventListener("click", toggleTheme);
    }

    if (pinnedOnlyToggle){
        pinnedOnlyToggle.addEventListener("change", (event) => {
            state.pinnedOnly = event.target.checked;
            render();
        });
    }

    if (sortSelect){
        sortSelect.addEventListener("change", (event) => {
            state.sort = event.target.value;
            render();
        });
    }

    if (grid){
        grid.addEventListener("click", handleGridAction);
    }

    if (pinnedList){
        pinnedList.addEventListener("click", handlePinnedJump);
    }

    document.addEventListener("keydown", (event) => {
        if (event.key !== "/") return;
        if (event.metaKey || event.ctrlKey || event.altKey) return;
        if (isInputLike(event.target)) return;
        event.preventDefault();
        if (searchInput){
            searchInput.focus();
            searchInput.select();
        }
    });
}

function isInputLike(target){
    if (!target) return false;
    const tagName = target.tagName;
    return target.isContentEditable || tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT";
}

function buildMainTabs(){
    if (!mainTabs) return;
    mainTabs.innerHTML = "";

    Object.entries(mainTopics).forEach(([key, topic]) => {
        const count = formulas.filter((item) => topic.subtopics.includes(item.category)).length;
        const tab = document.createElement("button");
        tab.className = "tab";
        tab.type = "button";
        tab.dataset.main = key;

        const label = document.createElement("span");
        label.textContent = topic.label;
        const meta = document.createElement("span");
        meta.textContent = `${count}`;

        tab.append(label, meta);

        if (key === state.main) tab.classList.add("active");
        if (count === 0) tab.disabled = true;
        mainTabs.appendChild(tab);
    });
}

function buildSubTabs(){
    if (!subTabs) return;
    subTabs.innerHTML = "";

    const topic = mainTopics[state.main];
    if (!topic) return;

    const subCounts = formulas.reduce((acc, item) => {
        if (!topic.subtopics.includes(item.category)) return acc;
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
    }, {});

    const total = topic.subtopics.reduce((sum, key) => sum + (subCounts[key] || 0), 0);
    addSubTab("all", `All (${total})`, state.category === "all");

    topic.subtopics.forEach((category) => {
        const label = `${formatCategory(category)} (${subCounts[category] || 0})`;
        addSubTab(category, label, category === state.category);
    });
}

function addSubTab(category, label, active){
    const tab = document.createElement("button");
    tab.className = "tab";
    tab.type = "button";
    tab.dataset.category = category;
    tab.textContent = label;
    if (active) tab.classList.add("active");
    subTabs.appendChild(tab);
}

function getFilteredFormulas(){
    const allowed = mainTopics[state.main]?.subtopics || [];

    const filtered = formulas.filter((item) => {
        const matchesMain = allowed.includes(item.category);
        const matchesCategory = state.category === "all" || item.category === state.category;
        const matchesPinned = !state.pinnedOnly || state.pinned.has(item.id);

        const haystack = [
            item.title,
            item.description,
            item.equation,
            ...(item.variables || []).map((variable) => `${variable.name} ${variable.description}`)
        ].join(" ").toLowerCase();

        const matchesQuery = !state.query || haystack.includes(state.query);
        return matchesMain && matchesCategory && matchesPinned && matchesQuery;
    });

    if (state.sort === "title"){
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        filtered.sort((a, b) => a.id - b.id);
    }

    return filtered;
}

function render(){
    const filtered = getFilteredFormulas();
    renderGrid(filtered);
    renderPinnedList();
    updateMetrics(filtered.length);

    if (window.MathJax && MathJax.typesetPromise){
        MathJax.typesetPromise().catch(() => {});
    }
}

function renderGrid(filtered){
    if (!grid) return;
    grid.innerHTML = "";

    if (filtered.length === 0){
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.innerHTML = "<strong>No formulas matched.</strong><p>Try another keyword, subtopic, or disable pinned-only mode.</p>";
        grid.appendChild(empty);
        return;
    }

    const fragment = document.createDocumentFragment();

    filtered.forEach((item, index) => {
        const card = document.createElement("article");
        card.className = "formula-card reveal";
        card.style.setProperty("--delay", `${Math.min(index * 35, 280)}ms`);

        const isPinned = state.pinned.has(item.id);
        const varsHtml = (item.variables || [])
            .map((variable) => `<div class=\"formula-var\"><span>\\(${variable.name}\\)</span><span>${variable.description}</span></div>`)
            .join("");

        card.innerHTML = `
            <div class="card-top">
                <span class="badge">${formatCategory(item.category)}</span>
                <div class="card-actions">
                    <button class="card-btn ${isPinned ? "active" : ""}" data-action="pin" data-id="${item.id}">${isPinned ? "Pinned" : "Pin"}</button>
                    <button class="card-btn" data-action="copy" data-id="${item.id}">Copy</button>
                </div>
            </div>
            <div class="formula-title">${item.title}</div>
            <div class="formula-desc">${item.description}</div>
            <div class="formula-equation">$$${item.equation}$$</div>
            <div class="formula-vars">${varsHtml}</div>
        `;

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}

function handleGridAction(event){
    const actionButton = event.target.closest("button[data-action]");
    if (!actionButton) return;

    const id = Number(actionButton.dataset.id);
    if (!Number.isFinite(id)) return;

    const action = actionButton.dataset.action;
    if (action === "pin"){
        togglePinned(id);
        return;
    }

    if (action === "copy"){
        copyFormula(id);
    }
}

function togglePinned(id){
    if (state.pinned.has(id)){
        state.pinned.delete(id);
        showToast("Formula removed from pinned.");
    } else {
        state.pinned.add(id);
        showToast("Formula added to pinned.");
    }

    savePinnedSet();
    render();
}

function copyFormula(id){
    const formula = formulas.find((item) => item.id === id);
    if (!formula) return;

    const payload = `${formula.title}\n${formula.equation}`;

    if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(payload)
            .then(() => showToast("Equation copied to clipboard."))
            .catch(() => fallbackCopy(payload));
        return;
    }

    fallbackCopy(payload);
}

function fallbackCopy(text){
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "readonly");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand("copy");
        showToast("Equation copied to clipboard.");
    } catch {
        showToast("Copy failed. Use manual copy.");
    }

    document.body.removeChild(textarea);
}

function renderPinnedList(){
    if (!pinnedList) return;
    pinnedList.innerHTML = "";

    const items = formulas.filter((item) => state.pinned.has(item.id));
    if (items.length === 0){
        const empty = document.createElement("li");
        empty.className = "pinned-item empty";
        empty.textContent = "No pinned formulas yet.";
        pinnedList.appendChild(empty);
        return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
        const node = document.createElement("li");
        const button = document.createElement("button");
        button.className = "pinned-item";
        button.type = "button";
        button.dataset.id = `${item.id}`;
        button.textContent = item.title;
        node.appendChild(button);
        fragment.appendChild(node);
    });

    pinnedList.appendChild(fragment);
}

function handlePinnedJump(event){
    const button = event.target.closest("button[data-id]");
    if (!button) return;

    const id = Number(button.dataset.id);
    const formula = formulas.find((item) => item.id === id);
    if (!formula) return;

    const mainKey = findMainTopicForCategory(formula.category);
    if (mainKey){
        state.main = mainKey;
        state.category = formula.category;
        buildMainTabs();
        buildSubTabs();
    }

    state.query = formula.title.toLowerCase();
    if (searchInput){
        searchInput.value = formula.title;
        searchInput.focus();
    }

    render();
    showToast(`Loaded: ${formula.title}`);
}

function findMainTopicForCategory(category){
    return Object.entries(mainTopics).find(([, value]) => value.subtopics.includes(category))?.[0] || null;
}

function updateMetrics(visibleCount){
    if (metricTotal) metricTotal.textContent = `${formulas.length}`;
    if (metricVisible) metricVisible.textContent = `${visibleCount}`;
    if (metricPinned) metricPinned.textContent = `${state.pinned.size}`;
    if (metricTrack){
        const topic = mainTopics[state.main];
        metricTrack.textContent = topic ? topic.label : "-";
    }

    if (resultsCount){
        const text = `${visibleCount} result${visibleCount === 1 ? "" : "s"}`;
        resultsCount.textContent = text;
    }
}

function initTheme(){
    const stored = localStorage.getItem("atlas-theme");
    if (stored === "dark"){
        document.body.classList.add("theme-dark");
    } else {
        document.body.classList.remove("theme-dark");
    }

    updateThemeLabel();
}

function toggleTheme(){
    document.body.classList.toggle("theme-dark");
    const isDark = document.body.classList.contains("theme-dark");
    localStorage.setItem("atlas-theme", isDark ? "dark" : "light");
    updateThemeLabel();
}

function updateThemeLabel(){
    if (!themeToggle) return;
    const isDark = document.body.classList.contains("theme-dark");
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
}

function formatCategory(category){
    return category.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function showToast(message){
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 1400);
}


