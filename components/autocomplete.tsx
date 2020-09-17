import React, { useState } from 'react';

class Props {
  options: string[];
}

function Autocomplete({ options }: Props) {
  const [text, setText] = useState('');
  // TODO: Change matching algo to be fuzzy
  const filteredOptions = options.filter(option => !text || option.toLowerCase().startsWith(text.toLowerCase()));

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
      <ul>
        {filteredOptions.map((option) => {
          return <li key={option}>{option}</li>
        })}
      </ul>
    </div>
  );
}

export default Autocomplete
