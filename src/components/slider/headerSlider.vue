<template>
	<v-container class="pa-0">
		<div class="my-swiper">
			<div>
				<swiper
					id="my-sw"
					:slides-per-view="1"
					:space-between="30"
					:loop="false"
					:pagination="myPaginator"
					:navigation="myNavigator"
					:simulateTouch="false"
				>
					<swiper-slide v-for="n in 3" :key="n" class="test" :class="{ test_2: true }">
						<v-img src="images/Img.jpg" class="pa-0 ma-0" cover>
							<v-row class="d-flex ga-16">
								<v-col cols="6" sm="7">
									<div class="">
										<img
											style="max-width: 600px; min-width: 350px"
											src="images/hand.png"
											class="mt-2 hand"
										/>
										<div style="position: relative; top: -10px; left: 10px">{{ n }}/ 3</div>
									</div>
								</v-col>
								<v-col cols="5" sm="4" class="pa-0 d-flex align-center">
									<div class="">
										<v-icon size="40" color="black"> mdi-apple </v-icon>
										<h4
											class="ma-0 black--text font-weight-medium text-h4 text-sm--h3 mb-4 font-weight-bold"
										>
											Ipad Mini
										</h4>
										<p
											class="black--text text-overline text-sm-subtitle-1 ma-0"
											style="line-height: 1.2em"
										>
											Маленький размер Большие возможности.
										</p>
										<p>
											<span class="text-subtitle-2 text-sm-h5 d-block font-weight-bold"
												>От 30 849 руб.🔥</span
											>
											<span class="grey--text text-decoration-line-through">От 14 849 руб.</span>
										</p>
									</div>
								</v-col>
							</v-row>
						</v-img>
					</swiper-slide>
					<!-- <swiper-slide></swiper-slide> -->
				</swiper>

				<div class="my-button-paginator d-none d-md-flex"></div>
			</div>
			<div class="d-flex mt-5 justify-center">
				<div class="swiper-button-prev-t mr-5">
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

				<div class="swiper-pagination-t align-center text-center d-flex" style="gap: 12px"></div>

				<div class="swiper-button-next-t ml-5">
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
			</div></div
	></v-container>
</template>

<script>
import { Navigation, Pagination } from "swiper";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export default {
	data() {
		return {
			myNavigator: {
				nextEl: ".swiper-button-next-t",
				prevEl: ".swiper-button-prev-t",
			},
			myPaginator: {
				el: `.swiper-pagination-t`,
				clickable: "true",
				// renderBullet: function (index, className) {
				// 					return `<div class="${className} ">
				// 						<img src='/agencystudio/slider/slider${index + 1}.jpg' />
				// 						<span><svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				// <path d="M0.315256 0.0859346C0.220899 0.134981 0.126543 0.228986 0.0773131 0.327078C-0.004736 0.486477 -0.004736 0.543697 0.00346891 4.59408C0.0157763 8.66898 0.0157763 8.70168 0.101928 8.81203C0.147055 8.87334 0.237309 8.96326 0.298846 9.00822C0.409612 9.08996 0.467047 9.09405 2.16957 9.10631L3.92952 9.11857L3.94183 11.8447C3.95414 14.5668 3.95414 14.5708 4.04439 14.7139C4.2208 14.9959 4.23721 15 5.5705 15H6.76432L6.92431 14.8529C7.08431 14.7098 7.10072 14.6689 8.11813 11.6322L9.14374 8.55454L9.13554 4.48372C9.12323 0.445605 9.12323 0.412909 9.03708 0.302555C8.99195 0.241247 8.9017 0.15133 8.84016 0.106371C8.72939 0.0205402 8.69658 0.0205402 4.59822 0.0123663C0.549096 0.0041914 0.462944 0.0041914 0.315256 0.0859346Z" fill="white"/>
				// <path d="M12.241 0.0571594C12.0728 0.130729 11.9005 0.339174 11.8718 0.502661C11.8595 0.576229 11.8554 2.44815 11.8595 4.66748C11.8718 8.66882 11.8718 8.70151 11.958 8.81187C12.0031 8.87318 12.0933 8.96309 12.1549 9.00805C12.2657 9.08979 12.3231 9.09388 14.0502 9.10614L15.8307 9.1184L15.8389 11.8936L15.8512 14.6729L16.0071 14.8241L16.1589 14.9794L17.3691 14.9917C18.7106 15.0039 18.7516 14.9957 18.9075 14.7423C18.9527 14.6688 19.4409 13.2587 19.9947 11.6075L20.9998 8.59933V4.54487C20.9998 0.559881 20.9998 0.486312 20.9177 0.326913C20.8644 0.220646 20.7783 0.134816 20.6716 0.0816822C20.5116 -6.10352e-05 20.4419 -6.10352e-05 16.4379 -6.10352e-05C13.1436 0.00402641 12.3395 0.0122004 12.241 0.0571594Z" fill="white"/>
				// </svg>
				// </span></div>`;
				// 				},
			},
		};
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	methods: {},
};
</script>

<style lang="scss">
.swiper-pagination-bullet:first-child ~ div {
	margin-left: 12px;
}
.swiper-pagination-bullet {
	width: 6px;
	height: 6px;
	background-color: #000;
	opacity: 1;
	border-radius: 0.1em;
	// margin-left: 12px;
	// transition: all 2s ease-in-out;
}
.swiper-pagination-bullet-active {
	background: #fff;
	box-shadow: 0 0 1px 6px #000;
}
.hand {
	@media (max-width: 500px) {
		& {
			left: -4em;
			position: relative;
			width: 150px;
		}
	}
}
</style>
