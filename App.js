import { Component, React } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      resultado: 0,
    };
    this.Calcular = this.Calcular.bind(this);
  }

  Calcular() {
    var num = this.state.numero;
    var fatorial = 1;

    for (let i = 2; i <= num; i++) {
      fatorial *= i;
    }

    this.setState({ resultado: fatorial });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.txtTitle}>Calculadora de Fatorial</Text>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            placeholder="Número:  "
            keyboardType="numeric"
            onChangeText={(value) => this.setState({ numero: value })}
          />
          <TouchableOpacity style={styles.btn} onPress={() => this.Calcular()}>
            <Text style={styles.txt2}>Calcular </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.div}>
          <Text style={styles.txt}>
            Resultado: {this.state.resultado <= 0 ? "" : this.state.resultado}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#836FFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  txtTitle: {
    fontWeight: "bold",
    marginTop: 150,
    fontSize: 20,
    color: "black",
  },
  txt: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "black",
  },
  txt2: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    color: "black",
  },
  body: {
    textAlign: "center",
  },
  btn: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    backgroundColor: "white",
    borderColor: "#98FB98",
    margin: 12,
    width: 210,
    height: 40,
    borderWidth: 4,
    borderRadius: 6,
  },
  div: {
    width: 300,
    height: 50,
    borderRadius: 8,
    marginTop: 15,
    backgroundColor: "#F0F8FF",
    alignItems: "center",
  },
  input: {
    width: 210,
    height: 52,
    margin: 12,
    borderWidth: 4,
    borderRadius: 6,
    borderColor: "#98FB98",
    textAlign: "center",
    backgroundColor: "white",
    fontWeight: "bold",
    color: "black",
  },
});

export default App;
