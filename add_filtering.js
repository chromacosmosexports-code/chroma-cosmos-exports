const fs = require('fs');

const products = [
    {
        title: "Premium Basmati Rice", origin: "India", grade: "Grade A Long Grain", moq: "1 Metric Ton", category: "rice",
        img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        title: "Organic Farm Carrots", origin: "USA", grade: "Premium Grade", moq: "500 kg", category: "vegetables",
        img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        title: "Fresh Cavendish Bananas", origin: "Ecuador", grade: "Export Quality A", moq: "2 Metric Tons", category: "fruits",
        img: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        title: "Jasmine White Rice", origin: "Thailand", grade: "AAA 100% Broken-Free", moq: "1 Metric Ton", category: "rice",
        img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        title: "Fresh Red Tomatoes", origin: "Spain", grade: "Class I", moq: "1 Metric Ton", category: "vegetables",
        img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        title: "Sweet Alphonso Mangoes", origin: "India", grade: "Premium Hand-picked", moq: "500 kg", category: "fruits",
        img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400&h=300"
    }
];

// Rebuild grid with data-category
let gridHtml = '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter" id="productGrid">\n';
products.forEach((p, index) => {
    gridHtml += `<!-- Product Card ${index + 1} -->
<div class="product-card bg-surface rounded-lg shadow-sm border border-surface-variant overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col" data-category="${p.category}">
<img class="w-full h-48 object-cover" data-alt="${p.title}" src="${p.img}"/>
<div class="p-md flex flex-col flex-grow">
<h3 class="font-headline-md text-headline-md text-primary mb-xs">${p.title}</h3>
<div class="space-y-xs mb-md flex-grow">
<p class="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-sm text-outline">public</span> Origin: ${p.origin}
                            </p>
<p class="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-sm text-outline">verified</span> Grade: ${p.grade}
                            </p>
<p class="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-sm text-outline">inventory_2</span> MOQ: ${p.moq}
                            </p>
</div>
<button class="w-full font-label-md text-label-md bg-transparent border-2 border-primary text-primary hover:bg-primary-container hover:text-on-primary hover:border-primary-container py-2 rounded transition-colors duration-300">
                            Request Quote
                        </button>
</div>
</div>
`;
});
gridHtml += '</div>';

// Rebuild sidebar <ul>
let sidebarHtml = `<ul class="space-y-base" id="categoryFilter">
<li>
<button data-filter="all" class="category-btn w-full text-left font-label-md text-label-md py-2 px-3 bg-primary text-on-primary rounded shadow-sm flex items-center justify-between transition-colors">
                            All Categories
                            <span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</li>
<li>
<button data-filter="vegetables" class="category-btn w-full text-left font-label-md text-label-md py-2 px-3 text-on-surface-variant hover:bg-surface-variant hover:text-primary rounded transition-colors flex items-center justify-between">
                            Vegetables
                            <span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</li>
<li>
<button data-filter="rice" class="category-btn w-full text-left font-label-md text-label-md py-2 px-3 text-on-surface-variant hover:bg-surface-variant hover:text-primary rounded transition-colors flex items-center justify-between">
                            Rice
                            <span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</li>
<li>
<button data-filter="fruits" class="category-btn w-full text-left font-label-md text-label-md py-2 px-3 text-on-surface-variant hover:bg-surface-variant hover:text-primary rounded transition-colors flex items-center justify-between">
                            Fruits
                            <span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</li>
</ul>`;

let content = fs.readFileSync('products.html', 'utf8');

// Replace grid
const gridRegex = /<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter"[\s\S]*?<\/div>\s*<\/section>/;
content = content.replace(gridRegex, gridHtml + '\n</section>');

// Replace sidebar
const sidebarRegex = /<ul class="space-y-base">[\s\S]*?<\/ul>/;
content = content.replace(sidebarRegex, sidebarHtml);

// Add Script tag
const scriptTag = `
<script>
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-btn');
    const cards = document.querySelectorAll('.product-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset active styles
            buttons.forEach(btn => {
                btn.className = "category-btn w-full text-left font-label-md text-label-md py-2 px-3 text-on-surface-variant hover:bg-surface-variant hover:text-primary rounded transition-colors flex items-center justify-between";
            });
            // Set active style for clicked button
            button.className = "category-btn w-full text-left font-label-md text-label-md py-2 px-3 bg-primary text-on-primary rounded shadow-sm flex items-center justify-between transition-colors";

            const filter = button.getAttribute('data-filter');
            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
</script>
</body>
`;
// Only add script if it doesn't already exist
if (!content.includes('const buttons = document.querySelectorAll')) {
    content = content.replace(/<\/body>/, scriptTag);
}

fs.writeFileSync('products.html', content);
console.log('Successfully added filtering functionality!');
