import { Box, Button, Text, NativeBaseProvider, VStack, HStack, Spinner, Stack, AspectRatio, Center, Image, Heading } from 'native-base'
import { useContext, useEffect } from 'react'
import { getUserDetails, clearDetails } from '../actions/actions'
import { UsersContext } from '../context/usersContext';

export default function Details(props) {
  const { state, dispatch } = useContext(UsersContext)
  useEffect(() => {
    let resolveAction = async () => {
      dispatch(await getUserDetails(props.route.params.id))
    }
    resolveAction()
    return () => {
      dispatch(clearDetails())
    }
  }, []);

  if (state.details.id)
    return (
      <VStack style={{ margin: 10 }}>
        <HStack style={{
          borderBottomWidth: 2,
          borderBottomColor: 'black',
          margin: 5
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 2 }}>
            Name:
          </Text>
          <Text>
            {state.details.name}
          </Text>
        </HStack>
        <HStack style={{
          borderBottomWidth: 2,
          borderBottomColor: 'black',
          margin: 5
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 2 }}>
            Email:
          </Text>
          <Text>
            {state.details.email}
          </Text>
        </HStack>
        <HStack style={{
          borderBottomWidth: 2,
          borderBottomColor: 'black',
          margin: 5
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 2 }}>
            Phone:
          </Text>
          <Text>
            {state.details.phone}
          </Text>
        </HStack>
        <HStack style={{
          borderBottomWidth: 2,
          borderBottomColor: 'black',
          margin: 5
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 2 }}>
            Website:
          </Text>
          <Text>
            {state.details.website}
          </Text>
        </HStack>
        <HStack
          style={{
            margin: 5
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 2 }}>
            Bio:
          </Text>
          <Text>
            Consetetur sed no no clita gubergren kasd diam takimata sadipscing, dolores sadipscing dolor lorem amet lorem tempor ea. Ut justo ea ipsum sanctus ipsum labore sed dolores. Nonumy amet amet eos justo, amet kasd aliquyam nonumy lorem. Et voluptua clita no elitr ea diam, sea invidunt lorem stet duo. Kasd.
            Consetetur sed no no clita gubergren kasd diam takimata sadipscing, dolores sadipscing dolor lorem amet lorem tempor ea. Ut justo ea ipsum sanctus ipsum labore sed dolores. Nonumy amet amet eos justo, amet kasd aliquyam nonumy lorem. Et voluptua clita no elitr ea diam, sea invidunt lorem stet duo. Kasd.
          </Text>
        </HStack>
      </VStack>
    )

  return (
    <HStack style={{ marginTop: 300 }} space={8} justifyContent="center" alignItems="center">
      <Text>LOADING ...</Text>
      <Spinner size="lg" />
    </HStack>
  )
}