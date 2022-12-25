import path from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";
import { acceptHMRUpdate } from "pinia";

export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    console.log(process.env.VITE_ROOT)
    return defineConfig({
        // ading alias to vite
        resolve: {
            alias: {
                "@": path.resolve(__dirname, './src'),
            },
        },
        // define: {
        //     _MY_NAME_: '"GLOBAL_VARIABLE aplied JSON or single string"'
        // },
        // server: {
        //     proxy: {
        //         '/api': 'http://localhost:1100'
        //     }
        // },
        base: '/',
        server:{
            port: 1111
        },
        preview: {
            port: 1111
        },
        // logLevel: 'silent',
        // preview: {
        //     port: '1111'
        // },
        plugins: [vue(), vuetify({ autoImport: true })],
    });
};

console.log('import.meta.env');