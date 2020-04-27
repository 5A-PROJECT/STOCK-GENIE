import React, { useState } from 'react';
import MaterialInput from '../../../../atoms/Input/MaterialInput';

function SearchInput(props) {
  const [query, setQuery] = useState('');

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  return <MaterialInput value={query} onChange={onInputChange} />;
}

export default SearchInput;
