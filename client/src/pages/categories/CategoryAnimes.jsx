import { useFetchCategories } from "../../hooks/useFetchCategories";
import styles from "../styles.module.scss";

export const CategoryAnimes = () => {
  const { gifs } = useFetchCategories("anime");

  return (
    <div className={styles.containerPages}>
      {gifs?.map((anime) => {
        return (
          <div key={anime.id} className="card">
            <div className={styles.categoryCard}>
              <img src={anime.url} alt={anime.title} />
              <h3>{anime.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
