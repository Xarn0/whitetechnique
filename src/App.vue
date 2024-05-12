<template>
	<v-app>
		<header-main> </header-main>
		<v-main>
			<router-view />
		</v-main>
		<footer-main></footer-main>
	</v-app>
</template>

<script>
import HeaderMain from "./components/HeaderMain.vue";
import FooterMain from "@/components/FooterMain.vue";
export default {
	name: "App",

	data: () => ({
		//
	}),
	components: {
		HeaderMain,
		FooterMain,
	},
};
</script>
