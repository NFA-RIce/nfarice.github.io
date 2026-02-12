const fs = require('fs');

const filePath = 'c:\\Users\\Mozzarella\\Downloads\\Website\\script.js';
let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the filterFormulas function
const startIdx = content.indexOf('function filterFormulas(){');
const endIdx = content.indexOf('function loadViewed(){');

if (startIdx !== -1 && endIdx !== -1) {
    const newFilterFormulas = `function filterFormulas(){
    const q = (searchBox && searchBox.value||'').toLowerCase();
    const filtered = engineeringFormulas.filter(f=>{
        const catMatch = currentCategory==='all' || f.category===currentCategory;
        // Handle equation as string or array safely
        let eqStr = '';
        if (Array.isArray(f.equation)) {
            eqStr = f.equation.join(' ');
        } else if (typeof f.equation === 'string') {
            eqStr = f.equation;
        }
        const qMatch = !q || f.title.toLowerCase().includes(q) || f.description.toLowerCase().includes(q) || eqStr.toLowerCase().includes(q);
        return catMatch && qMatch;
    });
    renderFormulas(filtered);
}

`;
    
    const before = content.substring(0, startIdx);
    const after = content.substring(endIdx);
    content = before + newFilterFormulas + after;
    
    fs.writeFileSync(filePath, content);
    console.log('✓ Fixed search functionality for equation arrays');
} else {
    console.log('Could not locate filterFormulas function');
}
