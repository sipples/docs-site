(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{231:function(t,e,i){"use strict";i.r(e);var n=i(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("p",[t._v("Use commands in the plugins command group to install and manage plug-ins for Zowe CLI.")]),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("You can install the following plug-ins:")]),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("You install Zowe CLI plugins using either of the following methods:")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("Install Zowe CLI plug-ins using npm commands on Windows, Mac, and Linux. The procedure assumes that you previously installed the core CLI.")]),t._v(" "),t._m(5),t._v(" "),i("ol",[i("li",[i("p",[t._v("Ensure that you meet the software requirements for a plug-in before you install the plug-in to Zowe CLI. For information related to each plug-in, see "),i("router-link",{attrs:{to:"./cli-swreqplugins.html"}},[t._v("Software requirements for Zowe CLI plug-ins")]),t._v(".")],1)]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),i("li",[t._m(8),t._v(" "),t._m(9),i("p",[i("strong",[t._v("Note:")]),t._v(" The IBM Db2 Plug-in for Zowe CLI requires additional licensing and ODBC driver configurations. If you installed the DB2 plug-in, see "),i("router-link",{attrs:{to:"./cli-db2plugin.html"}},[t._v("IBM Db2 Plug-in for Zowe CLI")]),t._v(".")],1)]),t._v(" "),t._m(10)]),t._v(" "),t._m(11),t._v(" "),i("p",[t._v("Application developers and systems programmers can install CA Brightside plug-ins from a local package on Windows, macOS, and Linux computers, or on any computer that has limited or no access to the Internet. The procedure assumes that you previously installed the core CLI.")]),t._v(" "),t._m(12),t._v(" "),i("ol",[i("li",[i("p",[t._v("Ensure that you meet the software requirements for a plug-in before you install the plug-in to Zowe CLI.")]),t._v(" "),i("p",[t._v("For information related to each plug-in, see "),i("router-link",{attrs:{to:"./cli-swreqplugins.html"}},[t._v("Software requirements for Zowe CLI plug-ins")]),t._v(".")],1)]),t._v(" "),i("li",[i("p",[t._v("Obtain the installation files.")]),t._v(" "),i("p",[t._v("From the Zowe "),i("a",{attrs:{href:"https://zowe.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),i("OutboundLink")],1),t._v(" website, click "),i("strong",[t._v("Download Zowe Command Line Interface")]),t._v(" to download the Zowe CLI installation package named "),i("code",[t._v("zowe-cli-package-*v*.*r*.*m*.zip")]),t._v(" to your computer.")]),t._v(" "),t._m(13)]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)]),t._v(" "),t._m(18),t._v(" "),i("p",[t._v("Issue the plug-in validation command to run tests against all plug-ins (or against a plug-in that you specify) to verify that the plug-ins integrate properly with Zowe CLI. The tests confirm that the plug-in does not conflict with existing command groups in the base application. The command response provides you with details or error messages about how the plug-ins integrate with Zowe CLI.")]),t._v(" "),i("p",[t._v("Perform validation after you install the plug-ins to help ensure that it integrates with Zowe CLI.")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),i("p",[t._v("You can update Zowe CLI plug-ins from an online registry or from a local package.")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),i("ul",[t._m(28),t._v(" "),i("li",[i("p",[t._v("[--registry "),i("registry",[t._v("]")])],1),t._v(" "),i("p",[t._v("(Optional) Specifies a registry URL that is different from the registry URL of the original installation.")])])]),t._v(" "),t._m(29),t._v(" "),i("p",[t._v("The following example illustrates the syntax to use to update an installed plug-in to the latest version:")]),t._v(" "),t._m(30),i("p",[t._v("The following example illustrates the syntax to use to update a plug-in to a specific version:")]),t._v(" "),t._m(31),t._m(32),t._v(" "),i("p",[t._v("You can update plug-ins from a local package. You acquire the media from the "),i("a",{attrs:{href:"https://zowe.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zowe Download"),i("OutboundLink")],1),t._v(" website and update the plug-ins using the "),i("code",[t._v("zowe plugins install")]),t._v(" command.")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),i("p",[t._v("Issue the uninstall command to uninstall plug-ins from Zowe CLI. After the uninstall process completes successfully, the product no longer contains the plug-in configuration.")]),t._v(" "),i("p",[t._v("The uninstall command contains the following syntax:")]),t._v(" "),t._m(35),t._m(36),t._v(" "),i("p",[t._v("The following table describes the uninstallation command synstax for each plug-in:")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),i("p",[t._v("The following example illustrates the command to uinstall the Zowe Plug-in for CICS:")]),t._v(" "),t._m(39)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"installing-zowe-cli-plug-ins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Zowe CLI plug-ins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Important!")]),this._v(" Plug-ins can gain control of your CLI application legitimately during the execution of commands. Install third-party plug-ins at your own risk. We make no warranties regarding the use of third-party plug-ins.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("IBM® CICS® Plug-in for Zowe CLI")]),this._v(" "),e("li",[this._v("IBM® Db2® Plug-in for Zowe CLI")]),this._v(" "),e("li",[this._v("IBM® IMS™ Plug-in for Zowe CLI")]),this._v(" "),e("li",[this._v("IBM® MQ Plug-in for Zowe CLI")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[t._v("Install Zowe CLI plug-ins from an online registry. With this method, you install the plug-ins from an online, NPM registry. Use this method when your computer "),i("em",[i("strong",[t._v("can")])]),t._v(" access the Internet.")]),t._v(" "),i("p",[t._v("For more information, see "),i("a",{attrs:{href:"#installing-plug-ins-from-an-online-registry"}},[t._v("Installing plug-ins from an online registry")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Install Zowe CLI plug-ins from a local package. With this method, you download and install the plug-ins from a bundled set of "),i("code",[t._v(".tgz")]),t._v(" file. Use this method when your computer "),i("em",[i("strong",[t._v("cannot")])]),t._v(" access the Internet.")]),t._v(" "),i("p",[t._v("For more information, see "),i("a",{attrs:{href:"#installing-plug-ins-from-a-local-package"}},[t._v("Installing plug-ins from a local package")]),t._v(".")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installing-plug-ins-from-an-online-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-plug-ins-from-an-online-registry","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing plug-ins from an online registry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Follow these steps:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Set the NPM registry target to the public npm registry by issuing the following command:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm config set @zowe:registry\n")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("Issue the following command to install a plug-in:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("zowe plugins install <my-plugin>\n")])])]),i("p",[i("strong",[t._v("Note:")]),t._v(" Replace "),i("code",[t._v("<my-plugin>")]),t._v(" with the installation command syntax in the following table:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Plug-in")]),t._v(" "),i("th",[t._v("Installation Command Syntax")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("IBM CICS Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/cics-for-zowe-cli")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM Db2 Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/db2-for-zowe-cli")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM IMS Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/ims-for-zowe-cli")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM MQ Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/mq-for-zowe-cli")])])]),t._v(" "),i("tr",[i("td"),t._v(" "),i("td")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("(Optional) Issue the following command to install two or more plug-ins using one command. Separate the "),e("code",[this._v("<my-plugin>")]),this._v(" names with one space.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins install @zowe/<my-plugin1> @zowe/<my-plugin2> @zowe/<my-plugin3> ...\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("(Optional) You can can validate plug-ins to verify that the plug-ins installed successfully. For more information see, "),e("a",{attrs:{href:"#validating-plug-ins"}},[this._v("Validating plug-ins")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installing-plug-ins-from-a-local-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-plug-ins-from-a-local-package","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing plug-ins from a local package")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Follow these steps:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("strong",[t._v("Note:")]),t._v(" "),i("code",[t._v("v")]),t._v(" indicates the version, "),i("code",[t._v("r")]),t._v(" indicates the release number, and "),i("code",[t._v("m")]),t._v(" indicates the modification number")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Open a command line window such as Windows Command Prompt. Browse to the directory where you downloaded the Zowe CLI installation package. Issue the following command to unzip the files:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("unzip zowe-cli-package-v.r.m.zip\n")])])]),e("p",[e("strong",[this._v("Example:")])]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("unzip zowe-cli-package-1.0.1.zip\n")])])]),e("p",[this._v("By default, the unzip command extracts the contents of the zip file to the directory where you downloaded the file. Optionally, you can extract the contents of the .zip file to your preferred location.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Open a command line window and change the local directory where you extracted the zip file.")]),this._v(" "),e("p",[e("strong",[this._v("Example:")])]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("cd C:\\Users\\userID\\my_downloads\\<file_name>.zip\n")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",[t._v("Issue the following command to install the plug-in:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("zowe plugins install <my-plugin>\n")])])]),i("p",[t._v("Replace "),i("code",[t._v("<my-plugin>")]),t._v(" with the .tgz file name listed in the following table:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Plug-in")]),t._v(" "),i("th",[i("code",[t._v(".tgz")]),t._v(" File Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("IBM CICS Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("cics-for-zowe.cli.tgz")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM Db2 Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("db2-for-zowe-cli.tgz")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM IMS Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("ims-for-zowe-cli.tgz")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM MQ Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("mq-for-zowe-cli.tgz")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("(Optional) You can can validate plug-ins to verify that the plug-ins installed successfully. For more information see, "),e("a",{attrs:{href:"#validating-plug-ins"}},[this._v("Validating plug-ins")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"validating-plug-ins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validating-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Validating plug-ins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("validate")]),this._v(" command has the following syntax:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins validate [plugin]\n")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[i("strong",[i("code",[t._v("[plugin]")])]),i("br"),t._v("\n(Optional) Specifies the name of the plug-in that you want to\nvalidate. If you do not specify a plug-in name, the command\nvalidates all installed plug-ins. The name of the plug-in is not always the same as the name of the NPM package.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Plug-in")]),t._v(" "),i("th",[t._v("Syntax")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("IBM CICS Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/cics")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM Db2 Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/db2")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM IMS Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/ims")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM MQ Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/mq")])])]),t._v(" "),i("tr",[i("td"),t._v(" "),i("td")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Examples: Validate plug-ins")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("The following example illustrates the syntax to use to validate the IBM CICS Plug-in for Zowe CLI:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins validate @zowe/cics\n")])])])]),this._v(" "),e("li",[e("p",[this._v("The following example illustrates the syntax to use to validate all installed plug-ins:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins validate\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"updating-plug-ins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating plug-ins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"update-plug-ins-from-an-online-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-plug-ins-from-an-online-registry","aria-hidden":"true"}},[this._v("#")]),this._v(" Update plug-ins from an online registry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Issue the "),e("code",[this._v("update")]),this._v(" command to install the latest stable version or a specific version of a plug-in that you installed previously. The "),e("code",[this._v("update")]),this._v(" command has the following syntax:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins update [plugin...] [--registry <registry>]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("[plugin...]")]),this._v(" "),e("p",[this._v("Specifies the name of an installed plug-in that you want to update. The name of the plug-in is not always the same as the name of the NPM package. You can use npm semantic versioning to specify a plug-in version to which to update. For more information, see npm semver.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Examples: Update plug-ins")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins update @zowe/my-plugin@lts-incremental\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('zowe plugins update @zowe/my-plugin@"^1.2.3"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"update-plug-ins-from-a-a-local-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-plug-ins-from-a-a-local-package","aria-hidden":"true"}},[this._v("#")]),this._v(" Update plug-ins from a a local package")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To update plug-ins from a local package, follow the steps that are described in "),e("a",{attrs:{href:"#installing-plug-ins-from-a-local-package"}},[this._v("Installing plug-ins from a local package")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"uninstall-plug-ins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Uninstall Plug-ins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins uninstall [plugin]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[e("code",[this._v("[plugin]")])]),this._v(" "),e("p",[this._v("Specifies the name of the plug-in that you want to uninstall.")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Plug-in")]),t._v(" "),i("th",[t._v("Uinstallation Command Syntax")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("IBM CICS Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/cics-for-zowe-cli")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM Db2 Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/db2-for-zowe-cli")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM IMS Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/ims-for-zowe-cli")])])]),t._v(" "),i("tr",[i("td",[t._v("IBM MQ Plug-in for Zowe CLI")]),t._v(" "),i("td",[i("code",[t._v("@zowe/mq-for-zowe-cli")])])]),t._v(" "),i("tr",[i("td"),t._v(" "),i("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zowe plugins uninstall @zowe/cics-for-zowe-cli\n")])])])}],!1,null,null,null);a.options.__file="cli-installplugins.md";e.default=a.exports}}]);