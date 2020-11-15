import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  screenTitle: {
    fontSize: 26,
    fontWeight: '700',
  },
  separator: {
    height: 1,
    marginTop: 15,
    marginBottom:15,
    backgroundColor: '#ddd',
  },
  settingsContainer: {
    marginTop:15,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity:  0.12,
    shadowRadius: 20,
    elevation: 10,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingTitle: {
    fontSize:16,
    fontWeight: '500',
    width: 120,
    marginRight:20,
  },
  settingContentContainer: {
    flex:1,
    alignItems: 'flex-end',
  },
  settingContent: {
    color: '#777',
    textAlign: 'right',
  },
  languagePicker: {
    flex: 1,
    justifyContent: 'center',
    height: 160,
  },
  buttonsContainer: {
    alignItems: 'center',
    marginTop: 25,
    flex: 1,
    justifyContent: 'space-between',
    height: 110,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#0F4C81',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity:  0.4,
    shadowRadius: 10,
    elevation: 10,
    height: 50,
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
