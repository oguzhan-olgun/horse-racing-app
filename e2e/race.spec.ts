import {test, expect} from '@playwright/test';

test('visits the race page', async ({page}) => {
    await page.goto('/race');

    const raceHorses = page.locator("[id='race-horses']");
    await expect(raceHorses).toBeVisible();

    const raceScreen = page.locator("[id='race-screen']");
    await expect(raceScreen).toBeVisible();

    const raceRounds = page.locator("[id='race-rounds']");
    await expect(raceRounds).toBeVisible();
})

test('tests the generate program in the race page', async ({page}) => {
    await page.goto('/race');

    const generateButton = page.locator("[id='generate-program-button']");
    await generateButton.click();


    const programText = page.locator("[id='generate-program-text']");
    await expect(programText).toBeHidden();
})
