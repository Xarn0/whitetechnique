<template>
	<v-card class="pa-2" style="position: relative">
		<div>
			<v-row no-gutters dense class="justify-space-around">
				<v-col cols="10" class="d-flex justify-center" max-height="60">
					<v-list class="pa-0 ma-0">
						<v-btn
							color="#3D4D5C"
							height="30"
							style="font-size: 0.6em"
							class="white--text px-2 rounded-lg"
						>
							идеальный падорок
						</v-btn>
						<v-btn icon>
							<svg
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="black"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10 1.05426L5.52713 5.52713C5.23601 5.81826 4.76399 5.81826 4.47287 5.52713L-4.60834e-08 1.05426L1.05427 -3.9103e-07L5 3.94573L8.94574 -4.60825e-08L10 1.05426Z"
									fill="#010101"
								/>
							</svg>
						</v-btn>
					</v-list>
				</v-col>
				<v-col cols="1" class="d-flex">
					<v-row no-gutters class="my-2" justify-end>
						<v-col cols="12" class="d-flex justify-end">
							<svg
								@click="addLike($event)"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.9497 8.70711L9.12132 5.87868C7.94975 4.70711 6.05025 4.70711 4.87868 5.87868C3.70711 7.05025 3.70711 8.94975 4.87868 10.1213L11.9497 17.1924L19.0208 10.1213C20.1924 8.94975 20.1924 7.05025 19.0208 5.87868C17.8492 4.70711 15.9497 4.70711 14.7782 5.87868L11.9497 8.70711ZM11.9497 20.0208L3.46447 11.5355C1.51184 9.58291 1.51184 6.41709 3.46447 4.46447C5.41709 2.51184 8.58291 2.51184 10.5355 4.46447L11.9497 5.87868L13.364 4.46447C15.3166 2.51185 18.4824 2.51185 20.435 4.46447C22.3876 6.41709 22.3876 9.58291 20.435 11.5355L11.9497 20.0208Z"
									fill="#9A9A9A"
								/>
							</svg>
						</v-col>
						<v-col cols="12" class="d-flex justify-end"
							><svg
								width="24"
								height="24"
								@click="addLike($event)"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M3 21L3 7L5 7L5 21H3Z" fill="#9A9A9A" />
								<path d="M11 21L11 13H13V21H11Z" fill="#9A9A9A" />
								<path d="M19 21V3L21 3V21H19Z" fill="#9A9A9A" />
							</svg>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
			<v-row class="mt-0">
				<v-col cols="8" class="mx-auto mt-0 pa-0">
					<v-img src="/images/notbook.png" contain> </v-img>
				</v-col>
			</v-row>
			<v-row class="">
				<v-col cols-12>
					<v-list>
						<v-list-item>
							<v-list-item-content>
								<v-list-item-subtitle> Ноутбуки </v-list-item-subtitle>
								<v-list-item-title class="d-flex">
									<span class="text-h6 text-decoration-line-through grey--text">260 909 ₽</span>
									<span
										class="rounded-lg white--text pa-1 d-flex align-center text-center ml-3"
										style="background-color: #ef1839; font-size: 0.9em"
										>-50%</span
									>
								</v-list-item-title>
								<v-list-item-title class="text-h4"> 244 990 ₽</v-list-item-title>
								<v-list-item-subtitle> Ноутбук Apple MacBook Pro 16 </v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-list-item>
							<v-list-item-content class="d-flex">
								<div class="d-flex">
									<v-rating
										empty-icon="mdi-octagram-outline"
										full-icon="mdi-octagram"
										dense
										color="#1BA2B1"
										class="ma-0"
										hover
										length="5"
										size="19"
										v-model="rating"
									>
									</v-rating>
									<v-list-item-title class="ml-2 text-subtitle-2 grey--text"
										>({{ rating }})</v-list-item-title
									>
								</div>
							</v-list-item-content>
						</v-list-item>
						<v-list-item class="pa-0">
							<v-list-item-action style="width: 100%" class="ma-0">
								<v-btn color="#1BA2B1" width="100%" class="white--text pa-0">В корзину</v-btn>
							</v-list-item-action>
						</v-list-item>
					</v-list>
				</v-col>
			</v-row>
		</div>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			rating: 2,
		};
	},
	methods: {
		addLike(e) {
			if (e.target.classList.contains("like")) {
				e.target.classList.remove("like");
				return;
			}
			e.target.classList.add("like");
		},
	},
};
</script>

<style>
.like * {
	stroke: rgb(244, 55, 17);
	fill: #190be0 !important;
}
</style>
