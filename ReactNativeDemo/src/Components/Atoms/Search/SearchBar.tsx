import React from 'react';
import {
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

/**
 * @param props The user to render
 * @returns A rendered View with all of the user data
 */
const SearchBar = (props: {onChange: (searchedText: String) => void}) => {
  /**
   * Update the parent about the new text
   * @param e event returned by the rn TextInput component
   */
  const onChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const value = e.nativeEvent.text;
    props.onChange?.(value);
  };

  // TODO: i18n
  return (
    <TextInput
      placeholder={'Seach someone name or username...'}
      onChange={onChange}
      style={styles.searchBar}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    margin: 8,
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#ffffff',
  },
});

export default SearchBar;
