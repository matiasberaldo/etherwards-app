import styles from './header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="logo-container">
          <img src={'etherwards_logo.png'} alt=""/>
          <p>etherwards</p>
      </div>
        <div className="navigation">
            <ul>
                <li><a href="#">Create event</a></li>
                <li><a href="#">Join event</a></li>
                <li><a href="#">My rewards</a></li>
            </ul>
        </div>
    </div>
  )
}
