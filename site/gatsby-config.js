require('dotenv').config();

module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using and other configs.
		{
		resolve: "gatsby-woocommerce-theme",
		options: {
			wordPressUrl: 'https://cloud88.co/',
			gatsbySiteUrl: 'https://cloud88.co/',
			googleTagManagerId: `${ process.env.GOOGLE_TAGMANAGER_ID }`,
			fbAppId: `${ process.env.FB_APP_ID }`
		}
	} ]
};
