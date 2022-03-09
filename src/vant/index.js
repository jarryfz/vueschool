import Vue from "vue";
import {
  Lazyload,
  Tabbar,
  TabbarItem,
  Toast,
  Loading,
  Image,
  NavBar,
  Col,
  Row,
  Skeleton,
  ShareSheet,
  Tag,
  Tab,
  Tabs,
  Empty,
  PullRefresh,
  List,
  Icon,
  Image as VanImage,
  Search,
  Cell,
  CellGroup,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  DropdownMenu,
  DropdownItem,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  NoticeBar,
  Uploader,
  Notify,
  Divider,
  Popup
} from "vant";

Vue.use(Lazyload, {
  preLoad: 1.3,
  attempt: 3
});
Vue.use(Image)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(Loading)
  .use(NavBar)
  .use(Col)
  .use(Row)
  .use(Skeleton)
  .use(ShareSheet)
  .use(Tag)
  .use(Empty)
  .use(PullRefresh)
  .use(List)
  .use(Icon)
  .use(VanImage)
  .use(Search)
  .use(Cell)
  .use(CellGroup)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Grid)
  .use(GridItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(NoticeBar)
  .use(Uploader)
  .use(Notify)
  .use(Divider)
  .use(Popup);
