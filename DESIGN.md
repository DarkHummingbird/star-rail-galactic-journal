# Galactic Journal
KPR-inspired narrative experience for Honkai: Star Rail fans. Preserve the exact train opening assets; reveal March 7th first. Use the game's true artwork, large offset Oxanium Latin type, thick Chinese title lettering, a restrained 1px fixed frame and compact navigation.
Paper #f5f4f1, ink #12131a, March pink #eaa9c6, ice blue artwork. Full-screen March composition shrinks to a perspective card; white atlas separates colorful world scenes. Scrolling drives scale/rotation and layered characters. Desktop canvas only; static mode preserves all content. No accounts, backend or invented product claims.

## Companion archive
Desktop-only lavender section after March 7th. Eleven layered portrait cards; March centered by default. In-page selection, arrow keys and previous/next buttons update the same archive. Scroll-driven deck reveal uses GSAP transforms. Desktop canvas minimum 1100px; no mobile variant or secondary routes.

## Interactive journey update
Opening now waits for an explicit click then fades through white into March. Archive rotates every five seconds while visible; hover, keyboard focus, reduced motion and explicit pause suspend autoplay. Upper archive shows matching character biography and affiliation. All destinations have a scroll-scrubbed path divider: Destruction, Preservation, Hunt (user-directed Luofu), Harmony. A pale global reticle follows the mouse over content. Hold for 280ms to reveal four independent context windows, staggered by 350ms. Windows drift continuously, react to pointer movement and transition between three distributed layouts every 6.5 seconds. Release, pointer cancel, blur, scroll, resize, Escape and hidden-tab clear the overlay. Space/Enter also support holding via a keyboard control. No new pages.

## Portrait framing refinement
All eleven cards have independent face anchors and portrait scales, keeping complete heads visible in the active card. Reduced crew stage height improves desktop composition at 1165×724.

## Faster scrolling and cosmic final chapter
Scroll-linked catch-up reduced to 0.18–0.25s; March pin distance 1250px and world pin distance max(1200px, 1.3 viewport heights). Removed repeated frame theme layout reads from each world tween update; scroll updates remain animation-frame scheduled and scrub completion synchronizes theme. Final chapter uses the retained Astral Express nebula cover with a dark readability gradient, white type and pale boarding button.

## Aeon dividers and context scanning
Four dark aeon interludes pair the Trailblazer paths with Nanook, Qlipoth, Lan and Xipe. Original aeon artwork, individual accent hues, large left-aligned path labels and right-side aeon captions replace the blank pale dividers. White boarding hold extended from .15s to .55s. Scanner now only activates inside revealed world scenes; alpha masks distinguish visible character pixels from transparent scene areas. Each world has a separate companion biography/path and location record. Other chapters have neither scanner cursor nor keyboard scan control.

## Narrative gallery / v12
Experience mode. Maintain the approved oversized editorial lettering and anime artwork. The existing March illustration is exported at its full 2048px source resolution and reframed as a face close-up, then shared through landscape and portrait masks into the crew deck. Crew advances every 2 seconds with .4s transitions, pauses on hover/focus or manual pause.
Atlas cards use asymmetric notched geometric outlines; remove the center path ornament. Clicking a route expands its selected scene before the existing emblem/Aeon/world sequence. Aeons now use the user's supplied artwork. Image editor service unavailable during this update: Lan and Xipe bottom attribution is excluded by presentation cropping; originals are preserved.
World scenes use bounded two-image crossfades (.6s after a full 3s dwell), with previous/next, pause, progress, and capture. Remove separate character cutouts. Per-image character polygons resolve current character metadata; elsewhere the scanner reads the scene. Hold pauses the carousel, release resets dwell. Narrow reception artwork is retained as a Herta scanner detail. Person scans use portrait cards; scene scans use landscape cards.
Capture stores the actual image and source world locally, up to three recent memories, and restores it on revisit. Compact terminal statuses reflect actual boarding, route, scan and capture events. Interaction sound uses low-volume oscillator cues with an independent SFX toggle; music persists across chapters and ducks while scanning. Reduced motion disables autoplay and preserves controls/content.

## v13 direct archive handoff
Remove the intermediate landscape quote page. March now shrinks continuously from close-up to the matching center archive portrait; surrounding cards fan out during the same scroll beat. Retain identical image geometry through handoff. Original lossless PNG replaces compressed March export; close-up zoom is capped at 1.45 to reduce source-pixel enlargement. AI restoration was unavailable due to a network error; no artificial resolution claim. World carousels predecode adjacent images, retain latest requested index across rapid clicks, and accelerate active fades on manual input. Correct Luofu Yunli and Penacony Rappa metadata and path icons.

## v14 linked chapter narratives
March uses the supplied lossless 1800×1800 transparent illustration, composed with large left typography and a complete right-side face, hand, and camera. TRAILBLAZE is primary; ENCOUNTER/REMEMBER form supporting lines. The same illustration reframes into the center archive card without an intermediate quote page. Manual archive selection pauses the 2-second rotation until resumed.
The archive deck turns into the route atlas. Each world has a distinct story tray and scene transition: Herta orbit-to-interior exploration, Jarilo upper/lower city contrast, Luofu character relationships, Penacony dream windows. Ten newly supplied scene images extend Herta interiors and Jarilo underground. World scenes retain a full 3-second dwell; manual transitions accelerate and preserve latest requested destination.
Captures animate to the journal navigation and store actual source scenes. Empty journal shows an invitation to capture rather than example photos. Final recap counts actual visited destinations, revealed records, and saved memories. Scanner uses three readable windows. BGM and interaction sounds remain independently controlled.
Desktop is the required target per the latest user direction. Retain the existing narrow-screen fallback without further mobile-specific design work. Autoplay remains 2s/3s while visible; reduced-motion preference pauses it. Desktop FX-off preserves all controls. No horizontal overflow. Preserve existing hosting audience. GitHub main and Pages retain the v13 snapshot requested before redesign; do not push subsequent changes without user instruction.

## v15 browsing refinements
Prioritize people-bearing artwork in each world's carousel, preserving relative order within both groups; keep scenic atlas thumbnails. Herta currently has scene-only artwork. Compress the Aeon interlude scroll distance and animation segments to 65% of v14, retaining the scene browsing interval and 3-second image dwell. Restore the fixed circular scanner cue without Path-specific imagery. Remove the Luofu three-character shortcut tray; holding directly on visible characters still shows their records.

## v16 — 双面卡片与固定时长章节过场

- 人物档案到地图使用四个连续的双面卡片（黑塔、布洛妮娅、景元、知更鸟），前面继承当前档案裁切与几何位置，背面直接使用对应世界地图图片。正反面有真实 180° Y 轴旋转和背面隐藏，翻转途中不会交叉淡化图片。总时长 1.20 秒；地图文本在 0.25–1.15 秒内逐字出现。
- 桌面舞台固定在视口，滚轮累计 80px 触发一段完整动画。动画运行时丢弃输入，不排队；同一滚动惯性尾段不能重复触发。内容页完整停留，反向滚动返回上一章。键盘方向键和翻页键同样可用。
- 星神到世界每站 1.55 秒：标志放大 0.35 秒、星神出现 0.35 秒、专属揭示 0.85 秒。纳努克由胸口金光扩散；克里珀以原画原生 SVG 遮罩分离锤与手臂，挥击后揭示；岚弓箭发光到白屏，白色峰值保持 0.08 秒；希佩 24 块拼图按左下至右上对角线重建画面，最长错开 0.55 秒，每块 0.30 秒，合计 0.85 秒。
- 按住读取星神时暂停章节时间轴，松开续播，切出浏览器也暂停。人物 2 秒、场景 3 秒轮换与独立音乐、音效开关保留。世界快门统一为相机加文字，保存当前真实轮播画面。
- 开场期间隐藏全部框架导航与终端；原登车白屏 2.65 秒保持，导航淡入 0.25 秒与白屏退出重叠。最后一页保留原站点非官方署名及官方网站入口。
- 本地检查：完整前进到四站与留影页；卡片中间帧有四组正反面，落位后正常显示地图与文字；测得卡片约 1.19 秒、未暂停的星神过场约 1.54 秒；按住空格 0.70 秒后过场约 2.25 秒，验证暂停/续播；无控制台错误，视口位置始终为 0。
- 用户提供的 2026-10-12 00.25.01 录屏时长 2.33 秒，仅见 KPR 场景停留，未含卡片翻转过程。双面卡片按用户明确描述及已批准方案实现，没有声称逐帧还原该片段。
- 仅更新原 Sites 网站；不向 GitHub 或 GitHub Pages 推送。

## v17 — 滚轮控制星神停留

- 每站拆为独立星神停留点和场景停留点。一次滚轮仅播放 0.70 秒标志到星神，随后无限停留；下一次独立滚轮才播放 0.85 秒专属转场进入场景，反向滚轮返回星神。没有定时跳页或排队推进。
- 地图卡入口和导航进入对应星神，场景页再滚动进入下一站星神。保留页内人物 2 秒、场景 3 秒轮播；轮播不切换章节。

## v18 — 实时滚轮时间轴

- 鼠标滚轮增量直接映射虚拟滚动距离与时间轴；无触发阈值、补间追赶、自动补完、吸附或动画锁。停止输入即停住，反向输入沿同一时间轴倒退。
- 双面卡片使用暂停的同一条翻转时间轴与主时间轴同步；跨过翻转区间后回收临时卡片，反向进入时复用原始人物几何数据。
- 每段滚动距离：三月七到档案650px，档案到地图500px，星神出现240px，星神到场景340px，结尾450px。动画时长由滚动速度决定，页内2秒/3秒轮播保留，过渡途中暂停人物轮换。导航点击保留0.8秒定点定位，可随时用滚轮接管。

## v19 — 降低灵敏度与三月七转场响应

- 滚轮增量系数降至0.55，同样距离仅推进原来的55%；保留实时停住、反向倒退，无惯性补完。每帧合并滚轮事件，减少高频事件对主线程的重复绘制。
- 三月七转场去掉开头0.9时间轴单位的静止段，首个滚轮增量立即开始缩入档案；人物与裁切线性跟手。复杂14点动态多边形改为四边圆角inset，活动人物层按需提升。
- 按用户要求不运行测试或浏览器检查。仅同步、打包并发布原Sites网站，不推送GitHub。
