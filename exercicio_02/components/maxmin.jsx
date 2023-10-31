import React from 'react';
import { Text } from 'react-native';

const MaxMin = (props) => {
  const { x, y } = props;

  if (x > y) {
    return <Text>{`Valor ${x} é maior que valor ${y}`}</Text>;
  } else if (x === y) {
    return <Text>{`Valor ${x} e ${y} são iguais`}</Text>;
  } else {
    return <Text>{`Valor ${y} é maior que valor ${x}`}</Text>;
  }
};

export default MaxMin;
