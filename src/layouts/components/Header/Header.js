//phần header
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //import list icon
import {
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faMoon,
  faLightbulb,
  faCoins,
  faGear,
  faSignOut,
  faHeart,
  faUser,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import config from '~/config';
import { MessageIcon, InboxIcon } from '~/components/Icons';

const cx = classNames.bind(styles); //bind object styles trả về biến cx

//menu chưa login
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: 'Trung tâm Nhà sáng tạo Live',
  },
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng việt',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên bàn phím',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Chế độ tối',
  },
];

//menu đã login
const isLogin = true; //giả định đã login để hiển thị menu riêng cho login
const MENU_ITEMS_LOGIN = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'Xem hồ sơ',
    to: '/user',
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    title: 'Yêu thích',
    to: '/user/favorite',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Nhận xu',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} />,
    title: 'Xem phân tích',
    to: '/creator-center/analytics/overview',
  },
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: 'Live Studio',
    to: '/live-studio',
  },
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: 'Trung tâm Live',
    to: '/live',
  },
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: 'Trung tâm Nhà sáng tạo Live',
    to: '/live',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Cài đặt',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Đăng xuất',
    to: '/settings',
    border: true, //field tạo border
  },
];

function Header() {
  //xử lí khi click vào menu item
  const handleMenuChange = (menuItem) => {
    // console.log(menuItem)
    switch (menuItem.type) {
      case 'language':
        //logic thay đổi ngôn ngữ...
        break;
      default:
    }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={config.routes.home}>
            <img src={images.logo} alt="Tiktok" />
          </Link>
        </div>

        <Search />

        <div className={cx('actions')}>
          <Tippy content="Tải lên">
            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
              <span>Tải lên</span>
            </Button>
          </Tippy>
          {!isLogin ? (
            <>
              <Button primary>Đăng nhập</Button>
            </>
          ) : (
            <div className={cx('actions-login')}>
              <Tippy content="Tin nhắn">
                <MessageIcon className={cx('actions-icon')} />
              </Tippy>
              <Tippy content="Hộp thư">
                <InboxIcon className={cx('actions-icon')} />
              </Tippy>
            </div>
          )}

          <Menu items={isLogin ? MENU_ITEMS_LOGIN : MENU_ITEMS} onChange={handleMenuChange}>
            {isLogin ? (
              <Link to={config.routes.profile}>
                <img
                  className={cx('actions-avatar')}
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1f8c4d2e77bbecd6cf7ec3a34c7e48d0.jpeg?lk3s=a5d48078&x-expires=1707105600&x-signature=AGitmpn%2FWXZ68vQh%2F5KrvhtK5mM%3D"
                  alt="avatar"
                />
              </Link>
            ) : (
              <button className={cx('menu-icon')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
