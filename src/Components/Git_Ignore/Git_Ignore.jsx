import React, { useState } from 'react';

// .gitignore templates for each language
const gitignoreTemplates = {
  JavaScript: `
// Node modules
node_modules/

// Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
lerna-debug.log*
.pnpm-debug.log*

// Runtime data
pids
*.pid
*.seed
*.pid.lock

// Coverage directory
coverage/
*.lcov
.nyc_output

// TypeScript cache
*.tsbuildinfo

// Dependency directories
jspm_packages/
bower_components/
  `,
  Java: `
// Compiled class files
*.class

// Log files
*.log

// BlueJ files
*.ctxt

// Mobile Tools for Java (J2ME)
.mtj.tmp/

// NetBeans files
nbproject/private/
build/
  `,
  C: `
// Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
lerna-debug.log*
.pnpm-debug.log*

// Diagnostic reports
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

// Runtime data
pids
*.pid
*.seed
*.pid.lock

// Coverage
coverage/
*.lcov
.nyc_output

// Dependency directories
node_modules/
bower_components/
web_modules/

// Next.js and Gatsby build output
.next
.cache/

// Environment files
.env
.env.test
.env.production
  `,
  Cpp: `
// Object files
*.o

// Compiled Dynamic libraries
*.so

// Static Libraries
*.a

// Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
.pnpm-debug.log*

// Runtime data
pids
*.pid
*.seed
*.pid.lock

// Dependency directories
node_modules/
dist/
build/
  `,
};

export default function GitignoreGenerator() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [gitignoreContent, setGitignoreContent] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  // Handle language selection
  const handleSelect = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    setGitignoreContent(gitignoreTemplates[language] || '');
    setCopySuccess(false);
  };

  // Download .gitignore file
  const downloadGitignore = () => {
    const element = document.createElement('a');
    const file = new Blob([gitignoreContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `.gitignore-${selectedLanguage}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(gitignoreContent)
      .then(() => setCopySuccess(true))
      .catch((err) => console.error('Failed to copy text: ', err));
  };

  return (
    <div className="p-6 max-w-[1000px] mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Select a Language for .gitignore</h1>
      <select
        value={selectedLanguage}
        onChange={handleSelect}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Language</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Java">Java</option>
        <option value="C">C</option>
        <option value="Cpp">C++</option>
      </select>

      {selectedLanguage && (
        <div>
          <h2 className="text-xl font-semibold mt-4">.gitignore for {selectedLanguage}</h2>
          <pre
            className="bg-gray-100 p-4 mt-2 rounded-lg max-h-72 overflow-y-auto text-sm"
          >
            {gitignoreContent}
          </pre>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={downloadGitignore}
              className="flex-1 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Download .gitignore
            </button>
            <button
              onClick={copyToClipboard}
              className="flex-1 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Copy to Clipboard
            </button>
          </div>
          {copySuccess && (
            <p className="text-green-600 mt-2 text-center">Copied to clipboard!</p>
          )}
        </div>
      )}
    </div>
  );
}
