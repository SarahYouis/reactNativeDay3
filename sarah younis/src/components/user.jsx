import { Text, Box, HStack, VStack, Spacer, Avatar, QuestionIcon, Button } from 'native-base';

export default User = ({ item, navigation }) => {
    if (item.id) {
        return (
            <Box>
                <HStack style={{ justifyContent: 'space-between', margin: 5 }}>
                    <VStack>
                        <Text>
                            <Text style={{ fontWeight: 'bold' }}>

                                Name:
                            </Text>
                            {item.name}
                        </Text>
                        <Text>
                            <Text style={{ fontWeight: 'bold' }}>

                                Email:
                            </Text>
                            {item.email}
                        </Text>
                    </VStack>
                    <Button
                        colorScheme='blue'
                        onPress={() => {
                            navigation.navigate({
                                name: 'details',
                                params: { id: item.id }
                            })
                        }}
                    >
                        <Text>More...</Text>
                    </Button>
                </HStack>
            </Box>)
    }
    return <Text>No user</Text>
}

