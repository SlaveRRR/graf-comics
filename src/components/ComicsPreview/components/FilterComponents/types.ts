export interface FilterBarComponentProps {
  currentSort: string;
  onSelect: (criteria: string) => void;
  onClose: () => void;
}
