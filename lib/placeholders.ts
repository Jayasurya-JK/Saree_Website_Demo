/**
 * Placeholder Image Utilities
 * Generate placeholder images for development
 */

// Simple placeholder using Next.js gray background
export const getPlaceholderImage = (
  width: number,
  height: number,
  text: string
): string => {
  // Return a data URI for a simple colored placeholder
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23F5F1E8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%237D3C3C'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
};

// Placeholder images for collections and hero
export const heroImage = getPlaceholderImage(1920, 1080, 'Hero Image');
export const silkSareesImage = getPlaceholderImage(800, 600, 'Silk Sarees');
export const cottonSareesImage = getPlaceholderImage(800, 600, 'Cotton Sarees');
export const handloomSareesImage = getPlaceholderImage(800, 600, 'Handloom Sarees');
export const festiveSareesImage = getPlaceholderImage(800, 600, 'Festive Sarees');
export const craftImage = getPlaceholderImage(800, 800, 'Craft Image');
