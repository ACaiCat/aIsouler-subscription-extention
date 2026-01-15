import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '小程序-掌上公交-卡片广告',
      desc: '点击[广告]-点击[不感兴趣]-点击[与我无关]',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI'],
      rules: [
        {
          key: 0,
          fastQuery: false,
          matches: [
            'TextView + TextView[text="广告"] + Image[text="feedback_icon"] <n View',
          ],
          snapshotUrls: ['https://i.gkd.li/i/24632424'],
        },
        {
          //preKeys: 0,
          key: 1,
          name: '点击[不感兴趣]',
          fastQuery: false,
          anyMatches: [
            'TextView + TextView[text="不感兴趣"] + TextView[text="反馈问题"] <n View > TextView[text="不感兴趣"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/24632404'],
        },
        {
          //preKeys: 1,
          key: 2,
          name: '点击[与我无关]',
          fastQuery: false,
          anyMatches: [
            'TextView[text="与我无关"] + TextView[text="重复收到多次"] + TextView[text="内容太差"] <n View > TextView[text="与我无关"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/24632423'],
        },
      ],
    },
  ],
});
