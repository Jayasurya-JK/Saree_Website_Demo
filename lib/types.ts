/**
 * TypeScript Type Definitions
 */

// Product Image
export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  position?: number;
}

// Product Attributes
export interface Attribute {
  name: string;
  value: string;
}

// Saree-specific Attributes
export interface SareeAttributes {
  fabric: string;
  weave: string;
  occasion: string[];
  care: string;
  length: string;
  blouse: string;
  color: string[];
  border?: string;
  pallu?: string;
}

// Metadata
export interface MetaData {
  key: string;
  value: string;
}

// Product
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  regularPrice: number;
  salePrice?: number;
  onSale: boolean;
  images: ProductImage[];
  categories: Category[];
  attributes: Attribute[];
  sareeAttributes?: SareeAttributes;
  inStock: boolean;
  stockQuantity?: number;
  sku?: string;
  metaData?: MetaData[];
  createdAt: string;
  updatedAt: string;
}

// Category
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  count?: number;
}

// Cart Item
export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  subtotal: number;
}

// Cart
export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  itemCount: number;
}

// Collection
export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  featured?: boolean;
}

// Filter Options
export interface FilterOptions {
  categories?: string[];
  fabrics?: string[];
  weaves?: string[];
  occasions?: string[];
  colors?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  sortBy?: 'newest' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
}

// Active Filters
export interface ActiveFilters {
  category?: string;
  fabric?: string[];
  weave?: string[];
  occasion?: string[];
  color?: string[];
  priceMin?: number;
  priceMax?: number;
  sortBy?: string;
  search?: string;
}

// API Response
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Paginated Response
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

// Wishlist Item (simplified Product reference)
export type WishlistItem = Pick<Product, 'id' | 'name' | 'slug' | 'price' | 'images' | 'onSale' | 'salePrice'>;

// Search Result
export interface SearchResult {
  products: Product[];
  categories: Category[];
  totalResults: number;
}
