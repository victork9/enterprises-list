import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, SafeAreaView, Image } from 'react-native';
import { dataServiceGet } from '../../services/services';
import Spinner from 'react-native-loading-spinner-overlay'
// import { Container } from './styles';
const linkImages = 'https://empresas.ioasys.com.br'
function listEnterprises() {
  const [loading, setLoading] = useState(true);
  const [dataEnterprises, setDataEnterprises] = useState([])
  useEffect(() => {
    async function listEnterprises() {
      const REQ = {
        uri: '/enterprises'
      }
      dataServiceGet(REQ).then((response) => {
        setDataEnterprises(response.enterprises)
        // console.log(response.enterprises)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
        setLoading(false)
      })
    }
    listEnterprises()
  }, [])

  const cardEnterprise = (item) => {

    return (

      <View style={{ width: '90%', marginHorizontal: 20, marginVertical: 16, padding: 10, backgroundColor: '#6495ED' }}>
        <View style={{ flexDirection: 'row', }}>
          <View>
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={{ uri: `https://empresas.ioasys.com.br${item.item.photo}` }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center' }}>{item.item.enterprise_name}</Text>
            <Text style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>{item.item.city}, {item.item.country}</Text>
            <Text style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>{item.item.enterprise_type.enterprise_type_name}</Text>
            <Text style={{ textAlign: 'justify', marginLeft: 10, marginTop: 10, }}>{item.item.description.substring(0, 50)}...</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <>
      <Spinner
        visible={loading}
        textContent={"Loading ..."}
        textStyle={{ color: 'white' }}

        size={"large"}
        color={'white'}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={dataEnterprises}
          renderItem={(cardEnterprise)}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </>
  );
}

export default listEnterprises;