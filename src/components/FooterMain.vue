<template>
	<footer class="mt-12 pt-14">
		<v-container>
			<v-row>
				<v-col cols="12" sm="4">
					<v-list color="transparent">
						<v-list-item>
							<v-list-item-icon class="mr-4">
								<div class="footer__rect"></div>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title class="mb-0 text-uppercase black--text text-h4 font-weight-black"
									>Белая техника</v-list-item-title
								>
								<v-list-item-subtitle class="black--text text-subtitle-2"
									>магазин мобильных устройств</v-list-item-subtitle
								>
							</v-list-item-content>
						</v-list-item>

						<v-list-item class="">
							<div class="d-flex flex-column justify-space-between">
								<v-list-item-content
									style="color: #6a6a6a"
									class="pt-2 text-subtitle-2 text-justify pr-10 mr-4"
								>
									Интернет-магазин Белая Техника — российская розничная торговая сеть по продаже
									современной электроники
								</v-list-item-content>

								<span class="mt-5 text-subtitle-2"> 2012-2023 © Белая Техника </span>
							</div>
						</v-list-item>
					</v-list>
				</v-col>
				<v-col cols="12" sm="5">
					<v-row>
						<v-col cols="12" sm="6"
							><v-subheader class="text-h6 pa-0 pl-1 font-weight-bold mb-4 text-subtitle-2">
								Каталог
							</v-subheader>
							<ul class="footer__list pl-0 text-subtitle-2">
								<li><a href="#">Смартфоны и гаджеты</a></li>
								<li><a href="#">Ноутбуки и компьютеры</a></li>
								<li><a href="#">Наушники и аудио</a></li>
								<li><a href="#">Техника для дома</a></li>
								<li><a href="#">Дача, сад и огород</a></li>
								<li><a href="#">Автоаксессуары</a></li>
								<li><a href="#">Элетротранспорт</a></li>
								<li><a href="#">Бренды</a></li>
								<li><a href="#">Автоаксессуары</a></li>
							</ul></v-col
						>
						<v-col cols="12" sm="6"
							><v-subheader class="text-h6 pa-0 pl-1 mb-4 font-weight-bold text-subtitle-2">
								Информация
							</v-subheader>
							<ul class="footer__list pl-0 text-subtitle-2">
								<li><a href="#">Гарантия</a></li>
								<li><a href="#">Доставка</a></li>
								<li><a href="#">Оплата</a></li>
								<li><a href="#">Бонусная система</a></li>
								<li><a href="#">Акции</a></li>
								<li><a href="#">Контакты</a></li>
								<li><a href="#">Вакансии</a></li>
								<li><a href="#">О нас</a></li>
							</ul></v-col
						>
					</v-row>
				</v-col>
				<v-col cols="12" sm="3">
					<v-subheader class="text-h6 pa-0 pl-1 font-weight-bold mb-4 text-subtitle-2">
						Контакты
					</v-subheader>
					<v-list color="transparent flex-wrap  ">
						<v-list-item>
							<v-list-item-content>
								<v-list-item-title class="text-h6">+7 812 6*4-*0-*5</v-list-item-title>
								<v-list-item-subtitle>Ежедневно 10:00-20:00</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-list-item>
							<v-list-item-content class="pa-0">
								<v-list-item-title class="text-subtitle-2"
									>Пишите, отвечаем быстро</v-list-item-title
								>
							</v-list-item-content>
						</v-list-item> </v-list
					><v-row class="pr-6 flex-wrap">
						<v-col cols="12" sm="5">
							<v-btn color="transparent" depressed class="text-subtitle-2">
								telegram <v-icon class="ml-1"> telegram</v-icon>
							</v-btn>
						</v-col>
						<v-col cols="12" sm="5"
							><v-btn class="text-subtitle-2" color="transparent" depressed>
								WhatsApp <v-icon class="ml-1">whatsapp</v-icon>
							</v-btn></v-col
						>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</footer>
</template>

<script>
export default {};
</script>

<style>
.footer__rect {
	width: 25px;
	height: 25px;
	border-radius: 6px;
	border: 6px solid #000;
}
.footer__list {
	list-style-type: none;
}
.footer__list li {
	padding: 5px;
	transition: background 0.3s ease-in;
}
.footer__list li a {
	text-decoration: none;
	color: #6a6a6a;
	transition: color 0.5s ease-in;
}
.footer__list li:hover {
	background: #6a6a6a;
}
.footer__list li:hover a {
	color: white;
}
footer {
	background: #fafafa;
	font-size: 30px;
	margin: 0.4em;
}
</style>
