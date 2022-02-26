import { Box, Button, Text, NativeBaseProvider, Heading, HStack, Spinner } from 'native-base'
import { useContext, useEffect } from 'react'
import { FlatList } from 'react-native'
import { getUsersData } from '../actions/actions'
import { UsersContext } from '../context/usersContext'
import User from './user'

export default function Home(props) {
  const { state, dispatch } = useContext(UsersContext)
  useEffect(() => {

    let resolveAction = async () => {
      dispatch(await getUsersData())

    }
    resolveAction()

  }, [])

  if (state.usersList[0])
    return (
      <>
        <Heading fontSize="xl" p="4" pb="3">
          Users List
        </Heading>
        <FlatList
          data={state.usersList}
          renderItem={
            ({ item }) => { return <User item={item} {...props} /> }
          }
        />
      </>
    )
  return (
    <HStack style={{ marginTop: 300 }} space={8} justifyContent="center" alignItems="center">
      <Text>LOADING ...</Text>
      <Spinner size="lg" />
    </HStack>
  )
}