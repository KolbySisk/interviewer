import * as Styles from './styles';

type Props = {
  children: string;
  onClose?: Function;
  title: string;
};

const Modal = ({ children, onClose, title }: Props) => {
  return (
    <Styles.Overlay>
      <Styles.Modal>
        <Styles.Header>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Close src="/icon-x-menu.svg" onClick={onClose} />
        </Styles.Header>
        <Styles.Body>{children}</Styles.Body>
      </Styles.Modal>
    </Styles.Overlay>
  );
};

export default Modal;
