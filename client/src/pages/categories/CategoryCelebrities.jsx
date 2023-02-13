import { useFetchCategories } from "../../hooks/useFetchCategories";
import styles from "../styles.module.scss";

export const CategoryCelebrities = () => {
  const { gifs } = useFetchCategories("celebrities");

  return (
    <div className={styles.containerPages}>
      {gifs?.map((celebrities) => {
        return (
          <div key={celebrities.id} className="card">
            <div className={styles.categoryCard}>
              <img src={celebrities.url} alt={celebrities.title} />
              <h3>{celebrities.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
