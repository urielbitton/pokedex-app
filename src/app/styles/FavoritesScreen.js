import { StyleSheet } from 'react-native'; 

export const styles = StyleSheet.create({ 
  container: {  
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  favContainer: {
    paddingVertical: 20
  },
  toolbarText: {
    fontSize: 14,
    color: '#aaa',
  }
})