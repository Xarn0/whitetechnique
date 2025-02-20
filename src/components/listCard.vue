<template>
	<v-container class="pa-0">
		<v-list dense class="mb-5">
			<v-list-item>
				<v-subheader class="text-h4 black--text my-8">{{ title }}</v-subheader>
			</v-list-item>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="d-flex" style="gap: 8px">
						<div class="overflow-x-auto" style="max-width: 100%">
							<v-chip
								color="#FAFAFA"
								v-for="(el, index) in listCips"
								:key="index"
								>{{ el }}</v-chip
							>
						</div>
						<v-menu offset-y>
							<template v-slot:activator="{ on, attrs }">
								<div v-bind="attrs" v-on="on">
									<v-btn text color="#000">
										Dropdown

										<svg
											class="ml-5"
											width="10"
											height="6"
											viewBox="0 0 10 6"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10 1.05426L5.52713 5.52713C5.23601 5.81826 4.76399 5.81826 4.47287 5.52713L-4.60834e-08 1.05426L1.05427 -3.9103e-07L5 3.94573L8.94574 -4.60825e-08L10 1.05426Z"
												fill="#010101"
											/>
										</svg>
									</v-btn>
								</div>
							</template>
							<v-list>
								<v-list-item v-for="(item, index) in listCips" :key="index">
									<v-list-item-title>{{ item }}</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
		<swiper
			:slides-per-view="5"
			:space-between="30"
			:loop="false"
			:pagination="myPaginator"
			:navigation="myNavigator"
			:breakpoints="point"
		>
			<swiper-slide v-for="n in 8" :key="n">
				<cardBest />
			</swiper-slide>
		</swiper>

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

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);
import cardBest from "@/components/cardBest.vue";
export default {
	props: ["title", "name"],
	components: {
		cardBest,
		Swiper,
		SwiperSlide
	},
	data() {
		return {
			myNavigator: {
				nextEl: `.${this.name}-pagination-next`,
				prevEl: `.${this.name}-pagination-prev`
			},
			myPaginator: {
				el: `.${this.name}-pagination`,
				clickable: "true"
			},
			listCips: [
				"Huawei",
				"Dell",
				"Apple MacBook Air",
				"Apple MacBook Pro",
				"MSI",
				"Tecno",
				"Apple"
			],
			point: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				// when window width is >= 480px
				420: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 4,
					spaceBetween: 40
				}
			}
		};
	}
};
</script>

<style>
.x-pagination {
	display: flex;
	align-items: center;
	gap: 12px;
}
</style>
