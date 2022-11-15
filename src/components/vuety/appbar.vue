<template>
	<v-layout style="height: 100px">
			<v-layout row wrap>
				<v-app-bar
					color="cyan-darken-1"
					elevation="5"
					density="compact"
				>
					<v-app-bar-nav-icon></v-app-bar-nav-icon>
					<v-app-bar-title class="text-h5"
						>Expanded example</v-app-bar-title
					>
					<v-spacer />
					<template #append>
						<v-btn icon="mdi-magnify"></v-btn>
						<v-btn icon="mdi-dots-vertical"></v-btn>
						<v-btn icon="mdi-logout-variant"></v-btn>
					</template>
				</v-app-bar>
			</v-layout>
	</v-layout>
	<v-layout>
			<!-- What is the "row wrap" do ? -->
			<v-layout row wrap>
				<v-app-bar
					color="blue-darken-3"
					elevation="10"
					density="compact"
				>
					<v-app-bar-nav-icon></v-app-bar-nav-icon>
					<v-app-bar-title>Photos</v-app-bar-title>
					<v-spacer></v-spacer>
					<v-btn icon="mdi-filter"></v-btn>
					<v-btn icon="mdi-magnify"></v-btn>
				</v-app-bar>
				<v-main>
					<v-container fluid>
						<v-row>
							<v-col v-for="n in 9" :key="n" cols="3">
								<v-sheet
									color="grey-lighten-1"
									height="100"
									class="pa-4"
								>
									<v-sheet
										color="grey-darken-1"
										class="w-100 h-100"
									>
										{{ n }}
									</v-sheet>
								</v-sheet>
							</v-col>
						</v-row>
					</v-container>
				</v-main>
			</v-layout>
	</v-layout>
	<!-- app bar with images -->
	<v-layout row wrap>
			<v-layout>
				<v-app-bar color="blue-lighten-2">
					<template #image>
						<v-img
							src="/img/images.jpeg"
							gradient="-90deg, rgba(120,120,0,0.7), rgba(255,0,120,0.7)"
						></v-img>
					</template>
					<template #prepend>
						<v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
					</template>
					<v-app-bar-title class="text-white text-h5"
						>Appbar IMG...</v-app-bar-title
					>
					<template #append>
						<v-btn icon="mdi-account" color="white"></v-btn>
						<v-btn icon="mdi-dots-vertical" color="white"></v-btn>
						<v-btn icon="mdi-login" color="white"></v-btn>
					</template>
				</v-app-bar>
				<v-main>
					<v-container fluid>
						<v-row>
							<v-col v-for="n in 11" :key="n" cols="12">
								<v-card
									:title="`Title for ${n}`"
									:subtitle="`Subtitle for ${n}`"
									elevation="11"
								>
									<v-card-text>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Magni, sit quisquam?
										Ex dolorum rem nulla inventore iste
										temporibus est nisi? Obcaecati
										asperiores qui quibusdam pariatur ex nam
										in, alias esse!
									</v-card-text>
								</v-card>
							</v-col>
						</v-row>
					</v-container>
				</v-main>
			</v-layout>
	</v-layout>
	<!-- Content with avatar -->
	<v-layout row wrap>
			<v-layout row wrap class="bg-green-lighten-3">
				<v-app-bar color="success">
					<template #prepend>
						<v-app-bar-nav-icon></v-app-bar-nav-icon>
					</template>
					<template #append>
						<v-btn icon="mdi-filter"></v-btn>
						<v-btn icon="mdi-magnify"></v-btn>
						<v-btn icon="mdi-dots-vertical"></v-btn>
					</template>
				</v-app-bar>
				<v-main>
					<v-container fluid>
						<v-card
							border
							class="mb-3 bg-white"
							elevation="3"
							variant="text"
							density="compact"
							prepend-avatar="/img/images.jpeg"
							title="Title of Card with avatar"
							subtitle="Subtitle: for prepend image to apater vCard used prepend-avatar attribute"
						>
							<v-img src="/img/images2.jpeg"></v-img>
							<v-card-text>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Obcaecati est modi ratione
								animi magnam fuga facere asperiores minima
								eveniet sed at ex, odio rerum, dolore saepe,
								amet eos voluptate deserunt.
							</v-card-text>
						</v-card>
						<v-card
							border
							variant="text"
							class="bg-white"
							elevation="3"
							density="compact"
							prepend-avatar="/img/mountains.jpg"
							title="Second Card for demo"
							subtitle="Subtitlr of the second Card"
						>
							<v-img src="/img/mountains2.jpg"></v-img>
							<v-card-text>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Rerum, optio. Architecto dolor
								nostrum doloremque! Dignissimos provident, nulla
								assumenda aut illum vitae reprehenderit quod
								labore corrupti. Fuga veniam excepturi et
								incidunt.
							</v-card-text>
						</v-card>
					</v-container>
				</v-main>
			</v-layout>
	</v-layout>
</template>

<script setup>
</script>

<style></style>
