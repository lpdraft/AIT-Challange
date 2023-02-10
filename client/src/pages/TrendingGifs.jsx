import { useFetchTrending } from "../hooks/useFetchTrending";
import styles from "./styles.module.scss";

export const TrendingGifs = () => {
  const { trends } = useFetchTrending();

  return (
    <div className={styles.containerPages}>
      {trends?.map((trend) => {
        return (
          <div key={trend.id} className="card">
            <div className={styles.categoryCard}>
              <h3>{trend.title}</h3>
              <img src={trend.url} alt={trend.title} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
