import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 114516,
  name: 'Cai的AIsouler规则扩展',
  version: 1,
  author: 'Cai',
  checkUpdateUrl: 'https://raw.githubusercontent.com/ACaiCat/aIsouler-subscription-extention/refs/heads/main/dist/gkd.version.json5',
  supportUri: 'https://github.com/ACaiCat/aIsouler-subscription-extention',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
