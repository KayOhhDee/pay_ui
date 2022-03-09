import Popover from './Popover';
import Card from './Card';
import Button from './Button';
import Tabs from './Tabs';

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Popover(theme),
    Card(theme),
    Button(theme),
    Tabs(theme),
  );
};