import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../../css/custom.css';

const GitHubMarkdown = () => {
  const [markdown, setMarkdown] = useState('');
  const [metadata, setMetadata] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const url = 'https://raw.githubusercontent.com/metagov/daostar/main/DAOIPs/daoip-1.md';
      const response = await fetch(url);
      const mdText = await response.text();

      // Extract metadata and the rest of the markdown
      const metadataRegex = /^---\n([\s\S]+?)\n---/;
      const metadataMatch = mdText.match(metadataRegex);
      
      if (metadataMatch) {
        setMetadata(metadataMatch[1]);
        setMarkdown(mdText.replace(metadataRegex, ''));
      } else {
        setMarkdown(mdText);
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <div className="markdown-container docItemContainer">
      {metadata && <div className="metadata">{metadata.split('\n').map((line, i) => <p key={i}>{line}</p>)}</div>}
      <ReactMarkdown children={markdown} />
    </div>
  );
};

export default GitHubMarkdown;
