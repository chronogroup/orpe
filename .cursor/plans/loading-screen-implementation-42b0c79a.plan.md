<!-- 42b0c79a-7769-408b-9fc0-618f703963d7 00b504ff-1457-4985-9dc9-e0837c6fda98 -->
# Loading Screen Implementation

## Overview

Implement a loading screen that displays the loading image.gif with smooth fade in/out transitions for at least 4 seconds while the app initializes.

## Implementation Steps

### 1. Create LoadingScreen Component

**File:** `src/components/orpe/LoadingScreen.tsx`

Create a client component with:

- Image display using Next.js Image component with `/loading image.gif`
- State management for loading status (loading, loaded, hidden)
- Timer logic ensuring minimum 4 second display
- Fade in effect on mount (0 to 100% opacity)
- Fade out effect before hiding (100% to 0% opacity)
- Full-screen centered layout with dark background

Key features:

- `useState` for tracking loading states
- `useEffect` to handle timing (minimum 4s + fade durations)
- CSS transitions for smooth fade effects
- Z-index layering to overlay entire app

### 2. Create ClientLayout Wrapper

**File:** `src/components/orpe/ClientLayout.tsx`

Create a client component that:

- Wraps the main content with loading screen
- Manages when to show/hide loading screen
- Passes children through once loading completes

### 3. Integrate Loading Screen

**File:** `src/app/layout.tsx`

Wrap the children with `ClientLayout` component to enable client-side loading screen logic while maintaining server-side layout.

## Technical Details

**Timing Flow:**

1. Component mounts → Fade in (0.5s)
2. Display loading (minimum 4s total from mount)
3. Fade out (0.5s)
4. Remove loading screen, show app

**Animation:**

- Use CSS opacity transitions for performance
- Transition duration: 0.5s for both fade in/out
- Total minimum display: 4 seconds including animations

**Styling:**

- Full viewport coverage (fixed positioning)
- Centered image with dark background
- High z-index to overlay content
- Smooth opacity transitions
- **Gradient fade on edges:** Apply CSS mask or radial gradient overlay to fade the GIF edges seamlessly into the background (vignette effect)

### To-dos

- [ ] Implement LoadingScreen.tsx with fade in/out effects and 4-second minimum display
- [ ] Create ClientLayout.tsx to wrap app content and manage loading state
- [ ] Update layout.tsx to use ClientLayout wrapper