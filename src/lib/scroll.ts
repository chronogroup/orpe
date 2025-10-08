export function smoothScrollToSection(
  sectionId: string,
  headerOffset: number = 80
) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const elementPosition = element.offsetTop - headerOffset;

  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  });

  // Update URL hash without causing a jump
  if (history.pushState) {
    history.pushState(null, "", `#${sectionId}`);
  }
}

export function getHeaderHeight(): number {
  // Try to get the actual header height, fallback to 80px
  const header = document.querySelector("header");
  return header ? header.offsetHeight : 80;
}
