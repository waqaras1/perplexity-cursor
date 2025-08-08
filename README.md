# Perplexity Clone

A modern, responsive React + Chakra UI clone of the Perplexity AI interface. This project replicates the visual design and layout of Perplexity's chat interface with a clean, professional appearance.

## 🚀 Features

- **Three-Panel Layout**: Left sidebar, middle chat panel, and right suggestions panel
- **Dark Sidebar**: Navigation with logo and icon buttons
- **Chat Interface**: Message bubbles with user and AI avatars
- **Interactive Suggestions**: Clickable suggestion cards
- **Responsive Design**: Optimized for desktop viewing (min-width: 1200px)
- **Modern UI**: Clean, professional design using Chakra UI components
- **Real-time Chat**: Simulated chat functionality with placeholder responses

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Chakra UI** - Component library and theming
- **React Icons** - Icon library (Feather icons)
- **Emotion** - CSS-in-JS styling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd perplexity-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Left navigation sidebar
│   ├── ChatPanel.jsx        # Main chat interface
│   ├── ChatMessage.jsx      # Individual message component
│   └── SuggestionPanel.jsx  # Right suggestions panel
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
├── index.css                # Global styles
└── ...
```

## 🎨 Design Features

### **Layout Structure**
- **Left Sidebar**: Dark background (#0d0d0d) with navigation icons
- **Middle Panel**: Light background (#ffffff) with chat interface
- **Right Panel**: Off-white background (#fafafa) with suggestions

### **Chat Interface**
- **User Messages**: Light blue background (#e6f0ff)
- **AI Messages**: Light gray background (#f2f2f2)
- **Message Bubbles**: Rounded corners with subtle shadows
- **Avatars**: User and AI icons for message identification

### **Interactive Elements**
- **Send Button**: Blue button with send icon
- **Suggestion Cards**: Hover effects with border color changes
- **Navigation Icons**: Hover states with background changes

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is optimized for desktop viewing with a minimum width of 1200px. The layout uses Flexbox for proper alignment and spacing across all panels.

## 🎯 Key Components

### **Sidebar Component**
- Vertical navigation with logo
- Icon buttons for Home, Search, History, Settings
- Dark theme with hover effects

### **ChatPanel Component**
- Scrollable message history
- Sticky input area with textarea and send button
- Auto-scroll to latest messages
- Enter key support for sending messages

### **ChatMessage Component**
- Alternating message alignment (user right, AI left)
- Different background colors for message types
- Avatar icons for user and AI
- Proper text formatting and line breaks

### **SuggestionPanel Component**
- Interactive suggestion cards
- Hover effects with subtle animations
- Scrollable content area
- Header with lightbulb icon

## 🚀 Getting Started

1. Ensure you have Node.js installed (version 16 or higher)
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open your browser to the provided localhost URL

## 📝 Notes

- This is a **frontend-only** implementation with no backend functionality
- All chat responses are simulated with placeholder data
- The design closely matches Perplexity's interface while using Chakra UI components
- The application is ready for production deployment

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 