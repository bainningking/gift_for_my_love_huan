
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '紧张刺激的环仔礼物大转盘',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '我自将心照白月', },
    { key: 's', wording: '爱如潮水没首身', },
    { key: 'd', wording: '杨柳依依情不断', },
    { key: 'f', wording: '环宇穷宙难离分', },
    { key: 'g', wording: '准备好了吗？紧张刺激的大转盘即将开启！', },
  ],
  // 最终解释权归属人
  owner: '环仔的小哥',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '乐高积木花束', alias: '乐高花束', image: '/images/hua.png',  description: '送你一束不会凋零的花' },
  { key: 'w', name: '京东plus会员（永久）', alias: '京东vip', image: '/images/plus.jpg',  description: '承包你一辈子的vip' },
  { key: 'e', name: '美美哒全身套装', alias: '穿上你就美美哒', image: '/images/qunzi.jpg',  description: '怎么美，怎么穿' },
  { key: 'r', name: '520红包', alias: '520，每一天', image: '/images/520.png',  description: '我爱你，宝宝' },
  { key: 't', name: '动物园一日游', alias: '看大脑斧', image: '/images/dongwuyuan.png',  description: '想陪你看遍世界' },
  { key: 'y', name: '1314红包', alias: '爱你，1314', image: '/images/1314.png',  description: '一生一世，我都会在你旁边' },
  { key: 'u', name: 'SKⅡ神仙水5步装', alias: 'SKⅡ', image: '/images/sk.jpg',  description: 'SKⅡ？买！' },
  { key: 'i', name: '0.52红包', alias: '倒过来也是520', image: '/images/052.png',  description: '红包再小也是爱' },
];
