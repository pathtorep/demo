<template>
	<!-- Collabsable list-tiems -->
	<v-card
		style="width: 350px; user-select: none"
		class="mx-auto"
		variant="tonal"
		elevation="11"
		color="cyan-darken-4"
	>
		<v-list v-model="list.open">
			<v-list-item prepend-icon="mdi-text" title="Info"></v-list-item>
			<!-- The Parent Group -->
			<v-list-group value="list.user">
				<template #activator="{ props }">
					<v-list-item
						prepend-icon="mdi-account"
						v-bind="props"
						title="Show info of User"
					></v-list-item>
				</template>
				<!-- the First child group -->
				<v-list-group value="list.person">
					<template #activator="{ props }">
						<v-list-item
							title="Users data"
							prepend-icon="mdi-rocket"
							v-bind="props"
						></v-list-item>
					</template>
					<v-list-item
						title="user -- 1"
						subtitle="any subtitle any subtitle any subtitle any subtitle any subtitle any subtitle "
						prepend-icon="mdi-file-plus-outline"
					></v-list-item>
					<v-list-item
						title="user -- 2"
						prepend-icon="mdi-flower"
					></v-list-item>
				</v-list-group>
				<!-- the Second child group -->
				<v-list-group value="list.data">
					<template #activator="{ props }">
						<v-list-item
							prepend-icon="mdi-home"
							v-bind="props"
							title="Second group"
						></v-list-item>
					</template>
					<v-list-item
						prepend-icon="mdi-file-word-box"
						title="Filters"
					></v-list-item>
					<v-list-item
						prepend-icon="mdi-firebase"
						title="The FireBase"
					></v-list-item>
				</v-list-group>
			</v-list-group>
		</v-list>
	</v-card>
	<!-- ###################### -->
	<!-- Selectable list items, mix -->
	<v-card style="width: 500px" class="mx-auto my-5">
		<v-toolbar color="cyan-lighten-3">
			<v-btn icon="mdi-menu"></v-btn>
			<v-toolbar-title>Selectable-MIX</v-toolbar-title>
			<v-spacer />
			<v-btn icon="mdi-magnify"></v-btn>
		</v-toolbar>
		<v-list lines="three">
			<v-list-subheader>Subheader, Lists no Seelctable</v-list-subheader>
			<v-list-item>
				<v-list-item-title>Title</v-list-item-title>
				<v-list-item-subtitle>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Labore excepturi impedit rem aliquam suscipit! Sunt ab,
					minus possimus debitis tempore ipsam velit vitae
					consectetur. A rerum ad voluptatem laboriosam aperiam!
				</v-list-item-subtitle>
			</v-list-item>
			<v-list-item>
				<v-list-item-title>Title - 2</v-list-item-title>
				<v-list-item-subtitle>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Repellat consectetur hic quia eaque veritatis vitae fugit
					voluptas pariatur ducimus, earum, tempore officiis eius, non
					commodi. Tenetur optio eveniet repellendus odit.
				</v-list-item-subtitle>
			</v-list-item>
			<v-divider inset />
			<v-list lines="three" select-strategy="multiple">
				<v-list-subheader>Slectable Lists:</v-list-subheader>
				<v-list-item value="notes">
					<template #prepend="{ isActive }">
						<v-checkbox-btn
							:model-value="isActive"
						></v-checkbox-btn>
					</template>
					<v-list-item-title>Title for value notes</v-list-item-title>
					<v-list-item-subtitle>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Maiores quaerat ut, dolorem voluptas laborum dolor
						magni odio numquam sequi animi similique iure qui sed
						maxime vitae cum, porro expedita consectetur!
					</v-list-item-subtitle>
				</v-list-item>

				<v-list-item value="notes2">
					<template #prepend="{ isActive }">
						<v-checkbox-btn
							:model-value="isActive"
						></v-checkbox-btn>
					</template>
					<v-list-item-title
						>Title for value "notes2"</v-list-item-title
					>
					<v-list-item-subtitle>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Repellat amet cum nobis doloremque unde ad impedit
						distinctio! Amet dolorum, architecto fuga nam cumque
						ipsa sunt, nobis quae obcaecati in neque.
					</v-list-item-subtitle>
				</v-list-item>
				<v-list-item value="notes3">
					<template #prepend="{ isActive }">
						<v-checkbox-btn
							:model-value="isActive"
						></v-checkbox-btn>
					</template>
					<v-list-item-title
						>Title for value "notes3"</v-list-item-title
					>
					<v-list-item-subtitle>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Veritatis ipsum magnam explicabo aliquid, commodi
						mollitia ipsa. Alias eum natus cupiditate quos numquam
						fugit doloremque accusantium corrupti mollitia sit,
						voluptate harum?
					</v-list-item-subtitle>
				</v-list-item>
			</v-list>
		</v-list>
	</v-card>
	<!-- ###################### -->
	<!-- Another Example for Collapsable lists -->
	Another exampler to using Collable List:
	<v-card
		style="user-select: none; width: 400px"
		class="mx-auto"
		elevation="12"
		variant="tonal"
	>
		<!-- <<list.open>> --- will be opened during when laoding content !!! -->
		<v-list v-model:opened="list3.open">
			<v-list-subheader style="letter-spacing: 2px" class="text-uppercase"
				>creating collabsable lists</v-list-subheader
			>
			<v-list-item
				prepend-icon="mdi-menu"
				title="Tree for show content"
			></v-list-item>
			<v-divider inset />
			<v-list-group value="group1">
				<template #activator="{ props }">
					<v-list-item
						prepend-icon="mdi-account"
						v-bind="props"
						title="All Users"
						subtitle="Show all users"
					></v-list-item>
				</template>
				<v-list-item
					v-for="([title, icon], i) in list3.group1"
					:key="i"
					:title="title"
					:prepend-icon="icon"
				></v-list-item>
			</v-list-group>
		</v-list>
	</v-card>
	Exmaple with prepend-avatar
	<!-- Example with prepend avatar -->
	<v-card style="widthz: 500px" class="mx-auto">
		<v-toolbar color="primary">
			<v-btn icon="mdi-menu"></v-btn>
			<v-toolbar-title>With Avatar</v-toolbar-title>
			<v-spacer />
			<v-btn icon="mdi-magnify"></v-btn>
		</v-toolbar>
		<v-list :items="list4.items" lines="three" item-props>
			<template #title="{title}">
				<div v-html="title"></div>
			</template>
			<template #subtitle="{subtitle}">
				<div v-html="subtitle"></div>
			</template>
		</v-list>
	</v-card>
</template>

<script setup>
import { reactive } from "vue";
const list = reactive({
	user: "",
	person: "",
	data: "",
	open: "",
});
const list3 = reactive({
	open: [""],
	group1: [
		["First item of groups1", "mdi-flask-empty-plus-outline"],
		["The Second item of groups-1", "mdi-flask-round-bottom-empty"],
		["The Third item of groups -- 1", "mdi-rocket"],
		["4 - item of groups1", "mdi-format-letter-matches"],
		["Fifth item of groups1", "mdi-format-text-rotation-down"],
	],
});
const list4 = reactive({
	items: [
		{
			title: "Title <i class='text-red text-uppercase'>One</i>",
			prependAvatar: "./img/mountains.jpg",
			subtitle: '<span class="text-cyan">Text with <span class="text-h6">html</span> content</span>',
		},
		{
			title: "title TWO",
			prependAvatar: "./img/mountains2.jpg",
			subtitle: '<span class="text-yellow">Color is <span class="text-h4 text-yellow-darken-3">yellow</span></span>',
		},
	],
});
</script>

<style></style>
