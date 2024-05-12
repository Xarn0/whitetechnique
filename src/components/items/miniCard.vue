<template>
	<v-card
		height="267"
		class="pt-5 rounded-lg overflow-hidden"
		style="position: relative"
		:style="{ background: bg }"
	>
		<v-card-subtitle class="text-center text-subtitle-1 pa-0"> {{ subtitle }} </v-card-subtitle>
		<v-card-title
			v-if="title"
			style="z-index: 4; position: relative"
			class="text-center text-h4 font-weight-bold pa-0 d-flex justify-center"
		>
			{{ title }}
		</v-card-title>
		<v-card-subtitle
			style="width: 192px; line-height: 19px"
			v-if="subtitle2"
			class="text-wrap mx-auto text-center text-subtitle-1 pa-0 pt-4"
		>
			{{ subtitle2 }}
		</v-card-subtitle>

		<img
			v-if="img"
			style="bottom: -5px; object-fit: content; left: 0; z-index: 1; position: absolute"
			:src="require('@/assets/images/miniCard/' + img)"
		/>
		<v-list v-else>
			<v-list-item class="d-flex flex-column align-start">
				<span
					class="pa-2 text-wrap ma-2 rounded-lg --beforeSpan"
					style="background: #f6f6f6"
					v-for="(mess, index) in messend"
					:key="index"
				>
					{{ mess }}
				</span>
			</v-list-item>
		</v-list>
		<span class="miniCard-span--help"> </span>
		<span class="miniCard-span"> </span>
	</v-card>
</template>

<script>
export default {
	props: ["title", "subtitle", "subtitle2", "img", "bg", "link", "messend"],
};
</script>

<style lang="scss" scoped>
.miniCard-span {
	position: absolute;
	width: 50px;
	height: 50px;
	background: #1ba2b1;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 0;
	bottom: 0;
	z-index: 2;
	border-bottom-left-radius: 0px !important;
	border-bottom-right-radius: 0px !important;
	&::before {
		content: "";
		width: 10px;
		height: 10px;

		border: 2px solid #fff;
		border-left: transparent;
		border-bottom: transparent;
		transform: rotate(40deg);
	}
}
.--beforeSpan {
	position: relative;
	z-index: 2;
	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 10px;
		background: inherit;
		width: 30px;
		height: 30px;
		z-index: -1;
		transform: rotate(40deg);
	}
}
</style>
