import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'prism-react-renderer';
import '../../css/custom.css';

const GitHubMarkdown = () => {
  const [markdown, setMarkdown] = useState('');
  const [metadata, setMetadata] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const url = 'https://raw.githubusercontent.com/metagov/daostar/main/DAOIPs/daoip-1.md';
      const response = await fetch(url);
      const mdText = await response.text();

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
      {metadata && (
        <div className="metadata">
          {metadata.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
      <ReactMarkdown
        children={markdown}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default GitHubMarkdown;
