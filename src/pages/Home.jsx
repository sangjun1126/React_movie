import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='page-container' style={styles.container}>
      <h1 style={styles.title}>영화 사이트.</h1>
      <p style={styles.description}>다양한 볼 거리를 즐겨봐요</p>
      <div style={styles.contactInfo}>
        <div style={styles.contactItem}>
          <FaPhone style={styles.icon} />
          <span>010-9266-3977</span>
        </div>
        <div style={styles.contactItem}>
          <FaEnvelope style={styles.icon} />
          <span>jeongsangjun@naver.com</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    padding: '50px',
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '24px',
    color: '#666',
  },
  contactInfo: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
  contactItem: {
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
    fontSize: '24px',
  },
};

export default Home;
