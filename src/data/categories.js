const CATEGORIES_STORAGE_KEY = 'letsdropship_categories';

const defaultCategories = [
  { id: 1, name: "ছেলেদের ফ্যাশন", icon: "👕", color: "bg-blue-100" },
  { id: 2, name: "মেয়েদের ফ্যাশন", icon: "👗", color: "bg-pink-100" },
  { id: 3, name: "ইলেকট্রনিক্স", icon: "📱", color: "bg-purple-100" },
  { id: 4, name: "বিউটি ও লাইফস্টাইল", icon: "💄", color: "bg-orange-100" },
  { id: 5, name: "কিডস জোন", icon: "👶", color: "bg-green-100" },
  { id: 6, name: "অফার প্যাক", icon: "🎁", color: "bg-red-100" },
  { id: 7, name: "ঘর ও লাইফস্টাইল", icon: "🏡", color: "bg-yellow-100" },
  { id: 8, name: "খেলাধুলা", icon: "⚽", color: "bg-teal-100" },
];

const initializeCategories = () => {
  try {
    const storedCategories = localStorage.getItem(CATEGORIES_STORAGE_KEY);
    if (!storedCategories) {
      localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(defaultCategories));
    }
  } catch (error) {
    console.error("Failed to initialize categories in localStorage", error);
  }
};

initializeCategories();

const notifyUpdate = () => {
  window.dispatchEvent(new Event('categoriesUpdated'));
};

export const getCategories = () => {
  try {
    const storedCategories = localStorage.getItem(CATEGORIES_STORAGE_KEY);
    return storedCategories ? JSON.parse(storedCategories) : [];
  } catch (error) {
    console.error("Failed to get categories from localStorage", error);
    return [];
  }
};

export const addCategory = (category) => {
  try {
    const categories = getCategories();
    const newCategory = { 
      ...category, 
      id: Date.now(),
      color: category.color || `bg-gray-100`
    };
    const updatedCategories = [...categories, newCategory];
    localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(updatedCategories));
    notifyUpdate();
    return newCategory;
  } catch (error) {
    console.error("Failed to add category to localStorage", error);
  }
};

export const updateCategory = (updatedCategory) => {
  try {
    const categories = getCategories();
    const updatedCategories = categories.map(c => 
      c.id === updatedCategory.id ? { ...c, ...updatedCategory } : c
    );
    localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(updatedCategories));
    notifyUpdate();
    return updatedCategory;
  } catch (error) {
    console.error("Failed to update category in localStorage", error);
  }
};

export const deleteCategory = (categoryId) => {
  try {
    const categories = getCategories();
    const updatedCategories = categories.filter(c => c.id !== categoryId);
    localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(updatedCategories));
    notifyUpdate();
  } catch (error) {
    console.error("Failed to delete category from localStorage", error);
  }
};