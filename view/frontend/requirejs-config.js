/**
 * @category    Lingble
 * @package     CustomWidgetOverride
 * *
 *
 *
 */

var config = {
    map: {
        '*': {
            CustomWidgetOverrideMage: 'Lingble_CustomWidgetOverride/js/frontslide'
        }
    },
	shim:{
		"Lingble_CustomWidgetOverride/js/frontslide": ["jquery"]
	},
	'paths': {
        "owlfrontslide": "Lingble_CustomWidgetOverride/js/owl_carousel",
    }
};
