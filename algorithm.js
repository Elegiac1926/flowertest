// 花的原型定义
const flowerArchetypes = {
  "玫瑰 Rosa": {
    keywords: ['rose', 'passionate', 'dramatic', 'intense', 'romantic', 'aesthetic'],
    minScore: 25,
    description: {
      name_cn: "玫瑰",
      name_en: "Rosa",
      essence: "你是欲望的化身，爱与痛的辩证。",
      character: "你炽热、矛盾、不可忽视。你的美丽带着危险——刺是你的防御，也是你的诱惑。你渴望被爱到极致，但又害怕平庸的温柔。你的情感浓烈到近乎暴力，你爱得痛苦，也痛得美丽。你是花中的女王，骄傲、戏剧化、永远站在聚光灯下。",
      shadow: "你的激情有时会伤人伤己。你可能沉溺于痛苦，因为它证明了你'活着'。你需要学会：不是所有的爱都需要流血,不是所有的美都需要代价。",
      culture: "在西方，玫瑰象征浪漫之爱（尤其红玫瑰）；在波斯诗歌中，它是夜莺永恒的恋人；在中世纪，它既是圣母的纯洁，也是情欲的隐喻。你承载着这所有的矛盾。",
      suited_for: "艺术家、演员、诗人、所有敢于燃烧自己的人。",
      quote: "'我宁愿在盛放中死去，也不要在枯萎中苟活。'"
    }
  },

  "莲花 Lotus": {
    keywords: ['lotus', 'transcendent', 'zen', 'grounded', 'enlightened', 'holistic'],
    minScore: 25,
    description: {
      name_cn: "莲花",
      name_en: "Lotus",
      essence: "你是从泥土中升起的觉醒。",
      character: "你扎根于污泥，却开出纯净的花。你经历过黑暗，但没有被玷污。你的智慧不是书本上的，而是从苦难中提炼的。你平静、超然，但不是冷漠——你的慈悲建立在对人性深刻的理解上。你不逃避世界,而是在世界中保持出离。",
      shadow: "你的超然有时会变成疏离。你可能用'看破'来逃避真正的投入。记住：觉醒不是离开人间，而是在人间清醒地活着。",
      culture: "在佛教中，莲花是觉悟的象征——'出淤泥而不染'；在印度教中，它是创造之花；在埃及神话中,它代表重生与太阳。你是东方智慧的化身。",
      suited_for: "修行者、哲学家、心理治疗师、所有在苦难中寻找意义的人。",
      quote: "'我的根在泥中,我的心在云端。'"
    }
  },

  "鸢尾 Iris": {
    keywords: ['iris', 'melancholic', 'introspective', 'solitary', 'artistic', 'mysterious'],
    minScore: 25,
    description: {
      name_cn: "鸢尾",
      name_en: "Iris",
      essence: "你是忧郁的贵族，孤独的美学家。",
      character: "你活在自己的精神宫殿里。你的美丽不是张扬的，而是需要凝视才能发现的——像梵高笔下的紫色鸢尾，带着神经质的优雅。你敏感、内省、常常沉浸在某种形而上的忧伤中。你不合群，但你也不在意——孤独对你来说是创作的必需。",
      shadow: "你可能过度浪漫化自己的痛苦，把忧郁当作身份。但要小心：长期的孤绝会让你与世界失联。你的敏感是天赋，不是囚笼。",
      culture: "在希腊神话中，Iris是彩虹女神，连接天地；在日本，鸢尾（菖蒲）象征武士的勇气；在梵高的画中，它是疯狂与美的结合。你是艺术与哀愁的化身。",
      suited_for: "作家、画家、音乐家、所有需要孤独来创造的人。",
      quote: "'我的根在深渊,我的花在云间。'"
    }
  },

  "向日葵 Sunflower": {
    keywords: ['sunflower', 'optimistic', 'vital', 'warm', 'extroverted', 'bold'],
    minScore: 26,
    description: {
      name_cn: "向日葵",
      name_en: "Sunflower",
      essence: "你是不灭的希望,是生命力的狂欢。",
      character: "你永远向着光。你热情、坦荡、毫不掩饰你的渴望和快乐。你的存在本身就是一种治愈——你让人想起夏天、麦田、无忧无虑的童年。你不复杂,但这不是浅薄，而是一种罕见的纯粹。你相信明天会更好,这种信念支撑着你和你身边的人。",
      shadow: "你可能在用'积极'来逃避阴影。不是所有的黑暗都需要被照亮——有时候，坐在黑暗里也是一种勇敢。允许自己悲伤，不会让你的光芒减少。",
      culture: "向日葵原产美洲，在梵高笔下成为'金色的疯狂'；在中国，它象征忠诚和仰慕；在苏联时期，它是丰收的标志。你是阳光的信徒。",
      suited_for: "教师、社工、所有需要带给他人希望的职业。",
      quote: "'只要太阳还在,我就不会低头。'"
    }
  },

  "梅花 Plum Blossom": {
    keywords: ['plum_blossom', 'stoic', 'resilient', 'austere', 'noble', 'solitary'],
    minScore: 28,
    description: {
      name_cn: "梅花",
      name_en: "Plum Blossom",
      essence: "你是风骨的象征,在严寒中傲然独立。",
      character: "你在所有花都凋零时绽放。你不需要温暖的环境、肥沃的土壤、或他人的陪伴——你在逆境中反而更加璀璨。你克制、高洁、有一种清冷的美。你的坚韧不是苦大仇深，而是一种从容的淡定。你是精神上的贵族,不屑与世俗为伍。",
      shadow: "你的清高有时会变成冷漠。你可能用'不需要'来掩盖'不敢要'。记住：接受温暖不是软弱，拒绝孤独也不是堕落。",
      culture: "在中国文化中，梅兰竹菊是'四君子'之首——象征高洁、坚贞；在日本，梅花代表武士道精神。你是东方美学的极致。",
      suited_for: "学者、禁欲主义者、所有在逆境中修行的人。",
      quote: "'不经一番寒彻骨,怎得梅花扑鼻香。'"
    }
  },

  "茉莉 Jasmine": {
    keywords: ['jasmine', 'sensual', 'mysterious', 'delicate', 'nocturnal', 'seductive'],
    minScore: 24,
    description: {
      name_cn: "茉莉",
      name_en: "Jasmine",
      essence: "你是夜的香气,是感官的诱惑。",
      character: "你在黑暗中释放你的魅力。你不是视觉的,而是嗅觉的、触觉的——你的存在是一种氛围,而非一个形象。你柔软、神秘、带着某种东方的魅惑。你的美丽需要靠近才能感知,你不会在人群中喧哗。你是诗人的缪斯,是夏夜的耳语。",
      shadow: "你可能过于依赖'被感知'。你的价值不在于你的香气能走多远,而在于你自己。不要让'诱惑'成为你存在的唯一方式。",
      culture: "在阿拉伯文化中，茉莉是爱情之花；在印度，它编织成新娘的花环；在中国，茉莉花茶是日常的诗意。你是感官世界的女王。",
      suited_for: "香水师、舞者、所有懂得'气氛'胜过'言语'的人。",
      quote: "'我在黑暗中绽放,因为只有夜晚配得上我的香。'"
    }
  },

  "菊花 Chrysanthemum": {
    keywords: ['chrysanthemum', 'nostalgic', 'refined', 'traditional', 'melancholic', 'dignified'],
    minScore: 24,
    description: {
      name_cn: "菊花",
      name_en: "Chrysanthemum",
      essence: "你是秋日的沉思,是时间的见证者。",
      character: "你在夏天的狂欢结束后登场。你不争春,你守秋——你的美丽带着成熟、怀旧和一丝淡淡的哀愁。你优雅、节制,有一种旧时代的风度。你懂得珍惜、告别和放手。你是传统的守护者,但不是僵化的——你的传统是活的,是有温度的。",
      shadow: "你可能过度沉溺于过去。'曾经'固然美好,但不要让它成为你拒绝'现在'的借口。时间向前,你也可以。",
      culture: "在中国，菊与梅兰竹并列为'四君子'——象征隐逸与高洁；在日本，菊花是皇室的标志；在西方，它是墓园之花,代表永恒的记忆。你是时间的诗人。",
      suited_for: "史学家、茶人、园艺师、所有珍视传统的人。",
      quote: "'待到秋来九月八,我花开后百花杀。'"
    }
  },

  "百合 Lily": {
    keywords: ['lily', 'pure', 'sacred', 'idealistic', 'fragile', 'mystical'],
    minScore: 23,
    description: {
      name_cn: "百合",
      name_en: "Lily",
      essence: "你是纯洁的化身,是圣与俗的边界。",
      character: "你白得刺眼,纯得让人不敢触碰。你有一种宗教性的美——不食人间烟火,超凡脱俗。你理想主义、脆弱、容易受伤,但你坚持你的纯粹,即使代价是孤独。你相信爱、美、善,即使现实一再打脸。你的存在本身就是一种信仰。",
      shadow: "你的纯洁可能变成洁癖。你可能用'理想'来逃避'真实',用'完美'来拒绝'人性'。记住：泥土不肮脏,它只是泥土。",
      culture: "在基督教中，百合是圣母的象征；在中国，它代表百年好合；在希腊神话中，它从天后赫拉的乳汁中诞生。你是神圣的使者。",
      suited_for: "神职人员、理想主义者、所有相信'更高之物'的人。",
      quote: "'我宁可玉碎,也不瓦全。'"
    }
  },

  "罂粟 Poppy": {
    keywords: ['poppy', 'passionate', 'volatile', 'dramatic', 'transgressive', 'intense'],
    minScore: 22,
    description: {
      name_cn: "罂粟",
      name_en: "Poppy",
      essence: "你是美丽的危险,是禁忌的诱惑。",
      character: "你艳丽到近乎妖异。你的红不是玫瑰的浪漫,而是血液的颜色——热烈、暴力、不可抗拒。你活在极端：要么盛放,要么死亡,没有中间状态。你的存在挑战道德、挑战规则,你不在乎被定义为'危险',因为危险本身就是你的魅力。",
      shadow: "你的强度可能毁灭自己。你可能沉迷于'极致体验',以至于无法忍受平凡。但生活不只是高潮——学会在平淡中呼吸,也是一种勇气。",
      culture: "在西方，红罂粟是战争与纪念的象征（一战）；在东方,它是鸦片的来源,代表堕落与诱惑；在希腊神话中,它是睡眠之神的花。你是矛盾的极致。",
      suited_for: "革命者、冒险家、所有拒绝平庸的人。",
      quote: "'我在烈火中盛放,在烈火中毁灭。'"
    }
  },

  "山茶 Camellia": {
    keywords: ['camellia', 'dignified', 'stoic', 'aesthetic', 'noble', 'restrained'],
    minScore: 22,
    description: {
      name_cn: "山茶花",
      name_en: "Camellia",
      essence: "你是无声的骄傲,是克制的华丽。",
      character: "你在冬天开花,不为春天的热闹。你美丽但不张扬,华贵但不媚俗。你有一种武士般的风骨——你知道你的价值,所以不需要证明。你的凋谢也是整朵坠落,不拖泥带水,不留残败的余地。你是完美主义者,但你的完美是内在的,不是表演的。",
      shadow: "你的高贵可能变成冷漠。你可能用'体面'来逃避真实的情感。记住：落泪不是失态,崩溃也可以很美。",
      culture: "在日本，山茶花是武士道的象征——整朵坠落如武士的切腹；在中国,它是'花中珍品'；在西方,它象征高贵的爱。你是东方美学与西方浪漫的结合。",
      suited_for: "建筑师、茶道师、所有追求'克制之美'的人。",
      quote: "'我以最完美的姿态离开,不给世界留下我衰败的样子。'"
    }
  },

  "薰衣草 Lavender": {
    keywords: ['lavender', 'delicate', 'ephemeral', 'sensory', 'melancholic', 'mysterious'],
    minScore: 18,
    description: {
      name_cn: "薰衣草",
      name_en: "Lavender",
      essence: "你是记忆的香气,是温柔的忧伤。",
      character: "你是田野上的紫色雾霭,是童年夏天的气味。你柔软、怀旧、带着某种说不清的惆怅。你不激烈,但你持久——你的香气会留在枕头上、衣橱里,成为某个人记忆的锚点。你治愈他人,但你自己也需要被治愈。你是温柔的,但不是软弱的。",
      shadow: "你可能太容易被'利用'。你的温柔不应该成为他人的消耗品。学会说不,不会让你失去你的美。",
      culture: "在法国普罗旺斯,薰衣草是浪漫与宁静的象征；在芳疗中,它代表放松与疗愈；在维多利亚花语中,它意味着'等待'。你是时间的温柔守望者。",
      suited_for: "治疗师、护士、所有以温柔为武器的人。",
      quote: "'我的香气是一首摇篮曲,唱给所有疲惫的灵魂。'"
    }
  },

  "雏菊 Daisy": {
    keywords: ['daisy', 'natural', 'fresh', 'wholesome', 'connected', 'optimistic'],
    minScore: 16,
    description: {
      name_cn: "雏菊",
      name_en: "Daisy",
      essence: "你是简单的快乐,是日常的奇迹。",
      character: "你不戏剧化,不复杂,不沉重——你就是你。你在路边、田野、任何有阳光的地方生长。你不需要特殊的土壤或照料,你适应力强、乐观、充满生命力。你的美丽不是惊艳的,而是舒服的——像清晨的露水,像孩子的笑声。你让人想起生活本来的样子。",
      shadow: "你可能被低估,甚至被忽视。但记住：平凡不等于平庸。你的简单是一种选择,不是能力的限制。",
      culture: "在西方，雏菊象征天真与纯洁；在北欧神话中,它是爱神Freya的圣花；在花语中,它代表'纯洁的爱'。你是日常生活的诗意。",
      suited_for: "园丁、幼教老师、所有珍视'小确幸'的人。",
      quote: "'我不需要宫殿,田野就是我的王国。'"
    }
  },

  "紫藤 Wisteria": {
    keywords: ['wisteria', 'clinging', 'dependent', 'romantic', 'nostalgic'],
    minScore: 12,
    description: {
      name_cn: "紫藤",
      name_en: "Wisteria",
      essence: "你是依附的浪漫,是缠绕的温柔。",
      character: "你需要支撑才能攀升,但一旦找到依靠,你会开出瀑布般的繁花。你的美丽是关系性的——你在'我们'中才完整。你怀旧、浪漫,常常沉浸在某种'曾经的美好'中。你不是独立的个体,而是关系的一部分,这既是你的脆弱,也是你的力量。",
      shadow: "你可能过度依赖,以至于失去自我。如果支撑倒下,你会怎样?学会偶尔站立,即使摇摇晃晃。",
      culture: "在日本，紫藤象征欢迎与款待；在中国古典园林中,它代表缠绵的爱情。你是关系的诗人。",
      suited_for: "所有相信'爱是两个人的事'的人。",
      quote: "'我需要你,这不是软弱,而是我爱的方式。'"
    }
  }
};

// 生成分析报告（核心算法）
function generateAnalysis(scores) {
    // 1. 计算每个花的匹配度
    let flowerMatches = [];
    
    for (let flower in flowerArchetypes) {
        const profile = flowerArchetypes[flower];
        let matchScore = 0;
        let keywordCount = 0;
        
        // 计算该花关键词的总分
        profile.keywords.forEach(keyword => {
            if (scores[keyword]) {
                matchScore += scores[keyword];
                keywordCount++;
            }
        });
        
        // 只有达到最低分数阈值才考虑
        if (matchScore >= profile.minScore) {
            flowerMatches.push({
                name: flower,
                score: matchScore,
                avgScore: keywordCount > 0 ? matchScore / keywordCount : 0,
                profile: profile
            });
        }
    }
    
    // 2. 按匹配分数排序
    flowerMatches.sort((a, b) => b.score - a.score);
    
    // 3. 确定主要花朵
    let primaryFlower = flowerMatches[0];
    let secondaryFlower = flowerMatches.length > 1 ? flowerMatches[1] : null;
    
    // 4. 如果没有匹配的花（极少情况），给一个通用结果
    if (!primaryFlower) {
        return {
            title: "野花 Wildflower",
            content: `
                <p class="opening">你是不被命名的野花,自由生长。</p>
                
                <h3>你的气质</h3>
                <p>你可能是那种'无法归类'的人——不属于任何一个明确的类型,或者你正处在转变期。这不是问题,而是一种开放性。你还在成为,还在探索,还在定义自己的颜色和香气。</p>
                
                <h3>给你的话</h3>
                <p>不是每朵花都需要有名字。继续生长,继续绽放,你终会找到属于自己的季节。</p>
                
                <p class="closing">"做一朵野花又何妨？我自由,我在风中。"</p>
            `
        };
    }
    
    // 5. 生成详细报告
    let title = primaryFlower.profile.description.name_cn + " " + primaryFlower.profile.description.name_en;
    let content = '';
    let desc = primaryFlower.profile.description;
    
    // 开场
    content += `<p class="opening">${desc.essence}</p>`;
    
    // 核心气质
    content += `<h3>你的气质</h3>`;
    content += `<p>${desc.character}</p>`;
    
    // 如果有显著的次要花朵（分数接近），加入混合描述
    if (secondaryFlower && secondaryFlower.score > primaryFlower.score * 0.75) {
        content += `<h3>你的另一面</h3>`;
        content += `<p>你同时带有<strong>${secondaryFlower.profile.description.name_cn}</strong>的特质：${secondaryFlower.profile.description.essence}</p>`;
        content += `<p class="secondary-trait">${secondaryFlower.profile.description.character.substring(0, 150)}...</p>`;
    }
    
    // 阴影面
    if (desc.shadow) {
        content += `<h3>需要留意的</h3>`;
        content += `<p>${desc.shadow}</p>`;
    }
    
    // 文化意涵
    content += `<h3>你在文化中的位置</h3>`;
    content += `<p>${desc.culture}</p>`;
    
    // 适合的道路
    content += `<h3>你适合的道路</h3>`;
    content += `<p>${desc.suited_for}</p>`;
    
    // 引语
    content += `<p class="flower-quote">${desc.quote}</p>`;
    
    // 结尾
    content += `<p class="closing">每一朵花都有它的季节。<br>你不需要成为玫瑰园里的玫瑰,<br>你只需要成为你自己。</p>`;
    
    return { title, content };
}
