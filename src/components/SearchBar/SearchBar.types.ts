type SearchSubmitCallback = (searchText: string) => void;

export type SearchBarProps = {
  searchSubmit: SearchSubmitCallback;
  inputStatusError: boolean;
  inputMessageError: string;
};
