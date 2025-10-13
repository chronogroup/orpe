<!-- 75378bbf-ab0e-44d1-a0d2-d87a2c768bb2 65bd74f7-3415-47ff-a029-fc324b0e5904 -->

# Loading Screen Animation

## Overview

Create an engaging loading experience with animated gold coins falling continuously over the Loading image, shown for a minimum of 3 seconds on initial load or while the page is actually loading.

## Implementation Steps

### 1. Create Loading Component (`src/components/orpe/LoadingScreen.tsx`)

Client component with:

- **Loading image display**: Full-screen background with Loading image.png
- **Animated gold coins**: CSS animation with multiple coin elements falling at different speeds/delays
- **Continuous animation**: Coins fall from top to bottom, loop infinitely
- **Fade in/out transitions**: Smooth appearance and disappearance
- **Respect reduced motion**: Disable animations for users with `prefers-reduced-motion`

Coin animation details:

- Use CSS `@keyframes` for falling animation
- Multiple coin elements (10-15) with randomized:
  - Horizontal positions (left: 10%, 25%, 40%, etc.)
  - Animation delays (0s, 0.5s, 1s, etc.)
  - Fall durations (2s, 2.5s, 3s variations)
  - Sizes (small, medium variations)
- Transform: translateY from -100px to 100vh
- Opacity fade in/out during fall
- Use emoji 🪙 or create SVG gold coin element

### 2. Add Loading Styles (`src/app/globals.css`)

- Keyframe animation for falling coins
- Fade in/out transitions for loading screen
- Z-index management (loading screen on top)
- Background overlay with image
- Reduced motion overrides

### 3. Create Loading Hook (`src/hooks/usePageLoading.ts`)

Custom hook that manages:

- Initial mount state (true)
- Minimum 3-second display timer
- Next.js Router loading events (if using client-side navigation)
- Returns `isLoading` boolean

Logic:

```
- On mount: isLoading = true
- Start 3-second timer
- After 3 seconds AND page is ready: isLoading = false
- Handles both minimum time and actual loading time
```

### 4. Integrate in Layout (`src/app/layout.tsx`)

- Import and render LoadingScreen component
- Pass loading state from usePageLoading hook
- Conditionally render based on isLoading state
- Ensure it covers entire viewport

### 5. Optional: Add Coin SVG Component

If emoji doesn't look good:

- Create simple SVG gold coin component
- Gold circle with shine effect
- Reusable for animation

## Technical Details

### Animation Approach

1. **CSS-based**: Use pure CSS animations for performance
2. **Hardware-accelerated**: Use `transform` and `opacity` only
3. **Staggered coins**: Multiple elements with different delays create continuous effect
4. **Infinite loop**: Each coin restarts from top after reaching bottom

### Timing Strategy

```typescript
const [isLoading, setIsLoading] = useState(true);
const [minTimeElapsed, setMinTimeElapsed] = useState(false);

useEffect(() => {
  // Minimum 3-second timer
  const timer = setTimeout(() => setMinTimeElapsed(true), 3000);

  // Check if document is ready
  if (document.readyState === "complete" && minTimeElapsed) {
    setIsLoading(false);
  }

  return () => clearTimeout(timer);
}, [minTimeElapsed]);
```

## Files to Create/Modify

1. `src/components/orpe/LoadingScreen.tsx` - New loading component
2. `src/hooks/usePageLoading.ts` - New loading state hook
3. `src/app/globals.css` - Add coin animation styles
4. `src/app/layout.tsx` - Integrate loading screen

## Design Tokens

- Background: Loading image.png as backdrop
- Coins: Gold color (orange-400/500 from Tailwind)
- Overlay: Semi-transparent if needed
- Z-index: 9999 for loading screen
- Animations: 2-3 second duration per coin fall

## Accessibility

- Add `role="status"` and `aria-live="polite"` to loading screen
- Include "Loading..." text for screen readers
- Disable all animations if `prefers-reduced-motion: reduce`
- Ensure loading doesn't trap focus

## Verification Checklist

- [ ] Loading screen appears on initial page load
- [ ] Displays for minimum 3 seconds
- [ ] Gold coins animate continuously in a falling pattern
- [ ] Multiple coins create a "stream" effect with staggered timing
- [ ] Smooth fade out when loading completes
- [ ] Loading screen covers entire viewport
- [ ] Respects `prefers-reduced-motion` preference
- [ ] No performance issues or jank during animation
- [ ] Works on mobile, tablet, and desktop
- [ ] Screen reader announces loading state

### To-dos

- [ ] Add chain configuration object to site.ts with explorer details and verification flag
- [ ] Create Footer.tsx component with copy, Etherscan link, QR toggle, chain badge, and updated disclaimer
- [ ] Install react-qr-code package
- [ ] Add footer-specific animation classes to globals.css with reduced-motion support
- [ ] Replace inline footer in page.tsx with new Footer component
