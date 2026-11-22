import { test } from '../page-fixtures';
import { PLAYWRIGHT_DOCS_URL } from '../../config/urls'; 

test.describe('Responsive Navigation', () => {
    test('desktop: el menu muestra los enlaces', async ({ responsivePage, isMobile }) => {
        test.skip(isMobile, 'Comportamiento exclusivo de Desktop'); 

        await responsivePage.navigateToDocs();
        await responsivePage.assertDesktopView();
    });

    test('mobile: los botones estan tras el menu hamburguesa', async ({ responsivePage, isMobile }) => {
        test.skip(!isMobile, 'Comportamiento exclusivo de Mobile');
    
        await responsivePage.navigateToDocs();
        await responsivePage.assertMobileView();
    });
}); 