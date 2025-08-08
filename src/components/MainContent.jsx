import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  Flex,
  VStack,
  Text,
  Input,
  HStack,
  IconButton,
  Button,
  useColorModeValue,
  Spinner,
  Tooltip,
  Container
} from '@chakra-ui/react'
import { 
  FiSearch, 
  FiMic,
  FiTrendingUp,
  FiZap,
  FiCheckSquare,
  FiFileText,
  FiSettings,
  FiType,
  FiHelpCircle
} from 'react-icons/fi'

const MainContent = ({ messages, onSendMessage, sidebarExpanded }) => {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef(null)
  const bgColor = useColorModeValue('perplexity.bg', 'perplexity.bg')

  const handleSend = () => {
    if (inputValue.trim()) {
      setIsLoading(true)
      onSendMessage(inputValue.trim())
      setInputValue('')
      setTimeout(() => setIsLoading(false), 1000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const suggestions = [
    { name: 'Parenting', icon: FiZap },
    { name: 'Fact Check', icon: FiCheckSquare },
    { name: 'Summarize', icon: FiFileText },
    { name: 'Analyze', icon: FiSettings },
    { name: 'Plan', icon: FiTrendingUp },
  ]

  // Auto-focus input on mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <Flex
      direction="column"
      flex={1}
      bg={bgColor}
      align="center"
      justify="center"
      position="relative"
      h="100vh"
      transition="all 0.3s ease"
    >
      {/* Subtle background gradient layers */}
      <Box
        pointerEvents="none"
        position="absolute"
        inset={0}
        sx={{
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 60%)',
        }}
      >
        <Box
          position="absolute"
          top="-160px"
          left="50%"
          transform="translateX(-50%)"
          w="700px"
          h="700px"
          borderRadius="full"
          bgGradient="radial(perplexity.accent.primary 12%, transparent 60%)"
          opacity={0.12}
        />
      </Box>

      {/* Centered content */}
      <Container maxW="1100px" centerContent px={8}>
        {/* Title */}
        <Text
          as="h1"
          fontSize={{ base: '5xl', md: '6xl' }}
          fontWeight={300}
          color="perplexity.text.primary"
          mb={12}
          textAlign="center"
          letterSpacing="-0.02em"
          lineHeight="1"
        >
          perplexity
        </Text>

        {/* Search Input */}
        <Box w="full" maxW="640px" mb={8}>
          <Flex
            bg="perplexity.card"
            borderRadius="2xl"
            border="1px solid"
            borderColor={isFocused ? 'perplexity.accent.primary' : 'perplexity.border'}
            px={4}
            h="56px"
            align="center"
            boxShadow={isFocused ? '0 0 0 1px var(--chakra-colors-perplexity-accent-primary)' : 'none'}
            transition="all 0.2s"
            position="relative"
          >
            {/* Left Icons */}
            <HStack spacing={3} mr={3} color={isFocused ? 'perplexity.accent.primary' : 'perplexity.text.muted'}>
              <FiSearch size={18} />
              <FiZap size={18} />
            </HStack>

            {/* Divider */}
            <Box w="1px" h="20px" bg="perplexity.border" mx={2} />

            {/* Input Field */}
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Ask anything or @mention a Space"
              variant="unstyled"
              color="perplexity.text.primary"
              fontSize="md"
              fontWeight="400"
              _placeholder={{ color: 'perplexity.text.muted', fontWeight: '400' }}
              flex={1}
            />

            {/* Right: mic */}
            <IconButton
              aria-label="Microphone"
              icon={<FiMic size={16} />}
              variant="ghost"
              color="white"
              bg="perplexity.accent.primary"
              _hover={{ bg: 'perplexity.accent.primary' }}
              size="sm"
              rounded="xl"
            />
          </Flex>
        </Box>

        {/* Loading Indicator */}
        {isLoading && (
          <HStack mb={4}>
            <Spinner size="sm" color="perplexity.accent.primary" />
            <Text color="perplexity.text.muted" fontSize="sm">Processing your request...</Text>
          </HStack>
        )}

        {/* Suggestions */}
        <HStack spacing={3} mb={8} wrap="wrap" justify="center">
          {suggestions.map(({ name, icon: Icon }, index) => (
            <Button
              key={index}
              size="sm"
              leftIcon={<Icon size={14} />}
              variant="outline"
              color="perplexity.text.secondary"
              borderColor="perplexity.border"
              bg="perplexity.card"
              rounded="full"
              px={3.5}
              py={1.5}
              fontSize="sm"
              _hover={{
                borderColor: 'perplexity.accent.primary',
                bg: 'perplexity.border',
                color: 'perplexity.text.primary',
                transform: 'translateY(-1px)'
              }}
              transition="all 0.2s"
            >
              {name}
            </Button>
          ))}
        </HStack>
      </Container>

      {/* Bottom-right utilities */}
      <HStack position="absolute" bottom={6} right={6} spacing={3}>
        <IconButton
          aria-label="Language"
          icon={<FiType size={14} />}
          variant="ghost"
          color="perplexity.text.muted"
          _hover={{ bg: 'perplexity.border', color: 'perplexity.text.primary' }}
          size="sm"
          rounded="md"
        />
        <IconButton
          aria-label="Help"
          icon={<FiHelpCircle size={14} />}
          variant="ghost"
          color="perplexity.text.muted"
          _hover={{ bg: 'perplexity.border', color: 'perplexity.text.primary' }}
          size="sm"
          rounded="md"
        />
      </HStack>

      {/* Footer Text */}
      <Text color="perplexity.text.muted" fontSize="xs" textAlign="center" position="absolute" bottom={6} left="50%" transform="translateX(-50%)">
        Press Enter to send • Shift+Enter for new line
      </Text>
    </Flex>
  )
}

export default MainContent 