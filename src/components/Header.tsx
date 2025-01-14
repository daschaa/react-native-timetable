import React, { FC } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import WeekdayText from './WeekdayText';

export interface HeaderProps {
  timeTicksWidth: any;
  theme: any;
  headerStyle: any;
  weekdayScrollRef: any;
  formatWeekday?: (dayOfWeek: number, dayOfMonth: number) => string | React.FC;
}

const Header: FC<HeaderProps> = ({
  timeTicksWidth,
  theme,
  headerStyle,
  weekdayScrollRef,
  formatWeekday,
}) => {
  const styles = getStyles({ timeTicksWidth, theme });
  return (
    <View style={[styles.weekdayRow, headerStyle]}>
      <View style={styles.placeholder} />
      <ScrollView
        scrollEnabled={false}
        ref={weekdayScrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <WeekdayText renderWeekday={formatWeekday} />
      </ScrollView>
    </View>
  );
};

const getStyles = ({ timeTicksWidth, theme }) =>
  StyleSheet.create({
    weekdayRow: {
      flexDirection: 'row',
      height: 32,
      backgroundColor: theme.primary,
    },
    placeholder: {
      width: timeTicksWidth,
    },
    courseContainer: {
      flexDirection: 'row',
      backgroundColor: theme.background,
      width: '100%',
    },
    courseList: {
      flexDirection: 'column',
    },
  });

export default Header;
