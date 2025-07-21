/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Box, Text } from 'ink';
import { Colors } from '../colors.js';
import { type Config } from '@google/gemini-cli-core';

interface TipsProps {
  config: Config;
}

export const Tips: React.FC<TipsProps> = ({ config }) => {
  const geminiMdFileCount = config.getGeminiMdFileCount();
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Text color={Colors.Foreground}>
        <Text bold color={Colors.AccentCyan}>AIW3</Text> - Multi-LLM AI Workflow CLI (forked from Gemini CLI)
      </Text>
      <Text color={Colors.Foreground}>
        <Text color={Colors.AccentGreen}>✨ Features:</Text> OpenAI, Gemini, Claude & Custom LLM support
      </Text>
      <Text color={Colors.Foreground}>Tips for getting started:</Text>
      <Text color={Colors.Foreground}>
        1. Ask questions, edit files, or run commands across your codebase.
      </Text>
      <Text color={Colors.Foreground}>
        2. Use <Text bold color={Colors.AccentPurple}>@filename</Text> to include files in context.
      </Text>
      <Text color={Colors.Foreground}>
        3. Be specific for the best results from any LLM provider.
      </Text>
      {geminiMdFileCount === 0 && (
        <Text color={Colors.Foreground}>
          4. Create{' '}
          <Text bold color={Colors.AccentPurple}>
            GEMINI.md
          </Text>{' '}
          files to customize your AI interactions.
        </Text>
      )}
      <Text color={Colors.Foreground}>
        {geminiMdFileCount === 0 ? '5.' : '4.'}{' '}
        <Text bold color={Colors.AccentPurple}>
          /help
        </Text>{' '}
        for more information and available commands.
      </Text>
    </Box>
  );
};
