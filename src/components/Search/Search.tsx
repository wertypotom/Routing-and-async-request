import React from 'react';

interface ISearchProps {
  value: string;
  onChange: (value: string) => void;
}

const Search = ({ value, onChange }: ISearchProps) => {
  return (
    <input
      type='text'
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default Search;
