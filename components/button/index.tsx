import * as Styles from './styles';

type Props = {
  children: string;
  callback?: Function;
}

const Button = ({children, callback}: Props) => {
  return <Styles.Button onClick={callback}>{children}</Styles.Button>
}

export default Button;