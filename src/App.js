import {
  Box, Text, Divider, Flex, Stack, Textarea, Button, Input, HStack, Link
} from '@chakra-ui/react'
import { MdKeyboardArrowUp } from "react-icons/md";
import { TbArrowsMoveVertical } from "react-icons/tb";



function App() {

  const sidebarList = [
    {
      text: 'Shared event types'
    }
  ]

  return (
    <Box >
      <Divider mt={10} />
      {/* Header */}
      <Box p={5} w='66vw' mx='auto'>
        <Text fontSize='lg' fontWeight='500'>Organization Setting</Text>
      </Box>
      <Divider />
      {/* Content */}
      <Flex direction={['column', 'row']} w={['100%', '80vw']} mx='auto' p={5} align={['center', 'flex-start']} justify='center' gap={['40px', '110px']}>
        {/* Left column */}
        <Stack spacing={4} w={['100%', 'auto']} maxW={['100%', '8vw']} textAlign={['center', 'left']} px={[4, 0]}>
          <Text cursor='pointer'>Shared event types</Text>
          <Text cursor='pointer'>Single sign-on</Text>
          <Text cursor='pointer'>Workflows</Text>
          <Text cursor='pointer' fontWeight='500'>Data deletion</Text>
        </Stack>
        {/* Right column */}
        <Stack spacing={4} w={['100%', 'auto']} maxW={['100%', '50vw']}>
          <Text fontSize='20px' fontWeight='600'>Deletion information from your organization</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
          <Box my={4} p={4} bg='pink.50' >
            <Text fontWeight='600'>Once infomation delete information, you won't be able to recover it</Text>
          </Box>
          <Text>Invitee data will be deleted <b>7 days</b> from the date you make the request.</Text>
          <Divider my={3} />
          <Text fontWeight='600'>Deletion information from your organization</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
          <Textarea />
          <Button colorScheme='red' size='md'
            height='48px'
            width='100px' borderRadius='40px'
          >Delete</Button>
          <Divider my={6} />
          <Text fontWeight='600'>Deletion information from your organization</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Flex gap={4} align='center'>
            <Input w='300px' />
            <Button colorScheme='red' size='md'
              height='48px'
              width='100px' borderRadius='40px'
            >Delete</Button>
          </Flex>
          <Divider my={4} />
          <Text fontWeight='600'>Data deletion history</Text>

          <Flex direction={['column', 'row']} align='center' justify='center' p={2} borderWidth='1px' borderRadius='10px'>
            <Flex align='center'  w={['100%', '33.33%']} p={2}>
              <Text fontWeight='bold'> Request Date  </Text>
              <MdKeyboardArrowUp size='16px' />
            </Flex>
            <Flex align='center'  w={['100%', '33.33%']} p={2}>
              <Text fontWeight='bold'> Request by  </Text>
              <TbArrowsMoveVertical size='16px' />
            </Flex>
            <Flex align='center' w={['100%', '33.33%']} p={2}>
              <Text fontWeight='bold'> Status  </Text>
              <TbArrowsMoveVertical size='16px' />
            </Flex>
          </Flex>


          <Divider my={6} />
          <Text fontWeight='600'>Delete your account</Text>
          <Text>
            You can delete your account in your <Link color='blue'>account settings</Link>.
          </Text>

        </Stack>
      </Flex>
    </Box>
  );
}

export default App;
