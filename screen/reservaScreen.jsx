import React, { useState } from "react";
import {
  Pressable,
  TextInput,
  View,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import { db } from "../firebase"; 
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../component/customHeader/customHeader";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

function ReservaScreen() {
  const [cliente, setCliente] = useState("");
  const [servicio, setServicio] = useState("");

  const serviciosDisponibles = [
    { label: "Corte de Pelo", value: "Corte de Pelo" },
    { label: "Recorte de Barba", value: "Recorte de Barba" },
    { label: "Corte + Barba", value: "Corte + Barba" },
    { label: "Color / Tintura", value: "Color / Tintura" },
  ];

  const [hora, setHora] = useState(new Date());
  const [fecha, setFecha] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
const [mostrarReloj, setMostrarReloj] = useState(false)

  const elUsuarioCambioLaHora = (event, horaSeleccionada) => {
    setMostrarReloj(false);
    if (horaSeleccionada) {
      setHora(horaSeleccionada);
    }
  };

  const elUsuarioCambioLaFecha = (event, fechaSeleccionada) => {
    setMostrarCalendario(false);

    if (fechaSeleccionada) {
      setFecha(fechaSeleccionada);
    }
  };

  const agendarTurno = async () => {
    try {
   
      if (cliente.trim() === "") {
        Alert.alert("Error", "Por favor ingresa tu nombre");
        return;
      }

      const consultaTurnoOcupado = query(
      collection(db, "turnos"),
      where("fecha", "==", fecha),
      where("hora", "==", hora)  
    );

    const resultadoSnapshot = await getDocs(consultaTurnoOcupado);

        if (!resultadoSnapshot.empty) {
      Alert.alert(
        "Horario No Disponible", 
        "Lo sentimos, ese turno ya fue reservado por otro cliente. Por favor elige otro horario o día."
      );
      return; 
    }

      await addDoc(collection(db, "turnos"), {
        cliente: cliente,
        servicio: servicio,
        fecha: fecha,
        hora: hora,
        estado: "pendiente",
        fechaCreacion: new Date(),
      });

      Alert.alert("¡Éxito!", "Tu turno ha sido reservado");
      setCliente("");
      setservicio("");
      setFecha(new Date());
      setHora(new Date());
    } catch (error) {
      console.error("Error al guardar el turno: ", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <CustomHeader title="Reserva" />
        <Text style={styles.welcome}>Reserva un turno con nosotros</Text>

        <Text style={styles.label}>Nombre del Cliente:</Text>
        <TextInput
          style={styles.input}
          value={cliente}
          placeholder="Ingrese nombre"
          onChangeText={(texto) => setCliente(texto)}
        />

        <Text style={styles.label}>Servicio:</Text>
        <Dropdown
          style={styles.dropdown}
          data={serviciosDisponibles}
          labelField="label"
          valueField="value"
          placeholder="Selecciona un servicio"
          value={servicio}
          onChange={(item) => setServicio(item.value)}
        />

        <Text style={styles.label}>Fecha:</Text>

        <Pressable
          style={styles.inputFalso}
          onPress={() => setMostrarCalendario(true)}
        >
          <Text style={styles.textoFecha}>
            {fecha.toLocaleDateString("es-AR")}
          </Text>
        </Pressable>

        {mostrarCalendario && (
          <DateTimePicker
            value={fecha}
            mode="date"
            display="default"
            minimumDate={new Date()}
            onChange={elUsuarioCambioLaFecha}
          />
        )}

        <Text style={styles.label}>Hora:</Text>
        <Pressable
          style={styles.inputFalso}
          onPress={() => setMostrarReloj(true)}
        >
          <Text style={styles.textoFecha}>
            {hora.toLocaleTimeString("es-AR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </Pressable>

        {mostrarReloj && (
          <DateTimePicker
            value={hora}
            mode="time"
            display="default"
            onChange={elUsuarioCambioLaHora}
          />
        )}

        <Pressable onPress={agendarTurno} style={styles.boton}>
          <Text style={styles.textoBoton}>Confirmar Turno</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  boton: {
    backgroundColor: "#77078d",
    color: "white",
    padding: 15,
    borderRadius: 10,
  },
  textoBoton: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
 
  inputFalso: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  textoFecha: {
    fontSize: 16,
    color: "#333",
  },
  label: {
    
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
});

export default ReservaScreen;
