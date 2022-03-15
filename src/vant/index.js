import {
  Button,
  Tabbar,
  TabbarItem,
} from 'vant';

export function Vant(app) {
  app
    .use(Button)
    .use(Tabbar)
    .use(TabbarItem)
}