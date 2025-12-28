'use client';
import { OramaCloud, useSearch } from '@oramacloud/client/react';

type HeaderSearchProps = {
  term: string;
};

export default function OramaSearch({ term }: HeaderSearchProps) {
  return (
    <OramaCloud
      endpoint="https://cloud.orama.run/v1/indexes/rickandmorty-v2-pages-dev-w1bdbi"
      apiKey="VL55qP5M9PhglshGM3KzRVP2fPRkY5mA"
    >
      <SearchComponent term={term} />
    </OramaCloud>
  );
}

function SearchComponent({ term }: HeaderSearchProps) {
  const { results, error } = useSearch({
    term,
    limit: 5,
  });

  return (
    <ul>
      {results?.hits.map((hit) => (
        <li key={hit.id}>{hit.id}</li>
      ))}
    </ul>
  );
}
