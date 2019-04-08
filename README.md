# @rnhooks/share [![Build Status](https://travis-ci.com/react-native-hooks/share.svg?branch=master)](https://travis-ci.com/react-native-hooks/share) [![Maintainability](https://api.codeclimate.com/v1/badges/60fd46c56bd3356f88c1/maintainability)](https://codeclimate.com/github/react-native-hooks/share/maintainability)

> React Native hook for [Share](https://facebook.github.io/react-native/docs/share#docsNav)

### Installation

```bash
yarn add @rnhooks/share
```

### Usage

```js
import useShare from '@rnhooks/share';

function App() {
  const [onShare, shared, loading, error] = useShare();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhooks/share</Text>
      <Button title="Share" onPress={onShare} />
      {!(loading || error) && (
        <Text style={styles.instructions}>{shared.toString()}</Text>
      )}
    </View>
  );
}

```

### Output

| Name      | Default    | Type     | Description                  |
| --------- | :--------- | --------:| ---------------------------- |
| onShare   | `() => {}` | function | Share Function               |
| shared    | `false`    | boolean  | Content is shared or not     |
| activity  | `null`     | string   | Get Shared Activity          |
| loading   | `false`    | boolean  | Loading State                |
| error     | `undefined`| boolean  | Error State                  |
