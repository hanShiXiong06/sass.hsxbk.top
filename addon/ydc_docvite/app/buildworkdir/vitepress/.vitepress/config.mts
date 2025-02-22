import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";
// import { withI18n } from "vitepress-i18n";
import type VitePressI18nOptions from "vitepress-i18n";

import fs from "fs";
import YAML from "yaml";

const configFilePath = ".vitepress/config.yml";

let configFile: {
  site: {
    title: string;
    description: string;
    base: string;
    srcDir: string;
    outDir: string;
    cacheDir: string;
    docsEntry: string;
    blogEntry: string;
    addonNavis: { text: string; url: string }[];
    editLink?: {
      text?: string;
      link?: string;
    };
    footer: {
      message: string;
      copyright: string;
    };
    customProperty: Record<string, string>;
  };
} | null = null;

if (fs.existsSync(configFilePath)) {
  const file = fs.readFileSync(configFilePath, "utf8");
  configFile = YAML.parse(file);
  console.info("configFile: ", configFile);
} else {
  throw "No config file.";
}

if (configFile === null) {
  throw "Invalid config file.";
}

const getConfigYmlCustomProperty = (name: string, defaultValue: any = null) => {
  if (
    configFile?.site?.customProperty &&
    configFile.site.customProperty.hasOwnProperty(name)
  ) {
    return configFile.site.customProperty[name];
  }

  return defaultValue;
};

// https://vitepress.dev/reference/site-config
const vitepressConfig = {
  ignoreDeadLinks: true,

  title: configFile?.site.title ?? "Vitepress Doc",
  description: configFile?.site.description ?? "Vitepress Doc",

  // TODO: 打包时生成的文件部署路径，相对于当前访问域名.
  // 如果计划将站点部署到 https://foo.github.io/bar/，那么应该将 base 设置为 '/bar/'。它应该始终以 / 开头和结尾。
  base: configFile?.site.base ?? "/",

  // TODO: 不同的用户数据可以通过这个来指定不同目录.
  // 相对于项目根目录的 markdown 文件所在的文件夹。
  srcDir: configFile?.site.srcDir ?? "./",

  // TODO: 不同用户的构建结果输出到不同目录.
  outDir: configFile?.site.outDir ?? "./dist",

  // TODO: 不同用户的构建缓存也要放到不同目录.
  cacheDir: configFile?.site.cacheDir ?? "./cache",

  themeConfig: {
    outline: {
      level: [2, 6],
    },
    editLink: {
      pattern:
        configFile.site?.editLink?.link === ""
          ? "https://doc.ydc.show/"
          : configFile.site?.editLink?.link,
      text:
        configFile.site?.editLink?.text === ""
          ? "【易东文档】极速搭建文档型官网"
          : configFile.site?.editLink?.text,
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "文档", link: configFile?.site.docsEntry ?? "/docs/index" },
      {
        text: "动态",
        link: configFile?.site.blogEntry ?? "/blog/index",
      },

      // 内置导航.
      // { text: "易东云文档", link: "https://doc.yidong.site" },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],

    footer: {
      message: configFile?.site.footer.message ?? "易东云文档Vite",
      copyright:
        configFile?.site.footer.copyright ?? "Copyright © 2024 易东云网络",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  },
};

if (
  Array.isArray(configFile?.site.addonNavis) &&
  configFile?.site.addonNavis.length > 0
) {
  configFile?.site.addonNavis.forEach((ele) => {
    vitepressConfig.themeConfig.nav.push({
      text: ele.text,
      link: ele.url,
    });
  });
}

/*
 * For detailed instructions, see the links below:
 * https://vitepress-sidebar.cdget.com/guide/options
 */
const vitepressSidebarConfig = {
  // ============ [ RESOLVING PATHS ] ============
  documentRootPath: configFile?.site.srcDir ?? "./userdata/10086/docs",
  // scanStartPath: null,
  // resolvePath: null,
  // basePath: null,
  //
  // ============ [ GROUPING ] ============
  // collapsed: true,
  // collapseDepth: 2,
  // rootGroupText: 'Contents',
  // rootGroupLink: 'https://github.com/jooy2',
  // rootGroupCollapsed: false,
  //
  // ============ [ GETTING MENU TITLE ] ============
  // useTitleFromFileHeading: true,
  // useTitleFromFrontmatter: true,
  // useFolderLinkFromIndexFile: false,
  // useFolderTitleFromIndexFile: false,
  // frontmatterTitleFieldName: 'title',
  //
  // ============ [ GETTING MENU LINK ] ============
  // useFolderLinkFromSameNameSubFile: false,
  // useFolderLinkFromIndexFile: false,
  // folderLinkNotIncludesFileName: false,
  //
  // ============ [ INCLUDE / EXCLUDE ] ============
  // excludePattern: ['README.md', 'folder/'],
  // excludeFilesByFrontmatterFieldName: 'exclude',
  // includeDotFiles: false,
  // includeEmptyFolder: false,
  // includeRootIndexFile: false,
  // includeFolderIndexFile: false,
  //
  // ============ [ STYLING MENU TITLE ] ============
  // hyphenToSpace: true,
  // underscoreToSpace: true,
  // capitalizeFirst: false,
  // capitalizeEachWords: false,
  // keepMarkdownSyntaxFromTitle: false,
  // removePrefixAfterOrdering: false,
  // prefixSeparator: '.',
  //
  // ============ [ SORTING ] ============
  // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
  // sortFolderTo: null,
  // sortMenusByName: false,
  // sortMenusByFileDatePrefix: false,
  // sortMenusByFrontmatterOrder: false,
  // frontmatterOrderDefaultValue: 0,
  // sortMenusByFrontmatterDate: false,
  // sortMenusOrderByDescending: false,
  // sortMenusOrderNumericallyFromTitle: false,
  // sortMenusOrderNumericallyFromLink: false,
  //
  // ============ [ MISC ] ============
  // debugPrint: false,
};

// VitePress I18n config
const vitepressI18nConfig: Partial<VitePressI18nOptions> = {
  locales: ["zhHans"], // first locale 'en' is root locale
  searchProvider: "local", // enable search with auto translation
};

export default defineConfig(
  withSidebar(
    // withI18n(vitepressConfig, vitepressI18nConfig),
    vitepressConfig,
    vitepressSidebarConfig
  )
);
