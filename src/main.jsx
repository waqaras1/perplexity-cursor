import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'

// Custom theme to match Perplexity's exact dark design
const theme = extendTheme({
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  colors: {
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    // Perplexity's exact color palette
    perplexity: {
      bg: '#0a0a0a',           // Main background - very dark gray/black
      sidebar: '#0f0f0f',       // Sidebar background - slightly lighter
      card: '#1a1a1a',          // Card/input background
      border: '#2a2a2a',        // Border colors
      text: {
        primary: '#ffffff',      // Primary text
        secondary: '#a1a1aa',   // Secondary text
        muted: '#71717a',       // Muted text
      },
      accent: {
        primary: '#3b82f6',     // Blue accent (microphone)
        secondary: '#6366f1',   // Purple accent
      }
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'gray',
      },
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    Input: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    IconButton: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: '#0a0a0a',
        color: 'white',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
) 