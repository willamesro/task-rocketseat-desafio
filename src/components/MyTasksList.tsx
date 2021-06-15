import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type ThemeProps = {
  theme: boolean
}

function FlatListHeaderComponent({ theme }: ThemeProps) {
  return (
    <View>
      <Text style={[styles.header,{color: theme ?  '#565BFF': '#3D3D4D'}]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  theme: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, theme }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            //TODO - use onPress, onLongPress and style props
            style={item.done ? [styles.taskButtonDone, { backgroundColor: theme ? 'rgba(33,33,54,0.3)' : 'rgba(25, 61, 223, 0.1)' }] : styles.taskButton}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View
              testID={`marker-${index}`}
              //TODO - use style prop 
              style={item.done ? [styles.taskMarkerDone, { backgroundColor: theme ? '#565BFF' : '#273FAD', }] : [styles.taskMarker, { borderColor: theme ? '#565BFF' : '#3D3D4D' }]}
            />
            <Text
              //TODO - use style prop
              style={item.done ? [styles.taskTextDone, { color: theme ? 'rgba(225, 225, 230, 0.6)' : '#A09CB1' }] : { color: theme ? '#E1E1E6' : '#3D3D4D', }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={theme} />}
      ListHeaderComponentStyle={{
        paddingBottom: 20
      }}
      style={{
        backgroundColor: theme? '#10101E':'transparent',
        paddingHorizontal: 24,
        paddingTop: 57,
        marginTop:-25
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10
  },
  taskText: {

  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskTextDone: {
    textDecorationLine: 'line-through'
  }
})