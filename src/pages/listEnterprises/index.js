import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Text, SafeAreaView, Image, TextInput } from 'react-native';
import { dataServiceGet } from '../../services/services';
import Spinner from 'react-native-loading-spinner-overlay'
import Enterprisecomponents from '../../components/EnterpriseComponent'
// import { Container } from './styles';
const linkImages = 'https://empresas.ioasys.com.br'
function listEnterprises() {
  const ref = useRef()
  const [loading, setLoading] = useState(true);
  const [dataEnterprises, setDataEnterprises] = useState([])
  useEffect(() => {
    async function listEnterprises() {
      const REQ = {
        uri: '/enterprises'
      }
      dataServiceGet(REQ).then((response) => {
        setDataEnterprises(response.enterprises)
        // console.log(response.enterprises.)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
        setLoading(false)
      })
    }
    listEnterprises()
  }, [])
  var secondTextInput;
  const cardEnterprise = (item) => {

    return (
      <Enterprisecomponents item={item} />
    )
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white', marginTop: 10 }}>
        <Spinner
          visible={loading}
          textContent={"Loading ..."}
          textStyle={{ color: 'white' }}

          size={"large"}
          color={'white'}
        />


        <FlatList
          style={{ marginTop: 10 }}
          data={dataEnterprises}
          renderItem={(cardEnterprise)}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </>
  );
}

export default listEnterprises;