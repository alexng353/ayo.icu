import styles from "../../styles/bar.module.css";


export default function Footer() {
  return (
    <div
      style={{ position:"fixed", bottom: 0, width: "100%" }}
      className={styles.footer}
    >
      <div className='container mx-auto pt-4 pb-4 text-center text-gray-400'>
        © ayo icu. All rights reserved.
      </div>
    </div>
  );
}
