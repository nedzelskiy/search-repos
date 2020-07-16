declare module 'react-throttle' {
  interface Props {
    time: string;
    children: React.ReactNode;
    handler: string;
  }
  export const Debounce: (props: Props) => any;
  export const Throttle: (props: Props) => any;
}
