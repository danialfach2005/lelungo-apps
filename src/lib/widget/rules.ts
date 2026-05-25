import { Position, Bounds } from "./types";

/**
 * Pure function: Detects if two rectangles overlap.
 */
export function detectOverlap(el1: DOMRect, el2: DOMRect): boolean {
  return !(
    el1.right < el2.left ||
    el1.left > el2.right ||
    el1.bottom < el2.top ||
    el1.top > el2.bottom
  );
}

/**
 * Business Rule: Finds a safe position that avoids overlapping with important elements.
 */
export function getSafePosition(
  currentPos: Position,
  rect: DOMRect,
  bounds: Bounds,
  importantSelectors: string[] = ["nav", "header", "footer", ".btn-primary", ".card-important", "button"]
): Position {
  const elements = importantSelectors.flatMap((selector) =>
    Array.from(document.querySelectorAll(selector))
  );

  const currentRect = new DOMRect(currentPos.x, currentPos.y, rect.width, rect.height);
  const isOverlapping = elements.some((el) => detectOverlap(currentRect, el.getBoundingClientRect()));

  if (!isOverlapping) return currentPos;

  // Auto-reposition to nearest free quadrant (corners)
  const padding = 16;
  const corners: Position[] = [
    { x: bounds.minX + padding, y: bounds.minY + padding }, // Top-Left
    { x: bounds.maxX - padding, y: bounds.minY + padding }, // Top-Right
    { x: bounds.minX + padding, y: bounds.maxY - padding }, // Bottom-Left
    { x: bounds.maxX - padding, y: bounds.maxY - padding }, // Bottom-Right
  ];

  for (const corner of corners) {
    const cornerRect = new DOMRect(corner.x, corner.y, rect.width, rect.height);
    const cornerOverlaps = elements.some((el) => detectOverlap(cornerRect, el.getBoundingClientRect()));
    if (!cornerOverlaps) return corner;
  }

  return corners[1]; // Fallback to top-right
}

/**
 * Business Rule: Snaps the position to the nearest grid corner.
 */
export function snapToGrid(pos: Position, rect: DOMRect, bounds: Bounds): Position {
  const padding = 16;
  const centerX = bounds.maxX / 2;
  const centerY = bounds.maxY / 2;

  return {
    x: pos.x < centerX ? bounds.minX + padding : bounds.maxX - padding,
    y: pos.y < centerY ? bounds.minY + padding : bounds.maxY - padding,
  };
}
