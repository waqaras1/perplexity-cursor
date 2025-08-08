import React, { useState } from 'react'
import { 
  Box, 
  VStack, 
  IconButton, 
  Text,
  Flex,
  Avatar,
  HStack,
  Divider,
  Badge,
  Image
} from '@chakra-ui/react'
import { 
  FiPlus, 
  FiHome, 
  FiSearch, 
  FiGrid,
  FiUser,
  FiArrowUp,
  FiArrowDown,
  FiHelpCircle,
  FiMessageSquare,
  FiStar,
  FiClock,
  FiMoreVertical,
  FiCompass,
  FiTrendingUp,
  FiZap,
  FiCheckCircle,
  FiDollarSign,
  FiMapPin,
  FiBookOpen
} from 'react-icons/fi'
import PerpLogoPng from '../../perp.png'

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const categories = [
    { name: "Finance", icon: FiDollarSign },
    { name: "Travel", icon: FiMapPin },
    { name: "Academic", icon: FiBookOpen }
  ]

  return (
    <Box
      w={isExpanded ? "320px" : "80px"}
      bg="perplexity.sidebar"
      borderRight="1px solid"
      borderColor="perplexity.border"
      display="flex"
      flexDirection="column"
      h="100vh"
      py={4}
      transition="width 0.3s ease"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      position="relative"
      overflow="hidden"
    >
      {/* Top Section - PNG Logo (no border) */}
      <Flex justify="center" px={4} mb={6}>
        <Image src={PerpLogoPng} alt="Perplexity logo" boxSize={16} objectFit="contain" />
      </Flex>

      {/* Home Section */}
      <Box px={4} mb={6}>
        <HStack spacing={3} py={2} px={3} borderRadius="md" bg="perplexity.card" cursor="pointer" h="40px">
          <FiHome size={16} color="perplexity.text.primary" />
          {isExpanded && <Text color="perplexity.text.primary" fontSize="sm" fontWeight="medium">Home</Text>}
        </HStack>
      </Box>

      {/* Categories Section */}
      <Box px={4} mb={6}>
        <VStack spacing={1} align="stretch">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <HStack 
                key={index}
                spacing={3} 
                py={2} 
                px={3} 
                borderRadius="md" 
                _hover={{ bg: 'perplexity.card' }} 
                cursor="pointer" 
                h="40px"
              >
                <IconComponent size={16} color="perplexity.text.muted" />
                {isExpanded && (
                  <Text color="perplexity.text.secondary" fontSize="sm" fontWeight="medium">
                    {category.name}
                  </Text>
                )}
              </HStack>
            )
          })}
        </VStack>
      </Box>

      {/* Library Section */}
      <Box px={4} mb={6}>
        {isExpanded && (
          <Text color="perplexity.text.muted" fontSize="xs" fontWeight="medium" mb={3} px={3}>
            LIBRARY
          </Text>
        )}
        <HStack spacing={3} py={2} px={3} borderRadius="md" _hover={{ bg: 'perplexity.card' }} cursor="pointer" h="40px">
          <FiPlus size={16} color="perplexity.text.muted" />
          {isExpanded && <Text color="perplexity.text.secondary" fontSize="sm" fontWeight="medium">Create a Thread</Text>}
        </HStack>
      </Box>

      {/* Divider */}
      {isExpanded && <Divider borderColor="perplexity.border" mb={6} />}

      {/* Navigation Section */}
      <Box px={4} mb={6}>
        <VStack spacing={1} align="stretch">
          <HStack spacing={3} py={2} px={3} borderRadius="md" _hover={{ bg: 'perplexity.card' }} cursor="pointer" h="40px">
            <FiSearch size={16} color="perplexity.text.muted" />
            {isExpanded && <Text color="perplexity.text.secondary" fontSize="sm" fontWeight="medium">Discover</Text>}
          </HStack>
          
          <HStack spacing={3} py={2} px={3} borderRadius="md" _hover={{ bg: 'perplexity.card' }} cursor="pointer" h="40px">
            <FiGrid size={16} color="perplexity.text.muted" />
            {isExpanded && <Text color="perplexity.text.secondary" fontSize="sm" fontWeight="medium">Spaces</Text>}
          </HStack>
        </VStack>
      </Box>

      {/* Bottom Section */}
      <Box px={4} mt="auto">
        <VStack spacing={1} align="stretch">
          <HStack spacing={3} py={2} px={3} borderRadius="md" _hover={{ bg: 'perplexity.card' }} cursor="pointer" h="40px">
            <Avatar size="sm" name="User" bg="perplexity.text.muted" />
            {isExpanded && <Text color="perplexity.text.primary" fontSize="sm" fontWeight="medium">Account</Text>}
          </HStack>
          
          <HStack spacing={3} py={2} px={3} borderRadius="md" _hover={{ bg: 'perplexity.card' }} cursor="pointer" h="40px">
            <FiArrowUp size={16} color="perplexity.text.muted" />
            {isExpanded && <Text color="perplexity.text.secondary" fontSize="sm" fontWeight="medium">Upgrade</Text>}
          </HStack>
          
          <HStack spacing={3} py={2} px={3} borderRadius="md" _hover={{ bg: 'perplexity.card' }} cursor="pointer" h="40px">
            <FiArrowDown size={16} color="perplexity.text.muted" />
            {isExpanded && <Text color="perplexity.text.secondary" fontSize="sm" fontWeight="medium">Install</Text>}
          </HStack>
        </VStack>
      </Box>

      {/* URL at Bottom */}
      {isExpanded && (
        <Box px={4} mt={4}>
          <Badge colorScheme="green" borderRadius="md" px={2} py={1} fontSize="xs">
            https://www.perplexity.ai
          </Badge>
        </Box>
      )}
    </Box>
  )
}

export default Sidebar 