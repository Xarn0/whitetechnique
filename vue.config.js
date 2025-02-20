const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: ["vuetify"],
	publicPath: `/whitetechnique/`,
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "@/assets/style/variables.scss";`
			}
		}
	}
});
