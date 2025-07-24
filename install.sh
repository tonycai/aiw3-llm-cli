# Clone the repository
#git clone https://github.com/tonycai/aiw3-llm-cli.git
#cd aiw3-llm-cli
BASE_DIR=/root/workspace/aiw3-llm-cli

# Install dependencies (skip problematic scripts)
npm install --ignore-scripts

# Generate required files
node scripts/generate-git-commit-info.js

# Build packages individually
cd packages/core && npm run build
cd ${BASE_DIR}/packages/cli && npm run build
cd ${BASE_DIR}

# Create executable bundle
node esbuild.config.js

# Set up global command
mkdir -p ~/bin
echo '#!/bin/bash\nnode "'$(pwd)'/bundle/gemini.js" "$@"' > ~/bin/aiw3
chmod +x ~/bin/aiw3

# Add to PATH (add to ~/.zshrc or ~/.bashrc for persistence)
export PATH="$HOME/bin:$PATH"
