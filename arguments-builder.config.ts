import { defineConfig } from "@iringo/arguments-builder";

export default defineConfig({
	output: {
		surge: {
			path: "./dist/Netflix.sgmodule",
		},
		loon: {
			path: "./dist/Netflix.plugin",
		},
		customItems: [
			{
				path: "./dist/Netflix.snippet",
				template: "./template/quantumultx.handlebars",
			},
			{
				path: "./dist/Netflix.stoverride",
				template: "./template/stash.handlebars",
			},
			{
				path: "./dist/Netflix.yaml",
				template: "./template/egern.handlebars",
			},
			{
				path: "./dist/Netflix.srmodule",
				template: "./template/shadowrocket.handlebars",
			},
		],
		dts: {
			isExported: true,
			path: "./src/types.d.ts",
		},
		boxjsSettings: {
			path: "./template/boxjs.settings.json",
			scope: "@DualSubs.Netflix.Settings",
		},
	},
	args: [
		{
			key: "Switch",
			name: "总功能开关",
			defaultValue: true,
			type: "boolean",
			description: "是否启用此APP修改",
			exclude: ["surge", "loon"],
		},
		{
			key: "Type",
			name: "[字幕] 启用类型",
			defaultValue: "Translate",
			type: "string",
			boxJsType: "selects",
			description: "请选择要使用的字幕，双语字幕将使用您选择类型呈现。",
			options: [
				{
					key: "Translate",
					label: "翻译字幕（翻译器）",
				},
			],
		},
		{
			key: "Languages[0]",
			name: "[字幕] 主语言（源语言）",
			defaultValue: "AUTO",
			type: "string",
			boxJsType: "selects",
			description:
				"当“主语言”字幕存在时，将生成“主语言/副语言（翻译）”与“主语言（外挂）”的字幕或字幕选项。仅当源语言识别不准确时更改此选项。",
			options: [
				{
					key: "AUTO",
					label: "自动 - Automatic",
				},
				{
					key: "ZH",
					label: "中文（自动）",
				},
				{
					key: "ZH-HANS",
					label: "中文（简体）",
				},
				{
					key: "ZH-HK",
					label: "中文（香港）",
				},
				{
					key: "ZH-HANT",
					label: "中文（繁体）",
				},
				{
					key: "EN",
					label: "English - 英语（自动）",
				},
				{
					key: "ES",
					label: "Español - 西班牙语（自动）",
				},
				{
					key: "JA",
					label: "日本語 - 日语",
				},
				{
					key: "KO",
					label: "한국어 - 韩语",
				},
				{
					key: "DE",
					label: "Deutsch - 德语",
				},
				{
					key: "FR",
					label: "Français - 法语",
				},
				{
					key: "TR",
					label: "Türkçe - 土耳其语",
				},
				{
					key: "KM",
					label: "ភាសាខ្មែរ - 高棉语",
				},
			],
		},
		{
			key: "Languages[1]",
			name: "[字幕] 副语言（目标语言）",
			defaultValue: "ZH",
			type: "string",
			boxJsType: "selects",
			description:
				"当“副语言”字幕存在时，将生成“副语言/主语言（官方）”的字幕或字幕选项。",
			options: [
				{
					key: "ZH",
					label: "中文（自动）",
				},
				{
					key: "ZH-HANS",
					label: "中文（简体）",
				},
				{
					key: "ZH-HK",
					label: "中文（香港）",
				},
				{
					key: "ZH-HANT",
					label: "中文（繁体）",
				},
				{
					key: "EN",
					label: "English - 英语（自动）",
				},
				{
					key: "EN-US",
					label: "英语（美国）",
				},
				{
					key: "ES",
					label: "Español - 西班牙语（自动）",
				},
				{
					key: "ES-ES",
					label: "Español - 西班牙语",
				},
				{
					key: "ES-419",
					label: "西班牙语（拉丁美洲）",
				},
				{
					key: "JA",
					label: "日本語 - 日语",
				},
				{
					key: "KO",
					label: "한국어 - 韩语",
				},
				{
					key: "DE",
					label: "Deutsch - 德语",
				},
				{
					key: "FR",
					label: "Français - 法语",
				},
				{
					key: "TR",
					label: "Türkçe - 土耳其语",
				},
				{
					key: "KM",
					label: "ភាសាខ្មែរ - 高棉语",
				},
			],
		},
		{
			key: "ShowOnly",
			name: "[字幕] 只显示翻译字幕",
			defaultValue: false,
			type: "boolean",
			description: "是否仅显示翻译后的字幕，不显示源语言字幕。",
		},
		{
			key: "Position",
			name: "[字幕] 主语言（源语言）字幕位置",
			defaultValue: "Forward",
			type: "string",
			description: "主语言（源语言）字幕的显示位置。",
			options: [
				{
					key: "Forward",
					label: "上面（第一行）",
				},
				{
					key: "Reverse",
					label: "下面（第二行）",
				},
			],
		},
		{
			key: "Vendor",
			name: "[翻译器]服务商API",
			defaultValue: "Google",
			type: "string",
			description: "请选择翻译器所使用的服务商API，更多翻译选项请使用BoxJs。",
			options: [
				{
					key: "Google",
					label: "Google Translate",
				},
				{
					key: "Microsoft",
					label: "Microsoft Translator（需填写API）",
				},
			],
		},
	],
});
