/**
 * Placeholder Image Utilities
 * Generate placeholder images for development
 */

export const getPlaceholderImage = (
  width: number,
  height: number,
  text: string
): string => {
  return `https://placehold.co/${width}x${height}/F5F1E8/7D3C3C?text=${encodeURIComponent(text)}`;
};

// Hero and collection images from Unsplash (saree-related)
export const heroImage = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&h=1080&fit=crop";
export const silkSareesImage = "https://images.unsplash.com/photo-1583391733981-5babdc0b6851?w=800&h=600&fit=crop";
export const cottonSareesImage = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=600&fit=crop";
export const handloomSareesImage = "https://images.unsplash.com/photo-1583391733956-6f6956841ecc?w=800&h=600&fit=crop";
export const festiveSareesImage = "https://images.unsplash.com/photo-1583391733981-5babdc0b6851?w=800&h=600&fit=crop";
export const craftImage = "https://images.unsplash.com/photo-1583391733956-6f6956841ecc?w=800&h=800&fit=crop";
