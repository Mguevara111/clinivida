import { Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';
import type { Appointment } from '../context/context';
import type { Doctor } from '../context/context';
import type { Patient } from '../context/context';
import logoint from '../assets/logoipsum-custom-logo.svg'

interface Subprop{
    currentappointment:Appointment,
    searchpatient:Patient,
    searchdoctor:Doctor,
}

interface Prop{
    ca:Subprop
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',      
    backgroundColor: '#E4E4E4',
    padding: 20,                 
  },
  header: {
    width: '100%',
    flexDirection: 'row',         
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
  section: {
    height:'85%',
    padding: 10,
    backgroundColor: '#ffffff',   
    textAlign:'center'
  },
  logo: {
    width: 140,                   
    height: 50,                  
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


export const Pdftemplate=({ca}:Prop)=>{
    return (
    //     <Document>
    //         <Page size="A4" style={styles.page}>
    //             <View style={styles.header}>
    //                 <Image style={styles.logo} src={logo}/>
    //                 <Text>Appointment: {ca.currentappointment.id}</Text>
    //             </View>
    //             <View style={styles.section}>
                    
    //                 <Text>Doctor: {ca.searchdoctor.name}</Text>
    //                 <Text>Patient:{ca.searchpatient.name}</Text>
    //                 <Text>Cost: {ca.currentappointment.cost}</Text>
    //                 <Text>Appointment Date: {ca.currentappointment.appointmentDate}</Text>
    //                 <Text>Appointment Time: {ca.currentappointment.appointmentTime}</Text>
    //                 <Text>Specialty: {ca.searchdoctor.specialty}</Text>
    //             </View>
    //         </Page>
    // </Document>

    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src={logoint} />
          <Text>Serial: {ca.currentappointment.id}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.atitle}>Appointment</Text>
          <View style={styles.subview}>
            <View style={styles.datecont}>
              <Text>Date: {ca.currentappointment.appointmentDate}</Text>
              <Text>Time: {ca.currentappointment.appointmentTime}</Text>
            </View>
            
            <Text style={styles.patient}>Patient: {ca.searchpatient.name}</Text>
            <Text style={styles.subtitle}>Doctor Info</Text>
            <Text style={styles.ally}>Doctor: {ca.searchdoctor.name}</Text>
            <Text style={styles.ally}>Specialty: {ca.searchdoctor.specialty}</Text>
            <Text style={styles.ally}>Cost: {ca.currentappointment.cost}</Text>
            
            
          </View>
        </View>
      </Page>
    </Document>
    );
}