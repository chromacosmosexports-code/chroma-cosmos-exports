const fs = require('fs');

const products = [
    {
        title: "Premium Basmati Rice", origin: "India", grade: "Grade A Long Grain", moq: "1 Metric Ton",
        img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        title: "Organic Farm Carrots", origin: "USA", grade: "Premium Grade", moq: "500 kg",
        img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        title: "Fresh Cavendish Bananas", origin: "Ecuador", grade: "Export Quality A", moq: "2 Metric Tons",
        img: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        title: "Jasmine White Rice", origin: "Thailand", grade: "AAA 100% Broken-Free", moq: "1 Metric Ton",
        img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        title: "Fresh Red Tomatoes", origin: "Spain", grade: "Class I", moq: "1 Metric Ton",
        img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        title: "Sweet Alphonso Mangoes", origin: "India", grade: "Premium Hand-picked", moq: "500 kg",
        img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400&h=300"
    }
];

let gridHtml = '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">\n';

products.forEach((p, index) => {
    gridHtml += `<!-- Product Card ${index + 1} -->
<div class="bg-surface rounded-lg shadow-sm border border-surface-variant overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
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

let content = fs.readFileSync('products.html', 'utf8');

const regex = /<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">[\s\S]*?<\/div>\s*<\/section>/;
content = content.replace(regex, gridHtml + '\n</section>');

fs.writeFileSync('products.html', content);
console.log('Successfully updated demo products!');
