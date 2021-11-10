import { StyleSheet } from 'react-native'; 

export const styles = StyleSheet.create({ 
  container: {
    paddingHorizontal: 20
  },  
  mainTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#555',
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 20
  },  
  inputContainer: {
    display: 'flex',
    width: '95%',
    backgroundColor: '#e5e5e5',
    borderRadius: 40,
    paddingLeft: 15,
    marginTop: 0,
    height: 50,
    borderColor: 'transparent'
  },
  input: {
    fontSize: 14,
    borderColor: 'transparent'
  },
  resultsContainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20
  },
  noResults: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  notFoundText: {
    fontSize: 30,
    fontWeight: '700'
  },
  subtitle: {
    color: '#999',
    fontWeight: '600'
  },
  smallText: {
    color: '#aaa',
    fontSize: 12,
    paddingLeft: 20
  }
})