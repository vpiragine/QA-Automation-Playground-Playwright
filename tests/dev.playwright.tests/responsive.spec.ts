import { test, expect } from '@playwright/test';
import { PLAYWRIGHT_DOCS_URL } from '../../config/urls'; 
import { ResponsivePage } from '../dev.playwright.pages/responsivePage';

test.describe('Responsive Navigation', () => {
    test('desktop: el menu muestra los enlaces', async ({ page, isMobile }) => {
        test.skip(isMobile, 'Comportamiento exclusivo de Desktop'); 

        const responsivePage = new ResponsivePage(page);

        await responsivePage.navigateToDocs();
        await responsivePage.assertDesktopView();
    });

    test('mobile: los botones estan tras el menu hamburguesa', async ({ page, isMobile }) => {
        test.skip(!isMobile, 'Comportamiento exclusivo de Mobile');
        
        const responsivePage = new ResponsivePage(page);

        await responsivePage.navigateToDocs();
        await responsivePage.assertMobileView();
    });
}); 