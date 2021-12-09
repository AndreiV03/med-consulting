import type { NextPage } from "next";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Fuse from "fuse.js";

import searchData from "../data/search.json";
import styles from "../styles/pages/search.module.scss";
import Link from "../components/Link";

const Search: NextPage = () => {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(searchData, {
    keys: ["page", "title", "description"],
    includeScore: true
  });

  const results = fuse.search(query).sort((a, b) => a.score! - b.score!).slice(0, 5);

  return (
    <div className={styles.page}>
      <div className={styles.search}>
        <input type="text" placeholder="Search" value={query} onChange={event => setQuery(event.target.value)} />
        <BiSearch />
      </div>

      <div className={styles.results}>
        {results.map(result => (
          <div key={1} className={styles.result}>
            <div className={styles.current_page}>{result.item.page}</div>
            <div className={styles.title}>{result.item.title.length > 30 ? `${result.item.title.slice(0, 30)}...` : result.item.title}</div>
            <div className={styles.description}>{result.item.description}</div>
            <Link href={result.item.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;