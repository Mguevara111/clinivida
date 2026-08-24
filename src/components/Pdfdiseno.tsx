import { Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';
import logoint from '../assets/logoipsum-custom-logo.svg'


const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',      // ✅ Alinea header y section uno debajo del otro
    backgroundColor: '#E4E4E4',
    padding: 20,                  // ✅ En lugar de flex a la page, le damos un margen interno
  },
  header: {
    width: '100%',
    flexDirection: 'row',         // ✅ El contenido DENTRO del header va en fila (logo a un lado, texto al otro)
    justifyContent: 'space-between', // ✅ Empuja el logo a la izquierda y el texto a la derecha
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
  section: {
    height:'85%',
    padding: 10,
    backgroundColor: '#ffffff',   // Para resaltar el bloque de datos
    textAlign:'center'
  },
  logo: {
    width: 140,                   // ✅ Número puro (sin 'px')
    height: 50,                   // ✅ Alto fijo o controlado
    objectFit: 'contain',
  },
  atitle:{
    fontSize:32,
    marginBottom:32
  },
  subview:{
    textAlign:'left'
  },
  datecont:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:32
  },
  patient:{
    fontWeight:'700',
    marginBottom:32
  },
  ally:{
    marginBottom:16
  },
  subtitle:{
    fontSize:32,
    marginBottom:32
  }
});

export const Pdfdiseno = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src={logoint} />
          <Text>App: 111-1111-11111</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.atitle}>Appointment</Text>
          <View style={styles.subview}>
            <View style={styles.datecont}>
              <Text>Date: 2026-03-12</Text>
              <Text>Time: 10:00:00</Text>
            </View>
            
            <Text style={styles.patient}>Patient: Jorge Reinoso</Text>
            <Text style={styles.subtitle}>Doctor Info</Text>
            <Text style={styles.ally}>Doctor: Dr. Carlos Cando</Text>
            <Text style={styles.ally}>Specialty: Cardiology</Text>
            <Text style={styles.ally}>Cost: $45</Text>
            
            
          </View>
        </View>
      </Page>
    </Document>
  );
};