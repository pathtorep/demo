import { createRouter, createWebHistory } from "vue-router";

export const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/home.vue"),
		icon: "mdi-home",
	},
	{
		path: "/alert",
		name: "alert",
		component: () => import("@/components/vuety/alert.vue"),
		icon: "mdi-alert-circle",
	},
	{
		path: "/toolbar",
		name: "toolbar",
		component: () => import("@/components/vuety/toolbar.vue"),
		icon: "mdi-hammer-wrench",
	},
	{
		path: "/drawer",
		name: "navigation-drawer",
		component: () => import("@/components/vuety/drawer.vue"),
		icon: "mdi-drawing",
	},
	{
		path: "/lists",
		name: "Lists",
		component: () => import("@/components/vuety/lists.vue"),
		icon: "mdi-format-list-bulleted-square",
	},
	{
		path: "/appbar-2",
		name: "app-bar-2",
		component: () => import("@/components/vuety/appbar.vue"),
		icon: "mdi-apps-box",
	},
	// --------------------------Example of the pinia--------------------------
	{
		path: "/pinia",
		component: () => import("@/components/test-child/examplePinia.vue"),
	},
	{
		path: "/pinia2",
		component: () => import("@/components/test-child/examplePinia2.vue"),
	},
	// ------------------------ >>>>> -------------------------------------------
	// -----------------------------------------------------------------------------

	{
		path: "/test",
		name: "RouterExample",
		component: () => import("@/components/routerExamp.vue"),
		children: [
			{
				path: "",
				component: () => import("@/components/test-child/bydef.vue"),
				name: "bydefault",
			},
			{
				path: "notfound",
				component: () => import("@/components/elements/notFound.vue"),
				name: "page is no found",
			},
			{
				path: ":str",
				component: () => import("@/components/test-child/forstr.vue"),
				strict: true,
				name: "string path",
			},
			{
				path: ":num(\\d+)",
				component: () => import("@/components/test-child/fornum.vue"),
				name: "number path",
			},
			{
				path: "users/:userState?",
				component: () =>
					import("@/components/users-profile/userdef.vue"),
				name: "users",
				children: [
					{
						path: "user",
						components: {
							default: () =>
								import("@/components/users-profile/user.vue"),
							second: () => import("@/views/second.vue"),
						},
					},
					{
						path: "admin",
						components: {
							default: () =>
								import("@/components/users-profile/admin.vue"),
							second: () => import("@/views/second.vue"),
						},
					},
				],
			},
		],
	},
	{
		path: "/redirecting",
		redirect: { name: "users" },
	},
	// --------------------------------------------------------------------------------
	{
		path: "/:stringable",
		component: () => import("@/views/first.vue"),
		props: true,
	},
	{
		path: "/:numberable(\\d+)",
		component: () => import("@/views/first.vue"),
	},
	{
		path: "/:repeatable+",
		component: () => import("@/views/first.vue"),
	},
];

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
