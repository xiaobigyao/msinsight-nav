# MindStudio Insight

# 8.3.0

# 工具用户指南

文档版本 01

发布日期 2026-01-19

版权所有 $\circledcirc$ 华为技术有限公司 2026。 保留一切权利。

非经本公司书面许可，任何单位和个人不得擅自摘抄、复制本文档内容的部分或全部，并不得以任何形式传播。

# 商标声明

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/69b58b1d651e0f375256be3729c63357d5b6479e40606c8a4143db720e61b93c.jpg)


和其他华为商标均为华为技术有限公司的商标。

本文档提及的其他所有商标或注册商标，由各自的所有人拥有。

# 注意

您购买的产品、服务或特性等应受华为公司商业合同和条款的约束，本文档中描述的全部或部分产品、服务或特性可能不在您的购买或使用范围之内。除非合同另有约定，华为公司对本文档内容不做任何明示或暗示的声明或保证。

由于产品版本升级或其他原因，本文档内容会不定期进行更新。除非另有约定，本文档仅作为使用指导，本文档中的所有陈述、信息和建议不构成任何明示或暗示的担保。

# 安全声明

# 产品生命周期政策

华为公司对产品生命周期的规定以“产品生命周期终止政策”为准，该政策的详细内容请参见如下网址：https://support.huawei.com/ecolumnsweb/zh/warranty-policy

# 漏洞处理流程

华为公司对产品漏洞管理的规定以“漏洞处理流程”为准，该流程的详细内容请参见如下网址：https://www.huawei.com/cn/psirt/vul-response-process

如企业客户须获取漏洞信息，请参见如下网址：https://securitybulletin.huawei.com/enterprise/cn/security-advisory

# 华为初始证书权责说明

华为公司对随设备出厂的初始数字证书，发布了“华为设备初始数字证书权责说明”，该说明的详细内容请参见如下网址：https://support.huawei.com/enterprise/zh/bulletins-service/ENEWS2000015766

# 华为企业业务最终用户许可协议(EULA)

本最终用户许可协议是最终用户（个人、公司或其他任何实体）与华为公司就华为软件的使用所缔结的协议。最终用户对华为软件的使用受本协议约束，该协议的详细内容请参见如下网址：https://e.huawei.com/cn/about/eula

# 产品资料生命周期策略

华为公司针对随产品版本发布的售后客户资料（产品资料），发布了“产品资料生命周期策略”，该策略的详细内容请参见如下网址：https://support.huawei.com/enterprise/zh/bulletins-website/ENEWS2000017760

# 目 录

1 简介.......

2 安装与卸载.. .... 4

2.1 安装和卸载操作（Windows） 4

2.1.1 准备环境和软件包.. 4

2.1.2 安装 MindStudio Insight.. 5

2.1.3 卸载 MindStudio Insight.. 9

2.2 安装和卸载操作（Linux） 11

2.2.1 概述... 11

2.2.2 准备环境和软件包. 12

2.2.3 安装转发方式及依赖.. 14

2.2.3.1 依赖列表. 14

2.2.3.2 安装操作.. 17

2.2.4 安装 MindStudio Insight.. 18

2.2.5 卸载 MindStudio Insight.. 18

2.3 安装和卸载操作（macOS） 19

2.3.1 准备环境和软件包. 19

2.3.2 安装 MindStudio Insight.. 19

2.3.3 卸载 MindStudio Insight... 20

2.4 升级 MindStudio Insight...... 20

3 基础操作.... 22

3.1 基础设置.. 22

3.2 导入数据.. 22

3.3 管理数据.. 24

3.4 管理日志.. 28

3.5 常用快捷键.. . 29

4 系统调优.. 31

4.1 导入性能数据.. .31

4.2 时间线（Timeline） 38

4.2.1 界面介绍.. . 38

4.2.2 使用说明.. 43

4.2.2.1 基础功能.. 44

4.2.2.2 性能数据展示. .46

4.2.2.3 页面调优展示.. .59

4.2.2.4 系统功能展示.. .66

4.3 内存（Memory） .75

4.3.1 界面介绍.. . 75

4.3.2 使用说明.. 78

4.4 算子（Operator） 84

4.4.1 界面介绍.. . 84

4.4.2 使用说明.. . 86

4.5 概览（Summary）. 92

4.5.1 界面介绍.. . 92

4.5.2 使用说明.. 102

4.6 通信（Communication） 110

4.6.1 界面介绍.. 110

4.6.2 使用说明.. 118

4.7 强化学习（RL） . 124

4.7.1 界面介绍.. 124

# 5 算子调优.. 126

5.1 导入性能数据.. 126

5.2 时间线（Timeline） 127

5.2.1 界面介绍... 127

5.2.2 使用说明.. 129

5.2.2.1 基础功能.. 129

5.2.2.2 性能数据展示.. 132

5.2.2.3 页面调优展示.. 136

5.2.2.4 统计信息展示. 136

5.3 源码（Source） 138

5.3.1 界面介绍.. 138

5.3.2 使用说明.. 141

5.4 详情（Details） 143

5.4.1 界面介绍.. 144

5.4.2 使用说明. 157

5.5 缓存（Cache）. 159

5.5.1 界面介绍.. 159

5.5.2 使用说明.. 160

# 6 服务化调优... 161

6.1 导入性能数据.. 161

6.2 时间线（Timeline） .161

6.2.1 界面介绍.. 161

6.2.2 使用说明.. 164

6.3 折线图（Curve） 169

6.3.1 界面介绍.. 169

6.3.2 使用说明.. 170

# 7 内存调优.. ..................。 172

7.1 导入性能数据.. 172

7.2 内存详情（Leaks） 172

7.2.1 界面介绍.. 172

7.2.2 使用说明.. 174

# 8 附录.. ......................... 180

8.1 安全加固建议.. 180

8.2 安装转发方式（Linux） . 180

8.2.1 安装操作（X11 方式） .180

8.2.2 安装操作（VNC 方式） . 181

8.3 插件管理... . 187

8.4 FAQ.. . 188 

8.4.1 运行 MindStudio Insight 工具时出现 Missing Dependencies 报错弹窗. 188

8.4.2 如何重新解析 text 格式的 Profiling 文件.. .189

8.4.3 EulerOS 等系统上运行 MindStudio Insight 工具无法弹出数据导入选择框.. 189

8.4.4 通过 X11 转发方式运行 MindStudio Insight 工具时，输入框信息粘贴有误. 190

8.4.5 MindStudio Insight 工具拖入网络磁盘目录无法加载数据. .190

8.4.6 MindStudio Insight 工具运行时出现 Out of Memory 报错.. . 191

8.4.7 MindStudio Insight 工具拖入文件显示禁用. .192

8.4.8 MindStudio Insight 运行时出现“cannot open shared object file swrast_dri.so”报错.. .192

8.4.9 启动 VNC 时出现“Oh no! Something has gone wrong.”报错.. . 193

8.4.10 OpenEuler 及其衍生操作系统在安装依赖时提示找不到相关依赖.. .194

8.4.11 MindStudio Insight 导入数据时显示黑屏.. 194

8.4.12 MindStudio Insight 导入数据后通信界面未显示数据. 194

8.4.13 MindStudio Insight 在 TencentOS Server $4 . 4 _ { - } { \times } 8 6$ 操作系统中启动失败. 195

# 简介

# 概述

MindStudio Insight是面向昇腾AI开发者的可视化调优工具，支持系统调优、算子调优、服务化调优和内存调优的能力，帮助开发者在训练、推理以及算子开发场景快速完成性能优化。

MindStudio Insight提供了丰富的调优分析手段，能够可视化呈现真实软硬件运行数据，多维度分析性能瓶颈点，支持百卡、千卡及以上规模的可视化集群性能分析，助力开发者在天级时间内完成性能调优。

# 优势

MindStudio Insight支持在时间线（Timeline）查看集群场景下的性能数据，并以单卡为维度进行展示，且可以自动遍历输入路径下的db文件，或者所有的trace_view.json文件（PyTorch场景和MindSpore场景）和msprof*.json文件（TensorFlow场景和离线推理场景），无需手动合并文件，操作简单。

MindStudio Insight借助于数据库支持超大性能数据处理，可以支持20GB的集群性能数据分析，并且能够支持大模型场景下的性能调优。

# 场景

系统调优：MindStudio Insight提供时间线视图、内存、算子耗时、通信瓶颈分析等功能，帮助开发者快速定位模型性能瓶颈。


表1-1 功能说明


<table><tr><td>功能界面</td><td>介绍</td><td>场景说明</td></tr><tr><td>时间线（Timeline）</td><td>以时间线视图方式为用户提供全流程在线推理/训练过程中的运行情况，并按照调度流程来呈现整体的运行状况，支持集群时间线（Timeline）展示、系统视图详情查看等功能。</td><td>-</td></tr><tr><td>内存（Memory）</td><td>提供采集过程中内存信息的可视化呈现。通过算子内存折线图直观清晰了解算子内存趋势。</td><td>-</td></tr><tr><td>算子（Operator）</td><td>提供算子耗时统计和分析。</td><td>-</td></tr><tr><td>概览（Summary）</td><td>展示计算算子和通信算子的耗时分析，并以柱状图、折线图以及数据窗格等呈现方式显示分析结果。</td><td>支持PyTorch或MindSpore集群场景。</td></tr><tr><td>通信（Communication）</td><td>展示集群中全网链路性能以及所有节点的通信性能，通过集群通信与计算重叠时间的分析可以找出集群训练中的慢主机或慢节点。</td><td>支持PyTorch或MindSpore集群场景。</td></tr><tr><td>强化学习（RL）</td><td>提供了强化学习过程中各阶段流水图的可视化展示。</td><td>-</td></tr></table>

算子调优：MindStudio Insight提供指令流水视图、算子源码视图以及算子运行负载分析视图，直观地将运行在昇腾AI处理器上的算子的关键性能指标进行可视化呈现，帮助用户快速定位算子的软硬件性能瓶颈，提升算子性能分析的效率。


表1-2 功能说明


<table><tr><td>功能界面</td><td>介绍</td><td>备注</td></tr><tr><td>时间线（Timeline）</td><td>以时间线视图方式为用户提供指令在昇腾AI处理器上的运行情况，并按照调度流程来呈现整体的运行状况，支持查看指令详情、搜索指令等功能。</td><td>-</td></tr><tr><td>源码（Source）</td><td>展示算子指令热点图，支持查看算子源码与指令集的映射关系和耗时情况。</td><td>支持算子调优工具（msProf）采集的bin文件。</td></tr><tr><td>详情（Details）</td><td>展示算子基础信息、计算负载分析和内存负载分析，并以图形和数据窗格呈现方式展示分析结果。</td><td>支持算子调优工具（msProf）采集的bin文件。</td></tr><tr><td>缓存（Cache）</td><td>展示用户程序Kernel函数内的L2 Cache访问情况，以便用户优化Cache命中率。</td><td>支持算子调优工具（msProf）采集的bin文件。</td></tr></table>

服务化调优：MindStudio Insight工具以时间线（Timeline）的呈现方式，将请求端到端的执行情况平铺在时间轴上，直观体现请求在各个关键阶段的耗时情况以及当下请求的状态信息，可帮助用户快速识别服务化性能瓶颈，并调整调优策略。


表 1-3 功能说明


<table><tr><td>功能界面</td><td>介绍</td><td>场景说明</td></tr><tr><td>时间线（Timeline）</td><td>以时间线视图方式为用户提供请求端到端的执行情况，直观地查看请求在各个关键阶段的耗时情况以及当下请求的状态信息。</td><td>支持推理服务化请求trace数据的json文件。</td></tr><tr><td>折线图（Curve）</td><td>以折线图和数据详情表的形式展示推理服务化进程中端到端的性能情况。</td><td>支持profiler.db文件。</td></tr></table>

内存调优：MindStudio Insight工具以图形化形式呈现device侧内存详细分配情况，并结合Python调用栈及自定义打点标签标记各种内存申请使用详情，进行内存问题的详细定位及调优。


表 1-4 功能说明


<table><tr><td>功能界面</td><td>介绍</td><td>场景说明</td></tr><tr><td>内存详情(Leaks)</td><td>通过调用栈图、折线块图和内存拆解图,将内存情况直观地呈现出来,便于开发者分析定位内存问题,有效缩短定位时间。</td><td>支持msLeaks工具采集到的db格式的内存结果文件。</td></tr></table>

# 使用约束

MindStudio Insight工具支持导入并展示多种格式的性能数据文件，并对文件规格给出了指导性建议和限制要求，具体信息请参见表1-5。


表 1-5 文件规格


<table><tr><td>文件类型</td><td>指导建议</td><td>规格限制</td></tr><tr><td>json文件</td><td>建议单文件大小不超过1GB，多个文件总大小不超过20GB。</td><td>单文件大小不超过10GB。</td></tr><tr><td>bin文件</td><td>建议单文件大小不超过500MB。</td><td>单文件大小不超过10GB。</td></tr><tr><td>db文件</td><td>• 系统调优：建议单文件大小不超过1GB。
• 服务化调优：建议单文件大小不超过1GB。</td><td>• 系统调优：单文件大小不超过20GB。
• 服务化调优：单文件大小不超过10GB。</td></tr><tr><td>csv文件</td><td>csv格式的文件存在于text数据中，建议单文件大小不超过500MB。</td><td>单文件大小不超过2GB。</td></tr></table>

# 2 安装与卸载

安装和卸载操作（Windows）

安装和卸载操作（Linux）

安装和卸载操作（macOS）

升级MindStudio Insight

# 2.1 安装和卸载操作（Windows）

# 2.1.1 准备环境和软件包

# 本地环境要求

MindStudio Insight工具的安装与可视化呈现对Windows系统及设备配置有一定要求，请参见表2-1。


表2-1 系统配置要求


<table><tr><td>类别</td><td>要求</td><td>说明</td></tr><tr><td>系统</td><td>Windows 10 64位操作系统</td><td>-</td></tr><tr><td>内存配置</td><td>推荐16GB及以上</td><td>针对大模型集群场景，加载的数据量较大。</td></tr><tr><td>磁盘空间</td><td>推荐可用空间30GB及以上</td><td>用于存放加载性能数据时生成的数据库文件。</td></tr></table>

# 下载软件包

软件安装前，请参考表2-2获取所需软件包和对应的数字签名文件。


表 2-2 软件包


<table><tr><td>软件包</td><td>说明</td><td>获取链接</td></tr><tr><td>MindStudio-Insight_{{version}}_win.exe</td><td>适用于Windows系统的MindStudioInsight软件包，含有GUI的集成开发环境。</td><td>●商用版：获取软件包
●社区版：获取软件包</td></tr></table>

# 说明

{version表示软件版本号。

# 软件完整性验证

为了防止软件包在传递过程或存储期间被恶意篡改，下载软件包时需下载对应的数字签名文件用于完整性验证。

请单击PGP数字签名工具包获取工具包，将工具包解压后，请参考文件夹中的《OpenPGP签名验证指南》，对下载的软件包进行PGP数字签名校验。如果校验失败，请不要使用该软件包，访问支持与服务在论坛求助或提交技术工单。

# 2.1.2 安装 MindStudio Insight

# 前提条件

参见2.1.1 准备环境和软件包章节，完成安装MindStudio Insight工具前的准备工作。

# 操作步骤

步骤1 双击MindStudio-Insight_{version}_win.exe软件包，开始安装MindStudio Insight。

步骤2 进入MindStudio Insight Setup界面，单击“Next”，如图2-1所示。


图 2-1 MindStudio Insight Setup


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/7da590af39b80b4b6701c6e42a60331ec952febb7f40a132b873a3513b9874f5.jpg)


步骤3 进入许可协议界面，单击“I Agree”，如图2-2所示。


图 2-2 License Agreement


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/f0ccc33aa29b32c71cb90c16b5b5966a68d64860bb5a64d96b5060ae5ef21886.jpg)


步骤4 选择MindStudio Insight的安装路径，单击“Next”，如图2-3所示。


图 2-3 选择安装路径


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/b14cd01a0ad0f3421f8e57247e80776d7574c1086180e66b144ef082a4f3f60c.jpg)


# 说明

默认安装目录为“C:\Program Files (x86)\MindStudio Insight”。如果选择安装到其他目录，为避免其他用户修改运行文件，需要取消普通用户的修改权限，可在所选文件夹右键选择“属性> 安全”，在“安全”页签下修改用户的权限。

步骤5 选择安装组件MindStudio Insight，单击“Install”，如图2-4所示。


图 2-4 选择安装组件


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/efa34b829cfe8584cb335749008c45262d9521b8d6c7b409b8b59f690963deef.jpg)


步骤6 完成MindStudio Insight安装，单击“Finish”，如图2-5所示。


图 2-5 完成安装


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/438349be5c8e90ef1beed267f1d5d0c81e58b8cc3cb0cb469e4c2966f2bf5040.jpg)


步骤7 启动MindStudio Insight。

如果在步骤6中，勾选了“Run MindStudio Insight”，单击“Finish”后会自动启动MindStudio Insight。

如果未勾选“Run MindStudio Insight”，安装完成后，双击桌面的“MindStudio Insight”快捷方式图标，或安装目录下的“MindStudio-Insight.exe”，即可启动MindStudio Insight工具。

# 说明

安装完成后，运行MindStudio Insight工具时，如果出现Missing Dependencies报错弹窗，请参见8.4.1 运行MindStudio Insight工具时出现Missing Dependencies报错弹窗解决。

# ----结束

# 2.1.3 卸载 MindStudio Insight

步骤1 进入MindStudio Insight安装目录，双击Uninstall.exe，弹出卸载界面，单击“Uninstall”后进行卸载，如图2-6所示。


图 2-6 MindStudio Insight 卸载界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/6b343cbd8dfde959b123534058c803c7807d8c76a872d4d51edef7f6df9969fc.jpg)


步骤2 单击“Next”。


图 2-7 卸载


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/c66d6f23aa26bd5a637e07510619e7f3224acd2f8752b12929080488579b7ab2.jpg)


步骤3 勾选“Remove cache data”清理缓存数据，单击“Uninstall”卸载。


图 2-8 清理缓存数据


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/bc6e645f594f13ff9a13d75c4408ff99aadf07ceb4fd94a7b2f6412302c92c2b.jpg)


步骤4 完成卸载。


图2-9 卸载完成


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/f1a9dbc63e7b229aaa0da018ddb62887a69fba3b7d90c048cddbbb249e98e584.jpg)



----结束


# 2.2 安装和卸载操作（Linux）

# 2.2.1 概述

在Linux环境下，MindStudio Insight工具可通过本地方式和转发方式进行使用。

本地方式

本地安装Linux操作系统的服务器直接外接显示器，将工具界面直接展示在操作系统桌面上，跟日常本地Windows主机接显示器类似，此场景无工具界面的延迟。

转发方式

当本地无Linux服务器时，可通过连接远端的Linux服务器，使用X11、VNC、XRDP等方式将远端Linux服务器中的桌面或软件界面转发到本地显示，例如，本地Windows桌面显示Linux服务器上的应用程序界面。MindStudio Insight可通过转发能力，在Linux服务器上实现界面转发，便于开发者使用。不过与本地方式相比，转发方式受网络性能影响，可能存在网络延时，会造成工具安装使用过程中出现卡顿问题。

本文档主要介绍X11和VNC两种转发方式，开发者可根据实际情况选择其中一种转发方式，可参见表2-3进行选择。通过转发方式安装使用MindStudio Insight，首先需要安装转发方式和软件依赖，安装操作请参见2.2.3 安装转发方式及依赖章节。

# 说明

推荐使用VNC转发方式，可获得更为流畅的使用体验。


表 2-3 转发方式说明


<table><tr><td>转发方式</td><td>网络延迟</td><td>安全性</td><td>备注</td></tr><tr><td>X11</td><td>相对较高</td><td>底层基于SSH安全协议。</td><td>多用于网络良好的本地局域网中。</td></tr><tr><td>VNC</td><td>相对较低</td><td>默认通过TCP方式，可借助SSH安全协议实现安全访问。</td><td>应用范围更广，可用在跨城网络、VPN网络等。</td></tr></table>

# 2.2.2 准备环境和软件包

# 环境要求

在Linux系统中，MindStudio Insight安装环境要求如表2-4所示。


表 2-4 MindStudio Insight 安装环境要求


<table><tr><td>类别</td><td>限制要求</td></tr><tr><td>硬件</td><td>·内存：最小4GB，推荐8GB及以上
·磁盘空间：最小6GB</td></tr><tr><td>系统要求</td><td>·glibc版本应大于或等于2.27
·操作系统自带GUI桌面或具有X11或VNC转发功能</td></tr><tr><td>支持的操作系统</td><td>以apt作为包管理软件类型的操作系统: · Ubuntu 18.04-x86_64/aarch64 · Ubuntu 20.04-x86_64/aarch64 · Ubuntu 22.04-x86_64/aarch64 · CentOS 8.2-x86_64/aarch64 · Debian 10.0 · Debian 10.8 以yum/dnf作为包管理软件类型的操作系统: ·EulerOS 2.8-aarch64 ·EulerOS 2.12-aarch64 ·OpenEuler 20.03-x86_64/aarch64 ·OpenEuler 22.03 LTS-x86_64/aarch64 ·OpenEuler 22.03 LTS ·OpenEuler 22.03 LTS SP4 ·HCE 2.0 ·CULinux 3.0 ·Kylin V10 SP3 ·Euler 2.13(ARM) ·HCE 2.0.2503(x86) ·Tlinux 3.1-内核版本5.4 ·BClinux 21.10 U4 ·TencentOS Server 4.4_x86</td></tr></table>

# 下载软件包

软件安装前，请参考表2-5获取所需软件包和对应的数字签名文件。


表2-5 软件包


<table><tr><td>软件包</td><td>说明</td><td>获取链接</td></tr><tr><td>MindStudio-Insight_{{version}}_linux-aarch64.zip</td><td>适用于Linux系统aarch64架构的MindStudio Insight软件包。</td><td rowspan="2">●商用版:获取软件包●社区版:获取软件包</td></tr><tr><td>MindStudio-Insight_{{version}}_linux-x86_64.zip</td><td>适用于Linux系统x86_64架构的MindStudio Insight软件包。</td></tr></table>

# 说明

{version表示软件版本号。

# 软件完整性验证

为了防止软件包在传递过程或存储期间被恶意篡改，下载软件包时需下载对应的数字签名文件用于完整性验证。

请单击PGP数字签名工具包获取工具包，将工具包解压后，请参考文件夹中的《OpenPGP签名验证指南》，对下载的软件包进行PGP数字签名校验。如果校验失败，请不要使用该软件包，访问支持与服务在论坛求助或提交技术工单。

# 2.2.3 安装转发方式及依赖

# 2.2.3.1 依赖列表

在Linux环境下，安装MindStudio Insight前需要安装相关依赖，请参见对应系统的依赖列表进行安装。

# 说明

如果MindStudio Insight导入的是多卡场景的性能数据，则需要安装python的pandas库，执行命令pip install pandas进行安装。

Ubuntu系列操作系统依赖列表请参见表2-6。


表 2-6 Ubuntu 系统依赖列表


<table><tr><td>软件包</td><td>依赖名称</td><td>说明</td></tr><tr><td rowspan="4">MindStudio Insight</td><td>libwebkit2GTK-4.0 -dev</td><td>必选，MindStudio Insight显示运行依赖的库文件。</td></tr><tr><td>xterm</td><td rowspan="2">必选，MindStudio Insight通过X11转发的依赖文件。X11转发与VNC转发方式任选其一。</td></tr><tr><td>x11-apps</td></tr><tr><td>xfce4</td><td>必选，MindStudio Insight通过VNC转发的依赖文件。VNC转发方式与X11转发任选其一。</td></tr><tr><td rowspan="7">Python</td><td>click</td><td rowspan="7">编译安装Python需要的依赖。其中版本要求为：·xlsxwriter&gt;=3.0.6·numpy&lt;=1.26.4</td></tr><tr><td>tabulate</td></tr><tr><td>networkx</td></tr><tr><td>jinja2</td></tr><tr><td>PyYaml</td></tr><tr><td>tqdm</td></tr><tr><td>prettytable</td></tr><tr><td rowspan="6"></td><td>ijson</td><td rowspan="6"></td></tr><tr><td>xlsxwriter</td></tr><tr><td>sqlalchemy</td></tr><tr><td>numpy</td></tr><tr><td>pandas</td></tr><tr><td>psutil</td></tr></table>

CentOS系列操作系统依赖列表请参见表2-7。


表 2-7 CentOS 系统依赖列表


<table><tr><td>软件包</td><td>依赖名称</td><td>说明</td></tr><tr><td rowspan="4">MindStudio Insight</td><td>GTK3-devel webkit2GTK4.1- devel</td><td>必选，MindStudio Insight显示运行依赖的库文件。</td></tr><tr><td>xterm</td><td rowspan="2">必选，MindStudio Insight通过X11转发的依赖文件。X11转发与VNC转发方式任选其一。</td></tr><tr><td>xorg-x11-xauth</td></tr><tr><td>xfce4</td><td>必选，MindStudio Insight通过VNC转发的依赖桌面。VNC转发方式与X11转发任选其一。</td></tr><tr><td rowspan="13">Python</td><td>click</td><td rowspan="13">编译安装Python需要的依赖。其中版本要求为：·xlsxwriter&gt;=3.0.6·numpy&lt;=1.26.4</td></tr><tr><td>tabulate</td></tr><tr><td>networkx</td></tr><tr><td>jinja2</td></tr><tr><td>PyYaml</td></tr><tr><td>tqdm</td></tr><tr><td>prettytable</td></tr><tr><td>ijson</td></tr><tr><td>xlsxwriter</td></tr><tr><td>sqlalchemy</td></tr><tr><td>numpy</td></tr><tr><td>pandas</td></tr><tr><td>psutil</td></tr></table>

EulerOS系列操作系统依赖列表请参见表2-8。


表 2-8 EulerOS 系统依赖列表


<table><tr><td>软件包</td><td>依赖名称</td><td>说明</td></tr><tr><td rowspan="4">MindStudio Insight</td><td>GTK3-devel webkit2GTK3- devel</td><td>必选，MindStudio Insight显示运行依赖的库文件。</td></tr><tr><td>xterm</td><td rowspan="2">必选，MindStudio Insight通过X11转发的依赖文件。
X11转发与VNC转发方式任选其一。</td></tr><tr><td>xorg-x11-xauth</td></tr><tr><td>gnome-desktop</td><td>必选，MindStudio Insight通过VNC转发的依赖桌面。
VNC转发方式与X11转发任选其一。</td></tr><tr><td rowspan="13">Python</td><td>click</td><td rowspan="13">编译安装Python需要的依赖。其中版本要求为：
• xlsxwriter&gt;=3.0.6
• numpy&lt;=1.26.4</td></tr><tr><td>tabulate</td></tr><tr><td>networkx</td></tr><tr><td>jinja2</td></tr><tr><td>PyYaml</td></tr><tr><td>tqdm</td></tr><tr><td>prettytable</td></tr><tr><td>ijson</td></tr><tr><td>xlsxwriter</td></tr><tr><td>sqlalchemy</td></tr><tr><td>numpy</td></tr><tr><td>pandas</td></tr><tr><td>psutil</td></tr></table>

OpenEuler系列操作系统依赖列表请参见表2-9。


表 2-9 OpenEuler 系统依赖列表


<table><tr><td>软件包</td><td>依赖名称</td><td>说明</td></tr><tr><td>MindStudio Insight</td><td>GTK3-devel webkit2GTK3-devel</td><td>必选，MindStudio Insight显示运行依赖的库文件。</td></tr><tr><td rowspan="3"></td><td>xterm</td><td rowspan="2">必选，MindStudio Insight通过X11转发的依赖文件。
X11转发与VNC转发方式任选其一。</td></tr><tr><td>xorg-x11-xauth</td></tr><tr><td>xfce4</td><td>必选，MindStudio Insight通过VNC转发的依赖桌面。
VNC转发方式与X11转发任选其一。</td></tr><tr><td rowspan="13">Python</td><td>click</td><td rowspan="13">编译安装Python需要的依赖。
其中版本要求为：
• xlsxwriter&gt;=3.0.6
• numpy&lt;=1.26.4</td></tr><tr><td>tabulate</td></tr><tr><td>networkx</td></tr><tr><td>jinja2</td></tr><tr><td>PyYaml</td></tr><tr><td>tqdm</td></tr><tr><td>prettytable</td></tr><tr><td>ijson</td></tr><tr><td>xlsxwriter</td></tr><tr><td>sqlalchemy</td></tr><tr><td>numpy</td></tr><tr><td>pandas</td></tr><tr><td>psutil</td></tr></table>

# 2.2.3.2 安装操作

步骤1 执行以下命令，安装Python相关依赖。

pip3 install click 

pip3 install tabulate 

pip3 install networkx 

pip3 install jinja2 

pip3 install PyYaml 

pip3 install tqdm 

pip3 install prettytable 

pip3 install ijson 

pip3 install xlsxwriter 

pip3 install sqlalchemy 

pip3 install numpy 

pip3 install pandas 

pip3 install psutil 

步骤2 安装MindStudio Insight软件包所需的转发方式和依赖，推荐安装X11和VNC转发方式，安装操作请参见8.2 安装转发方式（Linux）章节。

# 须知

8.2 安装转发方式（Linux）章节内容仅供参考，VNC的具体安装步骤请参见VNC官方文档。

----结束

# 2.2.4 安装 MindStudio Insight

在Linux系统上安装MindStudio Insight工具，解压zip格式的软件包即可。

# 前提条件

已完成环境与软件包准备，可参见2.2.2 准备环境和软件包。

如果需要通过X11或VNC方式将GUI界面转发至本地桌面，首先需要安装相关依赖，请参见2.2.3 安装转发方式及依赖章节完成安装。

# 操作步骤

步骤1 使用MindStudio Insight的安装用户上传软件包至待安装环境。

步骤2 在软件包所在目录下，执行以下命令，解压MindStudio Insight软件包。

aarch64架构的软件包

unzip MindStudio-Insight_{version}_linux-aarch64.zip 

x86_64架构的软件包

unzip MindStudio-Insight_{version}_linux-x86_64.zip 

步骤3 执行以下命令，启动MindStudio Insight。

./MindStudio-Insight 

# 说明

● 如果在EulerOS系统上运行MindStudio Insight，单击界面左上方工具栏中的 ， 无法弹出导入选择框，解决方法可参见8.4.3 EulerOS等系统上运行MindStudio Insight工具无法弹出数据导入选择框。

● 在X11转发方式下运行MindStudio Insight时，如果出现输入框信息粘贴不符合预期，造成输入信息错误的情况，具体解决方法可参见8.4.4 通过X11转发方式运行MindStudio Insight工具时，输入框信息粘贴有误。

# ----结束

# 2.2.5 卸载 MindStudio Insight

在Linux系统中，卸载MindStudio Insight工具有2种方式可选。

通过直接删除MindStudio Insight解压后的软件包进行卸载。该操作不会删除日志文件。

使用命令行方式进行卸载。

a. 执行以下命令，卸载MindStudio Insight。

rm -rf MindStudio-Insight resources 

b. 执行以下命令，删除MindStudio Insight的日志文件。

rm -rf ${HOME}/.mindstudio_insight 

# 2.3 安装和卸载操作（macOS）

# 2.3.1 准备环境和软件包

# 本地环境要求

macOS系统需为macOS Ventura 13.5及以上版本。

# 下载软件包

软件安装前，请参考表2-10获取所需软件包和对应的数字签名文件。


表 2-10 软件包


<table><tr><td>软件包</td><td>说明</td><td>获取链接</td></tr><tr><td>MindStudio-Insight_{{version}}_darwi-n-{arch}.dmg</td><td>适用于macOS系统的MindStudioInsight软件包，含有GUI的集成开发环境。</td><td>•商用版：获取软件包
•社区版：获取软件包</td></tr></table>

# 说明

{version表示软件版本号，{arch表示CPU架构。

# 软件完整性验证

为了防止软件包在传递过程或存储期间被恶意篡改，下载软件包时需下载对应的数字签名文件用于完整性验证。

请单击PGP数字签名工具包获取工具包，将工具包解压后，请参考文件夹中的《OpenPGP签名验证指南》，对下载的软件包进行PGP数字签名校验。如果校验失败，请不要使用该软件包，访问支持与服务在论坛求助或提交技术工单。

# 2.3.2 安装 MindStudio Insight

# 前提条件

请参见2.3.1 准备环境和软件包章节，完成安装MindStudio Insight工具前的准备工作。

# 操作步骤

步骤1 鼠标双击“MindStudio-Insight_{version}_darwin-{arch}.dmg”软件包，进入许可协议界面，单击“Agree”，如图2-10所示。


图 2-10 许可协议


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/d2a5b44bbfd866c6c205d835d6bca52036599f4192d64c819b47444afb241952.jpg)


步骤2 弹出Installer弹窗，在Installer弹窗中，将MindStudio Insight应用拖拽至Applications文件夹中，如图2-11所示。


图 2-11 拖拽应用至文件夹


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/2ed1c7aed5afcc8a82b28ef56cb3d4526f5f2ed1df99fef70c6208cf9b495c5e.jpg)


步骤3 在应用程序中双击MindStudio Insight应用，即可打开MindStudio Insight工具。

# ----结束

# 说明

当前适用于macOS系统的MindStudio Insight应用程序，在部分macOS系统上运行时，可能会出现无法打开“MindStudio Insight”的情况。

当运行MindStudio Insight时，如果出现无法打开“MindStudio Insight”的弹窗，需单击弹窗信息中的“好”，然后在“系统设置 > 隐私与安全性 > 安全性”中选择“App Store和被认可的开发者”，在出现的“已阻止使用MindStudio Insight”信息中单击“仍要打开”，授予执行权限，再次双击MindStudio Insight应用，出现无法打开“MindStudio Insight”弹窗时，单击弹窗中的“打开”，即可正常打开MindStudio Insight工具。

● 如果需要在macOS系统上同时打开多个MindStudio Insight工具，可在终端窗口中，执行open -n /Applications/MindStudio Insight.app命令。但是不建议在两个MindStudioInsight窗口中同时打开同一份数据，以免出现数据解析问题。

# 2.3.3 卸载 MindStudio Insight

步骤1 进入应用程序中，找到MindStudio Insight。

步骤2 鼠标右键单击MindStudio Insight应用，弹出菜单栏。

步骤3 单击“移到废纸篓”即可卸载。

----结束

# 2.4 升级 MindStudio Insight

如果需要升级MindStudio Insight，需先卸载已安装的MindStudio Insight，再获取最新MindStudio Insight软件包重新安装。

请根据实际场景，分别参见2.1 安装和卸载操作（Windows）、2.2 安装和卸载操作（Linux）、2.3 安装和卸载操作（macOS）章节内容完成卸载操作，并重新安装最新MindStudio Insight软件包。

# 3 基础操作

基础设置

导入数据

管理数据

管理日志

常用快捷键

# 3.1 基础设置

# 切换主题

步骤1 打开MindStudio Insight工具。

步骤2 单击界面右上方 ，切换主题，可切换为亮色或者暗色主题。

----结束

# 切换语言

步骤1 打开MindStudio Insight工具。

步骤2 单击界面右上方 $w h d$ ，进行MindStudio Insight工具中英文切换。

----结束

# 3.2 导入数据

MindStudio Insight工具可导入性能数据，以图形化形式呈现，便于开发人员分析。本章节指导用户使用导入数据功能。

# 操作步骤

导入数据操作的三种方式如下：

# 方式一：选择性能数据路径

打开MindStudio Insight工具，单击界面左上方“导入数据”，在弹窗中选择性能数据文件或目录，然后单击“确认”进行导入，如图3-1所示。


图3-1 选择路径


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/36fee76adf8a207df7685637751ed5a921930d1d593efffa39b4358035ebc6f2.jpg)


# 方式二：输入性能数据路径

打开MindStudio Insight工具，单击界面左上方“导入数据”，在弹窗中的输入框直接输入需要导入的性能数据所在正确路径，然后按“回车键”，则在下方自动定位至该目录，单击“确认”进行导入，如图3-2所示。


图3-2 输入正确路径


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/805e1b8d4a31d0c88b0715726625713b7e9143aca65d16ec50322c653fea94ca.jpg)


# 方式三：拖拽性能文件至MindStudio Insight工具界面

打开MindStudio Insight工具，支持将性能文件拖拽至MindStudio Insight工具界面打开，展示对应页面。可支持拖拽单文件和单文件夹性能数据。

# 说明

● 仅支持本地磁盘数据导入，如果是网络磁盘，则需要先将网络磁盘映射至本地，再导入对应目录，网络磁盘映射至本地的操作请参见8.4.5 MindStudio Insight工具拖入网络磁盘目录无法加载数据。

如果Windows系统上的MindStudio Insight工具在拖入文件时，显示禁用，请参见8.4.7MindStudio Insight工具拖入文件显示禁用解决。

# 3.3 管理数据

MindStudio Insight工具导入数据后，在数据管理器下会将当次导入的数据生成一个工程，该工程下显示当次导入数据的详情。MindStudio Insight具有数据记忆、数据管理以及数据对比功能。

# 数据记忆

当再次打开同一个版本的MindStudio Insight工具时，在界面左侧导航栏会自动记忆并展示上一次关闭工具时的数据。

# 数据管理

创建数据工程

在MindStudio Insight界面，单击界面左上方“导入数据”，成功导入后，自动创建一个数据工程，如图3-3所示。


图 3-3 创建数据工程


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/f35855880ad3351a2648fb1ab1e44d66faae433153fbe2d2bde75cf416201485.jpg)


修改数据工程名称

在MindStudio Insight界面左侧导航栏，在工程名称上双击鼠标左键，输入新的名称，修改工程名。

删除数据

说明

删除工程操作不会影响原始的性能文件。

删除多个工程：

i. 在MindStudio Insight界面左侧导航栏，单击“导入数据”左侧的 ，选择需要删除的工程，如图3-4所示。


图 3-4 设置工程勾选


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/ed53a534b4f23610b21cc8b757c771a1a18184bd549dc83e52242a33b79564ce.jpg)


ii. 默认勾选全部工程，也可单独勾选需要删除的工程，单击“全部”按钮所在行的 ，删除所选工程，如图3-5所示。


图 3-5 删除多个工程


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/8be4d2a051212f631cda890905a7abe63e507a2fe1bad1a8284373f061dda3d2.jpg)


删除单个工程：在MindStudio Insight界面左侧导航栏，单击工程行后面的，删除该工程，如图3-6所示。


图 3-6 删除单个工程


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/c5d11d9e9782ec0045a69d9925846f99a2b6bc38a55c2de337d21c8aef914c3d.jpg)


# 其它操作

工程内导入数据：单击工程行后面的 $^ +$ ，在该工程下导入数据，如图3-7所示。


图3-7 工程内导入数据


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/05499f00b0dab01962d0c085cbd477caaf977b15a50391931089c73b1ade8a41.jpg)


工程内删除数据：单击工程内所选数据行后面的 ，删除该工程内所选数据。

# 数据对比

MindStudio Insight工具支持单卡数据间的性能对比，也支持集群数据间的性能对比，需要设置基线数据和对比数据进行对比。

# 设置单卡对比

a. 选择需要设置为基线的卡目录，单击鼠标右键，选择“设置为基线数据”，设置当前选中卡为基线卡，如图3-8所示。

设置完成后，当前卡目录会标识颜色。在当前卡再次单击鼠标右键，选择“取消设置基线数据”，可直接取消当前卡的基线状态；也可重新选择任意一张卡目录，单击鼠标右键，选择“设置为基线数据”，则会重新将当前所选卡作为基线数据。


图 3-8 设置基线数据


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/de59e4d0dfba1b219c70d6b189524852b71a500fde9bd749c51eda9540ba748d.jpg)


b. 选择需要作为对比卡的卡目录，单击鼠标右键，选择“设置为对比数据”，设置所选卡为对比卡，如图3-9所示。

设置完成后，对比卡目录会标识颜色，且区别于基线数据目录的颜色。对比数据只能选择当前打开的工程下的卡目录作为对比卡。在当前对比卡上再次单击鼠标右键，选择“取消设置对比数据”，可直接取消当前对比卡的对比状态；也可重新选择任意一张卡目录，单击鼠标右键，选择“设置为对比数据”，则会重新设置对比数据。


图3-9 设置对比数据


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/b8aad6a163e87e1d0839e3bbf1f7e01a97df3b3ae78207bf2d490c8f4faefc0f.jpg)


c. 基线数据和对比数据设置成功后，可前往时间线（Timeline）、内存（Memory）以及算子（Operator）界面查看数据对比详情。

# 设置集群对比

a. 选定一个对比数据，当前选中显示的数据即为对比数据。

b. 选择基线数据。

选择需要设置为基线的集群目录，单击鼠标右键，选择“设置为基线数据”，如图3-10所示。

设置完成后，当前集群目录会标识颜色。在当前集群目录再次单击鼠标右键，选择“取消设置基线数据”，可直接取消当前集群目录的基线状态；也可重新选择任意一个集群目录，单击鼠标右键，选择“设置为基线数据”，则会重新将当前所选集群目录作为基线数据。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/d2fd3cef96bc0f5c7c84c40e8a440f13c9d831c74dc2234cc46d29530baf95ea.jpg)


# 说明

当在某一个工程中导入的集群数据目录为“cluster_analysis_output”时，也可选择该工程下的此数据设置为基线数据。


图 3-10 设置基线数据


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/275af4f65e57d6b6e606ab32e7800656a9d51a6c2de1090f08e3d99ef5eb3330.jpg)


c. 基线数据设置成功后，可前往概览（Summary）和通信（Communication）界面查看数据对比详情。

# 3.4 管理日志

# 日志存放路径

MindStudio Insight工具的日志文件存放路径参见表3-1。


表 3-1 日志文件存放路径


<table><tr><td>系统</td><td>日志存放路径</td></tr><tr><td>Windows</td><td>·安装路径为C盘，日志路径为：C:\Users\{用户名\}\.mindstudio_insight
·安装路径为其他目录，日志路径为：{安装目录}\.mindstudio_insight</td></tr><tr><td>Linux</td><td>$HOME/.mindstudio_insight</td></tr><tr><td>macOS</td><td>/Users/{用户名}/.mindstudio_insight</td></tr></table>

# 日志文件说明

MindStudio Insight工具的日志文件说明请参见表3-2。


表 3-2 日志文件说明


<table><tr><td>名称</td><td>说明</td></tr><tr><td>profiler_server_{端口号}\{编号}.log</td><td>程序运行日志，主要供开发者定位问题使用。</td></tr></table>

# 日志清理机制

MindStudio Insight工具的日志清理方式包括自动清理和手动清理。

# 自动清理

MindStudio Insight工具的日志文件具有自动清理机制。由于MindStudio Insight工具每个端口仅支持存放10个日志文件，所以当日志文件数量超过10个后，后续生成的日志文件会自动从第一个日志文件开始覆盖，依次循环，且单个日志文件大小不超过10MB。

# 手动清理

进入日志文件存放路径，手动删除对应日志文件，日志存放路径参见日志存放路径。

# 3.5 常用快捷键

本节介绍MindStudio Insight工具的常用快捷键。


表3-3 常用快捷键


<table><tr><td>快捷键</td><td>说明</td></tr><tr><td>W</td><td>放大时间线（Timeline）界面的图形化窗格。</td></tr><tr><td>S</td><td>缩小时间线（Timeline）界面的图形化窗格。</td></tr><tr><td>Ctrl + 鼠标滚轮</td><td>缩小、放大时间线（Timeline）界面的图形化窗格。
如果是macOS系统，需要使用Command + 鼠标滚轮。</td></tr><tr><td>Alt + 鼠标左键</td><td>放大时间线（Timeline）界面框选的区域。
如果是macOS系统，需要使用Option + 鼠标左键。</td></tr><tr><td>Shift + Z</td><td>将时间线（Timeline）界面框选区域放大至当前屏幕。</td></tr><tr><td>Backspace</td><td>撤销一次时间线（Timeline）界面图形化窗格的缩放。</td></tr><tr><td>A/左方向键</td><td>左移时间线（Timeline）界面的图形化窗格。</td></tr><tr><td>D/右方向键</td><td>右移时间线（Timeline）界面的图形化窗格。</td></tr><tr><td>Ctrl + 鼠标左键</td><td>拖动可左右移动时间线（Timeline）界面的图形化窗格。
如果是macOS系统，需要使用Command + 鼠标左键。</td></tr><tr><td>上方向键</td><td>上移时间线（Timeline）界面的图形化窗格。</td></tr><tr><td>下方向键</td><td>下移时间线（Timeline）界面的图形化窗格。</td></tr><tr><td>Ctrl + 0</td><td>重置时间线（Timeline）界面的图形化窗格。
如果是macOS系统，需要使用Command + 0。</td></tr><tr><td>M</td><td>框选时间线（Timeline）界面所选的单个算子区域，再次按下M键，可取消框选。</td></tr><tr><td>L</td><td>在时间线（Timeline）界面，选中算子后，将选中算子与基准算子的开始时间（左边界）对齐。</td></tr><tr><td>R</td><td>在时间线（Timeline）界面，选中算子后，将选中算子与基准算子的结束时间（右边界）对齐。</td></tr><tr><td>Q</td><td>收起或展开时间线（Timeline）界面底部的面板。</td></tr><tr><td>K</td><td>在时间线（Timeline）界面，使用K键可快速设置区域标记和单点标记。</td></tr><tr><td>Shift + 鼠标滚轮/
Ctrl + 鼠标拖动</td><td>在“流水并行图”和“通信算子缩略图”中，可左右移动图表。</td></tr><tr><td>Ctrl + 鼠标滚轮</td><td>在“流水并行图”和“通信算子缩略图”中，可放大或缩小图表。</td></tr><tr><td>Ctrl + F</td><td>调出源码（Source）界面源文件代码区域的搜索框，进行搜索。
如果是macOS系统，需要使用Command + F。</td></tr></table>

# 4 系统调优

导入性能数据

时间线（Timeline）

内存（Memory）

算子（Operator）

概览（Summary）

通信（Communication）

强化学习（RL）

# 4.1 导入性能数据

# 概述

MindStudio Insight支持导入性能数据文件，并以图形化形式呈现相关内容。性能数据文件的采集方式请分别参见《性能调优工具指南》中的“PyTorch训练场景性能分析快速入门” “TensorFlow训练场景性能分析快速入门”和“msprof模型调优工具 >性能数据采集和自动解析 > msprof采集通用命令”章节内容，以及《MindSpore教程》中的“调试调优 > Ascend性能调优”章节内容。

性能数据分为单卡场景和集群场景，具体请参见表4-1，数据导入操作请参见3.2 导入数据章节进行导入。


表 4-1 性能数据场景说明


<table><tr><td>场景</td><td>说明</td></tr><tr><td>单卡场景</td><td>可在MindStudio Insight工具中导入单卡进行分析。
当导入单卡场景数据时，MindStudio Insight工具支持显示时间线（Timeline）、内存（Memory）和算子（Operator）界面，具体内容请参见单卡场景。</td></tr><tr><td>集群场景</td><td>集群场景根据卡数量可分为小集群场景和大集群场景，导入不同场景的数据，界面展示也会有所变化，具体请参见集群场景。</td></tr><tr><td></td><td>集群精简数据，将集群数据简化，只显示通信大算子数据和部分计算类算子。</td></tr></table>

# 说明

当导入的text场景的性能数据中同时存在db文件，MindStudio Insight工具会优先解析db文件。如果您只需要可视化呈现text场景数据，则需要在性能数据原文件夹中查找db文件并删除，再重新导入，即可呈现text场景数据。text场景和db场景的性能数据文件详情请参见单卡场景。

# 单卡场景

在单卡场景下，性能数据可分为三大类型，如下所示：

PyTorch训练/推理数据：支持导入以“ascend_pt”结尾的性能数据目录，性能数据文件详情请分别参见表4-2和表4-3。


表 4-2 PyTorch 训练/推理性能数据文件（text）


<table><tr><td>文件名</td><td>说明</td><td>展示界面</td></tr><tr><td>trace_view.json</td><td>包括应用层数据、CANN层数据和底层NPU数据。</td><td>时间线（Timeline）</td></tr><tr><td>msprof_*.json</td><td>Timeline数据总表。如果存在变频数据（AI Core Freq）信息，会展示AI Core Freq层级。</td><td>时间线（Timeline）</td></tr><tr><td>operator_details.csv</td><td>统计PyTorch算子在Host侧（下发）和Device侧（执行）的耗时。</td><td>时间线（Timeline）</td></tr><tr><td>memory_record.csv</td><td>进程级内存申请情况信息。</td><td>内存（Memory）</td></tr><tr><td>operator_memory.csv</td><td>算子内存申请情况信息。</td><td>内存（Memory）</td></tr><tr><td>kernel_details.csv</td><td>NPU上执行的所有算子的信息。</td><td>算子（Operator）</td></tr><tr><td>step_trace_time.csv</td><td>迭代中计算和通信的时间统计。</td><td>概览（Summary）</td></tr><tr><td>communication.json</td><td>通信算子通信耗时、带宽等详细信息文件。</td><td>通信（Communication）</td></tr><tr><td>communication_matrix.json</td><td>通信小算子基本信息文件。</td><td>通信（Communication）</td></tr><tr><td colspan="3">注：“*”表示{timestamp}时间戳。</td></tr></table>


表 4-3 PyTorch 训练/推理性能数据文件（db）


<table><tr><td>文件名</td><td>说明</td><td>展示界面</td></tr><tr><td>ascend_pytorch_pr ofiler{name_id}.db</td><td>Ascend PyTorch Profiler接口采集的性能数据文件。</td><td rowspan="2">时间线（Timeline）内存（Memory）算子（Operator）概览（Summary）通信（Communication）</td></tr><tr><td>analysis.db</td><td>多卡或集群等存在通信的场景下，采集到的数据文件。</td></tr></table>

# 说明

表4-2中memory_record.csv和operator_memory.csv两个文件必须同时存在且保证在同一目录，导入成功后内存（Memory）界面才能正常展示。

● 支持导入算子打点数据文件，获取文件方式请参见《性能调优工具指南》中的“Ascend PyTorch调优工具”章节“msprof_tx”相关内容，导入成功后会在时间线（Timeline）界面展示打点数据。

● 导入单卡时，不展示概览（Summary）和通信（Communication）界面。

MindSpore训练/推理数据：支持导入MindSpore框架性能数据，获取方式请参见《MindSpore教程》中的“调试调优 $>$ Ascend性能调优”章节。

MindStudio Insight工具支持导入以“ascend_ms”结尾的性能数据目录，性能数据文件详情请分别参见表4-4和表4-5。


表 4-4 MindSpore 训练/推理性能数据文件（text）


<table><tr><td>文件名</td><td>说明</td><td>展示界面</td></tr><tr><td>msprof_*.json</td><td>Timeline数据总表。如果存在变频数据（Al Core Freq）信息，会展示Al Core Freq层级。</td><td>时间线（Timeline）</td></tr><tr><td>trace_view.json</td><td>包括应用层数据、CANN层数据和底层NPU数据。</td><td>时间线（Timeline）</td></tr><tr><td>memory_record.csv</td><td>进程级内存申请情况信息。</td><td>内存（Memory）</td></tr><tr><td>operator_memory.csv</td><td>算子内存申请情况信息。</td><td>内存（Memory）</td></tr><tr><td>static_op_mem.csv</td><td>静态图场景内存申请情况信息。</td><td>内存（Memory）</td></tr><tr><td>kernel_details.csv</td><td>NPU上执行的所有算子的信息。</td><td>算子（Operator）</td></tr><tr><td>step_trace_time.csv</td><td>迭代中计算和通信的时间统计。</td><td>概览（Summary）</td></tr><tr><td>communication.json</td><td>通信算子通信耗时、带宽等详细信息文件。</td><td>通信(Communication)</td></tr><tr><td>communication_matrix.json</td><td>通信小算子基本信息文件。</td><td>通信(Communication)</td></tr><tr><td colspan="3">注:“*”表示{timestamp}时间戳。</td></tr></table>


表 4-5 MindSpore 训练/推理性能数据文件（db）


<table><tr><td>文件名</td><td>说明</td><td>展示界面</td></tr><tr><td>ascend_mindspore_pr ofiler{nameid}.db</td><td>Ascend MindSpore Profiler接口采集的性能数据文件。</td><td rowspan="2">时间线（Timeline）内存（Memory）算子（Operator）概览（Summary）通信（Communication）</td></tr><tr><td>communication_analyzed.db</td><td>多卡或集群等存在通信的场景下，采集到的数据文件。</td></tr></table>

# 说明

● 表4-4中memory_record.csv和operator_memory.csv两个文件必须同时存在且保证在同一目录，导入成功后内存（Memory）界面才能正常展示。当static_op_mem.csv存在时，内存（Memory）界面会展示静态图模式。

● 导入单卡时，不展示概览（Summary）和通信（Communication）界面。

● 当在GRAPH模式下，编译优化等级参数jit_level设置为O2，且调用step接口方式采集的性能数据，在导入MindStudio Insight工具时，不支持展示通信（Communication）界面。

离线推理数据：支持导入mindstudio_profiler_output目录下性能数据，性能数据文件详情请分别参见表4-6和表4-7。


表4-6 离线推理性能数据文件（text）


<table><tr><td>文件名</td><td>说明</td><td>展示界面</td></tr><tr><td>msprof_*.json</td><td>Timeline数据总表。</td><td>时间线（Timeline）</td></tr><tr><td>fusion_op_*.csv</td><td>模型中算子融合前后信息。单算子场景下无此性能数据文件。</td><td>时间线（Timeline）</td></tr><tr><td>api_statistic_*.csv</td><td>用于统计CANN层的API执行耗时信息。</td><td>时间线（Timeline）</td></tr><tr><td>memory_record_*.csv</td><td>进程级内存申请情况信息。</td><td>内存(Memory)</td></tr><tr><td>operator_memory_*.csv</td><td>算子内存申请情况信息。</td><td>内存(Memory)</td></tr><tr><td>op.summary_*.csv</td><td>AI Core和AI CPU算子数据。</td><td>算子(Operator)</td></tr><tr><td>op_statistic_*csv</td><td>AI Core和AI CPU算子调用次数及耗时统计。</td><td>算子(Operator)</td></tr><tr><td>prof_rule_0_*.json</td><td>调优建议。</td><td>时间线(Timeline)概览(Summary)通信(Communication)</td></tr><tr><td>step_trace_*csv</td><td>迭代轨迹数据。单算子场景下无此性能数据文件。</td><td>-</td></tr><tr><td>step_trace_*.json</td><td>迭代轨迹数据,每轮迭代的耗时。单算子场景下无此性能数据文件。</td><td>-</td></tr><tr><td>task_time_*csv</td><td>Task Scheduler任务调度信息。</td><td>-</td></tr><tr><td colspan="3">注:“*”表示{timestamp}时间戳。</td></tr></table>


表 4-7 离线推理性能数据文件（db）


<table><tr><td>文件名</td><td>说明</td><td>展示界面</td></tr><tr><td>msprof_*.db</td><td>统一db文件。当前该格式数据与text参数解析的数据信息量存在差异。</td><td>时间线（Timeline）
内存（Memory）
算子（Operator）
概览（Summary）
通信
（Communication）</td></tr><tr><td colspan="3">注：“*”表示{timestamp}时间戳。</td></tr></table>

# 说明

● 表4-6中memory_record.csv和operator_memory.csv两个文件必须同时存在且保证在同一目录，导入成功后内存（Memory）界面才能正常展示。

● 对于未完成性能数据解析的PROF_XXX目录，需要先使用msprof命令行的export功能解析并导出性能数据文件后才可以使用MindStudio Insight工具展示，数据使用msprof命令行解析并导出的操作请参见《性能调优工具指南》中的“msprof模型调优工具 > 离线解析”章节。

● 导入单卡时，不展示概览（Summary）和通信（Communication）界面。

npumonitor数据：支持导入npumonitor采集的性能数据，采集方式请参见npumonitor特性，性能数据文件详情请参见表4-8。


表4-8 性能数据文件详情表


<table><tr><td>文件名</td><td>说明</td><td>展示界面</td></tr><tr><td>msmonitor_ {pid} _ {time stamp} _ {rank_id}.db</td><td>npumonitor采集的db文件。</td><td>时间线（Timeline）</td></tr></table>

# 说明

● pid为进程号。

● timestamp为时间戳。

● 如果是集群数据，rank_id为非负整数，从0排序；如果是单卡数据，rank_id为-1。

● MindStudio Insight支持导入npumonitor采集的单个db文件；也支持导入db文件的上一级目录，目录中多个db文件平铺展示。在数据量大的情况下，建议导入单个db文件，如果全部导入，数据解析耗时较长，可能会引发OOM（Out of Memory，内存溢出）问题。

# 集群场景

集群场景也称多卡场景，由多个单卡组成的集群数据，集群数据可分为小集群和大集群，MindStudio Insight工具导入不同场景的数据时，也有所不同，如表4-9所示。

如果在大集群场景下，直接导入性能调优工具采集的全部原始数据，解析耗时较长，不建议直接导入。

# 说明

● 当导入集群数据时，如果性能数据文件中包含cluster_analysis_output目录文件，导入成功后，概览（Summary）和通信（Communication）界面会根据cluster_analysis_output目录文件内容呈现相关信息；如果性能数据文件中不包含cluster_analysis_output目录文件，在MindStudio Insight工具中导入数据时，会生成对应的cluster_analysis_output目录文件。

● 使用Ascend PyTorch Profiler接口或者MindSpore Profiler接口采集到的性能数据，需要使用MindStudio Insight工具显示，则建议配置repeat = 1，不推荐配置为0。如果repeat > 1，则需要将采集的性能数据文件夹分为repeat等份，按照文件夹名称中的时间戳先后将文件分别放到不同文件夹下重新导入，才可正常展示。

● 在Linux环境下使用MindStudio Insight工具分析集群场景数据时，如果已经安装了msprof-analyze工具，请检查版本并将其升级至最新版本，最新版本的msprof-analyze工具安装可参考msprof-analyze。


表 4-9 集群场景说明


<table><tr><td>场景</td><td>卡数量</td><td>导入数据</td><td>界面展示</td></tr><tr><td rowspan="5">小集群</td><td rowspan="5">不超过32卡。</td><td rowspan="5">可导入采集到的全部原始数据。</td><td>时间线（Timeline）</td></tr><tr><td>内存（Memory）</td></tr><tr><td>算子（Operator）</td></tr><tr><td>概览（Summary）</td></tr><tr><td>通信（Communicatio-n）</td></tr><tr><td rowspan="3">大集群</td><td rowspan="3">超过32卡，千卡，万卡等。</td><td rowspan="3">采用mstt工具集中的msprof-analyze的集群分析能力预处理的原始性能数据，可得到基于通信域的通信分析和迭代耗时分析，导入预处理后得到的数据。msprof-analyze工具的下载与使用请参见msprof-analyze。1.将所有以“ascend.pt”或“ascend.ms”结尾的目录汇总至同一文件夹。2.使用msprof-analyze工具生成通信相关文件“cluster_analysis_output”目录，“cluster_analysis_output”目录中数据文件请参见表4-10。3.将生成的“cluster_analysis_output”目录文件拷贝至本地，并导入MindStudio Insight工具。4.可先前往通信（Communication）界面分析后，导入对应小集群数据或者单卡数据，再次仔细分析。</td><td>概览（Summary）</td></tr><tr><td>通信（Communicatio-n）</td></tr><tr><td></td></tr></table>


表 4-10 cluster_analysis_output 目录文件


<table><tr><td>文件名</td><td>说明</td></tr><tr><td>cluster_step_trace_time.e.csv</td><td>数据解析模式为communication_matrix、communication_time或all时均生成。</td></tr><tr><td>cluster_communication_matrix.json</td><td>数据解析模式为communication_matrix或all时生成。</td></tr><tr><td>cluster_communication.json</td><td>数据解析模式为communication_time或all时生成，主要为通信耗时数据。</td></tr><tr><td>cluster_analysis.db</td><td>解析analysis.db或
ascend_pytorch_profiler{'rank_id}.db生成的文件。</td></tr></table>

集群精简数据，是基于ascend_pytorch_profiler_{rank id}.db文件，提取通信类大算子数据，计算类关键函数和框架关键函数，将数据精简，节约内存，快速进行全局分析，导入集群精简数据后，MindStudio Insight工具只显示时间线（Timeline）界面。

集群数据精简可使用mstt工具集中的msprof-analyze工具，通过设置-mfilter_db生成集群精简数据，msprof-analyze工具安装可参考安装msprof-analyze，设置-m filter_db可参考《recipe结果和cluster_analysis.db交付件表结构说明》中的“filter_db”内容，集群数据精简功能只支持统一db场景。

# 4.2 时间线（Timeline）

# 4.2.1 界面介绍

# 功能说明

在昇腾异构计算架构中，MindStudio Insight工具以时间线（Timeline）的呈现方式将训练/推理过程中的host、device上的运行详细情况平铺在时间轴上，直观呈现host侧的API耗时情况以及device侧的task耗时，并将host与device进行关联呈现，帮助用户快速识别host瓶颈或device瓶颈，同时提供各种筛选分类、专家建议等功能，支撑用户进行深度调优。

# 界面展示

时间线（Timeline）界面包含工具栏（区域一）、时间线树状图（区域二）、图形化窗格（区域三）和数据窗格（区域四）四个部分组成，如图4-1所示。


图 4-1 时间线（Timeline）界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/ef7178f3c05def28d0360624ad02d6aef4ca5e0d62e79d3f41cc3369f4d239a4.jpg)


区域一：工具栏，包含常用快捷按钮，从左至右依次为标记列表、过滤（支持按卡或按泳道过滤展示）、搜索、连线事件、重置缩放（页面复原）和时间轴缩小放大按钮。

区域二：时间线树状图，text场景和db场景显示会有所不同，具体泳道信息请参见表4-11。

text场景：显示集群场景下各设备的分层信息，以Rank维度显示分层信息，一层级为Rank ID，二层级为进程或专项分层，三层级为线程等名称。二层级包括Python层数据（包含PyTorch和打点数据的耗时信息）、CANN层数据（包含AscendCL、GE和Runtime组件的耗时数据）、底层NPU数据（包含Ascend Hardware下各个Stream任务流的耗时数据和迭代轨迹数据、Communication和Overlap Analysis通信数据、Memory内存数据以及其他昇腾AI处理器系统数据）和AI Core Freq等层级，层级内容展示随导入的数据而变化。

db场景：显示各机器下的信息，一层级为机器名称，二层级为Host和RankID。Host层级是按照进程与线程级维度展示PyTorch和CANN的数据；RankID层级包括底层NPU数据（包含Ascend Hardware下各个Stream任务流的耗时数据和迭代轨迹数据、Communication和Overlap Analysis通信数据、Memory内存数据以及其他昇腾AI处理器系统数据）和AI Core Freq等层级，且卡下属层级内容的展示随导入的数据而变化。

区域三：图形化窗格，展示的数据是迭代内的数据，图形化窗格对应时间线树状图，逐行对时间线进行图形化展现，包括上层应用算子、各组件及接口的执行序列和执行时长。

区域四：数据窗格，统计信息或算子详情信息展示区，选中详情（Slice Detail）为选中单个算子的详细信息、选中列表（Slice List）为某一泳道选中区域的算子列表信息、系统视图（System View）为某类算子的汇总信息、以及查找（Find）为搜索的算子信息。


表 4-11 泳道信息


<table><tr><td>一层级泳 道名称</td><td>二层级泳道名称</td><td>说明</td></tr><tr><td>Process</td><td>Thread</td><td>仅db格式文件支持展示此泳道, Thread层级泳道下 还存在pytorch、CANN和MSTX, 分别展示的是 PyTorch框架下上层应用线程运行的耗时信息、CANN框架下线程运行的耗时信息和打点信息。</td></tr><tr><td>Python</td><td>Thread</td><td>应用层数据, 每个子泳道Thread包含上层应用线程 运行的耗时信息, 需要使用PyTorch Profiler或 msproftx采集。仅支持在text格式文件下展示该泳 道。</td></tr><tr><td>CANN</td><td>Thread</td><td>CANN层数据, 每个子泳道Thread主要包含 AscendCL、GE、Runtime组件以及Node(算子) 的耗时数据。 如果是db格式文件, 二层级泳道名称可能包含 acl, model, node, hcl, runtime, op, queue, trace, mstx等。</td></tr><tr><td>MindSpore</td><td>Thread</td><td>在MindSpore场景下, 展示当前Thread下运行的阶 段耗时。</td></tr><tr><td>Scope Layer</td><td>Thread</td><td>在MindSpore场景下,展示当前Thread网络层级的执行耗时。</td></tr><tr><td>Python GC</td><td>Python GC</td><td>在PyTorch场景下,采集性能数据时开启了GC检测功能后,如果在采集的时间周期内发生了GC事件,则采集到的数据中会记录GC事件并显示在Python GC泳道中。</td></tr><tr><td rowspan="4">Ascend Hardware</td><td>Stream</td><td>底层NPU数据,任务调度信息数据,记录AI任务运行时,各个Task在不同加速器下的执行耗时和AI Core的性能指标。</td></tr><tr><td>Stream</td><td rowspan="2">Stream的MSTX device侧打点数据。</td></tr><tr><td>MSTX domain</td></tr><tr><td>Step Trace</td><td>迭代轨迹数据。仅step_trace_*.json文件存在时展示该泳道。</td></tr><tr><td rowspan="2">HBM</td><td>HBM/Read</td><td>HBM内存读取速率,单位为MB/s。</td></tr><tr><td>HBM/Write</td><td>HBM内存写入速率,单位为MB/s。</td></tr><tr><td rowspan="2">DDR</td><td>Read</td><td>DDR内存读取速率。</td></tr><tr><td>Write</td><td>DDR内存写入速率。</td></tr><tr><td rowspan="4">LLC</td><td>LLC/Read/Hit Rate</td><td rowspan="2">三级缓存读写速率数据,三级缓存读取、写入时的吞吐量。</td></tr><tr><td>LLC/Write/Hit Rate</td></tr><tr><td>LLC/Read/Throughput</td><td rowspan="2">三级缓存读取、写入时的命中率。</td></tr><tr><td>LLC/Write/Throughput</td></tr><tr><td rowspan="6">NPU_MEM</td><td>APP/DDR</td><td>进程级DDR内存占用,单位KB。</td></tr><tr><td>APP/HBM</td><td>进程级HBM内存占用,单位KB。</td></tr><tr><td>APP/MEMORY</td><td>进程级DDR和HBM内存占用和,单位KB。</td></tr><tr><td>Device/DDR</td><td>设备级DDR内存占用,单位KB。</td></tr><tr><td>Device/HBM</td><td>设备级HBM内存占用,单位KB。</td></tr><tr><td>Device/MEMORY</td><td>设备级DDR和HBM内存占用和,单位KB。</td></tr><tr><td>Communication</td><td>Group/Communication</td><td>通信域下的通信算子。一个卡(Rank)可以存在于不同的通信域中,一个Group标识当前卡在当前通信域的行为。</td></tr><tr><td>一级级泳道名称</td><td>二层级泳道名称</td><td>说明</td></tr><tr><td></td><td>Plane</td><td>集合通信算子信息。网络平面ID,对多个收发通信链路的并行调度执行,每个Plane就是一个并发通信维度。</td></tr><tr><td rowspan="2">Stars SocInfo</td><td>L2 Buffer BwLevel</td><td>SoC传输带宽信息,L2 Buffer带宽等级信息。</td></tr><tr><td>Mata Bw Level</td><td>Mata带宽等级信息。</td></tr><tr><td rowspan="4">acc_pmu</td><td>Accelerator{accld}/ readBwLevel</td><td>DVPP和DSA加速器读带宽。</td></tr><tr><td>Accelerator{accld}/ readOstLevel</td><td>DVPP和DSA加速器读并发。</td></tr><tr><td>Accelerator{accld}/ writeBwLevel</td><td>DVPP和DSA加速器写带宽。</td></tr><tr><td>Accelerator{accld}/ writeOstLevel</td><td>DVPP和DSA加速器写并发。</td></tr><tr><td rowspan="4">OverlapAnalysis</td><td>Communication</td><td>通信时间。</td></tr><tr><td>Communicatio n(Not Overlapped)</td><td>未被计算掩盖的通信时间。</td></tr><tr><td>Computing</td><td>计算时间。</td></tr><tr><td>Free</td><td>Device侧既不在计算也不在通信的时间。按Step维 度拆解时,会被进一步区分为Preparing和Free,其 中Preparing在做数据预处理,加载拷贝等操作。</td></tr><tr><td rowspan="2">AI Core Utilization</td><td>Average</td><td>AI Core指令占比数据的均值。AI Core Utilization 泳道仅支持在text格式文件下展示。</td></tr><tr><td>Core</td><td>各AI Core在执行Task的total cycle(从AI Core开始 执行算子的第一条指令开始计数,到最后一条指令 执行完成)占比情况。</td></tr><tr><td>AI Core Freq</td><td>AI Core Freq</td><td>展示AI Core芯片在执行AI任务的过程中频率的变化 情况。 AI Core Freq泳道仅支持展示Atlas A2 训练系列产 品导出的性能数据。</td></tr><tr><td>SIO</td><td>dat_rx、dat_tx</td><td>数据流通道的接收、发送带宽。SIO泳道仅支持在 text格式文件下展示。 SIO泳道仅支持展示Atlas A3 训练系列产品/Atlas A3 推理系列产品die间传输带宽信息。</td></tr><tr><td rowspan="3"></td><td>req_rx、req_tx</td><td>请求流通道的接收、发送带宽。</td></tr><tr><td>rsp_rx、rsp_tx</td><td>回应流通道的接收、发送带宽。</td></tr><tr><td>snp_rx、snp_tx</td><td>侦听流通道的接收、发送带宽。</td></tr><tr><td>QoS</td><td>QoS&lt;id&gt;:OTHERS</td><td>设备QoS带宽信息。</td></tr><tr><td>NIC</td><td>Port&lt;Rid&gt;/RxPort&lt;Rid&gt;/Tx</td><td>• text场景：展示每个时间节点网络信息数据。• db场景：展示带宽信息数据。泳道名称会根据导入的数据不同而变化。</td></tr><tr><td>RoCE</td><td>Port&lt;Rid&gt;/RxPort&lt;Rid&gt;/Tx</td><td>RoCE通信接口带宽数据。RoCE泳道仅支持在text格式文件下展示。</td></tr><tr><td rowspan="4">PCIe</td><td>PCIe_cpl</td><td>接收写请求的完成数据包，单位MB/s。Tx表示发送端，Rx表示接收端。</td></tr><tr><td>PCIe_nonpost</td><td>PCIe Non-Posted数据传输带宽，单位MB/s。Tx表示发送端，Rx表示接收端。</td></tr><tr><td>PCIe_nonpostLatency</td><td>PCIe Non-Posted模式下的传输时延，单位us。Tx表示发送端，Rx表示接收端。PCIe_nonpost-latency无Rx，取固定值0。</td></tr><tr><td>PCIe_post</td><td>PCIe Posted数据传输带宽，单位MB/s。Tx表示发送端，Rx表示接收端。泳道名称会根据导入的数据不同而变化。</td></tr><tr><td>HCCS</td><td>txThroughputrxThroughput</td><td>HCCS集合通信带宽数据，展示接收带宽和发送带宽，单位MB/s。</td></tr><tr><td rowspan="4">biu_group</td><td>BandwidthRead</td><td>BIU总线接口单元读取指令时的带宽。biu_group泳道仅支持在text格式文件下展示。</td></tr><tr><td>BandwidthWrite</td><td>BIU总线接口单元写入指令时的带宽。</td></tr><tr><td>Latency Read</td><td>BIU总线接口单元读取指令时的时延。</td></tr><tr><td>Latency Write</td><td>BIU总线接口单元写入指令时的时延。</td></tr><tr><td rowspan="3">aic_core_group</td><td>Cube</td><td>矩阵类运算指令在本采样周期内的cycle数和占比。aic_core_group泳道仅支持在text格式文件下展示。</td></tr><tr><td>Mte1</td><td>L1-&gt;L0A/L0B搬运类指令在本采样周期内的cycle数和占比。</td></tr><tr><td>Mte2</td><td>片上内存-&gt;AICORE搬运类指令在本采样周期内的cycle数和占比。</td></tr><tr><td>一层级泳道名称</td><td>二层级泳道名称</td><td>说明</td></tr><tr><td></td><td>Mte3</td><td>AICORE-&gt;片上内存搬运类指令在本采样周期内的cycle数和占比。</td></tr><tr><td rowspan="5">aiv_core_group</td><td>Mte1</td><td>L1-&gt;L0A/L0B搬运类指令在本采样周期内的cycle数和占比。aiv_core_group泳道仅支持在text格式文件下展示。</td></tr><tr><td>Mte2</td><td>片上内存-&gt;AICORE搬运类指令在本采样周期内的cycle数和占比。</td></tr><tr><td>Mte3</td><td>AICORE-&gt;片上内存搬运类指令在本采样周期内的cycle数和占比。</td></tr><tr><td>Scalar</td><td>标量类运算指令在本采样周期内的cycle数和占比。</td></tr><tr><td>Vector</td><td>向量类运算指令在本采样周期内的cycle数和占比。</td></tr><tr><td rowspan="4">Stars Chip Trans</td><td>PA Link Rx</td><td>PA流量接收等级。当有集合通信带宽时,不建议参考该字段值,该字段为粗粒度的统计值。Stars Chip Trans泳道仅支持在text格式文件下展示。</td></tr><tr><td>PA Link Tx</td><td>PA流量发送等级。当有集合通信带宽时,不建议参考该字段值,该字段为粗粒度的统计值。</td></tr><tr><td>PCIE Read Bandwidth</td><td>PCIe读带宽。当有PCIe带宽时,不建议参考该字段值,该字段为粗粒度的统计值。</td></tr><tr><td>PCIE Write Bandwidth</td><td>PCIe写带宽。当有PCIe带宽时,不建议参考该字段值,该字段为粗粒度的统计值。</td></tr><tr><td>CPU Usage</td><td>CPU &lt;id&gt;</td><td>Host侧CPU利用率数据。</td></tr><tr><td>Memory Usage</td><td>Memory Usage</td><td>Host侧内存利用率数据。</td></tr><tr><td>Disk Usage</td><td>Disk Usage</td><td>Host侧磁盘I/O利用率数据。</td></tr><tr><td>Network Usage</td><td>Network Usage</td><td>Host侧网络I/O利用率数据。</td></tr><tr><td>OS Runtime API</td><td>Thread</td><td>Host侧syscall和pthreadcall数据。OS Runtime API泳道仅支持在text格式文件下展示。</td></tr></table>

# 说明

通过观察时间线视图各个层级上的耗时长短、间隙等判断对应组件和算子是否存在性能问题，如算子下发是否存在瓶颈、是否存在高耗时的kernel以及是否存在冗余的转换类算子。

# 4.2.2 使用说明

# 4.2.2.1 基础功能

# 支持界面缩放

时间线（Timeline）界面支持缩小、放大和左右移动等功能，具体操作如下所示：

单击时间线（Timeline）界面树状图或者图形化窗格任意位置，可以使用键盘中的W（放大）和S（缩小）键进行操作，支持放大的最大精度为1ns。

单击时间线（Timeline）界面树状图或者图形化窗格任意位置，使用键盘中的A（左移）、D（右移）键，或者方向键左键（左移）、右键（右移）进行左右移动，也可使用方向键上键（上移）、下键（下移）进行上下移动。

在图形化窗格中，按住键盘中的Alt键，使用鼠标左键选中区域，即可实现选中区域的局部放大。

单击界面左上方工具栏中的 $\circledast$ （放大）和 $\circleddash$ （缩小）实现缩放。

单击界面左上方工具栏中的 $\Rightarrow$ 可以一键恢复图形化窗格显示全部时间线视图。

将鼠标放置在时间线（Timeline）界面树状图或者图形化窗格任意位置，可以使用键盘中的Ctrl键加鼠标滚轮实现缩放操作。

在图形化窗格中，使用键盘中的Ctrl键加鼠标左键可以实现左右拖拽泳道图表。

# 说明

macOS系统中，需使用键盘上的Command键加鼠标滚轮实现缩放，Command键加鼠标左键实现左右拖拽泳道图表。

● 在图形化窗格中，可使用鼠标右键菜单进行缩放展示，具体功能参见表4-12。


表4-12 鼠标右键菜单功能


<table><tr><td>中文菜单</td><td>英文菜单</td><td>说明</td><td>操作</td></tr><tr><td>全屏显示</td><td>Fit to screen</td><td>将单个算子放大至屏幕可见范围最大宽度。如果未选中算子,则不显示该参数。</td><td>1. 单击选中一个算子,单击鼠标右键,弹出菜单;2. 单击“全屏显示”,可将选中算子放大至屏幕可见范围最大宽度。</td></tr><tr><td>放大所选内容</td><td>Zoom into selection</td><td>将选定区域放大至屏幕可见范围最大宽度。如果无选定区域,则不显示该参数。</td><td>1. 选定某个区域后,单击鼠标右键,弹出菜单;2. 单击“放大所选内容”,可将选定区域放大至屏幕可见范围最大宽度。</td></tr><tr><td>撤销缩放(0)</td><td>Undo Zoom(0)</td><td>撤销缩放,括号中的数字会随着缩放次数随之变化,初始状态为0。</td><td>1. 在放大后的时间线 (Timeline)界面,单击鼠标右键,弹出菜单;2. 单击“撤销缩放”,界面缩小一次,括号中的数字会随之减一。</td></tr><tr><td>重置缩放</td><td>Reset Zoom</td><td>重置缩放，将图表恢复至初始状态。</td><td>1. 在放大后的时间线（Timeline）界面，单击鼠标右键，弹出菜单；
2. 单击“重置缩放”，图表重置，恢复至初始状态。</td></tr></table>

# 搜索功能

MindStudio Insight在时间线（Timeline）界面支持算子、API等名称的搜索功能。

单击界面左上方工具栏中的 $\alpha$ ，在弹出输入框中输入需要搜索的内容，然后按回车键，则会匹配对应的算子或API，搜索结果匹配算子和API总数，在界面中也会高亮显示匹配的算子或API，如图4-2所示，搜索到与名称为“npu”相关的算子和API总数为3104。

单击搜索框后方的切换按钮，可以查看上一个或者下一个匹配的算子或API，也可以在输入框后方输入具体的数字搜索其对应的算子或API，该算子或API将会被选中。


图4-2 搜索算子


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/9c0ae98735de5d3c3ce96cd241c5d8250d1587a45a7f883bfed52abcc670210d.jpg)


单击界面左上方工具栏中的 $\cup$ ，可在搜索弹出输入框左侧分别单击 $\mathsf { A } _ { \mathtt { G } }$ 和 $\mathsf { w }$ ，开启大小写匹配和全词匹配功能。

单击 $_ { R a }$ 开启大小写匹配，在弹出输入框中输入需要搜索的内容，然后按回车键，则会匹配名称中包含搜索项的算子或API，如图4-3所示。


图 4-3 开启大小写匹配或全词匹配


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/070b34d64c5a5ad5fb751392e1ffdd19f59d6867a833dcdcef4be9008c9da3c7.jpg)


单击 $\mathsf { w }$ 开启全词匹配，在弹出输入框中输入需要搜索的内容，然后按回车键，则会匹配名称为搜索项的算子或API，但是会忽略大小写，如图4-3所示。

当同时选中 $\mathsf { A } _ { \mathtt { G } }$ 和 $\mathsf { w }$ 时，开启大小写匹配和全词匹配功能，在弹出输入框中输入需要搜索的内容，然后按回车键，则会精确匹配名称为搜索项的算子或API。

单击搜索框后方的“在查找窗口打开”，可跳转至页面下方的“查找”页签，展示搜索项相关信息，如图4-4所示，字段解释如表4-13所示。单击“点击跳转Timeline”列的“点击”可跳转到算子或API在时间线视图上的具体位置。


图 4-4 在查找窗口打开


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/c8d1c0667a0edf2e774ca6cce05f660262702dc9338553d169c67933e9905430.jpg)



表4-13 查找页签字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>卡序号</td><td>Rank ID</td><td>卡序号，可以选择需要查看的卡。</td></tr><tr><td>名称</td><td>Name</td><td>算子名称。</td></tr><tr><td>开始时间</td><td>Start Time</td><td>算子执行起始时间。</td></tr><tr><td>时长(ns)</td><td>Duration(ns)</td><td>算子运行总耗时。</td></tr><tr><td>点击跳转Timeline</td><td>Click To Timeline</td><td>单击“点击”跳转到算子或API在时间线视图上的具体位置。</td></tr></table>

# 4.2.2.2 性能数据展示

# 支持界面预览

在线程级泳道中，如果一个泳道中存在多行数据，则在不展开该泳道的情况下，将会以缩略图的形式展示该泳道中数据的分布情况，如图4-5中的1所示。

在不展开进程级泳道的情况下，根据线程级中时间轴上的数据，将以灰色填充进程级泳道来展示线程级泳道中的数据分布情况，如图4-5中的2所示。


图 4-5 时间线（Timeline）界面预览


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/56082a62f096303d8a2467196dcc810447d32b936f03d6a272c024ed70543e23.jpg)


# 说明

CPU、Memory、Network相关利用率数据，也就是数值类型事件，在时间线（Timeline）中以柱状图形式呈现，暂不支持预览功能，如图4-5中的3所示。

# 支持集群场景展示

MindStudio Insight支持导入和展示集群场景数据，无需手动合并多个单卡数据。支持训练场景下的多机多卡和推理场景下多卡等场景，MindStudio Insight能够自动识别导入文件夹下所有的trace_view.json和msprof*.json文件。以16卡为例进行展示，如图4-6所示。


图4-6 集群场景时间线数据展示


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/97c17fa26f601c2bc4a304dfdf0ca82f6226178c2cc720bb33687e5a96cd7c48.jpg)


在集群场景中，为方便快速定位某卡的数据所对应的文件目录，可以将鼠标悬停在卡的序号上，则会显示该卡数据所对应的文件目录。例如将鼠标悬停在“0”上，则会在后方显示该卡所对应的文件目录，如图4-7所示。


图 4-7 定位文件夹


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/d98198bbd99a741b86252a928c1e17be2d17bf2c071641931327a14072100a7c.jpg)


# 支持分卡/泳道显示和对比

当导入集群场景数据时，展示的时间线（Timeline）信息较多，为更好地帮助用户对比分析，MindStudio Insight支持按卡或按泳道过滤，也可联合卡和泳道一起过滤展示。

# 说明

当联合卡和泳道一起过滤时，可按照单独按卡或泳道过滤的方式，依次选择对应卡和泳道，即可展示相应的过滤信息。

按卡显示：以只显示1卡为例，单击界面左上方 $\curlyvee$ ，选择“卡过滤”，然后单击输入框，在下拉框选择“1”，即可显示1卡的时间线（Timeline）信息，如图4-8所示。


图4-8 卡过滤


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/8ea2c72336f9a0e8ef6b4f25cd468357e7d4900d86bc8916b6a796c69acf5e7a.jpg)


按泳道显示：以只显示每张卡的Overlap Analysis泳道为例，单击界面左上方工具栏 $\curlyvee$ ，选择“泳道过滤”，然后单击输入框，在下拉框选择“OverlapAnalysis”，即可显示Overlap Analysis泳道的时间线（Timeline）信息，如图4-9所示。


图 4-9 泳道过滤


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/4b5c8411deb660c2e0d5ddccd9672a380bae06389112a3f79889f370e3e40f8b.jpg)


# 支持泳道置顶和对比

MindStudio Insight支持固定并置顶泳道，且可以通过鼠标拖拽对收起状态的置顶泳道进行自由排序，方便同其他同类层级进行对比。

# 说明

如果置顶的卡中同时也置顶了该卡中的二层级和三层级泳道，那么只能对卡层级泳道进行拖拽排序，不能对二层级和三层级泳道进行拖拽排序；同样的，如果置顶的二层级泳道中同时也置顶了三层级泳道，那么只能对二层级泳道进行拖拽排序。

例：单击0、1、2卡中的某三层级名后方的 $\scriptstyle { \overline { { \boldsymbol { \mathbb { V } } } } }$ ， 则可置顶，再次单击 $\boldsymbol { \tau }$ 即可取消置顶，如图4-10所示。


图 4-10 置顶对比


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/79b81dd681164ac63f1b25a565827744df14a7b82d84ff737276bc2a75d617f2.jpg)


MindStudio Insight还支持一键置顶同一通信域的通信泳道。

在Communication泳道下的Group子泳道上单击鼠标右键，选择“置顶（按相同组 组名称）”，将置顶该通信域（组）下的所有泳道，便于查看对比，如图4-11所示。


图 4-11 置顶通信泳道


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/d6cfc983ee0aa7f90dbe4e4d0287ccb5c1470e7583c3dbab7de72bd57aeb0a74.jpg)


在已置顶的泳道上单击鼠标右键，可选择“取消置顶（按相同组 组名称）”或者“取消置顶（全部）”，取消泳道置顶，如图4-12所示。

“取消置顶（按相同组 组名称）”即取消该通信域（组）下的所有泳道，“取消置顶（全部）”即取消所有置顶泳道。


图 4-12 取消置顶


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/488665d5e3bb8cdc692e874beda06cb01648b429154a91c0382944680287e898.jpg)


# 支持单卡和泳道时间对齐

# 说明

单卡场景、集群场景和多模型场景均已实现时间线（Timeline）相对位置自动对齐，如果无需自动对齐的话，请在任意位置单击鼠标右键，弹出菜单，选择“恢复所有卡的默认偏移量”，可恢复所有卡和模型的默认偏移量，参见如下操作手动设置相对位置对齐。

# 手动设置对齐到起始位置

在偏移量的弹窗中单击 $E _ { - }$ （对齐到起始位置）按钮，会在“时间戳偏移(ns)”输入框中显示该卡中最左侧的线程数据与时间轴初始位置（00：00.000）的偏移量，然后按回车键，时间线（Timeline）界面将会把该线程数据与时间轴初始位置对齐。

如图4-13所示，0卡中最左侧线程数据与时间轴初始位置的偏移量为7293500ns。


图 4-13 初始位置偏移量


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/b6e46c36db14edc31875d7e30a0ea3293b52892b0f835b522cf201c7c5ff0d9e.jpg)


# 手动设置偏移量

对于多机多卡场景，由于机器上时间不准，可能造成多卡间时间线（Timeline）相对位置不准确，MindStudio Insight支持单卡维度的时间校准，如图4-14所示，通过设置偏移量，可以将单卡的时间线（Timeline）左右移动，从而达到时间“校准”的目的。偏移量的单位为ns，负值为右移，正值为左移。


图 4-14 单卡时间调整


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/cef5c6982093adb6f31ca18425afa423273899a2124f7cc68bd0d9d6da125c3d.jpg)


同时，为了更灵活的校准时间，MindStudio Insight还支持以泳道维度进行时间校准，如图4-15所示。在时间线（Timeline）界面，展开卡，单击所需二级泳道名称后面的“偏移量”，在输入框输入值，单击回车键，进行泳道时间调整。db场景下，需要首先展开机器名称，分别在host和各卡下的二级泳道上执行时间调整操作。


图 4-15 泳道时间调整


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/1edc55b67d57b3c63cebab56822903ddf2f49744f3317560d9eb9de5809a166d.jpg)


# 支持多机多卡展示

当导入多机多卡数据时，MindStudio Insight支持以机器维度展示数据，如图4-16所示。

图中1为机器名称，是由hostName和hostUid组成。

图中2为卡层级展示，按照当前机器的卡序号展示对应泳道。

图中3为参数配置项，在多机多卡场景下，需先选择“机器名称”，再选择该机器下的“卡序号”进行配置。

当导入的db场景文件中存在名称为“HOST_INFO”的表时，在时间线（Timeline）界面下的“系统视图”页签（选择“统计系统视图”和“专家系统视图”时）和“查找”页签下，存在该配置项。

# 说明

该功能仅支持在统一db场景下展示。


图 4-16 多机多卡展示


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/a68d1dbb0fad910b5c42b81469408056ca261607cf28589cf04ad9e45bde18fc.jpg)


# 设置和查看标记

# 区域标记

在时间线（Timeline）界面选中某个区域后，单击 或敲击键盘K键将选中区域进行标记并保存，如图4-17所示。


图 4-17 区域标记


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/49acb92c03c8fff7e585409336e2d603c1366bbcfa2cd9395912c546e06e2cc0.jpg)


左键双击任一标记，可以设置该标记对的属性，支持修改标记对名称、颜色以及删除该标记对，如图4-18所示。


图4-18 修改标记对属性


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/1a041dd46855674ac3e2932f05333aca38b9393712a8f900cc4cbb0bde7aa5d6.jpg)


# 单点标记

在最上方空泳道的任意位置，单击鼠标左键或敲击键盘K键，将生成一个单点标记，如图4-19所示。


图 4-19 单点标记


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/b475c1b03c456fa0d147aa25820d2dc3ff6597d5a90eaca605e003c017fc9d40.jpg)


左键双击标记，可以设置该标记的属性，支持修改标记的名称、颜色以及删除该标记。

# 标记管理

单击左上方工具栏中的 $\mathsf { P }$ ，将显示所有标记信息，如图4-20所示。


图 4-20 查看标记信息


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/f520d3609cd77d13dcc592c0c9c9c9dafaa097b76ded205339844a8004d91cb2.jpg)


单击某个标记对应的 图标可删除标记。

单击弹窗下方的“清空全部”可删除所有标记。

单击区域标记，界面下方的“选中详情”页签会显示该区域的耗时信息详情。

如果某一标记不在当前可视化界面，单击该标记对应的 图标将直接跳转至标记界面，便于查看。

– 单击某个标记对应的颜色图标可进行颜色设置，便于对标记进行分类管理。

# 算子连线功能

MindStudio Insight支持算子连线关系展示，单击有连线的算子，即可显示该算子关联的连线，即使折叠连线起点或者终点的进程，连线也不会消失，如图4-21所示。


图4-21 算子连线关系


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/87d95d2e4d571e6bbe2d861a3673c41dc14b0715245cb8de5a1769058c9b09ff.jpg)


# 说明

● 如果同时折叠连线起点和终点的进程，连线就会消失。

● 在MindStudio Insight中连线仅会连接同一批下发的算子中的第一个。在AscendHardware泳道中，如果用户单击某一算子后，发现关联的连线显示在其它算子上，这表示当前单击的算子和连线的算子是同一批下发的。

MindStudio Insight支持全量连线的功能，单击界面左上方工具栏中的 $^ - \mathrm { u }$ ，在弹框中选择一个或多个连线类型，也可在搜索框中搜索某一连线类型的关键字，勾选相应的连线类型，则在图形化窗格展示对应类型的所有连线，如图4-22所示。

# 说明

最多支持选择10个连线类型。


图 4-22 全量连线


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/56f52d3d6b4d310787e729b49bd695d56a0e9aabcacfdd2d1acb0c882f2a8bb8.jpg)


应用层算子到NPU算子之间通过连线方式展示下发到执行的对应关系如下所示：

HostToDevice 

CANN层Node（算子）到Ascend Hardware的NPU算子的下发执行关系（Host到Device）。

CANN层Node（算子）到Communication通信算子的下发执行关系（Host到Device）。

async_npu 

应用层算子到Ascend Hardware的NPU算子的下发执行关系。

应用层算子到Communication通信算子的下发执行关系。

async_task_queue：应用层Enqueue到Dequeue的入队列到出队列对应关系，仅PyTorch场景。

fwdbwd：前向API到反向API，仅PyTorch场景。

MSTX：打点数据到Ascend Hardware的NPU算子的下发执行关系。

# 说明

● 各层的对应关系是否呈现与对应采集场景是否采集该数据有关，请以实际情况为准。

● 各层之间的连线与各层是否展开呈联动关系，如果选择了某个连线类型，对应层没有展开，则不会显示该类型的连线。

# 支持选择性解析多卡数据

MindStudio Insight工具导入超过16卡的数据时，在时间线（Timeline）界面支持选择性解析数据，可一键全部解析或部分解析。

一键全部解析：在时间线（Timeline）界面，单击“开始全局解析”，将开始解析所有卡的数据，如图4-23所示。当所有卡的数据解析完成后，“开始全局解析”按钮消失。


图 4-23 全局解析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/b61028ec1d20d70f59fed89dca336b4ce91dc3f07c629b35015a0a466a971de7.jpg)


部分解析：当只需要解析部分卡的数据时，可逐个单击对应卡序号后面的 $\circledast$ ，解析所选卡的数据，如图4-24所示。当对应卡数据解析完成后，按钮消失，如图中0卡和1卡所示。


图 4-24 单卡解析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/e69d43073d1c045dc87b313b2ffee8f2a17b9db54139b3a77f6f9fe7d93c8896.jpg)


如果导入的卡数量较多，可通过卡过滤功能定位所需解析数据的卡，进行数据解析操作。在时间线（Timeline）界面的工具栏中，单击 $\curlyvee$ ，选择“卡过滤”，然后单击后方输入框，在下拉框选择所需呈现的卡，即可在时间线（Timeline）界面展示对应信息，单击卡序号后面的 $\circledast$ ，进行数据解析，如图4-25所示，解析2、5、7卡数据。


图 4-25 过滤展示并解析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/39882e678a2d75f3bf2e1ff2431f8941d012f53aab62130ec94489de64e5ee8a.jpg)


# 说明

在部分解析场景下，单击“开始全局解析”按钮，此时会解析所有卡的数据。

相同通信域的卡解析：当解析完一个卡后，在通信的Group子泳道上，单击鼠标右键，选择“解析相关通信域的卡”，和该泳道通信域相关的卡都被解析，如图4-26，解析完成后，该鼠标右键菜单变为“已解析全部相关通信域的卡”并置灰。


图 4-26 解析相关通信域的卡


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/098671fc9fa63879977bf60be265c8158dc7c5ab8042c893a0d964f24e6b16d1.jpg)


# 支持对齐自定义算子时间

MindStudio Insight工具支持使用快捷键将选中算子进行时间对齐操作，便于比较算子信息。

# 算子时间对齐

a. 在时间线（Timeline）界面，选中任意一个算子，单击鼠标右键，选择“设置基准算子”，将选中算子设置为基准算子，如图4-27所示。


图 4-27 设置基准算子


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/ac0feaf81c38f4d0edec50dff666163a1c80b3116fb6ee63432b3d247f189efe.jpg)


b. 选中与基准算子不同的二级泳道中的算子。

c. 使用键盘快捷键L（左对齐），将选中的算子与基准算子左边界对齐，如图4-28所示。


图 4-28 算子左边界对齐


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/eff572afb8c20568d09847d9387835d851df94917d4f67dd723d750be59792c5.jpg)


使用键盘快捷键R（右对齐），则选中的算子与基准算子会右边界对齐，如图4-29所示。


图4-29 算子右边界对齐


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/6a10bdbedc15acde5c1c2a4f8f7857ff954a9e5e324b73967fc9599955d3e455.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/adb5ab2a1ebaf79f40f38cf8c052e9e032fb0baac00b2698ccc67fe0e0fe6487.jpg)


# 说明

无论左对齐还是右对齐，与选中算子为相同device的NPU泳道中的算子也会随之一起偏移。

# 取消基准算子

在泳道任意位置，单击鼠标右键，选择“消除基准算子”，则取消基准算子，如图4-30所示。


图 4-30 取消基准算子


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/7ae6f50663a6ac34d6f715d393a50d016b867250139eaf3c439b5125d86c6a04.jpg)


# 恢复默认偏移量

如果已经执行了算子时间对齐操作，可在泳道任意位置，单击鼠标右键，选择“恢复所有卡的默认偏移量”，恢复默认的偏移量，如图4-31所示。


图 4-31 恢复所有卡的默认偏移量


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/a2911443ce477501f11e23909d3029ca07e362c0cea370e0be6e236ad99d7510.jpg)


# 4.2.2.3 页面调优展示

# 泳道隐藏功能

在时间线（Timeline）界面，可对泳道进行隐藏和展开。

# 隐藏泳道

在时间线（Timeline）界面，鼠标放置在需要隐藏的泳道上，勾选单个泳道或多个泳道，或者框选多个泳道，自动勾选所框选的泳道，单击鼠标右键，在弹出菜单中选择“隐藏泳道”，隐藏该泳道，在该层级下会出现“x units hidden”行，表示隐藏的泳道数量，如图4-32所示。


图 4-32 隐藏泳道


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/3f88387e6f86434d90c745f6a8dfc26bb2d117d3692b06036eef01700b2ff0d3.jpg)


显示全部已隐藏的泳道

选择存在隐藏泳道层级的units hidden行，单击鼠标右键，在弹出菜单中选择“显示全部泳道”，显示所选层级被隐藏的所有泳道。

如果父层级和子层级都存在隐藏的泳道，在父层级泳道的units hidden行，选择“显示全部泳道”，将显示该父层级泳道下所有被隐藏的泳道。如图4-33所示。


图 4-33 显示隐藏的泳道


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/eaf844363baa60ac04e8606e516e276c95ac851e3d61f48b362e4f7159fa7cc5.jpg)


# Python 调用栈隐藏

如果MindStudio Insight导入的数据存在Python调用栈信息，在时间线（Timeline）界面，可在泳道中隐藏或显示Python调用栈内容，便于分析人员查看。

# 说明

如果泳道不存在Python调用栈内容，则该泳道无“隐藏Python调用栈”功能。

隐藏Python调用栈：选择需要隐藏Python调用栈的泳道，单击鼠标右键，在弹出菜单中选择“隐藏Python调用栈”，隐藏该泳道下Python调用栈内容，如图4-34所示。


图 4-34 隐藏 Python 调用栈


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/d117caff09235ef54cf9c4dac9a37db1cfca7500ce7a444da481c3172767d39c.jpg)


显示Python调用栈：在已经隐藏了Python调用栈信息的泳道，单击鼠标右键，在弹出菜单中选择“显示Python调用栈”，显示该泳道下被隐藏的Python调用栈内容，如图4-35所示。


图 4-35 显示 Python 调用栈


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/01c19891e855d137ca387a072453ba8081f2f43aa5f19626049f06e48b8f6bd2.jpg)


# 支持展开全部泳道

在时间线（Timeline）界面，可使用鼠标右键菜单展开全部泳道或收起全部泳道。

展开全部泳道：在需要展开的泳道上，单击鼠标右键，在弹出菜单中选择“展开全部子项”，将展开所选泳道下的全部子泳道，如图4-36所示，展开0卡的全部泳道。

当所选泳道及子泳道已处于全部展开状态时，鼠标右键不显示“展开全部子项”选项。


图 4-36 展开全部子项


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/8bf4918b90fdecac0bbb616d7b74b8e369a19d2fc48f86c73675fa00d0211945.jpg)


收起全部泳道：在已展开的泳道上，单击鼠标右键，在弹出菜单中选择“收起全部子项”，将收起所选泳道下的全部子泳道，如图4-37所示，收起0卡的所有泳道。


图 4-37 收起全部子项


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/32d51fa4f89d33466a8d76df573b4284a8bbdca1127b4debe2efcfc2dca25d7d.jpg)


# 泳道高度支持自适应

在时间线（Timeline）界面，可使用鼠标右键菜单开启或关闭泳道高度自适应功能。

开启泳道高度自适应：在展开的泳道上，单击鼠标右键，在弹出菜单中选择“开启泳道高度自适应”，可自动调整泳道高度，以适配当前页面显示，如图4-38所示。


图 4-38 开启泳道高度自适应


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/9ab3694a65ad4a6de7fc203ffa7cd1304379ca6a4d017df4e86e3def894ec678.jpg)


关闭泳道高度自适应：在已开启泳道高度自适应功能的泳道上，单击鼠标右键，在弹出菜单中选择“关闭泳道高度自适应”，关闭泳道高度自适应功能，泳道恢复初始高度，如图4-39所示。


图 4-39 关闭泳道高度自适应


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/bc8a39bd06874d956a4e71c4b1b46334ac05bbb5f33327872ed1c664b9af0b65.jpg)


# 支持锁定框选区域

锁定框选区域

在时间线（Timeline）界面，使用鼠标左键在泳道上框选部分算子区域后，单击鼠标右键，选择“锁定框选区域”，可在框选区域搜索相关算子，并展示连线起始点或终止点任意一个在框选区域的算子连线，如图4-40所示。也支持在单卡层级下跨多个泳道框选区域进行锁定。


图4-40 锁定框选区域


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/5238cb0bcfa459714c2da91ba8bd8bcefd05b59c3b441ae3077e14bca0167647.jpg)


# 解锁框选区域

如果需要取消框选，可单击鼠标右键，选择“解锁框选区域”，便可取消框选锁定，如图4-41所示。


图4-41 解锁框选区域


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/862f86550ffc6bfa5854cd74fc7063da1f0f005c3d63fee836b55cbf0c26a62a.jpg)


# 支持合并 Stream 泳道

在时间线（Timeline）界面，支持对多个Stream泳道进行合并，便于分析数据。

# 合并泳道

在同一张卡内勾选多个需要合并的Stream泳道，单击鼠标右键，选择“合并泳道”，所选的泳道将被合并为一个新泳道，如图4-42所示。合并后的泳道连线功能、算子搜索功能以及算子跳转等功能均可正常使用。


图 4-42 合并泳道


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/756076a64672f9e010454e93d4e604b1c7835dbcf106463ddba9b5dcca9c31c2.jpg)


# 取消合并

如果需要取消Stream泳道的合并，可在合并的Stream泳道上，单击鼠标右键，选择“取消合并泳道”，便可取消合并，重新展示各Stream泳道，如图4-43所示。


图 4-43 取消合并泳道


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/0eadd42c72d1f8bc0f0f3f7ba9a5e07457f9c1d194dfc088c4ff426b9818293f.jpg)


# 4.2.2.4 系统功能展示

# 统计信息

MindStudio Insight支持算子统计信息和单个算子详情信息查看。

使用鼠标左键在单个三层级泳道上框选部分算子，或在单卡层级下跨多个泳道框选部分算子，框选部分区域算子后，可在下方“选中列表”页签中显示算子的统计信息，如图4-44所示，字段解释如表4-14所示。

当鼠标移入“选中列表”页签，单击表格右上角 $\cup$ 按钮，一键复制当前“选中列表”中所展示的内容，并粘贴至Excel表格中进行分析。

# 说明

在单卡下跨多个泳道框选算子的情况下，HBM、LLC、NPU_MEM、Stars Soc Info、acc_pmu等直方图泳道的框选部分不会在“选中列表”中统计。

单击“选中列表”列中的某个算子，在右侧“More”列表中将会显示此区域中与该算子同名的所有算子，单击“More”列表中某一行，则在时间线视图中定位出该算子的具体位置，并同时跳转至“选中详情”页面，可查看该算子的详情信息。


图4-44 选中列表


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/0fa6cfe8806c026987e49ad8d1bc6c2012ce9fbe1f908475b80ac4ce8d45b1d1.jpg)



表4-14 选中列表字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>名称</td><td>Name</td><td>算子名称。</td></tr><tr><td>持续时间</td><td>Wall Duration</td><td>算子执行总耗时。</td></tr><tr><td>自用时间</td><td>Self Time</td><td>算子执行时间（不包括调用的子算子时间）。</td></tr><tr><td>平均持续时间</td><td>Average Wall Duration</td><td>算子平均执行时间。</td></tr><tr><td>最大持续时间</td><td>Max Wall Duration</td><td>算子最大持续时间。</td></tr><tr><td>最小持续时间</td><td>Min Wall Duration</td><td>算子最小持续时间。</td></tr><tr><td>发生次数</td><td>Occurrences</td><td>算子调用次数。</td></tr><tr><td>索引</td><td>Index</td><td>序号。</td></tr><tr><td>开始时间</td><td>Start Time</td><td>在图形化窗格中的时间戳。</td></tr><tr><td>时长(ms)</td><td>Duration(ms)</td><td>执行耗时。</td></tr></table>

当选中单个算子时，可在下方“选中详情”页签中显示该算子的详情信息，如图4-45所示，字段解释如表4-15所示。

选中单个算子，使用M键，可框选该算子所属的时间线（Timeline）区域，再次按下M键，可取消框选。


图4-45 选中详情


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/73bacdc6e9cfa0e5486775fc7a4762cbcd129385df088aa02e8a012b0a7ba708.jpg)



表 4-15 选中详情字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>标题</td><td>Title</td><td>名称。</td></tr><tr><td>开始</td><td>Start</td><td>起始时间。</td></tr><tr><td>开始（原始时间戳）</td><td>Start(Raw Timestamp)</td><td>数据采集到的原始开始时间。</td></tr><tr><td>持续时间</td><td>Wall Duration</td><td>总耗时。</td></tr><tr><td>自用时间</td><td>Self Time</td><td>总耗时（不包括子类）。</td></tr><tr><td>输入Shapes</td><td>Input Shapes</td><td>算子输入维度。采集数据时task-time配置为l0时，不采集该字段，显示为N/A；NPU加速核上采集到的算子才有此字段。</td></tr><tr><td>输入数据类型</td><td>Input Data Types</td><td>算子输入数据类型。采集数据时task-time配置为l0时，不采集该字段，显示为N/A；NPU加速核上采集到的算子才有此字段。</td></tr><tr><td>输入格式</td><td>Input Formats</td><td>算子输入数据格式。采集数据时task-time配置为l0时，不采集该字段，显示为N/A；NPU加速核上采集到的算子才有此字段。</td></tr><tr><td>输出Shapes</td><td>Output Shapes</td><td>算子的输出维度。采集数据时task-time配置为l0时，不采集该字段，显示为N/A；NPU加速核上采集到的算子才有此字段。</td></tr><tr><td>输出数据类型</td><td>Output Data Types</td><td>算子输出数据类型。采集数据时task-time配置为l0时，不采集该字段，显示为N/A；NPU加速核上采集到的算子才有此字段。</td></tr><tr><td>输出格式</td><td>Output Formats</td><td>算子输出数据格式。采集数据时task-time配置为l0时，不采集该字段，显示为N/A；NPU加速核上采集到的算子才有此字段。</td></tr><tr><td>算子属性信息</td><td>Attr Info</td><td>算子属性信息。采集数据时task-time配置为l0或l1时，不采集该字段，显示为N/A；只有开启aclnn，task-time配置为l2时，才有此字段。</td></tr><tr><td>参数</td><td>Args</td><td>算子的相关参数信息。</td></tr></table>

# 统计系统视图

在“系统视图”页签，当选择“统计系统视图”时，页面包含卡序号（Rank ID）选框、综合指标（Overall Metrics）、5种类型的算子汇总统计页签和算子详情（KernelDetails）（NPU上算子的详细信息），在卡序号选框中可以选择想要查看的卡。如果是db场景，需要依次选择“机器名称”和“卡序号” 。

综合指标（Overall Metrics）展示所有算子的总体信息，如图4-46所示，字段解释如表4-16所示，当选择计算时间（Computing Time）列表中的子层级时，可单击“More”区域任一算子，会跳转到该算子在时间线视图中的具体位置。


图 4-46 综合指标


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/8d2bc16ecb961fbad2a38144f4cf3665fe36d82d052fd49119be534d7a1bea9e.jpg)



表 4-16 综合指标字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>类别</td><td>Category</td><td>类别。
可展示多层级信息：
·一层级：包含Computing Time（计算时间）、Communication(Not Overlapped) Time（通信时间（未被覆盖）、Free Time（空闲时间）和E2E Time（端到端时间）。
·子层级：Computing Time（计算时间）的子层级包括Flash Attention、Conv、Matmul、Cube、Vector等计算流算子的拆解结果。其中，Forward、Backward用于区分前向、反向传播。
Communication(Not Overlapped) Time（通信时间（未被覆盖））的子层级为各通信域的分组拆解结果。其中等待时间、传输时间为与通信未被覆盖取交集后的结果。</td></tr><tr><td>总时间(us)</td><td>Total Time(us)</td><td>该类耗时总和。</td></tr><tr><td>时间占比</td><td>Time Ratio</td><td>该类的耗时占比。</td></tr><tr><td>数量</td><td>Number</td><td>该类算子数目。</td></tr><tr><td>平均值(us)</td><td>Avg(us)</td><td>该类耗时的平均值。</td></tr><tr><td>最小值(us)</td><td>Min(us)</td><td>该类耗时的最小值。</td></tr><tr><td>最大值(us)</td><td>Max(us)</td><td>该类耗时的最大值。</td></tr><tr><td>更多</td><td>More</td><td>当选择Computing Time（计算时间）列表中的子层级时，该区域展示所选层级的所有算子详情，可单击任意一个算子，跳转至时间线视图中算子所在的具体位置。</td></tr></table>

5种算子类型包括Python API 汇总（Python API Summary）、CANN API 汇总（CANN API Summary）、Ascend HardWare Task 汇总（Ascend HardWare TaskSummary）、通信汇总（Communication Summary）、覆盖分析（OverlapAnalysis），算子信息如图4-47所示，字段解释如表4-17所示。


图4-47 算子汇总页签


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/ae5a5a0de2c18fa2ca545f7857585d2653687b36f42c7312ee26e53b364762aa.jpg)



表4-17 统计系统视图字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>名称</td><td>Name</td><td>名称。</td></tr><tr><td>时间(%)</td><td>Time(%)</td><td>总时间占比 = 该类的耗时总时间 / 所有耗时总时间。
当统计类型为覆盖分析（Overlap Analysis）时，时间占比 = 该类的耗时总时间 /
（Communication（Not Overlapped）总时间 + Computing总时间 + Free总时间）。</td></tr><tr><td>总时间(us)</td><td>Total Time(us)</td><td>该类耗时总和。</td></tr><tr><td>调用数</td><td>Num Calls</td><td>被调用次数。</td></tr><tr><td>平均值(us)</td><td>Avg(us)</td><td>该类耗时的平均值。</td></tr><tr><td>最小值(us)</td><td>Min(us)</td><td>该类耗时的最小值。</td></tr><tr><td>最大值(us)</td><td>Max(us)</td><td>该类耗时的最大值。</td></tr></table>

算子详情（Kernel Details）展示NPU上算子的详细信息，如图4-48所示，字段解释如表4-18所示，单击“点击跳转Timeline”列中的“点击”，会跳转到算子在时间线视图中的具体位置，区域四（数据窗格）将会展示选中详情，展示该算子的具体信息。单击算子详情表中字段名称后的 $\bigtriangledown$ ， 可对相关字段进行模糊搜索。


图 4-48 算子详情信息展示


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/90ea73fd7416ae9416b0f7c94711fad49618fa47b6797955c992d40dce44242b.jpg)



表 4-18 算子详情字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>名称</td><td>Name</td><td>算子名称。</td></tr><tr><td>类型</td><td>Type</td><td>算子类型。</td></tr><tr><td>加速器核</td><td>Accelerator Core</td><td>计算核类型。</td></tr><tr><td>开始时间</td><td>Start Time</td><td>任务开始时间点。</td></tr><tr><td>时长(us)</td><td>Duration(us)</td><td>任务耗时。</td></tr><tr><td>等待时间(us)</td><td>Wait Time(us)</td><td>上一个任务的结束时间与当前任务的开始时间间隔，单位us。</td></tr><tr><td>任务ID</td><td>Task ID</td><td>任务的ID。</td></tr><tr><td>Block数量</td><td>Block Dim</td><td>任务运行切分数量，对应任务运行时核数。</td></tr><tr><td>输入Shapes</td><td>Input Shapes</td><td>算子的输入维度。</td></tr><tr><td>输入数据类型</td><td>Input Data Types</td><td>算子输入数据类型。</td></tr><tr><td>输入格式</td><td>Input Formats</td><td>算子输入数据格式。</td></tr><tr><td>输出Shapes</td><td>Output Shapes</td><td>算子的输出维度。</td></tr><tr><td>输出数据类型</td><td>Output Data Types</td><td>算子输出数据类型。</td></tr><tr><td>输出格式</td><td>Output Formats</td><td>算子输出数据格式。</td></tr><tr><td>点击跳转Timeline</td><td>Click To Timeline</td><td>单击“点击”，跳转到算子在时间线视图上的具体位置，并且在区域四（数据窗格）展示该算子的详情。</td></tr></table>

# 专家系统视图

在“系统视图”页签，当选择“专家系统视图”时，页面包含卡序号选框、专家分析页签、6种类型专家建议系统页签，在卡序号选框中可以选择想要查看的卡。如果是db场景，需要依次选择“机器名称”和“卡序号” 。

专家分析（Expert Analysis）页签展示泳道中的异常指标信息。

6种专家建议系统包括亲和 API（Affinity API）、亲和优化器（Affinity Optimizer）、AICPU 算子（AICPU Operators）、ACLNN 算子（ACLNN Operators）、算子融合（Operators Fusion）和算子下发（Operators Dispatch），如图4-49所示，字段解释如表4-19所示。

选择任一专家建议系统，右侧区域会显示该类专家建议系统的详细信息，单击“点击跳转Timeline”列中的“点击”，会跳转到算子在时间线视图中的具体位置，区域四（数据窗格）“选中详情”页签将会展示该算子的具体信息。


图4-49 专家系统视图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/a8d44773fb24d749ffd880e38f7bfcdd89226ca59ce9b448e126a1f056385249.jpg)



表 4-19 专家系统视图字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>名称</td><td>Name</td><td>算子名称。当专家建议系统为亲和优化器（Affinity Optimizer）时无此参数。</td></tr><tr><td>原始API</td><td>Origin API</td><td>可融合API序列。仅当专家建议系统为亲和API（Affinity API）时存在。</td></tr><tr><td>替换API</td><td>Replacement API</td><td>等效亲和API。仅当专家建议系统为亲和API（Affinity API）时存在。</td></tr><tr><td>原始优化器</td><td>Origin Optimizer</td><td>可融合优化器。仅当专家建议系统为亲和优化器（Affinity Optimizer）时存在。</td></tr><tr><td>替换优化器</td><td>Replacement Optimizer</td><td>可替换的优化器。仅当专家建议系统为亲和优化器（Affinity Optimizer）时存在。</td></tr><tr><td>原始算子</td><td>Origin Operators</td><td>可融合的算子。仅当专家建议系统为算子融合（Operators Fusion）时存在。</td></tr><tr><td>融合算子</td><td>Fused Operator</td><td>CANN层已融合的算子。仅当专家建议系统为算子融合（Operators Fusion）时存在。</td></tr><tr><td>开始时间</td><td>Start Time</td><td>任务开始时间点。</td></tr><tr><td>时长(us)</td><td>Duration(us)</td><td>任务耗时。</td></tr><tr><td>进程Id</td><td>Process Id</td><td>进程ID。</td></tr><tr><td>线程Id</td><td>Thread Id</td><td>线程ID。</td></tr><tr><td>备注</td><td>Notes</td><td>提示信息。当专家建议系统为亲和优化器（Affinity Optimizer）时无此参数。</td></tr><tr><td>点击跳转Timeline</td><td>Click To Timeline</td><td>单击“点击”，跳转到算子在时间线视图中的具体位置，并且在区域四（数据窗格）展示该算子的详情。</td></tr></table>

# 事件视图

在时间线（Timeline）界面，支持在事件视图中显示算子信息。

在时间线（Timeline）界面，选择所需泳道，单击鼠标右键，单击“在事件视图中显示”菜单，跳转至“系统视图”页签，左侧区域选项默认选择“事件视图”，右侧区域显示该泳道所有算子详情，如图4-50所示，字段解释如表4-20所示。


图 4-50 事件视图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/85f4dde5eb304af827b64b4fb0f63f73fc3a2613a02f68dacc73f1d70b203f87.jpg)



表 4-20 事件视图字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>名称</td><td>Name</td><td>算子名称。</td></tr><tr><td>开始时间</td><td>Start</td><td>算子执行开始时间。</td></tr><tr><td>时长(ns)</td><td>Duration(ns)</td><td>算子运行总耗时。</td></tr><tr><td>线程ID</td><td>TID</td><td>线程ID。
当选择Python和CANN泳道及其子泳道时存在。</td></tr><tr><td>进程ID</td><td>PID</td><td>进程ID。
当选择Python和CANN泳道及其子泳道时存在。</td></tr><tr><td>任务流名称</td><td>Stream Name</td><td>Ascend Hardware泳道下的Stream任务流名称。
仅当选择Ascend Hardware泳道及其子泳道时存在。</td></tr><tr><td>通信域名称</td><td>Group Name</td><td>通信算子集群名称。
仅当选择Communication泳道及其Group子泳道时存在。</td></tr><tr><td>分析算子类型</td><td>Analysis Type</td><td>分析算子类型。
仅当选择Overlap Analysis泳道及其子泳道时存在。</td></tr><tr><td>卡序号</td><td>Rank ID</td><td>算子所在卡序号。当选择Ascend Hardware、Communication和Overlap Analysis泳道及其子泳道时存在。</td></tr><tr><td>点击跳转Timeline</td><td>Click To Timeline</td><td>单击“点击”，跳转到算子在时间线视图上的具体位置，并且在“选中详情”页签展示该算子的详情。</td></tr></table>

# 说明

● Card层级不支持此功能。

● HBM、LLC、NPU_MEM、Stars Soc Info、acc_pmu等直方图泳道不支持此功能。

● Communication泳道下的Plane子泳道不支持此功能。

# 4.3 内存（Memory）

# 4.3.1 界面介绍

# 功能说明

内存（Memory）界面提供了采集过程中内存信息的可视化呈现。用户可以通过内存折线图对整体内存趋势一目了然，也可以框选放大折线图中峰值区域并结合算子内存信息精准定位到内存消耗大的算子。

# 界面展示（动态图场景）

内存（Memory）界面由参数配置栏（区域一）、算子内存折线图（区域二）、内存申请/释放详情表（区域三）三个部分组成，如图4-51所示。

# 说明

对于超过300万条的数据，在内存折线图表渲染时采用LTTB（Largest Triangle Three Buckets）算法进行降采样，以提升渲染性能，所以当数据量较大时，仅显示采样结果，将图表放大至较小范围时，可完整显示数据点。


图 4-51 动态图内存界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/1ee6fe77ad1899a0db91b2423bdcc6f155f56be32d7952d26ce023ae4a849a6d.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/fc7c8a1102a4b9ffa581d626f12e6ad0ce0960f12f4e0cdcbddc3c4fa7e76d72.jpg)


区域一：参数配置栏。

卡序号（Rank ID）：通过切换选项来查看不同卡的内存信息，切换之后整体界面即时刷新。

分组方式（Group By）：通过切换不同的维度来展示内存信息，分为“全局”、“流”和“组件”维度。

机器名称（Host Name）：仅当导入的db场景文件中存在名称为“HOST_INFO”的表时，存在该选项。

区域二：算子内存折线图。

算子分配（Operator Allocated）曲线表示算子在申请或释放内存时采集到的已分配内存的变化趋势，代表所有算子总的分配内存，此处采集到的内存数据由PyTorch和GE（Graph Engine，图引擎）申请。

算子保留（Operator Reserved）曲线表示算子在申请或释放内存时采集到的保留内存的变化趋势，代表所有算子总的保留内存，此处采集到的内存数据由PyTorch和GE申请。

算子持有（Operator Activated）曲线表示所持有的总内存，包括被其他流复用未释放的内存，此处采集到的内存数据由PyTorch中的流申请。如果没有“流”的信息，则没有算子持有曲线。

进程保留（APP Reserved）曲线表示整个进程保留的内存趋势。

当“分组方式”选择“组件”时，折线图中分别展示PyTorch的算子内存情况和GE的内存情况。

区域三：内存申请/释放详情表，详细展示了每个算子的内存信息，表格支持排序、分页和跳转功能。单击每列的表头，可根据当前列的升序、降序和默认排序呈现数据；还可单击表格右上角 $\Game$ 按钮，一键复制表中当前所展示的内容，并粘贴至Excel表格中进行分析。

# 界面展示（静态图场景）

内存（Memory）界面由参数配置栏（区域一）、算子内存折线图（区域二）、内存申请/释放详情表（区域三）三个部分组成，如图4-52所示。

# 说明

对于超过300万条的数据，在内存折线图表渲染时采用LTTB（Largest Triangle Three Buckets）算法进行降采样，以提升渲染性能，所以当数据量较大时，仅显示采样结果，将图表放大至较小范围时，可完整显示数据点。


图 4-52 静态图内存界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/c44649cff850ae94c1688eca0f595ed74e5b453bde6f11b325e1267f29d0616e.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/8de7a24e8b7ad2495dc14456b8aecdcfc4aa5e9829879941d6f421f61801f5d9.jpg)


区域一：参数配置栏，通过切换“卡序号”和“分组方式”的选项来查看不同卡的内存信息，切换之后整体界面即时刷新。

区域二：算子内存折线图，由动态折线图和静态折线图组成，但静态折线图仅在MindSpore数据场景下存在。

# a. 动态折线图：

算子分配（Operator Allocated）曲线表示算子在申请或释放内存时采集到的已分配内存的变化趋势，代表所有算子总的分配内存，此处采集到的内存数据由PyTorch和GE（Graph Engine，图引擎）申请。

算子保留（Operator Reserved）曲线表示算子在申请或释放内存时采集到的保留内存的变化趋势，代表所有算子总的保留内存，此处采集到的内存数据由PyTorch和GE申请。

算子持有（Operator Activated）曲线表示所持有的总内存，包括被其他流复用未释放的内存，此处采集到的内存数据由PyTorch中的流申请。

进程保留（APP Reserved）曲线表示整个进程保留的内存趋势。

# b. 静态折线图：

仅在MindSpore数据场景下存在。通过切换图序号（Graph ID）查看所选卡的内存分配情况。

大小（Size）：按节点索引（Index）动态申请的内存大小。

总大小（Total Size）：自动预设的内存最大值。

区域三：内存申请/释放详情表，详细展示了静态图中每个算子的内存信息，表格支持排序、分页和跳转功能。单击每列的表头，可根据当前列的升序、降序和默认排序呈现数据；还可单击一键复制按钮，复制表中当前所展示的内容，并粘贴至Excel表格中进行分析。

# 4.3.2 使用说明

# 支持切换卡

MindStudio Insight支持通过切换卡序号来查看不同卡的内存信息，单击界面上方卡序号的输入框，在下拉框选择需要查看的信息，切换之后界面将显示对应卡的算子内存折线图、内存申请/释放详情表，如图4-53所示。


图 4-53 切换卡序号


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/b8eb56d9b28dc0fa5735313596f5c0b166e40e7e856090d82ca0dd95888edf2c.jpg)


# 支持切换展示维度

MindStudio Insight支持通过切换分组方式来查看不同维度的算子内存折线图，单击界面上方分组方式的输入框，在下拉框选择需要查看的维度。该功能仅在动态图场景下支持。

全局：以全局为维度，统计算子在保留、分配和持有状态下的内存大小，以及PyTorch整体的保留内存大小，如图4-54所示。


图 4-54 全局维度


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/511f65f1a8609246eec6c0092d2146db43064b53b564ae877cd5cb21b7eccf50.jpg)


流：以流为维度，统计处于保留、分配和持有状态的算子内存大小，如图4-55所示。


图 4-55 流维度


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/56e7d834e77ef65013c9ae3a9d3338780cda531dfb4ad82e26e39946f97efecd.jpg)


组件：以组件为维度，分别统计PyTorch的算子在保留、分配和持有状态下的内存大小，GE的内存在保留、分配和持有状态下的大小情况，如图4-56所示。


图 4-56 组件维度


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/c32110ff57f7e9f9b585afe4f4d9ceeeea11c65a0c059427a752b48d1c8ddf15.jpg)


# 支持内存折线图局部放大和还原

MindStudio Insight支持通过鼠标左键框选放大选中部分和右键还原进行折线图的展示。为提升显示性能，折线图在数据量较大时会隐藏大部分点，可在框选到足够精细区域时显示所有点位，也可单击鼠标右键还原最初整体展示效果。

在折线图中单击鼠标左键拖至需要放大的终点位置并松开鼠标左键，框选部分将会被放大；如果还存在点被隐藏，重复放大操作即可展示被隐藏的点，选中放大区域如图4-57所示，放大后如图4-58所示。


图 4-57 选中放大区域


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/9ae13fad8c50dd2f56926520e6317bfe77f377bf8c99c4bf7229a25fe780c77a.jpg)



图 4-58 局部放大展示


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/5b6fff0d6cf4df5df24fec4d5d5f708e2c49d108f0e667c214947c5ce4467a39.jpg)


# 说明

● 单击折线图右上角 $\sqcup$ 按钮，使其为置灰状态，则折线图将锁定，不再支持鼠标左键框选放大功能；再次单击此按钮，或者单击鼠标右键即可恢复。放大功能默认开启。

● 单击折线图右上方 $\smile$ 按钮，折线图将会恢复最初状态。

# 支持搜索算子

MindStudio Insight支持搜索算子，在内存申请/释放详情表中，设置了筛选条件栏和控制按钮，可通过设置查询条件进行算子明细表的展示。查询条件为算子名称和算子占用内存大小区间范围（最小值和最大值），默认展示所选卡中算子占用内存大小的最小值和最大值，用户可根据实际需要进行调整。

单击“查询”后即可查询，单击“重置”将会重置查询条件并再次进行查询。

# 说明

在MindSpore静态图场景下，显示为静态图算子内存申请/释放详情表。其它场景下，则显示的是动态图算子内存申请/释放详情表。

动态图搜索如图4-59所示，搜索算子名称为aten相关且内存大小为0~65KB的算子，表格中字段解释如表4-21所示。

如果在搜索行勾选了“只显示在选中区间内分配或释放的”选项，那么查询到的算子即是在折线图中框选区域内分配或释放的算子。


图 4-59 搜索算子


<table><tr><td rowspan="2">名称:</td><td rowspan="2">atxn</td><td rowspan="2">最小值(KB):</td><td rowspan="2">0</td><td rowspan="2">最大值(KB):</td><td rowspan="2">65</td><td colspan="4">只显示在透镜区区间内分配给释放的</td></tr><tr><td>位移</td><td colspan="3">位置</td></tr><tr><td>名称</td><td colspan="2">大小(KB)</td><td>分配时间(ms)</td><td>释放时间(ms)</td><td>时长(ms)</td><td>总分配内存(MB)</td><td>总保留内存(MB)</td><td>总释放已分配内存(MB)</td><td>总保留保留内存(MB)</td></tr><tr><td>atxnadd</td><td colspan="2">1.5</td><td>3740.815</td><td>3746.884</td><td>0.069</td><td>5082.99</td><td>6454</td><td>5082.99</td><td>6454</td></tr><tr><td>atxnmean</td><td colspan="2">1.5</td><td>3746.753</td><td>3746.886</td><td>0.132</td><td>5082.99</td><td>6454</td><td>5082.99</td><td>6454</td></tr><tr><td>atxnadd</td><td colspan="2">1.5</td><td>3750.418</td><td>3750.478</td><td>0.06</td><td>5118.24</td><td>6454</td><td>5118.24</td><td>6454</td></tr><tr><td>atxnmean</td><td colspan="2">1.5</td><td>3750.363</td><td>3750.48</td><td>0.117</td><td>5118.24</td><td>6454</td><td>5118.24</td><td>6454</td></tr><tr><td>atxnempty_strided</td><td colspan="2">32.5</td><td>3720.545</td><td>3752.342</td><td>31.797</td><td>4583.4</td><td>6454</td><td>5188.21</td><td>6454</td></tr><tr><td>atxnones</td><td colspan="2">16.5</td><td>3721.421</td><td>3752.414</td><td>30.993</td><td>4647.42</td><td>6454</td><td>5188.19</td><td>6454</td></tr><tr><td>atxnempty_strided</td><td colspan="2">0.5</td><td>3759.315</td><td>3760.179</td><td>0.864</td><td>5188.19</td><td>6454</td><td>5108.19</td><td>6454</td></tr><tr><td>atxnarange</td><td colspan="2">32.5</td><td>3761.33</td><td>3761.448</td><td>0.118</td><td>5252.27</td><td>6454</td><td>5204.24</td><td>6454</td></tr><tr><td>atxnit</td><td colspan="2">4.5</td><td>3761.631</td><td>3761.755</td><td>0.124</td><td>5204.26</td><td>6454</td><td>5204.25</td><td>6454</td></tr><tr><td>atxnge</td><td colspan="2">4.5</td><td>3761.695</td><td>3761.759</td><td>0.064</td><td>5204.25</td><td>6454</td><td>5204.25</td><td>6454</td></tr></table>


表 4-21 动态图字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>名称</td><td>Name</td><td>算子名称。</td></tr><tr><td>大小(KB)</td><td>Size(KB)</td><td>申请内存大小，单位KB。</td></tr><tr><td>分配时间(ms)</td><td>Allocation Time(ms)</td><td>Tensor内存分配时间。（从采集开始时计算，单位ms）。</td></tr><tr><td>释放时间(ms)</td><td>Release Time(ms)</td><td>Tensor内存释放时间。（从采集开始时计算，单位ms）。</td></tr><tr><td>时长(ms)</td><td>Duration(ms)</td><td>内存持有时间。</td></tr><tr><td>持有内存释放时间(ms)</td><td>Active Release Time(ms)</td><td>内存实际归还内存池时间。</td></tr><tr><td>内存持有时长(ms)</td><td>Active Duration(ms)</td><td>内存实际占用时间。</td></tr><tr><td>总分配内存(MB)</td><td>Allocation Total Allocated(MB)</td><td>算子内存分配时，PyTorch和GE内存实际分配总额。</td></tr><tr><td>总保留内存(MB)</td><td>Allocation Total Reserved(MB)</td><td>算子内存分配时，PyTorch和GE内存预留总额。</td></tr><tr><td>总持有内存(MB)</td><td>Allocation Total Active(MB)</td><td>算子内存分配时，当前流所申请的总内存（包括被其他流复用的未释放的内存）。</td></tr><tr><td>总释放已分配内存(MB)</td><td>Release Total Allocated(MB)</td><td>算子内存释放后，内存池中PyTorch和GE正在使用的内存大小。</td></tr><tr><td>总释放保留内存(MB)</td><td>Release Total Reserved(MB)</td><td>算子内存释放后，内存池中PyTorch和GE所占用的内存大小。</td></tr><tr><td>总释放持有内存(MB)</td><td>Release Total Active(MB)</td><td>算子内存释放后，PyTorch和GE内存中被其他流复用的内存总额。</td></tr><tr><td>流</td><td>Stream</td><td>AscendCL流的内存地址，用于标记不同的 AscendCL流。</td></tr><tr><td>操作</td><td>Operation</td><td>单击“在时间线中显示”，可跳转至时间线视图中对应算子。</td></tr></table>

静态图模式下，搜索功能如图4-60所示，搜索算子名称中包含data相关且内存大小为0~35KB的算子，表格中字段解释如表4-22所示。


图4-60 静态图搜索算子


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/2ae1ce07bc23afd88d39c727ac409c5d33565473343d2dc889c1032e816b4544.jpg)



表 4-22 静态图字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>设备序号</td><td>Device ID</td><td>申请内存的设备序号，默认host。</td></tr><tr><td>名称</td><td>Name</td><td>算子名称。</td></tr><tr><td>节点索引开始</td><td>Node Index Start</td><td>搜索开始节点。</td></tr><tr><td>节点索引结束</td><td>Node Index End</td><td>搜索结束节点。其中显示为“4294967295”的值为索引最终结束节点，该节点在静态图中表示为实际结束节点加1的节点，例如，实际结束节点为32，静态图中横坐标节点索引则显示33，表格中节点索引结束值显示为“4294967295”。</td></tr><tr><td>大小(MB)</td><td>Size(MB)</td><td>申请内存大小，单位MB。</td></tr><tr><td>操作</td><td>Operation</td><td>单击“在时间线中显示”，可跳转至时间线视图中对应算子。</td></tr></table>

当“分组方式”选择“组件”时，不支持算子搜索功能。界面如图4-61所示，字段解释如表4-23所示。


图 4-61 组件级内存申请/释放详情


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/9469c5862e341d092d52e2adb7e5721d8340946bdbb9641b81623d24e2dc3c2b.jpg)



表 4-23 字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>组件</td><td>Component</td><td>组件名称。</td></tr><tr><td>保留内存峰值 (MB)</td><td>Peak Memory Reserved(MB)</td><td>组件占用内存大小的峰值，单位MB。只显示占用内存峰值大于等于100M的组件。</td></tr><tr><td>时间戳(ms)</td><td>Timestamp(ms)</td><td>组件内存占用达到峰值的时刻，单位ms。</td></tr></table>

# 支持高亮显示

当“分组方式”选择“全局”时，将鼠标移入表格中某条数据时（前提是折线图放大到足以展示表格中所有算子），若折线图上方显示了该条数据对应的点位（包括分配时间和释放时间），则折线图上对应点会有高亮效果出现，方便快速定位到该算子所在位置。

# 说明

当“分组方式”选择“组件”时，不支持高亮显示。

将鼠标放置在表格中红框位置，折线图立即高亮显示算子所在位置，如图4-62所示。


图 4-62 算子高亮显示


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/15c2b73658b2ac95dcb24e3060f0e185d26e105b5df6a3cba38136fc4ee4bc08.jpg)


# 支持卡间性能对比

MindStudio Insight支持卡间内存性能对比，设置对比数据请参见数据对比。

在卡间性能对比模式下，“卡序号”是固定的，不能进行切换；“分组方式”仅支持选择“全局”和“组件”。算子内存折线图中将显示两个卡的内存变化，可直观地查看两卡间的内存对比趋势。内存申请/释放详情表中会显示两卡间的数据差异详情，并

可按名称与内存大小搜索相关算子，此时，输入的内存最小值可为负值，且搜索条件仅限于对比结果，如图4-63所示。

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/9e444c38b756076c82bd32e33080e43e8d273c7538fb7913b1caf5321f66a52a.jpg)


当“分组方式”选择“组件”时，不支持在内存申请/释放详情表中搜索算子。

单击内存申请/释放详情表中“详情”列的“查看更多”，可显示基线数据和对比数据的详情。


图 4-63 性能对比


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/06d35b66063e3cfd6bc9bc527fccf59263f2bba3a6cc382b082949a23a26d129.jpg)


# 4.4 算子（Operator）

# 4.4.1 界面介绍

# 功能说明

算子（Operator）视图旨在通过分析计算算子和通信算子耗时数据帮助开发者快速分析性能瓶颈。

# 界面展示

算子（Operator）界面由参数配置栏（区域一）、耗时百分比饼状图（区域二）、耗时统计及详情数据表（区域三）三个部分组成，如图4-64所示。


图 4-64 算子界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/900c77ff942c521b3656cf8d5b44b2dbe6ad90bc0088f0c905bf0dcb29d8d96e.jpg)


区域一：参数配置栏，参数详细说明如表4-24所示。


表4-24 参数配置


<table><tr><td>中文参数</td><td>英文参数</td><td>说明</td></tr><tr><td>分组方式</td><td>Group by</td><td>• 计算算子（Computing Operator）：展示所有计算算子的详细信息，帮助开发者找到耗时较大的计算算子。
• 计算算子类型（Computing Operator Type）：统计相同类型的计算算子，计算其总耗时、最大耗时及平均耗时等信息，并支持查看特定类型下的计算算子详情信息，帮助开发者快速识别特定类型计算算子性能瓶颈，如AI CPU算子等。
• 计算算子名称和输入shape（Computing Operator Name and Input Shape）：统计相同类型和Input Shape的算子，计算其总耗时、最大耗时及平均耗时等信息，并支持查看特定类型下的算子详情信息，帮助开发者快速识别某类型算子在特定Input下的性能瓶颈。
• 通信算子（Communication Operator）：展示所有通信算子的详细信息，帮助开发者找到耗时较大的通信算子。
• 通信算子类型（Communication Operator Type）：统计相同类型的通信算子，计算其总耗时、最大耗时及平均耗时等信息，并支持查看特定类型下的通信算子详情信息，帮助开发者快速识别特定类型通信算子性能瓶颈。</td></tr><tr><td>卡序号</td><td>Rank ID</td><td>支持按单卡维度展示算子性能数据。</td></tr><tr><td>前</td><td>Top</td><td>可通过配置Top参数值选择展示总耗时最长的TopN条数据，默认值为15；选择自定义（Custom）时，可以自定义数据条数。</td></tr><tr><td>机器名称</td><td>Host Name</td><td>仅当导入的db场景文件中存在名称为“HOST_INFO”的表时，存在该选项。</td></tr></table>

区域二：耗时百分比饼状图。

当“分组方式”选择“计算算子”、“计算算子类型”或“计算算子名称和输入shape”时，页面会显示2个饼状图，左边展示不同计算算子类型耗时的占比，此视图受区域一中前（Top）配置影响，只显示Top N或全部计算算子或计算算子类型的占比；右边展示的为Top N或全部计算算子/计算算子类型按加速核耗时占比情况，如AI Core、AI CPU等。

当“分组方式”选择“通信算子”或“通信算子类型”时，页面显示1个饼状图，展示不同通信算子类型耗时的占比，视图受区域一中前（Top）配置影响，只显示Top N或全部通信算子或通信算子类型的占比。

区域三：耗时统计及详情数据表，展示算子统计信息或者详细信息数据，可以通过单击“查看更多”进一步查看详细信息；也可单击表格右上方的“导出”按钮，将算子详情表中的所有数据导出为.csv格式的文件。

# 4.4.2 使用说明

# 计算算子（Computing Operator）

当“分组方式”选择“计算算子”时显示该页面，可以看到单个计算算子维度的详情信息，以快速找到特定计算算子性能问题，如图4-65所示，“算子详情”中的字段解释如表4-25所示，单击字段后方的 $\bigtriangledown$ ，可对相关字段进行模糊搜索。


图4-65 计算算子


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/954823ee26d19046e165a0e7b3634e9c404c24eefb307e6e92580ace81fb2269.jpg)



表 4-25 计算算子字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>名称</td><td>Name</td><td>算子名称。</td></tr><tr><td>类型</td><td>Type</td><td>算子类型。</td></tr><tr><td>加速器核</td><td>Accelerator Core</td><td>AI加速核类型，包括AI Core、AI CPU等。</td></tr><tr><td>开始时间 (ms)</td><td>Start Time(ms)</td><td>算子执行开始时间。</td></tr><tr><td>时长(μs)</td><td>Duration(μs)</td><td>当前算子执行耗时。</td></tr><tr><td>等待时间(μs)</td><td>Wait Time(μs)</td><td>算子执行等待时间。</td></tr><tr><td>Block数量</td><td>Block Dim</td><td>运行切分数量，对应任务执行时的核数。</td></tr><tr><td>输入Shapes</td><td>Input Shapes</td><td>算子输入Shape。</td></tr><tr><td>输入数据类型</td><td>Input Data Types</td><td>算子输入数据类型。</td></tr><tr><td>输入格式</td><td>Input Formats</td><td>算子输入数据格式。</td></tr><tr><td>输出Shapes</td><td>Output Shapes</td><td>算子输出Shape。</td></tr><tr><td>输出数据类型</td><td>Output Data Types</td><td>算子输出数据类型。</td></tr><tr><td>输出格式</td><td>Output Formats</td><td>算子输出数据格式。</td></tr></table>

# 说明

如果在MindStudio Insight工具导入的性能文件中包含采集的寄存器数值，那么计算算子详情中会呈现aicore_time、aic_total_cycles等相关参数，具体参数信息请参见《性能调优工具指南》中的“性能数据文件参考 $>$ op_summary（算子详细信息）”章节内容。

# 计算算子类型（Computing Operator Type）

当“分组方式”选择“计算算子类型”时显示该页面，可以看到不同计算算子类型算子的耗时占比和详细数据，以快速找到特定类型的计算算子性能问题，如图4-66所示，“算子详情”中的字段解释如表4-26所示，单击字段后方的 $\bigtriangledown$ ，可对相关字段进行模糊搜索。


图 4-66 计算算子类型


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/93a0f725e6f9128364b8d097d244d417604ea1f99946841555967d0b36e6bf03.jpg)



表 4-26 计算算子类型字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>类型</td><td>Type</td><td>算子类型。</td></tr><tr><td>加速器核</td><td>Accelerator Core</td><td>AI加速核类型，包括AI Core、AI CPU等。</td></tr><tr><td>数量</td><td>Count</td><td>算子执行次数。</td></tr><tr><td>总耗时(μs)</td><td>Total Time(μs)</td><td>算子执行总时间。</td></tr><tr><td>平均耗时 (μs)</td><td>Avg Time(μs)</td><td>算子执行平均时间。</td></tr><tr><td>最大耗时 (μs)</td><td>Max Time(μs)</td><td>算子执行的最大时间。</td></tr><tr><td>最小耗时 (μs)</td><td>Min Time(μs)</td><td>算子执行的最小时间。</td></tr><tr><td>详情</td><td>Details</td><td>单击“详情”列中“查看更多”，可以展示单个计算算子的具体信息，详情请参见表4-25。</td></tr></table>

# 计算算子名称和输入 shape（Computing Operator Name and Input Shape）

当“分组方式”选择“计算算子名称和输入shape”时显示该页面，可以看到不同算子类型的计算算子在特定输入Shape下的耗时占比和详细数据，以快速找到是否存在某个输入Shape下的算子性能问题，如图4-67所示，“算子详情”中的字段解释如表4-27所示，单击字段后方的 $\bigtriangledown$ ，可对相关字段进行模糊搜索。


图 4-67 计算算子名称和输入 shape


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/ce5aa85310502d5fb6240ef29a235d029b1af368645ac368a009b3944f02cf16.jpg)



表 4-27 计算算子名称和输入 shape 字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>名称</td><td>Name</td><td>算子名称。</td></tr><tr><td>Shape</td><td>Shape</td><td>算子输入Shape。</td></tr><tr><td>加速器核</td><td>Accelerator Core</td><td>AI加速核类型，包括AI Core、AI CPU等。</td></tr><tr><td>数量</td><td>Count</td><td>算子执行次数。</td></tr><tr><td>总耗时(μs)</td><td>Total Time(μs)</td><td>算子执行总时间。</td></tr><tr><td>平均耗时 (μs)</td><td>Avg Time(μs)</td><td>算子执行平均时间。</td></tr><tr><td>最大耗时 (μs)</td><td>Max Time(μs)</td><td>算子执行的最大时间。</td></tr><tr><td>最小耗时 (μs)</td><td>Min Time(μs)</td><td>算子执行的最小时间。</td></tr><tr><td>详情</td><td>Details</td><td>单击“详情”列中“查看更多”，可以展示单个算子的具体信息，详情请参见表4-25。</td></tr></table>

# 通信算子（Communication Operator）

当“分组方式”选择“通信算子”时显示该页面，可以看到单个通信算子维度的详情信息，以快速找到特定通信算子性能问题，如图4-68所示，“算子详情”中的字段解释如表4-28所示，单击字段后方的 $\bigtriangledown$ ，可对相关字段进行模糊搜索。


图 4-68 通信算子


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/613d7f328d36d474dcd7ddad7f690a96f5ee009e49c5a36c3091a3cb0beb242c.jpg)



表 4-28 通信算子字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>名称</td><td>Name</td><td>通信算子名称。</td></tr><tr><td>类型</td><td>Type</td><td>通信算子类型。</td></tr><tr><td>开始时间 (ms)</td><td>Start Time(ms)</td><td>通信算子执行开始时间。</td></tr><tr><td>时长(μs)</td><td>Duration(μs)</td><td>当前通信算子执行耗时。</td></tr><tr><td>等待时间(μs)</td><td>Wait Time(μs)</td><td>通信算子执行等待时间。</td></tr></table>

# 通信算子类型（Communication Operator Type）

当“分组方式”选择“通信算子类型”时显示该页面，可以看到不同通信算子类型算子的耗时占比和详细数据，以快速找到特定类型的通信算子性能问题，如图4-69所示，“算子详情”中的字段解释如表4-29所示，单击字段后方的 $\bigtriangledown$ ，可对相关字段进行模糊搜索。


图 4-69 通信算子类型


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/4b1ab1da5b1b099641fc17ce3dc5c488bf75d8fe7078010215d3c450c3d6c7ab.jpg)



表4-29 通信算子类型字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>类型</td><td>Type</td><td>通信算子类型。</td></tr><tr><td>数量</td><td>Count</td><td>通信算子执行次数。</td></tr><tr><td>总耗时(μs)</td><td>Total Time(μs)</td><td>通信算子执行总时间。</td></tr><tr><td>平均耗时(μs)</td><td>Avg Time(μs)</td><td>通信算子执行平均时间。</td></tr><tr><td>最大耗时(μs)</td><td>Max Time(μs)</td><td>通信算子执行的最大时间。</td></tr><tr><td>最小耗时(μs)</td><td>Min Time(μs)</td><td>通信算子执行的最小时间。</td></tr><tr><td>详情</td><td>Details</td><td>单击“详情”列中“查看更多”，可以展示单个通信算子的具体信息，详情请参见表4-28。</td></tr></table>

# 支持两卡间数据对比

MindStudio Insight支持卡间算子性能对比，可帮助开发者直观明了地查看两卡差异，便于分析，设置基线数据和对比数据的操作请参见数据对比。

在卡间对比模式下，算子（Operator）界面不展示耗时百分比饼状图，只展示算子详情表，且“卡序号”是固定的，不能进行切换，“分组方式”可按需进行选择，还可配置展示TopN条数据。

算子详情表展示的是两卡间的差值，单击“详情”列中“查看更多”，可以展示基线数据和对比数据的详情，如图4-70所示，字段解释可分别参见各分组方式对应的字段解释，图中展示的是“分组方式”为“计算算子类型”的数据对比详情。


图 4-70 算子对比


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/8fa48b42d594f2a2fe78bf8558ebaefc2cc4e4733a1e7bb602a3169fd855a48e.jpg)


# 4.5 概览（Summary）

# 4.5.1 界面介绍

# 功能说明

概览（Summary）界面提供通信域识别、划分和耗时拆解、分析功能。支持自动识别通信域，用户也可自行配置；支持按照通信域对比stage耗时、计算耗时和通信耗时，从而分析同一通信域内的切分是否均匀，是否存在通信慢卡和慢链路问题，帮助开发者快速识别问题。

# 界面展示

概览（Summary）界面由基本信息（Base Info）（区域一）、并行策略分析（Parallel Strategy Analysis）（区域二）和MoE大模型专家负载均衡分析（MoEExpert Load Balancing Analysis）（区域三）组成，如图4-71所示。


图 4-71 概览界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/62c2bdeef24ee180db9d2f5bbd5dae1acb830f484ebc939d781762a1bd05329e.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/f47fbd2af80a080c176bfce6d2afae1db98541c1f5d17d7a47a47b7e42955512.jpg)


区域一：集群（Cluster ）选框和基本信息（Base Info），当导入集群数据时，下拉框支持选择某一集群；数据的基本信息，包括设备和迭代数量、性能数据文件大小、数据采集时长等信息。

区域二：并行策略分析（Parallel Strategy Analysis），包括并行策略概览、计算/通信概览、计算详情（Rank ID）、通信详情（Rank ID）以及流水并行图。

并行策略概览包括并行策略设置、并行策略图展示和专家建议，如图4-72所示，并行策略参数解释如表4-30所示。当设置好并行策略后，可分别选择“DP + PP”、“DP + PP + CP”、“DP + PP + TP”或“DP + PP + CP +TP”并行维度展示并行策略图，选择图中目标编号，可悬浮显示该目标编号的详情信息，进行查看；也可单击鼠标右键弹出菜单，单击“复制属性”，复制当前目标编号的详情信息，粘贴至本地进行查看分析。

当通信时间能正确按照通信域拆解时，会显示专家建议内容。


图 4-72 并行策略概览


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/6178e2c10009393e0a094da0b7ca26011c6adb65cfa1a1dc986eaea3043223c6.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/c8180b4b00e06833f7752cafe01a5ecdff1b3fb9fb4a4161c9f7f26fd959faf8.jpg)



表 4-30 并行策略参数说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>算法</td><td>Algorithm</td><td>·Megatron-LM(tp-cp-ep-dp-pp):此排布方式来自于Megatron-Core,排布的顺序是TP&gt;CP&gt;DP&gt;PP,EP横跨DP之上且不参与或不影响排布编号(即要求DP能够被EP整除),PP位于DP之后,多为跨节点通信,对通信带宽要求低。·Megatron-LM(tp-cp-pp-ep-dp):此排布方式也来自于Megatron-Core,排布的顺序是TP&gt;CP&gt;PP&gt;DP,比较少见,用于PP对带宽要求相对比较高的场景。·MindSpeed(tp-cp-ep-dp-pp):此排布方式来自于MindSpeed-Core,排布的顺序是TP&gt;CP&gt;DP&gt;PP,EP横跨CP+DP之上且不参与或不影响排布编号(即要求CP×DP能够被EP整除)。·MindIE-LLM(tp-dp-ep-pp-moetp):此排布方式来自于MindIE-LLM(DeepSeek V3也使用类似排布),非MoE层采用TP&gt;DP&gt;PP顺序排布,MoE层采用MOE_TP&gt;EP&gt;PP顺序排布,当MOE_TP=1时,形成横跨PP相同Stage的大规模专家并行方案。·vLLM(tp-pp-dp-ep):此排布方式来自于vLLM,排布顺序是TP&gt;PP&gt;DP,EP横跨TP+DP之上且不参与或不影响排布序号(即要求TP×DP能被EP整除),形成大规模专家并行方案(即要求EP能被TP整除),当选择vLLM(tp-pp-dp-ep)算法时,PP大小xTP大小xDP大小≥导入的卡数量。</td></tr><tr><td>PP大小</td><td>PP Size</td><td>流水线并行大小。可自行配置,取值范围:1~10000。流水线并行(Pipeline Parallel)通过将模型的不同层次分布在不同的卡上执行,在一个卡执行当前批次数据时,另一个卡可以处理下一个批次的数据。</td></tr><tr><td>TP大小</td><td>TP Size</td><td>张量并行大小。可自行配置,取值范围:1~10000。张量并行(Tensor Parallel)是一种将模型参数划分成多个部分,并分布到不同卡上进行计算。</td></tr><tr><td>CP大小</td><td>CP Size</td><td>上下文并行大小。可自行配置,取值范围:1~10000。上下文并行(Context Parallel)将训练样本按序列长度和维度划分为不同批次,分配到不同卡上进行计算。CP分割网络输入和所有激活值,是改进版的序列并行(Sequence Parallelism, SP)。</td></tr><tr><td>DP大小</td><td>DP Size</td><td>数据并行大小。可自行配置,取值范围:1~10000。数据并行(Data Parallel)将训练集分成不同多个批次,分配到不同卡上进行计算。</td></tr><tr><td>EP大小</td><td>EP Size</td><td>专家并行大小。可自行配置,取值范围:1~10000。专家并行(Expert Parallel)是一种专门为MoE模型(Mixture of Experts)设计的并行方法。它将专家分配到不同的计算设备上,每个设备负责处理一部分训练样本,并且每个设备上可以包含一个或多个专家。·当选择Megatron-LM算法时,EP大小应小于等于DP大小,且DP可被EP整除。·当选择MindSpeed算法时,DP X CP应能被EP整除。</td></tr><tr><td>MoE-TP大小</td><td>MoE-TP Size</td><td>仅当算法选择“MindIE-LLM(tp-dp-ep-pp-moetp)”时,才存在此参数。推理并行策略中,MoE层的张量并行大小,区别于非MoE层的TP。可自行配置,取值范围:1~10000。且需满足以下取值规则:·PP大小 x TP大小 x DP大小 = 导入的卡数量·TP大小 x DP大小 = MoE-TP大小 x EP大小</td></tr><tr><td>性能指标</td><td>Performance Metric</td><td>可按照性能指标展示并行策略图,可选的性能指标参数根据选择的域维度而变化。·当选择“无”时,表示不展示性能指标,即并行策略图上的卡片信息为默认状态。·当选择其余参数时,会在选框后显示该参数的“筛选范围 (μs)”和色条,筛选范围值为该参数值的最小值和最大值,且并行策略图上的卡片会按照对应值被渲染填色,可直观的查看各卡性能情况。</td></tr><tr><td>目标编号</td><td>Target Index</td><td>在所选维度下,输入目标编号,可准确定位到所需的序号上。</td></tr><tr><td>专家建议</td><td>Advice</td><td>通过MindStudio Insight工具的内置专家分析功能，对数据进行分析，并给出相应建议，列出应关注的Top3分组以及慢卡信息，帮助开发者识别性能问题。</td></tr></table>

# 说明

为确保通信时间能正确按照通信域拆解（即性能指标中的TP-通信时间、PP-通信时间、MP-通信时间、DP-通信时间、CP-通信时间等），需保证并行策略参数值与模型实际训练/推理时的并行参数配置一致。具体的并行参数，可与模型开发人员确认。

计算/通信概览（Computation/Communication Overview），计算及通信概览，柱状图展示计算或通信算子的迭代耗时数据，折线图展示计算或通信算子的耗时占比数据，专家建议（Advice）是对计算通信域内各卡的计算时间、通信时间（未被覆盖）和空闲时间进行数据分析后给出的建议，帮助开发者快速分析，如图4-73所示，参数解释请参见表4-31所示。

当选择“DP + PP + CP + TP”和“DP + PP + TP”并行维度时，计算/通信概览中存在折线图和专家建议。


图 4-73 计算/通信概览


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/05e8a4f1a08e3e1e23049d7495e8489750e1984b9e5f6f12fc854b1fae55274f.jpg)



表 4-31 计算/通信概览参数说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>迭代ID</td><td>Step</td><td>迭代ID，下拉框支持选择某一个迭代或者所有迭代。</td></tr><tr><td>通信域</td><td>Rank Group</td><td>节点ID，下拉框支持选择一个、多个或者所有节点。</td></tr><tr><td>排序方式</td><td>Order By</td><td>根据不同维度选择排序方式。
·DP + PP + CP + TP维度和DP + PP + TP维度 - 卡序号（Rank ID）：卡序号。
- 计算时间（未被覆盖）（Computing(Not Overlapped)）：计算时间（未被覆盖）=计算时间 - 计算通信间覆盖时间。
- 计算通信间覆盖时间（Computing_Communication Overlapped）：被计算覆盖的通信时长。
- 通信时间（未被覆盖）（Communication(Not Overlapped)）：通信时间（未被覆盖）=通信时间 - 计算通信间覆盖时间。
- 空闲时间（Free）：Device侧既不在通信也不在计算的时间。此处的Free不计入预处理时间。
- 预处理时间（Preparing）：迭代开始到首个计算或通信算子运行的时间，在做数据加载拷贝等操作。在时间线（Timeline）的Overlap Analysis泳道中，也被视为Free。
- 计算占比（Computing Ratio）：计算时间占总时间的占比，总时间=计算时间（未被覆盖）+计算通信间覆盖时间+通信时间（未被覆盖）+空闲时间+预处理时间。
- 通信占比（Communication Ratio）：通信时间占总时间的占比。
·DP + PP + CP维度：排序方式分别为卡序号、最大计算时间、最大通信时间、最大空闲时间、最大总时间（计算、通信（未被覆盖）、空闲时间的总和）。各参数的“最大”是指每个TP通信域内取最大值。
·DP + PP维度：排序方式分别为卡序号、最大计算时间、最大通信时间、最大空闲时间、最大总时间（计算、通信（未被覆盖）、空闲时间的总和）、最大通信时间（未被覆盖）。各参数的“最大”是指对每个DP + PP + CP维度通信域内取最大值。</td></tr><tr><td>前</td><td>Top</td><td>可通过配置Top参数值选择展示“排序方式”的TopN条数据。</td></tr><tr><td>Time(μs)</td><td>Time(μs)</td><td>左侧纵坐标表示时长，单位μs。计算方式如下：总时间 = 计算时间（未被覆盖）+ 计算通信间覆盖时间 + 通信时间（未被覆盖）+ 空闲时间 + 预处理时间，其中Preparing为数据预处理时间。</td></tr><tr><td>Ratio</td><td>Ratio</td><td>右侧纵坐标表示耗时占比，包括以下占比信息：· 总计算比例（Computing Ratio）：总计算耗时占比 = 总计算时间 / 总时间。
· 通信比例（Communication Ratio）：通信耗时占比 = 未被覆盖的通信时长 / 总时间。</td></tr><tr><td>专家建议</td><td>Advice</td><td>慢卡分析定位与建议，对各并行维度下的通信时间进行解析分析，帮助开发者逐步定位慢卡。</td></tr></table>

计算详情（Rank ID）（Computing Detail（Rank ID）），当选择“DP +PP + CP + TP”和“DP + PP + TP”并行维度时，单击计算/通信概览区域中某个节点的柱状图时，将展示该节点加速核的总耗时和利用率，单击对应的“详情”后展示计算算子的详细信息，如图4-74所示，字段解释如表4-32所示。还可单击表格右上角 $\boxed { \begin{array} { r l } \end{array} }$ 按钮，一键复制表中当前所展示的内容，并粘贴至Excel表格中进行分析。

图4-74 计算算子详细信息

<table><tr><td colspan="3">加速度场</td><td colspan="7">加速度场时长(μs)</td><td colspan="5">评卷</td></tr><tr><td colspan="3">Al_CORE</td><td colspan="7">34961</td><td colspan="5">评卷</td></tr><tr><td>名称</td><td>0 测型</td><td>0 开始时间(ms)</td><td>0 时刻(psi)</td><td>0 停停时间(psi)</td><td>0 Block数量</td><td>0 能入Shapes</td><td>0 输入数据类型</td><td>0 输入格式</td><td>0 输出格式</td><td>0 输出数据类型</td><td>0 输出格式</td><td>0</td><td></td><td></td></tr><tr><td>ZeroLike</td><td>ZeroLike</td><td>67.631</td><td>496.8508</td><td>0</td><td>48</td><td>“323138240”</td><td>FLOAT</td><td>FORMAT_NO</td><td>“323138240”</td><td>FLOAT</td><td>FORMAT_NO</td><td>0</td><td></td><td></td></tr><tr><td>Cast</td><td>Cast</td><td>76.916</td><td>5.7895</td><td>11.041</td><td>33</td><td>“2,8191”</td><td>INT64</td><td>FORMAT_NO</td><td>“2,8191”</td><td>INT32</td><td>FORMAT_NO</td><td></td><td></td><td></td></tr><tr><td>Slice</td><td>Slice</td><td>77.2348</td><td>1.9795</td><td>312.9515</td><td>2</td><td>“2,8190,22”</td><td>INT32/INT64/INT64</td><td>FORMAT_NO/FORMAT_</td><td>“2,8192”</td><td>INT32</td><td>FORMAT_NO</td><td></td><td></td><td></td></tr><tr><td>Slice</td><td>Slice</td><td>77.5268</td><td>1.7395</td><td>290.0205</td><td>2</td><td>“2,8190,22”</td><td>INT32/INT64/INT64</td><td>FORMAT_NO/FORMAT_</td><td>“2,8192”</td><td>INT32</td><td>FORMAT_NO</td><td></td><td></td><td></td></tr><tr><td>OneLike</td><td>OneLike</td><td>77.7395</td><td>169.5759</td><td>211.0105</td><td>48</td><td>“1,8192,8192”</td><td>FLOAT</td><td>FORMAT_NO</td><td>“1,8192,8192”</td><td>FLOAT</td><td>FORMAT_NO</td><td></td><td></td><td></td></tr><tr><td>atomic_menset-1_70...</td><td>Menset</td><td>77.909</td><td>4.6188</td><td>0</td><td>4</td><td>“...”</td><td>UNKNOWN</td><td>NULL</td><td>“...”</td><td>UNKNOWN</td><td>NULL</td><td></td><td></td><td></td></tr><tr><td>Tnl</td><td>Tnl</td><td>77.9138</td><td>369.064</td><td>0.1312</td><td>1639</td><td>“1,8192,8192”</td><td>FLOAT</td><td>FORMAT_NO</td><td>“1,8192,8192”</td><td>FLOAT</td><td>FORMAT_NO</td><td></td><td></td><td></td></tr><tr><td>OneLike</td><td>OneLike</td><td>76.2828</td><td>3.2192</td><td>0</td><td>16</td><td>“2,8192”</td><td>FLOAT</td><td>FORMAT_NO</td><td>“2,8192”</td><td>FLOAT</td><td>FORMAT_NO</td><td></td><td></td><td></td></tr><tr><td>Less</td><td>Less</td><td>78.404</td><td>289.1048</td><td>118.0008</td><td>48</td><td>“1,1,8192,8192”</td><td>FLOAT/FLOAT</td><td>NCHW/NCHW</td><td>“1,1,8192,8192”</td><td>BOLD</td><td>NCHW</td><td></td><td></td><td></td></tr><tr><td>Cast</td><td>Cast</td><td>78.817</td><td>3.2392</td><td>123.8952</td><td>16</td><td>“2,8192”</td><td>INT32</td><td>FORMAT_NO</td><td>“2,8192”</td><td>FLOAT</td><td>FORMAT_NO</td><td></td><td></td><td></td></tr></table>


表4-32 计算详情字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>加速器核</td><td>Accelerator Core</td><td>AI加速核类型，包括AI Core、AI CPU等。</td></tr><tr><td>加速器核时长(μs)</td><td>Accelerator Core Durations(μs)</td><td>加速核的总耗时。</td></tr><tr><td>名称</td><td>Name</td><td>算子名称。</td></tr><tr><td>类型</td><td>Type</td><td>算子类型。</td></tr><tr><td>开始时间(ms)</td><td>Start Time(ms)</td><td>算子执行开始时间。</td></tr><tr><td>时长(μs)</td><td>Duration(μs)</td><td>当前算子执行耗时。</td></tr><tr><td>等待时间(μs)</td><td>Wait Time(μs)</td><td>算子执行等待时间。</td></tr><tr><td>Block数量</td><td>Block Dim</td><td>运行切分数量，对应任务执行时的核数。</td></tr><tr><td>输入Shapes</td><td>Input Shapes</td><td>算子输入Shape。</td></tr><tr><td>输入数据类型</td><td>Input Data Types</td><td>算子输入数据类型。</td></tr><tr><td>输入格式</td><td>Input Formats</td><td>算子输入数据格式。</td></tr><tr><td>输出Shapes</td><td>Output Shapes</td><td>算子输出Shape。</td></tr><tr><td>输出数据类型</td><td>Output Data Types</td><td>算子输出数据类型。</td></tr><tr><td>输出格式</td><td>Output Formats</td><td>算子输出数据格式。</td></tr></table>

通信详情（Rank ID）（Communication Detail（Rank ID）），当选择“DP+ PP + CP + TP”和“DP + PP + TP”并行维度时，单击计算/通信概览区域中某个节点的柱状图时，将展示该节点通信算子的总耗时（包含未被覆盖的通信时长和被覆盖的通信时长），单击对应的“详情”后展示通信算子的详细信息，如图4-75所示，字段解释如表4-33所示。还可单击表格右上角 $\sqsubseteq$ 按钮，一键复制表中当前所展示的内容，并粘贴至Excel表格中进行分析。

# 说明

如果导入的是db场景文件，则不显示通信详情（Rank ID）区域。


图4-75 通信算子详细信息


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/d85972130f26802ada72a2c096470bb6e980ae91629156300e57b4b9382952b2.jpg)



表4-33 通信详情字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>加速器核</td><td>Accelerator Core</td><td>AI加速核类型，包括AI Core、AI CPU等。</td></tr><tr><td>通信时长（未重叠部分）(μs)</td><td>Communication(Not Overlapped) 
Durations(μs)</td><td>未被覆盖的通信时长，即纯通信时长。</td></tr><tr><td>通信时长（重叠部分）(μs)</td><td>Communication(Over lapped) 
Durations(μs)</td><td>被覆盖的通信时长。</td></tr><tr><td>名称</td><td>Name</td><td>通信算子名称。</td></tr><tr><td>类型</td><td>Type</td><td>通信算子类型。</td></tr><tr><td>开始时间(ms)</td><td>Start Time(ms)</td><td>通信算子执行开始时间。</td></tr><tr><td>时长(μs)</td><td>Duration(μs)</td><td>当前通信算子执行耗时。</td></tr><tr><td>等待时间(μs)</td><td>Wait Time(μs)</td><td>通信算子执行等待时间。</td></tr></table>

当选择“DP + PP + CP + TP”和“DP + PP + TP”并行维度时，单击并行策略图中单卡图标，出现连线，单击流水线并行连线，会展示流水并行图，如图4-76所示。

在流水并行图上，可通过鼠标拖动图形下方滑动框任意一边实现缩放操作；使用鼠标左右移动滑动框，或使用Shift键 + 左/右方向键实现并行图左右移动操作。


图 4-76 流水并行图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/cddb8abefff8c609c32eb98c92c848135025412b91a18d6c4b63848b46706253.jpg)


区域三：MoE大模型专家负载均衡分析，展示专家分布热点图和专家负载均衡热力图。

参数配置栏的“数据类型”可选择“Profiling”或“Dump”，两种数据类型是针对MoE模型不同维度的统计信息。

当选择“Profiling”，展示专家分布热点图，其是基于Profiling的热点图，统计的每一个MoE层中GroupedMatmul算子的耗时情况，GroupedMatmul算子是MoE模型计算的核心，其效率会决定专家的响应速度。

当选择“Dump”时，展示MoE模型专家负载均衡热力图，其是基于Dump的热力图，统计的每个MoE层中每一个专家处理的token数量。可选择“Dump-均衡

前”或“Dump-均衡后”，单击 按钮导入对应文件，展示MoE模型专家负载均衡热力图，如图4-77所示，参数解释如表4-34所示。“Dump-均衡前”和

“Dump-均衡后”的数据文件采集方式可参见《MindIE LLM开发指南》的“特性介绍 > 负载均衡”章节。


图 4-77 MoE 大模型专家负载均衡分析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/7e7fe0d83dd6a605bc60562f9de48bb5c65961ae31794b5d78fd4341dbd34078.jpg)



表 4-34 MoE 大模型专家负载均衡分析参数说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>模型层数</td><td>Model Layer Num</td><td>可自行配置，取值范围：1~500。</td></tr><tr><td>非MoE层列表</td><td>Dense Layer List</td><td>选择所需层数，可多选。</td></tr><tr><td>专家数</td><td>Expert Num</td><td>可自行配置，取值范围：1~500。</td></tr><tr><td>模型阶段</td><td>Model Stage</td><td>大模型推理过程中的两个阶段，分别为 Prefill和Decode。</td></tr><tr><td>数据类型</td><td>Data Version</td><td>可选“Profiling”、“Dump-均衡前”或“Dump-均衡后”。</td></tr></table>

# 4.5.2 使用说明

# 并行策略展示

概览（Summary）界面支持并行策略设定值的管理，可根据导入的性能数据区分。

性能数据中有采集到的并行策略参数值：可自动读取并填写在页面中，页面信息按照输入值自动刷新，如果需要重新设置并行参数值，可填写正确的值，单击“生成”，弹出二次确认窗口，请确认信息后，单击“确认”，页面信息会随之刷新。

性能数据中无采集到的并行策略参数值：可根据实际情况分别填写正确的PP大小、TP大小、CP大小、DP大小、MoE-TP大小和EP大小值，单击“生成”，页面信息会随之刷新。

自行配置并行策略，PP大小为4、TP大小为4、CP大小为4，DP大小为8，EP大小为4，单击“生成”，并行策略展示图按照输入值刷新，如图4-78所示。

当选择不同的维度时，可根据需求勾选流水线并行、张量并行、上下文并行、数据并行或专家并行，并行策略图会按照勾选的选项显示划分策略选框，单击选框时，下方页面会随之更新。

并行策略图还可选择“性能指标”、“筛选范围”对并行策略图中的目标进行颜色渲染，选择“目标编号”，单击“查找”，快速定位目标编号。

可将任一目标编号的所选性能指标设置为最小或最大筛选值，帮助快速定位和分析问题。在所有维度下，选择性能指标后，在并行策略展示图中选择任一目标编号，单击鼠标右键弹出菜单，单击“设为最小筛选值”或“设为最大筛选值”，设置当前目标编号所选的性能指标值为“最小筛选值”或“最大筛选值”，展示图中渲染颜色会跟随变化，且筛选范围也会随之变化。


图 4-78 数据并行策略


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/e01bd04fe39e7911570f877fec343da8730155f98afb987bb064018c3496b288.jpg)


# 说明

● 并行策略取值规则：PP大小 x TP大小 x CP大小 x DP大小 $\geq$ 导入的卡数量。

当在MindStudio Insight工具导入之前曾导入过的数据时，并行策略的值会存在记忆功能，会默认展示之前设置的并行策略取值。

# 支持页面信息联动

# 连线联动

并行策略设置完成后，当选择“DP + PP + CP + TP”并行维度时，在策略图展示区域，可单击目标编号，出现相关连线，单击对应连线，下方页面会随之变化，实现联动功能，便于开发者查看数据差异，如图4-79所示。

也可在“DP + PP + TP”或“DP + PP + CP + TP”维度下，单击目标编号，出现连线，使用鼠标右键单击任一连线，选择“查看通信耗时分析”，跳转至通信界面，展示目标编号所属通信域的详情。

在“DP + PP + CP + TP”并行维度下，单击策略图中序号0相关的张量并行连线，计算/通信概览、计算详情（Rank ID）和通信详情（Rank ID）随之变化，计算/通信概览展示与序号0相关的通信域为“(0,1,2,3)”的信息详情，计算详情（Rank ID）与通信详情（Rank ID）分别展示对应卡的计算详情和通信详情，单击计算/通信概览区域中任意卡的柱状图时，计算详情和通信详情会展示相应卡的详情信息。


图 4-79 联动功能


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/ddd1eaac62ee0469c1d6037784bfcbb01f1d806813ba70b45b4b94af7eb95d46.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/90b467e9d0e0ae0c16c8ee0bb4b7c3e63b9113df0b3eea1dd20b3422df134eb3.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/847f7a7f2de85e6f9ae48a8f403f9f805f2724b20ed4d44c85e6420f1154c2e4.jpg)


# 框选联动

选择任意一个维度，当勾选流水线并行、张量并行、上下文并行或数据并行时，并行策略图会按照勾选的选项显示划分策略，出现框选区域，单击选框，下方页面会随之变化，实现联动功能，如图4-80所示。

在“DP + PP + CP”并行维度下，勾选流水线并行，并行策略图会随之更新，并出现选框，单击流水线并行选框，计算/通信概览也随之更新。


图 4-80 框选联动


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/4d9d8d4b849a34b7fdca0ee543d664d018209285bcf1e075e8477e259c49fd83.jpg)


# 支持展示不同维度的并行策略

在概览（Summary）界面下，设置了并行策略值后，可选择“DP + PP”、“DP + PP+ CP”、“DP + PP + TP”或“DP + PP + CP + TP”并行维度展示并行策略图。

可通过选择并行策略图上的维度页签展开相应维度，也可使用鼠标右键单击目标编号对各维度进行展开和折叠操作。

展开操作：在“DP + PP”或“DP + PP + CP”维度下，选择任一目标编号，单击鼠标右键弹出菜单，单击“展开”，可展开当前目标编号至下一维度。

折叠操作：在“DP + PP”、“DP + PP + CP”、“DP + PP + TP”或“DP + PP+ CP + TP”维度下，选择任一目标编号，单击鼠标右键弹出菜单，单击“折叠”，可折叠当前目标编号至上一维度。

# 说明

当CP大小设置为1时，显示为“DP + PP”和“DP + PP + TP”并行维度，且在各维度下不显示“上下文并行大小”。

# 各维度展示详情如下：

DP + PP维度

当选择“DP + PP”并行维度时，可勾选“流水线并行”和“数据并行”，单击策略图中的选框，计算/通信概览柱状图随之而变动；根据需求选择性能指标，策略图会被渲染填色，便于直观的分析指标，如图4-81所示。可设置性能指标对应的筛选范围，在目标编号中输入所需的编号，可精准定位目标。

单击柱状图顶部数据类型的对应图示，可在柱状图中隐藏或展示对应数据。


图 4-81 DP + PP 维度


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/a12df99689cb6a9065f63c48f186db22709aefd8778b36203d0b8ffdc08ea801.jpg)


# DP + PP + CP维度

当“算法”选择“Megatron-LM(tp-cp-ep-dp-pp)”、“Megatron-LM(tp-cp-pp-ep-dp)”或“MindSpeed(tp-cp-ep-dp-pp)”时，会展示“DP + PP + CP”并行维度，可勾选“流水线并行”、“上下文并行”和“数据并行”，单击策略图中的选框，计算/通信概览柱状图随之而变动；根据需求选择性能指标，策略图会被渲染填色，便于直观的分析指标，如图4-82所示。可设置性能指标对应的筛选范围，在目标编号中输入所需的编号，可精准定位目标。

可单击柱状图顶部数据类型的对应图示，可在柱状图中隐藏或展示对应数据。


图 4-82 DP + PP + CP 维度


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/069a834088531e512766d5ce6292a1aabdf40cf81cacd5c91d275ea0e4bc7b08.jpg)


# ${ \mathsf { D P } } + { \mathsf { P P } } + { \mathsf { T } }$ P维度

当“算法”选择“MindIE-LLM(tp-dp-ep-pp-moetp)”或“vLLM(tp-pp-dp-ep)”时，会展示“DP + PP + TP”并行维度，可勾选“流水线并行”、“张量并

行”、“数据并行”和“专家并行”，单击策略图中的选框，计算/通信概览柱状图随之而变动；根据需求选择性能指标，策略图会被渲染填色，便于直观的分析指标，如图4-83所示。可设置性能指标对应的筛选范围，在目标编号中输入所需的编号，可精准定位目标。

可单击卡片，选择对应连线，在策略图下方展示相应的计算/通信概览信息、计算详情和通信详情；还可单击柱状图顶部数据类型的对应图示，可在柱状图中隐藏或展示对应数据。


图 4-83 DP + PP + TP 维度


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/e357558e8fe37bcb263f1cd84897740b5ea04911ac6dfec4d08c69acb9c8510a.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/0be8c6d94e2e7ee36dd7679b8da0a2833516973ba8b00179e832b72d0ef2b2f6.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/74f75e6ba8ddd6f44d5321ecc58b5429d4452ec43962398db36bcf6409feb33a.jpg)


# DP + PP + CP + TP维度

当“算法”选择“Megatron-LM(tp-cp-ep-dp-pp)”、“Megatron-LM(tp-cp-pp-ep-dp)”或“MindSpeed(tp-cp-ep-dp-pp)”时，会展示“DP + PP + CP +TP”并行维度，可勾选“流水线并行”、“张量并行”、“上下文并行”和“数据并行”，单击策略图中的选框，计算/通信概览柱状图随之而变动；根据需求选择性能指标，策略图会被渲染填色，便于直观的分析指标，如图4-84所示。可设置性能指标对应的筛选范围，在目标编号中输入所需的编号，可精准定位目标。

可单击卡片，选择对应连线，在策略图下方展示相应的计算/通信概览信息、计算详情和通信详情；还可单击柱状图顶部数据类型的对应图示，可在柱状图中隐藏或展示对应数据。


图 $4 { - } 8 4 ~ \mathsf { D P } + \mathsf { P P } + \mathsf { C P } + \mathsf { T P }$ 维度


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/30506def26854d254f1305530e050738ab33a36bf4143668c32a86b72ba73adf.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/1e19d2c8bdeac011051a70714995c57482581a08ee7460522a1d11b8121ae552.jpg)


<table><tr><td>加速器组</td><td>加速器组时长(μs)</td><td>评值</td></tr><tr><td>AI_CORE</td><td>42407</td><td>评值√</td></tr><tr><td>AI_VECTOR_CORE</td><td>61697</td><td>评值√</td></tr><tr><td>MIX_AIC</td><td>85784</td><td>评值√</td></tr><tr><td colspan="3">通信详情(Rank 0)</td></tr><tr><td>加速器组</td><td>通信时长(未被覆盖)(μs)</td><td>速问时长(被覆盖)(μs)</td></tr><tr><td rowspan="2">Communication</td><td rowspan="2">4109297</td><td rowspan="2">37090</td></tr><tr></tr></table>

# 支持集群数据对比

MindStudio Insight支持集群数据对比，可帮助开发者直观明了地查看数据之间的差异，便于分析，设置基线数据和对比数据的操作请参见数据对比。

在对比模式下，概览（Summary）界面“基本信息”区域分别展示对比数据的信息和基线数据的信息。

并行策略分析区域，并行策略配置参数应遵循取值规则，导入卡的数量以对比数据或者基线数据的最大设备数为准。在并行策略图中选择目标编号，显示的详情信息为对比数据信息，括号中的为差值。

在“计算/通信概览”区域的柱形图详情中会显示对比数据和基线数据的差值，如图4-85所示。


图 4-85 概览界面对比模式


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/b82514938a8cff7b3d72ce87088bde831a956c55f5c031cfc5c008b92a27d3fd.jpg)


# 支持展示专家分布热点图和负载均衡热力图

在MoE大模型专家负载均衡分析区域，可选择展示专家分布热点图和专家负载均衡热力图。

专家分布热点图

当导入的Profiling数据中包含专家分布热点数据时，参数配置栏的“数据类型”选择“Profiling”，配置其它相关参数，单击“查询”，可展示专家分布热点图。

专家负载均衡热力图

当需要导入负载均衡dump前和dump后的数据时，在参数配置栏的“数据类型”选择“Dump-均衡前”或“Dump-均衡后”，单击 按钮导入对应文件，展示MoE模型专家负载均衡热力图，如图4-86所示，文件导入成功后，参数会自动填入默认值。

其中纵坐标表示模型总层数（MoE层 + 非MoE层），横坐标表示专家序号，当选择图表中的某一个单元格时，会展示该单元格的详情，包括专家索引、ID、层数、Rank ID和访问量。

在图形上，可使用Ctrl + 鼠标滚轮对热力图进行缩放。


图 4-86 MoE 模型专家负载均衡分析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/fd01e39f9324a5bdfb7e40c74a1cc77e5c74393e25950227ed1e8e050beddbcf.jpg)


# 4.6 通信（Communication）

# 4.6.1 界面介绍

# 功能说明

通信（Communication）界面用于展示集群中全网链路性能以及所有节点的通信性能，通过集群通信与计算重叠时间的分析可以找出集群训练中的慢主机或慢节点。

# 界面展示

通信（Communication）界面主要从两个维度来进行集群通信性能的展示，包括全网链路展示和以节点为粒度展示，分为通信矩阵（Communication Matrix）和通信耗时分析（Communication Duration Analysis）两部分进行数据展示。

# 通信矩阵（Communication Matrix）

通信矩阵（Communication Matrix），主要展示指定迭代通信域内通信算子的相关信息，包括带宽、通信时长、传输大小及链路方式等，如图4-87所示，参数解释请参见表4-35。


图 4-87 通信矩阵


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/5606a0a6de1238abed57cb32578dd6f2b43286119f0c4e04e860a938d7382c71.jpg)



表4-35 通信矩阵字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>集群</td><td>Cluster</td><td>集群名称，当导入集群数据时，下拉框支持选择某一集群。</td></tr><tr><td>迭代ID</td><td>Step</td><td>迭代ID，下拉框支持选择某一个迭代。</td></tr><tr><td>通信域</td><td>Communication Group</td><td>通信域，下拉框支持选择一个、多个或者所有节点，对应纵坐标进行节点的展示。</td></tr><tr><td>算子名称</td><td>Operator Name</td><td>通信算子名称，下拉框支持选择“Total Op info”或某一类算子。
为方便查看，会对通信算子进行聚类统计，例如allreduce-total等分类。当分别选择top、bottom或middle等算子分类时，鼠标移至通信矩阵热力图中，选择任一窗格即可显示具体通信算子名称。
·Total Op info：为对选中的“迭代ID”和通信域中所有通信算子数据的统计和。
·total类：表示该类算子的平均带宽水平（某类通信算子的总传输量/总传输时间），推荐优先查看。
·top类：带宽最高的通信算子，topN即为前N高。
·middle类：带宽处于中位数的通信算子。
·bottom类：带宽最低的通信算子，bottomN即为前N低。</td></tr><tr><td>通信矩阵</td><td>Matrix Model</td><td>通信矩阵热力图。</td></tr><tr><td>通信矩阵类型</td><td>Communication Matrix Type</td><td>通信矩阵类型。
• 带宽(GB/s)（Bandwidth(GB/s)：带宽。
• 传输大小(MB)（Transit Size(MB)）：通信尺寸。
• 链路方式（Transport Type)：链路类型。
• 传输时长(ms)（Transit Time(ms)）：通信时长。</td></tr><tr><td>显示卡内通信</td><td>Show Inner Communication</td><td>展示卡内通信数据。默认不勾选。</td></tr><tr><td>筛选范围</td><td>Visible Range</td><td>数据可视范围。
默认为全量展示，可手动设置数据呈现区间。</td></tr><tr><td>Src Rank Id</td><td>Src Rank Id</td><td>Source Rank Id，横坐标为链路信息中源卡的Id。</td></tr><tr><td>Dst Rank Id</td><td>Dst Rank Id</td><td>Destination Rank Id，纵坐标为链路信息中目的卡的Id。</td></tr></table>

# 通信耗时分析（Communication Duration Analysis）

通信耗时分析（Communication Duration Analysis），主要展示节点的通信性能，包括通信算子缩略图、通信时长、数据分析以及专家建议等，如图4-88所示，参数解释请参见表4-36。


图 4-88 通信耗时分析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/221c068ab484636ef40812ef60ef6b749989c95f2cd38b5904eda30b8872af2f.jpg)



表4-36 通信耗时分析字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>集群</td><td>Cluster</td><td>集群名称，当导入集群数据时，下拉框支持选择某一集群。</td></tr><tr><td>迭代ID</td><td>Step</td><td>迭代ID，下拉框支持选择某一个迭代。必选。</td></tr><tr><td>通信域</td><td>Communication Group</td><td>通信域，可在下拉框选择或搜索支持选择一个、多个或者所有节点，对应纵坐标进行节点的展示。必选。</td></tr><tr><td>算子名称</td><td>Operator Name</td><td>通信算子名称，下拉框支持选择“Total Op info”或某一个算子；其中Total Op info为对选中的“迭代ID”和通信域中所有通信算子数据的统计和。必选。</td></tr><tr><td>通信矩阵</td><td>Communicatio
n Matrix</td><td>通信矩阵。必选，与通信耗时分析任选其一。</td></tr><tr><td>通信耗时分
析</td><td>Communicatio
n Duration
Analysis</td><td>通信耗时分析。必选，与通信矩阵任选其一。</td></tr><tr><td>通信算子缩
略图</td><td>Communicatio
n</td><td>展示通信算子的执行顺序和执行时间，缩略图下方
展示慢卡信息，具体信息请参见支持快速分析并定
位异常通信算子。</td></tr><tr><td>Rank ID</td><td>Rank ID</td><td>通信算子缩略图中的纵坐标表示卡序号。</td></tr><tr><td>Time(ms)</td><td>Time(ms)</td><td>通信算子缩略图中的横坐标表示算子运行时间，单
位ms。</td></tr><tr><td>通信时长</td><td>Visualized
Communicatio
n Time</td><td>可视化通信时长图。</td></tr><tr><td>Time(ms)</td><td>Time(ms)</td><td>通信时长图表中的左侧纵坐标表示时长，单位
ms。</td></tr><tr><td>Ratio</td><td>Ratio</td><td>通信时长图表中的右侧纵坐标表示耗时占比。</td></tr><tr><td>通信时长数
据分析</td><td>Data Analysis
of
Communicatio
n Time</td><td>算子的通信时长数据分析。鼠标移入表格中，单击
按钮，一键复制表中当前所展示的内容，并粘
贴至Excel表格中进行分析。</td></tr><tr><td>卡序号</td><td>Rank ID</td><td>卡序号。</td></tr><tr><td>总时间(ms)</td><td>Elapsed
Time(ms)</td><td>通信算子所有事件总耗时。</td></tr><tr><td>传输时间
(ms)</td><td>Transit
Time(ms)</td><td>通信时长。表示通信算子的通信耗时，统计SDMA
链路（server内通信）和RDMA链路（server间通
信）的通信算子总耗时。如果通信耗时过长，可能
是某条链路存在问题。</td></tr><tr><td>同步时间
(ms)</td><td>Synchronization
Time(ms)</td><td>同步时长。卡间第一次通信前节点之间进行同步需
要的时长，用来区分等待时间过长是慢节点还是慢
链路造成的。</td></tr><tr><td>等待时间
(ms)</td><td>Wait
Time(ms)</td><td>等待时长。节点之间通信前首先需要进行同步，确
保通信的两个节点同步完成，再进行通信。</td></tr><tr><td>同步时间占
比</td><td>Synchronization
Time Ratio</td><td>同步时长占比。
同步时长占比（Synchronization Time Ratio）=同步时长（Synchronization Time）/（同步时长（Synchronization Time）+通信时长（Transit
Time）），通信前的同步时长占比越大说明通信效
率越低，可能存在慢卡的情况。</td></tr><tr><td>等待时间占比</td><td>Wait Time Ratio</td><td>通信算子的等待时长占比。等待时长占比（Wait Time Ratio）=等待时长（Wait Time）/（等待时长（Wait Time）+通信时长（Transit Time）），等待时长占比越代表该节点的等待时长占总通信耗时越长，通信效率越低。</td></tr><tr><td>空闲时间(ms)</td><td>Idle Time(ms)</td><td>通信算子下发耗时。通信算子下发耗时（Idle Time）=算子的通信总耗时（Elapsed Time）-通信时长（Transit Time）-等待时长（Wait Time）。</td></tr><tr><td>SDMA带宽(GB)</td><td>SDMABW(GB)</td><td>SDMA带宽。</td></tr><tr><td>RDMA带宽(GB)</td><td>RDMABW(GB)</td><td>RDMA带宽。</td></tr><tr><td>带宽分析</td><td>Bandwidth Analysis</td><td>带宽分析。单击对应的“查看更多”后可查看对应节点指定算子的带宽详情，如图4-89所示。</td></tr><tr><td>通信算子详情</td><td>Communication Operators Details</td><td>通信算子的详情，当“算子名称”选择“Total Op info”时可见。单击对应的“查看更多”后可查看对应节点通信算子的链路详情，如图4-90所示。</td></tr><tr><td>专家建议</td><td>Advice</td><td>对导入的数据进行分析并给出合理的专家建议。分别从带宽、字节对齐、通信重传，以及通信小包维度进行分析，并给出合理建议和优化策略，如图4-91所示。</td></tr></table>


图 4-89 带宽分析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/5136506f229b0564053e0c48d6b55e25f374274e1e81edb0392276d1b63b80d1.jpg)


带宽分析页面是以全网链路为粒度展示通信性能，包括通信时长、通信量、带宽以及链路类型等，图中各字段解释如表4-37所示。


表 4-37 带宽分析字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>包数量</td><td>Packet Number</td><td>通信包数量。</td></tr><tr><td>包大小(MB)</td><td>Packet Size(MB)</td><td>通信包大小。</td></tr><tr><td>链路方式</td><td>Transport Type</td><td>链路方式。</td></tr><tr><td>SDMA</td><td>SDMA</td><td>SDMA链路（节点内Device间通信链路），包括HCCS、PCIE和SIO三种类型。</td></tr><tr><td>RDMA</td><td>RDMA</td><td>RDMA链路（跨节点Device间通信链路）。</td></tr><tr><td>传输大小(MB)</td><td>Transit Size(MB)</td><td>一次通信包的大小。</td></tr><tr><td>传输时长(ms)</td><td>Transit Time(ms)</td><td>一次通信的时长。</td></tr><tr><td>带宽(GB/s)</td><td>Bandwidth(G B/s)</td><td>带宽。带宽一般为通信量除以通信时间。经验带宽参考值分别为RDMA_Bandwidth=12.5, HCCS_Bandwidth=18, PCIe_Bandwidth=20。</td></tr><tr><td>大通信包占比</td><td>Large Packet Ratio</td><td>大通信包占比。通信包的大小足以使得通信链路能达到经验带宽的包的比率。</td></tr></table>


图 4-90 通信算子详情


<table><tr><td colspan="12">通信时长数据分析</td></tr><tr><td>卡序号</td><td>总时隙(ms)</td><td>传播时间(ms)</td><td>周脉冲时间(ms)</td><td>峰值时间(ms)</td><td>周期时间占比</td><td>峰值时间占比</td><td>空闲时间(ms)</td><td>SDMA带宽(GB)</td><td>RDMA带宽(GB)</td><td>带宽分析</td><td>通信算子计算</td></tr><tr><td>0</td><td>130.4149</td><td>70.9805</td><td>9.4067</td><td>10.6398</td><td>0.117</td><td>0.1304</td><td>48.7946</td><td>17.6242</td><td>0</td><td>查看更多</td><td>查看更多</td></tr><tr><td>算子名称</td><td>总时隙(ms)</td><td>传播时间(ms)</td><td>周脉冲时间(ms)</td><td>峰值时间(ms)</td><td>周期时间占比</td><td>峰值时间占比</td><td>峰值时间占比</td><td>空闲时间(ms)</td><td>SDMA带宽(GB)</td><td>RDMA带宽(GB)</td><td></td></tr><tr><td>hcom_broadcast_008_1,1</td><td>0.3767</td><td>0.0012</td><td>0.0079</td><td>0.0161</td><td>0.8675</td><td>0.9305</td><td>0.3594</td><td>3.262</td><td>0</td><td></td><td></td></tr><tr><td>hcom_broadcast_008_0,1</td><td>28.5058</td><td>0</td><td>0.0121</td><td>0.0121</td><td>1</td><td>1</td><td>28.4936</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>hcom_allReduce_029_2,1</td><td>0.3893</td><td>0</td><td>0.0138</td><td>0.0138</td><td>1</td><td>1</td><td>0.3755</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>hcom_allReduce_029_1,1</td><td>1.1553</td><td>0</td><td>0.6972</td><td>0.6972</td><td>1</td><td>1</td><td>0.4582</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>hcom_allReduce_029_0,1</td><td>0.2177</td><td>0</td><td>0.1996</td><td>0.1996</td><td>1</td><td>1</td><td>0.0181</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>hcom_allReduce_008_9,1</td><td>2.0886</td><td>1.3625</td><td>0</td><td>0.0179</td><td>0</td><td>0.013</td><td>0.7082</td><td>18.3646</td><td>0</td><td></td><td></td></tr><tr><td>hcom_allReduce_008_8,1</td><td>1.5093</td><td>1.3752</td><td>0.0124</td><td>0.0707</td><td>0.0089</td><td>0.0489</td><td>0.0634</td><td>18.1193</td><td>0</td><td></td><td></td></tr><tr><td>hcom_allReduce_008_7,1</td><td>2.3692</td><td>1.3584</td><td>0</td><td>0.0315</td><td>0</td><td>0.0227</td><td>0.9793</td><td>18.3601</td><td>0</td><td></td><td></td></tr><tr><td>hcom_allReduce_008_6,1</td><td>1.5417</td><td>1.353</td><td>0</td><td>0.0243</td><td>0</td><td>0.0176</td><td>0.1644</td><td>18.4112</td><td>0</td><td></td><td></td></tr><tr><td>hcom_allReduce_008_5,1</td><td>4.1611</td><td>1.3705</td><td>1.7157</td><td>1.7445</td><td>0.5559</td><td>0.56</td><td>1.0462</td><td>18.3577</td><td>0</td><td></td><td></td></tr></table>

以算子粒度展示通信性能，包括该通信算子的通信时长、等待时长以及同步时长等，图中各字段解释可参考表4-38。


表 4-38 通信算子详情字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>算子名称</td><td>Operator Name</td><td>通信算子名称。</td></tr><tr><td>总时间(ms)</td><td>Elapsed Time(ms)</td><td>通信算子所有事件消耗时间之和，单位ms。</td></tr><tr><td>传输时间(ms)</td><td>Transit Time(ms)</td><td>通信时长，单位ms。通信时长的计算方式为统计SDMA链路和RDMA链路的通信算子总耗时。</td></tr><tr><td>同步时间(ms)</td><td>Synchronization ation Time(ms)</td><td>同步时长，单位ms。第一次传输数据前的等待时间。</td></tr><tr><td>等待时间(ms)</td><td>Wait Time(ms)</td><td>等待时长，单位ms。逻辑卡之间进行通信前，首先会进行同步，确保通信的两张卡同步完成，再进行通信。</td></tr><tr><td>同步时间占比</td><td>Synchronization ation Time Ratio</td><td>同步时长比例。计算公式为Synchronization Time / (Synchronization Time + Transit Time)。</td></tr><tr><td>等待时间占比</td><td>Wait Time Ratio</td><td>等待时长比例。计算公式为Wait Time / (Wait Time + Transit Time)。</td></tr><tr><td>空闲时间(ms)</td><td>Idle Time(ms)</td><td>通信算子下发耗时。通信算子下发耗时（Idle Time）=算子的通信总耗时（Elapsed Time）-通信时长（Transit Time）-等待时长（Wait Time）。</td></tr><tr><td>SDMA带宽(GB)</td><td>SDMA BW(GB)</td><td>SDMA带宽。</td></tr><tr><td>RDMA带宽(GB)</td><td>RDMA BW(GB)</td><td>RDMA带宽。</td></tr><tr><td>操作</td><td>Operation</td><td>单击“在时间线中显示”，可跳转至时间线视图中对应的通信算子。单击“在缩略图中显示”，可跳转至通信算子缩略图中对应的算子位置。</td></tr></table>

专家建议从带宽说明、字节对齐分析、通信重传分析、通信小包分析等方面进行数据分析，并给出合理建议。可结合概览界面“并行策略分析”中的专家建议，进一步定位慢卡及具体算子信息。

带宽说明：以总览、SDMA和RDMA为维度，展示SDMA和RDMA带宽的最大值、最小值、平均值、最大值与最小值之间的差异等内容，便于开发者快速识别异常点。

字节、重传、小包分析：分别统计通信算子字节对齐数据、通信重传分析数据、通信小包数据以及通信带宽抢占数据，分析后给出合理建议，便于开发者参考优化。


图 4-91 专家建议


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/cb5d60590175b89b413d4a4a307088a3c00c8496cb14a04f530e77ab6f85a19d.jpg)


# 4.6.2 使用说明

# 支持通信算子缩略图显示与缩放

通信（Communication）界面支持通信算子缩略图显示：

在通信（Communication）界面中，在上方筛选框中选择所需信息，可以展示出对应通信算子缩略图。

单击通信算子缩略图中的单个算子，支持悬浮显示该算子所属卡序号、算子名称、开始时间和总耗时，如图4-92所示，图中各字段解释参考表4-39。


图4-92 通信算子缩略图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/b6213cb7a3dc8b8b8ce0d8959e08ddde21f6914e3a5f66694d2892f481532d0c.jpg)



表 4-39 算子悬浮显示字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>卡序号</td><td>Rank ID</td><td>通信算子所属卡序号。</td></tr><tr><td>算子名称</td><td>Operator Name</td><td>通信算子名称。</td></tr><tr><td>开始时间</td><td>Start Time</td><td>通信算子开始时间。</td></tr><tr><td>总时间</td><td>Elapsed Time</td><td>通信算子执行总耗时。</td></tr></table>

通信算子缩略图支持缩放、左右移动、上下移动，具体操作如下：

通过鼠标拖动缩略图下方滑动框和右侧滑动框实现缩放操作。

将鼠标放置在通信算子缩略图任意位置，可以使用Ctrl键 $^ +$ 鼠标滚轮实现缩放操作。

在通信算子缩略图下方滑动框上，可以使用鼠标左右拖动实现缩略图左右移动操作。

当通信算子缩略图不在默认显示状态时， 可使用Shift键 $^ +$ 左/右方向键实现缩略图左右移动操作。

在通信算子缩略图右侧滑动框上，可以使用鼠标上下拖动实现缩略图上下移动操作，查看算子。

# 支持通信算子联动

在通信（Communication）界面，通信算子缩略图中的算子支持与时间线视图联动。

在通信（Communication）界面，在通信算子缩略图展示区域，选择单个算子，单击鼠标右键，单击“跳转至时间线视图”菜单，可跳转至时间线视图中对应算子位置，如图4-93所示。


图4-93 跳转至时间线视图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/ea5d8e7839db0a6909a18ccf235f116b08c3b18083e72aa05eecf87dc19d8dc8.jpg)


在时间线（Timeline）界面，选择单个通信算子，单击鼠标右键，单击“在通信中查找”，可跳转至通信（Communication）界面的通信算子缩略图，筛选框会自动匹配该算子对应的信息，如图4-94所示。

# 说明

Plane泳道中的通信算子无“在通信中查找”功能，不支持跳转至通信（Communication）界面的通信算子缩略图。


图 4-94 跳转至通信算子缩略图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/973db64df308748ff7acf46a38ed5b802c90664372228e699eb9f80774cf383e.jpg)


# 支持通信算子一键对齐

在同一通信域的通信算子缩略图中，支持将通信算子名称一键对齐，便于查看相同算子在各卡的通信情况。

在通信（Communication）界面，选择所需的通信域，在通信算子缩略图展示区域，选择单个算子，单击鼠标右键，单击“根据选中算子对齐”菜单，可将该通信域中名称相同的算子进行时间对齐，对齐策略为与最后一个算子进行尾部时间对齐，如图4-95所示。

如果需要取消算子对齐，选择任一算子，单击鼠标右键，单击“恢复默认状态”，可取消算子对齐，呈现初始通信算子缩略图。


图4-95 算子对齐


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/beae074203b4435508c4040989d1df866389e78b4ea53a8ac0b33f9417b92da7.jpg)


# 支持筛选数据可视范围

当选择通信矩阵（Communication Matrix）时，在“筛选范围”后面输入可视范围，单击“确认”，通信矩阵模型图会根据所选范围动态刷新，如图4-96所示。


图 4-96 筛选范围


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/01e7cd10dabb3073609ee734de78ff50d5ebde8a146ffd82f99582ea40e18a3f.jpg)


# 支持快速分析并定位异常通信算子

当选择通信耗时分析（Communication Duration Analysis）时，可通过通信算子缩略图快速分析并定位异常算子。

当性能数据中存在慢卡及异常算子时，MindStudio Insight工具经过自动分析，可在通信算子缩略图中查看排名Top3的慢卡列表，以及该慢卡下Top3的异常算子信息，如图4-97所示，慢卡及异常算子的字段解释如表4-40所示，开发者可根据异常信息进一步进行分析优化算子性能。


图 4-97 慢卡列表


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/c34e554ace741bd03a3cd920816c4104aec04d216d03abf9021e82425b032c80.jpg)


# 说明

● 当“算子名称”选择“Total Op info”时，支持在“通信算子缩略图”中显示慢卡和异常算子列表，否则不显示。

● 包含P2P算子或all2allv算子的通信域不支持通信分析，不显示慢卡和异常算子列表。


表 4-40 慢卡列表字段解释


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td colspan="3">慢卡参数</td></tr><tr><td>卡号</td><td>Rank ID</td><td>慢卡的卡序号。</td></tr><tr><td>耗时差值(ms)</td><td>Elapsed Time Difference(ms)</td><td>耗时差值 = 最快卡耗时 - 当前卡耗时，单位为ms。
通信时间耗时差值在一定程度上代表可减少的通信时间。</td></tr><tr><td>耗时(ms)</td><td>Elapsed Time(ms)</td><td>当前卡通信算子耗时总和。</td></tr><tr><td colspan="3">异常算子参数</td></tr><tr><td>排序</td><td>Index</td><td>异常算子的Top排序。</td></tr><tr><td>算子名称</td><td>Operator Name</td><td>异常算子的算子名。</td></tr><tr><td>耗时差值(ms)</td><td>Elapsed Time Difference(ms)</td><td>耗时差值 = 该算子在最快卡的通信耗时 - 该算子在当前卡的通信耗时，单位为ms。
算子耗时差值在一定程度上代表可减少的通信时间。</td></tr><tr><td>在当前卡中的耗时(ms)</td><td>Elapsed Time on Current Rank(ms)</td><td>该通信算子在当前卡的耗时。</td></tr><tr><td>在最快卡中的耗时(ms)</td><td>Elapsed Time on Fastest Rank(ms)</td><td>该通信算子在最快卡的耗时。</td></tr><tr><td>操作</td><td>Action</td><td>可单击“在图中高亮”，可在“通信算子缩略图”中高亮显示算子。</td></tr></table>

# 支持集群数据对比

MindStudio Insight支持集群数据对比，可帮助开发者直观明了地查看数据之间的差异，便于分析，设置基线数据和对比数据的操作请参见数据对比。

通信矩阵（Communication Matrix）

在对比模式下，当选择通信矩阵（Communication Matrix）时，通信矩阵模型图中会显示对比模式下的差异值，选择任一模型框，会展示对比数据和基线数据的信息，如图4-98所示。


图 4-98 通信矩阵对比模式


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/7b5f2cd4618dccce6ceba560e2223f165401ab32cce16638b7f6bf6e0263c9bc.jpg)


通信耗时分析（Communication Duration Analysis）

在对比模式下，当选择通信耗时分析（Communication Duration Analysis）时，通信（Communication）界面会显示对比迭代ID和基线迭代ID，“通信域”显示为对比数据和基线数据的并集，“算子名称”固定为“Total Op Info”。

在通信算子缩略图中，选择对应算子，展示对比数据和基线数据的详情；在通信时长柱状图中，选择柱状图，展示对比数据和基线数据的差值，如图4-99所示。


图 4-99 通信界面对比模式


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/724c6e8277332988cf3577a79748f1dda789867ae1b4d02f290f4d6103897add.jpg)


在“通信时长数据分析”区域，无“带宽分析”参数，显示对比数据和基线数据的差值，单击“通信算子详情”列的“查看更多”，显示对比数据和基线数据的详细信息，如图4-100所示。


图 4-100 通信时长数据分析对比详情


<table><tr><td>卡序号</td><td>来源</td><td>总时间(ms)</td><td>传播时间(ms)</td><td>同步时间(ms)</td><td>每晚时间(ms)</td><td>同步时间占比</td><td>每晚时间占比</td><td>空间时间(ms)</td><td>SDMA带宽(GB)</td><td>RDMA带宽(GB)</td><td>详情</td></tr><tr><td>+7</td><td>差值</td><td>137.691</td><td>71.4377</td><td>5.387</td><td>7.6174</td><td>0.0701</td><td>0.0964</td><td>58.6358</td><td>17.5459</td><td>0</td><td>查看更多√</td></tr><tr><td colspan="2">来源</td><td>总时间(ms)</td><td>传播时间(ms)</td><td>同步时间(ms)</td><td>每晚时间(ms)</td><td>同步时间占比</td><td>每晚时间占比</td><td>空间时间(ms)</td><td>SDMA带宽(GB)</td><td>RDMA带宽(GB)</td><td>详情</td></tr><tr><td colspan="2">比对数据</td><td>137.691</td><td>71.4377</td><td>5.387</td><td>7.6174</td><td>0.0701</td><td>0.0964</td><td>58.6358</td><td>17.5459</td><td>0</td><td>查看更多√</td></tr><tr><td colspan="2">基础数据</td><td>0</td><td>4.744899612477e-312</td><td>0</td><td>1.3742045458916e-311</td><td>1.1186e-320</td><td>0</td><td>5.66e-321</td><td>0</td><td>0</td><td>查看更多√</td></tr></table>

# 4.7 强化学习（RL）

# 4.7.1 界面介绍

# 功能说明

强化学习（RL）界面提供了强化学习过程中各阶段流水图的可视化展示，使能开发者能够全面了解运行情况，轻松定位问题，并进行深入分析与优化。

# 界面展示

# 说明

● 仅当导入使用mstx打点采集到的控制流数据时，才会展示任务执行时间线。mstx打点采集方式请参见《性能调优工具指南》中“Ascend PyTorch调优工具”章节的“采集并解析msprof_tx数据”内容。

● 当导入verl（Volcano Engine Reinforcement Learning for LLMs）和MindSpeed框架的性能数据时，需分别导入各自的性能数据文件夹，不支持将两种数据合并放在同一文件夹中导入。

强化学习界面由参数配置栏（区域一）和任务执行时间线（区域二）组成，如图4-101所示。


图 4-101 强化学习界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/12ca9ca77881b08b2e4732a21e90d48958a0b7232b4c862022c6ca21ea1bf439.jpg)


区域一：参数配置栏，自动识别并显示导入数据的“框架”和“算法”；当导入的数据大于16卡时，强化学习界面数据可能展示不全，可单击“刷新”解析所有数据，刷新任务执行时间线。

区域二：任务执行时间线，展示的是各卡上每个任务的执行时间，横坐标为时间轴，纵坐标为各设备对应的RankID，不同的颜色代表不同的任务，其中蓝色的色块中提供Forward和Backward micro batch标记展示，帮助定位训练阶段的细粒度性能问题。

通过任务执行时间线图形右侧和下方的滑动框可以缩放、移动时间线，也可以通过Ctrl + 鼠标滚轮进行缩放。

# 5 算子调优

导入性能数据

时间线（Timeline）

源码（Source）

详情（Details）

缓存（Cache）

# 5.1 导入性能数据

MindStudio Insight支持导入性能数据文件，并以图形化形式呈现相关内容。算子调优场景支持导入的性能数据文件请参见表5-1。数据导入操作请参见3.2 导入数据章节。


表5-1 支持导入的性能数据


<table><tr><td>文件名</td><td>说明</td><td>文件获取方式</td><td>显示界面</td></tr><tr><td>trace.json</td><td>算子仿真指令流水图文件。</td><td>参见《算子开发工具用户指南》中“算子调优(msProf) &gt; 工具使用”章节的“msprof op simulator”内容。</td><td>时间线(Timeline)</td></tr><tr><td>visualize_data.bin</td><td>仿真流水图可视化呈现文件。</td><td>参见《算子开发工具用户指南》中“算子调优(msProf) &gt; 工具使用”章节的“msprof op simulator”内容。</td><td>时间线(Timeline)</td></tr><tr><td rowspan="2"></td><td>算子基础信息、计算单元负载和Roofline瓶颈分析等信息的可视化呈现文件。</td><td>参见《算子开发工具用户指南》中“算子调优(msProf) &gt; 工具使用”章节的“msprof op”内容。</td><td>详情(Details)</td></tr><tr><td>仿真热点函数等信息可视化呈现文件。</td><td>参见《算子开发工具用户指南》中“算子调优(msProf) &gt; 工具使用”章节的“msprof op simulator”和“msprof op”内容。</td><td>源码(Source)</td></tr><tr><td>visualize_data.bin</td><td>用户程序Kernel函数内的L2 Cache访问信息可视化呈现文件。</td><td>参见《算子开发工具用户指南》中“算子调优(msProf) &gt; 工具使用”章节的“msprof op”内容。</td><td>缓存(Cache)</td></tr></table>

# 说明

MindStudio Insight在算子调优场景下，支持导入的json文件中，需要在文件内容中第一个中括号之前有"profilingType":"op"字段标识，才可被导入。

● 支持以文件夹方式导入json文件，一个文件夹下可存在多个子文件夹，但是子文件夹下不能存在多个json文件，不同的json文件需要放在不同的子文件夹下。

● 建议导入的json文件单文件大小不超过1GB。

● 支持导入的二进制bin文件只允许单个文件导入，不支持以文件夹方式导入。

● 建议导入的bin文件单文件大小不超过500MB。

# 5.2 时间线（Timeline）

# 5.2.1 界面介绍

# 功能说明

在算子性能调优过程中，MindStudio Insight工具以时间线（Timeline）的呈现方式，将算子运行过程中，底层指令的详细执行情况平铺在时间轴上，直观呈现AI处理器每个Core上的每个Pipe中指令的调用顺序和耗时情况。通过分析时间线，用户可以通过查看指令详情、指令耗时等信息快速定位出性能瓶颈。

# 界面展示

时间线（Timeline）界面包含工具栏（区域一）、图形化展示（区域二）和数据窗格（区域三）三个部分，如图5-1所示。


图 5-1 时间线界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/fcb821237bf1deeea284f49b38f92ec61e004bbbe97423b6bc11f758fb5e6268.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/fac77b0c63666d67283d48773d96048307988d424624d5b8be15d787c3bb66ae.jpg)


区域一：工具栏，包含常用快捷按钮，从左至右依次为标记列表、过滤（支持按卡或按泳道过滤展示）、搜索、连线事件、重置缩放（页面复原）和时间轴缩小放大按钮。

区域二：图形化展示，左侧显示各Core的分层信息，一层级为Core，二层级为Pipe。右侧为时间线视图，逐行对时间线进行图形化展现，包括各指令执行序列和执行时长。具体泳道信息请参见表5-2。

区域三：数据窗格，统计信息或指令详情信息展示区，选中详情（Slice Detail）为选中单个指令的详细信息、选中列表（Slice List）为某一泳道选中区域的指令列表信息。


表5-2 泳道信息


<table><tr><td>泳道名称</td><td>说明</td></tr><tr><td>ALL</td><td>表示在这个通道的指令在所有通道都执行。</td></tr><tr><td>SCALAR</td><td>标量运算单元。</td></tr><tr><td>FLOWCTRL</td><td>控制流指令。</td></tr><tr><td>MTE1</td><td>数据搬运流水，数据搬运方向为：L1 -&gt;{LOA/L0B, UBUF}。</td></tr><tr><td>CUBE</td><td>矩阵乘运算单元。</td></tr><tr><td>FIXP</td><td>数据搬运流水，数据搬运方向为：FIXPIPE LOC -&gt; OUT/L1。
仅Atlas A2 训练系列产品/Atlas A2 推理系列产品导出的性能数据支持展示。</td></tr><tr><td>MTE2</td><td>数据搬运流水,数据搬运方向为: {DDR/GM, L2} -&gt;{L1, L0A/B, UBUF}。</td></tr><tr><td>VECTOR</td><td>向量运算单元。</td></tr><tr><td>MTE3</td><td>数据搬运流水,数据搬运方向为: UBUF -&gt; {DDR/GM, L2, L1}、L1-&gt;{DDR/L2}。</td></tr><tr><td>CACHEMIS S</td><td>未命中ICACHE。</td></tr><tr><td>USEMASK</td><td>自定义打点范围。</td></tr><tr><td>MTE Throughpu t</td><td>内存吞吐率信息。
• GM_TO_L1: GM往L1搬运的数据吞吐率。
• GM_TO_TOTAL: GM输出总数据吞吐率。
• GM_TO_UB: GM往UB搬运的数据吞吐率。
• L1_TO_GM: L1往GM搬运的数据吞吐率。
• TOTAL_TO_GM: GM输入总数据吞吐率。
• UB_TO_GM: UB往GM搬运的数据吞吐率。</td></tr></table>

# 说明

通过观察时间线视图各个层级上的耗时长短、间隙等判断对应指令和Pipe是否存在性能问题，如指令执行是否存在瓶颈、是否存在高耗时的指令等。

# 5.2.2 使用说明

# 5.2.2.1 基础功能

# 支持界面缩放

时间线（Timeline）界面支持缩小、放大和左右移动等功能，具体操作如下所示：

单击时间线（Timeline）界面树状图或者图形化窗格任意位置，可以使用键盘中的W（放大）和S（缩小）键进行操作，支持放大的最大精度为1ns。

单击时间线（Timeline）界面树状图或者图形化窗格任意位置，使用键盘中的A（左移）、D（右移）键，或者方向键左键（左移）、右键（右移）进行左右移动，也可使用方向键上键（上移）、下键（下移）进行上下移动。

在图形化窗格中，使用键盘中的Alt键加鼠标左键可以使选中区域实现局部放大。

单击界面左上方工具栏中的 $\circledast$ （放大）和 $\circleddash$ （缩小）实现缩放。

● 单击界面左上方工具栏中的 $\Rightarrow$ 可以一键恢复图形化窗格显示全部时间线视图。

将鼠标放置在时间线（Timeline）界面树状图或者图形化窗格任意位置，可以使用键盘中的Ctrl键加鼠标滚轮实现缩放操作。

在图形化窗格中，使用键盘中的Ctrl键加鼠标左键可以实现左右拖拽泳道图表。

# 说明

macOS系统中，需使用键盘上的Command键加鼠标滚轮实现缩放，Command键加鼠标左键实现左右拖拽泳道图表。

● 在图形化窗格中，可使用鼠标右键菜单进行缩放展示，具体功能参见表5-3。


表 5-3 鼠标右键菜单功能


<table><tr><td>中文菜单</td><td>英文菜单</td><td>说明</td><td>操作</td></tr><tr><td>全屏显示</td><td>Fit to screen</td><td>将单个指令放大至屏幕可见范围最大宽度。如果未选中指令,则不显示该参数。</td><td>1.单击选中一个指令,单击鼠标右键,弹出菜单;2.单击“全屏显示”,可将选中指令放大至屏幕可见范围最大宽度。</td></tr><tr><td>放大所选内容</td><td>Zoom into selection</td><td>将选定区域放大至屏幕可见范围最大宽度。如果无选定区域,则不显示该参数。</td><td>1.选定某个区域后,单击鼠标右键,弹出菜单;2.单击“放大所选内容”,可将选定区域放大至屏幕可见范围最大宽度。</td></tr><tr><td>撤销缩放(0)</td><td>Undo Zoom(0)</td><td>撤销缩放,括号中的数字会随着缩放次数随之变化,初始状态为0。</td><td>1.在放大后的时间线(Timeline)界面,单击鼠标右键,弹出菜单;2.单击“撤销缩放”,界面缩小一次,括号中的数字会随之减一。</td></tr><tr><td>重置缩放</td><td>Reset Zoom</td><td>重置缩放,将图表恢复至初始状态。</td><td>1.在放大后的时间线(Timeline)界面,单击鼠标右键,弹出菜单;2.单击“重置缩放”,图表重置,恢复至初始状态。</td></tr></table>

# 指令搜索功能

MindStudio Insight在时间线（Timeline）界面支持指令搜索。

单击界面左上方工具栏中的 $\cup$ ，在弹出输入框中输入需要搜索的指令，然后按回车键，则会匹配对应的指令，搜索结果匹配指令总数，如图5-2所示，搜索到与名称中包含“mov”相关的指令总数为11754。


图 5-2 搜索指令总数


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/a900483fb5b170259e0bd2a3ce80e3b62526d42d4d8306e284e35f96844acee1.jpg)


单击界面左上方工具栏中的 $\cup$ ，可在搜索弹出输入框左侧分别单击 $\mathsf { A } _ { \mathtt { G } }$ 和 $\mathsf { w }$ ，开启大小写匹配和全词匹配功能，如图5-3所示。

单击 $\mathsf { A a }$ 开启大小写匹配，输入需要搜索的信息，按回车键，则会匹配名称中包含搜索项的指令。

单击 $\boldsymbol { \mathsf { W } }$ 开启全词匹配，输入需要搜索的信息，按回车键，则会匹配名称为搜索项的指令，但是会忽略大小写。

当同时选中 $_ { A \cap }$ 和 $\mathsf { w }$ 时，开启大小写匹配和全词匹配功能，在输入框中输入需要搜索的指令名称，按回车键，则会精确匹配名称为搜索项的指令。


图 5-3 大小写匹配和全词匹配


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/f9ae51a89aa1e5d93b808c23bbadac5dfa0bbe3d903c100e06c139c7c62b6260.jpg)


单击搜索框后方的切换按钮，可以查看上一个或者下一个匹配的指令，也可以在输入框后方输入具体的数字搜索其对应的指令，该指令将会被选中并显示在界面的中间，如图5-4所示。


图 5-4 定位指令


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/fde4f2c3913883525096dc052314d06767028c2e4487ea7fd7eced6fc1f48330.jpg)


单击搜索框后方的“在查找窗口打开”，可跳转至界面下方的“查找”页签，展示所有搜索指令列表，如图5-5所示，字段解释如表5-4所示。单击“点击跳转Timeline”列的“点击”可跳转到指令在时间线视图上的具体位置。


图 5-5 在查找窗口打开


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/da20ffcce597738a209590a97455b1b5007465315d5004e9388901cd838fdac0.jpg)



表5-4 字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>卡序号</td><td>Rank ID</td><td>卡序号，可以选择需要查看的数据文件。</td></tr><tr><td>名称</td><td>Name</td><td>指令名称。</td></tr><tr><td>开始时间</td><td>Start Time</td><td>指令执行起始时间。</td></tr><tr><td>时长(ns)</td><td>Duration(ns)</td><td>指令运行总耗时。</td></tr><tr><td>点击跳转Timeline</td><td>Click To Timeline</td><td>单击“点击”跳转到指令在时间线视图上的具体位置。</td></tr></table>

# 5.2.2.2 性能数据展示

# 设置和查看标记

区域标记

在时间线（Timeline）界面选中某个区域后，单击 或敲击键盘K键将选中区域进行标记并保存，如图5-6所示。


图 5-6 区域标记


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/caf12f11423bf414f142d92be96cba736de7848a905f59215a3050504c2adca5.jpg)


左键双击任一标记，可以设置该标记对的属性，支持修改标记对名称、颜色以及删除该标记对，如图5-7所示。


图5-7 修改标记对属性


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/3c06d22fb11fa139c7d6d20c596f0b89c52b8e20a0e80200816c9455d1a7ff43.jpg)


# 单点标记

在最上方空泳道的任意位置，单击鼠标左键或敲击键盘K键，将生成一个单点标记，如图5-8所示。左键双击标记，可以设置该标记的属性，支持修改标记的名称、颜色以及删除该标记。


图5-8 单点标记


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/2d6860c963f25af1ebd785d6f9d07d30cebb604afaf0626bba143b8313bbec59.jpg)


# 标记管理

单击左上方工具栏中的 $\vdash$ ，将显示所有标记信息，如图5-9所示。


图 5-9 查看标记信息


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/c57eb17f193de01ae5ffaa49f4aa1176413daddcf2cd7e081075945adfb921f9.jpg)


单击某个标记对应的 图标可删除标记。

单击弹窗下方的“清空全部”可删除所有标记。

单击区域标记，界面下方的“选中详情”页签会显示该区域的耗时信息详情。

如果某一标记不在当前可视化界面，单击该标记对应的 图标将直接跳转至标记界面，便于查看。

– 单击某个标记对应的颜色图标可进行颜色设置，便于对标记进行分类管理。

# 指令间同步连线功能

MindStudio Insight支持指令间同步连线关系（SET_FLAG到WAIT_FLAG）展示，单击有连线的指令，即可显示该指令关联的连线，即使折叠连线起点或者终点的Pipe，连线也不会消失，如图5-10所示。


图 5-10 指令间连线


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/92b75c9952474d082387438afdf01dbe2d9cfd74d227aa3a7d0f983cbe228262.jpg)


MindStudio Insight支持全量连线的功能，单击界面左上方工具栏中的 $\sqsupset ^ { \mathrm { J } ^ { - } }$ ，在弹框中选择一个或多个连线类型，则在时间线视图中展示对应Pipe间的所有连线，如图5-11所示。

# 说明

最多支持选择10个连线类型。


图 5-11 全量连线


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/781fbc44796d92dd2803d41dbd939641adb84e0105e06aeaab580c2e3a8edcf9.jpg)


支持隐藏SET_FLAG和WAIT_FLAG指令。

在算子展示区域，右键弹出菜单，选择“隐藏SET/WAIT事件”，可隐藏SET_FLAG和WAIT_FLAG指令，连线同时消失，如图5-12所示。


图 5-12 隐藏 SET/WAIT 事件


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/528f66d33e2e7f17d63bc87072c231716f4c6fbaeb46a26630478d430a474099.jpg)


隐藏SET/WAIT事件后，再次右键弹出菜单，单击“显示SET/WAIT事件”，被隐藏的SET_FLAG和WAIT_FLAG指令随之出现，根据连线功能操作，可正常显示指令连线，如图5-13所示。


图 5-13 显示 SET/WAIT 事件


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/e12f21b1e2d27d89aa637b76bcf1cb32d71e844213b5c61a7ed40174af89517b.jpg)


# 5.2.2.3 页面调优展示

# 泳道隐藏功能

算子调优场景下的泳道隐藏功能可参见泳道隐藏功能执行操作。

# 泳道高度自适应功能

算子调优场景下的泳道高度自适应功能可参见泳道高度支持自适应执行操作。

# 5.2.2.4 统计信息展示

MindStudio Insight支持指令统计信息和单个指令详情信息查看。

使用鼠标左键可在单个Pipe级泳道，或跨多个core泳道框选部分指令，框选部分区域指令后，可在下方选中列表显示指令的统计信息，如图5-14所示，字段解释如表5-5。

当鼠标移入“选中列表”页签，单击 $\cup$ 按钮，可复制当前“选中列表”中所展示的内容，并粘贴至Excel表格中进行分析。

单击“选中列表”列中的某个指令，在右侧“More”列表中将会显示此区域中与该指令同名的所有指令，单击“More”列表中某一行，则在时间线视图中定位出该指令的具体位置，并同时跳转至“选中详情”页面，可查看该指令的详情信息。


图 5-14 选中列表


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/2ac1dcce9c4a06a02229e0207221a54c8f7c7f3b4cb17d62b86e3c27af6857a3.jpg)



表 5-5 选中列表字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>名称</td><td>Name</td><td>指令名称。</td></tr><tr><td>持续时间</td><td>Wall Duration</td><td>指令执行总耗时。</td></tr><tr><td>平均持续时间</td><td>Average Wall Duration</td><td>指令平均执行时间。</td></tr><tr><td>最大持续时间</td><td>Max Wall Duration</td><td>算子最大持续时间。</td></tr><tr><td>最小持续时间</td><td>Min Wall Duration</td><td>算子最小持续时间。</td></tr><tr><td>发生次数</td><td>Occurrences</td><td>指令调用次数。</td></tr><tr><td>索引</td><td>Index</td><td>序号。</td></tr><tr><td>开始时间</td><td>Start Time</td><td>在图形化窗格中的时间戳。</td></tr><tr><td>时长(ms)</td><td>Duration(ms)</td><td>执行耗时。</td></tr></table>

当选中单个指令时，可在下方选中详情显示该指令的详情信息，如图5-15所示，字段解释如表5-6所示。

选中单个指令，使用M键，可框选该指令所属的时间线（Timeline）区域，再次按下M键，可取消框选。


图 5-15 选中详情


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/a74a8ce35e836e2cf7ab767546c21f85dd20336507dd46fb7e9f087d9140e70c.jpg)



表 5-6 选中详情字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>标题</td><td>Title</td><td>名称。</td></tr><tr><td>开始</td><td>Start</td><td>起始时间。</td></tr><tr><td>开始（原始时间戳）</td><td>Start(Raw Timestamp)</td><td>数据采集到的原始开始时间。</td></tr><tr><td>持续时间</td><td>Wall Duration</td><td>总耗时。</td></tr><tr><td>参数</td><td>Args</td><td>算子的相关参数信息，包括以下信息：
• code：代码调用栈。
• detail：指令源码。
• pc_addr：pc地址。</td></tr></table>

# 5.3 源码（Source）

# 5.3.1 界面介绍

# 功能说明

源码（Source）界面用于展示算子指令热点图，支持查看算子源码与指令集的映射关系和耗时情况，在昇腾Ascend C算子开发过程中，使能开发者进行性能分析。

# 界面展示

请参见3.2 导入数据章节，导入算子指令热点bin文件，获取算子指令热点bin文件请参见《算子开发工具用户指南》中“算子调优（msProf） > 工具使用”章节的“msprofop simulator”内容，文件为：visualize_data.bin。

源码（Source）界面包含筛选栏（区域一）、源文件代码属性表（区域二）和指令表（区域三）三个部分组成，如图5-16所示。


图 5-16 源码界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/66f607d588f2c6889e17736d3ae491269138e3bcedf131e7fc0199264f404067.jpg)


区域一：筛选栏，可通过计算核（Core）和源码（Source）进行筛选需要查看的内容。

区域二：源文件代码属性表，查看各行代码和其相应的执行时长和次数，表中字段解释如表5-7所示。


表5-7 源文件代码属性表字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td><td>示例</td></tr><tr><td>#</td><td>#</td><td>代码行号。</td><td>100</td></tr><tr><td>源码</td><td>Source</td><td>源文件代码。</td><td>-</td></tr><tr><td>执行指令数</td><td>Instructions Executed</td><td>该行代码在每个Core上执行的指令数量。</td><td>100</td></tr><tr><td>时钟周期</td><td>Cycles</td><td>该行代码在每个Core上执行消耗的Cycles(时钟周期)。</td><td>100</td></tr><tr><td>通用寄存器数</td><td>GPR Count</td><td>该行代码在每个Core上执行时使用的通用寄存器次数。仅当使用msprof op simulator采集的数据支持显示该参数。</td><td>10</td></tr><tr><td>L2Cache命中率</td><td>L2Cache Hit Rate</td><td>该行代码在所有Core上执行的L2 Cache命中率。仅当使用msprof op采集的数据支持显示该参数。</td><td>100%</td></tr><tr><td>处理数据量(Bytes)</td><td>Process Bytes</td><td>该行代码在每个Core上执行处理的数据量之和，单位Byte。</td><td>2048</td></tr></table>

区域三：指令表，查看指令记录，包括地址、内容、数量、次数等，表中字段解释如表5-8所示。


表 5-8 指令表字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td><td>示例</td></tr><tr><td>#</td><td>#</td><td>序号。</td><td>100</td></tr><tr><td>地址</td><td>Address</td><td>指令所处的偏移地址。</td><td>0x1122a828</td></tr><tr><td>指令队列</td><td>Pipe</td><td>指令所处的Pipe(指令队列)。</td><td>MTE2</td></tr><tr><td>源码</td><td>Source</td><td>指令内容。</td><td>BAR PIPE:ALL</td></tr><tr><td>执行指令数</td><td>Instructions Executed</td><td>该行指令在每个Core上执行的指令数量。</td><td>100</td></tr><tr><td>通用寄存器数</td><td>GPR Count</td><td>该行指令在每个Core上执行时使用的通用寄存器次数。仅当使用msprof op simulator采集的数据支持显示该参数。</td><td>10</td></tr><tr><td>时钟周期</td><td>Cycles</td><td>该行指令在每个Core上执行消耗的Cycles(时钟周期)。</td><td>100</td></tr><tr><td>L2Cache命中率</td><td>L2Cache Hit Rate</td><td>该行指令在所有Core上执行的L2 Cache命中率。仅当使用msprof op采集的数据支持显示该参数。</td><td>72%</td></tr><tr><td>处理数据量(Bytes)</td><td>Process Bytes</td><td>该行指令在每个Core上执行处理的数据量,单位Byte。</td><td>2048</td></tr><tr><td>UB单元读冲突</td><td>UB Read Conflict</td><td>Vector计算类指令在UB Bank上读的冲突情况。仅当使用msprof op simulator采集的数据支持显示该参数。</td><td>1</td></tr><tr><td>UB单元写冲突</td><td>UB Write Conflict</td><td>Vector计算类指令在UB Bank上写的冲突情况。仅当使用msprof op simulator采集的数据支持显示该参数。</td><td>0</td></tr><tr><td>Vector计算单元利用率百分比</td><td>VectorUtilizationPercentage</td><td>Vector计算单元的利用率，单位%。仅当使用msprof op simulator采集的数据支持显示该参数。</td><td>35.29</td></tr></table>

# 说明

支持导入的二进制bin文件只允许单个文件导入，不支持以文件夹方式导入。

# 5.3.2 使用说明

# 源码搜索功能

在源文件代码属性表区域，使用键盘上的Ctrl + F键可调出搜索框，在搜索框中输入所需关键字，可按需选择大小写匹配等功能，按Enter回车键查询，会高亮显示匹配的关键字，如图5-17所示，搜索框中图标功能如表5-9所示。

# 说明

macOS系统中，需使用键盘上的Command + F键调出搜索框。


图5-17 搜索源码


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/c776a85dd54d161d1c86b701467ffe02a240b39e2cc0743156f92a103f2512a1.jpg)



表5-9 图标功能说明


<table><tr><td>图标</td><td>功能说明</td></tr><tr><td>Aa</td><td>大小写匹配。选定该图标后，可匹配搜索到所输入的关键字，区分大小写。</td></tr><tr><td>W</td><td>全词匹配。选定该图标后，可搜索到完整匹配的关键字。</td></tr><tr><td>↑</td><td>向上切换搜索结果。</td></tr><tr><td>↓</td><td>向下切换搜索结果。</td></tr><tr><td>=</td><td>框选源码区域。选定该图标后，可使用鼠标左键选定源码区域，则可在选定区域内进行搜索。</td></tr><tr><td>×</td><td>关闭搜索框，退出搜索功能。也可以按键盘上的Esc键退出。</td></tr></table>

# 查看关联指令

单击源文件代码属性表中任意一行代码，则在指令表将高亮显示此行代码相关指令。指令表上方会显示当前选中代码的行数（Line）和此行代码关联的指令总数（RelatedInstructions Count），如图5-18所示，此行代码所处位置是第10行，且关联的指令总数为112个。


图 5-18 查看关联指令


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/fcfc728de108bbd27c696dddb6aee645d9242ce0689a34fecc4c8c8fbde91081.jpg)


勾选指令表上的“仅查看关联指令”则会进行过滤，只显示此行代码关联的指令，如图5-19所示。


图 5-19 过滤关联指令


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/09995b03a44e178663052ccb281fdb424bee5b34b8b80f97de36d6fb4e187b44.jpg)


# 查看关联代码

单击指令表中任意一行，则在源文件代码属性表中高亮显示所关联的代码，并且在指令表中高亮显示此行代码所有关联指令，如图5-20所示。


图 5-20 查看关联代码


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/fa925ed3d7a5e37c7a0dd44fc60c821409d267d49b56982cf6cfc5fe3c62d03d.jpg)


# 说明

如果有多行关联代码时，只会高亮显示最上层代码。

# 筛选指令表

在指令表中，单击表头每个字段后方的 $\Bumpeq$ 可以筛选需要查看的内容，如图5-21所示。


图 5-21 筛选指令表


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/750dda0065c5c0726bad4a3459c8e8b88ebc043ac084ea9acb537e7db416aeb4.jpg)


# 5.4 详情（Details）

# 5.4.1 界面介绍

# 功能说明

详情（Details）界面用于展示算子基础信息、计算负载分析、核间负载分析、Roofline瓶颈分析和内存负载分析，并以图形和数据窗格呈现方式展示分析结果。

# 界面展示

请参见3.2 导入数据章节，导入算子调优工具（msProf）采集的bin文件，获取bin文件请参见《算子开发工具用户指南》中“算子调优（msProf） > 工具使用”章节的“msprof op”内容。

# 说明

支持导入的二进制bin文件只允许单个文件导入，不支持以文件夹方式导入。

详情（Details）界面包含基础信息（Base Info）（区域一）、核间负载分析（CoreOccupancy）（区域二）、Roofline瓶颈分析（Roofline）（区域三）、计算工作负载分析（Compute Workload Analysis）（区域四）和内存负载分析（MemoryWorkload Analysis）（区域五），如图5-22所示。


图 5-22 详情界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/5ccad480ce1c153deb7c0487db67a0c8781f3b89001d83e7b0ffe497c8ad9a24.jpg)



Roofline瓶颈分析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/cc24158445bdc54509fedbb7aeb8f2f1b37179614b41e558d512bf5500165728.jpg)



计算工作负载分析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/e5032c8cf3bab7961bc30a4e65114564f45495c08ff7d6867ccbd9b31c44a08e.jpg)



内存负载分析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/37b06b3605fa0e072313e1becd8ab1d2720440c75e88fb044007438075852614.jpg)


区域一：基础信息（Base Info），可查看算子基础信息，包含名称、时长、类型等内容，详细说明如表5-10所示。


表 5-10 基本信息字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>名称</td><td>Name</td><td>算子名称。</td></tr><tr><td>时长(μs)</td><td>Duration(μs)</td><td>算子总耗时。</td></tr><tr><td>算子类型</td><td>Op Type</td><td>算子类型。有mix、vector、cube和AiCore四种类型。</td></tr><tr><td>设备号</td><td>Device Id</td><td>设备id。</td></tr><tr><td>进程号</td><td>Pid</td><td>进程号。</td></tr><tr><td>Block数量</td><td>Block Dim</td><td>Sub Block的数量。当算子类型为vector、cube和AiCore时，为此参数名称。</td></tr><tr><td>混合Block数量</td><td>Mix Block Dim</td><td>Sub Block的数量。当算子类型为mix时，为此参数名称。</td></tr><tr><td>Block详情</td><td>Block Detail</td><td>Sub Block耗时详情。当算子类型为vector、cube和AiCore时，为此参数名称，其中字段解释如表5-11所示。</td></tr><tr><td>混合Block详情</td><td>Mix Block Detail</td><td>Sub Block耗时详情。当算子类型为mix时，为此参数名称，其中字段解释如表5-12所示。</td></tr></table>


表 5-11 Block 详情字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>Block ID</td><td>Block ID</td><td>Sub Block序号。
当算子类型为AiCore时，无此参数。</td></tr><tr><td>计算核类型</td><td>Core Type</td><td>Sub Block类型。</td></tr><tr><td>时长(μs)</td><td>Duration (μs)</td><td>Sub Block耗时。</td></tr></table>


表 5-12 混合 Block 详情字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>Block ID</td><td>Block ID</td><td>Sub Block序号。</td></tr><tr><td>Cube0时长(μs)</td><td>Cube0 Duration(μs)</td><td>AI Core的cube核耗时。</td></tr><tr><td>Vector0时长(μs)</td><td>Vector0Duration (μs)</td><td>AI Core的其中一个vector核耗时。</td></tr><tr><td>Vector1时长(μs)</td><td>Vector1Duration (μs)</td><td>AI Core的另外一个vector核耗时。</td></tr></table>

区域二：核间负载分析（Core Occupancy），分别通过时钟周期数量、核总吞吐量、Cache命中率展示核间负载并进行分析，如图5-23所示。

可分别选择时钟周期（Cycles）、吞吐量（Throughput）或Cache命中率(%)（Cache Hit Rate(%)）显示Core的占用率，并展示分析结果，便于开发者定位分析异常点。


图 5-23 核间负载分析


# ■核间负载分析

显示为：

时钟周期

Core0 

Cube0 

161476 

Vector0 

90825 

Vector1 

158913 

Core1 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/e79d3c2889b9f9ab3c22756fd93d77edad3a78778416a83c63f949e71faaef6c.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/bdd0ee19c0cf2e96e462be8f8436158ccbc065a495ca7edb4abbf116ab81a373.jpg)


core0 vector1 took more time than other vector cores. 

# 说明

仅Atlas A3 训练系列产品/Atlas A3 推理系列产品和Atlas A2 训练系列产品/Atlas A2推理系列产品导出的性能数据才支持此模块。

● 如果相同类型计算单元之间的颜色相近，表示负载均衡度高。所有Core的Cube计算单元一起进行颜色对比，所有Core的Vector计算单元一起进行颜色对比。

区域三：Roofline瓶颈分析（Roofline），通过Roofline模型图展示算子性能，并对其结果进行分析，为开发者提供性能优化依据。Roofline模型图中的x轴为算数强度，单位是Ops/Byte，表示每字节（Byte）内存支持的操作次数；y轴为性能，单位是TOps/s，表示每秒钟可进行多少万亿次操作。

Roofline模型图上会显示算力名称，用于描述计算最大算力的指令类型组成，例如Cube_INT(100.000000%) + Vec_FP16(30.000000%),Vec_FP32(70.000000%)，代表此时cube计算单元处理的全是int类型指令，vector计算单元处理的指令30%是fp16类型，70%是fp32类型。

# 说明

仅Atlas A3 训练系列产品/Atlas A3 推理系列产品、Atlas A2 训练系列产品/Atlas A2 推理系列产品和Atlas 推理系列产品支持此模块。

当硬件产品为Atlas A3 训练系列产品/Atlas A3 推理系列产品和Atlas A2 训练系列产品/Atlas A2 推理系列产品时，Roofline性能模型分析包含内存单元、内存通路以及搬运单元页签。

内存单元：显示HBM/L2和Memory Unit模型图，如图5-24所示，参数解释如表5-13所示。


图 5-24 内存单元


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/4f2d4436061a5b2ec4326af833e693b40e8c3b8b8a04451bdc2040c34526f6cf.jpg)



表 5-13 内存单元参数说明


<table><tr><td>参数</td><td>说明</td></tr><tr><td>HBM Read + Write</td><td>高带宽存储器单元的读与写。</td></tr><tr><td>L2 Read + Write</td><td>L2的读与写。</td></tr><tr><td>L1 Read + Write</td><td>L1内存单元的读与写。</td></tr><tr><td>Write to L1</td><td>写至L1内存单元。</td></tr><tr><td>Read from L1</td><td>从L1内存单元的读。</td></tr><tr><td>Write to L0A</td><td>写至L0A内存单元。</td></tr><tr><td>Write to L0B</td><td>写至L0B内存单元。</td></tr><tr><td>Read from LOC</td><td>从LOC内存单元的读。</td></tr><tr><td>UB Read + Write</td><td>UB内存单元的读与写。</td></tr><tr><td>Read from UB</td><td>从UB内存单元的读。</td></tr><tr><td>Write to UB</td><td>写至UB内存单元。</td></tr><tr><td>Vector Read UB</td><td>Vector从UB内存单元的读。</td></tr><tr><td>Vector Write UB</td><td>Vector写至UB内存单元。</td></tr></table>

内存通路：显示内存搬运通路图，如图5-25所示，参数解释如表5-14所示。


图 5-25 内存通路


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/60ab0e66bf5be572cf8aaf6cabc1dd48cdce0bdaa4cf1e8c02be4f3d7b23f551.jpg)



表5-14 内存通路参数说明


<table><tr><td>参数</td><td>说明</td></tr><tr><td>GM/L1 to L0A</td><td>GM/L1至L0A的内存通路。</td></tr><tr><td>GM/L1 to L0B</td><td>GM/L1至L0B的内存通路。</td></tr><tr><td>LOC to GM</td><td>LOC至GM的内存通路。</td></tr><tr><td>L1 to GM</td><td>L1至GM的内存通路。</td></tr><tr><td>LOC to L1</td><td>LOC至L1的内存通路。</td></tr><tr><td>GM to UB</td><td>GM至UB的内存通路。</td></tr><tr><td>UB to GM</td><td>UB至GM的内存通路。</td></tr></table>

搬运单元：显示Pipeline模型图，如图5-26所示，参数解释如表5-15所示。


图 5-26 搬运单元


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/9a2dabe64e5cff3e4a343aabc036d678289e8b6372a611dad633bbeefeca8b11.jpg)



表5-15 搬运单元参数说明


<table><tr><td>参数</td><td>说明</td></tr><tr><td>MTE1</td><td>MTE1通路。</td></tr><tr><td>MTE2</td><td>MTE2通路。</td></tr><tr><td>MTE3</td><td>MTE3通路。</td></tr><tr><td>FIXP</td><td>FIXP通路。</td></tr><tr><td>MTE2 vector</td><td>Vector计算单元的MTE2通路。</td></tr><tr><td>MTE3 vector</td><td>Vector计算单元的MTE3通路。</td></tr></table>

当硬件产品为Atlas 推理系列产品时，仅存在内存单元内容，如图5-27所示，参数解释如表5-16所示。


图 5-27 内存单元模型图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/4b5edcc7e23bcbf6e5cdf2d6c201d3df103b7052fcf3d64a142f1d1f25b6e708.jpg)



表5-16 内存单元参数说明


<table><tr><td>参数</td><td>说明</td></tr><tr><td>L1 Read + Write</td><td>L1内存单元的读与写。</td></tr><tr><td>Read from LOC</td><td>从LOC内存单元的读。</td></tr><tr><td>Read from L1</td><td>从L1内存单元的读。</td></tr><tr><td>Read from UB</td><td>从UB内存单元的读。</td></tr><tr><td>UB Read + Write</td><td>UB内存单元的读与写。</td></tr><tr><td>Vector Read UB</td><td>Vector从UB内存单元的读。</td></tr><tr><td>Vector Write UB</td><td>Vector写至UB内存单元。</td></tr><tr><td>Write to LOA</td><td>写至LOA内存单元。</td></tr><tr><td>Write to LOB</td><td>写至LOB内存单元。</td></tr><tr><td>Write to L1</td><td>写至L1内存单元。</td></tr><tr><td>Write to UB</td><td>写至UB内存单元。</td></tr></table>

区域四：计算工作负载分析（Compute Workload Analysis），以柱状图和数据窗格呈现方式查看相应信息，便于开发人员分析。如图5-28所示，参数解释如表5-17所示。图标 中的内容为各个Block的计算负载分析结果。


图 5-28 计算工作负载分析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/d72230196746f6bc94fed5c4801c77ed035d0d3f8de01729c3d21a3ec1deb511.jpg)



表 5-17 计算工作负载分析参数说明


<table><tr><td>中文参数</td><td>英文参数</td><td>说明</td></tr><tr><td>Block ID</td><td>Block ID</td><td>Sub Block序号。可通过切换Block ID来查看对应信息。当算子类型为AiCore时，此参数显示NA，展示的是多核平均值。</td></tr><tr><td>Pipe Utilization</td><td>Pipe Utilization</td><td>Pipe（指令队列）可视化，以柱状图方式展示。横坐标：Cycles占比，计算方式为Cycles/总的Cycles。Cycles为该指令在Sub Block上执行消耗的时钟周期。纵坐标：算子指令，由bin文件的数据中提供。</td></tr><tr><td>CUBE</td><td>CUBE</td><td>cube类型的指令名称。当算子类型为cube时，显示此参数。</td></tr><tr><td>CUBE0</td><td>CUBE0</td><td>cube类型的指令名称。当算子类型为mix时，显示此参数。</td></tr><tr><td>VECTOR</td><td>VECTOR</td><td>vector类型的指令名称。当算子类型为vector时，显示此参数。</td></tr><tr><td>VECTOR0</td><td>VECTOR0</td><td>vector类型的指令名称。当算子类型为mix时，显示此参数。</td></tr><tr><td>VECTOR1</td><td>VECTOR1</td><td>vector类型的指令名称。当算子类型为mix时，显示此参数。</td></tr><tr><td>AICORE</td><td>AICORE</td><td>AiCore类型的指令名称。当算子类型为AiCore时，显示此参数。</td></tr><tr><td>指令数</td><td>Instructions</td><td>算子指令数量。</td></tr><tr><td>时长(μs)</td><td>Duration(μs)</td><td>算子指令耗时。</td></tr><tr><td>数据搬运量 (byte)</td><td>Data Volume (byte)</td><td>算子指令数据量。</td></tr></table>

区域五：内存负载分析（Memory Workload Analysis），以内存热力图和数据窗格呈现方式查看相应信息，如图5-29所示，参数配置如表5-18所示。热力图左侧的“Peak”为箭头颜色，值为峰值带占比（最大带宽占比）。图标 中的内容为各个Block的内存负载分析结果。


图 5-29 内存负载分析


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/107d6f8a2ce10b49c24c380f61954992e529b1e1fe231d764728952af550f1a6.jpg)



表5-18 参数配置说明


<table><tr><td>中文参数</td><td>英文参数</td><td>说明</td></tr><tr><td>Block ID</td><td>Block ID</td><td>Sub Block序号。在Block ID选框中可以选择想要查看的Sub Block。当算子类型为AiCore时，Block ID显示NA，展示的是多核平均值。</td></tr><tr><td>显示为</td><td>Show As</td><td>可选项，选择热力图连线箭头内容以请求数或者带宽展示。热力图箭头代表流向。
· 请求数（Num of Request）
· 带宽（Bandwidth）</td></tr></table>

数据窗格呈现内容随算子类型而变化，其内容是基于bin文件的数据解析结果，具体呈现如下：

当算子类型为AiCore时，表格窗格参数解释如表5-19所示。


表 5-19 AiCore 类型参数说明


<table><tr><td>中文参数</td><td>英文参数</td><td>说明</td></tr><tr><td>Cache</td><td>Cache</td><td>L2缓存。</td></tr><tr><td>Cube</td><td>Cube</td><td>cube计算单元。</td></tr><tr><td>HBM</td><td>HBM</td><td>高带宽存储器单元。</td></tr><tr><td>LOA</td><td>LOA</td><td>LOA储存单元。</td></tr><tr><td>LOB</td><td>LOB</td><td>LOB储存单元。</td></tr><tr><td>LOC</td><td>LOC</td><td>LOC储存单元。</td></tr><tr><td>L1</td><td>L1</td><td>L1储存单元。</td></tr><tr><td>Pipe</td><td>Pipe</td><td>计算通路。</td></tr><tr><td>UB</td><td>UB</td><td>ub储存单元。</td></tr><tr><td>Vector</td><td>Vector</td><td>vector计算单元。</td></tr><tr><td>请求数</td><td>Requests</td><td>操作数量。</td></tr><tr><td>吞吐量(GB/s)</td><td>Throughput(GB/s)</td><td>吞吐量，表示通路每秒的传输数据量，单位为GB/s。</td></tr></table>

当算子类型为mix时，表格窗格参数解释如表5-20所示。


表 5-20 mix 类型参数说明


<table><tr><td>中文参数</td><td>英文参数</td><td>说明</td></tr><tr><td>Cache</td><td>Cache</td><td>L2缓存。</td></tr><tr><td>命中次数</td><td>Hit</td><td>cache命中次数。</td></tr><tr><td>未命中次数</td><td>Miss</td><td>cache未命中后重新分配缓存的次数。</td></tr><tr><td>总次数</td><td>Total</td><td>cache请求总次数。</td></tr><tr><td>命中率(%)</td><td>Hit Rate(%)</td><td>cache命中率。</td></tr><tr><td>Cube</td><td>Cube</td><td>cube计算单元。</td></tr><tr><td>HBM Cube</td><td>HBM Cube</td><td>cube单元的高带宽存储器单元。</td></tr><tr><td>HBM Vector Core0</td><td>HBM Vector Core0</td><td>AICORE内core0的vector单元的高带宽存储器单元。</td></tr><tr><td>HBM Vector Core1</td><td>HBM Vector Core1</td><td>AICORE内core1的vector单元的高带宽存储器单元。</td></tr><tr><td>LOA</td><td>LOA</td><td>LOA储存单元。</td></tr><tr><td>LOB</td><td>LOB</td><td>LOB储存单元。</td></tr><tr><td>LOC</td><td>LOC</td><td>LOC储存单元。</td></tr><tr><td>L1</td><td>L1</td><td>L1储存单元。</td></tr><tr><td>请求数</td><td>Requests</td><td>操作数量。</td></tr><tr><td>吞吐量(GB/s)</td><td>Throughput(GB/s)</td><td>吞吐量，表示通路每秒的传输数据量，单位为GB/s。</td></tr><tr><td>峰值（最大带宽占比）(%)</td><td>Peak(%)</td><td>与理论带宽的比率。</td></tr><tr><td>Pipe Cube</td><td>Pipe Cube</td><td>cube单元的计算通路。</td></tr><tr><td>Pipe Vector Core0</td><td>Pipe Vector Core0</td><td>AICORE内core0的vector单元的计算通路。</td></tr><tr><td>Pipe Vector Core1</td><td>Pipe Vector Core1</td><td>AICORE内core1的vector单元的计算通路。</td></tr><tr><td>指令数</td><td>Instructions</td><td>指令数量。</td></tr><tr><td>时钟周期</td><td>Cycle</td><td>通路消耗的时钟周期。</td></tr><tr><td>等待周期</td><td>Wait Cycles</td><td>对应pipe上被阻塞的cycle数。</td></tr><tr><td>活跃率（%）</td><td>Active Rate(%)</td><td>运行cycle数占总的cycle的百分比。</td></tr><tr><td>UB Core0</td><td>UB Core0</td><td>mix算子AICORE内core0的ub储存单元。</td></tr><tr><td>UB Core1</td><td>UB Core1</td><td>mix算子AICORE内core1的ub储存单元。</td></tr><tr><td>Vector</td><td>Vector core0</td><td>vector计算单元。</td></tr></table>

当算子类型为vector时，表格窗格参数解释如表5-21所示。


表 5-21 vector 类型参数说明


<table><tr><td>中文参数</td><td>英文参数</td><td>说明</td></tr><tr><td>Cache</td><td>Cache</td><td>L2缓存。</td></tr><tr><td>命中次数</td><td>Hit</td><td>cache命中次数。</td></tr><tr><td>未命中次数</td><td>Miss</td><td>cache未命中后重新分配缓存的次数。</td></tr><tr><td>总次数</td><td>Total</td><td>cache请求总次数。</td></tr><tr><td>命中率(%)</td><td>Hit Rate(%)</td><td>cache命中率。</td></tr><tr><td>HBM</td><td>HBM</td><td>高带宽存储器单元。</td></tr><tr><td>请求数</td><td>Requests</td><td>操作数量。</td></tr><tr><td>吞吐量(GB/s)</td><td>Throughput(GB/s)</td><td>吞吐量，表示通路每秒的传输数据量，单位为GB/s。</td></tr><tr><td>Pipe</td><td>Pipe</td><td>计算通路。</td></tr><tr><td>指令数</td><td>Instructions</td><td>指令数量。</td></tr><tr><td>时钟周期</td><td>Cycle</td><td>通路消耗的时钟周期。</td></tr><tr><td>等待周期</td><td>Wait Cycles</td><td>对应pipe上被阻塞的cycle数。</td></tr><tr><td>活跃率（%）</td><td>Active Rate(%)</td><td>运行cycle数占总的cycle的百分比。</td></tr><tr><td>UB</td><td>UB</td><td>ub储存单元。</td></tr><tr><td>Vector</td><td>Vector</td><td>vector计算单元。</td></tr><tr><td>峰值（最大带宽占比）(%)</td><td>Peak(%)</td><td>与理论带宽的比率。</td></tr></table>

当算子类型为cube时，表格窗格参数解释如表5-22所示。


表 5-22 cube 类型参数说明


<table><tr><td>中文参数</td><td>英文参数</td><td>说明</td></tr><tr><td>Cache</td><td>Cache</td><td>L2缓存。</td></tr><tr><td>命中次数</td><td>Hit</td><td>cache命中次数。</td></tr><tr><td>未命中次数</td><td>Miss</td><td>cache未命中后重新分配缓存的次数。</td></tr><tr><td>总次数</td><td>Total</td><td>cache请求总次数。</td></tr><tr><td>命中率(%)</td><td>Hit Rate(%)</td><td>cache命中率。</td></tr><tr><td>Cube</td><td>Cube</td><td>cube计算单元。</td></tr><tr><td>HBM</td><td>HBM</td><td>高带宽存储器单元。</td></tr><tr><td>LOA</td><td>LOA</td><td>LOA储存单元。</td></tr><tr><td>LOB</td><td>LOB</td><td>LOB储存单元。</td></tr><tr><td>LOC</td><td>LOC</td><td>LOC储存单元。</td></tr><tr><td>L1</td><td>L1</td><td>L1储存单元。</td></tr><tr><td>请求数</td><td>Requests</td><td>操作数量。</td></tr><tr><td>吞吐量(GB/s)</td><td>Throughput(GB/s)</td><td>吞吐量，表示通路每秒的传输数据量，单位为GB/s。</td></tr><tr><td>峰值（最大带宽占比）(%)</td><td>Peak(%)</td><td>与理论带宽的比率。</td></tr><tr><td>Pipe</td><td>Pipe</td><td>计算通路。</td></tr><tr><td>指令数</td><td>Instructions</td><td>指令数量。</td></tr><tr><td>时钟周期</td><td>Cycle</td><td>通路消耗的时钟周期。</td></tr><tr><td>等待周期</td><td>Wait Cycles</td><td>对应pipe上被阻塞的cycle数。</td></tr><tr><td>活跃率（%）</td><td>Active Rate(%)</td><td>运行cycle数占总的cycle的百分比。</td></tr></table>

# 5.4.2 使用说明

# 查看 Cycles

在“Pipe Utilization”柱状图区域，鼠标滚动至对应指令柱状图上，会显示真实Cycles信息。如图5-30所示。


图 5-30 查看 Cycles


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/3fc1aafeba2f70eaaa6b0c34224430026deeb370b7d72ee326e3a24b087dde5b.jpg)


# 在 Roofline 模型性能图中查看算子性能

在“Roofline瓶颈分析”区域的内存单元、内存通路或搬运单元的任意一个视图中，选择视图中对应的参数点，可悬浮显示该内存单元实际的性能信息，如图5-31所示，参数解释如表5-23所示。


图5-31 显示算子性能信息


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/b0a2464842cec5cb012a4b937182cf129df3b50b2048ee2ad983e38ef99a4021.jpg)



表 5-23 性能信息参数说明


<table><tr><td>中文参数</td><td>英文参数</td><td>说明</td></tr><tr><td>带宽</td><td>Bandwidth</td><td>硬件的带宽上限。</td></tr><tr><td>算术强度</td><td>Arithmetic Intensity</td><td>对应x轴，表示单位内存可以支持的操作次数。</td></tr><tr><td>性能</td><td>Performance</td><td>对应y轴，表示单位时间的操作次数，每秒钟可进行多少万亿次操作。</td></tr><tr><td>性能百分比</td><td>Performance Ratio</td><td>性能百分比 = 算子运行的实际性能 / 硬件最佳性能。</td></tr></table>

# 支持算子间性能对比

MindStudio Insight支持两算子间详情对比，可帮助开发者直观明了地查看两个算子间的差异，便于分析。进行算子详情比对前需要先设置基线算子和对比算子，设置操作可参考数据对比。

在算子对比模式下，详情（Details）界面分别从基础信息（Base Info）、核负载分析（Core Occupancy）、计算工作负载分析（Compute Workload Analysis）、内存负载分析（Memory Workload Analysis）方面呈现对比数据。算子对比功能仅支持同类型的算子进行对比。

基础信息（Base Info）：对算子间的基础信息进行对比。

核间负载分析（Core Occupancy）：以对比数据为基准，如果对比数据中有核间负载分析数据，则界面支持显示；如果对比数据中无核间负载分析数据，则界面不显示核间负载分析内容。

Roofline瓶颈分析（Roofline）：此模块暂不支持对比，如果对比数据中有此模块，在算子对比模式下，会显示对比数据中的内容。

计算工作负载分析（Compute Workload Analysis）：以柱状图和数据窗格呈现方式查看相应信息，柱状图中蓝色为对比数据，绿色为基线数据，数据窗格显示算子间的对比差异，单击“详情”列中“查看更多”，可展示基线数据和对比数据的详情，如图5-32所示。


图 5-32 计算工作负载分析对比


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/e2c503c27f93e50bf88b1975e809b8c16360d593b5f1528ff527002165195f71.jpg)


内存负载分析（Memory Workload Analysis）：以内存热力图和数据窗格呈现方式查看相应信息，热力图中括号里的数据为基线数据，括号外的数据为对比数

据，数据窗格显示算子间的对比差异，单击“详情”列中“查看更多”，可展示基线数据和对比数据的详情，如图5-33所示。


图5-33 内存负载分析对比


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/3323a3caf04a287b66d014d98e8a4c0a656cfb6a944d43b4a1d8cae740079a8f.jpg)


# 5.5 缓存（Cache）

# 5.5.1 界面介绍

# 功能说明

缓存（Cache）界面支持展示用户程序Kernel函数内的L2 Cache访问情况，以便用户优化Cache命中率。

# 界面展示

请参见3.2 导入数据章节，导入算子调优工具（msProf）采集的bin文件，获取bin文件请参见《算子开发工具用户指南》中“算子调优（msProf） > 工具使用”章节的“msprof op”内容。

缓存（Cache）界面主要展示用户程序Kernel函数内的L2 Cache访问情况，如图5-34所示。单击缓存（Cache）界面中的任意一个图，可将所选图放大查看。

选择单个内存单元，可显示该内存单元的详情，包括缓存行索引、事件次数和事件占比。


图 5-34 缓存界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/59e5342be284bd5212f3059d825e466311e7d21ef473aeb9c7bbaad23f9184ad.jpg)


# 5.5.2 使用说明

# 事件图支持与源码联动

在缓存（Cache）界面，选择命中和未命中事件图，单击放大，在放大的事件图中右键单击所选内存单元格，选择“显示指令”，可跳转至源码（Source）界面，并高亮显示与之相关的指令行，如图5-35所示。


图 5-35 跳转指令表


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/8de6b3707dbc5fdd3c4daeb7cbb1c1db2606b1c0ac1c1908ceff954cd47afd59.jpg)


# 6 服务化调优

导入性能数据

时间线（Timeline）

折线图（Curve）

# 6.1 导入性能数据

MindStudio Insight支持导入性能数据文件，并以图形化形式呈现相关内容。服务化调优场景支持导入可视化折线图的SQLite数据库文件和推理服务化请求trace数据的json文件，文件名称分别为profiler.db和chrome_tracing.json，获取方式请参见《性能调优工具指南》中的“msServiceProfiler服务化调优工具 > msServiceProfiler服务化调优 >数据解析 > 执行解析”章节。

# 说明

导入时需选中chrome_tracing.json或profiler.db文件才可成功导入。

# 6.2 时间线（Timeline）

# 6.2.1 界面介绍

# 功能说明

在服务化调优过程中，MindStudio Insight工具以时间线（Timeline）的呈现方式，将请求端到端的执行情况平铺在时间轴上，直观体现请求在各个关键阶段的耗时情况以及当下请求的状态信息。通过分析时间线，用户可以快速识别服务化性能瓶颈，并根据问题现象，调整调优策略。

# 界面展示

时间线（Timeline）界面包含工具栏（区域一）、图形化展示（区域二）和数据窗格（区域三）三个部分，如图6-1所示。


图 6-1 时间线界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/1d87e4a835a094d13847606ca67025319559b66a731a8e11a0201e57f022ff7f.jpg)


区域一：工具栏，包含常用快捷按钮，从左至右依次为标记列表、过滤（支持按卡或按泳道过滤展示）、搜索、连线事件、重置缩放（页面复原）和时间轴缩小放大按钮。

区域二：图形化展示，左侧显示服务化采集的性能数据，一层级为进程，二层级为请求的各个关键阶段信息，具体泳道信息如表6-1所示。右侧为时间线视图，逐行对时间线进行图形化展现，包括各关键阶段执行序列和执行时长。


表6-1 泳道信息


<table><tr><td>泳道名称</td><td>说明</td></tr><tr><td>CPU Usage</td><td>CPU平均利用率。仅在开启host_system_usage_freq数据采集开关后采集到的数据才会展示该泳道。</td></tr><tr><td>Memory Usage</td><td>Host侧系统内存使用率。仅在开启host_system_usage_freq数据采集开关后采集到的数据才会展示该泳道。</td></tr><tr><td>NPU Usage</td><td>NPU内存占用。仅在开启npu_memory_usage_freq数据采集开关后采集到的数据才会展示该泳道。</td></tr><tr><td>KVCache</td><td>KV Cache剩余量随时间变化图。</td></tr><tr><td>BatchSchedule</td><td>组batch时间，单位ns。</td></tr><tr><td>WAITING</td><td>请求转移到WAITING状态的时刻。</td></tr><tr><td>PENDING</td><td>请求转移到PENDING状态的时刻。</td></tr><tr><td>RUNNING</td><td>请求转移到RUNNING状态的时刻。</td></tr><tr><td>RUNNING2</td><td>请求转移到RUNNING2状态的时刻。</td></tr><tr><td>SWAPPED</td><td>batch进入SWAPPED状态的时刻。</td></tr><tr><td>RECOMPUTE</td><td>请求转移到RECOMPUTE状态的时刻。</td></tr><tr><td>SUSPENDED</td><td>batch进入SUSPENDED状态的时刻。</td></tr><tr><td>END</td><td>请求转移到END状态的时刻。</td></tr><tr><td>END_PRE</td><td>请求转移到END_PRE状态的时刻。</td></tr><tr><td>STOP</td><td>batch进入STOP状态的时刻。</td></tr><tr><td>PREFILL_HOLD</td><td>batch进入PREFILL_HOLD状态的时刻。</td></tr><tr><td>http</td><td>http请求完整生命周期数据，包含http请求的接收，encode，decode的时间。</td></tr><tr><td>batchFrameworkProcessing</td><td>组batch数据，包含组batch时间，当前batch的类型（prefill或者decode），请求的rid和迭代次数。</td></tr><tr><td>preprocessBatch</td><td>IBIS数据下发中给batch添加参数的时间，单位ns。</td></tr><tr><td>GenerateExecuteMessage</td><td>IBIS数据下发中序列化时间，单位ns。</td></tr><tr><td>setInferBuffer</td><td>IBIS数据下发中设置buffer时间，单位ns。</td></tr><tr><td>grpcWriteToSlave</td><td>IBIS数据下发中gRPC写，单位ns。</td></tr><tr><td>deserializationExecuteRequestsForInfer</td><td>IBIS数据下发中反序列化时间，单位ns。</td></tr><tr><td>convertTensorBatchToBackend</td><td>IBIS数据下发中request转化时间，单位ns。</td></tr><tr><td>getInputMetadata</td><td>IBIS数据下发中获取metadata时间，单位ns。</td></tr><tr><td>beforemodelExec</td><td>模型执行前处理时间，单位ns。</td></tr><tr><td>modelExec</td><td>模型执行数据，单位ns，包含执行时间，当前batch的类型（prefill或者decode），请求的rid和迭代次数。</td></tr><tr><td>instanceExecute</td><td>模型实例执行时间，单位ns。</td></tr><tr><td>Queue</td><td>请求进入队列的时刻。</td></tr><tr><td>PDcommunication</td><td>PD分离通信时间，单位ns。仅在PD分离场景下存在该泳道。</td></tr><tr><td>forward</td><td>模型推理前向传播时间，单位ns。</td></tr><tr><td>operatorExecute</td><td>Python侧模型执行接口时间，单位ns。</td></tr><tr><td>processPythonExceResult</td><td>数据接收中response转化，序列化以及写入共享内存时间，单位ns。</td></tr><tr><td>deserializationExecuteResponse</td><td>数据接收中反序列化时间，单位ns。</td></tr><tr><td>saveoutAndContinueBatching</td><td>数据接收中将response解析为output的时间，单位ns。</td></tr><tr><td>continueBatching</td><td>数据接收中将请求加入队列的时间，单位ns。</td></tr><tr><td>sendExecuteMessage</td><td>发送执行信息时间，单位ns。</td></tr><tr><td>postprocess</td><td>模型推理后处理时间，单位ns。</td></tr><tr><td>preprocess</td><td>模型推理前处理时间，单位ns。</td></tr><tr><td>processBroadcastMessage</td><td>通信广播信息时间，单位ns。</td></tr><tr><td>sample</td><td>采样时间，单位ns。</td></tr><tr><td>PullKVCache</td><td>PD节点之间的KVCache传输时间，单位ns。仅在PD分离场景下存在该泳道。</td></tr><tr><td>CANN</td><td>算子执行时间，单位ns。仅在开启acl_task_time数据采集开关后采集到的数据才会展示该泳道。</td></tr><tr><td>dpBatch</td><td>模型推理过程中各请求对应的dp域信息。</td></tr><tr><td>RequestState</td><td>模型推理过程中请求状态变化。</td></tr></table>

区域三：数据窗格，统计信息或指令详情信息展示区，选中详情（Slice Detail）为选中单个关键阶段的详细信息、选中列表（Slice List）为泳道选中区域的关键阶段列表信息。

# 说明

通过观察时间线视图各个层级上的耗时长短、间隙等判断对应的关键阶段是否存在性能问题。

# 6.2.2 使用说明

服务化调优场景下，时间线（Timeline）界面的使用说明可参见系统调优的4.2.2 使用说明。

# 选中详情

当选中单个关键阶段色块时，可在下方“选中详情”页签中显示该关键阶段的详情信息，当“选中详情”中存在res_list信息时，单击表格中rid列表的任意一行，会在“选中详情”的右侧区域显示对应rid的request详细信息，request详情根据实际采集的信息动态显示，如图6-2所示，字段解释如表6-2所示。


图 6-2 选中详情


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/f35508fe93fc32af7461cd0ee33b9242ef209c797958e829773e2b834beac400.jpg)



表 6-2 选中详情字段解释


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>标题</td><td>Title</td><td>名称。</td></tr><tr><td>开始</td><td>Start</td><td>起始时间。</td></tr><tr><td>开始（原始时间戳）</td><td>Start(Raw Timestamp)</td><td>数据采集到的原始开始时间。</td></tr><tr><td>持续时间</td><td>Wall Duration</td><td>总耗时。</td></tr><tr><td>参数</td><td>Args</td><td>关键阶段的相关参数信息。</td></tr></table>

# 服务化视图

在“系统视图”页签，当选择“服务化视图”时，页面包含卡序号选框、服务化数据页签，在卡序号选框中可以选择想要查看的卡。

服务化数据包括kvcache_usage、batch_info、request_data和forward_info等页签，如图6-3所示。

选择任一服务化数据，右侧区域会显示对应的详细信息，字段解释如表6-3所示，且各字段支持搜索，在字段名称后单击 $\bigtriangledown$ ，可搜索所需信息。


图 6-3 服务化视图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/cc5464d70cfa8fb0a0ba799985588e8b55e99e62e5ee2eded7a903df597776b9.jpg)



表 6-3 服务化视图字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td colspan="3">kvcacheusage</td></tr><tr><td>rid</td><td>rid</td><td>请求ID。</td></tr><tr><td>name</td><td>name</td><td>具体改变显存使用的方法。</td></tr><tr><td>real_start_time_ms</td><td>real_start_time_ms</td><td>发生显存使用情况变更的时间，单位ms。</td></tr><tr><td>device_kvcache_left</td><td>device_kvcache_left</td><td>显存中剩余blocks数量。</td></tr><tr><td>kvcacheusage_rate</td><td>kvcacheusage_rate</td><td>kvcache利用率。</td></tr><tr><td colspan="3">batch_info</td></tr><tr><td>name</td><td>name</td><td>用于区分组batch和执行batch。name为batchFrameworkProcessing表示组batch；name为modelExec表示执行batch。</td></tr><tr><td>res_list</td><td>res_list</td><td>batch组合情况。</td></tr><tr><td>start_time_ms</td><td>start_time_ms</td><td>组batch或执行batch的开始时间，单位ms。</td></tr><tr><td>end_time_ms</td><td>end_time_ms</td><td>组batch或执行batch的结束时间，单位ms。</td></tr><tr><td>batch_size</td><td>batch_size</td><td>batch中的请求数量。</td></tr><tr><td>batch_type</td><td>batch_type</td><td>batch中的请求状态（prefill和decode）。</td></tr><tr><td>during_time_m
s</td><td>during_time_mss</td><td>执行时间，单位ms。</td></tr><tr><td>dp*_rid</td><td>dp*_rid</td><td>DP域包含的请求ID，*表示DP域ID，取值为[0, n-1]。</td></tr><tr><td>dp*_size</td><td>dp*_size</td><td>DP域的batchsize，*表示DP域ID，取值为[0, n-1]。</td></tr><tr><td>dp*forward_m
s</td><td>dp*forward_mss</td><td>DP域中执行时长最长的forward的执行时间，单位ms，*表示DP域ID，取值为[0, n-1]。</td></tr><tr><td colspan="3">request_data</td></tr><tr><td>http_rid</td><td>http_rid</td><td>HTTP请求ID。</td></tr><tr><td>start_time_m
s</td><td>start_time_mss</td><td>请求到达的时间，单位ms。</td></tr><tr><td>recv_token_size</td><td>recv_token_size</td><td>请求的输入长度。</td></tr><tr><td>reply_token_size
e</td><td>reply_token_size</td><td>请求的输出长度。</td></tr><tr><td>execution_time
_m
s</td><td>execution_time_mss</td><td>请求端到端耗时，单位ms。</td></tr><tr><td>queue_wait_time
e_m
s</td><td>queue_wait_time_mss</td><td>请求在整个推理过程中在队列中等待的时间，这里包括waiting状态和pending状态的时间，单位ms。</td></tr><tr><td>first_token_late
ncy</td><td>first_token_latency</td><td>首Token时延，单位ms。</td></tr><tr><td colspan="3">forward_info</td></tr><tr><td>name</td><td>name</td><td>标注forward事件，代表模型前向执行过程。</td></tr><tr><td>relative_start_time(m)
s</td><td>relative_start_time(mss)</td><td>每台机器上forward与第一个forward之间的时间。</td></tr><tr><td>start_time(m)
s</td><td>start_time(mss)</td><td>forward的开始时间。</td></tr><tr><td>end_time(m)
s</td><td>end_time(mss)</td><td>forward的结束时间。</td></tr><tr><td>during_time(m)
s</td><td>during_time(mss)</td><td>forward的执行时间，单位ms。</td></tr><tr><td>bubble_time(m
s)</td><td>bubble_time(mss)</td><td>forward之间的空泡时间，单位ms。</td></tr><tr><td>batch_size</td><td>batch_size</td><td>forward处理的请求数量。</td></tr><tr><td>batch_type</td><td>batch_type</td><td>forward中的请求状态。</td></tr><tr><td>forward_iter</td><td>forward_iter</td><td>不同卡上forward的迭代序号。</td></tr><tr><td>dp_rank</td><td>dp_rank</td><td>标识forward的DP信息，相同DP域该列的值相同。</td></tr><tr><td>prof_id</td><td>prof_id</td><td>标识不同卡，相同的卡该列的值相同。</td></tr><tr><td>hostname</td><td>hostname</td><td>标识不同机器，相同机器该列的值相同。</td></tr></table>

# 支持生成色块相关折线图

在服务化调优场景下，支持生成任意色块的“执行时间折线图”和“空泡折线图”，便于分析问题。

在时间线（Timeline）界面，选择任一泳道的任意一个色块，单击鼠标右键，选择“生成该色块执行时间折线图”或“生成该色块空泡折线图”，跳转至折线图（Curve）界面，生成该色块所在泳道的对应折线图和数据详情，显示平均持续时间和持续时间，如图6-4所示。


图6-4 生成色块折线图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/40bc7e1d1a7f1e0fcb454b9edd658e398cae6b4d7735e3b8693195ce44c8f56a.jpg)


如果在折线图中发现异常，需要定位异常点，可区域放大选择需查看的异常点，在折线图下方数据详情表格中找到对应数据，在数据所在行单击鼠标右键，选择“跳转至时间线视图”，可跳转至时间线（Timeline）界面，定位至具体的色块上，如图6-5所示。


图 6-5 跳转至时间线视图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/0cf7e9190fdff9d2cb2585dd24ee8db04163e174bce38a36c22915a6b2675e44.jpg)


# 6.3 折线图（Curve）

# 6.3.1 界面介绍

# 功能说明

支持以折线图和数据详情表的形式展示具体数据变化，便于直观的分析。仅当导入profiler.db文件时，展示折线图（Curve）界面。

# 界面展示

折线图（Curve）界面包含参数配置栏（区域一）、折线数据（区域二）和表格数据详情（区域三）三个部分组成，如图6-6所示。


图 6-6 折线图界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/b9dc7dfd52363c135ee1e2f871d70253a0b7cbd600e951d93dec9a777a17c9cd.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/863ad047a21373a9cb5c995a67ea0b3161a5f3791441366c709ca9321e4e78f7.jpg)


区域一：参数配置栏，包含卡序号和分组方式。

区域二：折线数据，以折线图形式展示数据的变化情况。

区域三：表格数据详情，展示了SQLite数据库的详细数据。表格支持排序和分页功能。单击每列的表头，可根据当前列的升序、降序和默认排序呈现数据。

# 6.3.2 使用说明

# 支持折线图局部放大和还原

MindStudio Insight支持通过鼠标左键框选放大选中部分和右键还原进行折线图的展示。为提升显示性能，折线图在数据量较大时会隐藏大部分点，可在框选到足够精细区域时显示所有点位，也可单击鼠标右键还原最初整体展示效果。

在折线图中单击鼠标左键拖至需要放大的终点位置并松开鼠标左键，框选部分将会被放大；如果还存在点被隐藏，重复放大操作即可展示被隐藏的点，选中放大区域如图6-7所示。

在折线图中也可单击正上方的图例，选择隐藏所需的折线，隐藏后，该折线在图中不展示，对应图例置灰，再次单击置灰图例，可将其重新展示。


图 6-7 选中放大区域


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/fc1307e16bf765a7cce5b0f089adf81b60dc9814297ed603aa125a8d7f7df358.jpg)


# 说明

● 单击折线图右上角 $\sqcup$ 按钮，使其为置灰状态，则折线图将锁定，不再支持鼠标左键框选放大功能；再次单击此按钮，或者单击鼠标右键即可恢复。放大功能默认开启。

● 单击折线图右上角 $\sqhookrightarrow$ 按钮，折线图将会撤销一次放大操作。

● 单击折线图右上方 $\smile$ 按钮，折线图将会恢复最初状态。

# 7 内存调优

导入性能数据

内存详情（Leaks）

# 7.1 导入性能数据

MindStudio Insight支持导入msLeaks工具采集到的内存结果文件，并以图形化形式呈现相关内容。仅支持导入db格式的文件，获取方式请参见《msLeaks内存泄漏检测工具用户指南》的“命令行采集”章节，支持导入的内存数据详情请参见表7-1。


表7-1 内存数据说明


<table><tr><td>文件名</td><td>说明</td><td>界面呈现内容</td></tr><tr><td rowspan="3">leaks_dump{&#x27;ti mESTAMP}.db</td><td>--events参数取值需至少包含alloc、free事件。</td><td>内存折线块图（内存申请/释放折线图、内存块图）</td></tr><tr><td>--analysis参数取值包含decompose。</td><td>内存详情拆解图</td></tr><tr><td>通过Python接口开启tracer功能。</td><td>Python调用栈图</td></tr></table>

# 7.2 内存详情（Leaks）

# 7.2.1 界面介绍

# 功能说明

在内存调优过程中，MindStudio Insight工具通过Python调用栈图和内存折线块图，将内存情况直观地呈现出来，便于开发者分析定位内存问题，有效缩短定位时间。

# 界面展示

内存详情（Leaks）界面包含调用栈火焰图（区域一）、内存申请/释放折线图&内存块图（区域二）、内存详情拆解图（区域三）和内存详情表（区域四），如图7-1所示。


图 7-1 内存详情界面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/84dcaecfb2cdf2be25b753c2774ac9100582c63c317aca3f9cf51effdccf4a16.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/c6894298a087e7ba4bc0b2662f31087a2ab0f74686744379493b55354276fcdb.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/75be36c7a458627e738d1ffe126bb88b511ced3800c2bb5807290285f44d6d7b.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/d272bf81fbd2b16aab6d312ee5ef15be10c8fe8cdf9930d81bc255068998c439.jpg)


区域一：调用栈火焰图，通过选择线程ID，展示对应的Python调用栈图；在“搜索”输入框中输入要搜索的函数名，或单击下拉框选择函数名，可选多个函数名，进行搜索，调用栈图中会高亮显示搜索的函数。

区域二：内存申请/释放折线图&内存块图，展示内存申请/释放折线图和内存块图，选择内存块图上的色块，展示该内存块的详情，可通过选择设备ID和类型来展示对应的内存折线块图。

区域三：内存详情拆解图，默认不显示，当鼠标置于“调用栈火焰图”或者“内存申请/释放折线图&内存块图”中，会显示一条时间线，在“内存申请/释放折线图&内存块图”区域，单击时间线，才会展示对应时间点的内存详情拆解图。

区域四：内存详情表，分为“内存块视图”和“内存事件视图”，可选择相应视图查看详情表，具体使用说明请参见内存详情展示。

# 7.2.2 使用说明

# 支持调用栈火焰图和内存折线块图局部放大

MindStudio Insight支持通过鼠标左键框选放大选中部分，放大功能默认开启。

在“调用栈火焰图”或者“内存申请/释放折线图&内存块图”中，如果图中右上角 $\sqcup$ 按钮，是蓝色的，则默认开启放大功能，单击鼠标左键框选需要放大的区域，松开鼠标左键，框选部分将会被放大（“调用栈火焰图”或“内存申请/释放折线图&内存块图”会同时放大），框选放大区域如图7-2所示。单击 按钮，图形恢复至原始状态。

可单击“内存申请/释放折线图&内存块图”正上方的图例，隐藏所选的折线和内存块，隐藏后，该折线和内存块在图中不展示，对应图例置灰，再次单击置灰图例，可将其重新展示。


图 7-2 框选放大区域


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/7cf93aef1599ae4ee3276274d409dfb77571db483b815d34b19e27d0c2142a99.jpg)


# 说明

● 单击图中右上角 $\sqcup$ 按钮，使其为置灰状态，折线图和块图被锁定，不支持鼠标左键框选放大功能；单击按钮使其变蓝，开启框选放大功能。放大功能默认开启。

● 单击折线图和块图右上方 $\smile$ 按钮，图形将会恢复最初状态。

# 支持显示内存详情拆解图

当鼠标置于“调用栈火焰图”或者“内存申请/释放折线图&内存块图”中，会显示一条时间线，在“内存申请/释放折线图&内存块图”区域，单击时间线，则会在“内存

申请/释放折线图&内存块图”下方展示对应时间点的内存详情拆解图，便于开发者查看内存占用情况。“内存详情拆解图”展示的内容会随所选择的类型而变化。

如果需要查看指定的内存层级，可单击“内存详情拆解图”下方的层级目录条进入所选层级。

当类型选择HAL时，“内存详情拆解图”中仅展示通过CANN级别分类分级的内存数据，如图7-3所示。


图 7-3 CANN 级别内存详情拆解图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/46955d303ff2e7cd1993a156fb6f0d963bcc8c130e509f00d4afac8b447dc645.jpg)


当类型选择除HAL之外的其它选项时，“内存详情拆解图”中展示对应框架侧内存池的内存分类分级情况。例如当类型选择PTA时，“内存详情拆解图”中仅展示PTA框架的内存情况，如图7-4所示。


图7-4 PTA 框架内存详情拆解图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/2f12b4c7a9c0b7b0f6691584e59ddb11fa0ca0d32d5792dd64d60534dbdd4ebf.jpg)


# 说明

“内存详情拆解图”支持左右上下拖拽和缩放展示。

● 鼠标放置在图中，按住鼠标左键可实现左右上下拖拽。

● 在“内存详情拆解图”上，使用鼠标滚轮实现缩放展示；或选择任一内存块，单击鼠标左键，可将选中的内存层级放大展示。

# 调用栈图与内存块图支持联动

双击“调用栈火焰图”中单个调用栈块时，会以该调用栈块的起始时间和截止时间为界放大调用栈图，显示该时间段的所有调用栈信息，同时，“内存申请/释放折线图&内存块图”同步放大，显示该时间段内的所有内存块。

双击“内存申请/释放折线图&内存块图”的指定内存块，会以该内存块的起始时间和截止时间为界放大内存块图，显示该时间段的所有内存块，同时，“调用栈火焰图”实现联动，同步放大显示该时间段内的所有调用栈，并自动匹配至对应的“线程ID”，如图7-5所示。

如果需要将图形恢复最初状态，单击图形右上方 $\smile$ 按钮即可。

# 说明

如果内存块对应的“线程ID”未采集调用栈数据，则“调用栈火焰图”区域将为空。


图7-5 调用栈图和内存块图联动


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/6a4055b878fd82522ecde231a46fbf8d0b0267577d90bc38cf9375857e45ef7d.jpg)


# 内存详情展示

在内存详情表区域，通过“内存块视图”和“内存事件视图”分别展示内存的详细信息，默认展示所有内存相关信息。

表格中呈现的字段支持排序和搜索，单击字段名称后 $\bigtriangledown$ ，可搜索所需信息。

# 说明

“内存块视图”中的“内存块大小”、“申请时间”和“释放时间”字段，“内存事件视图”中的“时间戳(ns)”字段，单击 $\bigtriangledown$ ，支持筛选，可输入最小值和最大值进行区间筛选，只能输入整数，输入的数值最小为0，最大为当前展示的对应字段的最大值。

内存块视图：展示内存块的详细信息，如图7-6所示，字段解释如表7-2所示。

当在“内存申请/释放折线图&内存块图”中分别选择不同“设备ID”和“类型”时，内存块视图的展示信息也会随之更新；当框选“内存申请/释放折线图&内存块图”中部分区域展示时，内存块视图的信息也会随之更新，展示的是所有与框选时间范围存在交集的内存块信息。

在“内存块视图”表格右上方，单击“过滤低效显存”按钮，弹出筛选弹框，分别通过设置“提前申请阈值”、“延迟释放阈值”或“空闲过长阈值”，筛选低效显存。


图 7-6 内存块视图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/115f5804c03ab6b6b01fffba7476f7396dca823db5f4e46ae802d7e408d7c3bc.jpg)



表7-2 内存块视图字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>内存块ID</td><td>ID</td><td>内存块ID，内存块唯一标识。</td></tr><tr><td>内存块地址</td><td>Addr</td><td>内存块地址，对应内存申请/释放/访问事件的地址。</td></tr><tr><td>内存块大小(bytes)</td><td>Size(bytes)</td><td>内存块大小，对应内存申请事件，单位为bytes。</td></tr><tr><td>申请时间(ns)</td><td>Malloc Timestamp(ns)</td><td>内存块申请时间，对应内存申请事件的时间，单位ns。</td></tr><tr><td>释放时间(ns)</td><td>Free Timestamp(ns)</td><td>内存块释放时间，对应内存释放事件的时间，单位ns。</td></tr><tr><td>申请者</td><td>Owner</td><td>内存块持有者所属标签。</td></tr><tr><td>进程ID</td><td>Process ID</td><td>内存块所属进程号，对应内存申请/释放事件的所属进程号。</td></tr><tr><td>线程ID</td><td>Thread ID</td><td>内存块所属线程号，对应内存申请/释放事件的所属线程号。</td></tr><tr><td>首次访问时间(ns)</td><td>First Access Timestamp(ns)</td><td>首次访问事件时间。</td></tr><tr><td>末次访问时间(ns)</td><td>Last Access Timestamp(ns)</td><td>末次访问事件时间。</td></tr><tr><td>最大访问时间间隔(ns)</td><td>Max Access Interval(ns)</td><td>访问事件的最大间隔时间。</td></tr><tr><td>特有属性</td><td>Attr</td><td>扩展属性，包含以下信息：
·allocation_id：内存块所属的申请/访问/释放序列id，唯一标识一组内存事件。
·lazy_used：提前申请场景，取值为true或者false，true表示已识别到该场景。
·delayed_free：延迟释放场景，取值为true或者false，true表示已识别到该场景。
·long_Idle：超长闲置场景，取值为true或者false，true表示已识别到该场景。</td></tr></table>

# 说明

● 如果导入的数据是使用MindStudio 8.2.RC1之前版本的msLeaks工具采集的，或者数据中没采集到访问事件，那么allocation_id显示为0，首次访问时间(ns)、末次访问时间(ns)显示为-1，最大访问时间间隔(ns)显示为0。

● 由于msLeaks工具当前仅支持采集ATB和Ascend Extension for PyTorch算子场景的内存访问事件，则首次访问时间(ns)、末次访问时间(ns)和最大访问间隔(ns)也仅支持展示对应场景的详情，其余场景下，首次访问时间(ns)、末次访问时间(ns)显示为-1，最大访问时间间隔(ns)显示为0。

内存事件视图：展示内存事件的详细信息，如图7-7所示，字段解释如表7-3所示。

当在“内存申请/释放折线图&内存块图”中选择不同“设备ID”时，内存事件视图的展示信息也会随之更新；当框选“内存申请/释放折线图&内存块图”中部分区域展示时，内存事件视图的信息也会随之更新，展示的是框选时间范围内的所有内存事件。


图 7-7 内存事件视图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/62d66a171abfab62bc5608e5ee40dad86ba48d6991b61fec561bc1165ce45b75.jpg)



表 7-3 内存事件视图字段说明


<table><tr><td>中文字段</td><td>英文字段</td><td>说明</td></tr><tr><td>事件ID</td><td>ID</td><td>事件ID，与Process ID共同标识唯一一个内存事件。</td></tr><tr><td>事件类型</td><td>Event</td><td>msLeaks记录的事件。</td></tr><tr><td>事件子类型</td><td>Event Type</td><td>事件子类型。</td></tr><tr><td>名称</td><td>Name</td><td>事件名称，与Event值有关。</td></tr><tr><td>时间戳(ns)</td><td>Timestamp(ns)</td><td>内存事件发生的时间。</td></tr><tr><td>进程ID</td><td>Process ID</td><td>进程号。</td></tr><tr><td>线程ID</td><td>Thread ID</td><td>线程号。</td></tr><tr><td>内存地址</td><td>Addr</td><td>内存地址。</td></tr><tr><td>特有属性</td><td>Attr</td><td>内存事件特有属性，每个事件类型有各自的属性项。</td></tr><tr><td>调用栈 (Python)</td><td>Call Stack (Python)</td><td>Python调用栈。
仅当数据中采集到该信息时，则显示该字段。</td></tr><tr><td>调用栈(C)</td><td>Call Stack(C)</td><td>C调用栈。
仅当数据中采集到该信息时，则显示该字段。</td></tr></table>

# 说明

事件类型、事件子类型和名称字段的取值可参见《msLeaks内存泄漏检测工具用户指南》的“命令行采集”章节的leaks_dump_{timestamp}.csv结果文件说明。

# 8 附录

安全加固建议

安装转发方式（Linux）

插件管理

FAQ 

# 8.1 安全加固建议

MindStudio Insight为开发态工具，不建议通过X协议转发进行使用，建议在本地启动使用。

MindStudio Insight工具应整包使用，请勿二次开发或调用内部接口。

MindStudio Insight为本地工具，默认安全，如果需要打开端口，请注意远程通信带来的安全风险。

出于安全考虑，在Linux和macOS系统上，禁止使用root用户启动MindStudioInsight工具。如果实际需要使用root用户启动，则需执行./MindStudio-Insight--allow-root进行启动。

在Linux或Unix环境下，使用MindStudio Insight时，请确认该环境中当前用户的umask设置为“0027”或更严格，以确保生成的文件（例如pip安装依赖后的文件等）符合最小权限安全要求。

# 8.2 安装转发方式（Linux）

# 8.2.1 安装操作（X11 方式）

# 前提条件

确保源可用。可在root用户下执行如下命令检查源是否可用。

Ubuntu等以apt作为包管理软件类型的操作系统apt-get update

CentOS/EulerOS/OpenEuler等以yum/dnf作为包管理软件类型的操作系统yum makecache

# 说明

如果OpenEuler及其衍生操作系统，在安装过程中提示找不到相关依赖，可能原因是系统配置的源没有相关依赖，可参见LINK配置新的源，并重新安装对应依赖。

# 操作步骤

步骤1 执行以下命令，安装MindStudio Insight显示运行依赖的库文件。

Ubuntu等以apt作为包管理软件类型的操作系统

sudo apt install -y libwebkit2gtk-4.0-dev 

● CentOS/EulerOS/OpenEuler等以yum/dnf作为包管理软件类型的操作系统

a. 执行以下命令，查询webkit2gtk库文件。

sudo yum search webkit2gtk 

回显信息如下

$=$ Name 和 Summary 匹配：webkit2gtk

webkit2gtk3-devel.aarch64 : Development files for webkit2gtk3 

webkit2gtk3-help.noarch : Documentation files for webkit2gtk3 

webkit2gtk3-jsc.aarch64 : JavaScript engine from webkit2gtk3 

webkit2gtk3-jsc-devel.aarch64 : Development files for JavaScript engine from webkit2gtk3 

Name 匹配：webkit2gtk

webkit2gtk3.aarch64 : GTK+ Web content engine library 

Summary 匹配：webkit2gtk

libproxy-webkitgtk4.aarch64 : plugin for webkit2gtk3 

b. 根据回显信息，执行以下命令，安装webkit2gtk库文件。

sudo yum install -y ${Dependency name} 

此处的Dependency_name为依赖文件名称，可参考回显信息确定。例如，如上回显信息所示，如果回显信息中存在webkit2gtk3-devel，则此处的依赖文件名称为webkit2gtk3-devel；如果回显信息中不存在webkit2gtk3-devel，则需要找到webkit2gtk3，此处的依赖文件名称为webkit2gtk3。

# 说明

EulerOS 2.12操作系统是基于OpenEuler 22.03 LTS SP1开发，需要先配置OpenEuler22.03 LTS SP1的源，再执行安装命令。配置OpenEuler的源具体操作请参见OpenEuler软件源配置。

步骤2 执行以下命令，安装MindStudio Insight通过X11转发的依赖文件。

● Ubuntu等以apt作为包管理软件类型的操作系统

sudo apt-get install -y xterm x11-apps 

● CentOS/EulerOS/OpenEuler等以yum/dnf作为包管理软件类型的操作系统

sudo yum install -y xterm xorg-x11-xauth 

----结束

# 8.2.2 安装操作（VNC 方式）

如果通过VNC转发方式启动MindStudio Insight，可获得更为流畅的体验，所以推荐使用VNC转发方式使用MindStudio Insight工具。

# 说明

EulerOS 2.12系统不支持使用VNC方式启动MindStudio Insight工具。

# 安装依赖

步骤1 执行以下命令，安装MindStudio Insight显示运行依赖的库文件。

Ubuntu等以apt作为包管理软件类型的操作系统

sudo apt install -y libwebkit2gtk-4.0-dev 

● CentOS/EulerOS/OpenEuler等以yum/dnf作为包管理软件类型的操作系统

a. 执行以下命令，查询webkit2gtk库文件。

sudo yum search webkit2gtk 

回显信息如下

$=$ Name 和 Summary 匹配：webkit2gtk

```txt
webkit2GTK3-devel.aarch64:Development files for webkit2GTK3   
webkit2GTK3-help.noarch:Documentation files for webkit2GTK3   
webkit2GTK3-jsc.aarch64:JavaScript engine from webkit2GTK3   
webkit2GTK3-jsc-devel.aarch64:Development files for JavaScript engine from webkit2GTK3   
Name匹配：webkit2GTK   
webkit2GTK3.aarch64：GTK+Webcontentengine library Summary匹配：webkit2GTK   
libproxy-webkitGTK4.aarch64：pluginfor webkit2GTK3
```

b. 根据回显信息，执行以下命令，安装webkit2gtk库文件。

sudo yum install -y ${Dependency name} 

此处的Dependency_name为依赖文件名称，可参考回显信息确定。例如，如上回显信息所示，如果回显信息中存在webkit2gtk3-devel，则此处的依赖文件名称为webkit2gtk3-devel；如果回显信息中不存在webkit2gtk3-devel，则需要找到webkit2gtk3，此处的依赖文件名称为webkit2gtk3。

# 说明

EulerOS 2.12操作系统是基于OpenEuler 22.03 LTS SP1开发，需要先配置OpenEuler22.03 LTS SP1的源，再执行安装命令。配置OpenEuler的源具体操作请参见OpenEuler软件源配置。

步骤2 使用root用户，执行以下命令，安装MindStudio Insight通过VNC转发的桌面依赖。

Ubuntu等以apt作为包管理软件类型的操作系统

apt-get install -y xfce4 xfce4-goodies 

● CentOS/EulerOS/OpenEuler等以yum/dnf作为包管理软件类型的操作系统

a. 执行以下命令，查询是否存在xfce。

yum search xfce 

如果回显中包含xfce相关信息，执行以下命令，安装xfce。

yum install -y xfce4* 

如果回显为“未找到匹配项”，则执行步骤2.b。

b. 执行以下命令，查询是否存在gnome。

yum search gnome 

如果回显中包含gnome相关信息，执行以下命令，安装gnome。

yum install -y gnome* 

步骤3 执行以下命令，安装VNC Server。

Ubuntu等以apt作为包管理软件类型的操作系统

apt-get install -y tightvncserver 

● CentOS/EulerOS/OpenEuler等以yum/dnf作为包管理软件类型的操作系统

yum install -y tigervnc-server 

----结束

# 设置 VNC Server

步骤1 执行以下命令，设置VNC首次连接时的密码。

vncserver 

步骤2 回显如下，按照提示输入密码。

You will require a password to access your desktops. 

Password:请输入密码

Verify:请再次输入密码

步骤3 输入密码后，回显如下。

Would you like to enter a view-only password (y/n)? 

按照提示输入n，回显如下，创建启动脚本、默认配置等，首行中的x值根据实际情况显示，表示显示序号。

New 'localhost.localdomain:x' desktop is localhost.localdomain:x 

Creating default startup script /home/xxx/.vnc/xstartup 

Creating default config /home/xxx/.vnc/config 

Starting applications specified in /home/xxx/.vnc/xstartup 

Log file is /home/xxx/.vnc/localhost.localdomain:3.log 

步骤4 执行以下命令，停止已启用的VNC Server。

vncserver -kill :x 

# 说明

此处的x值与步骤3中首行回显的x值一致。

步骤5 执行vi ~/.vnc/xstartup，打开xstartup启动脚本，并在脚本最后新增一行文本，配置脚本，需要增加的文本内容请参见表8-1。


表 8-1 文本内容


<table><tr><td>已安装依赖</td><td>文本内容</td></tr><tr><td>xfce</td><td>startxfce4 &amp;</td></tr><tr><td>gnome</td><td>gnome-session &amp;</td></tr></table>

步骤6 执行:wq!命令，保存脚本并退出。

----结束

# 启动 VNC Server

执行以下命令，启动VNC Server。

vncserver -localhost -geometry 1920x1080 

# 说明

● localhost：是启动本地主机的VNC服务，需要与端口转发配合使用。如果是安全的网络环境下，也可以不使用localhost，同时也不采用端口转发，可直接执行本地连接VNC Server步骤（不推荐此方式）。

geometry 1920x1080：配置VNC桌面的分辨率为1920x1080，也可以根据用户显示器的分辨率自行配置。

# 端口转发

通过SSH通道安全的将Linux本地主机服务转发至Windows本地端口。

步骤1 打开远程登录工具，选择“Tools > MobaSSHTunnel (port forwarding)”。此处以MobaXterm工具为例。

步骤2 单击“New SSH Tunnel”，新建一个SSH配置。


图 8-1 新建 SSH 配置


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/6af113a2077535579a8fdfd07c3ec396624f2d643365763d008073e8246c5696.jpg)


步骤3 选择“Local port forwarding”，按照表8-2配置页面信息。


图 8-2 Local port forwarding


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/b72eae7b2f3199ea3d9f01c09f87b2df0a3683f1a479cbedc529166233fecae3.jpg)



表 8-2 配置 Local port forwarding 页面信息


<table><tr><td>参数</td><td>说明</td><td>示例</td></tr><tr><td>Remote server</td><td>Linux服务器的地址。</td><td>127.0.0.1</td></tr><tr><td>Remote port</td><td>Linux服务器的端口，值为5900加设置VNC Server中的x（显示序号）值。</td><td>5901</td></tr><tr><td>SSH server</td><td>SSH连接时的IP或URL地址。</td><td>192.168.25.38</td></tr><tr><td>SSH login</td><td>SSH登录的用户名/密码对。</td><td>-</td></tr><tr><td>SSH port</td><td>SSH登录时使用的端口，一般为22。</td><td>22</td></tr><tr><td>Forwarded port</td><td>端口转发到本地Windows对应的端口，可以与Remote port一致。</td><td>5901</td></tr></table>

步骤4 单击“Save”，完成SSH配置。

步骤5 在MobaSSHTunnel弹窗中，选择已配置好的SSH Tunnel，单击 $\uplus$ ，即可开启端口转发。

如果SSH配置中的“SSH login”参数，填写的是用户名，首次启动SSH Tunnel的时候会弹出一个对话框，输入用户对应的密码即可启动SSH Tunnel。

----结束

# 本地连接 VNC Server

步骤1 在MobaXterm工具首页，单击“Session”，进入Session settings页面。

步骤2 单击“VNC”，根据实际情况配置“Remote hostname or IP address”和“Port”。

# 说明

● 如果使用了端口转发功能，“Remote hostname or IP address”为127.0.0.1，“Port”为端口转发中的Forwarded port。

● 如果未使用端口转发，“Remote hostname or IP address”为实际远端Linux的IP，“Port”为5900加设置VNC Server中的x（显示序号）值。


图 8-3 配置 VNC


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/798650438dee5c01bea4b6d511455660f39311838bdf8c05a786fc11ef9e0d56.jpg)


步骤3 配置完成后，单击“OK”，在弹窗中输入VNC的密码后，将桌面转发至本地进行后续操作。


图 8-4 桌面


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/26f3c4832ca4ddfdf9388fdf35863faabc56a6b60b0a03bdcc55ea853b1025b7.jpg)


----结束

# 8.3 插件管理

MindStudio Insight工具支持插件开发功能，为开发者提供自主开发能力，开发者可自主开发插件包，并安装插件包，实现自主开发功能使用。

# 开发插件

开发者可自主开发插件，具体操作可参见插件开发指南。

插件包要求如下：

1. 插件包格式必须为zip压缩包。

2. 插件包中必须包含以下文件：

config.json配置文件。

前端产物：必须为zip压缩包，包含前端asset目录及其文件和index.html文件。

后端产物：必须为zip压缩包，包含对应平台及架构下的插件所需动态库和单个动态库文件。后端产物在config.json配置文件中的键值名为“backend_{platform}_{machine}”，其中platform为平台名称，machine为架构名称。例如，linux x86环境下后端产物键值名为backend_linux_x86_64。

config.json配置文件格式要求如下：

```json
json
{
    "pluginName":"插件名称",
    "frontend":"前端产物名称", // zip压缩包
    "frontend-platform{_machine}":"后端产物名称", // zip或动态库
}
```

其中platform为平台名称，machine为架构名称。

3. 插件包中包含的文件个数不能超过1000个，单个文件大小不能超过200M。

4. 插件包需具有当前用户属主，具有可读可写权限，不支持链接文件和包含链接的文件。

# 说明

MindStudio Insight工具支持通过".so"形式加载任何插件，请务必对所需插件包进行完整性校验，保证其来源安全可信，从而有效避免社区投毒、恶意代码注入等潜在安全风险。

# 安装插件

进入MindStudio Insight工具的安装目录，执行以下命令，安装已开发的插件包。其中plugin package path为插件包所在路径。

python resources/profiler/plugin_install.py install --path=plugin package path 

# 使用插件

安装完成后，打开MindStudio Insight工具，导入数据即可正常使用。

如果插件包使用的是自主开发的唤醒逻辑，则依据实际情况进行使用。

# 8.4 FAQ

# 8.4.1 运行 MindStudio Insight 工具时出现 Missing Dependencies报错弹窗

# 问题现象

在Windows系统运行MindStudio Insight工具时出现Missing Dependencies报错弹窗，且无法运行MindStudio Insight工具。

Missing Dependencies 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/54dd7a1bb9b2675140973cde50a437065d2fa9435bf8731249b99e3ba5da05fd.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/3aabbac6da29a7784e34c645e48395c42a411c31a5af571b57d1d558fd3d770e.jpg)


Please install from 

https://developer.microsoft.com/en-Us/microsoft-edge/webview2/#do wnload-section 

确定

# 原因分析

系统缺少.exe运行的WebView2Runtime文件。

# 解决方案

步骤1 单击链接，进入Microsoft官网。

步骤2 下载“Evergreen Standalone Installer”中x64的安装包，如图8-5所示。

图 8-5 WebView2 安装包

# Download the WebView2 Runtime

When distributing your application, there are a few ways you can ensure the WebView2 

Runtime is on client machines. Learn more about those options. For installation issues 

and error codes see our troubleshooting.guide. 

# Evergreen Bootstrapper

The Bootstrapper is a tiny installer that downloads 

the Evergreen Runtime matching device 

architecture and installs it locally. There is also a 

Link that allows you to programmatically download the Bootstrapper 

Get the Link 

Download 

# Everqreen Standalone Installer

A full-blown installer that can installthe Evergreen 

Runtime inofline environment. Available for 

6/x64/ARM64. 

x86 

x64↓ 

ARM64 

# Fixed Version

Select and package a specific version of the 

WebView2 Runtime with your application. 

Select Version 

120. 

.0.2210 

.77 

arm64 

Download 

# 8.4.2 如何重新解析 text 格式的 Profiling 文件

# 问题现象

在同一版本的MindStudio Insight软件下，再次导入text格式的Profiling文件时，不会重新解析数据，当需要重新解析数据时，该如何解析？

# 解决方案

删除Profiling数据目录中的解析结果文件mindstudio_insight_data.db后，再次导入数据即可重新解析。

# 8.4.3 EulerOS 等系统上运行 MindStudio Insight 工具无法弹出数据导入选择框

# 问题现象

在EulerOS等系统上运行MindStudio Insight工具，单击界面左上方工具栏中的 ，无法弹出导入选择框。

# 解决方案

步骤1 登录MindStudio Insight待安装环境。

步骤2 执行以下命令，设置环境变量。

export WEBKIT_DISABLE_COMPOSITING_MODE=1 

步骤3 执行以下命令，启动MindStudio Insight。

./MindStudio-Insight 

----结束

# 8.4.4 通过 X11 转发方式运行 MindStudio Insight 工具时，输入框信息粘贴有误

# 问题现象

在Linux系统，通过X11转发方式运行MindStudio Insight工具时，在输入框已存在信息情况下，重新粘贴所需信息时会出现错误。

# 原因分析

在Linux系统，通过X11转发方式运行MindStudio Insight工具时，默认开启了“copyon select”，导致剪贴板的信息会变为输入框已存在信息，造成输入框信息粘贴有误。

# 解决方案

方案一：

步骤1 在远程登录工具菜单栏单击“Settings > Configuration”。此处以MobaXterm工具为例。

步骤2 选择“X11”页签，在“Clipboard”选项中选择“disable"copy on select"”，如图8-6所示。


图 8-6 MobaXterm Configuration


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/3b76e006f2847e4b4abbca8d02d65d35470e7369336e111acfe1d39ab3b6eed1.jpg)


步骤3 单击“OK”。

步骤4 完成配置后，重新运行MindStudio Insight。

----结束

方案二：

在MindStudio Insight界面，先删除输入框中已存在的信息，再重新复制粘贴所需信息。

# 8.4.5 MindStudio Insight 工具拖入网络磁盘目录无法加载数据

# 问题现象

在MindStudio Insight工具导入数据时，选择网络磁盘目录，无法导入。

# 原因分析

MindStudio Insight工具仅支持导入本地磁盘目录，而网络磁盘未映射至本地，无法导入。

# 解决方案

步骤1 打开电脑的文件资源管理器。

步骤2 单击“此电脑 $>$ 映射网络驱动器”，弹出“映射网络驱动器”弹窗，如图8-7所示。


图 8-7 映射网络驱动器


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/3847ecd5006c43294c37c80fc0249194c41859b2b33f2418a9b07591d75d43e4.jpg)


步骤3 下拉“驱动器(D)”选框，选择连接指定的驱动器号。

步骤4 单击“文件夹(O)”后的“浏览”，选择所需映射的网络目录。

步骤5 单击“完成(F)”，完成网络目录至本地的映射操作。

步骤6 打开MindStudio Insight工具，重新选择映射后的目录，即可正常导入。

----结束

# 8.4.6 MindStudio Insight 工具运行时出现 Out of Memory 报错问题现象

在MindStudio Insight工具运行时，页面出现错误代码：Out of Memory。

# 原因分析

当前使用的电脑系统整体内存不足。

# 解决方案

步骤1 自行关闭消耗大量内存的程序和不必要的应用，释放电脑系统内存。

步骤2 在MindStudio Insight工具报错页面单击“刷新”按钮，重新加载页面。

----结束

# 8.4.7 MindStudio Insight 工具拖入文件显示禁用

# 问题现象

在Windows系统上安装MindStudio Insight时，选择勾选“Run MindStudio Insight”自动打开MindStudio Insight的情况下，拖入文件显示禁用。

# 解决方案

步骤1 关闭当前已打开的MindStudio Insight工具。

步骤2 双击桌面的“MindStudio Insight”快捷方式图标，或安装目录下的“MindStudio-Insight.exe”，重新打开MindStudio Insight工具。

步骤3 拖入文件，即可正常显示。

----结束

# 8.4.8 MindStudio Insight 运行时出现“cannot open sharedobject file swrast_dri.so”报错

# 问题现象

在Linux系统使用“X11方式”或“VNC方式”启动MindStudio Insight时，MindStudio Insight工具界面白屏，出现“cannot open shared object fileswrast_dri.so”报错信息，如图8-8所示。


图8-8 报错截图


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/6aadf4c783b71caefa5aa0555d69e727b25abb80efe8fce7dee5b7f18852ea66.jpg)


# 原因分析

可能是缺少依赖。

# 解决方案

步骤1 执行以下命令，安装转发依赖文件。

yum install -y mesa-dri-drivers 

步骤2 安装完成后，重新打开MindStudio Insight工具即可。

----结束

# 8.4.9 启动 VNC 时出现“Oh no! Something has gone wrong.” ”报错

# 问题现象

在Linux系统上，使用“VNC方式”启动MindStudio Insight时，启动VNC，出现“Ohno! Something has gone wrong.”报错弹窗，如图8-9所示。


图8-9 报错信息


![image](https://cdn-mineru.openxlab.org.cn/result/2026-03-24/873757ba-1ad8-4dec-ad3b-c5356971074f/cb2e386af8a1bd4debf0aaac4a40b9ad3643ee9a07c5f4f9a5da4a1bff19b017.jpg)



Oh no! Something has gone wrong.


# 原因分析

可能是未开启AllowTcpForwarding。

VNC在某些情况下需要通过SSH通道来实现连接，而TCP转发正是支持这个功能的关键。如果AllowTcpForwarding被关闭，则SSH不允许使用端口转发，因此无法通过SSH通道访问VNC服务。开启AllowTcpForwarding后，就能在本地或远程通过SSH通道连接到VNC服务。

# 解决方案

需要配置SSH服务端。

步骤1 进入/etc/ssh路径，打开sshd_config文件。

步骤2 修改文件中的AllowTcpForwarding为“yes”。

步骤3 执行以下命令，重启SSH服务端。

systemctl restart sshd 

步骤4 重启成功后，重新打开新的窗口启动VNC。

----结束

# 8.4.10 OpenEuler 及其衍生操作系统在安装依赖时提示找不到相关依赖

# 问题现象

在Linux操作系统上，OpenEuler及其衍生操作系统在安装依赖时，提示找不到相关依赖。

# 原因分析

配置的源没有相关依赖。

# 解决方案

可参见LINK配置新的源，并重新安装对应依赖。

# 8.4.11 MindStudio Insight 导入数据时显示黑屏

# 问题现象

在MindStudio Insight工具页面，第一次导入数据显示正常，第二次导入相同的数据时，“概览”界面和“通信”界面显示黑屏。

# 解决方案

方案一：关闭当前MindStudio Insight，重启即可恢复正常。

方案二：在当前MindStudio Insight工具页，查看或导入其他的数据后，再次选择查看刚才的数据，页面即可恢复正常。

# 8.4.12 MindStudio Insight 导入数据后通信界面未显示数据

# 问题现象

使用MindStudio Insight工具导入数据后，通信界面未显示数据。

# 原因分析

当前导入的性能数据目录与以ascend_ms结尾的目录之间存在多层子文件夹，例如：profiling/rank_x/dyn_prof_data/rank_x_start_xxx_end_xxx/xxx_ascend_ms，此时，MindStudio Insight工具会将导入的数据识别为集群数据，导致通信界面显示异常。

# 解决方案

找到以ascend_ms结尾的目录，将其拷贝至新创建的目录下，保证该目录层级为目录名称/ascend_ms结尾的目录，在MindStudio Insight工具中重新导入该目录，即可正常显示。

# 8.4.13 MindStudio Insight 在 TencentOS Server 4.4_x86 操作系统中启动失败

# 问题现象

在Linux的TencentOS Server 4.4_x86操作系统中，启动MindStudio Insight工具，启动失败，报错信息如下：

```txt
** (MindStudio-Insight:302256): WARNING**: 08:07:35.531:  
webkit_settings_set_enable_offline_web.application_cache is deprecated and does nothing.  
JIT session error: Missing definitions in module fs789variant0_6-jitted-objectbuffer: [ fs_variantwhole ]  
Failed to materialize symbols: { (fs789 Variant0_6, { fs Variant_partial, fs Variantwhole }) }  
JIT session error: Could not find symbol at given index, did you add it to JITSymbolTable? index: 4, shndx: 0  
Size of table: 5  
Failed to materialize symbols: { (fs790 Variant0_7, { fs Variant_partial }) } 
```

# 解决方案

执行以下命令后，重新启动MindStudio Insight工具。

```shell
export JSC_useJIT=0  
export JSC_useDFGJIT=0  
export JSC_useFTLJIT=0  
export WEBKIT_DISABLE_COMPOSITING_MODE=1  
unset https-proxy  
unset http-proxy 
```