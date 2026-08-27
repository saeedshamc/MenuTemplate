// Menu data. `stamp` maps to a category accent color token defined in index.css.
// Images are hotlinked from Unsplash (free to use under the Unsplash License).

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`

const PHOTOS = {
  meat: img('photo-1504973960431-1c467e159aa4'),        // seared steak plate
  octopus: img('photo-1572438631563-a3429408a845'),      // charred octopus
  salad: img('photo-1592417817098-8fd3d9eb14a5'),        // tomato & greens plate
  risotto: img('photo-1476124369491-e7addf5db371'),      // risotto bowl
  roastedVeg: img('photo-1515573866280-06bda6d4e16f'),   // roasted veg plate
  salmon: img('photo-1580959375944-abd7e991f971'),       // pan-seared fish plate
  cake: img('photo-1514435390218-898a0e01517a'),         // cake slice
  coffee: img('photo-1480348709911-be15f2c579ff'),       // latte on saucer
  croissant: img('photo-1679449223735-444c4f71f0dd'),    // croissant on plate
  toast: img('photo-1515041761709-f9fc96e04cd3'),        // avocado toast
  tea: img('photo-1623193893875-b74cfcd406b2'),          // tea with lemon
  iceCream: img('photo-1588195539297-f0b4efdb5472'),     // bowl of ice cream
  sundae: img('photo-1588543891448-2690a667e7f7'),       // ice cream sundae
  milkshake: img('photo-1686638745403-d21193f16b2f'),    // milkshake
}

export const categories = [
  { id: 'all', label: 'Everything' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'cafe', label: 'Café' },
  { id: 'icecream', label: 'Ice Cream' },
]

export const menuItems = [
  // ---------- RESTAURANT ----------
  // Starters
  { id: 'r1', category: 'restaurant', course: 'Starters', name: 'Charred Octopus', description: 'Smoked paprika, fingerling potato, salsa verde', price: 16.5, tags: ['seafood', 'gluten-free'], image: PHOTOS.octopus },
  { id: 'r2', category: 'restaurant', course: 'Starters', name: 'Burrata & Heirloom', description: 'Tomato, basil oil, aged balsamic, sourdough crumb', price: 13, tags: ['vegetarian'], image: PHOTOS.salad },
  { id: 'r3', category: 'restaurant', course: 'Starters', name: 'Beef Carpaccio', description: 'Shaved parmesan, capers, arugula, lemon oil', price: 15, tags: ['signature'], image: PHOTOS.meat },
  { id: 'r4', category: 'restaurant', course: 'Starters', name: 'Roasted Beet Salad', description: 'Whipped goat cheese, candied walnut, watercress', price: 12.5, tags: ['vegetarian', 'gluten-free'], image: PHOTOS.salad },
  { id: 'r5', category: 'restaurant', course: 'Starters', name: 'French Onion Soup', description: 'Slow-caramelized onion, gruyère crouton', price: 11, tags: ['vegetarian'], image: PHOTOS.roastedVeg },
  { id: 'r6', category: 'restaurant', course: 'Starters', name: 'Crispy Calamari', description: 'Lemon aioli, chili flake, fried herbs', price: 14, tags: ['seafood'], image: PHOTOS.roastedVeg },

  // Mains
  { id: 'r7', category: 'restaurant', course: 'Mains', name: 'Braised Short Rib', description: 'Red wine jus, celeriac purée, charred leek', price: 28, tags: ['signature'], image: PHOTOS.meat },
  { id: 'r8', category: 'restaurant', course: 'Mains', name: 'Wild Mushroom Risotto', description: 'Parmesan, truffle oil, crisp sage', price: 21, tags: ['vegetarian', 'gluten-free'], image: PHOTOS.risotto },
  { id: 'r9', category: 'restaurant', course: 'Mains', name: 'Pan-Seared Salmon', description: 'Charred lemon, dill yogurt, roasted fennel', price: 24.5, tags: ['seafood', 'gluten-free'], image: PHOTOS.salmon },
  { id: 'r10', category: 'restaurant', course: 'Mains', name: 'Slow-Roast Lamb Shoulder', description: 'Cumin, pomegranate, charred carrot, tahini', price: 26, tags: ['signature'], image: PHOTOS.meat },
  { id: 'r11', category: 'restaurant', course: 'Mains', name: 'Herb-Roasted Chicken', description: 'Pan jus, roasted garlic, market vegetables', price: 22, tags: ['gluten-free'], image: PHOTOS.roastedVeg },
  { id: 'r12', category: 'restaurant', course: 'Mains', name: 'Wild Boar Ragù Pappardelle', description: 'Slow-braised ragù, pecorino, fresh herbs', price: 23.5, tags: ['signature'], image: PHOTOS.risotto },
  { id: 'r13', category: 'restaurant', course: 'Mains', name: 'Grilled Ribeye', description: '10oz, bone marrow butter, crispy shallots', price: 34, tags: ['signature'], image: PHOTOS.meat },
  { id: 'r14', category: 'restaurant', course: 'Mains', name: 'Seafood Linguine', description: 'Clams, mussels, prawns, white wine, chili', price: 25, tags: ['seafood'], image: PHOTOS.risotto },

  // Sides
  { id: 'r15', category: 'restaurant', course: 'Sides', name: 'Crispy Rosemary Potatoes', description: 'Garlic aioli, flaky salt', price: 7, tags: ['vegetarian', 'vegan'], image: PHOTOS.roastedVeg },
  { id: 'r16', category: 'restaurant', course: 'Sides', name: 'Charred Broccolini', description: 'Chili oil, toasted almond, lemon', price: 8, tags: ['vegan', 'gluten-free'], image: PHOTOS.roastedVeg },
  { id: 'r17', category: 'restaurant', course: 'Sides', name: 'Truffle Mac and Cheese', description: 'Three cheeses, black truffle, panko crust', price: 9.5, tags: ['vegetarian'], image: PHOTOS.risotto },
  { id: 'r18', category: 'restaurant', course: 'Sides', name: 'Grilled Asparagus', description: 'Shaved parmesan, lemon zest', price: 8, tags: ['vegetarian', 'gluten-free'], image: PHOTOS.roastedVeg },

  // Desserts
  { id: 'r19', category: 'restaurant', course: 'Desserts', name: 'Dark Chocolate Torte', description: 'Sea salt, raspberry coulis, gold leaf', price: 10, tags: ['vegetarian'], image: PHOTOS.cake },
  { id: 'r20', category: 'restaurant', course: 'Desserts', name: 'Classic Tiramisu', description: 'Espresso-soaked ladyfingers, mascarpone', price: 9.5, tags: ['vegetarian'], image: PHOTOS.cake },
  { id: 'r21', category: 'restaurant', course: 'Desserts', name: 'Crème Brûlée', description: 'Madagascar vanilla, caramelized sugar crust', price: 9, tags: ['vegetarian', 'gluten-free'], image: PHOTOS.cake },

  // ---------- CAFÉ ----------
  // Coffee
  { id: 'c1', category: 'cafe', course: 'Coffee', name: 'Single-Origin Espresso', description: 'Rotating micro-lot, tasting notes on the board', price: 3.5, tags: ['vegan'], image: PHOTOS.coffee },
  { id: 'c2', category: 'cafe', course: 'Coffee', name: 'Cardamom Cortado', description: 'House cardamom syrup, steamed milk', price: 4.75, tags: [], image: PHOTOS.coffee },
  { id: 'c3', category: 'cafe', course: 'Coffee', name: 'Iced Oat Latte', description: 'Double shot, oat milk, light vanilla', price: 5.25, tags: ['vegan'], image: PHOTOS.coffee },
  { id: 'c4', category: 'cafe', course: 'Coffee', name: 'Classic Cappuccino', description: 'Double espresso, steamed milk, thick foam', price: 4.5, tags: [], image: PHOTOS.coffee },
  { id: 'c5', category: 'cafe', course: 'Coffee', name: 'Cold Brew', description: 'Steeped 18 hours, served over ice', price: 4.75, tags: ['vegan'], image: PHOTOS.coffee },

  // Tea & More
  { id: 'c6', category: 'cafe', course: 'Tea & More', name: 'Smoked Earl Grey', description: 'Loose leaf, honey on request', price: 4, tags: ['vegan'], image: PHOTOS.tea },
  { id: 'c7', category: 'cafe', course: 'Tea & More', name: 'Turmeric Golden Milk', description: 'Steamed milk, ginger, black pepper, honey', price: 4.5, tags: ['gluten-free'], image: PHOTOS.tea },
  { id: 'c8', category: 'cafe', course: 'Tea & More', name: 'Moroccan Mint Tea', description: 'Fresh mint, green tea, lightly sweetened', price: 4, tags: ['vegan', 'gluten-free'], image: PHOTOS.tea },
  { id: 'c9', category: 'cafe', course: 'Tea & More', name: 'Matcha Latte', description: 'Ceremonial-grade matcha, steamed milk', price: 5, tags: ['vegetarian'], image: PHOTOS.tea },

  // Pastries
  { id: 'c10', category: 'cafe', course: 'Pastries', name: 'Pistachio Croissant', description: 'Laminated dough, house pistachio cream', price: 5.5, tags: ['vegetarian'], image: PHOTOS.croissant },
  { id: 'c11', category: 'cafe', course: 'Pastries', name: 'Almond Butter Croissant', description: 'Toasted almond, powdered sugar', price: 5.25, tags: ['vegetarian'], image: PHOTOS.croissant },
  { id: 'c12', category: 'cafe', course: 'Pastries', name: 'Cinnamon Roll', description: 'Brown butter icing, toasted pecan', price: 5, tags: ['vegetarian'], image: PHOTOS.croissant },
  { id: 'c13', category: 'cafe', course: 'Pastries', name: 'Blueberry Muffin', description: 'Wild blueberries, streusel top', price: 4.5, tags: ['vegetarian'], image: PHOTOS.croissant },

  // Light Bites
  { id: 'c14', category: 'cafe', course: 'Light Bites', name: 'Avocado Toast', description: 'Sourdough, chili flake, soft egg, lime', price: 9.5, tags: ['vegetarian'], image: PHOTOS.toast },
  { id: 'c15', category: 'cafe', course: 'Light Bites', name: 'Fig & Ricotta Toast', description: 'Whipped ricotta, honey, toasted walnut', price: 8.75, tags: ['vegetarian'], image: PHOTOS.toast },
  { id: 'c16', category: 'cafe', course: 'Light Bites', name: 'Smoked Salmon Bagel', description: 'Cream cheese, capers, pickled red onion', price: 10.5, tags: ['seafood'], image: PHOTOS.toast },
  { id: 'c17', category: 'cafe', course: 'Light Bites', name: 'Caprese Panini', description: 'Mozzarella, tomato, basil, balsamic glaze', price: 9, tags: ['vegetarian'], image: PHOTOS.toast },

  // ---------- ICE CREAM ----------
  // Scoops
  { id: 'i1', category: 'icecream', course: 'Scoops', name: 'Sicilian Pistachio', description: 'Roasted pistachio, a whisper of sea salt', price: 4.25, tags: ['gluten-free'], image: PHOTOS.iceCream },
  { id: 'i2', category: 'icecream', course: 'Scoops', name: 'Salted Caramel', description: 'Slow-cooked caramel, Maldon salt', price: 4.25, tags: ['gluten-free'], image: PHOTOS.iceCream },
  { id: 'i3', category: 'icecream', course: 'Scoops', name: 'Sour Cherry Sorbet', description: 'Dairy-free, tart Morello cherries', price: 4, tags: ['vegan', 'gluten-free'], image: PHOTOS.iceCream },
  { id: 'i4', category: 'icecream', course: 'Scoops', name: 'Toasted Coconut', description: 'Charred coconut flake, condensed milk swirl', price: 4.25, tags: ['gluten-free'], image: PHOTOS.iceCream },
  { id: 'i5', category: 'icecream', course: 'Scoops', name: 'Belgian Chocolate', description: '70% dark chocolate, cocoa nib crunch', price: 4.25, tags: ['vegetarian', 'gluten-free'], image: PHOTOS.iceCream },
  { id: 'i6', category: 'icecream', course: 'Scoops', name: 'Mango Sorbet', description: 'Dairy-free, Alphonso mango purée', price: 4, tags: ['vegan', 'gluten-free'], image: PHOTOS.iceCream },
  { id: 'i7', category: 'icecream', course: 'Scoops', name: 'Vanilla Bean', description: 'Madagascar vanilla bean, cream base', price: 4, tags: ['vegetarian', 'gluten-free'], image: PHOTOS.iceCream },
  { id: 'i8', category: 'icecream', course: 'Scoops', name: 'Strawberry Cheesecake', description: 'Graham crumble, strawberry swirl', price: 4.5, tags: ['vegetarian'], image: PHOTOS.iceCream },

  // Sundaes
  { id: 'i9', category: 'icecream', course: 'Sundaes', name: 'The Affogato', description: 'Vanilla bean, hot espresso shot, cocoa nib', price: 7.5, tags: ['signature'], image: PHOTOS.sundae },
  { id: 'i10', category: 'icecream', course: 'Sundaes', name: 'Banana Split', description: 'Three scoops, hot fudge, roasted banana, almond', price: 9, tags: ['signature'], image: PHOTOS.sundae },
  { id: 'i11', category: 'icecream', course: 'Sundaes', name: 'Berry Pavlova Cup', description: 'Meringue shards, whipped cream, mixed berry compote', price: 8.25, tags: ['vegetarian', 'gluten-free'], image: PHOTOS.sundae },
  { id: 'i12', category: 'icecream', course: 'Sundaes', name: 'Hot Fudge Brownie Sundae', description: 'Warm brownie, hot fudge, toasted walnut', price: 9.5, tags: ['signature'], image: PHOTOS.sundae },

  // Milkshakes
  { id: 'i13', category: 'icecream', course: 'Milkshakes', name: 'Classic Vanilla Shake', description: 'Vanilla bean ice cream, whipped cream', price: 6.5, tags: ['vegetarian'], image: PHOTOS.milkshake },
  { id: 'i14', category: 'icecream', course: 'Milkshakes', name: 'Chocolate Malt Shake', description: 'Belgian chocolate, malt powder', price: 7, tags: ['vegetarian'], image: PHOTOS.milkshake },
  { id: 'i15', category: 'icecream', course: 'Milkshakes', name: 'Strawberry Shake', description: 'Fresh strawberry purée, whipped cream', price: 6.5, tags: ['vegetarian', 'gluten-free'], image: PHOTOS.milkshake },
]
