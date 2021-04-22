import React, { useState } from 'react';
import { FormClose } from 'grommet-icons';

import { Box, Button, Grommet, Select, Text } from 'grommet';
import { grommet } from 'grommet/themes';

const allSeasons = [
  'S01',
  'S02',
  'S03',
  'S04',
  'S05',
  'S06',
  'S07',
  'S08',
  'S09',
  'S10',
];

// Type annotations can only be used in TypeScript files.
// Remove ': React.FC'  if you are not using TypeScript.
const SelectSeasons: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);

  const onRemoveSeason = (season: string) => {
    setValue(val => val.filter(selectedSeason => selectedSeason !== season));
  };

  // Type annotations can only be used in TypeScript files.
  // Remove ': string'  if you are not using TypeScript.
  const renderSeason = (season: string) => (
    <Button
      key={`season_tag_${season}`}
      href="#"
      onClick={event => {
        event.preventDefault();
        event.stopPropagation();
        onRemoveSeason(season);
      }}
      onFocus={event => event.stopPropagation()}
    >
      <Box
        align="center"
        direction="row"
        gap="xsmall"
        pad={{ vertical: 'xsmall', horizontal: 'small' }}
        margin="xsmall"
        background="accent-1"
        round="large"
      >
        <Text size="small" color="white">
          {season}
        </Text>
        <Box background="white" round="full" margin={{ left: 'xsmall' }}>
          <FormClose
            color="accent-1"
            size="small"
            style={{ width: '12px', height: '12px' }}
          />
        </Box>
      </Box>
    </Button>
  );

  const renderOption = (
    option: string,
    index: number,
    options: string[],
    state: { active: boolean; disabled: boolean; selected: boolean },
  ) => (
    <Box pad="small" background={state.active ? 'active' : undefined}>
      {option}
    </Box>
  );

  return (
    <Grommet full theme={grommet}>
      <Box fill align="center" justify="center">
        <Select
          closeOnChange={false}
          multiple
          value={value}
          options={allSeasons}
          disabled={[2, 6]}
          onChange={({ value: nextValue }) => {
            setValue([...nextValue].sort());
          }}
          valueLabel={
            <Box wrap direction="row" width="small">
              {value && value.length ? (
                value.map(val => renderSeason(val))
              ) : (
                <Box
                  pad={{ vertical: 'xsmall', horizontal: 'small' }}
                  margin="xsmall"
                >
                  Select Season
                </Box>
              )}
            </Box>
          }
        >
          {renderOption}
        </Select>
      </Box>
    </Grommet>
  );
};

export const Seasons = () => <SelectSeasons />;

Seasons.storyName = 'Seasons';

export default {
  title: 'Input/Select/Seasons',
};
