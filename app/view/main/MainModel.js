/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('SenchCordovaTest.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    platformConfig: {
        native: {
            data: {
                name: 'SenchCordovaTest',
                loremIpsum: '<br> <br> Hey, you are running on Cordova.'
            }
        },
        '!native': {
            data: {
                name: 'SenchCordovaTest',
                loremIpsum: '<br> <br> Hey, you are running on Browser.'
            }
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
