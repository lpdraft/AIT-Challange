import { useFetchCategories } from "../../hooks/useFetchCategories";
import styles from "../styles.module.scss";

export const CategoryAnimals = () => {
  const { gifs } = useFetchCategories("animals");

  return (
    <div className={styles.containerPages}>
      {gifs?.map((animals) => {
        return (
          <div key={animals.id} className="card">
            <div className={styles.categoryCard}>
              <img src={animals.url} alt={animals.title} />
              <h3>{animals.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
