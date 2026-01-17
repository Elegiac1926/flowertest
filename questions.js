const questions = [
  {
    id: 1,
    question: "如果用一种天气来形容你的内心基调，你会选择？",
    options: [
      { text: "清晨薄雾——朦胧、诗意、需要阳光穿透", score: { lotus: 2, jasmine: 2, mystical: 2, tender: 1 } },
      { text: "正午烈日——炽热、直白、不留余地", score: { sunflower: 3, poppy: 2, passionate: 2, bold: 2 } },
      { text: "暴雨前的乌云——压抑、电闪雷鸣前的静默", score: { rose: 2, iris: 3, melancholic: 2, depth: 2 } },
      { text: "秋日斜阳——温柔、怀旧、带着淡淡的哀愁", score: { chrysanthemum: 3, lily: 2, nostalgic: 2, refined: 2 } },
      { text: "雪后晴空——清冽、纯净、不染纤尘", score: { plum_blossom: 3, camellia: 2, austere: 2, noble: 2 } }
    ]
  },
  {
    id: 2,
    question: "在你的人生叙事中，'伤痛'扮演什么角色？",
    options: [
      { text: "它是我的勋章，我把它转化为力量", score: { rose: 3, poppy: 2, resilient: 2, transformative: 1 } },
      { text: "它沉在水底，我依然能保持表面的平静", score: { lotus: 3, lily: 2, transcendent: 2, concealed: 2 } },
      { text: "它是我诗歌的原料，我与它共生", score: { iris: 3, lavender: 2, artistic: 2, melancholic: 2 } },
      { text: "我试图遗忘它，转向阳光和快乐", score: { sunflower: 3, daisy: 2, optimistic: 2, avoidant: 1 } },
      { text: "它淬炼了我，让我更加清冷和坚韧", score: { plum_blossom: 3, camellia: 2, stoic: 2, tempered: 2 } }
    ]
  },
  {
    id: 3,
    question: "如果让你选择一种'生长方式'，你会是？",
    options: [
      { text: "攀援而上——我需要依附和支撑，但会开出繁花", score: { jasmine: 3, wisteria: 2, dependent: 2, clinging: 1 } },
      { text: "独自挺立——宁可孤独，也要保持独立的姿态", score: { iris: 3, plum_blossom: 2, solitary: 2, proud: 2 } },
      { text: "匍匐蔓延——我会占据我能到达的每一寸土地", score: { rose: 2, poppy: 2, expansive: 2, assertive: 1 } },
      { text: "扎根深处——我把所有力量投入向下生长", score: { lotus: 3, chrysanthemum: 2, grounded: 2, inward: 2 } },
      { text: "向光而生——我永远追逐太阳的方向", score: { sunflower: 4, daisy: 2, optimistic: 2, extroverted: 2 } }
    ]
  },
  {
    id: 4,
    question: "在你的幻想中，'完美的爱'是什么样子？",
    options: [
      { text: "灵魂的镜像——彼此映照，无需言语", score: { lily: 3, lotus: 2, mystical: 2, idealistic: 2 } },
      { text: "带刺的拥抱——痛并爱着，爱到极致", score: { rose: 4, poppy: 2, passionate: 3, paradoxical: 2 } },
      { text: "清晨的露水——短暂、纯粹、不留痕迹", score: { jasmine: 3, plum_blossom: 2, ephemeral: 2, delicate: 2 } },
      { text: "旷野的阳光——热烈、坦荡、毫无保留", score: { sunflower: 4, poppy: 2, bold: 2, transparent: 2 } },
      { text: "古诗中的意象——距离产生美，近了就破碎", score: { chrysanthemum: 3, iris: 3, aesthetic: 2, distant: 2 } }
    ]
  },
  {
    id: 5,
    question: "如果你的人生是一幅画，主色调会是？",
    options: [
      { text: "深红或紫红——浓烈、欲望、血液的颜色", score: { rose: 3, poppy: 3, passionate: 2, intense: 2 } },
      { text: "纯白或乳白——干净、脆弱、一尘不染", score: { lily: 3, jasmine: 3, pure: 2, fragile: 2 } },
      { text: "金黄或橙黄——温暖、生命力、光芒", score: { sunflower: 4, chrysanthemum: 2, vital: 2, warm: 2 } },
      { text: "淡紫或灰蓝——忧郁、神秘、诗意", score: { iris: 4, lavender: 3, melancholic: 2, introspective: 2 } },
      { text: "墨色或深绿——克制、深沉、隐忍", score: { plum_blossom: 3, camellia: 3, austere: 2, restrained: 2 } }
    ]
  },
  {
    id: 6,
    question: "在社交场合，你更像是？",
    options: [
      { text: "聚光灯下的焦点——我享受被看见", score: { rose: 3, sunflower: 3, exhibitionistic: 2, confident: 2 } },
      { text: "角落里的观察者——我在暗处看得更清楚", score: { iris: 3, plum_blossom: 2, introverted: 2, observant: 2 } },
      { text: "游走的香气——你感觉到我，但抓不住我", score: { jasmine: 4, lavender: 2, elusive: 2, sensual: 2 } },
      { text: "沉默的在场者——我在，但我不需要证明", score: { lotus: 3, chrysanthemum: 2, self_contained: 2, zen: 2 } },
      { text: "话题的制造者——我用热情点燃气氛", score: { sunflower: 3, poppy: 2, extroverted: 2, energetic: 2 } }
    ]
  },
  {
    id: 7,
    question: "你与'美'的关系是？",
    options: [
      { text: "我追求美，甚至不惜代价", score: { rose: 3, camellia: 2, aesthetic: 2, vain: 1 } },
      { text: "美对我来说是一种救赎，是痛苦的解药", score: { iris: 3, poppy: 2, artistic: 2, compensatory: 2 } },
      { text: "美是自然流淌的，我不刻意追求", score: { daisy: 2, sunflower: 2, natural: 2, unaffected: 2 } },
      { text: "美是一种修行，是克制和留白", score: { plum_blossom: 4, chrysanthemum: 3, minimalist: 2, disciplined: 2 } },
      { text: "美是感官的，是气味、触感、瞬间", score: { jasmine: 3, lavender: 3, sensual: 2, ephemeral: 2 } }
    ]
  },
  {
    id: 8,
    question: "如果用一种'香气'来形容你的存在感？",
    options: [
      { text: "浓郁到无法忽视——玫瑰、麝香、沉香", score: { rose: 4, poppy: 2, overwhelming: 2, memorable: 2 } },
      { text: "若有若无的甜——夜晚才释放的茉莉", score: { jasmine: 4, lily: 2, nocturnal: 2, seductive: 2 } },
      { text: "清新而短暂——雨后的草地，转瞬即逝", score: { daisy: 2, lavender: 2, fresh: 2, fleeting: 2 } },
      { text: "冷冽的——薄荷、雪松、苦艾", score: { plum_blossom: 3, iris: 2, cold: 2, sharp: 2 } },
      { text: "温暖的阳光气息——没有具体的香，但让人安心", score: { sunflower: 3, chrysanthemum: 2, comforting: 2, wholesome: 2 } }
    ]
  },
  {
    id: 9,
    question: "在你的梦境中，最常出现的场景是？",
    options: [
      { text: "古老的宫殿或废墟——华丽但衰败", score: { rose: 2, iris: 3, decadent: 2, haunted: 2 } },
      { text: "无边的水域——湖、海、或雨", score: { lotus: 3, lily: 3, fluid: 2, unconscious: 2 } },
      { text: "金色的麦田或向日葵海", score: { sunflower: 4, chrysanthemum: 2, idyllic: 2, hopeful: 2 } },
      { text: "孤独的山峰或雪地", score: { plum_blossom: 4, camellia: 2, solitary: 2, ascetic: 2 } },
      { text: "迷雾中的花园——看不清路，但闻得到香", score: { jasmine: 3, lavender: 3, mysterious: 2, sensory: 2 } }
    ]
  },
  {
    id: 10,
    question: "如果要选择一种'凋谢的方式'，你希望是？",
    options: [
      { text: "在最盛放时突然坠落——不留衰败的余地", score: { poppy: 4, camellia: 3, dramatic: 2, uncompromising: 2 } },
      { text: "一片片花瓣飘零——缓慢、诗意、充满仪式感", score: { rose: 3, chrysanthemum: 3, romantic: 2, ceremonial: 2 } },
      { text: "连同枝叶一起枯萎——回归泥土，完成循环", score: { lotus: 3, sunflower: 2, holistic: 2, accepting: 2 } },
      { text: "在霜降前的最后一夜——带着体面和骄傲", score: { plum_blossom: 4, iris: 3, dignified: 2, stoic: 2 } },
      { text: "化作香气留存——肉体消失，气味永恒", score: { jasmine: 4, lavender: 3, ethereal: 2, transcendent: 2 } }
    ]
  },
  {
    id: 11,
    question: "你与'时间'的关系是？",
    options: [
      { text: "我活在此刻的绽放，不忧虑明天", score: { poppy: 3, sunflower: 3, present_oriented: 2, carpe_diem: 2 } },
      { text: "我沉浸在过去的记忆，它们塑造了我", score: { chrysanthemum: 3, iris: 3, nostalgic: 2, backward_looking: 2 } },
      { text: "时间对我是残酷的，我在与它对抗", score: { rose: 3, camellia: 2, aging_anxiety: 2, defiant: 2 } },
      { text: "我超越时间——我在永恒中", score: { lotus: 4, plum_blossom: 3, timeless: 2, transcendent: 2 } },
      { text: "时间像流水，我随它漂流", score: { lily: 2, jasmine: 2, passive: 2, accepting: 2 } }
    ]
  },
  {
    id: 12,
    question: "如果你是一首诗，你的韵脚会是？",
    options: [
      { text: "规整的律诗——严谨、对称、克制", score: { plum_blossom: 3, chrysanthemum: 3, structured: 2, disciplined: 2 } },
      { text: "奔放的自由诗——情感直白、不拘格式", score: { sunflower: 3, poppy: 3, liberated: 2, expressive: 2 } },
      { text: "朦胧诗——意象叠加，需要解读", score: { iris: 4, lotus: 3, symbolic: 2, obscure: 2 } },
      { text: "情诗或挽歌——关于爱与失去", score: { rose: 4, jasmine: 3, romantic: 2, sentimental: 2 } },
      { text: "短小的俳句——留白、瞬间、禅意", score: { plum_blossom: 3, camellia: 3, minimalist: 2, zen: 2 } }
    ]
  },
  {
    id: 13,
    question: "在你的内心深处，'孤独'是什么？",
    options: [
      { text: "我的宫殿——只有在孤独中我才是完整的", score: { iris: 4, plum_blossom: 4, solitary: 2, self_sufficient: 2 } },
      { text: "我的敌人——我用关系和热闹来抵抗它", score: { sunflower: 3, rose: 2, social: 2, lonely: 1 } },
      { text: "我的老师——它让我看清自己", score: { lotus: 3, chrysanthemum: 3, introspective: 2, wise: 2 } },
      { text: "一种美学——孤独是高贵的、诗意的", score: { iris: 3, camellia: 3, aesthetic: 2, romanticized: 2 } },
      { text: "我不太感受到孤独，我总是与世界连接", score: { daisy: 2, sunflower: 2, connected: 2, extroverted: 2 } }
    ]
  },
  {
    id: 14,
    question: "如果你的情感是一种天然材质，它会是？",
    options: [
      { text: "丝绸——柔软、光滑、易起褶皱", score: { jasmine: 3, lily: 3, delicate: 2, luxurious: 2 } },
      { text: "石头——坚硬、冰冷、历经风霜", score: { plum_blossom: 4, camellia: 3, hard: 2, enduring: 2 } },
      { text: "火焰——炽热、危险、难以掌控", score: { poppy: 4, rose: 3, passionate: 3, volatile: 2 } },
      { text: "水——流动、包容、深不可测", score: { lotus: 4, iris: 3, fluid: 2, mysterious: 2 } },
      { text: "阳光——温暖、明亮、无处不在", score: { sunflower: 4, daisy: 2, warm: 2, generous: 2 } }
    ]
  },
  {
    id: 15,
    question: "在你的价值体系中，什么是不可妥协的？",
    options: [
      { text: "美和尊严——丑陋和屈辱我无法忍受", score: { rose: 3, camellia: 3, aesthetic: 2, proud: 2 } },
      { text: "真诚和纯粹——虚伪让我窒息", score: { lily: 3, plum_blossom: 3, authentic: 2, idealistic: 2 } },
      { text: "自由和独立——被束缚是最大的痛苦", score: { iris: 3, poppy: 3, autonomous: 2, rebellious: 2 } },
      { text: "快乐和光明——我拒绝沉溺于黑暗", score: { sunflower: 4, daisy: 3, optimistic: 2, positive: 2 } },
      { text: "深度和意义——肤浅是对生命的亵渎", score: { lotus: 3, chrysanthemum: 3, profound: 2, philosophical: 2 } }
    ]
  },
  {
    id: 16,
    question: "如果让你选择一种'绽放的时刻'？",
    options: [
      { text: "黎明——第一缕光中悄然开放", score: { plum_blossom: 3, jasmine: 3, quiet: 2, anticipatory: 2 } },
      { text: "正午——在最热烈的阳光下盛放", score: { sunflower: 4, poppy: 3, bold: 2, unashamed: 2 } },
      { text: "黄昏——在落日余晖中展现最后的美", score: { chrysanthemum: 4, rose: 3, melancholic: 2, nostalgic: 2 } },
      { text: "深夜——在黑暗中释放不为人知的香", score: { jasmine: 4, lily: 3, mysterious: 2, nocturnal: 2 } },
      { text: "寒冬——在冰雪中傲然独立", score: { plum_blossom: 5, camellia: 3, resilient: 2, defiant: 3 } }
    ]
  },
  {
    id: 17,
    question: "你的'根系'扎在哪里？",
    options: [
      { text: "泥土——我需要踏实、传统、归属感", score: { chrysanthemum: 3, sunflower: 2, grounded: 2, traditional: 2 } },
      { text: "水中——我漂浮、流动、不固定", score: { lotus: 4, lily: 3, adaptable: 2, rootless: 1 } },
      { text: "岩缝——我在贫瘠中生长，这让我更坚韧", score: { plum_blossom: 4, iris: 3, resilient: 2, austere: 2 } },
      { text: "他人的花园——我需要被培养和欣赏", score: { rose: 3, jasmine: 2, dependent: 2, cultivated: 2 } },
      { text: "荒野——我自由生长，不需要园丁", score: { poppy: 3, iris: 2, wild: 2, untamed: 2 } }
    ]
  },
  {
    id: 18,
    question: "如果你的存在是一种声音，它会是？",
    options: [
      { text: "教堂的钟声——庄重、回响、神圣", score: { lily: 3, plum_blossom: 3, sacred: 2, resonant: 2 } },
      { text: "风中的铃铛——轻盈、摇曳、若有若无", score: { jasmine: 4, lavender: 2, delicate: 2, ephemeral: 2 } },
      { text: "夏日的蝉鸣——热烈、持续、不可忽视", score: { sunflower: 3, poppy: 3, insistent: 2, vital: 2 } },
      { text: "远山的箫声——悠长、孤寂、空灵", score: { iris: 4, chrysanthemum: 3, melancholic: 2, distant: 2 } },
      { text: "寺庙的木鱼——单调、重复、禅意", score: { lotus: 3, plum_blossom: 2, meditative: 2, rhythmic: 2 } }
    ]
  },
  {
    id: 19,
    question: "在你的人生剧本中，'高潮'通常是什么？",
    options: [
      { text: "激烈的冲突和和解——戏剧性、情绪饱满", score: { rose: 4, poppy: 3, dramatic: 2, intense: 2 } },
      { text: "顿悟的瞬间——突然的领悟和升华", score: { lotus: 4, iris: 3, epiphanic: 2, transcendent: 2 } },
      { text: "平静中的圆满——不需要高潮，只要和谐", score: { chrysanthemum: 3, lily: 3, harmonious: 2, peaceful: 2 } },
      { text: "突破的时刻——冲破限制,奔向自由", score: { sunflower: 3, poppy: 3, liberating: 2, triumphant: 2 } },
      { text: "孤独的坚守——在逆境中不改其志", score: { plum_blossom: 4, camellia: 3, heroic: 2, solitary: 2 } }
    ]
  },
  {
    id: 20,
    question: "最后，如果此刻让你凋零，你的遗言会是？",
    options: [
      { text: "'我曾那样炽烈地爱过'", score: { rose: 4, poppy: 3, passionate: 3, romantic: 2 } },
      { text: "'我保持了我的纯洁'", score: { lily: 4, plum_blossom: 3, pure: 2, uncompromising: 2 } },
      { text: "'我向着光，无怨无悔'", score: { sunflower: 4, daisy: 2, optimistic: 2, grateful: 2 } },
      { text: "'我看透了，也放下了'", score: { lotus: 4, chrysanthemum: 3, enlightened: 2, detached: 2 } },
      { text: "'我孤独地美丽过'", score: { iris: 4, camellia: 3, solitary: 2, aesthetic: 2 } }
    ]
  }
];

// 验证码配置
const ACCESS_CODE = "FLOWER2026";