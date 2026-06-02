import { test as base, expect, Page } from '@playwright/test';

type PageFixture = {
  sectionHeight: number;
};

const test = base.extend<PageFixture>({
  sectionHeight: async ({ page }, add) => {
    const section = page.locator('section');
    const { height } = (await section.boundingBox()) || { height: 982 };
    await add(height);
  },
});

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
});

test('scrolls into second artwork', async ({ page, sectionHeight }) => {
  await scrollY(page, sectionHeight);

  const artworks = page.locator('section .grid > div');
  const firstArtwork = artworks.nth(0);
  const secondArtwork = artworks.nth(1);

  await expect(firstArtwork).toHaveCSS('z-index', '0');
  await expect(secondArtwork).toHaveCSS('z-index', '20');
});

test('scrolls into next section', async ({ page, sectionHeight }) => {
  const firstSectionTitle = await loadNextSection(page, sectionHeight);

  const nextSectionTitle = page
    .locator('section .grid > div')
    .nth(0)
    .locator('h2');

  await expect(nextSectionTitle).not.toHaveText(firstSectionTitle);
});

test('scrolls backwards into fourth element', async ({
  page,
  sectionHeight,
}) => {
  const fourthArtwork = page.locator('section .grid > div').nth(3);
  const fourthArtworkTitle =
    (await fourthArtwork.locator('h2').textContent()) || '';

  await loadNextSection(page, sectionHeight);

  await scrollY(page, -sectionHeight);

  await expect(fourthArtwork.locator('h2')).toHaveText(fourthArtworkTitle);
  await expect(fourthArtwork).toHaveCSS('z-index', '20');
});

test('works in reduced motion', async ({ page, sectionHeight }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });

  await scrollY(page, sectionHeight);

  const artworks = page.locator('section .grid > div');
  const firstArtwork = artworks.nth(0);
  const secondArtwork = artworks.nth(1);

  await expect(firstArtwork).toHaveCSS('z-index', '0');
  await expect(secondArtwork).toHaveCSS('z-index', '20');
});

const loadNextSection = async (page: Page, sectionHeight: number) => {
  const artworks = page.locator('section .grid > div');
  const firstTitle = (await artworks.nth(0).locator('h2').textContent()) || '';

  const promise = page.waitForResponse(
    (res) =>
      res.status() === 200 &&
      res.request().method() === 'POST' &&
      !!res.request().headers()['next-action'],
  );

  await scrollY(page, sectionHeight * 2);
  await promise;
  await scrollY(page, sectionHeight * 2);

  return firstTitle;
};

const scrollY = async (page: Page, delta: number) => {
  const main = page.locator('main');
  await main.evaluate((el, y) => el.scrollBy({ top: y }), delta);
};
