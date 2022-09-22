import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { Theme, ThemeObj } from '@constants/theme';
import { SettingsContainer, Select, SettingsTitle, SettingsWrapper } from './components';
import { setTheme } from '@slices/themeSlice';

export const Settings = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
      <SettingsWrapper>
        <p>Choose theme:</p>
        <Select onChange={(e) => dispatch(setTheme(e.target.value as Theme))} value={theme}>
          {Object.keys(ThemeObj).map((val) => {
            return (
              <option key={uuidv4()} value={val}>
                {val} theme
              </option>
            );
          })}
        </Select>
      </SettingsWrapper>
    </SettingsContainer>
  );
};
