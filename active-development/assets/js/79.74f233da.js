(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{263:function(t,e,i){"use strict";i.r(e);var n=i(0),o=Object(n.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("These instructions apply to the Active Development (@latest) branch of the CLI, which accepts breaking changes. If you want a version with stable features and bug fixes, refer to the "),i("a",{attrs:{href:"https://zowe.github.io/docs-site/latest/user-guide/cli-installcli.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stable Zowe CLI installation instructions"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("p",[t._v("Learn more about new CLI features in the "),i("router-link",{attrs:{to:"./../getting-started/summaryofchanges.html"}},[t._v("Release notes")]),t._v(". If you are familiar with command-line tools and want to get started using Zowe CLI quickly, see "),i("router-link",{attrs:{to:"./../getting-started/cli-getting-started.html"}},[t._v("Zowe CLI quick start")])],1),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("Use one of the following methods to install Zowe CLI.")]),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("If you encounter problems when you attempt to install Zowe CLI, see "),i("router-link",{attrs:{to:"./../troubleshoot/cli/troubleshoot-cli.html"}},[t._v("Troubleshooting Zowe CLI")]),t._v(".")],1),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("If you have restricted internet access at your site, use the following method to install Zowe CLI (forward development version) from a local package.")]),t._v(" "),t._m(5),t._v(" "),i("ol",[i("li",[i("p",[t._v("Ensure that the following required software is installed on your computer:")]),t._v(" "),i("ul",[i("li",[i("p",[i("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[i("strong",[t._v("Node.js V8.0 or later")]),i("OutboundLink")],1)]),t._v(" "),t._m(6)]),t._v(" "),t._m(7)])]),t._v(" "),i("li",[i("p",[t._v("Obtain the installation files. From the Zowe "),i("a",{attrs:{href:"https://zowe.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),i("OutboundLink")],1),t._v(" website, click "),i("strong",[t._v("Download Zowe Command Line Interface - Forward Development")]),t._v(" to download the Zowe CLI installation package named "),i("code",[t._v("zowe-cli-package-*v*.*r*.*m*.zip")]),t._v(" to your computer.")]),t._v(" "),t._m(8),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),i("li",[i("p",[t._v("Issue the following command against the extracted directory to install Zowe CLI on your computer:")]),t._v(" "),t._m(11),i("p",[i("strong",[t._v("Note:")]),t._v(" On Linux, you might need to prepend "),i("code",[t._v("sudo")]),t._v(" to your "),i("code",[t._v("npm")]),t._v(" commands. For more information, see "),i("router-link",{attrs:{to:"./../troubleshoot/cli/troubleshoot-cli.html"}},[t._v("Troubleshooting Zowe CLI")]),t._v(".")],1)]),t._v(" "),i("li",[i("p",[t._v("Issue the following commands to install each available plug-in:")]),t._v(" "),t._m(12),t._m(13),t._m(14),i("p",[i("strong",[t._v("Note:")]),t._v(" The IBM Db2 plug-in requires "),i("router-link",{attrs:{to:"./cli-db2plugin.html#installing"}},[t._v("additional configuration")]),t._v(". For more information about available plug-ins, how to install multiple plug-ins, or update to a specific version of a plug-in see "),i("router-link",{attrs:{to:"./cli-extending.html"}},[t._v("Extending Zowe CLI")]),t._v(".")],1)])]),t._v(" "),i("p",[t._v("Zowe CLI is installed on your computer. You can issue the "),i("code",[t._v("zowe --help")]),t._v(" command to view a list of available commands. For information about how to connect the CLI to the mainframe (using command-line options, user profiles, or environment variables), see "),i("router-link",{attrs:{to:"./cli-configuringcli.html#defining-zowe-cli-connection-details"}},[t._v("Defining CLI connection details")]),t._v(". You can also "),i("router-link",{attrs:{to:"./cli-configuringcli.html#testing-zowe-cli-connection-to-z-osmf"}},[t._v("test your connection to z/OSMF")]),t._v(" with or without a profile.")],1),t._v(" "),t._m(15),t._v(" "),i("p",[t._v("If your computer is connected to the Internet, you can use the following method to install Zowe CLI from an npm registry.")]),t._v(" "),t._m(16),t._v(" "),i("ol",[i("li",[i("p",[t._v("Ensure that the following required software is installed on your computer:")]),t._v(" "),i("ul",[i("li",[i("p",[i("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[i("strong",[t._v("Node.js V8.0 or later")]),i("OutboundLink")],1)]),t._v(" "),t._m(17)]),t._v(" "),t._m(18)])]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),i("li",[i("p",[t._v("(Optional) To install all available plug-ins to Zowe CLI, issue the following command:")]),t._v(" "),t._m(21),i("p",[i("strong",[t._v("Note:")]),t._v(" The IBM Db2 plug-in requires "),i("router-link",{attrs:{to:"./cli-db2plugin.html#installing"}},[t._v("additional configuration")]),t._v(". For more information about available plug-ins, how to install multiple plug-ins, or update to a specific version of a plug-in see "),i("router-link",{attrs:{to:"./cli-extending.html"}},[t._v("Extending Zowe CLI")]),t._v(".")],1)])]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:"./cli-configuringcli.html#defining-zowe-cli-connection-details"}},[t._v("Defining CLI connection details")]),t._v(".")],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"./cli-configuringcli.html#testing-zowe-cli-connection-to-z-osmf"}},[t._v("Test your connection to z/OSMF")]),t._v(" with or without a profiles.")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"installing-zowe-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Zowe CLI")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"active-development-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#active-development-version","aria-hidden":"true"}},[this._v("#")]),this._v(" Active Development version")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"methods-to-install-zowe-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods-to-install-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods to install Zowe CLI")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"#installing-zowe-cli-from-a-local-package"}},[this._v("Installing Zowe CLI from a local package")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#installing-zowe-cli-from-an-online-registry"}},[this._v("Installing Zowe CLI from an online registry")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"installing-zowe-cli-from-a-local-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli-from-a-local-package","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Zowe CLI from a local package")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Follow these steps:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Tip:")]),this._v(" You might need to restart the command prompt after installing Node.js. Issue the command "),e("code",[this._v("node --version")]),this._v(" to verify that Node.js is installed.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("Node Package Manager V5.0 or later")])]),this._v(" "),e("p",[this._v("npm is included with the Node.js installation. Issue the command "),e("code",[this._v("npm --version")]),this._v(" to verify that npm is installed.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("em",[t._v("v")]),t._v(" indicates the version")]),t._v(" "),i("li",[i("em",[t._v("r")]),t._v(" indicates the release number")]),t._v(" "),i("li",[i("em",[t._v("m")]),t._v(" indicates the modification number")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("Open a command line window such as Windows Command Prompt. Browse to the directory where you downloaded the Zowe CLI installation package (.zip file). Issue the following command to unzip the files:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("unzip zowe-cli-package-v.r.m.zip\n")])])]),i("p",[i("strong",[t._v("Example:")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("unzip zowe-cli-package-1.0.1.zip\n")])])]),i("p",[t._v("By default, the unzip command extracts the contents of the zip file to the directory where you downloaded the .zip file. You can extract the contents of the zip file to your preferred location.")]),t._v(" "),i("p",[i("strong",[t._v("Optional:")]),t._v(" Double-click the Zowe CLI installation package to extract its contents into the directory where you downloaded the package. (Windows and Mac computers contain built-in software that lets you extract .zip files into a preferred location.)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm install -g zowe-cli.tgz \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins install zowe-cics.tgz \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins install zowe-ims.tgz \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins install zowe-mq.tgz \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"installing-zowe-cli-from-an-online-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli-from-an-online-registry","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Zowe CLI from an online registry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Follow these steps:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Tip:")]),this._v(" You might need to restart the command prompt after installing Node.js. Issue the command "),e("code",[this._v("node --version")]),this._v(" to verify that Node.js is installed.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("Node Package Manager V5.0 or later")])]),this._v(" "),e("p",[this._v("npm is included with the Node.js installation. Issue the command "),e("code",[this._v("npm --version")]),this._v(" to verify that npm is installed.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Issue the following command to set the registry to the Zowe CLI scoped package. In addition to setting the scoped registry, your default registry must be set to an npm registry that includes all of the dependencies for Zowe CLI, such as the global npm registry:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm config set @zowe:registry\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Issue the following command to install Zowe CLI from the registry:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm install -g @zowe/cli\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins install @zowe/cics @zowe/ims @zowe/mq\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Zowe CLI is installed on your computer. You can issue the "),e("code",[this._v("zowe --help")]),this._v(" command to view a list of available commands.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("More information:")])])}],!1,null,null,null);o.options.__file="cli-installcli.md";e.default=o.exports}}]);