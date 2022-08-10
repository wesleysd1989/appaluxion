import React, { useEffect, useRef } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ListItem, ListEmpty } from '../';
import { AnimatableContainer } from './styles';

function List({ loadMore, list, loading }) {
  const navigation = useNavigation();
  const viewRef = useRef(null);

  const renderItem = ({ item, index }) => (
    <ListItem
      item={item}
      index={index}
      animation="flipInX"
      navigation={navigation}
    />
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      viewRef.current.animate({ 0: { opacity: 0.5 }, 1: { opacity: 1 } });
    });
    return () => unsubscribe;
  }, [navigation]);

  return (
    <AnimatableContainer ref={viewRef} easing={'ease-in-out'} duration={500}>
      <FlatList
        refreshing={loading}
        data={list}
        keyExtractor={(_, i) => String(i)}
        numColumns={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 26,
          paddingBottom: 100,
        }}
        ListEmptyComponent={ListEmpty}
        onEndReachedThreshold={0.05}
        onEndReached={loadMore}
      />
    </AnimatableContainer>
  );
}

export default List;
