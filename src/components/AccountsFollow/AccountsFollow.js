import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountsFollow.module.scss';

import AccountFollowItem from './AccountFollowItem';

const cx = classNames.bind(styles);

const data = [
  {
    nickname: 'minhtien213',
    name: 'Minh Tien',
    tick: true,
    image:
      'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1f8c4d2e77bbecd6cf7ec3a34c7e48d0.jpeg?lk3s=a5d48078&x-expires=1707105600&x-signature=AGitmpn%2FWXZ68vQh%2F5KrvhtK5mM%3D',
  },
  {
    nickname: 'minhtien213',
    name: 'Minh Tien',
    tick: false,
    image:
      'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1f8c4d2e77bbecd6cf7ec3a34c7e48d0.jpeg?lk3s=a5d48078&x-expires=1707105600&x-signature=AGitmpn%2FWXZ68vQh%2F5KrvhtK5mM%3D',
  },
  {
    nickname: 'minhtien213',
    name: 'Minh Tien',
    tick: true,
    image:
      'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1f8c4d2e77bbecd6cf7ec3a34c7e48d0.jpeg?lk3s=a5d48078&x-expires=1707105600&x-signature=AGitmpn%2FWXZ68vQh%2F5KrvhtK5mM%3D',
  },
];

function AccountsFollow({ label }) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('label')}>{label}</h2>
      {data.map((item, index) => {
        return <AccountFollowItem key={index} data={item} />;
      })}
      <p className={cx('load-more')}>Xem thêm</p>
    </div>
  );
}

AccountsFollow.propTypes = {
  label: PropTypes.string.isRequired,
};

export default AccountsFollow;
