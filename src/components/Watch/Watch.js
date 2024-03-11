// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Wacth.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faHeart,
  faLocationDot,
  faMessage,
  faMusic,
  faPenToSquare,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Watch() {
    const videoPath = `${process.env.PUBLIC_URL}/assets/videos/video1.mp4`;
  return (
    <div className={cx('wrapper')}>
      <div className={cx('image')}>
        <Image
          className={cx('image')}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1f8c4d2e77bbecd6cf7ec3a34c7e48d0.jpeg?lk3s=a5d48078&x-expires=1707105600&x-signature=AGitmpn%2FWXZ68vQh%2F5KrvhtK5mM%3D"
        />
      </div>
      <div>
        <div className={cx('info')}>
          <div className={cx('description')}>
            <div className={cx('author')}>
              <h3 className={cx('nickname')}>Minh Tien</h3>
              <h4 className={cx('name')}>minhtien213</h4>
            </div>
            <p className={cx('status')}>Trend này vẫn xịn 🥴</p>
            <p className={cx('music')}>
              <FontAwesomeIcon className={cx('icon', 'icon-music')} icon={faMusic} />
              suara asli - Arga Rhespati
            </p>
            <p className={cx('edit-tool')}>
              <FontAwesomeIcon className={cx('icon', 'icon-edit-tool')} icon={faPenToSquare} />
              CapCut · Chỉnh sửa như chuyên gia
            </p>
            <p className={cx('local')}>
              <FontAwesomeIcon className={cx('icon', 'icon-local')} icon={faLocationDot} />
              Osaka
            </p>
          </div>
          <Button className={cx('follow-btn')} outline>
            Follow
          </Button>
        </div>

        <div className={cx('videos')}>
          <video className={cx('video-item')} width="300" height="540" controls autoPlay>
            <source src={videoPath} type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>

          <div className={cx('actions')}>
            <div className={cx('action-item')}>
              <div className={cx('action-icon')}>
                <FontAwesomeIcon className={cx('like-icon')} icon={faHeart} />
              </div>
              1.3M
            </div>
            <div className={cx('action-item')}>
              <div className={cx('action-icon')}>
                <FontAwesomeIcon className={cx('like-icon')} icon={faMessage} />
              </div>
              123.5K
            </div>
            <div className={cx('action-item')}>
              <div className={cx('action-icon')}>
                <FontAwesomeIcon className={cx('like-icon')} icon={faBookmark} />
              </div>
              24.7K
            </div>
            <div className={cx('action-item')}>
              <div className={cx('action-icon')}>
                <FontAwesomeIcon className={cx('like-icon')} icon={faShare} />
              </div>
              18.2K
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watch;
