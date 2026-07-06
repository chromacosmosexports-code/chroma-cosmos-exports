const fs = require('fs');

const files = ['index.html', 'about.html', 'products.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/href="[^"]*">(\s*)Home(\s*)<\/a>/g, 'href="index.html">$1Home$2</a>');
    content = content.replace(/href="[^"]*">(\s*)Products(\s*)<\/a>/g, 'href="products.html">$1Products$2</a>');
    content = content.replace(/href="[^"]*">(\s*)About Us(\s*)<\/a>/g, 'href="about.html">$1About Us$2</a>');
    fs.writeFileSync(file, content);
});

console.log("Linked all files successfully with whitespace support!");
