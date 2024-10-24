# Pronoun Adjuster
 
Inclusive language with one line of code. Pronoun Adjuster takes variables and assigns the proper pronouns.

## Install

```
yarn add pronoun-adjuster

or

npm install pronoun-adjuster
```

## How does it work?

Use \[P1\] and \[P2\] as fillers for the pronouns, and adjust them with the function.

```
const text = "[P1] learned Monster-Hunting at [P2] university.";
const pronoun1 = "They";
const pronoun2 = "Their";

const adjustedText = adjustPronouns(text, pronoun1, pronoun2);

console.log(adjustedText);
// They learned Monster-Hunting at their university.
```

## Usage example

```
import React, { useState } from 'react';
import adjustPronouns from 'pronoun-adjuster';

const initialText = `<p>Leslie is a skilled Monster-Hunter, known for [P2] courage and strength. [P1] took Monster-Hunting courses at [P2] university.</p>`;

const App: React.FC = () => {

  const [p1, setP1] = useState<string>("They");
  const [p2, setP2] = useState<string>("Their");
  const [text, setText] = useState<string>(initialText);

  return (
    <div style={{ maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
      <main>
        <h4>Enter your pronouns:</h4>
        <div style={{ display: 'flex' }}>
          <input type="text" value={p1} onChange={e => setP1(e.target.value)} />
          <p style={{ margin: '2rem' }}>/</p>
          <input type="text" value={p2} onChange={e => setP2(e.target.value)} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: adjustPronouns(text, p1, p2) }} />
      </main>
    </div>
  );
};

export default App;

```