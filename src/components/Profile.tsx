import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/djaysson.png" alt="Djayson Rodrigues" />
      <div>
        <strong>Djayson Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 2
          </p>
      </div>
    </div>
  )
}
