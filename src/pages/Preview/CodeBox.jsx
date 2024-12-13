import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBox = () => {
  const [code, setCode] = useState('');
  const name = `/stringified/${useParams().name}.txt`;

  useEffect(() => {
    fetch(name)
      .then(response => response.text())
      .then(text => setCode(text))
      .catch(error => console.error('Error fetching the file:', error));
  }, []);

  return (
    <>
    {name}
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeBox;