// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Watch from '~/components/Watch';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Watch />
      <Watch />
      <Watch />
      <Watch />
    </div>
  );
}

export default Home;
