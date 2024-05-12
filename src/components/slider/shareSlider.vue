<template>
	<v-container style="position: relative">
		<v-row class="mb-6 align-center">
			<v-subheader class="text-h5 black--text"> Акции </v-subheader>
			<v-btn depressed class="mb-0 pt-1" color="transparent">Смотреть все</v-btn>
		</v-row>
		<swiper
			:slides-per-view="4"
			:space-between="30"
			:loop="false"
			class="shareSwiper"
			:pagination="myPaginator"
			:navigation="myNavigator"
			:breakpoints="point"
		>
			<swiper-slide v-for="n in 5" :key="n"> <cardShare></cardShare></swiper-slide>
		</swiper>
		<div :class="name + '-pagination-prev'" class="inset-pagination-prev">
			<v-btn icon class="transparent">
				<svg
					width="6"
					height="10"
					viewBox="0 0 6 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.94574 0L0.472868 4.47287C0.18174 4.76399 0.18174 5.23601 0.472868 5.52713L4.94574 10L6 8.94573L2.05426 5L6 1.05426L4.94574 0Z"
						fill="#010101"
					/>
				</svg>
			</v-btn>
		</div>
		<div :class="name + '-pagination-next'" class="inset-pagination-next">
			<v-btn icon class="transparent">
				<svg
					width="6"
					height="10"
					viewBox="0 0 6 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.05426 0L5.52713 4.47287C5.81826 4.76399 5.81826 5.23601 5.52713 5.52713L1.05426 10L0 8.94573L3.94574 5L0 1.05426L1.05426 0Z"
						fill="#010101"
					/>
				</svg>
			</v-btn>
		</div>
		<div class="d-flex mt-5 justify-center align-center">
			<div :class="name + '-pagination-prev'">
				<v-btn icon class="transparent">
					<svg
						width="6"
						height="10"
						viewBox="0 0 6 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.94574 0L0.472868 4.47287C0.18174 4.76399 0.18174 5.23601 0.472868 5.52713L4.94574 10L6 8.94573L2.05426 5L6 1.05426L4.94574 0Z"
							fill="#010101"
						/>
					</svg>
				</v-btn>
			</div>

			<div :class="name + '-pagination'" class="x-pagination"></div>

			<div :class="name + '-pagination-next'">
				<v-btn icon class="transparent">
					<svg
						width="6"
						height="10"
						viewBox="0 0 6 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.05426 0L5.52713 4.47287C5.81826 4.76399 5.81826 5.23601 5.52713 5.52713L1.05426 10L0 8.94573L3.94574 5L0 1.05426L1.05426 0Z"
							fill="#010101"
						/>
					</svg>
				</v-btn>
			</div>
		</div>
	</v-container>
</template>

<script>
import { Navigation, Pagination } from "swiper";
// import cardShare from "../items/cardShare.vue";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import cardShare from "@/components/items/cardShare.vue";

SwiperCore.use([Navigation, Pagination]);

export default {
	components: {
		Swiper,
		SwiperSlide,
		cardShare,
	},
	props: ["name"],
	data() {
		return {
			myNavigator: {
				nextEl: `.${this.name}-pagination-next`,
				prevEl: `.${this.name}-pagination-prev`,
			},
			myPaginator: {
				el: `.${this.name}-pagination`,
				clickable: "true",
			},
			point: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				// when window width is >= 480px
				480: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 4,
					spaceBetween: 40,
				},
			},
		};
	},
};
</script>

<style lang="scss" scoped>
.shareSwiper {
	width: 100%;
}
.inset-pagination-prev,
.inset-pagination-next {
	position: absolute;
	z-index: 2;
	background: #f7f7f7;
	border-radius: 10px;
	top: 31%;
}
.inset-pagination-prev {
	left: 20px;
	// transform: translateY(50%);
}
.inset-pagination-next {
	right: 20px;
}
</style>
