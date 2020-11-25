import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  icon: {
    fontSize: 18,
  },
  itemContent: {
    marginLeft:10,
  },
  itemContentTitle: {
    fontWeight: '500',
    textAlign: 'left',
  },
  itemContentCategory: {
    marginTop: 2,
    fontSize: 12,
    color: '#777',
    textAlign: 'left',
  },
  itemContentStatusContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  itemContentStatus: {
    fontSize: 14,
    fontWeight: '600',
    color: '#777',
    textAlign: 'left',
  },
  itemContentStatusInfo: {
    marginBottom: 1,
    marginLeft: 3,
    fontSize: 12,
    color: '#777',
    textAlign: 'left',
    fontWeight: '300',
  },
})
